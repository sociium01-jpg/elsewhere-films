"use client";

import { ConversationButton } from "@/components/layout/ConversationButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { ENGAGEMENT_LINE } from "@/lib/copy";

export function EngagementClose() {
  return (
    <section className="bg-ink-white">
      <div className="mx-auto grid max-w-frame px-5 py-20 md:px-10 md:py-24 lg:grid-cols-12 lg:px-14">
        <FadeUp className="lg:col-span-8">
          <p className="max-w-lede font-display text-[18px] font-semibold leading-snug tracking-display text-ink-charcoal md:text-[22px]">
            {ENGAGEMENT_LINE}
          </p>
        </FadeUp>
        <div className="mt-10 lg:col-span-12">
          <ConversationButton variant="solid" />
        </div>
      </div>
    </section>
  );
}
