import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FadeUp } from "@/components/motion/FadeUp";
import { PathwayRoadmap } from "@/components/sections/PathwayRoadmap";
import { textCtaLift } from "@/lib/button";
import { cn } from "@/lib/cn";
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
        <section className="mx-auto grid max-w-frame px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:px-14">
          <FadeUp className="lg:col-span-8">
            <h1 className="font-display text-[28px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[40px]">
              {PATHWAY_MODEL.title}
            </h1>
          </FadeUp>

          <div className="lg:col-span-12">
            <PathwayRoadmap />
          </div>

          <div className="mt-20 max-w-lede space-y-6 border-t border-ink-charcoal/15 pt-10 lg:col-span-8">
            <p className="font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
              {PATHWAY_MODEL.judgment}
            </p>
            <p className="font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
              {PATHWAY_MODEL.disclaimer}
            </p>
          </div>

          <Link
            href="/services"
            className={cn(
              "mt-12 inline-flex min-h-11 items-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 lg:col-span-12",
              textCtaLift,
            )}
          >
            See how we work →
          </Link>
        </section>
      </main>
    </SiteFrame>
  );
}
