import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ventures = [
  {
    number: "01",
    name: "Build",
    label: "Venture creation",
    description: "We turn promising ideas into focused businesses with the foundations to grow.",
  },
  {
    number: "02",
    name: "Grow",
    label: "Business development",
    description: "We help ventures strengthen their operations, reach new markets, and create lasting value.",
  },
  {
    number: "03",
    name: "Partner",
    label: "Strategic collaboration",
    description: "We work with people and organisations who share a long-term view of meaningful progress.",
  },
];

const principles = [
  ["01", "Think long-term", "We build for enduring value, not short-lived attention."],
  ["02", "Move with purpose", "Every idea needs a clear reason to exist and a plan to move forward."],
  ["03", "Build together", "Strong ventures are built through trust, shared ambition, and consistent work."],
];

export function StableHome() {
  return (
    <main className="bg-[#081326] text-[#f7f5ef]">
      <section className="relative flex min-h-[94svh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:min-h-screen lg:px-16 lg:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-20 h-[34rem] w-[34rem] rounded-full border border-[#caa969]/20 sm:right-0 lg:right-[8%]" />
          <div className="absolute right-[-7rem] top-36 h-[25rem] w-[25rem] rounded-full border border-[#caa969]/25 sm:right-[5%]" />
          <div className="absolute right-[10%] top-56 h-[16rem] w-[16rem] rounded-full bg-[#caa969]/[0.07] blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#081326] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#d5b77c]"
          >
            <span className="h-px w-8 bg-[#d5b77c]" />
            The Stable Company Limited
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl text-[clamp(3.2rem,9.3vw,9rem)] font-medium leading-[0.92] tracking-[-0.065em]"
          >
            Building what
            <br />
            <span className="font-serif italic font-normal text-[#d5b77c]">comes next.</span>
          </motion.h1>
          <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
            >
              We build, back, and grow ventures with a long-term view—bringing
              clear thinking and purposeful action to ideas with potential.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              href="#ventures"
              className="group inline-flex w-fit items-center gap-5 border-b border-[#d5b77c]/60 pb-3 text-sm text-white no-underline transition-colors hover:text-[#d5b77c]"
            >
              Discover our approach
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">↘</span>
            </motion.a>
          </div>
          <div className="mt-20 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.24em] text-white/40 sm:mt-28">
            <span>Independent thinking. Lasting value.</span>
            <span className="hidden sm:inline">01 — Purpose before scale</span>
          </div>
        </div>
      </section>

      <section id="company" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d5b77c]">Who we are</p>
            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">
              A steady foundation for ambitious ideas.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-7">
            <p className="text-xl leading-8 text-white/75 sm:text-2xl sm:leading-9">
              The Stable Company is built around a simple belief: meaningful
              businesses are created with patience, strong foundations, and the
              courage to keep improving.
            </p>
            <p className="max-w-2xl leading-7 text-white/50">
              We take a considered approach to venture building—connecting ideas,
              people, and practical execution to create businesses that can stand
              the test of time.
            </p>
            <Link to="/about" className="group mt-2 inline-flex w-fit items-center gap-4 text-sm text-[#d5b77c] no-underline">
              More about Stable <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="ventures" className="bg-[#f3f0e8] px-5 py-24 text-[#081326] sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8c6b32]">How we create value</p>
              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">
                Ideas are only the beginning.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#081326]/65">
              From first principles to sustained growth, our work follows the needs
              of each venture—not a one-size-fits-all formula.
            </p>
          </div>
          <div className="grid border-t border-[#081326]/20 md:grid-cols-3">
            {ventures.map((venture, index) => (
              <motion.article
                key={venture.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group flex min-h-[300px] flex-col border-b border-[#081326]/20 py-8 md:min-h-[360px] md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#8c6b32]">{venture.number}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#081326]/25 transition-all duration-300 group-hover:border-[#081326] group-hover:bg-[#081326] group-hover:text-white">↗</span>
                </div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8c6b32]">{venture.label}</p>
                <h3 className="mb-4 text-3xl font-medium tracking-tight">{venture.name}</h3>
                <p className="mt-auto max-w-sm leading-7 text-[#081326]/65">{venture.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d5b77c]">Our principles</p>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">
              Built with intention. Grown with care.
            </h2>
          </div>
          <div className="border-t border-white/15">
            {principles.map(([number, title, description]) => (
              <div key={number} className="grid gap-3 border-b border-white/15 py-7 sm:grid-cols-[60px_1fr] sm:gap-6">
                <span className="pt-1 text-xs tracking-[0.2em] text-[#d5b77c]">{number}</span>
                <div>
                  <h3 className="mb-2 text-xl font-medium">{title}</h3>
                  <p className="max-w-xl leading-7 text-white/50">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden border border-[#d5b77c]/25 bg-[#0d1b31] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div aria-hidden="true" className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#d5b77c]/20" />
          <div aria-hidden="true" className="absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#d5b77c]/20" />
          <div className="relative max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d5b77c]">Start a conversation</p>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">
              Have an idea worth building?
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-white/60">
              We welcome thoughtful conversations with founders, partners, and people
              who see potential in what comes next.
            </p>
            <Link to="/contact" className="mt-9 inline-flex items-center gap-5 bg-[#d5b77c] px-6 py-4 text-sm font-medium text-[#081326] no-underline transition-colors hover:bg-white">
              Connect with Stable <span className="text-lg">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}