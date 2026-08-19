"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { DashedRule } from "@/components/brand/DashedRule";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { SplitWords } from "@/components/motion/SplitWords";

const FIELD =
  "w-full border-0 border-b border-ink-white bg-transparent py-2 font-body text-[14px] text-ink-white outline-none ring-0 placeholder:text-ink-white/30 focus:border-brand-red";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form-name", "contact");
    setStatus("sending");

    try {
      const params = new URLSearchParams();
      data.forEach((value, key) => {
        if (typeof value === "string") params.append(key, value);
      });
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!response.ok) throw new Error("Form error");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-[560px] scroll-mt-24 overflow-hidden bg-ink-black"
      aria-labelledby="contact-heading"
    >
      <Image
        src="/images/contact-set.webp"
        alt="Film crew and cameras silhouetted on a dimly lit set"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-ink-black/45" />

      <div className="relative z-10 mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <AnimatedHeading
          as="h2"
          id="contact-heading"
          mode="chars"
          text="CONTACT"
          className="text-center font-display text-[22px] font-bold uppercase tracking-caps text-ink-white md:text-[28px]"
        />
        <DashedRule className="mt-3" />
        <p className="mt-4 text-center font-body text-[14px] font-light tracking-body text-ink-white">
          <SplitWords text="We are looking forward to hear from you." delay={0.2} />
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="mt-12 max-w-[420px] space-y-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="block font-body text-[13px] tracking-body text-ink-white">
            Your Lovely Name:
            <input type="text" name="name" autoComplete="name" className={FIELD} />
          </label>
          <label className="block font-body text-[13px] tracking-body text-ink-white">
            E-Mail: *
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={FIELD}
            />
          </label>
          <label className="block font-body text-[13px] tracking-body text-ink-white">
            Tell Us Everything:
            <textarea name="message" rows={3} className={`${FIELD} resize-none`} />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-brand-red px-8 py-2.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink-white transition-colors hover:bg-brand-redDeep disabled:opacity-60"
          >
            {status === "sending" ? "Sending" : "Submit"}
          </button>

          {status === "sent" ? (
            <p className="font-body text-[13px] text-ink-white">
              Thank you. We&apos;ll be in touch.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="font-body text-[13px] text-brand-redSoft">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
