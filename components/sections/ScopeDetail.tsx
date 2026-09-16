import { OfferingMark } from "@/components/brand/OfferingMark";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { cn } from "@/lib/cn";
import { OFFERINGS_SCOPE } from "@/lib/copy";

export function ScopeDetail() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="scope-heading">
      <div className="mx-auto grid max-w-frame px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-14">
        <FadeUp className="lg:col-span-8">
          <h2
            id="scope-heading"
            className="mt-5 font-display text-[22px] font-bold tracking-display text-ink-charcoal md:text-[28px]"
          >
            The scope, in detail
          </h2>
        </FadeUp>

        <RevealGroup as="ul" className="mt-14 grid gap-4 md:grid-cols-2 lg:col-span-12">
          {OFFERINGS_SCOPE.map((offering, index) => {
            const isCoProduction = offering.name === "Co-production";
            return (
              <FadeUp
                key={offering.name}
                grouped
                as="li"
                className={cn(isCoProduction && "md:col-span-2")}
              >
                <article
                  className={cn(
                    "h-full border border-ink-charcoal/10 px-6 py-7 md:px-8 md:transition-transform md:duration-300 md:ease-enter md:hover:-translate-y-1 motion-reduce:transform-none",
                    isCoProduction ? "bg-transparent" : "bg-ink-white",
                  )}
                >
                  <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[15px] font-bold tracking-display text-ink-charcoal md:text-[17px]">
                    {offering.name}
                  </h3>
                  <OfferingMark delay={index * 0.06} />
                  <p className="mt-4 max-w-measure font-body text-[14px] font-light leading-body tracking-body text-ink-charcoal md:text-[15px]">
                    {offering.body}
                  </p>
                </article>
              </FadeUp>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
