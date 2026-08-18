// components/Testimonials/TestimonialsGrid.tsx
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = Array.from({ length: 6 }, () => ({
  quote:
    "From identity to interface, campaign to conversion, we build the assets businesses need to show up professionally and grow with confidence.",
  name: "Pink Perfection",
  title: "CEO of EventMasters",
  avatar: "Profile.png",
}));

function TestimonialsGrid() {
  return (
    <section className="bg-[#0a0a0a] px-5 pb-24 lg:px-12 lg:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-sm border border-white/10">
        <div className="bg-[#181717] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const col = i % 3;
            const isFirstRowOnLg = i < 3;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: col * 0.1 }}
                className={`flex flex-col gap-6 border-white/10 p-8 lg:p-10 ${
                  col !== 0 ? "lg:border-l" : ""
                } ${!isFirstRowOnLg ? "lg:border-t" : ""}`}
              >
                <span className="text-[#FFC24F]">//</span>

                <p className="text-sm leading-relaxed font-[Aspekta] text-white/80">
                  {t.quote}
                </p>

                <div className="mt-auto flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 flex-shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/60">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsGrid;