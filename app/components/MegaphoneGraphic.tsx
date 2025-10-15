export default function MegaphoneGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ transform: 'rotate(-15deg)' }}>
      <svg
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-sm"
      >
        {/* Define halftone patterns */}
        <defs>
          {/* Dense halftone pattern for dark areas */}
          <pattern id="halftone-dark" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.5" fill="#f8f7f3" />
          </pattern>

          {/* Medium halftone pattern */}
          <pattern id="halftone-medium" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.8" fill="#f8f7f3" />
          </pattern>

          {/* Light halftone pattern */}
          <pattern id="halftone-light" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1" fill="#f8f7f3" />
          </pattern>
        </defs>

        {/* Megaphone head/speaker (circle at top) */}
        <circle cx="200" cy="80" r="60" fill="url(#halftone-dark)" />

        {/* Paper/card shape in middle */}
        <rect
          x="100"
          y="160"
          width="220"
          height="150"
          fill="url(#halftone-light)"
          rx="4"
        />

        {/* Megaphone handle grip (left side) */}
        <ellipse
          cx="80"
          cy="380"
          rx="40"
          ry="55"
          fill="url(#halftone-dark)"
        />

        {/* Megaphone body/cone (main body) */}
        <path
          d="M 180 320 L 120 420 Q 110 480 120 540 L 320 570 Q 340 510 340 450 L 280 320 Z"
          fill="url(#halftone-medium)"
        />

        {/* Ribbon/bow decoration elements */}
        <circle cx="280" cy="280" r="35" fill="url(#halftone-light)" />
        <circle cx="240" cy="260" r="30" fill="url(#halftone-light)" opacity="0.7" />

        {/* Ribbon tails */}
        <path
          d="M 270 300 Q 290 330 310 370"
          stroke="url(#halftone-medium)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 220 280 Q 200 310 190 350"
          stroke="url(#halftone-light)"
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
