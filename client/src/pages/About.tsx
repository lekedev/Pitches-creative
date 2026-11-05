import { usePageMeta } from "../hooks/usePageMeta";
import { PageIntro } from "../components/ui/PageIntro";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { CtaSection } from "../components/ui/CtaSection";
import { Approach } from "../components/shared/Approach";

const beliefs = [
  {
    title: "Good work starts with understanding.",
    description:
      "Before we design or build anything, we take time to understand the business, the people it serves and what success looks like.",
  },
  {
    title: "Design and engineering belong together.",
    description:
      "The best digital experiences are shaped by people who understand both how something should feel and how it should work.",
  },
  {
    title: "Quality is a habit, not a phase.",
    description:
      "Clear thinking, careful craft and honest communication — on the first day of a project and long after launch.",
  },
];

const principles = [
  { word: "Useful", line: "It solves a real problem for a real person." },
  { word: "Considered", line: "Every decision has a reason behind it." },
  { word: "Lasting", line: "It is built to be maintained, improved and grown." },
];

const differences = [
  {
    title: "One team across disciplines",
    description:
      "Brand, design, content and software are planned together, so what we make looks, reads and works as one — without you coordinating several suppliers.",
  },
  {
    title: "Strategy before solutions",
    description:
      "We recommend what your goals actually need. Sometimes that's a new platform; sometimes it's a better version of what you already have.",
  },
  {
    title: "Built to be looked after",
    description:
      "We write maintainable code, document what we build and stay available after launch, so your investment keeps working.",
  },
];

const capabilities = {
  Creative: [
    "Brand identity and visual systems",
    "Graphic and editorial design",
    "Motion graphics",
    "Content creation and media production",
    "Creative direction",
    "UI/UX design",
  ],
  Technical: [
    "Websites and e-commerce",
    "Custom web and mobile applications",
    "Business systems: CRM, inventory, operations",
    "AI integrations and workflow automation",
    "Search, analytics and performance",
    "Maintenance and technical support",
  ],
};

export default function About() {
  usePageMeta({
    title: "About",
    description:
      "The Stable Company combines creativity, technology and strategy to build digital experiences, products and solutions that help businesses move forward.",
  });

  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            Creativity and technology, working as <em>one.</em>
          </>
        }
        lede="We combine creativity, technology and strategy to build digital experiences, products and solutions that help businesses move forward."
      />

      {/* Who we are */}
      <section aria-labelledby="who-heading" className="section-y border-t border-line">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="01">Who we are</Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 id="who-heading" className="text-title">
                A hybrid creative and technology company.{" "}
                <span className="text-stone">
                  We bring design, media and software engineering together to help businesses, organisations and
                  individuals build things that matter.
                </span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 text-lg leading-relaxed text-stone md:grid-cols-2 md:gap-16">
              <Reveal delay={0.05}>
                <p>
                  Most projects need more than one kind of expertise. A new venture needs a brand and a website. A
                  growing business needs better systems and a clearer story. A creator needs a platform and the content
                  to fill it.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  We work across all of it — so the thinking behind your brand carries through to the product you
                  launch, and the technology you rely on is shaped by how your business actually works.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section aria-labelledby="believe-heading" className="section-y bg-ink text-ivory">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <Eyebrow index="02" tone="dark">
                What we believe
              </Eyebrow>
            </Reveal>
            <Reveal className="lg:col-span-9">
              <h2 id="believe-heading" className="max-w-[16ch] text-headline">
                Three convictions that shape <em className="font-serif font-normal italic tracking-[-0.02em]">everything.</em>
              </h2>
            </Reveal>
          </div>
          <ol className="mt-16 grid border-t border-line-dark md:mt-24 md:grid-cols-3">
            {beliefs.map((belief, index) => (
              <Reveal
                as="li"
                key={belief.title}
                delay={index * 0.06}
                className="border-b border-line-dark py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="text-eyebrow tabular-nums text-ember-light">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-2xl tracking-[-0.02em]">{belief.title}</h3>
                <p className="mt-4 leading-relaxed text-stone-light">{belief.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-heading" className="section-y">
        <div className="container-page">
          <Reveal>
            <Eyebrow index="03">Our philosophy</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="philosophy-heading" className="sr-only">
              Our philosophy
            </h2>
            <p className="mt-10 max-w-[20ch] font-serif text-headline italic tracking-[-0.02em]">
              Build things that are useful, considered and made to last.
            </p>
          </Reveal>
          <dl className="mt-16 grid border-t border-line md:mt-24 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.word} delay={index * 0.06} className="border-b border-line py-8 md:border-b-0 md:pr-8">
                <dt className="text-title">{principle.word}</dt>
                <dd className="mt-3 text-stone">{principle.line}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* What makes us different */}
      <section aria-labelledby="different-heading" className="section-y bg-sand">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow index="04">How we're different</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="different-heading" className="mt-10 max-w-[12ch] text-headline">
                  The creative and the technical, <em className="font-serif font-normal italic tracking-[-0.02em]">together.</em>
                </h2>
              </Reveal>
            </div>
          </div>
          <ul className="border-t border-ink/15 lg:col-span-7">
            {differences.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.05} className="grid gap-4 border-b border-ink/15 py-10 sm:grid-cols-[4rem_1fr]">
                <span className="text-eyebrow tabular-nums text-ember-deep sm:pt-2">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-stone">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-heading" className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow index="05">Capabilities</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 id="capabilities-heading" className="max-w-[18ch] text-title">
                What we bring to a project.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
              {Object.entries(capabilities).map(([group, list], index) => (
                <Reveal key={group} delay={index * 0.06}>
                  <h3 className="text-eyebrow font-medium uppercase text-stone">{group}</h3>
                  <ul className="mt-4 border-t border-line">
                    {list.map((capability) => (
                      <li key={capability} className="border-b border-line py-4 text-lg">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Approach index="06" />
      <CtaSection />
    </>
  );
}
