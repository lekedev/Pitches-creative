interface MarkProps {
  className?: string;
}

/**
 * Brand mark: three stacked blocks, the top one shifted forward in ember —
 * a stable foundation with something moving ahead of it. Drawn on a 24-unit
 * grid so it stays crisp at favicon size (see public/favicon.svg).
 */
export function Mark({ className = "h-6 w-6" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="7" y="3" width="14" height="5" className="fill-ember" />
      <rect x="3" y="9.5" width="14" height="5" fill="currentColor" />
      <rect x="3" y="16" width="14" height="5" fill="currentColor" />
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
  /** Show the "Limited" line under the name (footer, legal contexts). */
  showLegal?: boolean;
}

export function Wordmark({ className = "", showLegal = false }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="h-[22px] w-[22px] shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em]">
          The Stable Company
        </span>
        {showLegal && (
          <span className="mt-1.5 text-[10px] uppercase tracking-[0.22em] opacity-60">Limited</span>
        )}
      </span>
    </span>
  );
}
