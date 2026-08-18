import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ApproachSection() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 lg:mb-16 lg:flex-row lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-[Aspekta] leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            Ideas. Brands.
            <br />
           <div className="px-30">Product. <span className="text-[#FFC24F]">Growth</span></div>
          </motion.h2>

          
         
        </div>

        {/* Image + text row */}
        <div className="grid grid-cols-1 gap-6 bg-[#181717] lg:grid-cols-12 lg:gap-5">
  {/* IMAGE */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="overflow-hidden rounded-sm lg:col-span-5"
  >
    <img
      src="/Rectangle 1.webp"
      alt="Pitches Creative brand and product work"
      loading="lazy"
      className="block h-full w-full object-cover"
    />
  </motion.div>

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="flex flex-col justify-center gap-8 lg:col-span-7 lg:col-start-6 lg:px-12"
  >
    <div className="flex flex-col gap-4 text-base leading-relaxed text-[#D9D9D9]">
      <p>
        Every business has something to say. The challenge is making
        people care, trust it, and act on it. Pitches Creative helps
        brands move from scattered ideas to clear creative systems —
        identity, messaging, marketing assets, websites, and digital
        products working together with purpose.
      </p>

      <p>
        Whether you are launching, repositioning, scaling, or rebuilding
        your digital presence, we help you create the kind of brand
        experience that feels intentional from the first click.
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-6">
      <NavLink
        to="/contact"
        className="inline-flex items-center rounded-full bg-[#FFC24F] px-9 py-4 text-sm font-medium text-black no-underline transition-colors hover:bg-orange-300"
      >
        Explore Our Services
      </NavLink>
    </div>
  </motion.div>
</div>
      </div>
    </section>
  );
}

export default ApproachSection;