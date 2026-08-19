"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useMinWidth } from "@/lib/use-min-width";

type ParallaxImageProps = {
  children: ReactNode;
  className?: string;
  /** 1 = locked to scroll, lower = slower (more depth). */
  speed?: number;
  allowMobile?: boolean;
};

export function ParallaxImage({
  children,
  className,
  speed = 0.8,
  allowMobile = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMinWidth(768);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const travel = Math.round((1 - speed) * 180);
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
  const active = !reduce && (allowMobile || desktop);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {active ? (
        <motion.div
          style={{ y, scale }}
          className="absolute inset-x-0 -top-[22%] h-[144%] w-full will-change-transform"
        >
          {children}
        </motion.div>
      ) : (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
}
