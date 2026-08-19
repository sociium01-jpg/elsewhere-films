"use client";

import { cn } from "@/lib/cn";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { SplitChars } from "@/components/motion/SplitChars";
import { SplitWords } from "@/components/motion/SplitWords";

type AnimatedHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  mode?: "chars" | "words" | "lines";
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedHeading({
  text,
  as = "h2",
  mode = "words",
  className,
  delay = 0,
  id,
}: AnimatedHeadingProps) {
  const Tag = as;
  const lines = text.split("\n");

  if (mode === "lines") {
    return (
      <MaskReveal
        as={as}
        id={id}
        className={className}
        lines={lines}
        delay={delay}
      />
    );
  }

  return (
    <Tag id={id} className={cn(className)}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {mode === "chars" ? (
            <SplitChars text={line} delay={delay + index * 0.12} />
          ) : (
            <SplitWords text={line} delay={delay + index * 0.1} />
          )}
        </span>
      ))}
    </Tag>
  );
}
