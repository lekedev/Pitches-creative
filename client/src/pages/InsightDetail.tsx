import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { getInsightBySlug, type Post } from "../service/insightService";
import { sampleInsights } from "../data/sampleInsights";
import { usePageMeta } from "../hooks/usePageMeta";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/Button";
import { CtaSection } from "../components/ui/CtaSection";
import { InsightCover, SampleBadge } from "../components/insights/InsightCover";
import PostEngagement from "../components/insights/PostEngagement";
import NotFound from "./NotFound";

// Editorial article typography for Markdown output.
const prose =
  "max-w-[68ch] text-lg leading-[1.75] text-ink/85 [&_a]:underline [&_a]:decoration-ember [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:border-ember [&_blockquote]:pl-6 [&_blockquote]:font-serif [&_blockquote]:text-2xl [&_blockquote]:italic [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-3xl [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:text-ink [&_img]:my-10 [&_img]:rounded-sm [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-6 [&_ul]:list-disc [&_ul]:pl-6";

export default function InsightDetail() {
  const { slug } = useParams();
  const sample = sampleInsights.find((p) => p.slug === slug) ?? null;

  // The result is tagged with the slug it belongs to, so navigating between posts
  // shows the loading state without resetting state inside the effect.
  const [result, setResult] = useState<{ slug: string; post: Post | null } | null>(null);

  useEffect(() => {
    if (!slug || sample) return;
    let cancelled = false;
    getInsightBySlug(slug)
      .then((found) => !cancelled && setResult({ slug, post: found }))
      .catch(() => !cancelled && setResult({ slug, post: null }));
    return () => {
      cancelled = true;
    };
  }, [slug, sample]);

  const loading = !sample && (!result || result.slug !== slug);
  const post = sample ?? (loading ? null : result?.post ?? null);

  usePageMeta({
    title: post?.title ?? "Insights",
    description: post?.excerpt,
    image: post?.coverImage || undefined,
  });

  if (loading) {
    return <div className="min-h-screen" aria-busy="true" />;
  }
  if (!post) return <NotFound />;

  return (
    <>
      <article>
        <header className="container-page pb-14 pt-36 sm:pt-44 lg:pt-52">
          <Reveal immediate>
            <Eyebrow>{post.category}</Eyebrow>
          </Reveal>
          <Reveal immediate delay={0.08}>
            <h1 className="mt-8 max-w-[20ch] text-headline">{post.title}</h1>
          </Reveal>
          <Reveal immediate delay={0.16}>
            <p className="mt-10 flex flex-wrap items-center gap-3 text-stone">
              {post.sample && <SampleBadge />}
              <span>{post.author}</span>
              {!post.sample && <span>· {post.date}</span>}
            </p>
          </Reveal>
        </header>

        <Reveal immediate delay={0.22} className="container-page">
          <div className="aspect-[16/8] overflow-hidden rounded-sm">
            <InsightCover post={post} />
          </div>
        </Reveal>

        <div className="container-page grid gap-10 pb-24 pt-16 md:pb-32 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            {post.excerpt && <p className="max-w-[60ch] text-lede text-stone">{post.excerpt}</p>}
            <div className={prose}>
              <Markdown>{post.content}</Markdown>
            </div>

            {!post.sample && <PostEngagement key={post.id} post={post} />}

            <div className="mt-16 border-t border-line pt-10">
              <ButtonLink to="/insights" variant="secondary" arrow="right">
                All insights
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
      <CtaSection />
    </>
  );
}
