import type { ReactNode } from "react";
import { serviceCategories } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageIntro } from "../components/ui/PageIntro";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/Button";
import { CtaSection } from "../components/ui/CtaSection";
import { Approach } from "../components/shared/Approach";
import { BrowserMock } from "../components/mockups/BrowserMock";
import { PhoneMock } from "../components/mockups/PhoneMock";
import { BrandCard } from "../components/mockups/BrandCard";
import { AnalyticsMock } from "../components/mockups/AnalyticsMock";

const shadow = "drop-shadow-[0_24px_36px_rgba(23,23,23,0.14)]";

// Illustrative visual for each category, keyed by service id.
const visuals: Record<string, ReactNode> = {
  "digital-experiences": <BrowserMock className={`w-full ${shadow}`} />,
  "software-technology": (
    <div className="flex items-end justify-center gap-[6%]">
      <PhoneMock className={`w-[34%] ${shadow}`} />
      <PhoneMock className={`w-[34%] translate-y-[-12%] ${shadow}`} />
    </div>
  ),
  "creative-media": (
    <div className="relative mx-auto aspect-[6/5] w-full">
      <BrandCard className={`absolute left-0 top-0 w-[70%] ${shadow}`} />
      <BrandCard className={`absolute bottom-0 right-0 w-[70%] ${shadow}`} />
    </div>
  ),
  "growth-support": <AnalyticsMock className={`w-full ${shadow}`} />,
};

export default function Services() {
  usePageMeta({
    title: "Services",
    description:
      "Digital experiences, software and technology, creative and media, growth and support — what The Stable Company offers and how to choose.",
  });

  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            Everything it takes to build, launch and <em>grow.</em>
          </>
        }
        lede="Design, technology, media and strategy under one roof — so your website, software and brand are built to work together."
      />

      {/* Self-selection index */}
      <section aria-labelledby="choose-heading" className="container-page pb-20 md:pb-28">
        <h2 id="choose-heading" className="sr-only">
          Which service do you need?
        </h2>
        <ul className="grid border-t border-line md:grid-cols-2 xl:grid-cols-4">
          {serviceCategories.map((category, index) => (
            <Reveal as="li" key={category.id} delay={index * 0.05} className="border-b border-line md:odd:border-r md:odd:pr-6 md:even:pl-6 xl:border-r xl:px-6 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0">
              <a href={`#${category.id}`} className="group flex h-full flex-col gap-5 py-8">
                <span className="text-eyebrow tabular-nums text-ember-deep">{category.number}</span>
                <span className="text-xl font-medium tracking-[-0.015em] transition-colors group-hover:text-ember-deep">
                  {category.title}
                </span>
                <span className="text-stone">
                  Choose this if {category.chooseIf}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-heading`}
          className={`section-y scroll-mt-16 ${index % 2 === 0 ? "bg-sand" : ""}`}
        >
          <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow index={category.number}>Service</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id={`${category.id}-heading`} className="mt-8 text-headline">
                  {category.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone">{category.problem}</p>
              </Reveal>

              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <Reveal>
                  <h3 className="text-eyebrow font-medium uppercase text-stone">What we offer</h3>
                  <ul className="mt-4 border-t border-line">
                    {category.items.map((item) => (
                      <li key={item} className="border-b border-line py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.05}>
                  <h3 className="text-eyebrow font-medium uppercase text-stone">Typically for</h3>
                  <ul className="mt-4 border-t border-line">
                    {category.audience.map((who) => (
                      <li key={who} className="border-b border-line py-3 text-stone">
                        {who}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal className="mt-12">
                <ButtonLink to={`/contact?service=${category.id}`}>Enquire about {category.title}</ButtonLink>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="flex items-center lg:col-span-5 lg:col-start-8">
              <figure className="w-full">
                {visuals[category.id]}
                <figcaption className="mt-6 text-[13px] text-stone">Illustrative visual</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      ))}

      <Approach index="05" />
      <CtaSection
        title={
          <>
            Not sure where to <em>start?</em>
          </>
        }
        lede="Tell us what you're trying to achieve. We'll recommend the right mix of services — and be honest if you don't need them."
        cta={{ label: "Start a Project", to: "/contact" }}
      />
    </>
  );
}
