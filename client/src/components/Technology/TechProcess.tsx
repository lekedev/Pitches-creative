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
    <section
      className="
        relative
        overflow-hidden
        bottom-[-9]
        bg-black
        px-5
        py-20
        lg:px-12
        lg:py-28
      "
    >
      {/* =====================================================
          TOP RIGHT DECORATIVE IMAGE
          ===================================================== */}
      <motion.img
        src="/technology/prizm22.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-55px]
          top-[-20px]
          z-0
          hidden
          h-[230px]
          w-[230px]
          object-contain
          lg:block
          xl:right-[-45px]
          xl:top-[-15px]
          xl:h-[250px]
          xl:w-[250px]
        "
      />

      {/* =====================================================
          BOTTOM LEFT DECORATIVE IMAGE
          ===================================================== */}
      <motion.img
        src="/technology/prizm45.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-5
          -left-11.25
          z-20
          hidden
          h-[280px]
          w-[280px]
          object-contain
          lg:block
          xl:bottom-[-75px]
          xl:left-[-50px]
          xl:h-[300px]
          xl:w-[300px]
        "
      />

      {/* =====================================================
          HEADER
          ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-3xl
          text-center
        "
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            font-[Aspekta]
            text-3xl
            font-medium
            leading-[1.2]
            sm:text-4xl
          "
        >
          <span className="text-white">
            From{" "}
          </span>

          <span className="text-[#FFC24F]">
            Product
          </span>

          <span className="text-white">
            {" "}
            Thinking To Development{" "}
          </span>

          <span className="text-[#FFC24F]">
            Execution.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-4
            max-w-xl
            font-[Aspekta]
            text-sm
            leading-relaxed
            text-white/60
          "
        >
          We support technology projects across the full product journey,
          from early concept and user flow planning to interface design,
          development, testing, launch, and future improvement.
        </motion.p>
      </div>

      {/* =====================================================
          PROCESS GRID
          ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-10
          grid
          max-w-4xl
          grid-cols-1
          gap-x-12
          gap-y-16
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.08,
            }}
            className="
              relative
              border-l-2
              border-[#FFC24F]
              pl-4
            "
          >
            {/* Title */}
            <div className="mb-2 flex items-center gap-3">
              <img
                src={step.icon}
                alt=""
                className="
                  h-7
                  w-7
                  shrink-0
                  object-contain
                "
              />

              <h3
                className="
                  font-[Aspekta]
                  text-base
                  font-medium
                  text-[#FFC24F]
                  sm:text-lg
                "
              >
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p
              className="
                max-w-[260px]
                font-[Aspekta]
                text-sm
                leading-relaxed
                text-white/70
              "
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechProcess;