"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { duration, easeEnter } from "@/lib/motion";
import { useEffect, useRef, type ReactNode } from "react";

type BorderDrawBoxProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  onComplete?: () => void;
};

const sides = [
  { x1: 0, y1: 0, x2: 1, y2: 0 },
  { x1: 1, y1: 0, x2: 1, y2: 1 },
  { x1: 1, y1: 1, x2: 0, y2: 1 },
  { x1: 0, y1: 1, x2: 0, y2: 0 },
] as const;

export function BorderDrawBox({
  children,
  className,
  delay = 0,
  onComplete,
}: BorderDrawBoxProps) {
  const reduce = useReducedMotion();
  const segment = duration.border / sides.length;
  const done = useRef(false);

  useEffect(() => {
    if (!onComplete) return;
    const wait = reduce ? 0 : Math.round((delay + duration.border) * 1000 + 80);
    const id = window.setTimeout(() => {
      if (done.current) return;
      done.current = true;
      onComplete();
    }, wait);
    return () => window.clearTimeout(id);
  }, [delay, onComplete, reduce]);

  return (
    <div className={cn("relative", className)}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        {sides.map((side, index) => (
          <motion.line
            key={`${side.x1}-${side.y1}-${index}`}
            {...side}
            className="stroke-ink-white"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: reduce ? 0 : segment,
              ease: easeEnter,
              delay: reduce ? 0 : delay + index * segment,
            }}
            onAnimationComplete={
              index === sides.length - 1
                ? () => {
                    if (done.current) return;
                    done.current = true;
                    onComplete?.();
                  }
                : undefined
            }
          />
        ))}
      </svg>
      {children}
    </div>
  );
}
