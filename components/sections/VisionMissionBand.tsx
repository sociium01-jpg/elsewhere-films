import { FadeUp } from "@/components/motion/FadeUp";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { HOME } from "@/lib/copy";

export function VisionMissionBand() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="belief-heading">
      <RevealGroup className="mx-auto grid max-w-frame gap-10 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:items-start lg:gap-0 lg:px-14">
        <FadeUp grouped className="lg:col-span-6 lg:pr-12">
          <p
            id="belief-heading"
            className="max-w-[18ch] font-display text-[26px] font-bold leading-snug tracking-caps text-ink-charcoal md:text-[34px] lg:text-[38px]"
          >
            {HOME.vision}
          </p>
        </FadeUp>
        <FadeUp grouped className="relative lg:col-span-6 lg:mt-16 lg:border-l lg:border-brand-red lg:pl-12">
          <p className="max-w-[42ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]">
            {HOME.mission}
          </p>
        </FadeUp>
      </RevealGroup>
    </section>
  );
}
