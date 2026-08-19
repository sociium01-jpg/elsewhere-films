"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/layout/Wordmark";
import { cn } from "@/lib/cn";
import { duration, easeEnter, stagger } from "@/lib/motion";
import { NAV_LINKS } from "@/lib/nav";

export function Navbar() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setScrolled(!isHome);
  }, [isHome, pathname]);

  useEffect(() => {
    return scrollY.on("change", (value) => {
      if (open) {
        setScrolled(true);
        return;
      }
      if (isHome) {
        setScrolled(value > window.innerHeight * 0.85);
        return;
      }
      setScrolled(true);
    });
  }, [isHome, open, scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeEnter, delay: 0.35 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-500",
        open || scrolled ? "bg-ink-black/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        className="relative z-[80] mx-auto flex max-w-frame items-center justify-between px-5 py-4 md:px-10 lg:px-14"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 font-display text-[11px] font-semibold tracking-[0.22em] text-ink-white lg:flex lg:text-[12px] lg:tracking-[0.28em]">
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
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand-red transition-transform duration-500 ease-enter",
                    pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-ink-white/20 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          aria-expanded={open}
          aria-controls="app-menu"
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
            key="app-menu"
            id="app-menu"
            className="absolute inset-x-0 top-full z-[70] lg:hidden"
            initial={reduce ? false : { y: "-12%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-8%", opacity: 0 }}
            transition={{ duration: 0.45, ease: easeEnter }}
            drag={reduce ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.04, bottom: 0.45 }}
            onDragEnd={(_, info) => {
              if (info.offset.y < -72 || info.velocity.y < -400) setOpen(false);
            }}
          >
            <div className="flex max-h-[calc(100dvh-4.5rem)] flex-col overflow-hidden rounded-b-3xl border-t border-ink-white/10 bg-ink-black shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="flex justify-center pb-1 pt-3" aria-hidden>
                <span className="h-1 w-10 rounded-full bg-ink-white/25" />
              </div>
              <ul className="flex flex-col px-3 pb-6 pt-2">
                {NAV_LINKS.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.label}
                      initial={reduce ? false : { opacity: 0, y: -16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: duration.text,
                        ease: easeEnter,
                        delay: 0.06 + index * stagger.nav,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex min-h-[56px] items-center justify-between rounded-2xl px-5 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.18em] text-ink-white active:bg-ink-white/10",
                          active && "bg-ink-white/10",
                        )}
                      >
                        {link.label}
                        <span
                          className={cn(
                            "text-brand-red transition-transform",
                            active ? "translate-x-0 opacity-100" : "translate-x-1 opacity-40",
                          )}
                          aria-hidden
                        >
                          ›
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <p className="px-8 pb-7 font-body text-[11px] font-light tracking-body text-ink-grey">
                Swipe up to close
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.button
            type="button"
            aria-label="Dismiss menu"
            className="fixed inset-0 z-[60] bg-ink-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
