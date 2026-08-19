import Image from "next/image";
import Link from "next/link";
import { ChevronMark } from "@/components/brand/ChevronMark";
import { DashedRule } from "@/components/brand/DashedRule";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/cn";

function CircleChevron({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-white",
        className,
      )}
    >
      ›
    </span>
  );
}

export function Partnerships() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="partnerships-heading">
      <div className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <AnimatedHeading
          as="h2"
          id="partnerships-heading"
          mode="chars"
          text="WE USUALLY WORK IN ONE OF TWO WAYS"
          className="text-center font-display text-[18px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[22px]"
        />
        <DashedRule className="mt-3" />

        <div className="mt-10 grid overflow-hidden md:grid-cols-2">
          <FadeUp className="relative flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/partnership-pathway.webp"
                alt="Vintage projector throwing a blue beam of light"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <p className="absolute right-5 top-6 font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-white md:text-[13px]">
                Pathway Partnership
              </p>
              <ChevronMark className="pointer-events-none absolute bottom-[-18%] left-1/2 h-[58%] w-[46%] -translate-x-1/2 text-brand-red" />
            </div>
            <div className="relative bg-brand-red px-8 pb-10 pt-16 md:px-10">
              <CircleChevron className="absolute right-6 top-6 bg-ink-charcoal" />
              <h3 className="font-display text-[16px] font-bold uppercase tracking-caps text-ink-white md:text-[18px]">
                You&apos;ve made
                <br />
                the film.
              </h3>
              <p className="mt-5 max-w-[34ch] font-display text-[12px] font-light uppercase leading-relaxed tracking-[0.14em] text-ink-white">
                We help shape its journey through festivals, markets and
                distribution.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="relative flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/partnership-creative.webp"
                alt="Hands reviewing a printed script"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <p className="absolute right-5 top-6 font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-white md:text-[13px]">
                Creative Partnership
              </p>
              <ChevronMark className="pointer-events-none absolute bottom-[-18%] left-1/2 h-[58%] w-[46%] -translate-x-1/2 text-ink-charcoal" />
            </div>
            <div className="relative bg-ink-charcoal px-8 pb-10 pt-16 md:px-10">
              <CircleChevron className="absolute right-6 top-6 bg-brand-red" />
              <h3 className="font-display text-[16px] font-bold uppercase tracking-caps text-ink-white md:text-[18px]">
                Sometimes
                <br />
                the relationship
                <br />
                begins much
                <br />
                earlier.
              </h3>
              <p className="mt-5 max-w-[36ch] font-display text-[12px] font-light uppercase leading-relaxed tracking-[0.14em] text-ink-white">
                For projects aligned with our vision, Elsewhere comes on board as
                producer or co-producer, working alongside you to help bring the
                film into the world together.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="rounded-full bg-brand-red px-8 py-3 font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-white shadow-[0_10px_24px_rgba(230,51,41,0.35)] transition-colors hover:bg-brand-redDeep"
          >
            Tell us about your project
          </Link>
        </div>
      </div>
    </section>
  );
}
