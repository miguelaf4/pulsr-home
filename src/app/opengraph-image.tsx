import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "pulsr — TikTok Shop overlays and TikTok LIVE overlays for live shopping streams.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(155,133,245,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255,45,107,0.25) 0%, transparent 55%), #08080C",
          color: "#F5F5FA",
          fontFamily: "system-ui, -apple-system, Helvetica, sans-serif",
        }}
      >
        {/* Top: brand mark — wordmark only, lowercase */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: -1.5,
              color: "#F5F5FA",
            }}
          >
            pulsr
          </div>
          <div
            style={{
              marginLeft: 12,
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 2,
              color: "#ec4899",
              border: "1px solid rgba(236,72,153,0.35)",
              backgroundColor: "rgba(236,72,153,0.08)",
              textTransform: "uppercase",
            }}
          >
            Live shopping overlays
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -1.5,
              color: "#F5F5FA",
            }}
          >
            Sell more on every
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -1.5,
              backgroundImage:
                "linear-gradient(90deg, #FF2D6B 0%, #9B85F5 50%, #00D4CC 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            live shopping stream.
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "rgba(245,245,250,0.75)",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Product cards, countdowns, code drops, sales tickers, and trust
            badges. Compatible with OBS and TikTok LIVE Studio.
          </div>
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(245,245,250,0.55)",
            letterSpacing: 2,
          }}
        >
          <span>pulsr.live</span>
          <span>Free plan · no credit card</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
