// components/Footer/Footer.tsx
import { NavLink } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-5 pt-10 lg:px-12">
      {/* Top row: logo, nav, social */}
      <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <img
            src="PitchesCreative.png"
            alt="Pitches Creative Logo"
            className="h-[79px] w-[201px] flex-shrink-0 object-contain"
          />

          
        
        </NavLink>


        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm no-underline transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>


        {/* Social */}
        <div className="flex items-center gap-4 rounded-full border border-white/10 px-5 py-3">
          <span className="text-sm text-white/80">
            Stay Connected
          </span>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-sm text-orange-400 transition-colors hover:bg-white/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>


      {/* Bottom row */}
      <div className="flex flex-col gap-6 border-t border-white/10 py-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Contact */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">

          <a
            href="mailto:hello@squareup.com"
            className="flex items-center gap-2 text-sm text-white/80 no-underline transition-colors hover:text-white"
          >
            <span aria-hidden>✉</span>
            hello@squareup.com
          </a>


          <a
            href="tel:+919181323209"
            className="flex items-center gap-2 text-sm text-white/80 no-underline transition-colors hover:text-white"
          >
            <span aria-hidden>☎</span>
            +91 91813 23 2309
          </a>


          <span className="flex items-center gap-2 text-sm text-white/80">
            <span aria-hidden>📍</span>
            Somewhere in the World
          </span>

        </div>


        <p className="text-sm text-white/40">
          © 2026 Pitches Creative. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;