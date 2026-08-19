"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, stagger } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

type MaskRevealProps = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  lineClassName?: string | string[];
  delay?: number;
  id?: string;
};

export function MaskReveal({
  lines,
  as = "div",
  className,
  lineClassName,
  delay = 0,
  id,
}: MaskRevealProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce);
  const Tag = motion[as];

  return (
    <Tag id={id} ref={ref} className={cn("leading-tight", className)}>
      {lines.map((line, index) => {
        const lineStyles = Array.isArray(lineClassName)
          ? lineClassName[index]
          : lineClassName;

        return (
          <span key={`${line}-${index}`} className="block overflow-hidden py-[0.08em]">
            <motion.span
              className={cn("block", lineStyles)}
              initial={reduce ? false : { y: "100%" }}
              animate={reduce || visible ? { y: "0%" } : { y: "100%" }}
              transition={{
                duration: duration.text,
                ease: easeEnter,
                delay: delay + index * stagger.line,
              }}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
