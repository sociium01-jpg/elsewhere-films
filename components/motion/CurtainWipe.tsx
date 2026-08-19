"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import type { ReactNode } from "react";

type CurtainWipeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function CurtainWipe({ children, className, delay = 0 }: CurtainWipeProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {children}
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 origin-left bg-brand-red"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: visible ? 0 : 1 }}
          transition={{ duration: duration.image, ease: easeEnter, delay }}
        />
      ) : null}
    </div>
  );
}
