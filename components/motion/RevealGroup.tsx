"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { stagger as staggerTiming } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
  stagger?: number;
  delayChildren?: number;
};

export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = staggerTiming.child,
  delayChildren = 0,
}: RevealGroupProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const Tag = motion[as];

  if (reduce) {
    return (
      <Tag className={cn(className)}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      initial={reduce ? false : "hidden"}
      animate={reduce || visible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}
