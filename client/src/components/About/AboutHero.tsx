import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import aboutBg from "../../assets/images/bgAbout.png";

function AboutHero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section
      id="about"
       className="relative flex h-screen snap-start snap-always items-center overflow-y-auto overflow-x-hidden bg-[#0a0a0a] px-5 py-20 lg:px-12 lg:pr-64"    >
      <motion.img
        src={aboutBg}
        alt=""
        aria-hidden="true"
        onLoad={() => setBgLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/75 to-[#0a0a0a]/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl"
        >
          Building brands with{" "}
          <span className="text-[#FFC24F]">clarity,</span> presence, and{" "}
          <span className="text-[#FFC24F]">purpose.</span>
        </motion.h1>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="aspect-square w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm lg:col-span-4"
          >
            {/* Replace this with an image when ready */}
          </motion.div>

          {/* Paragraph + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <p className="text-sm leading-relaxed text-white/80">
              We believe every serious business deserves a brand presence
              that reflects its ambition. That means more than a good logo,
              a beautiful website, or a few social media designs. It means
              building a clear visual and digital system that helps people
              understand who you are, trust what you offer, and choose you
              with confidence.
            </p>

            <p className="text-sm leading-relaxed text-white/80">
              At Pitches Creative, we combine brand thinking, visual design,
              marketing strategy, website development, and app development
              to help businesses show up professionally across every
              touchpoint.
            </p>

            <NavLink
              to="/contact"
              className="inline-flex w-fit items-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
            >
              Let's Talk
            </NavLink>
          </motion.div>

          {/* lg:col-span-3 spacer — keeps the grid proportions matching the
              Figma layout (text column doesn't stretch full width), even
              though ScrollSpyNav itself now renders once at the page level */}
          <div className="hidden lg:col-span-3 lg:block" />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;