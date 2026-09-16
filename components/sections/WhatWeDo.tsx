import Link from "next/link";
import { OfferingMark } from "@/components/brand/OfferingMark";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { cn } from "@/lib/cn";
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

        <RevealGroup
          as="ul"
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {OFFERINGS_HOME.map((offering, index) => {
            const isCoProduction = offering.name === "Co-production";
            return (
              <FadeUp
                key={offering.name}
                grouped
                as="li"
                className={cn(isCoProduction && "md:col-span-2")}
              >
                <article
                  className={cn(
                    "h-full border border-ink-charcoal/10 px-6 py-7 md:px-8 md:transition-transform md:duration-300 md:ease-enter md:hover:-translate-y-1",
                    isCoProduction ? "bg-transparent" : "bg-ink-white",
                  )}
                >
                  <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[15px] font-bold tracking-caps text-ink-charcoal md:text-[17px]">
                    {offering.name}
                  </h3>
                  <OfferingMark delay={index * 0.06} />
                  <p className="mt-4 max-w-[54ch] font-body text-[14px] font-light leading-body tracking-body text-ink-charcoal md:text-[15px]">
                    {offering.body}
                  </p>
                </article>
              </FadeUp>
            );
          })}
        </RevealGroup>

        <FadeUp delay={0.12} className="mt-10">
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8"
          >
            {HOME.whatWeDo.seeHow} →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
