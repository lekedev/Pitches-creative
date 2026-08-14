import { motion } from "framer-motion";

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: "/technology/ri_search-ai-line.png",
    title: "Product Discovery",
    description:
      "We help define the product idea, user needs, core features, business goals, and practical direction.",
  },
  {
    icon: "/technology/Icon (5).png",
    title: "UX Strategy",
    description:
      "We plan user journeys, information architecture, user flows, and product logic.",
  },
  {
    icon: "/technology/icon-ui.png",
    title: "UI Design",
    description:
      "We create clean, modern, intuitive interfaces for web apps, mobile apps, dashboards, and digital platforms.",
  },
  {
    icon: "/technology/prototyping 1.png",
    title: "Prototyping",
    description:
      "We create interactive prototypes to test flow, structure, and product experience before development.",
  },
  {
    icon: "/technology/bracket.png",
    title: "Front-End",
    description:
      "We build responsive, interactive user interfaces that work across devices.",
  },
  {
    icon: "/technology/backend.png",
    title: "Back-End",
    description:
      "We develop the systems behind the product, including databases, user roles, APIs, dashboards, and admin controls.",
  },
  {
    icon: "/technology/Frame 102.png",
    title: "Integrations",
    description:
      "We connect products with payment systems, email tools, CRM platforms, analytics, booking systems, maps, and third-party APIs.",
  },
  {
    icon: "/technology/rocket.png",
    title: "Test, Launch",
    description:
      "We test the product experience, fix issues, refine functionality, and prepare the platform for launch.",
  },
  {
    icon: "/technology/Group.png",
    title: "Ongoing Improvement",
    description:
      "We support product updates, new features, interface improvements, and performance refinement.",
  },
];

function TechProcess() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 lg:px-12 lg:py-28">
      {/* Decorative graphics */}
      <img
        src="/technology/prizm22.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-0 hidden h-70 w-40 object-contain lg:block"
      />
      <img
        src="/technology/prizm45.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-35 -left-5 hidden h-70 w-60 object-contain lg:block"
      />

      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-medium leading-[1.2] sm:text-4xl"
        >
          <span className="text-white">From </span>
          <span className="text-[#FFC24F]">Product</span>
          <span className="text-white"> Thinking To Development </span>
          <span className="text-[#FFC24F]">Execution.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60"
        >
          We support technology projects across the full product journey,
          from early concept and user flow planning to interface design,
          development, testing, launch, and future improvement.
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="border-l-2 border-[#FFC24F] pl-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <img src={step.icon} alt="" className="h-5 w-5 object-contain" />
              <h3 className="text-base font-medium text-[#FFC24F]">
                {step.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechProcess;