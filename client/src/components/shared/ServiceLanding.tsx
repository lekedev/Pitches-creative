import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NewsletterSignup from "../Insights/NewsletterSignup";
import StarfieldBackground from "./StarfieldBackground";
import type { ServicePageContent } from "../../data/servicePages";

function ServiceLanding({ content }: { content: ServicePageContent }) {
  const loopCategories = [...content.categories, ...content.categories];

  return (
    <div className="relative bg-[#0a0a0a] font-[Aspekta]">
      <StarfieldBackground blur />

      <div className="relative z-10">
        {/* Hero */}
        <section className="px-5 pb-10 pt-32 lg:px-12 lg:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center justify-center gap-2 font-[InstrumentSans] text-sm font-medium tracking-widest text-white"
            >
              <span className="text-[#FFC24F]">//</span> {content.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-medium leading-[1.2] lg:text-5xl"
            >
              <span className="text-[#FFC24F]">{content.heading.lead}</span>{" "}
              <span className="text-white">{content.heading.middle}</span>{" "}
              <span className="text-[#FFC24F]">{content.heading.tail}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#FFFBF4]"
            >
              {content.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-4"
            >
              <NavLink
                to="/contact"
                className="inline-flex items-center rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black no-underline transition-all hover:scale-[1.03] active:scale-95 hover:bg-orange-300"
              >
                {content.primaryCta}
              </NavLink>
              <NavLink
                to="/services"
                className="liquid-glass-btn inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white no-underline transition-transform hover:scale-[1.03] active:scale-95"
              >
                All Services
              </NavLink>
            </motion.div>
          </div>

          {/* Category marquee */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-14 w-screen overflow-hidden border-y border-white/15 bg-black/40 py-5 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black/70 to-transparent lg:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/70 to-transparent lg:w-32" />

            <div className="flex overflow-hidden">
              <div className="animate-marquee flex flex-shrink-0 items-center gap-10 pr-10">
                {loopCategories.map((cat, i) => (
                  <span
                    key={`${cat}-${i}`}
                    className="flex flex-shrink-0 items-center gap-6 text-[16px] text-white"
                  >
                    <span className="text-[#FFC24F]">✦</span>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="px-5 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-medium leading-[1.1] text-white sm:text-4xl lg:text-5xl"
            >
              <span className="text-[#FFC24F]">
                {content.approachHeading.lead}
              </span>{" "}
              {content.approachHeading.tail}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              {content.approach.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-white/80"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Offerings */}
        <section className="bg-black px-5 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-3xl font-medium text-white sm:text-4xl lg:text-[40px]">
              What We <span className="text-[#FFC24F]">Offer</span>
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.offerings.map((offering, i) => (
                <motion.div
                  key={offering.highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#1b1b1b_0%,rgba(27,27,27,0)_100%)] p-6"
                >
                  <span className="font-[InstrumentSans] text-sm text-[#FFC24F]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium leading-tight text-white">
                    {offering.title}{" "}
                    <span className="text-[#FFC24F]">{offering.highlight}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {offering.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-5 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-3xl font-medium text-white sm:text-4xl lg:text-[40px]">
              How We <span className="text-[#FFC24F]">Work</span>
            </h2>

            <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-5">
              {content.process.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col gap-3 border-t border-[#FFC24F]/60 pt-5"
                >
                  <span className="text-sm text-white/50">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-5 pb-20 lg:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
            {content.gallery.map((item) => (
              <div
                key={item.label}
                className="group relative h-[260px] overflow-hidden rounded-[14px] border border-white/10 lg:h-[340px]"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <NewsletterSignup />
      </div>
    </div>
  );
}

export default ServiceLanding;
