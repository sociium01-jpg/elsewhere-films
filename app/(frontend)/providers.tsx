"use client";

import { GrainOverlay } from "@/components/GrainOverlay";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageIntro } from "@/components/motion/PageIntro";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <PageIntro />
      <ScrollProgress />
      <GrainOverlay />
      {children}
    </>
  );
}
