"use client";

import { ConversationButton } from "@/components/layout/ConversationButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { MagneticStill } from "@/components/motion/MagneticStill";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { HOME, STILL_CAPTION } from "@/lib/copy";

export function HomeBanner() {
  return (
    <section className="relative min-h-svh bg-ink-black">
      <MagneticStill
        src="/images/hero.webp"
        alt="Hands casting a shadow against a warm ochre wall"
        priority
        className="absolute inset-0"
        imageClassName="object-[center_40%]"
      />
      <div className="absolute inset-0 bg-ink-black/28" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,14,14,0.72)_0%,rgba(14,14,14,0.2)_38%,transparent_62%)]" />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-frame content-end gap-10 px-5 pb-[max(4rem,env(safe-area-inset-bottom))] pt-[max(8rem,calc(env(safe-area-inset-top)+6rem))] md:px-10 md:pb-20 lg:grid-cols-12 lg:items-end lg:px-14">
        <div className="lg:col-span-7">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-white/80">
            {HOME.banner.eyebrow}
          </p>
          <MaskReveal
            as="h1"
            clip
            immediate
            className="mt-6 font-display text-[34px] font-bold uppercase leading-[1.12] tracking-caps text-ink-white md:text-[52px] lg:text-[60px]"
            lines={[HOME.banner.headline[0], HOME.banner.headline[1]]}
            lineClassName={[
              "max-w-[12ch]",
              "md:ml-[12%] lg:ml-[18%]",
            ]}
          />
          <FadeUp delay={0.12} className="mt-10">
            <ConversationButton variant="solid" />
          </FadeUp>
        </div>

        <div className="flex flex-col justify-end lg:col-span-5 lg:pb-2">
          <FadeUp className="max-w-[46ch] font-body text-[15px] font-light leading-body tracking-body text-ink-offWhite md:text-[16px] lg:ml-auto lg:text-right">
            <p>{HOME.banner.support}</p>
          </FadeUp>
          <p className="mt-8 font-body text-[10px] font-light uppercase tracking-[0.2em] text-ink-white/50 lg:text-right">
            {STILL_CAPTION}
          </p>
        </div>
      </div>
    </section>
  );
}
