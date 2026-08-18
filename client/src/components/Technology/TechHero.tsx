import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function TechHero() {
  return (
    <section
      className="
        relative
        overflow-visible
       
        px-5
        pt-28
        lg:px-12
        lg:pt-32
      "
    >
      {/* Hero content */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          lg:min-h-[520px]
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            z-20
            flex
            max-w-[560px]
            flex-col
            items-start
            gap-6
          "
        >
          <h1
            className="
            whitespace-nowrap
              max-w-xl
              font-[aspekta]
              text-2xl
              font-normal
              leading-[1.05]
              sm:text-5xl
              lg:text-6xl
          "
          >
            <span className="text-[#FFC24F] ">Digital Products</span>{" "}
            <span className="text-white">
              Built For <br></br> Real Users, Real
            </span>{" "}
            <span className="text-[#FFC24F]">Businesses,<br></br></span>{" "}
            <span className="text-white">And</span>{" "}
            <span className="text-[#FFC24F]">Real Growth.</span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-[#FFFBF4]">
            We design and develop technology-based products including SaaS
            platforms, native apps, web applications, dashboards, portals,
            and custom digital systems for businesses across different
            sectors.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <NavLink
              to="/contact"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/40
                bg-white/5
                px-6
                py-3
                text-sm
                font-medium
                text-white
                no-underline
                backdrop-blur-sm
                transition-colors
                hover:bg-white
                hover:text-black
              "
            >
              Start a Technology Project
            </NavLink>

            <NavLink
              to="/work"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/30
                px-6
                py-3
                text-sm
                font-medium
                text-white
                no-underline
                transition-colors
                hover:bg-white/10
              "
            >
              View Tech Case Studies
            </NavLink>
          </div>
        </motion.div>

        {/* ================= DASHBOARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[-8%]
            z-10
            w-[68%]
            lg:right-[-10%]
            lg:w-[70%]
            xl:right-[-20%]
            xl:w-[68%]
          "
        >
          <img
            src="/technology/dashboard.png"
            alt="Client dashboard product mockup"
            className="
              block
              h-auto
              w-[650px]
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TechHero;