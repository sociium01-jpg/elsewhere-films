import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brand: {
          red: "#E63329",
          redDeep: "#C22B22",
          redSoft: "#F08A83",
        },
        ink: {
          black: "#0E0E0E",
          charcoal: "#1C1C1C",
          grey: "#8C8C8C",
          greyLight: "#D9D9D9",
          offWhite: "#F2F2F2",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        // TODO(font): confirm the exact licensed brand typeface with the client and drop the woff2 files into /public/fonts, then wire via next/font/local. Until then use a geometric-sans fallback stack. Do NOT ship the fallback to production without sign-off.
        display: [
          '"Century Gothic"',
          "Futura",
          '"Avenir Next"',
          "Avenir",
          '"Gill Sans"',
          "sans-serif",
        ],
        body: [
          '"Century Gothic"',
          "Futura",
          '"Avenir Next"',
          "Avenir",
          '"Gill Sans"',
          "sans-serif",
        ],
      },
      letterSpacing: {
        caps: "0.12em",
        body: "0.06em",
        capsMobile: "0.08em",
      },
      lineHeight: {
        body: "1.9",
      },
      transitionTimingFunction: {
        enter: "cubic-bezier(0.22, 1, 0.36, 1)",
        scroll: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      maxWidth: {
        frame: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
