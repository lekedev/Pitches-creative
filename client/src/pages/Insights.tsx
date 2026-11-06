import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getInsights, type Post } from "../service/insightService";
import { sampleInsights } from "../data/sampleInsights";
import { insightCategories } from "../data/insightCategories";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageIntro } from "../components/ui/PageIntro";
import { Reveal } from "../components/ui/Reveal";
import { CtaSection } from "../components/ui/CtaSection";
import { InsightCover, SampleBadge } from "../components/insights/InsightCover";

const ALL = "All";

type Source = "loading" | "live" | "sample";

export default function Insights() {
  usePageMeta({
    title: "Insights",
    description: "Thinking on technology, business growth, design, branding, digital transformation and creative work.",
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [source, setSource] = useState<Source>("loading");
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    let cancelled = false;
    getInsights()
      .then((live) => {
        if (cancelled) return;
        // Fall back to labelled samples until real articles are published.
        setPosts(live.length ? live : sampleInsights);
        setSource(live.length ? "live" : "sample");
      })
      .catch(() => {
        if (cancelled) return;
        setPosts(sampleInsights);
        setSource("sample");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Canonical categories first, then any older categories still present on posts.
  const categories = [ALL, ...new Set([...insightCategories, ...posts.map((p) => p.category)])];
  const visible = active === ALL ? posts : posts.filter((p) => p.category === active);
  const [lead, ...rest] = visible;

  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title={
          <>
            Notes on building <em>what's next.</em>
          </>
        }
        lede="Practical thinking on technology, business growth, design, branding, digital transformation and creative work."
      />

      <section aria-labelledby="articles-heading" className="container-page pb-24 md:pb-32">
        <h2 id="articles-heading" className="sr-only">
          Articles
        </h2>

        <div role="group" aria-label="Filter articles by topic" className="flex flex-wrap gap-2 border-t border-line pt-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`h-10 rounded-full border px-4 text-sm transition-colors duration-300 ${
                active === category ? "border-ink bg-ink text-ivory" : "border-line text-stone hover:border-ink hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {source === "sample" && (
          <p role="note" className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone">
            <SampleBadge />
            These are sample articles that preview the layout. Published insights will appear here.
          </p>
        )}

        <div aria-live="polite" aria-busy={source === "loading"}>
          {source === "loading" ? (
            <div className="mt-12 grid gap-10 md:grid-cols-12">
              <div className="aspect-[16/10] animate-pulse rounded-sm bg-sand md:col-span-7" />
              <div className="space-y-4 md:col-span-5">
                <div className="h-4 w-24 animate-pulse rounded bg-sand" />
                <div className="h-10 w-full animate-pulse rounded bg-sand" />
                <div className="h-10 w-2/3 animate-pulse rounded bg-sand" />
              </div>
            </div>
          ) : visible.length === 0 ? (
            <p className="mt-16 text-lg text-stone">No articles in {active} yet.</p>
          ) : (
            <>
              {lead && (
                <Reveal className="mt-12">
                  <Link to={`/insights/${lead.slug}`} className="group grid gap-8 md:grid-cols-12 md:gap-10">
                    <div className="aspect-[16/10] overflow-hidden rounded-sm md:col-span-7">
                      <div className="h-full w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.02]">
                        <InsightCover post={lead} />
                      </div>
                    </div>
                    <div className="flex flex-col md:col-span-5">
                      <p className="flex flex-wrap items-center gap-3 text-sm text-stone">
                        {lead.sample && <SampleBadge />}
                        <span>{lead.category}</span>
                        {!lead.sample && <span>· {lead.date}</span>}
                      </p>
                      <h3 className="mt-5 text-title transition-colors group-hover:text-ember-deep">{lead.title}</h3>
                      <p className="mt-5 text-lg leading-relaxed text-stone">{lead.excerpt}</p>
                      <span className="mt-8 inline-flex items-center gap-2 font-medium">
                        Read article <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )}

              {rest.length > 0 && (
                <ul className="mt-20 border-t border-line">
                  {rest.map((post, index) => (
                    <Reveal as="li" key={post.id} delay={index * 0.04} className="border-b border-line">
                      <Link to={`/insights/${post.slug}`} className="group grid items-start gap-6 py-8 md:grid-cols-12 md:gap-10">
                        <div className="aspect-[4/3] overflow-hidden rounded-sm md:col-span-3">
                          <InsightCover post={post} index={index + 1} />
                        </div>
                        <div className="md:col-span-7">
                          <p className="flex flex-wrap items-center gap-3 text-sm text-stone">
                            {post.sample && <SampleBadge />}
                            <span>{post.category}</span>
                            {!post.sample && <span>· {post.date}</span>}
                          </p>
                          <h3 className="mt-3 text-2xl tracking-[-0.02em] transition-colors group-hover:text-ember-deep">{post.title}</h3>
                          <p className="mt-3 max-w-2xl leading-relaxed text-stone">{post.excerpt}</p>
                        </div>
                        <span className="hidden justify-end md:col-span-2 md:flex">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
                            <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                          </span>
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
