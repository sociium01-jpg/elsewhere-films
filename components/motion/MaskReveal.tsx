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
  clip?: boolean;
  immediate?: boolean;
};

export function MaskReveal({
  lines,
  as = "div",
  className,
  lineClassName,
  delay = 0,
  id,
  clip = false,
  immediate = false,
}: MaskRevealProps) {
  const reduce = useReducedMotion();
  const { ref, visible } = useReveal(reduce, immediate);
  const Tag = motion[as];
  const shown = visible || reduce;

  return (
    <Tag id={id} ref={ref} className={cn("leading-snug", className)}>
      {lines.map((line, index) => {
        const lineStyles = Array.isArray(lineClassName)
          ? lineClassName[index]
          : lineClassName;

        return (
          <span
            key={`${line}-${index}`}
            className={cn(
              "block",
              clip && "overflow-hidden py-[0.18em]",
            )}
          >
            <motion.span
              className={cn("block", lineStyles)}
              initial={reduce ? false : clip ? { y: "100%" } : { opacity: 0, y: 10 }}
              animate={
                shown
                  ? clip
                    ? { y: "0%" }
                    : { opacity: 1, y: 0 }
                  : clip
                    ? { y: "100%" }
                    : { opacity: 0, y: 10 }
              }
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
