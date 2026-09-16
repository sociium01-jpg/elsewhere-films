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
  stagger = 0.02,
}: SplitCharsProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const chars = Array.from(text);
  const shown = reduce || visible;

  return (
    <span ref={ref} className={cn("inline", className)}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{
            duration: duration.text,
            ease: easeEnter,
            delay: delay + index * stagger,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
