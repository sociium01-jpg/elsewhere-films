"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function intersectsViewport(node: Element) {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  return rect.bottom > 40 && rect.top < vh - 40;
}

export function useReveal(reduce: boolean | null) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15, margin: "0px 0px -48px 0px" });
  const [visible, setVisible] = useState(Boolean(reduce));

  useEffect(() => {
    if (reduce) {
      setVisible(true);
      return;
    }
    if (inView) {
      setVisible(true);
      return;
    }

    const check = () => {
      if (ref.current && intersectsViewport(ref.current)) setVisible(true);
    };

    check();
    const a = window.setTimeout(check, 250);
    const b = window.setTimeout(check, 900);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [inView, reduce]);

  return { ref, visible };
}
