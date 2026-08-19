"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, viewportOnce } from "@/lib/motion";

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
  const chars = Array.from(text);

  return (
    <span className={cn("inline", className)}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? false : { y: "120%", opacity: 0 }}
            whileInView={reduce ? undefined : { y: "0%", opacity: 1 }}
            viewport={viewportOnce}
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
