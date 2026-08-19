import { Facebook, Instagram, Youtube } from "lucide-react";
import { ChevronMark } from "@/components/brand/ChevronMark";
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
    <footer className="relative overflow-hidden bg-ink-greyLight">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/footer-texture.webp')] bg-cover bg-center opacity-50 mix-blend-multiply"
      />
      <div className="relative mx-auto flex max-w-frame items-center justify-between gap-8 px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <div>
          <Wordmark variant="onLight" />
          <p className="mt-5 font-body text-[13px] font-light leading-relaxed tracking-body text-ink-charcoal">
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
        </div>
        <ChevronMark className="h-24 w-28 shrink-0 text-brand-red md:h-36 md:w-40" />
      </div>

      <div className="relative flex items-center justify-between bg-ink-white px-5 py-3 md:px-10 lg:px-14">
        <p className="flex-1 text-center font-body text-[11px] tracking-body text-ink-grey">
          © 2026 ELSEWHEREFILMS. All rights reserved
        </p>
        <p className="absolute right-5 flex items-center gap-2 font-display text-[9px] uppercase tracking-[0.16em] text-ink-grey md:right-10 lg:right-14">
          A division of
          <span className="inline-flex h-6 w-8 items-center justify-center bg-brand-red font-bold tracking-[0.08em] text-ink-white">
            RBC
          </span>
        </p>
      </div>
    </footer>
  );
}
