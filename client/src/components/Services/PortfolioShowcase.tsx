// components/Services/PortfolioShowcase.tsx
import { motion } from "framer-motion";
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

// Duplicated so each row's CSS animation loops seamlessly at -50%
const loopTopRow = [...topRow, ...topRow];
const loopBottomRow = [...bottomRow, ...bottomRow];

function MarqueeRow({
  items,
  direction,
}: {
  items: Item[];
  direction: "forward" | "reverse";
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max flex-shrink-0 gap-6 ${
          direction === "forward" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
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
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
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

      {/* Two rows drifting in opposite directions, no manual controls */}
      <div className="flex flex-col gap-6">
        <MarqueeRow items={loopTopRow} direction="forward" />
        <MarqueeRow items={loopBottomRow} direction="reverse" />
      </div>
    </section>
  );
}

export default PortfolioShowcase;