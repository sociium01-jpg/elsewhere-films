"use client";

import { useConversation } from "@/lib/conversation";
import { buttonLift } from "@/lib/button";
import { CTA } from "@/lib/copy";
import { cn } from "@/lib/cn";

type ConversationButtonProps = {
  className?: string;
  variant?: "light" | "dark" | "solid";
  onAfterOpen?: () => void;
};

export function ConversationButton({
  className,
  variant = "dark",
  onAfterOpen,
}: ConversationButtonProps) {
  const { openConversation } = useConversation();

  return (
    <button
      type="button"
      onClick={() => {
        openConversation();
        onAfterOpen?.();
      }}
      className={cn(
        "inline-flex min-h-11 items-center px-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em]",
        buttonLift,
        variant === "dark" && "text-ink-white",
        variant === "light" && "text-ink-charcoal",
        variant === "solid" &&
          "rounded-full bg-brand-red px-6 py-3 text-ink-white hover:bg-brand-redDeep",
        className,
      )}
    >
      {CTA}
    </button>
  );
}
