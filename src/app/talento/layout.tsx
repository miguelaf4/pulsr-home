import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red de Afiliados — Haz tus lives con PULSR",
  description:
    "Únete a la red de afiliados de PULSR: comisiones premium, bonos por live y por performance, equipo profesional en préstamo, capacitación con expertos en live shopping y software para subir el nivel de tus transmisiones. Para afiliados de TikTok Shop con 5,000+ seguidores.",
  keywords: [
    "afiliados tiktok shop",
    "red de afiliados",
    "live shopping méxico",
    "ganar dinero tiktok shop",
    "comisiones tiktok shop",
    "hacer lives tiktok shop",
    "afiliado tiktok live",
    "creadores tiktok shop",
  ],
  alternates: { canonical: "/talento" },
  openGraph: {
    type: "website",
    url: "https://pulsr.live/talento",
    siteName: "PULSR",
    title: "Red de Afiliados — Haz tus lives con PULSR",
    description:
      "Comisiones premium, bonos por live, equipo profesional en préstamo y capacitación con expertos en live shopping. Para afiliados de TikTok Shop con 5,000+ seguidores.",
    locale: "es_MX",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
