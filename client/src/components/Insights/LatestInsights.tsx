import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { insights, categories } from "../../data/insights";

function LatestInsights() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const posts = insights
    .filter((post) => post.category === activeCategory)
    .slice(0, 3);

  return (
    <section className="bg-[#0a0a0a] px-5 py-16 font-[Aspekta] lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-lg">
          <span className="italic text-[#FFC24F]">Latest</span>{" "}
          <span className="text-white">Insights</span>
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "border-[#FFC24F] bg-[#FFC24F] text-black"
                  : "border-white/20 text-white/70 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="py-10 text-sm text-white/50">
            No insights in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-medium text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {post.excerpt}
                </p>
                <NavLink
                  to={`/insights/${post.slug}`}
                  className="mt-4 inline-flex w-fit items-center rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
                >
                  Read More
                </NavLink>
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between">
          <NavLink
            to="/insights/all"
            className="rounded-full border border-white/30 px-5 py-2 text-xs font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
          >
            See All Insights
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default LatestInsights;