import type { Project } from "../../data/projects";

/** Cover for a project: its first screenshot if supplied, otherwise a typographic panel in its brand colours. */
export function ProjectCover({ project }: { project: Project }) {
  const image = project.images[0];
  if (image) {
    return <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />;
  }

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between p-6 sm:p-10"
      style={{ backgroundColor: project.theme.background, color: project.theme.foreground }}
    >
      <div className="flex items-start justify-between gap-4 text-eyebrow uppercase opacity-70">
        <span>{project.kind}</span>
        <span className="text-right">{project.categories.join(" · ")}</span>
      </div>
      <p className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.02em]">{project.name}</p>
      <p className="text-[13px] opacity-60">Product visuals coming soon</p>
    </div>
  );
}
