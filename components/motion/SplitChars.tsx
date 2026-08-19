"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

type SplitCharsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitChars({
  text,
  className,
  delay = 0,
  stagger = 0.028,
}: SplitCharsProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const chars = Array.from(text);

  return (
    <span ref={ref} className={cn("inline", className)}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block overflow-hidden align-baseline leading-[1.35]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            animate={
              reduce || visible ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }
            }
            transition={{
              duration: duration.text,
              ease: easeEnter,
              delay: delay + index * stagger,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
