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
  stagger = 0.045,
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-baseline leading-[1.35]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? false : { y: "105%", opacity: 0 }}
            animate={
              reduce || visible ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }
            }
            transition={{
              duration: duration.text,
              ease: easeEnter,
              delay: delay + index * stagger,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
