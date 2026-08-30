import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Service 1",
    image: "/Service.webp",
  },
  {
    title: "Brand Design",
    image: "/Branddesign.webp",
  },
  {
    title: "App Development",
    image: "/Appdev.webp",
  },
  {
    title: "Web Development",
    image: "/Webdev.webp",
  },
  // Add more services here.
  {
    title: "UI / UX Design",
    image: "/UIDesign.webp",
  },
];

const STEP_POSITIONS = [
  {
    x: 0,
    y: 68,
    width: 355,
    height: 397,
  },
  {
    x: 355,
    y: 48,
    width: 355,
    height: 397,
  },
  {
    x: 636,
    y: 30,
    width: 355,
    height: 397,
  },
  {
    x: 932,
    y: 0,
    width: 355,
    height: 397,
  },
];

const STEP_COUNT = STEP_POSITIONS.length;

function ServicesSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayNonce, setAutoplayNonce] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  // Manual nav resets the 3s timer so it doesn't double-advance right after a click.
  const handleManualNav = (action: () => void) => {
    action();
    setAutoplayNonce((n) => n + 1);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [isPaused, autoplayNonce]);

  return (
    <section
      className="relative overflow-hidden bg-black px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Figma Panel */}
      <div className="relative mx-auto min-h-[760px] w-full max-w-[1299px] overflow-hidden rounded-2xl bg-[#181717] px-6 pb-8 pt-16 sm:px-10 lg:min-h-[680px] lg:px-16 lg:pt-20">

        {/* =====================================================
            TOP CONTENT
        ====================================================== */}

        <div className="relative z-20 flex flex-col lg:flex-row lg:justify-between">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[430px]"
          >
            {/* Label */}
            <p className="mb-5 flex items-center gap-2 font-[InstrumentSans] text-xs font-medium tracking-wide text-white">
              <span className="text-[#FFC24F]">//</span>
              SERVICES
            </p>

            {/* Description */}
            <p className="max-w-[430px] font-[Aspekta] text-sm leading-relaxed text-[#D9D9D9] sm:text-base">
              From identity to interface, campaign to conversion, we build the
              assets businesses need to show up professionally and grow with
              confidence.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <NavLink
                to="/services"
                className="inline-flex items-center rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black no-underline transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:bg-orange-300"
              >
                Explore Our Services
              </NavLink>

              <NavLink
                to="/work"
                className="text-sm font-medium text-white/80 no-underline transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:text-white"
              >
                See How We Work
              </NavLink>
            </div>
          </motion.div>

          {/* RIGHT HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 lg:mt-0"
          >
            <h2 className="text-left font-[Aspekta] text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-right lg:text-[64px]">
              <span className="text-[#FFC24F]">
                Crafting{" "}
              </span>

              <span className="italic text-white">
                Solutions
              </span>

              <br />

              <span className="text-[#FFC24F]">
                That Scale
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP STEP CAROUSEL
        ====================================================== */}

        <div className="absolute bottom-16 left-0 hidden h-[310px] w-full lg:block">

          {services.map((service, index) => {
            /**
             * Calculate where this service currently sits.
             *
             * Example:
             *
             * current = 0
             *
             * Service 1  -> position 0
             * Brand      -> position 1
             * App        -> position 2
             * Web        -> position 3
             *
             * current = 1
             *
             * Service 1  -> position 3
             * Brand      -> position 0
             * App        -> position 1
             * Web        -> position 2
             */

            const relativePosition =
              (index - current + services.length) % services.length;

            /**
             * Only the first four positions are visible.
             */
            const isVisible = relativePosition < STEP_COUNT;

            /**
             * When a card leaves the visible area, give it a
             * temporary position outside the stage.
             */
            const position = isVisible
              ? STEP_POSITIONS[relativePosition]
              : {
                  x: 760,
                  y: 90,
                  width: 185,
                  height: 280,
                };

            return (
              <motion.div
                key={service.title}
                initial={false}
                animate={{
                  x: position.x,
                  y: position.y,
                  width: position.width,
                  height: position.height,
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.96,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-[24px] overflow-hidden rounded-sm"
                style={{
                  transformOrigin: "bottom left",
                  zIndex: isVisible
                    ? STEP_COUNT - relativePosition
                    : 0,
                }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                {/* Dark gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-3 py-2">
                  <h3 className="font-[Aspekta] text-lg leading-none text-[#FFC24F]">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE SERVICES
        ====================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-5 lg:hidden">
          {services.map((service, index) => {
            const relativePosition =
              (index - current + services.length) % services.length;

            const isVisible = relativePosition < STEP_COUNT;

            if (!isVisible) return null;

            return (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative h-[360px] overflow-hidden rounded-sm"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="font-[Aspekta] text-2xl text-[#FFC24F]">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 lg:right-6">
          <button
            type="button"
            onClick={() => handleManualNav(prev)}
            aria-label="Previous service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:bg-[#FFC24F] hover:text-black"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => handleManualNav(next)}
            aria-label="Next service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:bg-[#FFC24F] hover:text-black"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;