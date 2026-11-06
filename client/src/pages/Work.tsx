import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageIntro } from "../components/ui/PageIntro";
import { Reveal } from "../components/ui/Reveal";
import { CtaSection } from "../components/ui/CtaSection";
import { ProjectCard } from "../components/work/ProjectCard";

const ALL = "All";

export default function Work() {
  usePageMeta({
    title: "Work",
    description: "Selected products and projects designed and built by The Stable Company.",
  });

  // Filters are derived from the data, so new categories appear automatically.
  const filters = useMemo(
    () => [ALL, ...Array.from(new Set(projects.flatMap((p) => [p.kind, ...p.categories])))],
    [],
  );
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? projects : projects.filter((p) => p.kind === active || p.categories.includes(active));

  return (
    <>
      <PageIntro
        eyebrow="Work"
        title={
          <>
            Products and projects, <em>built with care.</em>
          </>
        }
        lede="A selection of what we've designed and built. Each case study shows the thinking behind the work — not just the finished result."
      />

      <section aria-labelledby="gallery-heading" className="container-page pb-24 md:pb-32">
        <h2 id="gallery-heading" className="sr-only">
          Project gallery
        </h2>

        <Reveal>
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2 border-t border-line pt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
                className={`h-10 rounded-full border px-4 text-sm transition-colors duration-300 ${
                  active === filter ? "border-ink bg-ink text-ivory" : "border-line text-stone hover:border-ink hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                // A lone or leading project spans the full width for a stronger editorial opening.
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} large={index === 0} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-20 max-w-md text-stone">
          More case studies are being prepared and will be published as projects are documented.
        </p>
      </section>

      <CtaSection
        title={
          <>
            Your project could be <em>next.</em>
          </>
        }
        lede="Tell us about what you're building and where you'd like it to go."
        cta={{ label: "Start a Project", to: "/contact" }}
      />
    </>
  );
}
