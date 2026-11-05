/** Illustrative phone showing an app dashboard. Decorative SVG. */
export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 410" aria-hidden="true" className={className}>
      <rect width="200" height="410" rx="32" fill="#171717" />
      <rect x="7" y="7" width="186" height="396" rx="26" fill="#f7f5f0" />
      <rect x="76" y="16" width="48" height="14" rx="7" fill="#171717" />

      {/* App header */}
      <rect x="22" y="48" width="56" height="6" rx="3" fill="#171717" />
      <rect x="22" y="60" width="36" height="4" rx="2" fill="#a8a29a" />
      <circle cx="166" cy="56" r="11" fill="#efebe3" />

      {/* Chart card */}
      <rect x="18" y="80" width="164" height="118" rx="16" fill="#171717" />
      <rect x="32" y="96" width="40" height="4" rx="2" fill="#a8a29a" />
      <rect x="32" y="108" width="62" height="10" rx="2" fill="#f7f5f0" />
      <path
        d="M32 178 C 52 170, 60 150, 80 156 S 110 132, 126 140 S 152 112, 168 116"
        fill="none"
        stroke="#d08a5c"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="168" cy="116" r="4" fill="#d08a5c" />

      {/* List rows */}
      {[214, 262, 310].map((y, i) => (
        <g key={y}>
          <rect x="18" y={y} width="164" height="40" rx="10" fill="#ffffff" />
          <rect x="28" y={y + 10} width="20" height="20" rx="6" fill={i === 0 ? "#b66a3c" : "#efebe3"} />
          <rect x="56" y={y + 12} width="64" height="5" rx="2.5" fill="#171717" opacity="0.8" />
          <rect x="56" y={y + 23} width="42" height="4" rx="2" fill="#cfc9bf" />
          <rect x="146" y={y + 15} width="26" height="10" rx="5" fill="#efebe3" />
        </g>
      ))}

      {/* Tab bar */}
      <rect x="18" y="362" width="164" height="28" rx="14" fill="#efebe3" />
      <circle cx="52" cy="376" r="4" fill="#171717" />
      <circle cx="100" cy="376" r="4" fill="#cfc9bf" />
      <circle cx="148" cy="376" r="4" fill="#cfc9bf" />
    </svg>
  );
}
