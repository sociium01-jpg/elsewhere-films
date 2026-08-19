"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, viewportOnce } from "@/lib/motion";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  once = true,
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            whileInView={reduce ? undefined : { y: "0%", opacity: 1 }}
            viewport={once ? viewportOnce : { amount: 0.35 }}
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
