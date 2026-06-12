import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ibmPlexMono } from "@/styles/fonts";
import GsapProvider from "@/components/gsap-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulsr.live"),
  title: {
    default: "PULSR — Agencia de Live Commerce en TikTok Shop México",
    template: "%s | PULSR",
  },
  description:
    "Operamos los lives de tu marca en TikTok Shop México — todo incluido. Estudio, host, estrategia y operación en vivo: producción profesional que convierte transmisiones en ventas.",
  keywords: [
    "agencia tiktok shop",
    "agencia tiktok shop méxico",
    "live commerce méxico",
    "agencia live commerce",
    "lives tiktok shop",
    "live shopping méxico",
    "agencia de lives",
    "tiktok shop méxico",
    "estudio live commerce",
    "venta en vivo tiktok",
    "transmisiones en vivo para marcas",
    "host para lives tiktok",
  ],
  applicationName: "PULSR",
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://pulsr.live",
    siteName: "PULSR",
    title: "PULSR — Agencia de Live Commerce en TikTok Shop México",
    description:
      "Operamos los lives de tu marca en TikTok Shop México — todo incluido. Estudio, host, estrategia y operación en vivo.",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSR — Agencia de Live Commerce en TikTok Shop México",
    description:
      "Operamos los lives de tu marca en TikTok Shop México — todo incluido. Estudio, host, estrategia y operación en vivo.",
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
      lang="es-MX"
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
              alternateName: "pulsr",
              url: "https://pulsr.live",
              logo: "https://pulsr.live/icon",
              description:
                "Agencia de live commerce. Operamos los lives de tu marca en TikTok Shop México — estudio, host, estrategia y operación en vivo.",
              areaServed: "MX",
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
