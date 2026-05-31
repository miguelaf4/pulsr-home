import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PULSR — Overlays for Live Shopping",
    short_name: "PULSR",
    description:
      "On-screen overlay graphics for live shopping streams. Product cards, countdowns, code drops, sales tickers, and trust badges.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080C",
    theme_color: "#9B85F5",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
