"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

type MagneticStillProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function MagneticStill({
  src,
  alt,
  sizes = "100vw",
  className,
  imageClassName,
  priority = false,
}: MagneticStillProps) {
  const reduce = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce || !frame.current || !media.current) return;
    const rect = frame.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    media.current.style.transform = `translate3d(${x * 3}%, ${y * 3}%, 0) scale(1.06)`;
  }

  function onLeave() {
    if (!media.current) return;
    media.current.style.transform = "translate3d(0,0,0) scale(1.06)";
  }

  return (
    <div
      ref={frame}
      className={cn("overflow-hidden", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={media}
        className="relative h-full w-full scale-105 will-change-transform"
        style={{ transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}
