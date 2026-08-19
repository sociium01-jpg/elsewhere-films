"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BorderDrawBox } from "@/components/motion/BorderDrawBox";
import { KenBurns } from "@/components/motion/KenBurns";
import { LightLeak } from "@/components/motion/LightLeak";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { easeEnter } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const [boxDone, setBoxDone] = useState(false);

  useEffect(() => {
    if (reduce) setBoxDone(true);
    const id = window.setTimeout(() => setBoxDone(true), reduce ? 0 : 2200);
    return () => window.clearTimeout(id);
  }, [reduce]);

  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden bg-ink-black">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: easeEnter }}
      >
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
      </motion.div>

      {!reduce ? (
        <>
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-ink-black mix-blend-multiply"
            animate={{ opacity: [0.16, 0.4, 0.2, 0.48, 0.18] }}
            transition={{
              duration: 6.8,
              ease: "easeInOut",
              repeat: Infinity,
              times: [0, 0.18, 0.46, 0.72, 1],
            }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(14,14,14,0.78)_100%)]"
            animate={{ opacity: [0.68, 0.96, 0.68] }}
            transition={{ duration: 13.6, ease: "easeInOut", repeat: Infinity }}
          />
          <LightLeak />
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
          delay={0.55}
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

        {boxDone || reduce ? (
          <p className="mt-8 text-center font-display text-[12px] font-semibold uppercase leading-relaxed tracking-caps text-ink-white md:text-[14px] lg:text-[15px]">
            <SplitWords text="IT'S FINISHED WHEN IT" delay={reduce ? 0 : 0.15} />
            <br />
            <SplitWords text="FINDS ITS AUDIENCE." delay={reduce ? 0 : 0.38} />
          </p>
        ) : (
          <p className="invisible mt-8 text-center font-display text-[12px] font-semibold uppercase">
            IT&apos;S FINISHED WHEN IT
            <br />
            FINDS ITS AUDIENCE.
          </p>
        )}
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-ink-white"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.7, ease: easeEnter }}
      >
        <span className="relative block h-9 w-[18px] rounded-full border border-ink-white/55">
          <motion.span
            aria-hidden
            className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ink-white"
            animate={reduce ? undefined : { y: [0, 10, 0], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className="sr-only">Scroll</span>
      </motion.div>
    </section>
  );
}
