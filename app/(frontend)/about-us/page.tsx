import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { Contact } from "@/components/sections/Contact";
import { Mission } from "@/components/sections/Mission";
import { Productions } from "@/components/sections/Productions";
import { Vision } from "@/components/sections/Vision";

export const metadata: Metadata = {
  title: "About Us — Elsewhere Films",
  description:
    "We imagine a future where South Asian independent films are discovered, celebrated and sustained across the world.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <main>
        <PageHero
          eyebrow="About Us"
          title={"ELSEWHERE DEVELOPS,\nPRODUCES AND CO-PRODUCES."}
          subtitle="Independent fiction and documentary films, working alongside filmmakers from script to screen - and beyond."
          image="/images/contact-set.webp"
          imageAlt="Silhouetted film crew against studio lighting"
        />
        <Vision />
        <Mission />
        <Productions />
        <Contact />
      </main>
    </SiteFrame>
  );
}
