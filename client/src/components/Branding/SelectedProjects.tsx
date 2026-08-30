import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { brandingProjects } from "../../data/brandingProjects";

const AUTO_ADVANCE_MS = 5000;

function SelectedProjects() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentProject = brandingProjects[pageIndex];

  // ----------------------------------------
  // GO TO PROJECT
  // ----------------------------------------
  const goTo = useCallback((index: number) => {
    setPageIndex(
      (index + brandingProjects.length) % brandingProjects.length
    );
  }, []);

  // ----------------------------------------
  // NEXT PROJECT
  // ----------------------------------------
  const next = useCallback(() => {
    setPageIndex((prev) => (prev + 1) % brandingProjects.length);
  }, []);

  // ----------------------------------------
  // PREVIOUS PROJECT
  // ----------------------------------------
  const prev = useCallback(() => {
    setPageIndex(
      (prev) =>
        (prev - 1 + brandingProjects.length) %
        brandingProjects.length
    );
  }, []);

  // ----------------------------------------
  // AUTO SLIDE
  // ----------------------------------------
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setPageIndex((prev) => {
        return (prev + 1) % brandingProjects.length;
      });
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  // ----------------------------------------
  // SAFETY CHECK
  // ----------------------------------------
  if (!currentProject) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:mb-9">

          {/* TITLE */}
          <h2 className="font-medium leading-none tracking-[-0.03em] text-white text-3xl sm:text-4xl lg:text-[40px]">
            Selected{" "}
            <span className="text-[#FFC24F]">
              Projects
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-[401px] text-[16px] leading-[1.55] text-[#FFFBF4] sm:text-xs lg:max-w-[285px]">
            Explore selected branding projects created to help
            businesses improve recognition, build trust, and show
            up with stronger visual confidence.
          </p>

        </div>

        {/* =====================================================
            PROJECT GALLERY
        ===================================================== */}
        <div
          className="relative mx-auto w-full max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* PREVIOUS — side edge, vertically centered */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="
              absolute
              left-2
              top-1/2
              sm:top-3/4
              z-20
              -translate-y-1/2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#FFC24F]/70
              bg-black/60
              text-[18px]
              leading-none
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-[1.03]
              active:scale-95
              hover:bg-[#FFC24F]
              hover:text-black
              sm:h-10
              sm:w-10
            "
          >
            <span className="-translate-x-[1px]">
              ←
            </span>
          </button>

          {/* NEXT — side edge, vertically centered */}
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="
              absolute
              right-2
              top-1/2
              sm:top-1/4
              z-20
              -translate-y-1/2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#FFC24F]
              bg-black/60
              text-[18px]
              leading-none
              text-[#FFC24F]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-[1.03]
              active:scale-95
              hover:bg-[#FFC24F]
              hover:text-black
              sm:h-10
              sm:w-10
            "
          >
            <span className="translate-x-[1px]">
              →
            </span>
          </button>

          <AnimatePresence mode="wait">

            <motion.div
              key={currentProject.id}
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -35,
              }}
              transition={{
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="grid grid-cols-1 gap-4 sm:aspect-[929/588] sm:grid-cols-[repeat(24,minmax(0,1fr))] sm:grid-rows-2"
            >

              {/* =================================================
                  IMAGE 1 — ROW 1, SLOT A (6 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[0] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-6
                  "
                >
                  <div className="aspect-[4/5] h-full w-full overflow-hidden sm:aspect-auto">
                    <img
                      src={currentProject.gallery[0]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

              {/* =================================================
                  IMAGE 2 — ROW 1, SLOT B (9 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[1] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-9
                  "
                >
                  <div className="aspect-[6/5] h-full min-h-[220px] w-full overflow-hidden sm:min-h-0 sm:aspect-auto">
                    <img
                      src={currentProject.gallery[1]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

              {/* =================================================
                  IMAGE 3 — ROW 1, SLOT C (9 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[2] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-9
                  "
                >
                  <div className="aspect-[6/5] h-full w-full overflow-hidden sm:aspect-auto">
                    <img
                      src={currentProject.gallery[2]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

              {/* =================================================
                  IMAGE 4 — ROW 2, SLOT D (4 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[3] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-4
                  "
                >
                  <div className="aspect-[4/3] h-full w-full overflow-hidden sm:aspect-auto">
                    <img
                      src={currentProject.gallery[3]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

              {/* =================================================
                  IMAGE 5 — ROW 2, SLOT E (4 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[4] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-4
                  "
                >
                  <div className="aspect-[4/3] h-full w-full overflow-hidden sm:aspect-auto">
                    <img
                      src={currentProject.gallery[4]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

              {/* =================================================
                  IMAGE 6 — ROW 2, SLOT F (8 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[5] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-8
                  "
                >
                  <div className="aspect-[3/2] h-full w-full overflow-hidden sm:aspect-auto">
                    <img
                      src={currentProject.gallery[5]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

              {/* =================================================
                  IMAGE 7 — ROW 2, SLOT G (8 / 24 COLUMNS)
              ================================================= */}
              {currentProject.gallery?.[6] && (
                <NavLink
                  to={`/projects/${currentProject.slug}`}
                  className="
                    group
                    relative
                    col-span-1
                    block
                    h-full
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-white/10
                    bg-black
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                    active:scale-95
                    sm:col-span-8
                  "
                >
                  <div className="aspect-[3/2] h-full w-full overflow-hidden sm:aspect-auto">
                    <img
                      src={currentProject.gallery[6]}
                      alt={`${currentProject.title} project`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </NavLink>
              )}

            </motion.div>

          </AnimatePresence>
        </div>

        {/* =====================================================
            BOTTOM CONTROLS
        ===================================================== */}
        <div className="mt-7 flex items-center justify-center sm:mt-8">

          {/* -----------------------------------------------------
              PAGINATION DOTS
          ----------------------------------------------------- */}
          <div className="flex items-center gap-[5px]">

            {brandingProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={
                  index === pageIndex ? "true" : undefined
                }
                className="
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:scale-[1.03]
                  active:scale-95
                "
              >
                <span
                  className={`
                    block
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === pageIndex
                        ? "h-[7px] w-[7px] bg-[#FFC24F]"
                        : "h-[7px] w-[7px] bg-white/40"
                    }
                  `}
                />
              </button>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default SelectedProjects;