"use client";

/**
 * Pixelated overlay layered on top of an animated background (shader, video, etc).
 *
 * It does NOT actually pixelate the layer below — true pixelation needs a WebGL
 * post-process. Instead it adds a repeating pixel-grid texture that, combined
 * with `mix-blend-mode`, makes the underlying colors *look* like they're being
 * rendered through a low-res screen (LED matrix / CRT / dot-display feel).
 *
 * Variants:
 *   "grid"      — chunky pixel grid (each "pixel" outlined). Most CRT-like.
 *   "dots"      — LED dot-matrix. Each pixel is a small bright dot.
 *   "scanlines" — horizontal scanlines only. Subtle, more "monitor" vibe.
 *   "combo"     — grid + scanlines stacked, for a heavier arcade look.
 */
type Variant = "grid" | "dots" | "scanlines" | "combo";

interface PixelOverlayProps {
  /** Visual style. Defaults to "grid". */
  variant?: Variant;
  /** Size of each "pixel" cell, in px. Larger = chunkier. Defaults to 6. */
  cell?: number;
  /** 0–1 overlay opacity. Defaults to 0.35. */
  opacity?: number;
  /**
   * CSS `mix-blend-mode`. "overlay" punches colors through brighter; "multiply"
   * darkens; "soft-light" is subtle; "normal" just paints the pattern on top.
   * Defaults to "overlay".
   */
  blend?:
    | "normal"
    | "overlay"
    | "multiply"
    | "screen"
    | "soft-light"
    | "hard-light";
  className?: string;
}

export default function PixelOverlay({
  variant = "grid",
  cell = 6,
  opacity = 0.35,
  blend = "overlay",
  className = "",
}: PixelOverlayProps) {
  const lineColor = "rgba(8, 8, 12, 0.65)"; // void-ish, darker
  const dotColor = "rgba(255, 255, 255, 0.55)";

  let backgroundImage = "";
  let backgroundSize = `${cell}px ${cell}px`;

  switch (variant) {
    case "grid":
      // Two 1px lines per cell — outlines each "pixel".
      backgroundImage = `
        linear-gradient(${lineColor} 1px, transparent 1px),
        linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
      `;
      break;
    case "dots":
      backgroundImage = `radial-gradient(circle at center, ${dotColor} 1px, transparent 1.4px)`;
      break;
    case "scanlines":
      backgroundImage = `linear-gradient(${lineColor} 1px, transparent 1px)`;
      backgroundSize = `100% ${cell}px`;
      break;
    case "combo":
      backgroundImage = `
        linear-gradient(${lineColor} 1px, transparent 1px),
        linear-gradient(90deg, ${lineColor} 1px, transparent 1px),
        linear-gradient(rgba(8,8,12,0.25) 1px, transparent 1px)
      `;
      backgroundSize = `${cell}px ${cell}px, ${cell}px ${cell}px, 100% ${cell * 2}px`;
      break;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage,
        backgroundSize,
        opacity,
        mixBlendMode: blend,
        // Crisp pixels (no AA on the pattern)
        imageRendering: "pixelated",
      }}
    />
  );
}
