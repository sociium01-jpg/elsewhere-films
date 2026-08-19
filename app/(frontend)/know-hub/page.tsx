import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { SplitWords } from "@/components/motion/SplitWords";

export const metadata: Metadata = {
  title: "Know Hub — Elsewhere Films",
  description:
    "No two films travel the same way. But patterns do exist.",
};

const NOTES = [
  {
    href: "/know-hub#pathways",
    image: "/images/pathway-set.webp",
    alt: "Night film set with warm practical lights",
    title: "No two films travel the same way.",
    body: "But patterns do exist. Over the years, we've studied the journeys of more than 300 South Asian independent films.",
  },
  {
    href: "/services",
    image: "/images/journey-01.webp",
    alt: "Grip adjusting a diffusion screen on a film set",
    title: "Every film deserves its journey.",
    body: "You made the film. Now comes the journey no one hands you a map for: Festivals, Markets, Partners, Distributors, Audiences.",
  },
  {
    href: "/about-us",
    image: "/images/vision-projector.webp",
    alt: "Film projector throwing a beam of light",
    title: "Those journeys taught us something.",
    body: "Combined with the judgement of filmmakers, programmers and industry practitioners, they help us make better decisions with every new film we work on.",
  },
] as const;

export default function KnowHubPage() {
  return (
    <SiteFrame>
      <main>
        <PageHero
          eyebrow="Know Hub"
          title={"NO TWO FILMS\nTRAVEL THE SAME WAY."}
          subtitle="But patterns do exist. Some travelled widely. Some quietly stopped."
          image="/images/pathway-set.webp"
          imageAlt="Crew silhouettes on a warmly lit film set"
        />

        <section
          id="pathways"
          className="bg-ink-offWhite px-5 py-16 md:px-10 md:py-24 lg:px-14"
        >
          <div className="mx-auto max-w-frame">
            <AnimatedHeading
              as="h2"
              mode="words"
              text="PATHWAY INTELLIGENCE"
              className="text-center font-display text-[12px] font-semibold tracking-[0.28em] text-brand-red"
            />
            <AnimatedHeading
              as="h3"
              mode="lines"
              text={"OVER THE YEARS, WE'VE STUDIED\nTHE JOURNEYS OF MORE THAN\n300 SOUTH ASIAN INDEPENDENT FILMS."}
              className="mx-auto mt-6 max-w-[28ch] text-center font-display text-[22px] font-bold uppercase leading-tight tracking-caps text-ink-charcoal md:text-[28px]"
            />

            <ul className="mt-14 grid gap-8 md:grid-cols-3">
              {NOTES.map((note, index) => (
                <FadeUp key={note.title} delay={index * 0.1} as="li">
                  <Link href={note.href} className="group block h-full">
                    <article className="flex h-full flex-col overflow-hidden bg-ink-white">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={note.image}
                          alt={note.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-enter group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-5 py-6">
                        <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.12em] text-ink-charcoal">
                          <SplitWords text={note.title} delay={0.08} />
                        </h3>
                        <p className="mt-4 font-body text-[14px] font-light leading-body tracking-body text-ink-grey">
                          {note.body}
                        </p>
                      </div>
                    </article>
                  </Link>
                </FadeUp>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
