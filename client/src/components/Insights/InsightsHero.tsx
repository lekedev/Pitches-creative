import { motion } from "framer-motion";
import { useState } from "react";

function InsightsHero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className="relative h-[300px] overflow-hidden bg-[#0a0a0a] font-[Aspekta] sm:h-[380px] lg:h-[431px]">
      {/*
        Import your background image at the top of the file, e.g.:
        import insightsBg from "../../assets/images/insightsBg.png";
        then swap the src below to {insightsBg}
      */}
      <motion.img
        src="/insight/BgInsight.webp"
        alt=""
        aria-hidden="true"
        onLoad={() => setBgLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-8 lg:px-12 lg:pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-medium tracking-wide text-white sm:text-5xl"
        >
          INSIGHTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 max-w-md text-sm leading-relaxed text-white/80"
        >
          Ideas on branding, design, marketing, websites, and digital growth.
        </motion.p>
      </div>
    </section>
  );
}

export default InsightsHero;