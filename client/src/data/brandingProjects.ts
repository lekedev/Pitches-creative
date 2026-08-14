export interface BrandingProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  service: string;
  scopeOfWork: string;
  year: string;
  description: string;
  coverImages: [string, string]; // the pair shown on the Selected Projects grid
  gallery: string[]; // full image set on the detail page
}

export const brandingProjects: BrandingProject[] = [
  {
    id: "1",
    slug: "cinema-brand-identity",
    title: "Brands People Understand, Remember, And Trust.",
    client: "Aspektika",
    service: "Aspektika",
    scopeOfWork: "Aspektika",
    year: "2019",
    description:
      "Your brand is more than your logo. It is how your business looks, speaks, feels, and shows up across every touchpoint. We help you shape a brand that communicates clearly, looks credible, and gives people a reason to choose you.",
    coverImages: [
      "/branding/Rectangle 96.png",
      "/branding/project-107.png",
    ],
    gallery: [
      "/branding/project-1-gallery-1.png",
      "/branding/project-1-gallery-2.png",
      "/branding/project-1-gallery-3.png",
      "/branding/project-1-gallery-4.png",
      "/branding/project-1-gallery-5.png",
      "/branding/project-1-gallery-6.png",
    ],
  },
  {
    id: "2",
    slug: "style-baba-packaging",
    title: "A Bold Identity For A Modern Packaging Brand.",
    client: "Baba Foods",
    service: "Brand Identity & Packaging",
    scopeOfWork: "Logo, Packaging, Guidelines",
    year: "2021",
    description:
      "Your brand is more than your logo. It is how your business looks, speaks, feels, and shows up across every touchpoint. We help you shape a brand that communicates clearly, looks credible, and gives people a reason to choose you.",
    coverImages: [
      "/branding/Rectangle 109.png",
      "/branding/project-2-b.png",
    ],
    gallery: [
      "/branding/project-2-gallery-1.png",
      "/branding/project-2-gallery-2.png",
      "/branding/project-2-gallery-3.png",
      "/branding/project-2-gallery-4.png",
    ],
  },
  {
    id: "3",
    slug: "style-baba-packaging",
    title: "A Bold Identity For A Modern Packaging Brand.",
    client: "Baba Foods",
    service: "Brand Identity & Packaging",
    scopeOfWork: "Logo, Packaging, Guidelines",
    year: "2021",
    description:
      "Your brand is more than your logo. It is how your business looks, speaks, feels, and shows up across every touchpoint. We help you shape a brand that communicates clearly, looks credible, and gives people a reason to choose you.",
    coverImages: [
      "/branding/Rectangle 96.png",
      "/branding/project-2-b.png",
    ],
    gallery: [
      "/branding/project-2-gallery-1.png",
      "/branding/project-2-gallery-2.png",
      "/branding/project-2-gallery-3.png",
      "/branding/project-2-gallery-4.png",
    ],
  },
  {
    id: "4",
    slug: "style-baba-packaging",
    title: "A Bold Identity For A Modern Packaging Brand.",
    client: "Baba Foods",
    service: "Brand Identity & Packaging",
    scopeOfWork: "Logo, Packaging, Guidelines",
    year: "2021",
    description:
      "Your brand is more than your logo. It is how your business looks, speaks, feels, and shows up across every touchpoint. We help you shape a brand that communicates clearly, looks credible, and gives people a reason to choose you.",
    coverImages: [
      "/branding/Rectangle 109.png",
      "/branding/project-4-b.png",
    ],
    gallery: [
      "/branding/project-2-gallery-1.png",
      "/branding/project-2-gallery-2.png",
      "/branding/project-2-gallery-3.png",
      "/branding/project-2-gallery-4.png",
    ],
  },

  {
    id: "2",
    slug: "style-baba-packaging",
    title: "A Bold Identity For A Modern Packaging Brand.",
    client: "Baba Foods",
    service: "Brand Identity & Packaging",
    scopeOfWork: "Logo, Packaging, Guidelines",
    year: "2021",
    description:
      "Your brand is more than your logo. It is how your business looks, speaks, feels, and shows up across every touchpoint. We help you shape a brand that communicates clearly, looks credible, and gives people a reason to choose you.",
    coverImages: [
      "/branding/project-2-a.png",
      "/branding/project-2-b.png",
    ],
    gallery: [
      "/branding/project-2-gallery-1.png",
      "/branding/project-2-gallery-2.png",
      "/branding/project-2-gallery-3.png",
      "/branding/project-2-gallery-4.png",
    ],
  },
];