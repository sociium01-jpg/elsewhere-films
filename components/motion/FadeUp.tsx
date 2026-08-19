"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, fadeUp } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "p" | "div" | "span" | "li";
  offset?: boolean;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
  offset = true,
}: FadeUpProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const Tag = motion[as];
  const hidden = offset ? fadeUp.hidden : { opacity: 0 };
  const shown = offset ? fadeUp.visible : { opacity: 1 };

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      initial={reduce ? false : hidden}
      animate={reduce || visible ? shown : hidden}
      transition={{ duration: duration.text, ease: easeEnter, delay }}
    >
      {children}
    </Tag>
  );
}
