import { motion } from "framer-motion";
import wrld from "../../assets/images/wrld.png";
import deliverd from "../../assets/images/deliverd.png";
import happycl from "../../assets/images/happycl.png";

interface Stat {
  icon: string;
  stat: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: wrld,
    stat: "10",
    label: "Years of Experience",
  },
  {
    icon: deliverd,
    stat: "128",
    label: "Projects Delivered",
  },
  {
    icon: happycl,
    stat: "120",
    label: "Happy Clients",
  },
];

function StatsCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-5 py-16 font-[Aspekta] lg:px-12 lg:py-24">
      <img
        src="/homebg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            /*
              CARD SIZE: aspect-[401/199] locks the card to the exact
              Figma ratio (roughly 2:1) at any width. `relative` lets the
              icon below position itself against this card's edges,
              not the page.
            */
            className="relative aspect-[401/199] overflow-visible rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
          >
            {/*
              ICON: positioned absolute, pulled outside the top-left
              corner with negative offsets so it visually "bleeds" past
              the card border, matching the screenshot. Adjust -top-* /
              -left-* to control how far it overflows, and the h-/w-
              values to resize the icon itself.
            */}
            <img
              src={item.icon}
              alt=""
              className="absolute -left-0 -top-0 h-24 w-24 object-contain lg:h-28 lg:w-28"
            />

            {/*
              TEXT BLOCK: pinned to the bottom-right corner of the card,
              right-aligned. Adjust `bottom-6 right-6` to change its
              distance from the card edges.
            */}
            <div className="absolute bottom-6 right-6 text-right">
              <p className="flex items-baseline justify-end text-4xl font-bold text-white lg:text-5xl">
                {item.stat}
                <span className="ml-1 text-[#FFC24F]">+</span>
              </p>
              <p className="text-sm text-white/70">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsCarousel;