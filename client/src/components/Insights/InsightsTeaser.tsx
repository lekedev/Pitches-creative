import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { insights } from "../../data/insights";

function InsightsTeaser() {
  const posts = insights.slice(0, 3);

  return (
    <section className="bg-[#0a0a0a] px-5 py-20 font-[Aspekta] lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl"
          >
            Ideas <span className="font-bold">&amp;</span> Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink
              to="/insights"
              className="inline-flex flex-shrink-0 items-center rounded-full border border-orange-400 px-6 py-2.5 text-sm font-medium text-orange-400 no-underline transition-colors hover:bg-orange-400 hover:text-black"
            >
              Go to Insights
            </NavLink>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-center justify-between text-xs tracking-widest text-white/50">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {post.excerpt}
              </p>

              <NavLink
                to={`/insights/${post.slug}`}
                className="mt-6 inline-flex w-fit items-center rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
              >
                Read Article
              </NavLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightsTeaser;