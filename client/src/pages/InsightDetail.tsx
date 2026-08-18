import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { insights } from "../data/insights";
import PostEngagement from "../components/Insights/PostEngagement";

function InsightDetail() {
  const { slug } = useParams();
  const post = insights.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0a0a] px-5 text-center text-white">
        <p className="text-xl">Insight not found.</p>
        <NavLink
          to="/insights/all"
          className="rounded-full border border-white/30 px-5 py-2 text-sm text-white no-underline"
        >
          Back to All Insights
        </NavLink>
      </div>
    );
  }

  return (
    <article className="bg-[#0a0a0a] px-5 pb-20 pt-32 font-[Aspekta] text-white lg:px-12 lg:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <p className="mb-4 flex items-center gap-3 text-xs tracking-widest text-white/50">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.author}</span>
        </p>

        <h1 className="mb-8 text-3xl font-bold leading-tight sm:text-4xl">
          {post.title}
        </h1>

        <div className="mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-base leading-relaxed text-white/80">
          {post.content}
        </p>

        <NavLink
          to="/insights/all"
          className="mt-12 inline-flex w-fit items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white hover:text-black"
        >
          ← Back to All Insights
        </NavLink>
        <PostEngagement post={post} />
      </motion.div>
    </article>
  );
}

export default InsightDetail;