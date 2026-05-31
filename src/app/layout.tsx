import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ibmPlexMono } from "@/styles/fonts";
import GsapProvider from "@/components/gsap-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulsr.live"),
  title: {
    default: "PULSR — Overlays for Live Shopping Streams",
    template: "%s | PULSR",
  },
  description:
    "On-screen overlay graphics built for live shopping. Product cards, countdown timers, code drops, sales tickers, and trust badges for TikTok Shop, Shopify Live, OBS, and TikTok LIVE Studio. Edit mid-stream and viewers see it in seconds.",
  keywords: [
    "live shopping overlays",
    "TikTok Shop overlays",
    "OBS overlay widgets",
    "live commerce graphics",
    "TikTok LIVE Studio overlays",
    "product card overlay",
    "countdown overlay",
    "sales ticker overlay",
  ],
  applicationName: "PULSR",
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://pulsr.live",
    siteName: "PULSR",
    title: "PULSR — Overlays for Live Shopping Streams",
    description:
      "Product cards, countdowns, code drops, sales tickers, and trust badges. Compatible with OBS and TikTok LIVE Studio. Edit mid-stream and viewers see it in seconds.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSR — Overlays for Live Shopping Streams",
    description:
      "On-screen overlay graphics for live shopping. Product cards, countdowns, code drops, sales tickers, trust badges. OBS + TikTok LIVE Studio.",
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
              name: "PULSR",
              url: "https://pulsr.live",
              logo: "https://pulsr.live/icon",
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
