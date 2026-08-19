"use client";

import Image from "next/image";
import { DashedRule } from "@/components/brand/DashedRule";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { KenBurns } from "@/components/motion/KenBurns";
import { SplitWords } from "@/components/motion/SplitWords";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-ink-black md:min-h-[70vh]">
      <div className="absolute inset-0">
        <KenBurns className="h-full w-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </KenBurns>
        <div className="absolute inset-0 bg-ink-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(14,14,14,0.75)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-frame px-5 pb-16 pt-32 md:px-10 md:pb-20 lg:px-14">
        {eyebrow ? (
          <p className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
            <SplitWords text={eyebrow} />
          </p>
        ) : null}
        <AnimatedHeading
          as="h1"
          mode="chars"
          text={title}
          className="max-w-[16ch] font-display text-[32px] font-bold uppercase leading-tight tracking-caps text-ink-white md:text-[48px] lg:text-[56px]"
        />
        <DashedRule className="mx-0 mt-5" />
        {subtitle ? (
          <p className="mt-6 max-w-[46ch] font-body text-[15px] font-light leading-body tracking-body text-ink-offWhite">
            <SplitWords text={subtitle} delay={0.35} stagger={0.035} />
          </p>
        ) : null}
      </div>
    </section>
  );
}
