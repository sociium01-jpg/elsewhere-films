"use client";

import { ConversationButton } from "@/components/layout/ConversationButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { ENGAGEMENT_LINE } from "@/lib/copy";

export function EngagementClose() {
  return (
    <section className="bg-ink-white">
      <div className="mx-auto max-w-frame px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <FadeUp>
          <p className="max-w-[46ch] font-display text-[18px] font-semibold leading-snug tracking-caps text-ink-charcoal md:text-[22px]">
            {ENGAGEMENT_LINE}
          </p>
        </FadeUp>
        <div className="mt-10">
          <ConversationButton variant="solid" />
        </div>
      </div>
    </section>
  );
}
