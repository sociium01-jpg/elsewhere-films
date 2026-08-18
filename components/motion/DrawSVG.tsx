"use client";

import { useReducedMotion } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactElement,
  type SVGProps,
} from "react";
import { cn } from "@/lib/cn";
import { viewportOnce } from "@/lib/motion";

type DrawSVGProps = {
  children: ReactElement<SVGProps<SVGSVGElement>>;
  className?: string;
  durationSec?: number;
  delay?: number;
};

export function DrawSVG({
  children,
  className,
  durationSec = 1.8,
  delay = 0,
}: DrawSVGProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const svg = hostRef.current?.querySelector("svg");
    if (!svg) return;

    const shapes = svg.querySelectorAll<SVGGeometryElement>(
      "path, line, polyline, polygon, circle, rect, ellipse",
    );

    if (reduce) {
      shapes.forEach((shape) => {
        shape.style.strokeDasharray = "none";
        shape.style.strokeDashoffset = "0";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          shapes.forEach((shape, index) => {
            const length = shape.getTotalLength();
            shape.style.strokeDasharray = `${length}`;
            shape.style.strokeDashoffset = `${length}`;
            shape.style.animation = `draw-svg ${durationSec}s cubic-bezier(0.22, 1, 0.36, 1) ${
              delay + index * 0.08
            }s forwards`;
          });
          observer.disconnect();
        });
      },
      { threshold: viewportOnce.amount },
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, [delay, durationSec, reduce]);

  const child = Children.only(children);
  if (!isValidElement(child)) return null;

  return (
    <div ref={hostRef} className={cn(className)}>
      {cloneElement(child, {
        className: cn(child.props.className),
      })}
    </div>
  );
}
