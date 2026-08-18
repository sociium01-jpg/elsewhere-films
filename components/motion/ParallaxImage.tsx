"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useMinWidth } from "@/lib/use-min-width";

type ParallaxImageProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export function ParallaxImage({
  children,
  className,
  speed = 0.85,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMinWidth(768);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const travel = (1 - speed) * 80;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const staticLayer = reduce || !desktop;

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {staticLayer ? (
        <div className="h-full w-full">{children}</div>
      ) : (
        <motion.div style={{ y }} className="h-[120%] w-full will-change-transform">
          {children}
        </motion.div>
      )}
    </div>
  );
}
