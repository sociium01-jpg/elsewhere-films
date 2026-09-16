import { OfferingMark } from "@/components/brand/OfferingMark";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { OFFERINGS_SCOPE } from "@/lib/copy";

export function ScopeDetail() {
  return (
    <section className="bg-ink-offWhite" aria-labelledby="scope-heading">
      <div className="mx-auto max-w-frame px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <FadeUp>
          <h2
            id="scope-heading"
            className="mt-5 font-display text-[22px] font-bold tracking-caps text-ink-charcoal md:text-[28px]"
          >
            The scope, in detail
          </h2>
        </FadeUp>

        <RevealGroup className="mt-14 space-y-14">
          {OFFERINGS_SCOPE.map((offering, index) => (
            <FadeUp key={offering.name} grouped>
              <article className="grid gap-4 md:grid-cols-[100px_1fr] md:gap-12">
                <div className="text-brand-red">
                  <p className="font-display text-[12px] font-semibold tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <OfferingMark delay={index * 0.06} />
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold tracking-caps text-ink-charcoal md:text-[18px]">
                    {offering.name}
                  </h3>
                  <p className="mt-4 max-w-[68ch] font-body text-[15px] font-light leading-body tracking-body text-ink-charcoal">
                    {offering.body}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
