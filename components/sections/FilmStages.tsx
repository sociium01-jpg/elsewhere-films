import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { FadeUp } from "@/components/motion/FadeUp";

const STAGES = [
  {
    title: "Script",
    image: "/images/stage-script.webp",
    alt: "Hand holding a fountain pen above paper",
    kicker: "You're Shaping An Idea.",
    body: "For selected projects, this conversation may grow into a creative partnership, with Elsewhere joining as producer or co-producer.",
  },
  {
    title: "Nearing Completion",
    image: "/images/stage-nearing.webp",
    alt: "Color grading and editing workstation",
    kicker: "The film is almost ready.",
    body: "Now it's time to prepare it for the world beyond the edit suite.",
  },
  {
    title: "Festival Ready",
    image: "/images/stage-festival.webp",
    alt: "Phone held up in a crowded screening",
    kicker: "Every festival opens different doors.",
    body: "Together, we'll find the ones that matter most for your film.",
  },
  {
    title: "In Circulation",
    image: "/images/stage-circulation.webp",
    alt: "Movie theatre looking toward a bright screen",
    kicker: "The premiere is behind you.",
    body: "Now let's build what comes next—new audiences, new territories and new opportunities.",
  },
] as const;

export function FilmStages() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-ink-offWhite"
      aria-labelledby="stages-heading"
    >
      <div className="mx-auto max-w-frame px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <AnimatedHeading
          as="h2"
          id="stages-heading"
          mode="chars"
          text="EVERY FILM HAS ITS JOURNEY."
          className="text-center font-display text-[18px] font-bold uppercase tracking-caps text-ink-charcoal md:text-[22px]"
        />
        <AnimatedHeading
          as="p"
          mode="words"
          delay={0.2}
          text="TELL US YOURS."
          className="mt-3 text-center font-display text-[16px] font-semibold uppercase tracking-caps text-ink-grey md:text-[18px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-[6px] sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, index) => (
            <FadeUp key={stage.title} delay={index * 0.08} className="flex h-full flex-col">
              <article className="flex h-full flex-col bg-[#5C5C5C]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 py-5 md:px-5">
                  <h3 className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-ink-white">
                    {stage.title}
                  </h3>
                  <p className="mt-3 font-display text-[13px] font-medium leading-snug tracking-body text-ink-white">
                    {stage.kicker}
                  </p>
                  <p className="mt-3 font-body text-[11px] font-light leading-relaxed tracking-body text-ink-white/90">
                    {stage.body}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>

      <Link
        href="#contact"
        className="flex items-center justify-center gap-4 bg-ink-black px-5 py-4 font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-ink-white transition-colors hover:bg-ink-charcoal md:text-[14px]"
      >
        Tell us about your film
        <span
          aria-hidden
          className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-red text-[16px] leading-none"
        >
          ›
        </span>
      </Link>
    </section>
  );
}
