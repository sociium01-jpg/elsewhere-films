"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { Wordmark } from "@/components/layout/Wordmark";
import { useConversation } from "@/lib/conversation";
import { CTA, ENGAGEMENT_LINE, FILM_STAGES } from "@/lib/copy";
import { cn } from "@/lib/cn";

const FIELD =
  "mt-1 w-full border-0 border-b border-ink-charcoal/30 bg-transparent py-2 font-body text-[14px] text-ink-charcoal outline-none ring-0 placeholder:text-ink-grey focus:border-brand-red";

export function ConversationPanel() {
  const { open, setOpen } = useConversation();
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        aria-label="Close conversation"
        className="absolute inset-0 bg-ink-black/45"
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col bg-ink-offWhite shadow-[-16px_0_40px_rgba(0,0,0,0.18)]"
      >
        <div className="flex items-center justify-between border-b border-ink-charcoal/10 px-6 py-5">
          <div>
            <Wordmark variant="onLight" className="h-7 md:h-7" />
            <h2
              id={titleId}
              className="mt-3 font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-charcoal"
            >
              {CTA}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-display text-[11px] uppercase tracking-[0.18em] text-ink-grey hover:text-ink-charcoal"
          >
            Close
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8">
          <p className="font-body text-[13px] font-light leading-relaxed tracking-body text-ink-charcoal">
            {ENGAGEMENT_LINE}
          </p>

          <label className="block font-body text-[12px] tracking-body text-ink-charcoal">
            Name
            <input type="text" name="name" required autoComplete="name" className={FIELD} />
          </label>
          <label className="block font-body text-[12px] tracking-body text-ink-charcoal">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={FIELD}
            />
          </label>
          <label className="block font-body text-[12px] tracking-body text-ink-charcoal">
            Film title
            <input type="text" name="filmTitle" required className={FIELD} />
          </label>
          <label className="block font-body text-[12px] tracking-body text-ink-charcoal">
            Stage
            <select name="stage" required defaultValue="" className={cn(FIELD, "rounded-none")}>
              <option value="" disabled>
                Select a stage
              </option>
              {FILM_STAGES.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </label>
          <label className="block font-body text-[12px] tracking-body text-ink-charcoal">
            One line on the film
            <input type="text" name="oneLine" required className={FIELD} />
          </label>
          <label className="block font-body text-[12px] tracking-body text-ink-charcoal">
            Screener link <span className="text-ink-grey">(optional)</span>
            <input type="url" name="screener" className={FIELD} />
          </label>

          <button
            type="submit"
            className="mt-2 self-start rounded-full bg-brand-red px-7 py-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-white hover:bg-brand-redDeep"
          >
            {CTA}
          </button>

          {status === "sent" ? (
            <p className="font-body text-[13px] text-ink-charcoal">
              Thank you. We&apos;ll be in touch.
            </p>
          ) : null}
        </form>
      </aside>
    </div>
  );
}
