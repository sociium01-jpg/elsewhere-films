"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BorderDrawBox } from "@/components/motion/BorderDrawBox";
import { KenBurns } from "@/components/motion/KenBurns";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { duration, easeEnter } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const [boxDone, setBoxDone] = useState(false);

  useEffect(() => {
    if (reduce) setBoxDone(true);
  }, [reduce]);

  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden bg-ink-black">
      <div className="absolute inset-0">
        <KenBurns className="h-full w-full">
          <Image
            src="/images/hero.webp"
            alt="Hands casting a shadow against a warm ochre wall"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </KenBurns>
      </div>

      {!reduce ? (
        <>
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-ink-black mix-blend-multiply"
            animate={{ opacity: [0.18, 0.42, 0.22, 0.5, 0.2] }}
            transition={{
              duration: 6.2,
              ease: "easeInOut",
              repeat: Infinity,
              times: [0, 0.22, 0.48, 0.74, 1],
            }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(14,14,14,0.78)_100%)]"
            animate={{ opacity: [0.7, 0.95, 0.7] }}
            transition={{ duration: 12.4, ease: "easeInOut", repeat: Infinity }}
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(14,14,14,0.78)_100%)]"
        />
      )}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <BorderDrawBox
          className="w-full max-w-[720px] px-6 py-8 md:px-12 md:py-10 lg:max-w-[780px]"
          delay={0.35}
          onComplete={() => setBoxDone(true)}
        >
          {boxDone || reduce ? (
            <MaskReveal
              as="h1"
              className="text-center font-display uppercase text-ink-white"
              lines={["A FILM ISN'T FINISHED", "WHEN THE CREDITS ROLL."]}
              lineClassName={[
                "text-[22px] font-bold tracking-caps md:text-[32px] lg:text-[36px]",
                "mt-3 text-[13px] font-semibold tracking-caps md:mt-4 md:text-[16px] lg:text-[18px]",
              ]}
            />
          ) : (
            <h1 className="invisible text-center font-display font-bold uppercase">
              A FILM ISN&apos;T FINISHED
              <br />
              WHEN THE CREDITS ROLL.
            </h1>
          )}
        </BorderDrawBox>

        <motion.p
          className="mt-8 text-center font-display text-[12px] font-semibold uppercase leading-relaxed tracking-caps text-ink-white md:text-[14px] md:tracking-caps lg:text-[15px]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={
            boxDone || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={{
            duration: duration.text,
            ease: easeEnter,
            delay: reduce ? 0 : 0.4,
          }}
        >
          IT&apos;S FINISHED WHEN IT
          <br />
          FINDS ITS AUDIENCE.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-white"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6, ease: easeEnter }}
      >
        <motion.span
          aria-hidden
          className="block h-8 w-px bg-ink-white/70"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="sr-only">Scroll</span>
      </motion.div>
    </section>
  );
}
