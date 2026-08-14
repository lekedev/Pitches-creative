import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface ShowcaseItem {
  id: string;
  image: string;
  alt: string;
}

const items: ShowcaseItem[] = [
  { id: "1", image: "/technology/showcase-1.png", alt: "Booking dashboard app" },
  { id: "2", image: "/technology/showcase-2.png", alt: "Analytics dashboard tablet" },
  { id: "3", image: "/technology/showcase-3.png", alt: "Travel app mobile screens" },
  { id: "4", image: "/technology/showcase-4.png", alt: "Additional product showcase" },
];

const AUTO_ADVANCE_MS = 3000;
const VISIBLE_COUNT = 3;

function TechShowcase() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setIndex((i + items.length) % items.length),
    []
  );
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index]);

  // Sliding window of VISIBLE_COUNT items starting at `index`, wrapping around
  const visibleItems = Array.from({ length: VISIBLE_COUNT }, (_, i) => items[(index + i) % items.length]);

  return (
    <section className="px-5 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-medium leading-[1.2] sm:text-4xl"
          >
            <span className="text-[#FFC24F]">Digital Products</span>{" "}
            <span className="text-white">Shaped For Different </span>
            <span className="text-[#FFC24F]">Sectors</span>
            <span className="text-white"> And Use Cases.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm leading-relaxed text-white/60">
              Explore selected technology projects showing how strategy,
              design, and development come together to create practical
              digital products for businesses and organizations.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex w-fit items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white/10"
            >
              Start a project
            </NavLink>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {visibleItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to item ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-2.5 bg-[#FFC24F]" : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-colors hover:bg-[#FFC24F] hover:text-black"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechShowcase;