import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "text";
type Tone = "light" | "dark"; // the background the button sits on

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  /** Diagonal arrow for "go somewhere new", straight arrow for "continue". */
  arrow?: "up-right" | "right" | "none";
  className?: string;
  onClick?: () => void;
}

const base =
  "group inline-flex items-center justify-center gap-3 text-[15px] font-medium leading-none transition-colors duration-300 ease-out-expo";

const variants: Record<Variant, Record<Tone, string>> = {
  primary: {
    light: "h-13 rounded-full bg-ink px-6 text-ivory hover:bg-cocoa",
    dark: "h-13 rounded-full bg-ivory px-6 text-ink hover:bg-ember-light",
  },
  secondary: {
    light: "h-13 rounded-full border border-ink/20 px-6 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
    dark: "h-13 rounded-full border border-ivory/25 px-6 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink",
  },
  text: {
    light: "pb-1.5 text-ink border-b border-ink/25 hover:border-ember",
    dark: "pb-1.5 text-ivory border-b border-ivory/30 hover:border-ember-light",
  },
};

const isExternal = (to: string) => /^(https?:|mailto:|tel:)/.test(to);

/** The site's only button style for navigation-style CTAs. Renders a router
 * Link for internal paths and a plain anchor for external/mailto/tel links. */
export function ButtonLink({
  to,
  children,
  variant = "primary",
  tone = "light",
  arrow = "up-right",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const Icon = arrow === "right" ? ArrowRight : ArrowUpRight;
  const classes = `${base} ${variants[variant][tone]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow !== "none" && (
        <Icon
          aria-hidden="true"
          strokeWidth={1.75}
          className={`h-4 w-4 transition-transform duration-300 ease-out-expo ${
            arrow === "right" ? "group-hover:translate-x-1" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          }`}
        />
      )}
    </>
  );

  if (isExternal(to)) {
    const newTab = to.startsWith("http");
    return (
      <a href={to} className={classes} onClick={onClick} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
