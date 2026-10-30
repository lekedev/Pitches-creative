// Content for The Stable Company's service landing pages.
// Each entry drives a page rendered by components/shared/ServiceLanding.

export interface ServiceOffering {
  title: string;
  highlight: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServicePageContent {
  slug: string;
  eyebrow: string;
  heading: { lead: string; middle: string; tail: string };
  intro: string;
  primaryCta: string;
  categories: string[];
  approachHeading: { lead: string; tail: string };
  approach: string[];
  offerings: ServiceOffering[];
  process: ServiceStep[];
  gallery: { image: string; label: string }[];
}

export const videoProduction: ServicePageContent = {
  slug: "video-production",
  eyebrow: "VIDEO PRODUCTION",
  heading: {
    lead: "Stories",
    middle: "Told In Motion, Made To Be",
    tail: "Watched.",
  },
  intro:
    "From concept to final cut, we plan, shoot, and edit video that captures attention and moves people to act — for brands, businesses, events, and creators.",
  primaryCta: "Start a Video Project",
  categories: [
    "COMMERCIALS",
    "DOCUMENTARIES",
    "EVENTS",
    "MUSIC VIDEOS",
    "SOCIAL CONTENT",
    "CORPORATE FILMS",
  ],
  approachHeading: { lead: "Every Frame", tail: "With Purpose." },
  approach: [
    "Great video is not just about expensive cameras. It starts with a clear idea, a strong script, and a crew that knows how to turn a brief into images people remember.",
    "At The Stable Company, our production team handles every stage — creative development, pre-production, filming, editing, colour grading, sound, and motion graphics — so you get a finished film that is ready for screens, socials, and stages.",
  ],
  offerings: [
    {
      title: "Brand &",
      highlight: "Commercial Films",
      description:
        "TV and online adverts, product launches, and brand films that communicate what you stand for.",
    },
    {
      title: "Corporate",
      highlight: "Videos",
      description:
        "Company profiles, training content, testimonials, and internal communications done professionally.",
    },
    {
      title: "Event",
      highlight: "Coverage",
      description:
        "Multi-camera coverage of conferences, launches, concerts, weddings, and live experiences.",
    },
    {
      title: "Documentary &",
      highlight: "Storytelling",
      description:
        "Long-form and short-form documentaries that give real people and real stories the space they deserve.",
    },
    {
      title: "Social Media",
      highlight: "Content",
      description:
        "Reels, short-form edits, and platform-native videos designed to stop the scroll.",
    },
    {
      title: "Music",
      highlight: "Videos",
      description:
        "Creative direction, filming, and editing for artists who want visuals that match their sound.",
    },
    {
      title: "Aerial &",
      highlight: "Drone Footage",
      description:
        "Licensed drone filming for real estate, tourism, construction, and cinematic establishing shots.",
    },
    {
      title: "Post-",
      highlight: "Production",
      description:
        "Editing, colour grading, sound design, subtitles, and motion graphics for footage you already have.",
    },
  ],
  process: [
    {
      title: "Discovery & Concept",
      description:
        "We learn your goals, audience, and message, then shape a creative concept and treatment.",
    },
    {
      title: "Pre-Production",
      description:
        "Scripts, storyboards, shot lists, casting, locations, and scheduling — all planned before the cameras roll.",
    },
    {
      title: "Production",
      description:
        "Our crew films with professional cameras, lighting, and audio to capture every shot cleanly.",
    },
    {
      title: "Post-Production",
      description:
        "Editing, grading, sound, and graphics bring the footage together into a polished story.",
    },
    {
      title: "Delivery",
      description:
        "Final files exported and formatted for TV, web, social platforms, and presentations.",
    },
  ],
  gallery: [
    { image: "/Rectangle 10.webp", label: "Brand Film" },
    { image: "/Rectangle 14.webp", label: "Studio Shoot" },
    { image: "/Rectangle 19.webp", label: "Event Coverage" },
  ],
};

export const photography: ServicePageContent = {
  slug: "photography",
  eyebrow: "PHOTOGRAPHY",
  heading: {
    lead: "Images",
    middle: "That Capture The Moment And Tell",
    tail: "Your Story.",
  },
  intro:
    "Professional photography for brands, products, people, and events — crafted with intention, lit with care, and edited to a consistent, high-end finish.",
  primaryCta: "Book a Photo Shoot",
  categories: [
    "PRODUCTS",
    "PORTRAITS",
    "EVENTS",
    "FASHION",
    "FOOD",
    "REAL ESTATE",
  ],
  approachHeading: { lead: "Seen Clearly,", tail: "Remembered Longer." },
  approach: [
    "The right image builds trust before a single word is read. Whether it is a product on a shelf, a team on your website, or a crowd at your event, photography shapes how people see you.",
    "The Stable Company brings creative direction, studio and on-location setups, professional lighting, and careful retouching together to deliver images that look as good as the work behind them.",
  ],
  offerings: [
    {
      title: "Product &",
      highlight: "E-Commerce",
      description:
        "Clean, consistent product shots for online stores, catalogues, packaging, and adverts.",
    },
    {
      title: "Corporate",
      highlight: "Headshots",
      description:
        "Professional portraits for teams, executives, speakers, and personal brands.",
    },
    {
      title: "Event",
      highlight: "Photography",
      description:
        "Conferences, launches, weddings, and celebrations captured candidly and completely.",
    },
    {
      title: "Fashion &",
      highlight: "Lifestyle",
      description:
        "Lookbooks, campaigns, and editorial shoots with styling and art direction.",
    },
    {
      title: "Food &",
      highlight: "Hospitality",
      description:
        "Menus, restaurants, hotels, and venues photographed to make people want to visit.",
    },
    {
      title: "Real Estate &",
      highlight: "Architecture",
      description:
        "Interior, exterior, and aerial photography that shows spaces at their best.",
    },
    {
      title: "Studio",
      highlight: "Sessions",
      description:
        "Controlled studio shoots for portraits, products, and creative concepts.",
    },
    {
      title: "Retouching &",
      highlight: "Editing",
      description:
        "Colour correction, cleanup, compositing, and finishing for consistent, publish-ready images.",
    },
  ],
  process: [
    {
      title: "Brief",
      description:
        "We discuss what the images are for, where they will be used, and the look you want.",
    },
    {
      title: "Creative Direction",
      description:
        "Moodboards, shot lists, styling, props, models, and locations planned ahead of the shoot.",
    },
    {
      title: "The Shoot",
      description:
        "In studio or on location, we capture every planned shot plus the moments in between.",
    },
    {
      title: "Selection & Retouching",
      description:
        "We curate the strongest frames and retouch them to a consistent, polished finish.",
    },
    {
      title: "Delivery",
      description:
        "High-resolution and web-optimised files delivered in an online gallery, ready to use.",
    },
  ],
  gallery: [
    { image: "/Rectangle 11.webp", label: "Product Shoot" },
    { image: "/Rectangle 13.webp", label: "Product Detail" },
    { image: "/Rectangle 20.webp", label: "Lifestyle" },
  ],
};

// Every division of The Stable Company, used by the services hub and home page.
export interface ServiceDivision {
  title: string;
  description: string;
  path: string;
}

export const serviceDivisions: ServiceDivision[] = [
  {
    title: "Technology",
    description:
      "SaaS platforms, websites, mobile apps, dashboards, portals, and custom software built for real businesses.",
    path: "/technology",
  },
  {
    title: "Video Production",
    description:
      "Commercials, corporate films, documentaries, events, music videos, and social content from concept to final cut.",
    path: "/video-production",
  },
  {
    title: "Photography",
    description:
      "Product, portrait, event, fashion, food, and real estate photography with professional retouching.",
    path: "/photography",
  },
  {
    title: "Branding & Design",
    description:
      "Brand identity, visual systems, and graphic design that help people understand and trust your business.",
    path: "/branding",
  },
  {
    title: "Digital Marketing",
    description:
      "Social media management, content strategy, and campaigns that turn attention into customers.",
    path: "/contact",
  },
  {
    title: "Events & Live Streaming",
    description:
      "Multi-camera live streams, event media coverage, and on-site content for hybrid audiences.",
    path: "/contact",
  },
];
