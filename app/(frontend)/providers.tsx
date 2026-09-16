"use client";

import { GrainOverlay } from "@/components/GrainOverlay";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <GrainOverlay />
      {children}
    </>
  );
}
