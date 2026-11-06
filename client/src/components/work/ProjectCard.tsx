import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { ProjectCover } from "./ProjectCover";

/** Gallery card: cover, name, summary, tags. Links to the case study. */
export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className={`overflow-hidden rounded-sm ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <div className="h-full w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.02]">
          <ProjectCover project={project} />
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl tracking-[-0.02em]">{project.name}</h3>
          <p className="mt-2 max-w-xl text-stone">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Categories">
            {[project.kind, ...project.categories].map((tag) => (
              <li key={tag} className="rounded-full border border-line px-3 py-1 text-[13px] text-stone">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
          <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
