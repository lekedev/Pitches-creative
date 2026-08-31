import { NavLink } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Branding", path: "/branding" },
  { label: "Technology", path: "/technology" },
  // { label: "Testimonials", path: "/testimonials" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "/icon/facebook.svg" },
  { label: "Twitter", href: "https://x.com", icon: "/icon/x.svg" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "/icon/linkedin.svg" },
];

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 font-[barlow-regular] bg-[#0a0a0a] px-5 pt-10 lg:px-12">
      {/* Top row: logo, nav, social */}
      <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline transition-all duration-200 hover:scale-[1.03] active:scale-95">
          <img
            src="/icon/PitchesCreativeLogoBlack1.svg"
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
                `text-sm no-underline transition-all hover:scale-[1.03] active:scale-95 ${
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
        <div className="flex w-full flex-wrap items-center gap-5 rounded-lg border border-white/10 px-4 py-3 sm:w-auto sm:min-w-[402px]">
          <span className="text-xl  text-white/80">
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
                  className="
                      flex h-[64px] w-[64px] items-center justify-center
                      rounded-md
                      border border-[#343434]
                      bg-[linear-gradient(180deg,#242424_0%,rgba(36,36,36,0)_100%)]
                      transition-all duration-300
                      hover:scale-[1.03] active:scale-95
                      hover:bg-[linear-gradient(180deg,#2B2B2B_0%,rgba(43,43,43,0)_100%)]"
                      
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="h-5 w-5 object-contain"
                  />
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
              className="flex items-center gap-2 text-sm text-white/80 no-underline transition-all hover:scale-[1.03] active:scale-95 hover:text-white"
            >
              <img
                src="/icon/mail.svg"
                alt=""
                className="h-4 w-5"
              />
              hello@squareup.com
            </a>

            <a
              href="tel:+919181323209"
              className="flex items-center gap-2 text-sm text-white/80 no-underline transition-all hover:scale-[1.03] active:scale-95 hover:text-white"
            >
              <img
                src="/icon/phone.svg"
                alt=""
                className="h-4 w-5"
              />
              +91 91813 23 2309
            </a>

            <span className="flex items-center gap-2 text-sm text-white/80">
              <img
                src="/icon/location.svg"
                alt=""
                className="h-4 w-5"
              />
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