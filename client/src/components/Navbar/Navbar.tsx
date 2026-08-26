// components/Navbar/Navbar.tsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Branding", path: "/branding" },
  { label: "Technology", path: "/technology" },
  { label: "Insight", path: "/insight" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 py-5 transition-colors duration-300 lg:px-12 lg:py-6 ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <NavLink
          to="/"
          end
          className="text-xl font-semibold tracking-tight text-white no-underline"
        >
          <img
            src="/PitchesCreative.png"
            alt="Pitches Creative"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Desktop: horizontal links, slides in from the right, settles centered within the navbar row */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className="flex items-center gap-10"
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium tracking-tight no-underline transition-colors duration-200 whitespace-nowrap ${
                        isActive ? "text-white" : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-[110] flex h-9 w-9 flex-col items-end justify-center gap-1.5 border-none bg-transparent p-0 cursor-pointer"
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

      {/* Mobile: unchanged, still the centered vertical full-screen fade */}
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
                        isActive
                          ? "text-white"
                          : "text-gray-500 hover:text-white"
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