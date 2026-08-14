import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function TechHero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto grid  max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          <h1 className="text-2xl w-[708px] h-[300px]  font-medium font-[aspekta] leading-[1.15] sm:text-5xl lg:text-6xl">
            <span className="text-[#FFC24F]">Digital Products</span>{" "}
            <span className="text-white">Built For Real Users, Real</span>{" "}
            <span className="text-[#FFC24F]">Businesses,</span>{" "}
            <span className="text-white">And</span>{" "}
            <span className="text-[#FFC24F]">Real Growth.</span>
          </h1>

          <p className="w-[538px] h-[62px] text-sm mx-3  leading-relaxed text-[#FFFBF4]">
            We design and develop technology-based products including SaaS
            platforms, native apps, web applications, dashboards, portals,
            and custom digital systems for businesses across different
            sectors.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-medium text-white no-underline backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
            >
              Start a Technology Project
            </NavLink>
            <NavLink
              to="/work"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white/10"
            >
              View Tech Case Studies
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:-mr-12 lg:translate-x-16 xl:-mr-2 xl:translate-x-24"
        >
          
          <img
            src="/technology/dashboard.png"
            alt="Client dashboard product mockup"
            className="w-[745px] h-[565px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TechHero;