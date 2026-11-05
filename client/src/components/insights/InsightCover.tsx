import type { Post } from "../../service/insightService";

const tones = ["bg-ink text-ivory", "bg-cocoa text-ivory", "bg-sand text-ink"];

/** Article cover: the uploaded image, or a typographic panel when there isn't one. */
export function InsightCover({ post, index = 0 }: { post: Post; index?: number }) {
  if (post.coverImage) {
    return <img src={post.coverImage} alt="" loading="lazy" className="h-full w-full object-cover" />;
  }
  return (
    <div className={`flex h-full w-full flex-col justify-between p-6 sm:p-8 ${tones[index % tones.length]}`}>
      <span className="text-eyebrow uppercase opacity-70">{post.category}</span>
      <span aria-hidden="true" className="font-serif text-[clamp(2.5rem,6vw,5rem)] italic leading-none tracking-[-0.02em] opacity-90">
        {post.category.split(" ")[0]}.
      </span>
    </div>
  );
}

export function SampleBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-ember/40 bg-ember/10 px-2.5 py-0.5 text-[12px] font-medium text-ember-deep">
      Sample
    </span>
  );
}
