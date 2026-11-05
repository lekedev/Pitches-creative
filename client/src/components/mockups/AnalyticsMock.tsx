/** Illustrative analytics panel (growth & support). Decorative SVG; values are not data. */
export function AnalyticsMock({ className = "" }: { className?: string }) {
  const bars = [38, 52, 46, 64, 58, 76, 70, 88];
  return (
    <svg viewBox="0 0 480 320" aria-hidden="true" className={className}>
      <rect width="480" height="320" rx="12" fill="#fbfaf7" />
      <rect x="0.5" y="0.5" width="479" height="319" rx="11.5" fill="none" stroke="#e5e1da" />

      <rect x="28" y="28" width="80" height="6" rx="3" fill="#171717" />
      <rect x="28" y="42" width="54" height="4" rx="2" fill="#cfc9bf" />
      <rect x="372" y="24" width="80" height="24" rx="12" fill="#efebe3" />
      <rect x="388" y="34" width="48" height="4" rx="2" fill="#6b675f" />

      {/* Gridlines */}
      {[96, 146, 196, 246].map((y) => (
        <rect key={y} x="28" y={y} width="424" height="1" fill="#e5e1da" />
      ))}

      {/* Bars */}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 52}
          y={270 - h * 2}
          width="28"
          height={h * 2}
          rx="3"
          fill={i === bars.length - 1 ? "#b66a3c" : i % 2 ? "#171717" : "#cfc9bf"}
        />
      ))}

      {/* Trend line */}
      <path
        d="M54 196 L106 170 L158 182 L210 140 L262 150 L314 116 L366 126 L418 92"
        fill="none"
        stroke="#4a3426"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 6"
      />
      <rect x="28" y="286" width="424" height="1" fill="#171717" opacity="0.4" />
    </svg>
  );
}
