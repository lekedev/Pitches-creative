import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import dice from "../../assets/images/dice.png";

interface Card {
  icon: string;
  heading: ReactNode;
  description: string;
  featured?: boolean;
}

interface AboutSectionProps {
  id: string;
  heading: ReactNode;
  paragraphs: string[];
  image?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  ctaTo?: string;
  cards?: Card[];
}

function AboutSection({
  id,
  heading,
  paragraphs,
  image,
  backgroundImage,
  ctaLabel,
  ctaTo,
  cards,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[#0a0a0a] px-5 py-20 lg:px-12 lg:pr-64 lg:py-28"
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/95" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl"
        >
          {heading}
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-2 flex flex-col gap-6 lg:order-1"
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-white/80"
              >
                {p}
              </p>
            ))}

            {ctaLabel && ctaTo && (
              <NavLink
                to={ctaTo}
                className="inline-flex w-fit items-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
              >
                {ctaLabel}
              </NavLink>
            )}
          </motion.div>

          {/* Optional Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="order-1 aspect-[4/3] w-full rounded-2xl bg-white/10 lg:order-2"
          >
            {image && (
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            )}
          </motion.div>
        </div>

        {/* Value Cards */}
              {cards && cards.length > 0 && (
                <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-28">
                  {cards.map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`flex flex-col items-center rounded-2xl border p-8 text-center ${
                        card.featured
                          ? "border-[#FFC24F] bg-white/10 backdrop-blur-md"
                          : "border-white/10 bg-white/5 backdrop-blur-md"
                      }`}
                    >
                      {/* Icon */}
                      <div className="mb-6 flex h-20 w-20 items-center justify-center  bg-white/0">
                        <img
                          src={dice}
                          alt=""
                          className="h-[291px] w-[262px] object-contain"
                        />
                      </div>

                      {/* Heading */}
                      <h3 className="mb-4 text-xl font-medium text-[#FFFBF4]">
                        {card.heading}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-[#FFFBF4]/70">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
        {/* {cards && cards.length > 0 && (
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-28">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${
                  card.featured
                    ? "border-[#FFC24F] bg-white/10 backdrop-blur-md"
                    : "border-white/10 bg-white/5 backdrop-blur-md"
                }`}
              >
                <img
                  src={dice}
                  alt=""
                  className="mb-6 h-16 w-16 object-contain"
                />

                <h3 className="mb-4 text-xl font-medium text-white">
                  {card.heading}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}

export default AboutSection;