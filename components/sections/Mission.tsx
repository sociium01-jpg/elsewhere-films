"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronMark } from "@/components/brand/ChevronMark";
import { DrawSVG } from "@/components/motion/DrawSVG";
import { FadeUp } from "@/components/motion/FadeUp";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { useMinWidth } from "@/lib/use-min-width";

export function Mission() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMinWidth(768);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.12, 0.12]);

  return (
    <section
      ref={ref}
      id="mission"
      aria-labelledby="mission-heading"
      className="relative overflow-hidden bg-ink-greyLight"
    >
      {/* TODO(asset): confirm licensed paper-grain treatment; texture extracted from the design PDF. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-cover bg-center opacity-35 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-frame px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="relative z-10 max-w-[620px]">
          <MaskReveal
            as="h2"
            id="mission-heading"
            className="font-display text-[28px] font-bold uppercase tracking-caps text-brand-red md:text-[34px]"
            lines={["MISSION"]}
          />
          {/* NOTE(copy): the reference shows the MISSION block carrying the same paragraph as VISION. Reproduced as-is per the preserve-text constraint — flag to the client for confirmation before launch. */}
          <FadeUp
            as="p"
            delay={0.12}
            className="mt-8 font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]"
          >
            We imagine a future where South Asian
            <br className="hidden md:block" /> independent films are discovered, celebrated
            <br className="hidden md:block" /> and sustained across the world - not by chance,
            <br className="hidden md:block" /> but by design! through thoughtful pathways.
          </FadeUp>
        </div>

        {reduce || !desktop ? (
          <span
            aria-hidden
            className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 text-ink-black/[0.08]"
          >
            <ChevronMark className="h-[280px] w-[320px] md:h-[360px] md:w-[400px]" />
          </span>
        ) : (
          <motion.span
            aria-hidden
            style={{ y, opacity }}
            className="pointer-events-none absolute -right-10 top-[8%] text-ink-black"
          >
            <DrawSVG durationSec={1.6}>
              <ChevronMark
                filled={false}
                className="h-[360px] w-[400px] lg:h-[440px] lg:w-[480px]"
              />
            </DrawSVG>
          </motion.span>
        )}
      </div>
    </section>
  );
}
