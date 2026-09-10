import { motion } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/technology/Icon.png",
    title: "Product Clarity",
    description:
      "We help define what the product should do, who it should serve, and how users should move through it.",
  },
  {
    icon: "/technology/brush.png",
    title: "User Experience",
    description:
      "We help define what the product should do, who it should serve, and how users should move through it.",
  },
  {
    icon: "/technology/puzzle.png",
    title: "Scalable Execution",
    description:
      "We help define what the product should do, who it should serve, and how users should move through it.",
  },
];

function TechIntro() {
  return (
    <section className="px-5 py-3 font-[aspekta] lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-md sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-14"
      >
        {/* Left: heading + paragraphs */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-medium leading-[1.2] sm:text-3xl lg:text-4xl">
            <span className="text-white">We Help Businesses </span>
            <span className="text-[#FFC24F]">Turn Technology Ideas</span>
            <span className="text-white"> Into Usable Digital Products.</span>
          </h2>

          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-[#FFFBF4]">
              A strong digital product is not only about how it looks. It
              must solve a real problem, serve a clear user, support a
              business goal, and work smoothly across different devices and
              use cases.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              At Pitches Creative, we approach technology with a balance of
              product strategy, user experience design, interface design,
              and development execution. The goal is to create digital
              products that are not only functional, but also intuitive,
              credible, and ready for real-world use.
            </p>
          </div>
        </div>

        {/* Right: feature rows */}
        <div className="flex flex-col gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="liquid-glass-btn flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl">
                <img
                  src={feature.icon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div>
                <h3 className="mb-1 text-base font-medium text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechIntro;