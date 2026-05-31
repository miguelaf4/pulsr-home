import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ibmPlexMono } from "@/styles/fonts";
import GsapProvider from "@/components/gsap-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulsr.live"),
  title: {
    default: "TikTok Shop Overlays & TikTok LIVE Overlays — pulsr",
    template: "%s | pulsr",
  },
  description:
    "TikTok Shop overlays and TikTok LIVE overlays for live shopping. Product cards, countdown timers, code drops, sales tickers, and trust badges for TikTok LIVE Studio, OBS, Streamlabs, and eCamm. Edit mid-stream and viewers see it in seconds.",
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
  applicationName: "pulsr",
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://pulsr.live",
    siteName: "pulsr",
    title: "TikTok Shop Overlays & TikTok LIVE Overlays — pulsr",
    description:
      "TikTok Shop overlays for live shopping. Product cards, countdowns, code drops, sales tickers, and trust badges. Drop into OBS or TikTok LIVE Studio in one URL.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Shop Overlays & TikTok LIVE Overlays — pulsr",
    description:
      "TikTok Shop overlays for live shopping. Product cards, countdowns, code drops, sales tickers, trust badges. OBS + TikTok LIVE Studio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={ibmPlexMono.variable}
    >
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "pulsr",
              alternateName: "PULSR",
              url: "https://pulsr.live",
              logo: "https://pulsr.live/icon",
              description:
                "TikTok Shop overlays and TikTok LIVE overlays for live shopping streams.",
              sameAs: [],
            }),
          }}
        />
        <GsapProvider>{children}</GsapProvider>
        <Analytics />
      </body>
    </html>
  );
}
