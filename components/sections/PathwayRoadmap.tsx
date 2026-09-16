"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { PATHWAY_MODEL } from "@/lib/copy";
import { duration, easeEnter, stagger } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

export function PathwayRoadmap() {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(Boolean(reduce));
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    if (reduce) {
      line.style.strokeDasharray = "none";
      line.style.strokeDashoffset = "0";
      line.style.animation = "none";
      return;
    }

    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
    line.style.animation = "none";

    if (!visible) return;

    line.style.animation = `draw-svg 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards`;
  }, [reduce, visible]);

  return (
    <div ref={ref} className="relative mt-16">
      <div
        className="pointer-events-none absolute bottom-4 left-[11px] top-4 w-px md:left-[15px]"
        aria-hidden
      >
        <svg
          viewBox="0 0 2 100"
          preserveAspectRatio="none"
          className="h-full w-[2px] overflow-visible"
        >
          <line
            ref={lineRef}
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
            className="text-ink-charcoal/20"
          />
        </svg>
      </div>

      <ol className="space-y-12 md:space-y-14">
        {PATHWAY_MODEL.steps.map((step, index) => (
          <motion.li
            key={step.heading}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={
              reduce || visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            transition={{
              duration: duration.text,
              ease: easeEnter,
              delay: reduce ? 0 : index * stagger.child,
            }}
          >
            <article className="grid grid-cols-[24px_1fr] gap-5 md:grid-cols-[32px_1fr] md:gap-10">
              <div className="relative flex justify-center pt-1.5">
                <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-brand-red" />
              </div>
              <div>
                <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-[16px] font-bold tracking-display text-ink-charcoal md:text-[18px]">
                  {step.heading}
                </h2>
                <p className="mt-3 max-w-lede font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
                  {step.line}
                </p>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
