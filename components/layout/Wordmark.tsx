import { ChevronMark } from "@/components/brand/ChevronMark";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  filmsClassName?: string;
  variant?: "onDark" | "onLight";
};

export function Wordmark({
  className,
  filmsClassName,
  variant = "onDark",
}: WordmarkProps) {
  const onLight = variant === "onLight";

  return (
    <span
      className={cn(
        "inline-flex flex-col items-start leading-none",
        onLight ? "text-ink-black" : "text-ink-white",
        className,
      )}
    >
      <span className="flex items-end font-display text-[15px] font-bold tracking-[0.28em] md:text-[17px] md:tracking-[0.32em]">
        ELSE
        <span className="relative mx-[1px] inline-flex h-[0.78em] w-[0.92em] items-center justify-center text-brand-red">
          <ChevronMark className="h-full w-full" />
          <span className="sr-only">W</span>
        </span>
        HERE
      </span>
      <span
        className={cn(
          "mt-[6px] font-display text-[10px] font-semibold tracking-[0.55em] md:text-[11px] md:tracking-[0.62em]",
          onLight && "text-ink-charcoal/70",
          filmsClassName,
        )}
      >
        FILMS
      </span>
    </span>
  );
}
