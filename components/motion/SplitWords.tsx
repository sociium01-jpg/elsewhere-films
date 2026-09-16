"use client";

import { motion, useReducedMotion } from "framer-motion";
import { duration, easeEnter } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const words = text.split(" ");
  const shown = reduce || visible;

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{
            duration: duration.text,
            ease: easeEnter,
            delay: delay + index * stagger,
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
