export interface ServiceCategory {
  /** Anchor id on the Services page, e.g. /services#digital-experiences */
  id: string;
  number: string;
  title: string;
  /** One-line summary used on the homepage. */
  summary: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-experiences",
    number: "01",
    title: "Digital Experiences",
    summary: "Websites and interfaces that make a strong first impression and are a pleasure to use.",
    items: [
      "Business websites",
      "Landing pages",
      "E-commerce platforms",
      "Portfolio and personal websites",
      "UI/UX design",
      "Website maintenance",
    ],
  },
  {
    id: "software-technology",
    number: "02",
    title: "Software & Technology",
    summary: "Custom software that simplifies how your business runs and makes room for it to grow.",
    items: [
      "Custom web applications",
      "Mobile applications",
      "Business management systems",
      "CRM, inventory and operational platforms",
      "AI integrations",
      "Workflow automation",
      "Digital transformation",
    ],
  },
  {
    id: "creative-media",
    number: "03",
    title: "Creative & Media",
    summary: "Identity, content and storytelling that give your brand a clear, recognisable voice.",
    items: [
      "Brand identity",
      "Graphic design",
      "Motion graphics",
      "Content creation",
      "Creative direction",
      "Media production",
    ],
  },
  {
    id: "growth-support",
    number: "04",
    title: "Growth & Support",
    summary: "Strategy, optimisation and ongoing care that keep everything performing after launch.",
    items: [
      "Search engine optimisation",
      "Digital strategy",
      "Analytics and performance",
      "Automation",
      "Technical support",
      "Ongoing maintenance",
    ],
  },
];
