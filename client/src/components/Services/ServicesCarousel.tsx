import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const services = [
  { label: "Service 1", image: "Service.png" },
  { label: "Brand Design", image: "Branddesign.png" },
  { label: "App Development", image: "Appdev.png" },
  { label: "Web Development", image: "Webdev.png" },
];

const AUTO_ADVANCE_MS = 4000;
const VISIBLE_DESKTOP = 3.4; // how many cards show at once (fractional = partial peek)

function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = services.length - 1;

  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex))),
    [maxIndex]
  );
  const next = useCallback(() => goTo(index + 1 > maxIndex ? 0 : index + 1), [index, goTo, maxIndex]);
  const prev = useCallback(() => goTo(index - 1 < 0 ? maxIndex : index - 1), [index, goTo, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, maxIndex]);

  return (
    <section className="bg-[#0a0a0a] px-5 pb-20 lg:px-12 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 lg:gap-5"
            animate={{
              x: `calc(-${index} * (${100 / VISIBLE_DESKTOP}% + 1.25rem))`,
            }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            {services.map((service, i) => (
              <div
                key={service.label}
                className="relative aspect-[3/4] w-[70%] flex-shrink-0 overflow-hidden rounded-sm sm:w-[45%] lg:w-[calc(100%/3.4)]"
              >
                <img
                  src={service.image}
                  alt={service.label}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 px-5 py-4 backdrop-blur-sm">
                  <p className="text-lg font-[36px] font-[Aspekta] text-[#FFC24F] sm:text-xl">
                    {service.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFC24F] text-white transition-colors hover:bg-[#f1af35] hover:text-black"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFC24F] text-white transition-colors hover:bg-[#f1af35] hover:text-black"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesCarousel;