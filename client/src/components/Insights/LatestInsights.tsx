import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { getInsights, getCategories } from "../../service/insightService";
import type { Post } from "../../service/insightService";


function LatestInsights() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInsights().then((posts) => {
      setAllPosts(posts);
      const cats = getCategories(posts);
      setCategories(cats);
      setActiveCategory(cats[0] || "");
      setLoading(false);
    });
  }, []);

  const posts = allPosts
    .filter((post) => post.category === activeCategory)
    .slice(0, 3);

  if (loading) return null;
  if (categories.length === 0) return null; // no published insights yet

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
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all hover:scale-[1.03] active:scale-95 ${
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
                  className="liquid-glass-btn mt-4 inline-flex w-fit items-center rounded-full px-5 py-2 text-sm font-medium text-white no-underline transition-transform hover:scale-[1.03] active:scale-95"
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
            className="liquid-glass-btn rounded-full px-5 py-2 text-xs font-medium text-white no-underline transition-transform hover:scale-[1.03] active:scale-95"
          >
            See All Insights
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default LatestInsights;