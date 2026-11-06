import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../data/projects";
import { ProjectCover } from "../../components/work/ProjectCover";
import { ButtonLink } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

function Detail({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="border-b border-line py-4">
      <dt className="text-eyebrow uppercase text-stone">{label}</dt>
      <dd className={`mt-2 ${value ? "" : "italic text-stone"}`}>{value ?? "To be published"}</dd>
    </div>
  );
}

export function FeaturedWork() {
  const [project] = featuredProjects;

  return (
    <section aria-labelledby="work-heading" className="section-y">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="03">Selected work</Eyebrow>
          </Reveal>
          <Reveal className="flex flex-col gap-8 lg:col-span-9 md:flex-row md:items-end md:justify-between">
            <h2 id="work-heading" className="max-w-[14ch] text-headline">
              Built by us, <em className="font-serif font-normal italic tracking-[-0.02em]">used by people.</em>
            </h2>
            <ButtonLink to="/work" variant="text" arrow="right" className="shrink-0 self-start md:self-auto">
              All work
            </ButtonLink>
          </Reveal>
        </div>

        {project && (
          <article aria-labelledby={`project-${project.slug}`} className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-8">
              <Link
                to={`/work/${project.slug}`}
                className="group block aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[16/11]"
                aria-label={`${project.name} case study`}
              >
                <div className="h-full w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.02]">
                  <ProjectCover project={project} />
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col lg:col-span-4">
              <h3 id={`project-${project.slug}`} className="text-title">
                {project.name}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-stone">{project.summary}</p>

              <dl className="mt-8 border-t border-line">
                <Detail label="Type" value={project.kind} />
                <Detail label="Services" value={project.services.length ? project.services.join(", ") : null} />
                <Detail label="Technology" value={project.technology.length ? project.technology.join(", ") : null} />
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-auto lg:pt-10">
                <ButtonLink to={`/work/${project.slug}`} arrow="right">
                  View case study
                </ButtonLink>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[15px] font-medium text-stone transition-colors hover:text-ink"
                  >
                    Visit live site
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            </Reveal>
          </article>
        )}
      </div>
    </section>
  );
}
