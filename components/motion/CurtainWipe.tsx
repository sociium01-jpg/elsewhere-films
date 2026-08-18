"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, viewportOnce } from "@/lib/motion";
import type { ReactNode } from "react";

type CurtainWipeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function CurtainWipe({ children, className, delay = 0 }: CurtainWipeProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 origin-left bg-brand-red"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.image, ease: easeEnter, delay }}
        />
      ) : null}
    </div>
  );
}
