import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elsewhere Films",
  description:
    "A film isn't finished when the credits roll. It's finished when it finds its audience.",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* TODO(font): confirm the exact licensed brand typeface with the client and drop the woff2 files into /public/fonts, then wire via next/font/local. Until then use a geometric-sans fallback stack. Do NOT ship the fallback to production without sign-off. */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
