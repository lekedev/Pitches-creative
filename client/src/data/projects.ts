// Portfolio data. Add a project by appending to `projects` — the homepage
// feature, Work gallery and case-study pages all read from here.
//
// Content rule: only publish what is verified. Any case-study field left as
// `null` (or an empty array) renders as a clearly labelled placeholder rather
// than invented copy. Never add client names, metrics or testimonials that
// haven't been confirmed.

export type ProjectKind = "In-house product" | "Client project";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  kind: ProjectKind;
  /** Public URL of the live product, if any. */
  url: string | null;
  /** Short categories shown as tags, e.g. "Marketplace". */
  categories: string[];
  /** One-sentence summary used on cards. */
  summary: string;
  year: string | null;

  // Case-study sections — null until verified content is supplied.
  overview: string | null;
  challenge: string | null;
  approach: string | null;
  services: string[];
  technology: string[];
  outcomes: string | null;
  images: ProjectImage[];

  /** Brand colours used to theme the project's cover panel. */
  theme: { background: string; foreground: string };
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "stablefarm",
    name: "Stablefarm.ng",
    kind: "In-house product",
    url: "https://www.stablefarm.ng",
    categories: ["Marketplace", "Web platform"],
    // Verified from the live product: it is a farm marketplace with a
    // multilingual interface that includes Yorùbá.
    summary:
      "A farm marketplace developed by The Stable Company, with a multilingual interface that includes Yorùbá.",
    year: null, // TODO(content): launch year
    overview: null, // TODO(content): what the product is and who it serves
    challenge: null, // TODO(content)
    approach: null, // TODO(content)
    services: [], // TODO(content): confirm, e.g. product design, web development
    technology: [], // TODO(content): confirm stack
    outcomes: null, // only verified outcomes
    images: [], // TODO(content): product screenshots in /public/work/stablefarm/
    theme: { background: "#1f4d3a", foreground: "#f4efe3" }, // TODO(content): confirm brand colours
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
