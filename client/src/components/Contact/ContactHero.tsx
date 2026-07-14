import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="bg-[#0B0B0B] px-5 py-20 lg:px-12">
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl   overflow-visible bg-[#181717]">
        <div className="flex flex-col font-[Aspekta] lg:min-h-[560px] lg:flex-row">
          {/* ================= Left Content ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-1 flex-col justify-center px-8 py-12 lg:px-16 lg:py-16"
          >
            <h1 className="max-w-[577px] text-[64px] font-light leading-[1.05] text-white lg:text-[72px]">
              Let's Work Together
            </h1>

            <p className="mt-6 max-w-[430px] text-base leading-8 text-white/75">
              From identity to interface, campaign to conversion, we build the
              assets businesses need to show up professionally and grow with
              confidence.
            </p>

            <a
              href="#contact-form"
              className="mt-12 inline-flex w-fit items-center justify-center rounded-full bg-[#FFC24F] px-8 py-4 text-base font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166]"
            >
              Explore Our Services
            </a>
          </motion.div>

          {/* ================= Right Image ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-1 items-center justify-center overflow-visible py-10 lg:py-0"
          >
            <img
              src="/BigArrow.png"
              alt="Creative Arrow"
              loading="eager"
              className="
                relative
                z-10
                w-[423px]
                h-[372px]
                sm:w-[420px]
                md:w-[520px]
                lg:absolute
                lg:-top-20
                lg:right-0
                lg:w-[620px]
                xl:w-[700px]
                object-contain
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;