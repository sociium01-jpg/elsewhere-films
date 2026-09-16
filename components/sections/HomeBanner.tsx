"use client";

import Image from "next/image";
import { ConversationButton } from "@/components/layout/ConversationButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { HOME, STILL_CAPTION } from "@/lib/copy";

export function HomeBanner() {
  return (
    <section className="relative min-h-svh bg-ink-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Hands casting a shadow against a warm ochre wall"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-ink-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,14,14,0.72)_0%,transparent_42%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-frame flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-20 lg:px-14">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-white/80">
          {HOME.banner.eyebrow}
        </p>
        <MaskReveal
          as="h1"
          className="mt-6 max-w-[14ch] font-display text-[34px] font-bold uppercase leading-[1.12] tracking-caps text-ink-white md:text-[52px] lg:text-[60px]"
          lines={[...HOME.banner.headline]}
        />
        <FadeUp className="mt-6 max-w-[46ch] font-body text-[15px] font-light leading-body tracking-body text-ink-offWhite md:text-[16px]">
          <p>{HOME.banner.support}</p>
        </FadeUp>
        <FadeUp delay={0.12} className="mt-10">
          <ConversationButton variant="solid" />
        </FadeUp>
        <p className="mt-10 font-body text-[10px] font-light uppercase tracking-[0.2em] text-ink-white/50">
          {STILL_CAPTION}
        </p>
      </div>
    </section>
  );
}
