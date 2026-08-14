import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { brandingProjects } from "../../data/brandingProjects";

const AUTO_ADVANCE_MS = 5000;

function SelectedProjects() {
  const [pageIndex, setPageIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setPageIndex((i + brandingProjects.length) % brandingProjects.length),
    []
  );
  const next = useCallback(() => goTo(pageIndex + 1), [pageIndex, goTo]);
  const prev = useCallback(() => goTo(pageIndex - 1), [pageIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % brandingProjects.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [pageIndex]);

  const currentProject = brandingProjects[pageIndex];

  return (
    <section className="px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-medium text-white sm:text-3xl">
            Selected <span className="text-[#FFC24F]">Projects</span>
          </h2>
          <p className="max-w-sm text-sm text-[#FFFBF4]">
            Explore selected branding projects created to help businesses
            improve recognition, build trust, and show up with stronger
            visual confidence.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {currentProject.coverImages.map((image, i) => (
                <NavLink
                  key={`${currentProject.id}-${i}`}
                  to={`/projects/${currentProject.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl no-underline"
                >
                  <img
                    src={image}
                    alt={currentProject.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-base font-medium text-white">
                      {currentProject.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">
                      {currentProject.client} · {currentProject.year}
                    </p>
                  </div>
                </NavLink>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {brandingProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === pageIndex ? "w-6 bg-[#FFC24F]" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-colors hover:bg-[#FFC24F] hover:text-black"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;