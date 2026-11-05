/**
 * Illustrative browser window showing an editorial website layout. Pure SVG,
 * so it scales crisply, costs no network request and follows the palette.
 * Decorative: the surrounding section describes what it represents.
 */
export function BrowserMock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" aria-hidden="true" className={className}>
      <defs>
        <clipPath id="browser-clip">
          <rect width="640" height="420" rx="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#browser-clip)">
        <rect width="640" height="420" fill="#fbfaf7" />

        {/* Window chrome */}
        <rect width="640" height="36" fill="#efebe3" />
        <circle cx="20" cy="18" r="5" fill="#d9d3c9" />
        <circle cx="37" cy="18" r="5" fill="#d9d3c9" />
        <circle cx="54" cy="18" r="5" fill="#d9d3c9" />
        <rect x="230" y="10" width="180" height="16" rx="8" fill="#f7f5f0" />
        <rect x="290" y="16.5" width="60" height="3" rx="1.5" fill="#cfc9bf" />

        {/* Site nav */}
        <rect x="32" y="56" width="12" height="4" fill="#b66a3c" />
        <rect x="30" y="62" width="12" height="4" fill="#171717" />
        <rect x="30" y="68" width="12" height="4" fill="#171717" />
        <rect x="50" y="61" width="54" height="6" rx="1" fill="#171717" />
        <rect x="392" y="61" width="30" height="5" rx="2.5" fill="#cfc9bf" />
        <rect x="434" y="61" width="30" height="5" rx="2.5" fill="#cfc9bf" />
        <rect x="476" y="61" width="30" height="5" rx="2.5" fill="#cfc9bf" />
        <rect x="532" y="53" width="76" height="22" rx="11" fill="#171717" />
        <rect x="548" y="62" width="44" height="4" rx="2" fill="#f7f5f0" />

        {/* Headline + copy */}
        <text x="30" y="142" fill="#171717" fontFamily="'Geist Variable', sans-serif" fontSize="40" fontWeight="500" letterSpacing="-1.6">
          Ideas, built
        </text>
        <text x="30" y="186" fill="#b66a3c" fontFamily="'Instrument Serif', serif" fontSize="44" fontStyle="italic" letterSpacing="-0.8">
          to last.
        </text>
        <rect x="30" y="212" width="228" height="5" rx="2.5" fill="#d9d3c9" />
        <rect x="30" y="224" width="196" height="5" rx="2.5" fill="#d9d3c9" />
        <rect x="30" y="236" width="150" height="5" rx="2.5" fill="#d9d3c9" />
        <rect x="30" y="260" width="96" height="26" rx="13" fill="#171717" />
        <rect x="46" y="271" width="64" height="4" rx="2" fill="#f7f5f0" />
        <rect x="134" y="260" width="88" height="26" rx="13" fill="none" stroke="#cfc9bf" />

        {/* Hero image panel */}
        <rect x="312" y="96" width="296" height="196" rx="6" fill="#4a3426" />
        <circle cx="508" cy="194" r="74" fill="none" stroke="#d08a5c" strokeWidth="1.25" opacity="0.7" />
        <circle cx="508" cy="194" r="48" fill="#b66a3c" />
        <rect x="312" y="194" width="296" height="1" fill="#f7f5f0" opacity="0.25" />
        <rect x="332" y="116" width="44" height="4" rx="2" fill="#f7f5f0" opacity="0.6" />
        <rect x="332" y="262" width="88" height="10" rx="2" fill="#f7f5f0" opacity="0.85" />

        {/* Card row */}
        {[30, 224, 418].map((x, i) => (
          <g key={x}>
            <rect x={x} y="316" width="190" height="84" rx="6" fill={i === 1 ? "#171717" : "#efebe3"} />
            <rect x={x + 16} y="334" width="18" height="18" rx="9" fill={i === 1 ? "#d08a5c" : "#cfc9bf"} />
            <rect x={x + 16} y="364" width="110" height="5" rx="2.5" fill={i === 1 ? "#f7f5f0" : "#171717"} opacity={i === 1 ? 0.85 : 0.75} />
            <rect x={x + 16} y="376" width="80" height="5" rx="2.5" fill={i === 1 ? "#a8a29a" : "#cfc9bf"} />
          </g>
        ))}
      </g>
    </svg>
  );
}
