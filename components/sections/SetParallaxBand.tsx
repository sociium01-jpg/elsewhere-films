"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function SetParallaxBand() {
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;

    if (reduce) {
      gsap.set(media, { y: 0 });
      return;
    }

    const apply = () => {
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh - rect.top) / (vh + rect.height);
      const p = Math.min(1, Math.max(0, progress));
      const travel = rect.height * 0.42;
      gsap.set(media, { y: (0.5 - p) * 2 * travel, force3D: true });
    };

    apply();
    gsap.ticker.add(apply);

    return () => {
      gsap.ticker.remove(apply);
    };
  }, [reduce]);

  return (
    <div
      ref={frameRef}
      className="relative h-[56vh] min-h-[320px] w-full overflow-hidden md:h-[72vh] md:min-h-[460px]"
    >
      <div
        ref={mediaRef}
        className="absolute inset-x-0 -top-1/2 h-[200%] w-full will-change-transform"
      >
        <Image
          src="/images/pathway-set.webp"
          alt="Film crew silhouetted against a warmly lit night set"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
