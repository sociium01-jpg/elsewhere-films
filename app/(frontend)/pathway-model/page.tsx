import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FadeUp } from "@/components/motion/FadeUp";
import { PATHWAY_MODEL } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Pathway Model — Elsewhere Films",
  description:
    "Evidence beside judgment: 300 film journeys, festival signals, and practitioner research.",
};

export default function PathwayModelPage() {
  return (
    <SiteFrame>
      <main className="bg-ink-offWhite pt-28 md:pt-32">
        <section className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-24 lg:px-14">
          <FadeUp>
            <h1 className="font-display text-[28px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[40px]">
              {PATHWAY_MODEL.title}
            </h1>
          </FadeUp>

          <ol className="mt-16 space-y-12">
            {PATHWAY_MODEL.steps.map((step, index) => (
              <FadeUp key={step.heading} delay={index * 0.04} as="li">
                <article className="grid gap-3 md:grid-cols-[88px_1fr] md:gap-10">
                  <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="font-display text-[16px] font-bold tracking-caps text-ink-charcoal md:text-[18px]">
                      {step.heading}
                    </h2>
                    <p className="mt-3 max-w-[58ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
                      {step.line}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </ol>

          <div className="mt-20 max-w-[58ch] space-y-6 border-t border-ink-charcoal/15 pt-10">
            <p className="font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
              {PATHWAY_MODEL.judgment}
            </p>
            <p className="font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
              {PATHWAY_MODEL.disclaimer}
            </p>
          </div>

          <Link
            href="/services"
            className="mt-12 inline-block font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8"
          >
            See how we work →
          </Link>
        </section>
      </main>
    </SiteFrame>
  );
}
