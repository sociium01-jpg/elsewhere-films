import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FadeUp } from "@/components/motion/FadeUp";
import { KNOWLEDGE_HUB } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Knowledge Hub — Elsewhere Films",
  description: KNOWLEDGE_HUB.framing,
};

export default function KnowledgeHubPage() {
  return (
    <SiteFrame>
      <main className="bg-ink-offWhite pt-28 md:pt-32">
        <section className="mx-auto max-w-frame px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <FadeUp>
            <h1 className="font-display text-[28px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[40px]">
              {KNOWLEDGE_HUB.title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-8 max-w-[46ch] font-body text-[16px] font-light leading-body tracking-body text-ink-charcoal">
              {KNOWLEDGE_HUB.framing}
            </p>
          </FadeUp>
          <p className="mt-16 max-w-[40ch] font-body text-[14px] font-light tracking-body text-ink-grey">
            Shelves appear here when they hold real publications, episodes of The
            After Cut, or annual reports.
          </p>
          <Link
            href="/pathway-model"
            className="mt-10 inline-block font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8"
          >
            Explore the Pathway Model →
          </Link>
        </section>
      </main>
    </SiteFrame>
  );
}
