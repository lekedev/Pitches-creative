import { motion } from "framer-motion";
import type { Testimonial } from "./TestimonialData";

interface Props {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="flex min-h-[320px] flex-col p-8 lg:p-10"
    >
      {/* Quote icon */}
      <span className="mb-8 text-2xl font-medium text-[#FFC24F]">//</span>

      {/* Quote */}
      <p className="mb-10 text-[16px] leading-8 text-white/75">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="mt-auto rounded-xl border border-white/10 bg-[#151515] p-4 transition-all duration-300 hover:border-[#FFC24F]/40">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-14 w-14 rounded-lg object-cover"
          />

          <div>
            <h4 className="text-lg font-medium text-white">
              {testimonial.name}
            </h4>

            <p className="text-sm text-white/60">
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;