import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { StillCaption } from "@/components/layout/StillCaption";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { HOME, STILL_CAPTION } from "@/lib/copy";

export function WhyWeExist() {
  return (
    <section className="bg-ink-white" aria-labelledby="why-heading">
      <RevealGroup className="mx-auto grid max-w-frame gap-10 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-14 lg:px-14">
        <FadeUp grouped className="lg:col-span-10 xl:col-span-9">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
            Why we exist
          </p>
          <h2
            id="why-heading"
            className="mt-6 font-display text-[24px] font-bold leading-snug tracking-display text-ink-charcoal md:text-[32px] lg:text-[34px]"
          >
            {HOME.why.opening}
          </h2>
        </FadeUp>

        <FadeUp grouped className="lg:col-span-5">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/vision-projector.webp"
              alt="Film projector throwing a beam of light"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-left"
            />
          </div>
          <StillCaption>{STILL_CAPTION}</StillCaption>
        </FadeUp>

        <FadeUp grouped className="lg:col-span-6 lg:col-start-7 lg:pt-2">
          <div className="max-w-measure space-y-6 font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]">
            {HOME.why.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-10">
            <Link
              href="/pathway-model"
              className="inline-flex min-h-11 items-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 transition-opacity hover:opacity-70"
            >
              {HOME.why.pathwayLink} →
            </Link>
            <Link
              href="/about-us#advisory"
              className="inline-flex min-h-11 items-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 transition-opacity hover:opacity-70"
            >
              {HOME.why.peopleLink} →
            </Link>
          </div>
        </FadeUp>
      </RevealGroup>
    </section>
  );
}
