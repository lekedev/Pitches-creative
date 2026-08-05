import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Service 1",
    image: "/Service.png",
  },
  {
    title: "Brand Design",
    image: "/Branddesign.png",
  },
  {
    title: "App Development",
    image: "/Appdev.png",
  },
  {
    title: "Web Development",
    image: "/Webdev.png",
  },
  // {
  //   title: "UI / UX Design",
  //   image: "/UIDesign.png",
  // },
];

const CARD_WIDTH = 305;
const GAP = 24;

function ServicesCarousel() {
  const [current, setCurrent] = useState(0);

  const maxSlide = services.length - 4;

  const next = () => {
    if (current < maxSlide) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-[#0A0A0A] pb-24 lg:pb-32 overflow-hidden">
      <div className="overflow-hidden font-[InstrumentSans]">
        <motion.div
          animate={{
            x: -(current * (CARD_WIDTH + GAP)),
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex pl-6 lg:pl-12"
          style={{ gap: `${GAP}px` }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.35,
              }}
              className={`
                relative
                w-[280px]
                lg:w-[305px]
                h-[360px]
                lg:h-[397px]
                flex-shrink-0
                overflow-hidden
                rounded-sm
                cursor-pointer

                ${i === 0 ? "mt-20" : ""}
                ${i === 1 ? "mt-15" : ""}
                ${i === 2 ? "mt-10" : ""}
                ${i === 3 ? "mt-0" : ""}
                ${i === 4 ? "mt-14" : ""}
              `}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <h3 className="font-[Aspekta] text-[26px] lg:text-[36px] leading-none text-[#FFC24F]">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}

      <div className="mt-12 flex justify-end gap-4 pr-6 lg:pr-12">
        <button
          onClick={prev}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-all duration-300 hover:bg-[#FFC24F] hover:text-black"
        >
          ←
        </button>

        <button
          onClick={next}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-all duration-300 hover:bg-[#FFC24F] hover:text-black"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default ServicesCarousel;