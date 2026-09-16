import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { EngagementClose } from "@/components/sections/EngagementClose";
import { JourneyLocator } from "@/components/sections/JourneyLocator";
import { ScopeDetail } from "@/components/sections/ScopeDetail";
import { TwoWays } from "@/components/sections/TwoWays";

export const metadata: Metadata = {
  title: "Services — Elsewhere Films",
  description:
    "Where is your film on its journey? Pathway partnership and creative partnership.",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <main>
        <JourneyLocator />
        <TwoWays />
        <ScopeDetail />
        <EngagementClose />
      </main>
    </SiteFrame>
  );
}
