"use client";

import { DrawSVG } from "@/components/motion/DrawSVG";

export function OfferingMark({ delay = 0 }: { delay?: number }) {
  return (
    <DrawSVG durationSec={0.7} delay={delay} className="mt-3 flex h-4 items-center">
      <svg viewBox="0 0 32 2" className="h-[2px] w-8 overflow-visible" aria-hidden>
        <line
          x1="0"
          y1="1"
          x2="32"
          y2="1"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-red"
        />
      </svg>
    </DrawSVG>
  );
}
