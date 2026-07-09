import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    bg: "/homebg.png",
    description:
      "Pitches Creative helps ambitious businesses turn ideas into powerful brand identities,",
    stat: "10",
    label: "Years of Experience",
  },
  {
    bg: "/homebg.png",
    description:
      "We partner closely with founders and teams to build brands people trust.",
    stat: "128",
    label: "Happy Clients",
  },
  {
    bg: "/homebg.png",
    description:
      "From strategy to execution, every project is built to perform.",
    stat: "128",
    label: "Projects Delivered",
  },
];

const AUTO_ADVANCE_MS = 5000;

function StatsCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Autoplay, resets whenever index changes (manual nav restarts the timer)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="bg-[#0a0a0a] font-[Aspekta] px-5 py-16 lg:px-12 lg:py-24">
      {/* Mobile: single full-width card, crossfades */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-sm lg:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].bg}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <p className="max-w-[55%] text-sm text-white/90">
                {slides[index].description}
              </p>
              <div className="text-right">
                <p className="flex items-baseline justify-end text-4xl font-[Aspekta] font-bold text-white">
                  {slides[index].stat}
                  <span className="ml-1 text-[#FFC24F]">+</span>
                </p>
                <p className="text-[16px] font-[Aspekta] text-white/70">{slides[index].label}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop: peek carousel, next slides visible as slivers */}
      <div className="relative hidden h-[440px] font-[Aspekta] w-full overflow-hidden rounded-sm lg:block">
        <motion.div
          className="flex h-full gap-4"
          animate={{ x: `calc(-${index} * (90% + 1rem))` }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.bg}
              className="relative h-full w-[90%] flex-shrink-0 overflow-hidden rounded-sm"
            >
              <img
                src={slide.bg}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-10">
                <p className="max-w-sm text-[26px] text-white/90">
                  {slide.description}
                </p>
                <div className="flex-shrink-0 text-right">
                  <p className="flex items-baseline justify-end text-6xl font-[Aspekta] font-bold text-white">
                    {slide.stat}
                    <span className="ml-1 text-[#FFC24F]">+</span>
                  </p>
                  <p className="text-[16px] font-[Aspekta] text-white/70">{slide.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-[calc(10%+1rem+1rem)] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          →
        </button>
      </div>

      {/* Dots — shared across breakpoints */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-orange-500" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default StatsCarousel;