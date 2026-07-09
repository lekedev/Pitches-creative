import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import homebg from "../../assets/homebg.png";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image — LCP element, load eager + high priority */}
      <img
        src={homebg}
        alt=""
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Legibility overlay, stronger at bottom where text sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end gap-10 px-5 pb-12 pt-28 lg:block lg:px-12 lg:pb-16">
        {/* Eyebrow + CTA */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
                flex
                flex-col
                items-start
                gap-6

                lg:absolute
                lg:right-20
                lg:top-[38%]
                lg:w-[428px]
                lg:-translate-y-1/2
                lg:text-left
            "
            >
            <p
                className="
                w-full
                max-w-[428px]
                text-[18px]
                leading-[29px]
                font-normal
                text-white
                font-[Aspekta]
                "
            >
                // We Transform Concepts into<br />
                powerful brand stories with impact<br />
                and clarity
            </p>

            <NavLink
                to="/contact"
                className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    py-2
                    pl-2
                    pr-5
                    text-sm
                    font-medium
                    text-black
                    no-underline
                    transition-all
                    duration-300
                    hover:bg-black
                    hover:text-white
                "
                >
                <span
                    className="
                    flex
                    h-[36px]
                    w-[36px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFC24F]
                    text-black
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    "
                >
                    →
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Start Your Project
                </span>
            </NavLink>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[15vw] w-[646px] h-[177px]  font-[Aspekta] font-bold leading-[0.95] text-white sm:text-7xl lg:absolute lg:bottom-10 lg:left-12 lg:text-[6.5vw] lg:leading-[0.95]"
        >
          Ideas Built
          <br />
          
          <span className="block  flex
                flex-col
                items-start
                gap-6
                w-[772px]
                h-[138px]

                lg:absolute
                lg:left-70
                lg:top-[78%]
                lg:-translate-y-1/2
                lg:text-left">
                    to Stand Out</span>
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/70 lg:absolute lg:bottom-18 "
        >
          Based in Nigeria
          <br />
          Creating Globally
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;