import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FadeUp } from "@/components/motion/FadeUp";
import { textCtaLift } from "@/lib/button";
import { cn } from "@/lib/cn";
import { KNOWLEDGE_HUB } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Knowledge Hub — Elsewhere Films",
  description: KNOWLEDGE_HUB.framing,
};

export default function KnowledgeHubPage() {
  const stocked = KNOWLEDGE_HUB.shelves.filter((shelf) => shelf.items.length > 0);

  return (
    <SiteFrame>
      <main className="bg-ink-offWhite pt-28 md:pt-32">
        <section className="mx-auto grid max-w-frame px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-14">
          <FadeUp className="lg:col-span-8">
            <h1 className="font-display text-[28px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[40px]">
              {KNOWLEDGE_HUB.title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.08} className="lg:col-span-7">
            <p className="mt-8 max-w-lede font-body text-[16px] font-light leading-body tracking-body text-ink-charcoal">
              {KNOWLEDGE_HUB.framing}
            </p>
          </FadeUp>
          {stocked.length > 0 ? (
            <ul className="mt-16 space-y-12 lg:col-span-12">
              {stocked.map((shelf) => (
                <li key={shelf.name}>
                  <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-charcoal">
                    {shelf.name}
                  </h2>
                </li>
              ))}
            </ul>
          ) : null}
          <Link
            href="/pathway-model"
            className={cn(
              "mt-10 inline-flex min-h-11 items-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-charcoal underline decoration-brand-red decoration-1 underline-offset-8 lg:col-span-12",
              textCtaLift,
            )}
          >
            Explore the Pathway Model →
          </Link>
        </section>
      </main>
    </SiteFrame>
  );
}
