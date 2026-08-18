"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useMinWidth } from "@/lib/use-min-width";
import type { ReactNode } from "react";

type KenBurnsProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  durationSec?: number;
};

export function KenBurns({
  children,
  className,
  reverse = false,
  durationSec = 12,
}: KenBurnsProps) {
  const reduce = useReducedMotion();
  const desktop = useMinWidth(768);

  if (reduce || !desktop) {
    return <div className={cn("relative h-full w-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("relative h-full w-full will-change-transform", className)}
      initial={{ scale: reverse ? 1.08 : 1 }}
      animate={{ scale: reverse ? 1 : 1.08 }}
      transition={{
        duration: durationSec,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
}
