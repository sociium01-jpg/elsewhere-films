"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter, stagger, viewportOnce } from "@/lib/motion";

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
  const Tag = motion[as];

  return (
    <Tag id={id} className={cn(className)}>
      {lines.map((line, index) => {
        const lineStyles = Array.isArray(lineClassName)
          ? lineClassName[index]
          : lineClassName;

        return (
          <span key={`${line}-${index}`} className="block overflow-hidden">
            <motion.span
              className={cn("block", lineStyles)}
              initial={reduce ? false : { y: "110%" }}
              whileInView={reduce ? undefined : { y: "0%" }}
              viewport={viewportOnce}
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
