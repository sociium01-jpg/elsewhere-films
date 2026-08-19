"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CameraIcon } from "@/components/brand/CameraIcon";
import { ChevronMark } from "@/components/brand/ChevronMark";
import { FadeUp } from "@/components/motion/FadeUp";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { useMinWidth } from "@/lib/use-min-width";

export function Productions() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMinWidth(768);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section
      ref={ref}
      id="productions"
      className="relative overflow-hidden bg-[#6F6F6F] scroll-mt-24"
      aria-labelledby="productions-heading"
    >
      {reduce || !desktop ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 top-8 text-ink-white/10 md:top-10"
        >
          <ChevronMark className="h-[280px] w-[320px] md:h-[360px] md:w-[400px]" />
        </span>
      ) : (
        <motion.span
          aria-hidden
          style={{ y }}
          className="pointer-events-none absolute -right-4 top-6 text-ink-white/15 lg:right-10"
        >
          <ChevronMark className="h-[380px] w-[430px]" />
        </motion.span>
      )}

      <div className="relative mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,340px)] md:items-start">
          <MaskReveal
            as="h2"
            id="productions-heading"
            className="font-display text-[28px] font-bold uppercase tracking-caps text-ink-white md:text-[36px]"
            lines={["PRODUCTIONS"]}
          />
          <FadeUp
            as="p"
            className="font-display text-[15px] font-semibold uppercase leading-snug tracking-caps text-ink-white/85 md:pt-2 md:text-[17px]"
          >
            Some films ask
            <br />
            for guidance.
            <br />
            Others ask for
            <br />
            partners.
          </FadeUp>
        </div>

        <div className="mt-14 flex flex-col items-start gap-8 sm:flex-row sm:items-end">
          <CameraIcon className="h-28 w-36 shrink-0 text-ink-white md:h-32 md:w-40" />
          <p className="max-w-[34ch] font-display text-[12px] font-light uppercase leading-relaxed tracking-[0.16em] text-ink-white/90 md:text-[13px]">
            Elsewhere develops,
            <br />
            produces and co-produces
            <br />
            independent fiction and
            <br />
            documentary films,
            <br />
            working alongside
            <br />
            filmmakers from
            <br />
            script to screen -
            <br />
            and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
