export type ContactPayload = {
  name: string;
  email: string;
  filmTitle?: string;
  stage?: string;
  oneLine?: string;
  screener?: string;
  message?: string;
  "bot-field"?: string;
};

export async function submitContact(
  payload: ContactPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;

    if (!response.ok || !data?.ok) {
      return {
        ok: false,
        error: data?.error || "Something went wrong. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
