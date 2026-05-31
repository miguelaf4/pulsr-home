/**
 * Brand mark — matches the Pulsr app.
 *
 * The mark is a rounded-square tile with a 135° purple→pink gradient
 * (Tailwind purple-500 → pink-500) containing a white lowercase "p".
 * The descender is nudged up so the glyph sits on the optical centerline.
 */

interface PulsrMarkProps {
  /** Tile edge length in px. Default 32 (nav size). */
  size?: number;
  /** Corner radius in px. Defaults to ~22% of size to match the app icons. */
  radius?: number;
  className?: string;
}

export function PulsrMark({ size = 32, radius, className = "" }: PulsrMarkProps) {
  const r = radius ?? Math.round(size * 0.22);
  // Font-size ≈ 81% of tile, padding-bottom ≈ 12% of tile (matches app icon).
  const fontSize = Math.round(size * 0.81);
  const padBottom = Math.round(size * 0.12);

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: r,
        background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
        paddingBottom: padBottom,
        lineHeight: 1,
        color: "#ffffff",
        fontWeight: 800,
        fontSize,
        fontFamily:
          "var(--font-satoshi), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      p
    </span>
  );
}

interface PulsrLogoProps {
  /**
   * Wordmark font-size in px. Defaults to 22 (nav size).
   * The default site logo is wordmark-only — no tile mark.
   */
  size?: number;
  /** Set true to show the gradient tile next to the wordmark. */
  withMark?: boolean;
  className?: string;
}

export default function PulsrLogo({
  size = 22,
  withMark = false,
  className = "",
}: PulsrLogoProps) {
  const markSize = Math.round(size * 1.4);

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {withMark && <PulsrMark size={markSize} />}
      <span
        style={{
          color: "#F5F5FA",
          fontWeight: 600,
          fontSize: size,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          fontFamily:
            "var(--font-satoshi), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        pulsr
      </span>
    </span>
  );
}
