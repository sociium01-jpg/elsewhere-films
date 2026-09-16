"use client";

import { useConversation } from "@/lib/conversation";
import { CTA } from "@/lib/copy";

export function ConversationTab() {
  const { open, openConversation } = useConversation();

  if (open) return null;

  return (
    <button
      type="button"
      onClick={openConversation}
      aria-label={CTA}
      className="fixed right-0 top-1/2 z-[45] hidden origin-center -translate-y-1/2 bg-ink-charcoal px-2 py-5 font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-white md:block"
      style={{ writingMode: "vertical-rl" }}
    >
      {CTA}
    </button>
  );
}
