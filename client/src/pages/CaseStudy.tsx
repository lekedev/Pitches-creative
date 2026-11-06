import { useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/Button";
import { CtaSection } from "../components/ui/CtaSection";
import { ProjectCover } from "../components/work/ProjectCover";
import NotFound from "./NotFound";

/** Marks content that hasn't been supplied yet, so nothing is invented. */
function Pending() {
  return <p className="italic text-stone">To be published.</p>;
}

function CaseSection({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-6 border-t border-line py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div className="md:col-span-4">
        <Eyebrow index={index}>{title}</Eyebrow>
      </div>
      <div className="max-w-2xl text-lg leading-relaxed md:col-span-8">{children}</div>
    </Reveal>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  usePageMeta({
    title: project ? `${project.name} — Case study` : "Case study",
    description: project?.summary,
    image: project?.images[0]?.src,
  });

  if (!project) return <NotFound />;

  const others = projects.filter((p) => p.slug !== project.slug);
  const meta = [
    { label: "Type", value: project.kind },
    { label: "Category", value: project.categories.join(", ") },
    { label: "Year", value: project.year },
  ];

  return (
    <article>
      <header className="container-page pb-14 pt-36 sm:pt-44 lg:pt-52">
        <Reveal immediate>
          <Eyebrow>Case study</Eyebrow>
        </Reveal>
        <Reveal immediate delay={0.08}>
          <h1 className="mt-8 text-display">{project.name}</h1>
        </Reveal>
        <Reveal immediate delay={0.16} className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="text-lede text-stone md:col-span-7">{project.summary}</p>
          <dl className="grid grid-cols-3 gap-6 md:col-span-5">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-eyebrow uppercase text-stone">{item.label}</dt>
                <dd className={`mt-2 ${item.value ? "" : "italic text-stone"}`}>{item.value || "TBC"}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        {project.url && (
          <Reveal immediate delay={0.2} className="mt-10">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1.5 text-[15px] font-medium transition-colors hover:border-ember"
            >
              Visit {project.name}
              <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        )}
      </header>

      <Reveal immediate delay={0.25} className="container-page">
        <div className="aspect-[16/10] overflow-hidden rounded-sm">
          <ProjectCover project={project} />
        </div>
      </Reveal>

      <div className="container-page section-y">
        <CaseSection index="01" title="Overview">
          {project.overview ? <p>{project.overview}</p> : <Pending />}
        </CaseSection>
        <CaseSection index="02" title="The challenge">
          {project.challenge ? <p>{project.challenge}</p> : <Pending />}
        </CaseSection>
        <CaseSection index="03" title="Our approach">
          {project.approach ? <p>{project.approach}</p> : <Pending />}
        </CaseSection>
        <CaseSection index="04" title="Services delivered">
          {project.services.length ? (
            <ul className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <li key={service} className="rounded-full border border-line px-4 py-1.5 text-base">
                  {service}
                </li>
              ))}
            </ul>
          ) : (
            <Pending />
          )}
        </CaseSection>
        <CaseSection index="05" title="Technology">
          {project.technology.length ? (
            <ul className="flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <li key={tech} className="rounded-full border border-line px-4 py-1.5 text-base">
                  {tech}
                </li>
              ))}
            </ul>
          ) : (
            <Pending />
          )}
        </CaseSection>
        <CaseSection index="06" title="Outcomes">
          {project.outcomes ? <p>{project.outcomes}</p> : <Pending />}
        </CaseSection>

        {project.images.length > 1 && (
          <section aria-label="Product visuals" className="mt-8 grid gap-6 md:grid-cols-2">
            {project.images.slice(1).map((image) => (
              <Reveal key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full rounded-sm" />
              </Reveal>
            ))}
          </section>
        )}

        <div className="mt-8 flex flex-wrap gap-4 border-t border-line pt-12">
          <ButtonLink to="/work" variant="secondary" arrow="right">
            All work
          </ButtonLink>
          {others[0] && (
            <ButtonLink to={`/work/${others[0].slug}`} variant="text" arrow="right">
              Next: {others[0].name}
            </ButtonLink>
          )}
        </div>
      </div>

      <CtaSection />
    </article>
  );
}
