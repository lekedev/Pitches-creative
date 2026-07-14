import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ScrollSpyNav from "./ScrollSpyNav";
import aboutBg from "../../assets/images/bgAbout.png";

function AboutHero() {
  return (
    <section
      id="about"
      className="relative min-h-screen font-[Aspekta] overflow-hidden bg-[#0a0a0a] px-5 pb-20 pt-28 lg:px-12 lg:pt-36"
    >
      
      <img
        src={aboutBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover"
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
            {/* <img
              src={heroImage}
              alt="Pitches Creative"
              className="h-full w-full rounded-2xl object-cover"
            /> */}
          </motion.div>

          {/* Paragraph + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <p className="text-sm leading-relaxed font-[Aspekta] text-white/80">
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

          {/* Scroll Spy Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-3"
          >
            <ScrollSpyNav />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;