import { cn } from "@/lib/cn";

export function DashedRule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "mx-auto block h-px w-[88px] border-t border-dashed border-brand-red",
        className,
      )}
    />
  );
}
