// data/insights.ts
export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // full article body, used on the detail page
  coverImage: string;
  date: string;
  author: string;
  category: string;
}

export const categories = [
  "Brand Strategy",
  "Visual Design",
  "Web Development",
  "Marketing",
  "Business Growth",
];

const titles = [
  "How To Know When Your Business Needs A Rebrand",
  "Why Consistency Makes Your Brand Easier To Trust",
  "The Difference Between Design And Creative Direction",
  "What Makes A Website Actually Convert",
  "The Real Cost Of Inconsistent Branding",
  "Why A Strong Brand Is More Than A Logo",
  "Building A Visual System That Scales With You",
  "How To Brief A Designer Without Losing Your Vision",
  "Why Strategy Should Come Before Design",
];

// 27 placeholder posts = 3 pages of 9, enough to demonstrate pagination.
// Once the real backend exists, this whole array gets replaced by a
// fetch('/api/insights') or Supabase query returning this same shape.
export const insights: InsightPost[] = Array.from({ length: 27 }, (_, i) => {
  const title = titles[i % titles.length];
  return {
    id: String(i + 1),
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${i + 1}`,
    title,
    excerpt:
      "From identity to interface, campaign to conversion, we build the assets businesses need to show up professionally and grow with confidence.",
    content:
      "From identity to interface, campaign to conversion, we build the assets businesses need to show up professionally and grow with confidence. Every serious business deserves a brand presence that reflects its ambition — this is placeholder body copy that will be replaced with real article content once the backend is connected. Our work sits at the intersection of creativity, strategy, and digital execution, helping clients define the right message, design the right visual system, and build the right digital experience to support their goals.",
    coverImage: `/insights/post-${(i % 3) + 1}.png`,
    date: "MAY 2026",
    author: "Simon Sineq",
    category: categories[i % categories.length],
  };
});