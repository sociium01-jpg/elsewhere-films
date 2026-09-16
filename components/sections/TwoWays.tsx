"use client";

import { ConversationButton } from "@/components/layout/ConversationButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { SERVICES } from "@/lib/copy";

export function TwoWays() {
  return (
    <section className="bg-ink-white" aria-labelledby="ways-heading">
      <div className="mx-auto max-w-frame px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
          Two ways
        </p>
        <FadeUp>
          <h2
            id="ways-heading"
            className="mt-5 font-display text-[22px] font-bold tracking-caps text-ink-charcoal md:text-[28px]"
          >
            {SERVICES.twoWays.head}
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <FadeUp className="lg:col-span-3">
            <article className="flex h-full flex-col border-l-2 border-brand-red bg-ink-charcoal px-8 py-10 text-ink-white md:px-12 md:py-14">
              <h3 className="font-display text-[20px] font-bold uppercase tracking-caps md:text-[24px]">
                {SERVICES.twoWays.pathway.title}
              </h3>
              <p className="mt-6 max-w-[46ch] font-body text-[15px] font-light leading-body tracking-body text-ink-offWhite">
                {SERVICES.twoWays.pathway.body}
              </p>
            </article>
          </FadeUp>

          <FadeUp delay={0.08} className="lg:col-span-2" offset={false}>
            <article
              id="creative-partnership"
              className="flex h-full flex-col bg-ink-offWhite px-8 py-10 md:px-10 md:py-14"
            >
              <h3 className="font-display text-[16px] font-semibold uppercase tracking-caps text-ink-charcoal">
                {SERVICES.twoWays.creative.title}
              </h3>
              <p className="mt-5 font-body text-[14px] font-light leading-body tracking-body text-ink-charcoal">
                {SERVICES.twoWays.creative.body}
              </p>
            </article>
          </FadeUp>
        </div>

        <div className="mt-12">
          <ConversationButton variant="solid" />
        </div>
      </div>
    </section>
  );
}
