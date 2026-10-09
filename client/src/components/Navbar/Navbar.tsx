import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Company", path: "/about" },
  { label: "Our approach", path: "/#approach" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors no-underline ${isActive ? "text-white" : "text-white/60 hover:text-white"}`;

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-5 py-4 transition-all duration-300 sm:px-8 lg:px-16 lg:py-5 ${isScrolled ? "border-b border-white/10 bg-[#081326]/90 backdrop-blur-xl" : "border-b border-transparent bg-[#081326]/30"}`}>
        <Link to="/" aria-label="The Stable Company home" onClick={() => setIsOpen(false)} className="group flex items-center gap-3 text-white no-underline">
          <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center border border-[#d5b77c]/70 text-lg font-serif text-[#d5b77c] transition-colors group-hover:bg-[#d5b77c] group-hover:text-[#081326]">S</span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs">The Stable Company</span>
            <span className="mt-1 text-[8px] uppercase tracking-[0.32em] text-white/45">Limited</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            link.path.startsWith("/#") ? (
              <a key={link.path} href={link.path} className="text-sm text-white/60 no-underline transition-colors hover:text-white">{link.label}</a>
            ) : (
              <NavLink key={link.path} to={link.path} className={linkClass}>{link.label}</NavLink>
            )
          ))}
          <Link to="/contact" className="inline-flex items-center gap-3 border border-[#d5b77c]/60 px-4 py-3 text-xs text-[#e4ca97] no-underline transition-colors hover:bg-[#d5b77c] hover:text-[#081326]">
            Start a conversation <span>↗</span>
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-[120] flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 bg-transparent lg:hidden"
        >
          <span className={`h-px w-5 bg-white transition-transform ${isOpen ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-white transition-transform ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] flex flex-col justify-center gap-7 bg-[#081326] px-8 lg:hidden"
          >
            {navLinks.map((link, index) => (
              link.path.startsWith("/#") ? (
                <motion.a key={link.path} href={link.path} onClick={() => setIsOpen(false)} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="text-3xl font-medium text-white no-underline">{link.label}</motion.a>
              ) : (
                <motion.div key={link.path} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
                  <NavLink to={link.path} onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white no-underline">{link.label}</NavLink>
                </motion.div>
              )
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 inline-flex w-fit items-center gap-4 bg-[#d5b77c] px-5 py-4 text-sm font-medium text-[#081326] no-underline">Start a conversation ↗</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
