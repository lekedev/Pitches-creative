// components/Branding/BrandingHero.tsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const categories = [
  "Identity",
  "Strategy",
  "Communications",
  "Visualization",
  "Positioning",
  "Design",
];

// Duplicated so the marquee loops seamlessly at -50%
// const loopCategories = [...categories, ...categories];

function BrandingHero() {
  return (
    <section className="px-5 pb-10 pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-4xl font-[aspekta] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-medium leading-[1.2] sm:text-4xl lg:text-5xl"
        >
          <span className="text-[#FFC24F]">Brands</span>{" "}
          <span className="text-white">People Understand,<br /> Remember, </span>
          <span className="text-[#FFC24F]">And Trust.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#FFFBF4]"
        >
          Your brand is more than your logo. It is how your business looks,
          speaks, feels, and shows up across every touchpoint. We help you
          shape a brand that communicates clearly, looks credible, and gives
          people a reason to choose you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <NavLink
            to="/contact"
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white no-underline transition-all hover:scale-[1.03] active:scale-95 hover:bg-white hover:text-black"
          >
            Start a Branding Project
          </NavLink>
          <NavLink
            to="/work"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white no-underline transition-all hover:scale-[1.03] active:scale-95 hover:bg-white/10"
          >
            View Branding Work
          </NavLink>
        </motion.div>
      </div>

      
      {/* Category row — static, full width */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative left-1/2 right-1/2 -mx-[50vw] mt-14 w-screen border-y border-white/15 bg-black/40 py-5 backdrop-blur-sm"
            >
            <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 px-5 lg:px-12">
                {categories.map((cat) => (
                <span
                    key={cat}
                    className="flex items-center gap-6  text-[16px] text-white"
                >
                    <img
                    src="/branding/crystalbranding.png"
                    alt=""
                    className="h-8 w-14 object-contain"
                    />
                    {cat}
                </span>
                ))}
            </div>
        </motion.div>
    </section>
  );
}

export default BrandingHero;