import { motion } from "framer-motion";

function TestimonialsIntro() {
  return (
    <section className="bg-[#0a0a0a] px-5 pb-16 pt-32 lg:px-12 lg:pb-20 lg:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 lg:max-w-sm"
        >
          <p className="flex items-center gap-2 text-sm font-medium tracking-widest text-white/80">
            <span className="text-orange-500">//</span> CLIENT CONFIDENCE
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            The best creative work makes people feel more confident about
            presenting their business. Our goal is to help clients walk away
            with assets they are proud to share and systems they can
            actually use.
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-right text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          <span className="text-[#FFC24F] font-[Aspekta]">Crafting </span>
          <span className="italic text-white">Solutions</span>
          <br />
          <span className="text-[#FFC24F] font-[Aspekta]">That Scale</span>
        </motion.h1>
      </div>
    </section>
  );
}

export default TestimonialsIntro;