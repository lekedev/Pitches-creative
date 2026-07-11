import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";

function TestimonialsGrid() {
  return (
    <section className="bg-[#0B0B0B] px-5 pb-24 lg:px-12 lg:pb-32">
      <div className="mx-auto max-w-7xl">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            divide-y
            md:divide-x
            md:[&>*:nth-child(2n+1)]:border-r-0

            lg:divide-x
            lg:divide-y-0

            divide-white/10
            border
            border-white/10
          "
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsGrid;