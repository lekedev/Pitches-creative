import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { brandingProjects } from "../../data/brandingProjects";

function SelectedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = (index: number) => {
    const clamped =
      (index + brandingProjects.length) % brandingProjects.length;

    rowRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const next = () => {
    goTo(activeIndex + 1);
  };

  const prev = () => {
    goTo(activeIndex - 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    rowRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:mb-9">
          <h2 className="text-3xl font-medium leading-none tracking-[-0.03em] text-white sm:text-4xl lg:text-[40px]">
            Selected <span className="text-[#FFC24F]">Projects</span>
          </h2>

          <p className="max-w-[401px] text-[16px] leading-[1.55] text-[#FFFBF4] sm:text-xs lg:max-w-[285px]">
            Explore selected branding projects created to help businesses
            improve recognition, build trust, and show up with stronger
            visual confidence.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mx-auto w-full lg:max-w-[1068px]">
          {brandingProjects.map((project, index) => {
            /*
              Alternate the actual column track widths per row:
              even rows: 648px | 404px
              odd rows:  404px | 648px

              Images stay in their natural order — only the column
              template flips, not which image sits where.
            */
            const gridTemplate =
              index % 2 === 0
                ? "lg:grid-cols-[648px_404px]"
                : "lg:grid-cols-[404px_648px]";

            return (
              <motion.div
                key={`${project.id}-${index}`}
                ref={(element) => {
                  rowRefs.current[index] = element;
                }}
                data-index={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className={`mb-4 grid w-full grid-cols-1 gap-4 ${gridTemplate}`}
              >
                {project.coverImages.map((image, imageIndex) => (
                  <NavLink
                    key={`${project.id}-${index}-${imageIndex}`}
                    to={`/projects/${project.slug}`}
                    className="group relative block h-[220px] overflow-hidden rounded-[14px] border border-white/10 bg-black sm:h-[260px] lg:h-[300px]"
                  >
                    <img
                      src={image}
                      alt={`${project.title} project`}
                      className="h-full w-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white sm:text-base">
                        {project.title}
                      </p>
                      <p className="mt-0.5 text-xs text-white/70">
                        {project.client}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="mx-auto mt-7 flex w-full items-center justify-between sm:mt-8 lg:max-w-[1068px]">
          <div className="flex items-center gap-[5px]">
            {brandingProjects.map((project, index) => (
              <button
                key={`${project.id}-${index}`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className="flex h-4 w-4 items-center justify-center transition-all duration-200 hover:scale-[1.03] active:scale-95"
              >
                <span
                  className={`block h-[7px] w-[7px] rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-[#FFC24F]" : "bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FFC24F]/70 text-[18px] leading-none text-white transition-all duration-300 hover:bg-[#FFC24F] hover:text-black sm:h-10 sm:w-10"
            >
              <span className="-translate-x-[1px]">←</span>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FFC24F] text-[18px] leading-none text-[#FFC24F] transition-all duration-300 hover:bg-[#FFC24F] hover:text-black sm:h-10 sm:w-10"
            >
              <span className="translate-x-[1px]">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;