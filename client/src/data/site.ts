// Single source of truth for brand facts used across the site (nav, footer,
// metadata, contact page). Only add contact details or social URLs here once
// they have been verified — components hide anything left empty.

export interface SocialLink {
  label: string;
  href: string;
}

interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  contact: { email: string; phone: string; location: string };
  socials: SocialLink[];
}

export const site: SiteConfig = {
  name: "The Stable Company",
  legalName: "The Stable Company Limited",
  tagline: "We build what moves business forward.",
  description:
    "The Stable Company is a creative and technology company combining design, media and software engineering to build brands, digital experiences and solutions that move business forward.",
  /** Production origin, used for canonical URLs and Open Graph. */
  url: "https://pitchescreative.netlify.app",
  contact: {
    // TODO(content): add verified details. Empty strings are not rendered.
    email: "",
    phone: "",
    location: "",
  },
  // TODO(content): add verified profile URLs, e.g. { label: "LinkedIn", href: "https://…" }
  socials: [],
};
