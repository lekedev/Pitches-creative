import { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { getInsights, getCategories } from "../service/insightService";
import type { Post } from "../service/insightService";
import NewsletterSignup from "../components/Insights/NewsletterSignup";

const POSTS_PER_PAGE = 9;

function InsightsAll() {
  const [insights, setInsights] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeAuthor, setActiveAuthor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<
    "sort" | "categories" | "author" | null
  >(null);
  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getInsights()
      .then(setInsights)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(e.target as Node)
      ) {
        setSortMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const categories = useMemo(() => getCategories(insights), [insights]);
  const authors = useMemo(
    () => Array.from(new Set(insights.map((p) => p.author))),
    [insights]
  );

  const filtered = useMemo(() => {
    let result = [...insights];

    if (activeCategory) {
      result = result.filter((post) => post.category === activeCategory);
    }

    if (activeAuthor) {
      result = result.filter((post) => post.author === activeAuthor);
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
  }, [insights, search, activeCategory, activeAuthor, sortBy]);

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
          src="/insight/BgInsight.webp"
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
        <div className="mx-auto max-w-7xl">
          <div>
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

              <div className="relative" ref={sortMenuRef}>
                <button
                  type="button"
                  onClick={() => setSortMenuOpen((o) => !o)}
                  className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-[#0a0a0a] px-5 py-2.5 text-sm text-white transition-all hover:scale-[1.03] active:scale-95"
                >
                  Sort By
                  <span
                    className={`text-xs transition-transform duration-200 ${
                      sortMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {sortMenuOpen && (
                  <div className="absolute right-0 top-[calc(100%+8px)] z-30 w-56 rounded-2xl border border-white/10 bg-[#151414] p-2 shadow-xl">
                    {/* Sort By */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSection((s) => (s === "sort" ? null : "sort"))
                      }
                      className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-white transition-all hover:bg-white/5"
                    >
                      Sort By
                    </button>
                    {openSection === "sort" && (
                      <div className="mb-1 ml-2 flex flex-col border-l border-white/10 pl-3">
                        {(["newest", "oldest"] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setSortBy(opt);
                              setPage(1);
                            }}
                            className={`rounded-md px-3 py-1.5 text-left text-sm capitalize transition-all hover:text-white ${
                              sortBy === opt
                                ? "font-medium text-[#FFC24F]"
                                : "text-white/60"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Categories */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSection((s) =>
                          s === "categories" ? null : "categories"
                        )
                      }
                      className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-white transition-all hover:bg-white/5"
                    >
                      Categories
                    </button>
                    {openSection === "categories" && (
                      <div className="mb-1 ml-2 flex max-h-40 flex-col overflow-y-auto border-l border-white/10 pl-3">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveCategory(null);
                            setPage(1);
                          }}
                          className={`rounded-md px-3 py-1.5 text-left text-sm transition-all hover:text-white ${
                            activeCategory === null
                              ? "font-medium text-[#FFC24F]"
                              : "text-white/60"
                          }`}
                        >
                          All
                        </button>
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => {
                              setActiveCategory(cat);
                              setPage(1);
                            }}
                            className={`rounded-md px-3 py-1.5 text-left text-sm transition-all hover:text-white ${
                              activeCategory === cat
                                ? "font-medium text-[#FFC24F]"
                                : "text-white/60"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Author */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSection((s) =>
                          s === "author" ? null : "author"
                        )
                      }
                      className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-white transition-all hover:bg-white/5"
                    >
                      Author
                    </button>
                    {openSection === "author" && (
                      <div className="mb-1 ml-2 flex max-h-40 flex-col overflow-y-auto border-l border-white/10 pl-3">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveAuthor(null);
                            setPage(1);
                          }}
                          className={`rounded-md px-3 py-1.5 text-left text-sm transition-all hover:text-white ${
                            activeAuthor === null
                              ? "font-medium text-[#FFC24F]"
                              : "text-white/60"
                          }`}
                        >
                          All
                        </button>
                        {authors.map((author) => (
                          <button
                            key={author}
                            type="button"
                            onClick={() => {
                              setActiveAuthor(author);
                              setPage(1);
                            }}
                            className={`rounded-md px-3 py-1.5 text-left text-sm transition-all hover:text-white ${
                              activeAuthor === author
                                ? "font-medium text-[#FFC24F]"
                                : "text-white/60"
                            }`}
                          >
                            {author}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Date */}
                    <div className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-white/40">
                      Date
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <p className="py-20 text-center text-white/50">Loading...</p>
            ) : currentPosts.length === 0 ? (
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
                      className="liquid-glass-btn mt-4 inline-flex w-fit items-center rounded-full px-5 py-2 text-sm font-medium text-white no-underline transition-transform hover:scale-[1.03] active:scale-95"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:scale-[1.03] active:scale-95 hover:bg-white/10 disabled:opacity-30"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all hover:scale-[1.03] active:scale-95 ${
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFC24F] text-[#FFC24F] transition-all hover:scale-[1.03] active:scale-95 hover:bg-[#FFC24F] hover:text-black disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}

export default InsightsAll;