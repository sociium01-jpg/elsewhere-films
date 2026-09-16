import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FadeUp } from "@/components/motion/FadeUp";
import { ABOUT, HOME } from "@/lib/copy";

export const metadata: Metadata = {
  title: "About Us — Elsewhere Films",
  description: HOME.vision,
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <main className="bg-ink-offWhite pt-28 md:pt-32">
        <section className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
          <FadeUp>
            <h1 className="font-display text-[28px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[40px]">
              {ABOUT.originHeading}
            </h1>
          </FadeUp>
          <p className="mt-6 font-body text-[13px] font-light tracking-body text-ink-grey">
            Copy pending from the client.
          </p>
        </section>

        <section className="mx-auto max-w-frame px-5 pb-16 md:px-10 lg:px-14">
          <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
            Founders
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {ABOUT.founders.map((founder, index) => (
              <FadeUp key={founder.name} delay={index * 0.08} as="li">
                <article>
                  <h3 className="font-display text-[16px] font-bold tracking-caps text-ink-charcoal">
                    {founder.name}
                  </h3>
                  <p className="mt-2 font-body text-[14px] font-light tracking-body text-ink-charcoal">
                    {founder.role}
                  </p>
                </article>
              </FadeUp>
            ))}
          </ul>
        </section>

        <section
          id="advisory"
          className="scroll-mt-28 border-t border-ink-charcoal/10 bg-ink-white"
        >
          <div className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
            <h2 className="font-display text-[22px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[26px]">
              {ABOUT.advisoryHeading}
            </h2>
            <p className="mt-6 max-w-[46ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
              {ABOUT.advisoryNote}
            </p>
          </div>
        </section>

        <section className="bg-ink-offWhite">
          <div className="mx-auto max-w-frame px-5 py-20 md:px-10 md:py-24 lg:px-14">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
              Vision
            </p>
            <p className="mt-5 max-w-[28ch] font-display text-[20px] font-bold leading-snug tracking-caps text-ink-charcoal md:text-[28px]">
              {HOME.vision}
            </p>
            <p className="mt-10 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
              Mission
            </p>
            <p className="mt-5 max-w-[62ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
              {HOME.mission}
            </p>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
