import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 290.44 261.31"
      className={cn("block", className)}
      aria-hidden
    >
      <path
        fill="#EB2027"
        d="M259.6532 170.5733 144.3841 0 29.0769 170.5733 0 216.0632 26.354 261.3123 144.3841 86.4581 262.7813 261.3123 290.4398 213.6948Z"
      />
    </svg>
  );
}
