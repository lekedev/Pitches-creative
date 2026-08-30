import { useState, useEffect } from "react";
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
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const likedPosts = JSON.parse(
      localStorage.getItem("liked_insights") || "[]"
    );

    setLiked(likedPosts.includes(post.id));

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

    try {
      const newComment = await postComment(
        post.id,
        name,
        message
      );

      setComments((prev) => [newComment, ...prev]);
      setName("");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const handleShare = async (
    platform: "twitter" | "linkedin" | "copy"
  ) => {
    if (platform === "copy") {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
      return;
    }

    const urls = {
      twitter: `https://x.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(post.title)}`,

      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    };

    window.open(
      urls[platform],
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      {/* ================= LIKE + SHARE ================= */}
      <div className="flex items-center gap-6">
        {(post.enableLikes ?? true) && (
          <button
            onClick={handleLike}
            disabled={liked}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all hover:scale-[1.03] active:scale-95 ${
              liked
                ? "border-[#FFC24F] bg-[#FFC24F]/10 text-[#FFC24F]"
                : "border-white/20 text-white/70 hover:text-white"
            }`}
          >
            {liked ? "♥" : "♡"} {likes}
          </button>
        )}

        {(post.enableSharing ?? true) && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">
              Share:
            </span>

            <button
              onClick={() => handleShare("twitter")}
              className="text-sm text-white/60 transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:text-white"
            >
              Twitter
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              className="text-sm text-white/60 transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:text-white"
            >
              LinkedIn
            </button>

            <button
              onClick={() => handleShare("copy")}
              className="text-sm text-white/60 transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:text-white"
            >
              Copy Link
            </button>
          </div>
        )}
      </div>

      {/* ================= COMMENTS ================= */}
      {(post.enableComments ?? true) && (
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-medium text-white">
            Comments{" "}
            {comments.length > 0 &&
              `(${comments.length})`}
          </h3>

          <form
            onSubmit={handleComment}
            className="mb-8 flex flex-col gap-3"
          >
            <input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#FFC24F]/50"
            />

            <textarea
              placeholder="Write a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#FFC24F]/50"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-fit rounded-full bg-[#FFC24F] px-5 py-2 text-sm font-medium text-black transition-all hover:scale-[1.03] active:scale-95 hover:opacity-90 disabled:opacity-50"
            >
              {submitting
                ? "Posting..."
                : "Post Comment"}
            </button>
          </form>

          {/* Comments list */}
          <div className="flex flex-col gap-5">
            {comments.length === 0 ? (
              <p className="text-sm text-white/40">
                No comments yet. Be the first to share your
                thoughts.
              </p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment._id}
                  className="border-b border-white/5 pb-4"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      {comment.name}
                    </span>

                    <span className="text-xs text-white/30">
                      {new Date(
                        comment.createdAt
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-sm text-white/70">
                    {comment.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}