"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeEnter } from "@/lib/motion";

export function PageIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(!reduce);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const hide = window.setTimeout(() => setShow(false), 1600);
    return () => window.clearTimeout(hide);
  }, [reduce]);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 origin-top bg-ink-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.15, ease: easeEnter, delay: 0.28 }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-ink-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.15, ease: easeEnter, delay: 0.28 }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-px w-[min(40vw,280px)] -translate-x-1/2 -translate-y-1/2 bg-brand-red"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 1.05, ease: easeEnter, times: [0, 0.55, 1] }}
      />
    </div>
  );
}
