import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "../../data/services";
import { ButtonLink } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

export function WhatWeDo() {
  return (
    <section aria-labelledby="services-heading" className="section-y bg-ink text-ivory">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="02" tone="dark">
              What we do
            </Eyebrow>
          </Reveal>
          <Reveal className="lg:col-span-9">
            <h2 id="services-heading" className="max-w-[16ch] text-headline">
              Four disciplines. <em className="font-serif font-normal italic tracking-[-0.02em]">One partner.</em>
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-line-dark md:mt-24">
          {serviceCategories.map((category, index) => (
            <Reveal as="li" key={category.id} delay={index * 0.05} className="border-b border-line-dark">
              <Link
                to={`/services#${category.id}`}
                className="group grid gap-6 py-10 md:py-12 lg:grid-cols-12 lg:gap-10"
                aria-label={`${category.title} — view service details`}
              >
                <span className="text-eyebrow tabular-nums text-ember-light lg:col-span-1 lg:pt-3">{category.number}</span>

                <h3 className="text-title transition-transform duration-500 ease-out-expo group-hover:translate-x-2 lg:col-span-4">
                  {category.title}
                </h3>

                <p className="max-w-sm leading-relaxed text-stone-light lg:col-span-3 lg:pt-2">{category.summary}</p>

                <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-[15px] text-ivory/80 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1 lg:pt-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ember-light/60" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="hidden justify-end lg:col-span-1 lg:flex lg:pt-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark transition-colors duration-300 group-hover:border-ember-light group-hover:bg-ember-light group-hover:text-ink">
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-stone-light">Not sure which service fits? Tell us what you're trying to achieve and we'll point you in the right direction.</p>
          <ButtonLink to="/services" tone="dark" variant="secondary" arrow="right" className="self-start sm:self-auto">
            All services
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
