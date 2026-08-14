// components/Technology/TechShowcase.tsx
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface ShowcaseItem {
  id: string;
  image: string;
  alt: string;
}

const items: ShowcaseItem[] = [
  { id: "1", image: "/technology/Rectangle 131.png", alt: "Booking dashboard app" },
  { id: "2", image: "/technology/Rectangle 110.png", alt: "Analytics dashboard tablet" },
  { id: "3", image: "/technology/Rectangle 129.png", alt: "Travel app mobile screens" },
  { id: "4", image: "/technology/Rectangle 132.png", alt: "Product showcase 4" },
  { id: "5", image: "/technology/Rectangle 133.png", alt: "Product showcase 5" },
  { id: "6", image: "/technology/Rectangle 134.png", alt: "Product showcase 6" },
  { id: "7", image: "/technology/Rectangle 135.png", alt: "Product showcase 7" },
  { id: "8", image: "/technology/Rectangle 136.png", alt: "Product showcase 8" },
  { id: "9", image: "/technology/Rectangle 137.png", alt: "Product showcase 9" },
  { id: "10", image: "/technology/Rectangle 138.png", alt: "Product showcase 10" },
  { id: "11", image: "/technology/Rectangle 139.png", alt: "Product showcase 11" },
  { id: "12", image: "/technology/Rectangle 140.png", alt: "Product showcase 12" },
];

const AUTO_ADVANCE_MS = 3000;
const PER_PAGE = 3;
const totalPages = Math.ceil(items.length / PER_PAGE);

function TechShowcase() {
  const [pageIndex, setPageIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setPageIndex((i + totalPages) % totalPages),
    []
  );
  const next = useCallback(() => goTo(pageIndex + 1), [pageIndex, goTo]);
  const prev = useCallback(() => goTo(pageIndex - 1), [pageIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [pageIndex]);

  const currentPageItems = items.slice(
    pageIndex * PER_PAGE,
    pageIndex * PER_PAGE + PER_PAGE
  );

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

        <div className="relative mt-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              {currentPageItems.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === pageIndex ? "w-6 bg-[#FFC24F]" : "w-2.5 bg-white/30"
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