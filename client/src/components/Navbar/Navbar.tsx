import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryCta, primaryNav } from "../../data/navigation";
import { ButtonLink } from "../ui/Button";
import { Wordmark } from "../ui/Wordmark";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: Escape closes it and the page behind can't scroll.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm text-ivory focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color] duration-500 ease-out-expo ${
          isScrolled || isOpen ? "border-line bg-ivory/90 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-[72px] items-center justify-between lg:h-[84px]">
          <Link to="/" aria-label="The Stable Company — home" onClick={close} className="text-ink">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `relative block px-3.5 py-2 text-[14px] transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-stone hover:text-ink"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            aria-hidden="true"
                            className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ember"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink to={primaryCta.to} className="!h-11 !px-5 !text-[14px]">
              {primaryCta.label}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ease-out-expo ${
                isOpen ? "translate-y-[4.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ease-out-expo ${
                isOpen ? "-translate-y-[4.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-ivory pt-[72px] lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-center py-10">
              <ul className="border-t border-line">
                {primaryNav.map((item, index) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.04 * index, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line"
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex items-baseline justify-between py-4 ${isActive ? "text-ink" : "text-ink/70"}`
                      }
                    >
                      <span className="font-serif text-[2.5rem] leading-none tracking-[-0.02em]">{item.label}</span>
                      <span className="text-eyebrow tabular-nums text-stone">{String(index + 1).padStart(2, "0")}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="container-page pb-[max(2rem,env(safe-area-inset-bottom))]">
              <ButtonLink to={primaryCta.to} onClick={close} className="w-full">
                {primaryCta.label}
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
