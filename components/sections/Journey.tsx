"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { DashedRule } from "@/components/brand/DashedRule";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { duration, easeEnter, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

const TAGS = ["Festivals", "Markets", "Partners", "Distributors", "Audiences"] as const;

const DECK = [
  { src: "/images/journey-01.webp", alt: "Grip adjusting a diffusion screen on a film set" },
  { src: "/images/journey-02.webp", alt: "Studio lighting on a film set" },
  { src: "/images/journey-03.webp", alt: "Behind-the-scenes lighting setup" },
] as const;

function JourneyDeck() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);

  function goTo(next: number) {
    const wrapped = (next + DECK.length) % DECK.length;
    setIndex(wrapped);
  }

  function fromPointerX(clientX: number, width: number, left: number) {
    const ratio = Math.min(1, Math.max(0, (clientX - left) / width));
    const next = Math.min(DECK.length - 1, Math.floor(ratio * DECK.length));
    setIndex(next);
  }

  return (
    <div
      className="relative mx-auto h-[300px] w-[250px] touch-pan-y md:mx-0 md:h-[340px] md:w-[280px]"
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        fromPointerX(event.clientX, rect.width, rect.left);
      }}
    >
      {DECK.map((card, cardIndex) => {
        const offset = (cardIndex - index + DECK.length) % DECK.length;
        const behind = offset === 0 ? 0 : offset;
        const isFront = cardIndex === index;

        return (
          <motion.div
            key={card.src}
            className={cn(
              "absolute left-0 top-0 w-full overflow-hidden rounded-md border border-ink-grey/40 bg-ink-offWhite shadow-[0_10px_24px_rgba(0,0,0,0.12)]",
              isFront ? "cursor-ew-resize" : "pointer-events-none",
            )}
            style={{ zIndex: isFront ? 20 : 10 - behind }}
            animate={{
              x: isFront ? 0 : behind % 2 === 0 ? 10 : -8,
              y: isFront ? 0 : 10 + behind * 6,
              scale: isFront ? 1 : 1 - behind * 0.04,
              rotate: isFront ? 0 : behind % 2 === 0 ? 3.5 : -3,
              opacity: behind > 2 ? 0 : 1,
            }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 280, damping: 28 }
            }
            drag={isFront && !reduce ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDrag={(_, info) => x.set(info.offset.x)}
            onDragEnd={(_, info) => {
              x.set(0);
              if (info.offset.x < -56 || info.velocity.x < -250) goTo(index + 1);
              if (info.offset.x > 56 || info.velocity.x > 250) goTo(index - 1);
            }}
          >
            <div className="relative aspect-[5/4] w-full">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="280px"
                className="object-cover grayscale"
                draggable={false}
              />
            </div>
            {isFront ? (
              <p className="py-3 text-center font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-charcoal">
                Drag me
              </p>
            ) : (
              <div className="h-[42px] bg-ink-greyLight/80" />
            )}
          </motion.div>
        );
      })}

      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {DECK.map((card, dot) => (
          <button
            key={card.src}
            type="button"
            aria-label={`Show still ${dot + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              dot === index ? "w-5 bg-brand-red" : "w-1.5 bg-ink-grey/50",
            )}
            onClick={() => setIndex(dot)}
          />
        ))}
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section
      id="journey"
      className="bg-ink-white scroll-mt-24"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <AnimatedHeading
          as="h2"
          id="journey-heading"
          mode="chars"
          text="THE JOURNEY"
          className="text-center font-display text-[22px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[28px]"
        />
        <DashedRule className="mt-3" />

        <div className="mt-12 grid items-center gap-14 md:grid-cols-[minmax(0,280px)_1fr] md:gap-14 lg:grid-cols-[minmax(0,320px)_1fr]">
          <JourneyDeck />

          <div>
            <FadeUp>
              <AnimatedHeading
                as="h3"
                mode="lines"
                text={"EVERY FILM DESERVES\nITS JOURNEY."}
                className="font-display text-[20px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[26px]"
              />
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="mt-5 font-body text-[14px] font-light leading-body tracking-body text-ink-grey md:text-[15px]">
                You made the film.
                <br />
                Now comes the journey no one hands you a map for:
              </p>
            </FadeUp>
            <ul className="mt-7 flex max-w-[420px] flex-wrap gap-2">
              {TAGS.map((tag, index) => (
                <motion.li
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: duration.text,
                    ease: easeEnter,
                    delay: index * stagger.tag,
                  }}
                  className="bg-ink-charcoal px-4 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-white"
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-dashed border-ink-grey/40 pt-8">
          <p className="mx-auto max-w-[720px] text-center font-body text-[13px] font-light leading-body tracking-body text-ink-grey md:text-[14px]">
            At <span className="font-semibold tracking-[0.16em]">ELSEWHERE</span>, we
            help independent films find their way through all of it— combining
            research, experience, and relationships to build thoughtful pathways
            for every film.
          </p>
        </div>
      </div>
    </section>
  );
}
