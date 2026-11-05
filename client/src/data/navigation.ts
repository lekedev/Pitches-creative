export interface NavItem {
  label: string;
  to: string;
}

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export const primaryCta: NavItem = { label: "Start a Project", to: "/contact" };

// Footer service links point at anchors on the Services page.
export const serviceNav: NavItem[] = [
  { label: "Digital Experiences", to: "/services#digital-experiences" },
  { label: "Software & Technology", to: "/services#software-technology" },
  { label: "Creative & Media", to: "/services#creative-media" },
  { label: "Growth & Support", to: "/services#growth-support" },
];
