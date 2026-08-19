import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FilmStages } from "@/components/sections/FilmStages";
import { Partnerships } from "@/components/sections/Partnerships";

export const metadata: Metadata = {
  title: "Services — Elsewhere Films",
  description:
    "Every film has its journey. Tell us yours. Pathway partnership and creative partnership.",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <main>
        <PageHero
          eyebrow="Services"
          title={"EVERY FILM HAS\nITS JOURNEY."}
          subtitle="You made the film. Now comes the journey no one hands you a map for: Festivals, Markets, Partners, Distributors, Audiences."
          image="/images/stage-festival.webp"
          imageAlt="Audience recording a screening on a phone"
        />
        <FilmStages />
        <Partnerships />
      </main>
    </SiteFrame>
  );
}
