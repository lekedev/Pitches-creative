// components/Services/ServicesIntro.tsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ServicesIntro() {
  return (
    <section className="relative bg-[#0a0a0a] px-5 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40">
      {/* Gray panel layer, sits behind content */}
      {/* <div className="absolute inset-x-0 top-0 z-0 h-[572px] w-[1027px] bg-[#7F7F7F]/30 lg:w-[85%]" /> */}
      <div className="absolute left-[-1px]  z-0 w-[1027px] h-[572px] bg-[#7F7F7F]/30" />
   
  


      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:max-w-md"
        >
          <p className="flex font-[InstrumentSans] mt-38  items-center gap-2 text-sm font-medium tracking-widest text-white/80">
            <span className="text-orange-500">//</span> SERVICES
          </p>
          <p
            className="
              w-full
              max-w-[434px]
              text-base
              leading-relaxed
              text-white/80
              font-[Aspekta]
            "
            >
            From identity to interface, campaign to conversion, we build the
            assets businesses need to show up professionally and grow with
            confidence.
           </p>
          <div className="flex flex-wrap  items-center gap-6">
            <NavLink
              to="/services"
              end
              className="inline-flex items-center  rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black no-underline transition-colors hover:bg-orange-300"
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

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-right  text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
        >
            <div className="font-[Aspekta] top-[90px] right-[80px]">
                <span className="text-[#FFC24F] font-[Aspekta] ">Crafting </span>
                <span className="italic text-white">Solutions</span>
                <br />
                <span className="text-[#FFC24F]">That Scale</span>
            </div>
        </motion.h1>
      </div>
    </section>
  );
}

export default ServicesIntro;