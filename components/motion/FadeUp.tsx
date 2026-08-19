"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, fadeUp, viewportOnce } from "@/lib/motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "p" | "div" | "span" | "li";
};

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeUpProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={cn(className)}
      initial={reduce ? false : fadeUp.hidden}
      whileInView={reduce ? undefined : fadeUp.visible}
      viewport={viewportOnce}
      transition={{ duration: duration.text, ease: easeEnter, delay }}
    >
      {children}
    </Tag>
  );
}
