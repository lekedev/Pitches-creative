import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { insights, categories } from "../data/insights";
import NewsletterSignup from "../components/Insights/NewsletterSignup";

const POSTS_PER_PAGE = 9;

function InsightsAll() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...insights];

    if (activeCategory) {
      result = result.filter((post) => post.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((post) =>
        post.title.toLowerCase().includes(q)
      );
    }

    if (sortBy === "oldest") {
      result = result.reverse();
    }

    return result;
  }, [search, activeCategory, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const currentPosts = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const goToPage = (p: number) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-[#0a0a0a] px-5 pb-10 pt-32 font-[Aspekta] lg:px-12 lg:pt-40">
        <img
          src="/insights/hero-gradient.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            ALL POSTS
          </h1>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-10 font-[Aspekta] lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Main content */}
          <div className="flex-1">
            {/* Search + sort row */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search"
                className="w-full max-w-xs rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm text-white outline-none placeholder:text-white/40"
              />

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as "newest" | "oldest");
                  setPage(1);
                }}
                className="w-fit rounded-full border border-white/20 bg-[#0a0a0a] px-5 py-2.5 text-sm text-white outline-none"
              >
                <option value="newest">Sort By: Newest</option>
                <option value="oldest">Sort By: Oldest</option>
              </select>
            </div>

            {/* Grid */}
            {currentPosts.length === 0 ? (
              <p className="py-20 text-center text-white/50">
                No insights match your search.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
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

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors ${
                    page === p
                      ? "border-[#FFC24F] bg-[#FFC24F] text-black"
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-colors hover:bg-[#FFC24F] hover:text-black disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit w-full flex-shrink-0 rounded-xl border border-white/10 bg-white/5 p-5 lg:w-56">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => {
                  setSortBy("newest");
                  setPage(1);
                }}
                className="rounded-md px-3 py-2 text-left text-sm text-white/70 transition-colors hover:text-white"
              >
                Sort By
              </button>

              <p className="mt-3 px-3 text-xs font-medium uppercase tracking-wide text-white/40">
                Categories
              </p>
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setPage(1);
                }}
                className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  activeCategory === null
                    ? "bg-white/10 font-medium text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setPage(1);
                  }}
                  className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    activeCategory === cat
                      ? "bg-white/10 font-medium text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}

              <p className="mt-3 px-3 text-xs font-medium uppercase tracking-wide text-white/40">
                Author
              </p>
              <button className="rounded-md px-3 py-2 text-left text-sm text-white/60 transition-colors hover:text-white">
                Simon Sineq
              </button>

              <p className="mt-3 px-3 text-xs font-medium uppercase tracking-wide text-white/40">
                Date
              </p>
              <button className="rounded-md px-3 py-2 text-left text-sm text-white/60 transition-colors hover:text-white">
                MAY 2026
              </button>
            </div>
          </aside>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}

export default InsightsAll;