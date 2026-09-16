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
  grouped?: boolean;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
  offset = true,
  grouped = false,
}: FadeUpProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(grouped ? true : reduce);
  const Tag = motion[as];
  const hidden = offset ? fadeUp.hidden : { opacity: 0 };
  const shown = offset ? { opacity: 1, y: 0 } : { opacity: 1 };

  if (reduce) {
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  if (grouped) {
    return (
      <Tag
        className={cn(className)}
        variants={{
          hidden,
          visible: {
            ...shown,
            transition: { duration: duration.text, ease: easeEnter, delay },
          },
        }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      initial={hidden}
      animate={visible ? shown : hidden}
      transition={{ duration: duration.text, ease: easeEnter, delay }}
    >
      {children}
    </Tag>
  );
}
