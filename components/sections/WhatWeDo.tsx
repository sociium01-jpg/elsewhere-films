import Link from "next/link";
import { OfferingMark } from "@/components/brand/OfferingMark";
import { FadeUp } from "@/components/motion/FadeUp";
import { HOME, OFFERINGS_HOME } from "@/lib/copy";

export function WhatWeDo() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="what-heading">
      <div className="mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
          What we do
        </p>
        <FadeUp>
          <h2
            id="what-heading"
            className="mt-6 max-w-[36ch] font-display text-[18px] font-semibold leading-snug tracking-caps text-ink-charcoal md:text-[22px]"
          >
            {HOME.whatWeDo.intro}
          </h2>
        </FadeUp>

        <ol className="mt-16 divide-y divide-ink-charcoal/10 border-y border-ink-charcoal/10">
          {OFFERINGS_HOME.map((offering, index) => (
            <FadeUp key={offering.name} delay={index * 0.05} as="li">
              <article className="grid gap-4 py-10 md:grid-cols-[88px_1fr] md:gap-10">
                <div className="text-brand-red">
                  <p className="font-display text-[12px] font-semibold tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <OfferingMark delay={index * 0.08} />
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold tracking-caps text-ink-charcoal md:text-[18px]">
                    {offering.name}
                  </h3>
                  <p className="mt-4 max-w-[62ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
                    {offering.body}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </ol>

        <Link
          href="/services"
          className="mt-12 inline-block font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 transition-opacity hover:opacity-70"
        >
          {HOME.whatWeDo.seeHow} →
        </Link>
      </div>
    </section>
  );
}
