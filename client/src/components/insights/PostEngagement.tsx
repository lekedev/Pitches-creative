import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import {
  likeInsight,
  getComments,
  postComment,
} from "../../service/insightService";
import type { Comment } from "../../service/insightService";

interface EngagementPost {
  id: string;
  title: string;
  likes?: number;
  enableSharing?: boolean;
  enableComments?: boolean;
  enableLikes?: boolean;
}

export default function PostEngagement({
  post,
}: {
  post: EngagementPost;
}) {
  const [likes, setLikes] = useState(post.likes ?? 0);
  const [liked, setLiked] = useState<boolean>(() => {
    try {
      const likedPosts: string[] = JSON.parse(localStorage.getItem("liked_insights") || "[]");
      return likedPosts.includes(post.id);
    } catch {
      return false;
    }
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [commentError, setCommentError] = useState("");

  useEffect(() => {
    if (post.enableComments ?? true) {
      getComments(post.id).then(setComments);
    }
  }, [post.id, post.enableComments]);

  const handleLike = async () => {
    if (liked) return;

    const newCount = await likeInsight(post.id);

    setLikes(newCount);
    setLiked(true);

    const likedPosts = JSON.parse(
      localStorage.getItem("liked_insights") || "[]"
    );

    localStorage.setItem(
      "liked_insights",
      JSON.stringify([...likedPosts, post.id])
    );
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    setCommentError("");
    try {
      const newComment = await postComment(post.id, name, message);
      setComments((prev) => [newComment, ...prev]);
      setName("");
      setMessage("");
    } catch {
      setCommentError("Your comment couldn't be posted. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async (platform: "x" | "linkedin" | "copy") => {
    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      } catch {
        /* clipboard unavailable — nothing useful to do */
      }
      return;
    }
    const urls = {
      x: `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-sm border border-line bg-transparent px-4 py-3 text-base text-ink placeholder:text-stone/70 transition-colors focus:border-ink focus:outline-none";
  const shareClass = "text-sm text-stone underline-offset-4 transition-colors hover:text-ink hover:underline";

  return (
    <div className="mt-16 border-t border-line pt-10">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {(post.enableLikes ?? true) && (
          <button
            type="button"
            onClick={handleLike}
            disabled={liked}
            aria-pressed={liked}
            className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors ${
              liked ? "border-ember bg-ember/10 text-ember-deep" : "border-line text-stone hover:border-ink hover:text-ink"
            }`}
          >
            <Heart aria-hidden="true" strokeWidth={1.75} className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
            <span>{likes}</span>
            <span className="sr-only">{liked ? "You liked this article" : "Like this article"}</span>
          </button>
        )}

        {(post.enableSharing ?? true) && (
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-eyebrow uppercase text-stone">Share</span>
            <button type="button" onClick={() => handleShare("x")} className={shareClass}>X</button>
            <button type="button" onClick={() => handleShare("linkedin")} className={shareClass}>LinkedIn</button>
            <button type="button" onClick={() => handleShare("copy")} className={shareClass}>
              {copied ? "Link copied" : "Copy link"}
            </button>
            <span role="status" className="sr-only">{copied ? "Link copied to clipboard" : ""}</span>
          </div>
        )}
      </div>

      {(post.enableComments ?? true) && (
        <section aria-labelledby="comments-heading" className="mt-14">
          <h2 id="comments-heading" className="text-2xl tracking-[-0.02em]">
            Comments {comments.length > 0 && <span className="text-stone">({comments.length})</span>}
          </h2>

          <form onSubmit={handleComment} className="mt-6 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm text-stone">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required maxLength={80} className={fieldClass} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-stone">Comment</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} maxLength={2000} className={fieldClass} />
            </label>
            {commentError && <p role="alert" className="text-sm text-ember-deep">{commentError}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="h-12 w-fit rounded-full bg-ink px-6 text-[15px] font-medium text-ivory transition-colors hover:bg-cocoa disabled:opacity-50"
            >
              {submitting ? "Posting…" : "Post comment"}
            </button>
          </form>

          {comments.length > 0 && (
            <ul className="mt-10 border-t border-line">
              {comments.map((comment) => (
                <li key={comment._id} className="border-b border-line py-6">
                  <p className="flex flex-wrap items-baseline gap-3">
                    <span className="font-medium">{comment.name}</span>
                    <span className="text-sm text-stone">
                      {new Date(comment.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </p>
                  <p className="mt-2 leading-relaxed text-ink/85">{comment.message}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
