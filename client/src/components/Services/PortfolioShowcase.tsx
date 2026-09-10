// components/Services/PortfolioShowcase.tsx
import { useLayoutEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "framer-motion";
import { NavLink } from "react-router-dom";

interface Item {
  id: string;
  label: string;
  image: string;
}

const topRow: Item[] = [
  { id: "costco", label: "Costco", image: "Rectangle 10.webp" },
  { id: "coinbase", label: "Coinbase", image: "Rectangle 11.webp" },
  { id: "qoom-1", label: "Qoom Bottles", image: "Rectangle 12.webp" },
];

const bottomRow: Item[] = [
  { id: "qoom-2", label: "Qoom Bottles Detail", image: "Rectangle 13.webp" },
  { id: "studio", label: "Studio Setup", image: "Rectangle 14.webp" },
  { id: "drop-app", label: "Drop App", image: "Rectangle 15.webp" },
];

// Duplicated so each row's loop wraps seamlessly once it scrolls past one full set
const loopTopRow = [...topRow, ...topRow];
const loopBottomRow = [...bottomRow, ...bottomRow];

const GAP_PX = 24; // gap-6
const LOOP_DURATION_S = 30; // matches the previous CSS marquee timing
const FADE_ZONE_PX = 220; // width of the reserved arrow/fade zone
const ARROW_INSET_PX = 130; // how far the arrow sits inside that zone, toward the image edge

function MarqueeRow({
  items,
  direction,
  arrowSide,
}: {
  items: Item[];
  direction: "forward" | "reverse";
  arrowSide: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const loopWidthRef = useRef(0);
  const speedRef = useRef(0);
  const isManualRef = useRef(false);

  // Measure the width of one full set of items (half the duplicated track)
  // so the auto-scroll speed and wrap point match the row's actual layout.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const loopWidth = track.scrollWidth / 2;
      loopWidthRef.current = loopWidth;
      speedRef.current = loopWidth / LOOP_DURATION_S;
      if (direction === "reverse" && x.get() === 0) {
        x.set(-loopWidth);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [direction, x]);

  useAnimationFrame((_, delta) => {
    if (isManualRef.current) return;
    const loopWidth = loopWidthRef.current;
    if (!loopWidth) return;

    const dir = direction === "forward" ? -1 : 1;
    let next = x.get() + dir * speedRef.current * (delta / 1000);

    if (direction === "forward" && next <= -loopWidth) next += loopWidth;
    if (direction === "reverse" && next >= 0) next -= loopWidth;

    x.set(next);
  });

  const handleArrowClick = () => {
    const track = trackRef.current;
    const loopWidth = loopWidthRef.current;
    if (!track || !loopWidth) return;

    const firstItem = track.firstElementChild as HTMLElement | null;
    const step = (firstItem?.offsetWidth ?? 300) + GAP_PX;
    const dir = direction === "forward" ? -1 : 1;

    isManualRef.current = true;
    animate(x, x.get() + dir * step, {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => {
        let val = x.get();
        if (direction === "forward" && val <= -loopWidth) val += loopWidth;
        if (direction === "reverse" && val >= 0) val -= loopWidth;
        x.set(val);
        isManualRef.current = false;
      },
    });
  };

  const isLeftArrow = arrowSide === "left";

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="relative z-0 flex w-max flex-shrink-0 gap-6"
      >
        {items.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="aspect-[4/3] w-[10%] flex-shrink-0 overflow-hidden rounded-sm sm:w-[45%] lg:w-[24rem]"
          >
            <img
              src={item.image}
              alt={item.label}
              loading="lazy"
              className="h-[237px] w-[449px] object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Reserves the arrow's space: solid for most of the zone, fading only right at the image edge */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 z-10 ${
          isLeftArrow ? "left-0" : "right-0"
        }`}
        style={{
          width: FADE_ZONE_PX,
          background: isLeftArrow
            ? "linear-gradient(to right, #0a0a0a 0%, #0a0a0a 70%, transparent 100%)"
            : "linear-gradient(to left, #0a0a0a 0%, #0a0a0a 70%, transparent 100%)",
        }}
      />

      <button
        type="button"
        onClick={handleArrowClick}
        aria-label={isLeftArrow ? "Scroll gallery left" : "Scroll gallery right"}
        className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFC24F] bg-transparent text-white transition-colors duration-300 hover:bg-[#FFC24F] hover:text-black"
        style={isLeftArrow ? { left: ARROW_INSET_PX } : { right: ARROW_INSET_PX }}
      >
        {isLeftArrow ? "←" : "→"}
      </button>
    </div>
  );
}

function PortfolioShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-5 pb-20 pt-24 lg:px-12 lg:pb-28 lg:pt-32">
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
            <span className="text-white">Where</span>{" "}
            <span className="italic text-[#FFC24F]">Strategy</span>
            <br />
            <span className="pl-48 font-[Aspekta] text-white">
              Meets Execution.
            </span>
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
          className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-center"
        >
          <p className="max-w-md text-justify text-sm leading-relaxed text-white/80">
            Pitches Creative helps ambitious businesses turn ideas into
            powerful brand identities, persuasive marketing systems,
            high-performing websites, and digital products built for growth.
          </p>
          <NavLink
            to="/services"
            className="inline-flex flex-shrink-0 items-center rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black no-underline transition-all hover:scale-[1.03] active:scale-95 hover:bg-orange-300"
          >
            Explore Our Services
          </NavLink>
        </motion.div>
      </div>

      {/* Two rows drifting in opposite directions, each with a manual nudge control */}
      <div className="flex flex-col gap-6">
        <MarqueeRow items={loopTopRow} direction="forward" arrowSide="left" />
        <MarqueeRow items={loopBottomRow} direction="reverse" arrowSide="right" />
      </div>
    </section>
  );
}

export default PortfolioShowcase;
