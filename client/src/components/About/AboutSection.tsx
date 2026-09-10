import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState, type ReactNode } from "react";

interface Card {
  icon: string;
  heading: ReactNode;
  description: string;
  featured?: boolean;
  image?: string;
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
  cardsLayout?: "bento" | "uniform" | "quad"; // bento = 3 top (equal) + rest below; uniform = equal 3-col grid; quad = single row of 4
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
  cardsLayout = "bento",
}: AboutSectionProps) {
  const [bgLoaded, setBgLoaded] = useState(false);
  const cardBorder = (card: Card) =>
    card.featured ? "border-[#FFC24F]" : "border-white/10";

  return (
    <section
      id={id}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] px-5 py-20 lg:px-12 lg:pr-64 lg:py-28"
    >
      {backgroundImage && (
        <>
          <motion.img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            onLoad={() => setBgLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: bgLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full scale-110 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/95" />
        </>
      )}

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-2 flex flex-col gap-6 lg:order-1"
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/80">
                {p}
              </p>
            ))}

            {ctaLabel && ctaTo && (
              <NavLink
                to={ctaTo}
                className="liquid-glass-btn inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-medium text-white no-underline transition-transform hover:scale-[1.03] active:scale-95"
              >
                {ctaLabel}
              </NavLink>
            )}
          </motion.div>

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

        {/* ================= Cards ================= */}
        {cards && cards.length > 0 && (
          <>
            {cardsLayout === "bento" ? (
              <div className="mt-20 space-y-6 lg:mt-28">
                {/* Top row: 3 equal-width cards */}
                <div className="flex flex-col gap-6 lg:flex-row">
                  {cards.slice(0, 3).map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`flex flex-col rounded-2xl border bg-transparent p-8 backdrop-blur-md lg:h-[320px] lg:flex-1 ${cardBorder(
                        card
                      )}`}
                    >
                      <img
                        src={card.icon}
                        alt=""
                        className="mb-6 h-[108px] w-[89px] object-contain"
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

                {/* Bottom row: remaining cards, equal size */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cards.slice(3).map((card, i) => (
                    <motion.div
                      key={i + 3}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                      className={`flex flex-col rounded-2xl border bg-transparent p-8 backdrop-blur-md lg:h-[284px] ${cardBorder(
                        card
                      )}`}
                    >
                      <img
                        src={card.icon}
                        alt=""
                        className="mb-6 h-16 w-16 object-contain"
                      />
                      <h3 className="mb-4 font-[Aspekta] text-xl font-medium text-white">
                        {card.heading}
                      </h3>
                      <p className="font-[Aspekta] text-sm leading-relaxed text-white/70">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : cardsLayout === "quad" ? (
              /* Quad: single row of 4 equal cards */
              <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex flex-col rounded-2xl border bg-transparent p-6 backdrop-blur-md ${cardBorder(
                      card
                    )}`}
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="mb-4 h-10 w-10 object-contain"
                    />
                    <h3 className="mb-2 text-base font-medium text-[#FFC24F]">
                      {card.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Uniform: equal-size cards, plain wrapping grid */
              <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex flex-col gap-6 rounded-2xl border bg-transparent p-8 backdrop-blur-md ${cardBorder(
                      card
                    )}`}
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="h-[98px] w-[98px] object-contain"
                    />
                    <h3 className="text-xl font-medium text-white">
                      {card.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default AboutSection;