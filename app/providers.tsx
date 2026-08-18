"use client";

import { GrainOverlay } from "@/components/GrainOverlay";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <GrainOverlay />
      {children}
    </>
  );
}
