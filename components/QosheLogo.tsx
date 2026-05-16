interface QosheLogoProps {
  iconSize?: number;
  showText?: boolean;
  showBar?: boolean;
  showTagline?: boolean;
  className?: string;
}

/*
 * SVG geometry — viewBox 0 0 120 120, center (60,60)
 * Outer star tips  R=44, inner valleys r=19
 *
 * Tips (angle from top, clockwise):
 *   Q  –90° → (60, 16)
 *   O  –18° → (101.84, 46.40)
 *   S   54° → (85.87, 95.61)
 *   H  126° → (34.13, 95.61)
 *   E  198° → (18.16, 46.40)
 *
 * Inner valleys:
 *   I0  –54° → (71.16, 44.64)   [Q–O]
 *   I1   18° → (78.07, 65.87)   [O–S]
 *   I2   90° → (60,   79)       [S–H]
 *   I3  162° → (41.93, 65.87)   [H–E]
 *   I4  234° → (48.84, 44.64)   [E–Q]
 *
 * Each arm triangle: tip + two adjacent inner points
 * Letters at R=35 along arm axis
 */
export default function QosheLogo({
  iconSize = 44,
  showText = true,
  showBar = false,
  showTagline = false,
  className = "",
}: QosheLogoProps) {
  const mainPx = Math.round(iconSize * 0.52);
  const subPx  = Math.round(iconSize * 0.21);
  const tagPx  = Math.round(iconSize * 0.14);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* ── SVG Star Mark ── */}
      <svg
        viewBox="0 0 120 120"
        width={iconSize}
        height={iconSize}
        aria-hidden="true"
        focusable="false"
      >
        {/* Background circle */}
        <circle cx="60" cy="60" r="57" fill="#0C1A4A" />

        {/* ── Arm triangles ── */}
        {/* Q – blue  */}
        <polygon points="60,16 48.84,44.64 71.16,44.64"      fill="#1565C0" />
        {/* O – dark navy */}
        <polygon points="101.84,46.4 71.16,44.64 78.07,65.87" fill="#0D3B9B" />
        {/* S – green */}
        <polygon points="85.87,95.61 78.07,65.87 60,79"       fill="#2E7D32" />
        {/* H – orange */}
        <polygon points="34.13,95.61 60,79 41.93,65.87"       fill="#E65100" />
        {/* E – red */}
        <polygon points="18.16,46.4 41.93,65.87 48.84,44.64"  fill="#C62828" />

        {/* ── Centre pentagon ── */}
        <polygon
          points="71.16,44.64 78.07,65.87 60,79 41.93,65.87 48.84,44.64"
          fill="#101E52"
        />

        {/* ── Shield ── */}
        <path
          d="M 51,50 L 69,50 L 69,62 Q 68.5,70.5 60,73.5 Q 51.5,70.5 51,62 Z"
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Checkmark */}
        <polyline
          points="55,61.5 59.5,67 68,54"
          fill="none"
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ── Letters at R=35 along each arm axis ── */}
        {/* Q  angle=–90°  → (60, 25) */}
        <text x="60"    y="25"   textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">Q</text>
        {/* O  angle=–18°  → (93.3, 49.2) */}
        <text x="93.3"  y="49.2" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">O</text>
        {/* S  angle=54°   → (80.6, 88.3) */}
        <text x="80.6"  y="88.3" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">S</text>
        {/* H  angle=126°  → (39.4, 88.3) */}
        <text x="39.4"  y="88.3" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">H</text>
        {/* E  angle=198°  → (26.7, 49.2) */}
        <text x="26.7"  y="49.2" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">E</text>
      </svg>

      {/* ── Word-mark ── */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black text-slate-900 dark:text-white tracking-wider"
            style={{ fontSize: `${mainPx}px`, lineHeight: 1 }}
          >
            QOSHE
          </span>
          <span
            className="font-bold text-teal-600 dark:text-teal-400"
            style={{ fontSize: `${subPx}px`, letterSpacing: "0.3em", lineHeight: 1, marginTop: 3 }}
          >
            CONSULTING
          </span>

          {/* Four-colour underbar (optional) */}
          {showBar && (
            <div
              className="flex mt-1.5 rounded overflow-hidden gap-px"
              style={{ height: "2.5px" }}
            >
              <div className="flex-1 bg-blue-600" />
              <div className="flex-1 bg-red-600" />
              <div className="flex-1 bg-green-600" />
              <div className="flex-1 bg-orange-500" />
            </div>
          )}

          {/* Tagline (optional) */}
          {showTagline && (
            <span
              className="text-slate-500 dark:text-slate-400 whitespace-nowrap"
              style={{ fontSize: `${tagPx}px`, lineHeight: 1.4, marginTop: 4 }}
            >
              Qualité · Orientation · Sécurité · Hygiène · Environnement
            </span>
          )}
        </div>
      )}
    </div>
  );
}
