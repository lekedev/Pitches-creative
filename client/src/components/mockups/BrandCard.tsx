/** Illustrative brand-identity card: mark, specimen and palette. Decorative SVG. */
export function BrandCard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true" className={className}>
      <rect width="240" height="200" rx="10" fill="#f7f5f0" />
      <rect x="0.5" y="0.5" width="239" height="199" rx="9.5" fill="none" stroke="#e5e1da" />

      {/* Mark */}
      <rect x="27" y="22" width="16" height="6" fill="#b66a3c" />
      <rect x="22" y="30" width="16" height="6" fill="#171717" />
      <rect x="22" y="38" width="16" height="6" fill="#171717" />
      <text x="164" y="38" fill="#6b675f" fontFamily="'Geist Variable', sans-serif" fontSize="9" letterSpacing="1.4">
        IDENTITY
      </text>

      {/* Specimen */}
      <text x="20" y="122" fill="#171717" fontFamily="'Instrument Serif', serif" fontSize="76" letterSpacing="-2">
        Aa
      </text>
      <text x="124" y="96" fill="#171717" fontFamily="'Geist Variable', sans-serif" fontSize="10" fontWeight="500">
        Instrument Serif
      </text>
      <text x="124" y="112" fill="#6b675f" fontFamily="'Geist Variable', sans-serif" fontSize="10">
        Geist
      </text>

      {/* Palette */}
      {["#171717", "#4a3426", "#b66a3c", "#efebe3"].map((color, i) => (
        <circle key={color} cx={34 + i * 30} cy="164" r="12" fill={color} stroke="#e5e1da" />
      ))}
    </svg>
  );
}
