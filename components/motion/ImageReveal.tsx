"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import type { ReactNode } from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
      animate={
        reduce || visible
          ? { clipPath: "inset(0 0% 0 0)" }
          : { clipPath: "inset(0 100% 0 0)" }
      }
      transition={{ duration: duration.section, ease: easeEnter, delay }}
    >
      {children}
    </motion.div>
  );
}
