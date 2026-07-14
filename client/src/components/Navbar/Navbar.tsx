import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const desktopLinks = navLinks.filter((link) => link.path !== "/");

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 py-5 lg:px-12 lg:py-6">
        <NavLink
          to="/"
          end
          className="text-xl font-semibold tracking-tight text-white no-underline"
        >
          <img
            src="PitchesCreative.png"
            alt="Pitches Creative"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Desktop horizontal nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {desktopLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-tight no-underline transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA pill */}
        <NavLink
          to="/contact"
          className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors duration-200 hover:bg-white hover:text-black lg:inline-flex"
        >
          Let's talk <span aria-hidden>→</span>
        </NavLink>

        {/* Mobile hamburger — hidden on desktop */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-[110] flex h-9 w-9 flex-col items-end justify-center gap-1.5 border-none bg-transparent p-0 cursor-pointer lg:hidden"
        >
          <span
            className={`block h-0.5 rounded bg-white transition-all duration-300 ${
              isOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
            }`}
          />
          <span
            className={`block h-0.5 rounded bg-white transition-all duration-300 ${
              isOpen ? "w-6 opacity-0" : "w-[18px]"
            }`}
          />
          <span
            className={`block h-0.5 rounded bg-white transition-all duration-300 ${
              isOpen ? "w-6 -translate-y-2 -rotate-45" : "w-6"
            }`}
          />
        </button>
      </header>

      {/* Mobile-only full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] flex items-center justify-center bg-[#0a0a0a] lg:hidden"
          >
            <ul className="m-0 list-none p-0 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-3xl font-semibold tracking-tight no-underline transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-500 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;