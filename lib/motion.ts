export const easeEnter = [0.22, 1, 0.36, 1] as const;
export const easeScroll = [0.65, 0, 0.35, 1] as const;

export const duration = {
  text: 0.4,
  image: 0.7,
  section: 0.8,
  border: 1.0,
  page: 0.2,
} as const;

export const stagger = {
  child: 0.04,
  line: 0.06,
  tag: 0.08,
  card: 0.04,
  nav: 0.07,
} as const;

export const viewportOnce = {
  once: true,
  amount: 0.35,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeEnter },
  },
} as const;
