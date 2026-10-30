import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PortfolioShowcase from '../components/Services/PortfolioShowcase';
import StarfieldBackground from '../components/shared/StarfieldBackground';
import { serviceDivisions } from '../data/servicePages';

function Services() {
  return (
    <div className="relative bg-[#0a0a0a] font-[Aspekta]">
      <StarfieldBackground blur />

      <div className="relative z-10">
        <section className="px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl"
            >
              One company. <span className="text-[#FFC24F]">Many crafts.</span>
            </motion.h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80">
              The Stable Company brings technology, video production,
              photography, design, and more under one roof — so your
              software, your stories, and your images all work together.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceDivisions.map((division, i) => (
                <motion.div
                  key={division.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <NavLink
                    to={division.path}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#1b1b1b_0%,rgba(27,27,27,0)_100%)] p-8 no-underline transition-colors hover:border-[#FFC24F]/60"
                  >
                    <span className="font-[InstrumentSans] text-sm text-[#FFC24F]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl font-medium text-white">
                      {division.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-white/70">
                      {division.description}
                    </p>
                    <span className="mt-auto text-sm text-[#FFC24F] transition-transform group-hover:translate-x-1">
                      {division.path === '/contact' ? 'Enquire →' : 'Explore →'}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioShowcase />
      </div>
    </div>
  );
}

export default Services;
