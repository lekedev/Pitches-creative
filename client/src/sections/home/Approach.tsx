import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "../../data/process";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

export function Approach() {
  const stepsRef = useRef<HTMLOListElement>(null);
  // The ember line fills as the steps scroll through the viewport.
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section aria-labelledby="approach-heading" className="section-y bg-sand">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="04">Our approach</Eyebrow>
          </Reveal>
          <Reveal className="lg:col-span-9">
            <h2 id="approach-heading" className="max-w-[18ch] text-headline">
              A clear process, from first conversation to{" "}
              <em className="font-serif font-normal italic tracking-[-0.02em]">launch.</em>
            </h2>
          </Reveal>
        </div>

        <ol ref={stepsRef} className="relative mt-16 grid gap-0 md:mt-24 lg:grid-cols-4">
          {/* Track + progress: vertical on small screens, horizontal on large */}
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-ink/15 lg:inset-x-0 lg:bottom-auto lg:left-0 lg:top-[7px] lg:h-px lg:w-auto" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-ember lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute inset-x-0 top-[7px] hidden h-px origin-left bg-ember lg:block"
          />

          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 0.08} className="relative pb-12 pl-10 lg:pb-0 lg:pl-0 lg:pr-10 lg:pt-14">
              <span aria-hidden="true" className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border border-ink/25 bg-sand lg:top-0" />
              <span aria-hidden="true" className="font-serif text-[clamp(3.5rem,6vw,5.5rem)] leading-none text-ink/15">{step.number}</span>
              <h3 className="mt-3 text-2xl tracking-[-0.02em] lg:mt-6">{step.title}</h3>
              <p className="mt-3 max-w-[28ch] leading-relaxed text-stone">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
