// components/Services/ServicesIntro.tsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ServicesIntro() {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 pb-16 pt-24 lg:px-12 lg:pb-24 lg:pt-40">
      {/* Background Panel */}
      <div className="absolute left-1/2 top-0 z-0 h-[922px] w-[1299px] -translate-x-1/2 rounded-2xl bg-[#181717] lg:h-[582px] lg:w-[1199px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-7 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        {/* Heading - First on mobile, Right on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1  lg:order-2"
        >
          <h1 className="text-left text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-right lg:text-6xl">
            <span className="font-[Aspekta] text-[#FFC24F]">
              Crafting
            </span>{" "}
            <span className="font-[Aspekta] italic text-white">
              Solutions
            </span>
            <br />
            <span className="font-[Aspekta] text-[#FFC24F]">
              That Scale
            </span>
          </h1>
        </motion.div>

        {/* Content - Second on mobile, Left on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-2 flex flex-col gap-6 lg:order-1 lg:mt-32 lg:max-w-md"
        >
          <p className="flex items-center gap-2 font-[InstrumentSans] text-sm font-medium tracking-widest text-white/80">
            <span className="text-orange-500">//</span>
            SERVICES
          </p>

          <p className="max-w-[434px] font-[Aspekta] text-base leading-relaxed text-white/80">
            From identity to interface, campaign to conversion, we build the
            assets businesses need to show up professionally and grow with
            confidence.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <NavLink
              to="/services"
              end
              className="inline-flex items-center rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black no-underline transition-colors hover:bg-orange-300"
            >
              Explore Our Services
            </NavLink>

            <NavLink
              to="/work"
              className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white"
            >
              See How We Work
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesIntro;