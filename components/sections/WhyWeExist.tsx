import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { HOME } from "@/lib/copy";

export function WhyWeExist() {
  return (
    <section className="bg-ink-white" aria-labelledby="why-heading">
      <div className="mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
          Why we exist
        </p>
        <FadeUp>
          <h2
            id="why-heading"
            className="mt-6 max-w-[22ch] font-display text-[24px] font-bold leading-snug tracking-caps text-ink-charcoal md:text-[32px]"
          >
            {HOME.why.opening}
          </h2>
        </FadeUp>
        <div className="mt-10 max-w-[62ch] space-y-6 font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]">
          {HOME.why.body.map((paragraph) => (
            <FadeUp key={paragraph.slice(0, 24)} as="p">
              {paragraph}
            </FadeUp>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-10">
          <Link
            href="/pathway-model"
            className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 transition-opacity hover:opacity-70"
          >
            {HOME.why.pathwayLink} →
          </Link>
          <Link
            href="/about-us#advisory"
            className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 transition-opacity hover:opacity-70"
          >
            {HOME.why.peopleLink} →
          </Link>
        </div>
      </div>
    </section>
  );
}
