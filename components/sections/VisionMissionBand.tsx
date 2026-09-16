import { FadeUp } from "@/components/motion/FadeUp";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { HOME } from "@/lib/copy";

export function VisionMissionBand() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="belief-heading">
      <RevealGroup className="mx-auto grid max-w-frame gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:px-14">
        <FadeUp grouped className="lg:col-span-7">
          <p
            id="belief-heading"
            className="max-w-[40ch] font-display text-[22px] font-bold leading-snug tracking-display text-ink-charcoal md:text-[30px] lg:max-w-none lg:text-[32px]"
          >
            {HOME.vision}
          </p>
        </FadeUp>
        <FadeUp grouped className="relative lg:col-span-5 lg:col-start-8 lg:mt-16 lg:border-l lg:border-brand-red lg:pl-10">
          <p className="max-w-measure font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]">
            {HOME.mission}
          </p>
        </FadeUp>
      </RevealGroup>
    </section>
  );
}
