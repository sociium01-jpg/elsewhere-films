import { SiteFrame } from "@/components/layout/SiteFrame";
import { HomeBanner } from "@/components/sections/HomeBanner";
import { VisionMissionBand } from "@/components/sections/VisionMissionBand";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyWeExist } from "@/components/sections/WhyWeExist";

export default function HomePage() {
  return (
    <SiteFrame>
      <main>
        <HomeBanner />
        <VisionMissionBand />
        <WhyWeExist />
        <WhatWeDo />
      </main>
    </SiteFrame>
  );
}
