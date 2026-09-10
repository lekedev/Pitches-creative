import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import mirror from "../../assets/images/mirror.png";

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const sections: NavItem[] = [
  { to: "/about", label: "About", end: true },
  { to: "/about/who-we-are", label: "Who We Are" },
  { to: "/about/what-we-represent", label: "What We Represent" },
  { to: "/about/our-process", label: "Our Process" },
  { to: "/about/our-team", label: "Our Team" },
];

function AboutNav() {
  const [mirrorLoaded, setMirrorLoaded] = useState(false);

  return (
    <>
      {/* Desktop: nav card + decorative image, grouped as one sticky block */}
      <div className="fixed right-12 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-6 lg:flex">
        <nav className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          {sections.map((section) => (
            <NavLink
              key={section.to}
              to={section.to}
              end={section.end}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-left text-sm no-underline transition-all hover:scale-[1.03] active:scale-95 ${
                  isActive
                    ? "bg-white/10 font-medium text-white"
                    : "text-white/60 hover:text-white"
                }`
              }
            >
              {section.label}
            </NavLink>
          ))}
        </nav>

        <motion.img
          src={mirror}
          alt=""
          aria-hidden="true"
          onLoad={() => setMirrorLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: mirrorLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[193px] h-[287px] object-contain"
        />
      </div>

      {/* Mobile: minimal progress dots, fixed right edge, no labels */}
      <nav className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 lg:hidden">
        {sections.map((section) => (
          <NavLink
            key={section.to}
            to={section.to}
            end={section.end}
            aria-label={`Go to ${section.label}`}
            className="flex h-6 w-6 items-center justify-center transition-all duration-200 hover:scale-[1.03] active:scale-95"
          >
            {({ isActive }) => (
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive ? "h-2.5 w-2.5 bg-orange-400" : "h-2 w-2 bg-white/30"
                }`}
              />
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default AboutNav;
