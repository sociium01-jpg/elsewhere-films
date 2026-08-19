import { SiteFrame } from "@/components/layout/SiteFrame";
import { Contact } from "@/components/sections/Contact";
import { FilmStages } from "@/components/sections/FilmStages";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Mission } from "@/components/sections/Mission";
import { Partnerships } from "@/components/sections/Partnerships";
import { PathwayIntelligence } from "@/components/sections/PathwayIntelligence";
import { Productions } from "@/components/sections/Productions";
import { Vision } from "@/components/sections/Vision";

export default function HomePage() {
  return (
    <SiteFrame>
      <main>
        <Hero />
        <Vision />
        <Mission />
        <Journey />
        <FilmStages />
        <PathwayIntelligence />
        <Productions />
        <Partnerships />
        <Contact />
      </main>
    </SiteFrame>
  );
}
