import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Shop Overlays & TikTok LIVE Overlays — pulsr",
  description:
    "TikTok Shop overlays for live shopping. Product cards, countdowns, code drops, sales tickers, and trust badges. Drop into OBS or TikTok LIVE Studio in one URL.",
  keywords: [
    "tiktok overlay",
    "tiktok overlays",
    "tiktok shop overlay",
    "tiktok shop overlays",
    "tiktok live overlay",
    "tiktok live overlays",
    "tiktok live studio overlay",
    "live shopping overlays",
    "tiktok shop widgets",
    "obs overlay widgets",
    "live commerce graphics",
    "product card overlay",
    "countdown overlay",
    "sales ticker overlay",
  ],
  alternates: { canonical: "/overlays" },
  openGraph: {
    type: "website",
    url: "https://pulsr.live/overlays",
    siteName: "pulsr",
    title: "TikTok Shop Overlays & TikTok LIVE Overlays — pulsr",
    description:
      "TikTok Shop overlays for live shopping. Product cards, countdowns, code drops, sales tickers, and trust badges. Drop into OBS or TikTok LIVE Studio in one URL.",
    locale: "en_US",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
