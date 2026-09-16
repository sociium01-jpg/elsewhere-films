"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { ConversationButton } from "@/components/layout/ConversationButton";
import { Wordmark } from "@/components/layout/Wordmark";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIALS = [
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "X", icon: XIcon },
  { href: "#", label: "YouTube", icon: Youtube },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-ink-charcoal/10 bg-ink-offWhite">
      <div className="mx-auto flex max-w-frame flex-col gap-10 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20 lg:px-14">
        <div>
          <Wordmark variant="onLight" />
          <p className="mt-6 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-charcoal">
            Elsewhere Films · Hyderabad
          </p>
          <p className="mt-3 font-body text-[13px] font-light leading-relaxed tracking-body text-ink-charcoal">
            9th Floor, Vamsiram Jyothi Granules,
            <br />
            Kondapur, Hyderabad
          </p>
          <ul className="mt-5 flex items-center gap-4 text-ink-black">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-5 w-5 items-center justify-center transition-opacity hover:opacity-60"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <ConversationButton variant="light" className="mt-8" />
        </div>
        <BrandMark className="pointer-events-none h-[4.75rem] w-auto shrink-0 self-end md:h-44 lg:h-48" />
      </div>

      <div className="bg-ink-white px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-10 lg:px-14">
        <p className="text-center font-body text-[11px] tracking-body text-ink-grey">
          © 2026 ELSEWHEREFILMS. All rights reserved
        </p>
      </div>
    </footer>
  );
}
