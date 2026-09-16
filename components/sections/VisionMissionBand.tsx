import { FadeUp } from "@/components/motion/FadeUp";
import { HOME } from "@/lib/copy";

export function VisionMissionBand() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="belief-heading">
      <div className="mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <FadeUp>
          <p
            id="belief-heading"
            className="max-w-[28ch] font-display text-[22px] font-bold leading-snug tracking-caps text-ink-charcoal md:text-[32px] lg:text-[36px]"
          >
            {HOME.vision}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-10 max-w-[62ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal md:text-[16px]">
            {HOME.mission}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
