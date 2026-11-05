import { values } from "../../data/process";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

export function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="section-y">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow index="05">Why The Stable Company</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="why-heading" className="mt-10 max-w-[12ch] text-headline">
                What you can <em className="font-serif font-normal italic tracking-[-0.02em]">expect</em> from us.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-stone">
                No inflated promises — just the way we work, on every project, whatever its size.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-7">
          {values.map((value, index) => (
            <Reveal
              as="li"
              key={value.title}
              delay={(index % 2) * 0.06}
              className="border-b border-line py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 md:py-10"
            >
              <span className="text-eyebrow tabular-nums text-ember-deep">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl tracking-[-0.015em]">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{value.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
