"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

const DUST = [
  { left: "28%", top: "38%", size: 2, duration: 9.2, delay: 0.1 },
  { left: "34%", top: "44%", size: 1, duration: 11.4, delay: 0.6 },
  { left: "41%", top: "36%", size: 2, duration: 8.1, delay: 1.2 },
  { left: "47%", top: "48%", size: 1, duration: 12.6, delay: 0.3 },
  { left: "53%", top: "41%", size: 2, duration: 10.2, delay: 1.8 },
  { left: "38%", top: "52%", size: 1, duration: 13.1, delay: 0.9 },
  { left: "58%", top: "33%", size: 1, duration: 9.8, delay: 2.1 },
  { left: "62%", top: "47%", size: 2, duration: 11.0, delay: 0.4 },
  { left: "31%", top: "58%", size: 1, duration: 14.2, delay: 1.5 },
  { left: "44%", top: "29%", size: 2, duration: 8.7, delay: 2.4 },
  { left: "51%", top: "56%", size: 1, duration: 12.0, delay: 0.7 },
  { left: "67%", top: "40%", size: 1, duration: 10.6, delay: 1.1 },
  { left: "36%", top: "31%", size: 2, duration: 13.5, delay: 1.9 },
  { left: "55%", top: "51%", size: 1, duration: 9.4, delay: 0.2 },
  { left: "49%", top: "37%", size: 2, duration: 11.8, delay: 2.7 },
  { left: "60%", top: "55%", size: 1, duration: 8.9, delay: 1.3 },
] as const;

function LightCone() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="vision-cone" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vision-sweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            {!reduce ? (
              <animate
                attributeName="x1"
                values="-40%;80%"
                dur="7s"
                repeatCount="indefinite"
              />
            ) : null}
            {!reduce ? (
              <animate
                attributeName="x2"
                values="0%;120%"
                dur="7s"
                repeatCount="indefinite"
              />
            ) : null}
          </linearGradient>
        </defs>
        <polygon points="18,48 100,18 100,82 18,52" fill="url(#vision-cone)" />
        <polygon points="18,48 100,18 100,82 18,52" fill="url(#vision-sweep)" opacity="0.45" />
      </svg>

      {!reduce
        ? DUST.map((mote, index) => (
            <motion.span
              key={`${mote.left}-${index}`}
              className="absolute rounded-full bg-ink-white"
              style={{
                left: mote.left,
                top: mote.top,
                width: mote.size,
                height: mote.size,
              }}
              animate={{
                x: [0, 14, -10, 6, 0],
                y: [0, -18, 8, -12, 0],
                opacity: [0.08, 0.55, 0.18, 0.4, 0.08],
              }}
              transition={{
                duration: mote.duration,
                delay: mote.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))
        : null}
    </div>
  );
}

export function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-ink-charcoal"
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto grid max-w-frame items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-8 md:px-10 md:py-0 lg:px-14">
        <ParallaxImage className="relative aspect-[4/3] md:aspect-auto md:h-[560px] lg:h-[640px]">
          <Image
            src="/images/vision-projector.webp"
            alt="Film projector throwing a beam of light"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left"
          />
          <LightCone />
        </ParallaxImage>

        <div className="relative z-10 max-w-[540px] pb-4 md:py-24">
          <MaskReveal
            as="h2"
            id="vision-heading"
            className="font-display text-[28px] font-bold uppercase tracking-caps text-brand-red md:text-[34px]"
            lines={["VISION"]}
          />
          <FadeUp
            as="p"
            delay={0.12}
            className="mt-8 font-body text-[15px] font-light leading-body tracking-body text-ink-offWhite md:text-[16px]"
          >
            We imagine a future where South Asian
            <br className="hidden md:block" /> independent films are discovered, celebrated
            <br className="hidden md:block" /> and sustained across the world - not by chance,
            <br className="hidden md:block" /> but by design! through thoughtful pathways.
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
