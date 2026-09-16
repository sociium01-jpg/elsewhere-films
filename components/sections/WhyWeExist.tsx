import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { StillCaption } from "@/components/layout/StillCaption";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { HOME, STILL_CAPTION } from "@/lib/copy";

export function WhyWeExist() {
  return (
    <section className="bg-ink-white" aria-labelledby="why-heading">
      <RevealGroup className="mx-auto grid max-w-frame gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:px-14">
        <FadeUp grouped className="lg:col-span-5">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
            Why we exist
          </p>
          <h2
            id="why-heading"
            className="mt-6 max-w-[16ch] font-display text-[26px] font-bold leading-snug tracking-caps text-ink-charcoal md:text-[34px]"
          >
            {HOME.why.opening}
          </h2>
        </FadeUp>

        <FadeUp grouped className="lg:col-span-7 lg:pt-10">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden lg:-ml-8">
            <Image
              src="/images/vision-projector.webp"
              alt="Film projector throwing a beam of light"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-left"
            />
          </div>
          <StillCaption>{STILL_CAPTION}</StillCaption>
          <div className="mt-8 space-y-6 font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]">
            {HOME.why.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-end sm:gap-10">
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
