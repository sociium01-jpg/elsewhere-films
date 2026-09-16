import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { StillCaption } from "@/components/layout/StillCaption";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { textCtaLift } from "@/lib/button";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/lib/copy";

const STAGE_STILLS = [
  {
    image: "/images/stage-nearing.webp",
    alt: "Colour grading workstation",
  },
  {
    image: "/images/stage-festival.webp",
    alt: "Audience recording a screening",
  },
  {
    image: "/images/stage-circulation.webp",
    alt: "Cinema looking toward a bright screen",
  },
] as const;

export function JourneyLocator() {
  return (
    <section className="bg-ink-offWhite pt-28 md:pt-32" aria-labelledby="journey-heading">
      <div className="mx-auto grid max-w-frame px-5 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red lg:col-span-12">
          Journey
        </p>
        <FadeUp className="lg:col-span-10 xl:col-span-8">
          <h1
            id="journey-heading"
            className="mt-5 font-display text-[26px] font-bold leading-snug tracking-display text-ink-charcoal md:text-[36px]"
          >
            {SERVICES.journey.headline}
          </h1>
        </FadeUp>

        <RevealGroup as="ul" className="mt-12 grid gap-4 md:grid-cols-3 lg:col-span-12">
          {SERVICES.journey.stages.map((stage, index) => (
            <FadeUp key={stage.id} grouped as="li">
              <article className="flex h-full flex-col bg-ink-white md:transition-transform md:duration-300 md:ease-enter md:hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={STAGE_STILLS[index].image}
                    alt={STAGE_STILLS[index].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h2 className="font-display text-[14px] font-bold uppercase tracking-[0.16em] text-ink-charcoal">
                    {stage.title}
                  </h2>
                  <p className="mt-4 font-body text-[14px] font-light leading-body tracking-body text-ink-charcoal">
                    {stage.body}
                  </p>
                  <StillCaption />
                </div>
              </article>
            </FadeUp>
          ))}
        </RevealGroup>

        <FadeUp delay={0.2} className="mt-6 lg:col-span-12">
          <article className="border border-dashed border-ink-charcoal/35 bg-transparent px-6 py-8 md:px-10">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-grey">
              {SERVICES.journey.beforeCut.title}
            </h2>
            <p className="mt-4 max-w-measure font-body text-[14px] font-light leading-body tracking-body text-ink-charcoal">
              {SERVICES.journey.beforeCut.body}
            </p>
            <Link
              href="#creative-partnership"
              className={cn(
                "mt-5 inline-flex min-h-11 items-center font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8",
                textCtaLift,
              )}
            >
              Creative Partnership →
            </Link>
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
