import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ibmPlexMono } from "@/styles/fonts";
import GsapProvider from "@/components/gsap-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "PULSR Overlays — Premium Widgets for TikTok Shop Lives",
  description:
    "Create customized overlay widgets for your TikTok Shop live streams. Product cards, timers, alerts, polls — premium widgets fully customizable to your brand.",
  metadataBase: new URL("https://pulsr.live"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={ibmPlexMono.variable}
    >
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body>
        <GsapProvider>{children}</GsapProvider>
        <Analytics />
      </body>
    </html>
  );
}
