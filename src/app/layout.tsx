import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { syne, outfit, ibmPlexMono } from "@/styles/fonts";
import GsapProvider from "@/components/gsap-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "PULSR — Live Commerce Studio",
  description:
    "Producimos experiencias de live shopping para marcas que quieren vender en TikTok Shop México. Estudio profesional, hosts capacitados, operación completa.",
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
      className={`${syne.variable} ${outfit.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <GsapProvider>{children}</GsapProvider>
        <Analytics />
      </body>
    </html>
  );
}
