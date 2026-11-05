import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { primaryNav, serviceNav } from "../../data/navigation";
import { site } from "../../data/site";
import { Wordmark } from "../ui/Wordmark";

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 text-eyebrow font-medium uppercase text-stone-light">{title}</h2>
      <ul className="space-y-3 text-[15px]">{children}</ul>
    </div>
  );
}

const linkClass = "text-ivory/80 transition-colors duration-300 hover:text-ember-light";

function Footer() {
  const { email, phone, location } = site.contact;
  const hasContact = Boolean(email || phone || location);

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-page pb-10 pt-20 md:pt-28">
        {/* Closing statement — pages carry their own CTA right above the footer */}
        <div className="border-b border-line-dark pb-16 md:pb-20">
          <p className="max-w-[16ch] text-title md:text-headline">
            We build what moves business{" "}
            <em className="font-serif font-normal italic tracking-[-0.02em] text-ember-light">forward.</em>
          </p>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-xs">
            <Link to="/" aria-label="The Stable Company — home" className="text-ivory">
              <Wordmark showLegal />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-stone-light">
              A creative and technology company building brands, digital experiences and solutions for
              businesses and the people behind them.
            </p>
          </div>

          <FooterColumn title="Navigate">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {serviceNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            {hasContact ? (
              <>
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className={linkClass}>
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className={linkClass}>
                      {phone}
                    </a>
                  </li>
                )}
                {location && <li className="text-stone-light">{location}</li>}
              </>
            ) : (
              <li>
                <Link to="/contact" className={linkClass}>
                  Send us an enquiry
                </Link>
              </li>
            )}
            {site.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {social.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark pt-8 text-[13px] text-stone-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <a href="#main" className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-ivory">
            Back to top
            <ArrowUp aria-hidden="true" strokeWidth={1.75} className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
