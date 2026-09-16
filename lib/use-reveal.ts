"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function intersectsViewport(node: Element) {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  return rect.bottom > 24 && rect.top < vh - 24;
}

export function useReveal(reduce: boolean | null, immediate = false) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12, margin: "0px 0px -24px 0px" });
  const [visible, setVisible] = useState(Boolean(reduce) || immediate);

  useEffect(() => {
    if (reduce || immediate || inView) {
      setVisible(true);
      return;
    }

    const check = () => {
      if (ref.current && intersectsViewport(ref.current)) setVisible(true);
    };

    check();
    const id = window.setTimeout(check, 200);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.clearTimeout(id);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [immediate, inView, reduce]);

  return { ref, visible };
}
