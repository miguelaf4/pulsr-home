import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vital Botanics × TikTok Live Commerce — PULSR",
  description:
    "Análisis de oportunidad en live commerce para Vital Botanics. Preparado por PULSR.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
