// components/Services/PortfolioShowcase.tsx
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface Item {
  id: string;
  label: string;
  image: string;
}

const initialTopRow: Item[] = [
  { id: "costco", label: "Costco", image: "Rectangle 10.png" },
  { id: "coinbase", label: "Coinbase", image: "Rectangle 11.png" },
  { id: "qoom-1", label: "Qoom Bottles", image: "Rectangle 12.png" },
];

const initialBottomRow: Item[] = [
  { id: "qoom-2", label: "Qoom Bottles Detail", image: "Rectangle 13.png" },
  { id: "studio", label: "Studio Setup", image: "Rectangle 14.png" },
  { id: "drop-app", label: "Drop App", image: "Rectangle 15.png" },
];

const VISIBLE_COUNT = 3;

function PortfolioShowcase() {
  const [topItems, setTopItems] = useState(initialTopRow);
  const [bottomItems, setBottomItems] = useState(initialBottomRow);

  // Next: leftmost card fades out and goes to the back of the queue,
  // remaining cards shift left, next queued card slides in from the right.
  const next = useCallback(() => {
    setTopItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setBottomItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  // Prev: reverse — last-queued card slides back in from the left,
  // current leftmost card fades out to the back of the queue (on the right).
  const prev = useCallback(() => {
    setTopItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
    setBottomItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  }, []);

  const renderRow = (items: Item[]) => (
    <div className="flex gap-6 overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        {items.slice(0, VISIBLE_COUNT).map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="aspect-[4/3] w-[70%] flex-shrink-0 overflow-hidden rounded-sm sm:w-[45%] lg:w-[32%]"
          >
            <img
              src={item.image}
              alt={item.label}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="relative bg-[#0a0a0a] px-5 pb-20 pt-24 lg:px-12 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-14 lg:flex-row lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            <span className="text-white">Where</span> <span className="italic text-[#FFC24F]">Strategy</span>
            <br />
            <span className="text-white pl-48 font-[Aspekta]">Meets Execution.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2 text-sm font-medium tracking-widest text-white/80 lg:mt-2"
          >
            <span className="text-orange-500">//</span> SERVICES
          </motion.p>
        </div>

        {/* Paragraph + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 flex flex-col items-start gap-6 lg:mb-20 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="max-w-md text-justify text-sm leading-relaxed text-white/80">
            Pitches Creative helps ambitious businesses turn ideas into
            powerful brand identities, persuasive marketing systems,
            high-performing websites, and digital products built for growth.
          </p>
          <NavLink
            to="/services"
            className="inline-flex flex-shrink-0 items-center rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black no-underline transition-colors hover:bg-orange-300"
          >
            Explore Our Services
          </NavLink>
        </motion.div>
      </div>

      {/* Two-row queue carousel */}
      <div className="relative">
        <div className="pb-6">{renderRow(topItems)}</div>
        <div className="pl-[6rem] lg:pl-[10rem]">{renderRow(bottomItems)}</div>

        {/* Shared arrows — control both rows together */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-[22%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400 text-orange-400 transition-colors hover:bg-orange-400 hover:text-black lg:left-4"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-[78%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 lg:right-4"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default PortfolioShowcase;