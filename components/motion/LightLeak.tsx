"use client";

import { motion, useReducedMotion } from "framer-motion";

export function LightLeak() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-screen"
      initial={{ x: "-40%", opacity: 0 }}
      animate={{ x: ["-40%", "110%"], opacity: [0, 0.18, 0] }}
      transition={{
        duration: 9.5,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 7,
      }}
    >
      <div className="h-full w-[28%] rotate-12 bg-gradient-to-r from-transparent via-[#F2C9A0]/35 to-transparent blur-2xl" />
    </motion.div>
  );
}
