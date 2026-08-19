import Link from "next/link";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { CountUp } from "@/components/motion/CountUp";
import { FadeUp } from "@/components/motion/FadeUp";
import { SetParallaxBand } from "@/components/sections/SetParallaxBand";

export function PathwayIntelligence() {
  return (
    <section id="know-hub" className="scroll-mt-24" aria-labelledby="pathway-heading">
      <div className="bg-brand-red">
        <div className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-white md:text-[12px]">
            PATHWAY INTELLIGENCE
          </p>
          <AnimatedHeading
            as="h2"
            id="pathway-heading"
            mode="lines"
            text={"NO TWO FILMS\nTRAVEL THE SAME WAY."}
            className="mt-6 max-w-[18ch] font-display text-[28px] font-bold uppercase leading-[1.15] tracking-caps text-ink-white md:text-[40px] lg:text-[46px]"
          />
          <AnimatedHeading
            as="p"
            mode="words"
            delay={0.15}
            text="BUT PATTERNS DO EXIST."
            className="mt-5 font-display text-[16px] font-semibold uppercase tracking-caps text-ink-white md:text-[18px]"
          />

          <FadeUp className="mt-10 max-w-[640px] font-display text-[12px] font-light uppercase leading-relaxed tracking-[0.14em] text-ink-white md:text-[13px]">
            <p>Over the years, we&apos;ve studied the journeys of more than</p>
            <p className="mt-4 font-bold tracking-[0.16em] md:text-[18px]">
              <CountUp to={300} className="tabular-nums" /> South Asian
              <br />
              independent films.
            </p>
            <p className="mt-4">Some travelled widely. Some quietly stopped.</p>
            <p className="mt-4">Those journeys taught us something.</p>
            <p className="mt-4 max-w-[52ch]">
              Combined with the judgement of filmmakers, programmers and industry
              practitioners, they help us make better decisions with every new film
              we work on.
            </p>
          </FadeUp>

          <div className="mt-12 flex justify-end">
            <Link
              href="#journey"
              className="rounded-full bg-ink-white px-6 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-red transition-opacity hover:opacity-90 md:px-8 md:text-[12px]"
            >
              Explore the pathway model
            </Link>
          </div>
        </div>
      </div>

      <SetParallaxBand />
    </section>
  );
}
