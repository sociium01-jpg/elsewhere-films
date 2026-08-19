"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, viewportOnce } from "@/lib/motion";
import type { ReactNode } from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
      whileInView={reduce ? undefined : { clipPath: "inset(0 0% 0 0)" }}
      viewport={viewportOnce}
      transition={{ duration: duration.section, ease: easeEnter, delay }}
    >
      {children}
    </motion.div>
  );
}
