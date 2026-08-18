"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/layout/Wordmark";
import { cn } from "@/lib/cn";
import { duration, easeEnter, stagger } from "@/lib/motion";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "#services", label: "SERVICES" },
  { href: "#know-hub", label: "KNOW HUB" },
  { href: "#about", label: "ABOUT US" },
] as const;

export function Navbar() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (value) => {
      setScrolled(value > window.innerHeight * 0.85);
    });
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeEnter, delay: 0.8 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-500",
        scrolled
          ? "bg-ink-black/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="relative z-[70] mx-auto flex max-w-frame items-center justify-between px-5 py-5 md:px-10 lg:px-14"
        aria-label="Primary"
      >
        <Link href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 font-display text-[11px] font-semibold tracking-[0.22em] text-ink-white md:flex lg:text-[12px] lg:tracking-[0.28em]">
          {NAV_LINKS.map((link, index) => (
            <li key={link.label} className="flex items-center">
              {index > 0 ? (
                <span className="mx-3 text-ink-white/80" aria-hidden>
                  /
                </span>
              ) : null}
              <Link
                href={link.href}
                className="group relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-red transition-transform duration-[400ms] ease-enter group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-[70] flex h-10 w-10 items-center justify-center md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-[5px]">
            <span
              className={cn(
                "h-px w-full bg-ink-white transition-transform duration-300",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-ink-white transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-ink-white transition-transform duration-300",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-black md:hidden"
          >
            <ul className="flex h-full flex-col justify-center gap-8 px-8 font-display text-2xl font-semibold tracking-capsMobile text-ink-white">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={reduce ? false : { opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: duration.text,
                    ease: easeEnter,
                    delay: index * stagger.nav,
                  }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
