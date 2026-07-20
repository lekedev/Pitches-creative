import { useEffect, useState } from "react";
import mirror from "../../assets/images/mirror.png";

interface NavItem {
  id: string;
  label: string;
}

const sections: NavItem[] = [
  { id: "about", label: "About" },
  { id: "who-we-are", label: "Who We Are" },
  { id: "what-we-represent", label: "What We Represent" },
  { id: "our-process", label: "Our Process" },
  { id: "our-team", label: "Our Team" },
];

function ScrollSpyNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: nav card + decorative image, grouped as one sticky block */}
      <div className="fixed right-12 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-6 lg:flex">
        <nav className="flex flex-col gap-1  rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                activeId === section.id
                  ? "bg-white/10 font-medium text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <img
          src={mirror}
          alt=""
          aria-hidden="true"
          className="w-[193px] h-[287px] object-contain"
        />
      </div>

      {/* Mobile: minimal progress dots, fixed right edge, no labels */}
      <nav className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 lg:hidden">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            aria-label={`Jump to ${section.label}`}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                activeId === section.id
                  ? "h-2.5 w-2.5 bg-orange-400"
                  : "h-2 w-2 bg-white/30"
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
}

export default ScrollSpyNav;