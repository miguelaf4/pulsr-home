import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "pulsr — TikTok Shop & TikTok LIVE Overlays",
    short_name: "pulsr",
    description:
      "TikTok Shop overlays and TikTok LIVE overlays for live shopping streams. Product cards, countdowns, code drops, sales tickers, and trust badges.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080C",
    theme_color: "#a855f7",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
