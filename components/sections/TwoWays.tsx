"use client";

import { useState } from "react";
import { ConversationButton } from "@/components/layout/ConversationButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/lib/copy";

export function TwoWays() {
  const [active, setActive] = useState<"pathway" | "creative">("pathway");

  return (
    <section className="bg-ink-white" aria-labelledby="ways-heading">
      <div className="mx-auto grid max-w-frame px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red lg:col-span-12">
          Two ways
        </p>
        <FadeUp className="lg:col-span-10">
          <h2
            id="ways-heading"
            className="mt-5 font-display text-[22px] font-bold tracking-display text-ink-charcoal md:text-[28px]"
          >
            {SERVICES.twoWays.head}
          </h2>
        </FadeUp>

        <div className="mt-12 lg:col-span-12" onMouseLeave={() => setActive("pathway")}>
          <RevealGroup className="grid gap-4 lg:grid-cols-5">
            <FadeUp grouped className="lg:col-span-3">
              <article
                tabIndex={0}
                className={cn(
                  "flex h-full cursor-pointer flex-col border-l-2 border-brand-red bg-ink-charcoal px-8 py-10 text-ink-white md:px-12 md:py-14",
                  "shadow-[0_2px_8px_rgba(14,14,14,0.16)]",
                  "transition-[transform,box-shadow,opacity] duration-200 ease-enter",
                  "motion-reduce:transform-none motion-reduce:transition-none",
                  "md:hover:-translate-y-1 md:hover:shadow-[0_8px_20px_rgba(14,14,14,0.22)]",
                  "motion-reduce:hover:translate-y-0",
                  active === "pathway" ? "opacity-100" : "opacity-[0.72]",
                )}
                onMouseEnter={() => setActive("pathway")}
                onFocus={() => setActive("pathway")}
                onClick={() => setActive("pathway")}
              >
                <h3 className="font-display text-[20px] font-bold uppercase tracking-caps md:text-[24px]">
                  {SERVICES.twoWays.pathway.title}
                </h3>
                <p className="mt-6 max-w-measure font-body text-[15px] font-light leading-body tracking-body text-ink-offWhite">
                  {SERVICES.twoWays.pathway.body}
                </p>
              </article>
            </FadeUp>

            <FadeUp grouped className="lg:col-span-2">
              <article
                id="creative-partnership"
                tabIndex={0}
                className={cn(
                  "flex h-full cursor-pointer flex-col bg-ink-offWhite px-8 py-10 md:px-10 md:py-14",
                  "shadow-[0_1px_3px_rgba(14,14,14,0.08)]",
                  "transition-[transform,box-shadow,opacity] duration-200 ease-enter",
                  "motion-reduce:transform-none motion-reduce:transition-none",
                  "md:hover:-translate-y-0.5 md:hover:shadow-[0_4px_12px_rgba(14,14,14,0.12)]",
                  "motion-reduce:hover:translate-y-0",
                  active === "creative" ? "opacity-100" : "opacity-80",
                )}
                onMouseEnter={() => setActive("creative")}
                onFocus={() => setActive("creative")}
                onClick={() => setActive("creative")}
              >
                <h3 className="font-display text-[16px] font-semibold uppercase tracking-caps text-ink-charcoal">
                  {SERVICES.twoWays.creative.title}
                </h3>
                <p className="mt-5 font-body text-[14px] font-light leading-body tracking-body text-ink-charcoal">
                  {SERVICES.twoWays.creative.body}
                </p>
              </article>
            </FadeUp>
          </RevealGroup>
        </div>

        <div className="mt-12 lg:col-span-12">
          <ConversationButton variant="solid" />
        </div>
      </div>
    </section>
  );
}
