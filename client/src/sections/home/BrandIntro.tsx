import { ButtonLink } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

const audiences = [
  {
    title: "Businesses & organisations",
    description:
      "Startups, SMEs, schools, healthcare providers, e-commerce brands and corporate teams that need websites, software, automation and a brand that holds together.",
  },
  {
    title: "Individuals & creators",
    description:
      "Entrepreneurs, professionals, artists and creators building personal brands, portfolios, content and digital products of their own.",
  },
];

export function BrandIntro() {
  return (
    <section id="company" aria-labelledby="company-heading" className="section-y">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="01">The company</Eyebrow>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 id="company-heading" className="text-title">
                Good ideas deserve more than execution.{" "}
                <span className="text-stone">
                  They deserve the right thinking, the right tools and the right people to bring them to{" "}
                  <em className="font-serif font-normal italic tracking-[-0.01em] text-ink">life.</em>
                </span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
              <Reveal delay={0.05}>
                <p className="text-lg leading-relaxed text-stone">
                  We are a creative and technology company building brands, digital experiences and solutions that
                  make a meaningful difference — bringing design, media and software engineering together under one
                  roof.
                </p>
                <ButtonLink to="/about" variant="text" arrow="right" className="mt-8">
                  About the company
                </ButtonLink>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-eyebrow font-medium uppercase text-stone">Who we work with</p>
                <dl className="mt-5 border-t border-line">
                  {audiences.map((audience) => (
                    <div key={audience.title} className="border-b border-line py-5">
                      <dt className="font-medium">{audience.title}</dt>
                      <dd className="mt-2 leading-relaxed text-stone">{audience.description}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
