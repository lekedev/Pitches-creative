export interface ServiceCategory {
  /** Anchor id on the Services page, e.g. /services#digital-experiences.
   * Also used as the `service` value on the contact form. */
  id: string;
  number: string;
  title: string;
  /** One-line summary used on the homepage. */
  summary: string;
  /** "Choose this if…" — helps visitors self-select on the Services page. */
  chooseIf: string;
  /** The problem this category solves. */
  problem: string;
  /** Who it is typically for. */
  audience: string[];
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-experiences",
    number: "01",
    title: "Digital Experiences",
    summary: "Websites and interfaces that make a strong first impression and are a pleasure to use.",
    chooseIf: "you need a website, online store or portfolio — or your current one no longer represents you.",
    problem:
      "Your website is often the first conversation someone has with your business. When it is slow, dated or confusing, people leave before they understand what you offer. We design and build sites that are clear, fast and credible — and that are easy for you to keep up to date.",
    audience: ["Startups and SMEs", "E-commerce brands", "Schools and institutions", "Professionals and creators"],
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
    chooseIf: "spreadsheets, manual steps or disconnected tools are slowing your team down.",
    problem:
      "Growing organisations outgrow spreadsheets, paper processes and off-the-shelf tools that almost fit. We build web and mobile applications, internal systems and automations shaped around the way you actually work — so your team spends less time on admin and more on the work that matters.",
    audience: ["Growing businesses", "Healthcare organisations", "Schools and institutions", "Founders building products"],
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
    chooseIf: "you're launching something new, or your brand looks and sounds different everywhere it appears.",
    problem:
      "People choose brands they understand and remember. When your identity is inconsistent or your content doesn't reflect the quality of your work, you're harder to trust. We create identities, visuals and media that make your brand clear, consistent and recognisable.",
    audience: ["New ventures", "Personal brands", "Artists and creatives", "Established businesses refreshing their brand"],
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
    chooseIf: "you have a website or product that needs to be found, measured, improved or simply looked after.",
    problem:
      "Launching is only the start. Without visibility, measurement and maintenance, even good work stops performing. We help you get found, understand what's working, automate what's repetitive and keep your platforms secure and up to date.",
    audience: ["Businesses with an existing site or product", "Teams without in-house technical support", "Organisations planning their next digital step"],
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

/** Options for the contact form's "Service required" field. */
export const serviceOptions = [
  ...serviceCategories.map((category) => ({ value: category.id, label: category.title })),
  { value: "not-sure", label: "Not sure yet" },
];
