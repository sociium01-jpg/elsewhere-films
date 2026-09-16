import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { StillCaption } from "@/components/layout/StillCaption";
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
      <div className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
          Journey
        </p>
        <FadeUp>
          <h1
            id="journey-heading"
            className="mt-5 max-w-[18ch] font-display text-[26px] font-bold leading-snug tracking-caps text-ink-charcoal md:text-[36px]"
          >
            {SERVICES.journey.headline}
          </h1>
        </FadeUp>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {SERVICES.journey.stages.map((stage, index) => (
            <FadeUp key={stage.id} delay={index * 0.06} as="li">
              <article className="flex h-full flex-col bg-ink-white transition-transform duration-300 ease-enter hover:-translate-y-1">
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
                  <p className="mt-4 font-body text-[14px] font-light leading-relaxed tracking-body text-ink-charcoal">
                    {stage.body}
                  </p>
                  <StillCaption />
                </div>
              </article>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={0.2} className="mt-6">
          <article className="border border-dashed border-ink-charcoal/35 bg-transparent px-6 py-8 md:px-10">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-grey">
              {SERVICES.journey.beforeCut.title}
            </h2>
            <p className="mt-4 max-w-[62ch] font-body text-[14px] font-light leading-relaxed tracking-body text-ink-charcoal">
              {SERVICES.journey.beforeCut.body}
            </p>
            <Link
              href="#creative-partnership"
              className="mt-5 inline-block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8"
            >
              Creative Partnership →
            </Link>
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
