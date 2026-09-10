import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import homebg from "/homebg.webp";

const ARROW_SIZE = 36;
const ARROW_LEFT_INSET = 8; // pl-2

function Hero() {
  const navigate = useNavigate();
  const startProjectRef = useRef<HTMLAnchorElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [slideDistance, setSlideDistance] = useState(0);

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigating) return;

    const el = startProjectRef.current;
    if (el) {
      setSlideDistance(el.offsetWidth - ARROW_SIZE - ARROW_LEFT_INSET * 2);
    }
    setIsNavigating(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image — LCP element, load eager + high priority */}
      <img
        src={homebg}
        alt=""
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full origin-center object-cover animate-ken-burns will-change-transform motion-reduce:animate-none"
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
                and clarity.
            </p>

            <NavLink
                ref={startProjectRef}
                to="/contact"
                onClick={handleStartProject}
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
                    hover:scale-[1.03]
                    active:scale-95
                    hover:bg-black
                    hover:text-white
                "
                >
                <motion.span
                    animate={isNavigating ? { x: slideDistance } : { x: 0 }}
                    whileHover={!isNavigating ? { x: 4 } : undefined}
                    transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                    onAnimationComplete={() => {
                        if (isNavigating) navigate("/contact");
                    }}
                    className="
                    flex
                    h-[36px]
                    w-[36px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFC24F]
                    text-black
                    transition-colors
                    duration-300
                    group-hover:bg-white
                    "
                >
                    →
                </motion.span>

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
          className="text-[15vw] w-[92vw] h-49.25 font-[Aspekta] font-bold leading-[0.95] text-white sm:text-7xl lg:absolute lg:bottom-10 lg:left-12 lg:w-[90vw] lg:text-[9vw] lg:leading-[0.95]"
        >
          Ideas Built
          <br />

          <span className="block  flex
                flex-col
                items-start
                gap-6
                w-[92vw]

                lg:absolute
                lg:left-70
                lg:top-[78%]
                lg:w-[85vw]
                lg:-translate-y-1/2
                lg:text-left">
                    to Stand Out</span>
        </motion.h1>

        {/* Contact button */}
         
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/70 lg:absolute lg:bottom-18 "
        >
          <NavLink to="/contact" className="liquid-glass-btn inline-flex items-center gap-2 w-[120px] h-[50px] justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white no-underline transition-transform duration-200 hover:scale-[1.03] active:scale-95">
           Let's Talk
          </NavLink>
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;