import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

interface FeaturedPost {
  id: string;
  slug: string;
  title: ReactPart;
  description: string;
  coverImage: string;
}

type ReactPart = string;

const featured: FeaturedPost[] = [
  {
    id: "1",
    slug: "why-a-strong-brand-is-more-than-a-logo",
    title: "Why a Strong Brand Is More Than a Logo",
    description:
      "A logo can make you recognizable, but a brand system makes you memorable. Learn why serious businesses need strategy, messaging, visuals, and digital consistency working together...",
    coverImage: "/insight/Rectangle 42 (1).png",
  },
  {
    id: "2",
    slug: "the-real-cost-of-inconsistent-branding",
    title: "The Real Cost of Inconsistent Branding",
    description:
      "Every mismatched touchpoint chips away at trust. Here's how fragmented visuals and messaging quietly cost businesses credibility and conversions.",
    coverImage: "/insight/insight2.jpeg",
  },
  {
    id: "3",
    slug: "what-makes-a-website-actually-convert",
    title: "What Makes a Website Actually Convert",
    description:
      "Beautiful design isn't enough on its own. We break down the structural and messaging decisions that turn visitors into customers.",
    coverImage: "/insight/insight.jpeg",
  },
];

function FeaturedInsights() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setIndex((i + featured.length) % featured.length),
    []
  );

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = featured[index];

  return (
    <section className="bg-[#0a0a0a] px-5 py-16 font-[Aspekta] lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg">
            <span className="italic text-[#FFC24F]">Featured</span>{" "}
            <span className="text-white">Insights</span>
          </p>

          <NavLink
            to="/insights/all"
            className="rounded-full border border-white/30 px-5 py-2 text-xs font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
          >
            See All Insights
          </NavLink>
        </div>

        <div className="relative h-[380px] overflow-hidden rounded-2xl lg:h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={current.coverImage}
                alt={current.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8 lg:max-w-xl">
                <h2 className="text-2xl font-medium text-white lg:text-3xl">
                  {current.title.split(" ").map((word, i) =>
                    i === 2 || i === 3 ? (
                      <span key={i} className="text-[#FFC24F]">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h2>

                <p className="text-sm text-white/80">
                  {current.description}
                </p>

                <NavLink
                  to={`/insights/${current.slug}`}
                  className="mt-2 inline-flex w-fit items-center rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
                >
                  Read More
                </NavLink>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to featured post ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#FFC24F]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedInsights;