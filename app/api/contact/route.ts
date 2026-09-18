import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_FROM = "Elsewhere Films <onboarding@resend.dev>";
const DEFAULT_TO = "am@sociium.in";
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;
const HONEYPOT_KEYS = ["bot-field", "honeypot", "company", "website"] as const;

const LIMITS = {
  name: 200,
  email: 320,
  filmTitle: 300,
  stage: 200,
  oneLine: 500,
  screener: 2000,
  message: 5000,
} as const;

const hits = new Map<string, number[]>();

type ContactFields = {
  name: string;
  email: string;
  filmTitle: string;
  stage: string;
  oneLine: string;
  screener: string;
  message: string;
};

function json(
  status: number,
  body: { ok: true } | { ok: false; error: string },
  extra?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...extra,
    },
  });
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isEmail(value: string): boolean {
  return EMAIL_RE.test(value) && value.length <= LIMITS.email;
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 2000) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_MAX;
}

function honeypotFilled(raw: Record<string, unknown>): boolean {
  return HONEYPOT_KEYS.some((key) => asString(raw[key]).length > 0);
}

async function readBody(request: NextRequest): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("invalid");
    }
    return parsed as Record<string, unknown>;
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    const raw: Record<string, unknown> = {};
    form.forEach((value, key) => {
      if (typeof value === "string") raw[key] = value;
    });
    return raw;
  }

  const parsed: unknown = await request.json().catch(() => null);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("invalid");
  }
  return parsed as Record<string, unknown>;
}

function validate(raw: Record<string, unknown>): ContactFields | string {
  const name = asString(raw.name).slice(0, LIMITS.name);
  const email = asString(raw.email).slice(0, LIMITS.email);
  const filmTitle = asString(raw.filmTitle).slice(0, LIMITS.filmTitle);
  const stage = asString(raw.stage).slice(0, LIMITS.stage);
  const oneLine = asString(raw.oneLine).slice(0, LIMITS.oneLine);
  const screener = asString(raw.screener).slice(0, LIMITS.screener);
  const message = asString(raw.message).slice(0, LIMITS.message);

  if (!name || !email) return "Name and email are required.";
  if (!isEmail(email)) return "Please enter a valid email address.";

  const conversationAttempt = Boolean(filmTitle || stage || oneLine || screener);
  if (conversationAttempt && (!filmTitle || !stage || !oneLine)) {
    return "Film title, stage, and a one-line description are required.";
  }

  if (screener && !isHttpUrl(screener)) {
    return "Please enter a valid screener link.";
  }

  return { name, email, filmTitle, stage, oneLine, screener, message };
}

function destinationEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
}

function formatText(fields: ContactFields): string {
  const lines = [`Name: ${fields.name}`, `Email: ${fields.email}`];
  if (fields.filmTitle) lines.push(`Film title: ${fields.filmTitle}`);
  if (fields.stage) lines.push(`Stage: ${fields.stage}`);
  if (fields.oneLine) lines.push(`One line: ${fields.oneLine}`);
  if (fields.screener) lines.push(`Screener: ${fields.screener}`);
  if (fields.message) lines.push("", fields.message);
  return lines.join("\n");
}

function subjectFor(fields: ContactFields): string {
  return fields.filmTitle
    ? `Elsewhere conversation: ${sanitizeHeader(fields.filmTitle)}`
    : `Elsewhere contact: ${sanitizeHeader(fields.name)}`;
}

function deliveryFields(fields: ContactFields): Record<string, string> {
  const payload: Record<string, string> = {
    name: fields.name,
    email: fields.email,
    subject: subjectFor(fields),
    message: fields.message || formatText(fields),
  };
  if (fields.filmTitle) payload.filmTitle = fields.filmTitle;
  if (fields.stage) payload.stage = fields.stage;
  if (fields.oneLine) payload.oneLine = fields.oneLine;
  if (fields.screener) payload.screener = fields.screener;
  if (fields.message) payload.details = formatText(fields);
  return payload;
}

async function readJsonSafe(response: Response): Promise<Record<string, unknown> | null> {
  const parsed: unknown = await response.json().catch(() => null);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
  return parsed as Record<string, unknown>;
}

function deliveryRejected(response: Response, result: Record<string, unknown> | null): boolean {
  if (!response.ok) return true;
  if (result?.success === false || result?.ok === false) return true;
  return false;
}

async function sendWithResend(fields: ContactFields) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;

  if (!apiKey) {
    throw new Error("unconfigured");
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [destinationEmail()],
      reply_to: fields.email,
      subject: subjectFor(fields),
      text: formatText(fields),
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the contact email", response.status);
    throw new Error("delivery");
  }
}

async function sendWithWeb3Forms(fields: ContactFields) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    throw new Error("unconfigured");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      from_name: fields.name,
      replyto: fields.email,
      to: destinationEmail(),
      ...deliveryFields(fields),
    }),
  });

  const result = await readJsonSafe(response);
  if (deliveryRejected(response, result) || result?.success !== true) {
    console.error("Web3Forms rejected the contact submission", response.status);
    throw new Error("delivery");
  }
}

async function forwardToEndpoint(endpoint: string, fields: ContactFields) {
  let url: URL;
  try {
    url = new URL(endpoint);
  } catch {
    throw new Error("unconfigured");
  }

  const payload: Record<string, string> = {
    ...deliveryFields(fields),
    _replyto: fields.email,
    _subject: subjectFor(fields),
  };
  url.searchParams.forEach((value, key) => {
    payload[key] = value;
  });

  const web3 = url.hostname.includes("web3forms");
  const target = `${url.origin}${url.pathname}`;

  const response = await fetch(target, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await readJsonSafe(response);
  if (deliveryRejected(response, result) || (web3 && result?.success !== true)) {
    console.error("Contact form endpoint rejected the submission", response.status);
    throw new Error("delivery");
  }
}

export async function POST(request: NextRequest) {
  if (isRateLimited(clientIp(request))) {
    return json(
      429,
      { ok: false, error: "Too many submissions. Please wait a moment." },
      { "Retry-After": "60" },
    );
  }

  let raw: Record<string, unknown>;
  try {
    raw = await readBody(request);
  } catch {
    return json(400, { ok: false, error: "Invalid request." });
  }

  if (honeypotFilled(raw)) {
    return json(200, { ok: true });
  }

  const fields = validate(raw);
  if (typeof fields === "string") {
    return json(400, { ok: false, error: fields });
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  const fallback = process.env.CONTACT_FORM_ENDPOINT?.trim();

  try {
    if (resendKey) {
      await sendWithResend(fields);
    } else if (web3Key) {
      await sendWithWeb3Forms(fields);
    } else if (fallback) {
      await forwardToEndpoint(fallback, fields);
    } else {
      return json(503, { ok: false, error: "Contact form is not configured." });
    }
  } catch (error) {
    if (error instanceof Error && error.message === "unconfigured") {
      return json(503, { ok: false, error: "Contact form is not configured." });
    }
    return json(502, { ok: false, error: "Could not send message. Please try again." });
  }

  return json(200, { ok: true });
}
