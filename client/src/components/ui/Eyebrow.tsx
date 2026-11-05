import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** Optional index shown before the label, e.g. "01". */
  index?: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Small uppercase section label: `01 ── What we do`. */
export function Eyebrow({ children, index, tone = "light", className = "" }: EyebrowProps) {
  const accent = tone === "dark" ? "text-ember-light" : "text-ember-deep";
  const label = tone === "dark" ? "text-stone-light" : "text-stone";

  return (
    <p className={`flex items-center gap-3 text-eyebrow font-medium uppercase ${label} ${className}`}>
      {index && <span className={`tabular-nums ${accent}`}>{index}</span>}
      <span aria-hidden="true" className={`h-px w-8 ${tone === "dark" ? "bg-ember-light/60" : "bg-ember/60"}`} />
      <span>{children}</span>
    </p>
  );
}
