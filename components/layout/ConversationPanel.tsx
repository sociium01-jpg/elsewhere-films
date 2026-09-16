"use client";

import { AnimatePresence, motion, useDragControls, useReducedMotion } from "framer-motion";
import { FormEvent, useEffect, useId, useState, type PointerEvent } from "react";
import { Wordmark } from "@/components/layout/Wordmark";
import { useConversation } from "@/lib/conversation";
import { buttonLift } from "@/lib/button";
import { CTA, ENGAGEMENT_LINE, FILM_STAGES } from "@/lib/copy";
import { cn } from "@/lib/cn";
import { duration, easeEnter } from "@/lib/motion";

const FIELD =
  "mt-1 min-h-11 w-full border-0 border-b border-ink-charcoal/30 bg-transparent py-2 font-body text-[14px] text-ink-charcoal outline-none ring-0 placeholder:text-ink-grey focus:border-brand-red";

export function ConversationPanel() {
  const { open, setOpen } = useConversation();
  const titleId = useId();
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [desktop, setDesktop] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches,
  );
  const dragControls = useDragControls();
  const sheet = !desktop && !reduce;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

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

  return (
    <AnimatePresence>
      {open ? (
        <div key="conversation-sheet" className="fixed inset-0 z-[70]">
          <motion.button
            type="button"
            aria-label="Close conversation"
            className="absolute inset-0 bg-ink-black/45"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.page, ease: easeEnter }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={
              reduce ? false : desktop ? { x: "100%" } : { y: "100%" }
            }
            animate={desktop ? { x: 0, y: 0 } : { x: 0, y: 0 }}
            exit={desktop ? { x: "100%" } : { y: "100%" }}
            transition={{ duration: 0.32, ease: easeEnter }}
            drag={sheet ? "y" : false}
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.04, bottom: 0.45 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 88 || info.velocity.y > 420) setOpen(false);
            }}
            className={cn(
              "absolute flex w-full flex-col bg-ink-offWhite shadow-[0_-12px_40px_rgba(0,0,0,0.18)]",
              "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-2xl",
              "pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]",
              "md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:max-w-[420px] md:rounded-none",
              "md:shadow-[-16px_0_40px_rgba(0,0,0,0.18)]",
            )}
          >
            <div
              className="flex touch-none justify-center pb-1 pt-3 md:hidden"
              aria-hidden
              onPointerDown={(event: PointerEvent<HTMLDivElement>) => {
                dragControls.start(event);
              }}
            >
              <span className="h-1 w-10 rounded-full bg-ink-charcoal/25" />
            </div>

            <div className="flex items-center justify-between border-b border-ink-charcoal/10 px-6 py-4 md:py-5">
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
                className="inline-flex min-h-11 min-w-11 items-center justify-center font-display text-[11px] uppercase tracking-[0.18em] text-ink-grey hover:text-ink-charcoal"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]"
            >
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
                className={cn(
                  "mt-2 inline-flex min-h-11 items-center self-start rounded-full bg-brand-red px-7 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-white hover:bg-brand-redDeep",
                  buttonLift,
                )}
              >
                {CTA}
              </button>

              {status === "sent" ? (
                <p className="font-body text-[13px] text-ink-charcoal">
                  Thank you. We&apos;ll be in touch.
                </p>
              ) : null}
            </form>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
