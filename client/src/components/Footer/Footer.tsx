import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061020] px-5 py-10 text-[#f7f5ef] sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-9">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link to="/" className="flex w-fit items-center gap-3 text-white no-underline">
            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center border border-[#d5b77c]/70 font-serif text-xl text-[#d5b77c]">S</span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">The Stable Company</span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/45">Limited</span>
            </span>
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">
            <Link to="/about" className="text-sm text-white/60 no-underline hover:text-white">Company</Link>
            <a href="/#ventures" className="text-sm text-white/60 no-underline hover:text-white">Our approach</a>
            <Link to="/contact" className="text-sm text-white/60 no-underline hover:text-white">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>Building what comes next.</p>
          <p>© {new Date().getFullYear()} The Stable Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
