import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="w-full bg-[#0B0B0B] px-5 py-16 sm:px-8 lg:px-12">
      {/* ================= HERO BANNER ================= */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1300px]
          overflow-visible
          bg-[#181717]
          aspect-[1299/359]
          min-h-[250px]
        "
      >
        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            z-20
            flex
            h-full
            w-full
            max-w-[620px]
            flex-col
            justify-center
            px-7
            py-8
            sm:px-10
            lg:px-14
          "
        >
          {/* Heading */}
          <h1
            className="
              whitespace-nowrap
              font-[Aspekta]
              text-[18px]
              font-light
              leading-[1]
              tracking-[-0.03em]
              text-white
              sm:text-[48px]
              lg:text-[56px]
              xl:text-[64px]
            "
          >
            Let's Work Together
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[420px]
              font-[Aspekta]
              text-[13px]
              leading-[1.5]
              text-white/70
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            From identity to interface, campaign to conversion, we build the
            assets businesses need to show up professionally and grow with
            confidence.
          </p>

          {/* Button */}
          <a
            href="#contact-form"
            className="
              mt-6
              flex
              w-fit
              items-center
              justify-center
              rounded-full
              bg-[#FFC24F]
              px-7
              py-4
              font-[Aspekta]
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.03]
              active:scale-95
              hover:bg-[#FFD166]
            "
          >
            Explore Our Services
          </a>
        </motion.div>

        {/* ================= ARROW ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[-2%]
            top-[10%]
            z-10
            
            sm:right-[-1%]
            sm:top-[-24%]
            sm:w-[48%]
            lg:right-[-1%]
            lg:top-[-32%]
            lg:w-[48%]
            xl:right-[-2%]
            xl:top-[-38%]
            xl:w-[49%]
          "
        >
          <img
            src="/BigArrow.webp"
            alt=""
            aria-hidden="true"
            loading="eager"
            className="block  w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;