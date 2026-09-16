import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elsewhere Films",
  description:
    "You made the film. We help it travel. A pathway for South Asian independent cinema after the cut.",
  icons: {
    icon: "/brand/elsewhere-logo.svg",
    apple: "/brand/elsewhere-logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
