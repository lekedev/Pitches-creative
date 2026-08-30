import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function AboutIntro() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-20 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow + Heading row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="flex items-center gap-2 text-sm font-[InstrumentSans] font-medium tracking-widest text-white">
              <span className="text-[#CF6702] w-[16px] h-[24px]">//</span> ABOUT
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-[Aspekta] text-right leading-[1.05] text-white sm:text-5xl lg:col-span-9 lg:text-6xl"
          >
            <span className="text-[#FFC24F]">Bold</span> Minds,  <span className="text-[#FFC24F]">Brave</span> Work.
          </motion.h2>
        </div>

        {/* Image + text row */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-sm bg-[#f4f1ea] lg:col-span-7"
          >
            <img
              src="/Aboutsectionpitches.webp"
              alt="Pitches Creative studio and brand work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-start gap-10 lg:col-span-5 lg:col-start-8 lg:justify-start"
          >
            <p className="text-justify font-[Aspekta] text-base leading-relaxed text-white/80">
              Pitches Creative helps ambitious businesses turn ideas into
              powerful brand identities, persuasive marketing systems,
              high-performing websites, and digital products built for
              growth.
            </p>

            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-sm font-medium font-[InstrumentSans] text-black no-underline transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:bg-black hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC24F] text-black transition-colors duration-300 group-hover:bg-white">
                →
              </span>
              Start Your Project
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;