import { cn } from "@/lib/cn";

/** Slight shadow + 2px hover lift. md+ only. prefers-reduced-motion stays static. */
export const buttonLift = cn(
  "shadow-[0_1px_2px_rgba(14,14,14,0.14)]",
  "transition-[transform,box-shadow,background-color,opacity] duration-200 ease-enter",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "md:hover:-translate-y-0.5 md:hover:shadow-[0_4px_10px_rgba(14,14,14,0.18)]",
  "motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_1px_2px_rgba(14,14,14,0.14)]",
);

export const textCtaLift = cn(
  "shadow-[0_1px_2px_rgba(14,14,14,0.08)]",
  "transition-[transform,box-shadow,opacity] duration-200 ease-enter",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "md:hover:-translate-y-0.5 md:hover:shadow-[0_3px_8px_rgba(14,14,14,0.12)]",
  "motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_1px_2px_rgba(14,14,14,0.08)]",
);
