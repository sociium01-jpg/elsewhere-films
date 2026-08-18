export const easeEnter = [0.22, 1, 0.36, 1] as const;
export const easeScroll = [0.65, 0, 0.35, 1] as const;

export const duration = {
  text: 0.6,
  image: 0.9,
  section: 1.2,
  border: 1.2,
} as const;

export const stagger = {
  line: 0.06,
  tag: 0.08,
  card: 0.12,
  nav: 0.07,
} as const;

export const viewportOnce = {
  once: true,
  amount: 0.35,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.text, ease: easeEnter },
  },
} as const;
