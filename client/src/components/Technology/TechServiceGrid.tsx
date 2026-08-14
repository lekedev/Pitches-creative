import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface ServiceCard {
  icon: string;
  title: string;
  highlight: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: "/technology/saas.png",
    title: "SaaS",
    highlight: "Products",
    description:
      "Scalable software platforms with dashboards, user accounts, subscriptions, and product features.",
  },
  {
    icon: "/technology/questionnaire.png",
    title: "Web",
    highlight: "Applications",
    description:
      "Browser-based tools that help users complete tasks, manage services, and interact with data.",
  },
  {
    icon: "/technology/message.png",
    title: "Native Mobile",
    highlight: "Apps",
    description:
      "iOS and Android apps designed for smooth, simple, and engaging user experiences.",
  },
  {
    icon: "/technology/admin.png",
    title: "Admin",
    highlight: "Dashboards",
    description:
      "Control panels that help teams manage users, data, activity, reports, and operations.",
  },
  {
    icon: "/technology/customportal.png",
    title: "Customer",
    highlight: "Portals",
    description:
      "Secure portals where clients, customers, or members can access services and manage information.",
  },
  {
    icon: "/technology/online-shopping.png",
    title: "E-Commerce",
    highlight: "Systems",
    description:
      "Online stores and commerce platforms designed to support product sales and customer journeys.",
  },
  {
    icon: "/technology/business.png",
    title: "Internal",
    highlight: "Business Tools",
    description:
      "Custom tools that help teams organize workflows, reduce manual tasks, and improve efficiency.",
  },
  {
    icon: "/technology/mobile.png",
    title: "Digital",
    highlight: "Platforms",
    description:
      "Larger product ecosystems such as marketplaces, learning platforms, communities, and service platforms.",
  },
];

function TechServicesGrid() {
  return (
    <section className="relative bg-black px-5 py-20 lg:px-12 lg:py-28">
      {/* Decorative crystal graphic */}
      <img
        src="/technology/crystal.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-4 hidden h-32 w-32 object-contain opacity-90 lg:block"
      />

      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-medium leading-[1.2] sm:text-4xl"
        >
          <span className="text-white">We Help Businesses </span>
          <span className="text-[#FFC24F]">Turn Technology Ideas</span>
          <span className="text-white"> Into Usable Digital Products.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60"
        >
          We design and develop technology-based products including SaaS
          platforms, native apps, web applications, dashboards, portals, and
          custom digital systems for businesses across different sectors.
        </motion.p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.highlight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg">
              <img
                src={service.icon}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-base font-medium text-white">
              {service.title} <span className="text-[#FFC24F]">{service.highlight}</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 flex justify-center"
      >
        <NavLink
          to="/contact"
          className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white/10"
        >
          Start a Technology Project
        </NavLink>
      </motion.div>
    </section>
  );
}

export default TechServicesGrid;