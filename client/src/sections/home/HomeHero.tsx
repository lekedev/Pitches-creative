import { Fragment, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { BrowserMock } from "../../components/mockups/BrowserMock";
import { PhoneMock } from "../../components/mockups/PhoneMock";
import { BrandCard } from "../../components/mockups/BrandCard";

const EASE = [0.16, 1, 0.3, 1] as const;

// The headline is revealed word by word from behind a mask. Words (rather than
// fixed lines) let it wrap naturally from phone to wide desktop.
const headline: { word: string; accent?: boolean }[] = [
  { word: "We" },
  { word: "build" },
  { word: "what" },
  { word: "moves" },
  { word: "business" },
  { word: "forward.", accent: true },
];

function Headline() {
  return (
    <h1 id="hero-heading" className="text-display">
      {headline.map(({ word, accent }, i) => (
        <Fragment key={word}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-top">
            <motion.span
              className={`inline-block ${
                accent ? "font-serif font-normal italic tracking-[-0.02em] text-ember" : ""
              }`}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1 + i * 0.07, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
          {/* Real spaces between words keep natural wrapping and screen-reader output */}
          {i < headline.length - 1 && " "}
          {/* Desktop: break after "what" so the statement reads in two clear beats */}
          {i === 2 && <br className="hidden lg:block" />}
        </Fragment>
      ))}
    </h1>
  );
}

function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Each layer drifts at a different rate for a sense of depth.
  const browserY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const phoneY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -70]);
  const cardY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [50, -40]);

  const shadow = "drop-shadow-[0_28px_40px_rgba(23,23,23,0.18)]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.45, ease: EASE }}
      className="relative mx-auto aspect-[10/8] w-full max-w-[760px]"
    >
      {/* Website */}
      <motion.div style={{ y: browserY }} className="absolute right-0 top-0 w-[86%]">
        <BrowserMock className={`h-auto w-full ${shadow}`} />
      </motion.div>
      {/* Product */}
      <motion.div style={{ y: phoneY }} className="absolute bottom-[2%] left-0 w-[27%]">
        <PhoneMock className={`h-auto w-full ${shadow}`} />
      </motion.div>
      {/* Brand */}
      <motion.div style={{ y: cardY }} className="absolute bottom-0 right-[6%] w-[34%]">
        <BrandCard className={`h-auto w-full ${shadow}`} />
      </motion.div>
    </motion.div>
  );
}

export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between gap-6"
        >
          <Eyebrow>Creative &amp; technology company</Eyebrow>
          <p className="hidden text-eyebrow uppercase text-stone md:block">
            Design <span className="text-ember">·</span> Technology <span className="text-ember">·</span> Media{" "}
            <span className="text-ember">·</span> Strategy
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12">
          <Headline />
        </div>

        <div className="mt-10 grid gap-14 lg:mt-0 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="lg:col-span-5 lg:pt-10"
          >
            <p className="max-w-md text-lg leading-relaxed text-stone sm:text-xl">
              From powerful digital experiences to creative storytelling and intelligent business solutions, we
              bring ideas to life through design, technology and strategy.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <ButtonLink to="/contact">Start a Project</ButtonLink>
              <ButtonLink to="/work" variant="text" arrow="right">
                Explore Our Work
              </ButtonLink>
            </div>
          </motion.div>

          {/* Desktop: the showcase lifts into the space beside "forward." */}
          <div className="lg:col-span-7 lg:-mt-[7vw]">
            <Showcase />
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-6 border-t border-line py-6 text-sm text-stone lg:mt-20">
          <p className="max-w-[28ch] sm:max-w-none">For businesses, organisations and the people building them.</p>
          <a href="#company" className="group inline-flex shrink-0 items-center gap-2 transition-colors hover:text-ink">
            <span className="hidden sm:inline">Scroll</span>
            <ArrowDown aria-hidden="true" strokeWidth={1.75} className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span className="sr-only sm:hidden">Scroll to the next section</span>
          </a>
        </div>
      </div>
    </section>
  );
}
