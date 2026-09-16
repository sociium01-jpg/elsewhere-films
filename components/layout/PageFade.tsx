"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { duration, easeEnter } from "@/lib/motion";

export function PageFade({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [ms, setMs] = useState<number>(duration.page);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setMs(fine ? duration.page : 0.18);
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ms, ease: easeEnter }}
    >
      {children}
    </motion.div>
  );
}
