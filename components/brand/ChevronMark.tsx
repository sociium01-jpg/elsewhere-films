import { cn } from "@/lib/cn";

type ChevronMarkProps = {
  className?: string;
  filled?: boolean;
};

export function ChevronMark({ className, filled = true }: ChevronMarkProps) {
  return (
    <svg
      viewBox="0 0 100 72"
      className={cn("block", className)}
      aria-hidden
    >
      {filled ? (
        <path d="M50 6 L96 68 H4 Z" fill="currentColor" />
      ) : (
        <path
          d="M50 10 L90 64 H10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="miter"
        />
      )}
    </svg>
  );
}
