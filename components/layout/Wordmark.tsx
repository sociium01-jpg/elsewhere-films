import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  filmsClassName?: string;
};

export function Wordmark({ className, filmsClassName }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-start leading-none text-ink-white",
        className,
      )}
    >
      <span className="font-display text-[15px] font-bold tracking-[0.28em] md:text-[17px] md:tracking-[0.32em]">
        ELSE
        <span className="relative inline-block">
          W
          <span
            aria-hidden
            className="absolute left-1/2 top-[42%] h-[7px] w-[9px] -translate-x-1/2 -translate-y-1/2 text-brand-red"
          >
            <svg viewBox="0 0 10 8" className="h-full w-full" fill="currentColor">
              <path d="M5 0.4 L9.4 7.6 H0.6 Z" />
            </svg>
          </span>
        </span>
        HERE
      </span>
      <span
        className={cn(
          "mt-[6px] font-display text-[10px] font-semibold tracking-[0.55em] md:text-[11px] md:tracking-[0.62em]",
          filmsClassName,
        )}
      >
        FILMS
      </span>
    </span>
  );
}
