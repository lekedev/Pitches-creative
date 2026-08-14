import { motion } from "framer-motion";

const industries = [
  "Fintech",
  "Health Care",
  "Hospitality",
  "Real Estate",
  "Education",
  "Logistics",
  "Retail & E-Commerce",
];

function TechIndustries() {
  return (
    <section className="px-5 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-medium leading-[1.2] sm:text-4xl lg:text-5xl">
            <span className="text-[#FFC24F]">Digital Products</span>{" "}
            <span className="text-white">For Different </span>
            <span className="text-[#FFC24F]">Industries</span>
            <span className="text-white">, Users, And Business Models.</span>
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-white/60">
            We design and develop technology-based products including SaaS
            platforms, native apps, web applications, dashboards, portals,
            and custom digital systems for businesses across different
            sectors.
          </p>

          <div className="flex flex-wrap gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm text-white backdrop-blur-sm"
              >
                <img
                  src="/technology/prizm50.png"
                  alt=""
                  className="h-[18px] w-[18px] object-contain"
                />
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <img
            src="/technology/Rectangle 126.png"
            alt="Product dashboard showcase"
            className="w-[590px] h-[430px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TechIndustries;