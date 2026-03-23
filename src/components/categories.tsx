"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BLOCKS = [
  {
    title: "Análisis Competitivo",
    body: "Monitoreamos tu categoría en TikTok Shop en tiempo real. Sabemos qué vende tu competencia, cuánto generan, y qué estrategia usan en sus lives — antes de que tú hagas tu primera transmisión.",
  },
  {
    title: "Estrategia por Datos",
    body: "Cada live se planea con información real: productos con mayor potencial, horarios de máximo tráfico, price points que convierten, y formatos que tu audiencia prefiere.",
  },
  {
    title: "Análisis Post-Live",
    body: "Después de cada sesión medimos lo que importa: GPM, tasa de conversión, productos estrella, y comportamiento de audiencia. Cada live es mejor que el anterior.",
  },
];

// Stylized data visualization bars
function DataViz() {
  return (
    <div className="relative flex h-full min-h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface p-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,45,107,0.05)_0%,transparent_60%)]" />

      <div className="relative w-full max-w-[280px] space-y-5">
        {/* Header */}
        <div className="mb-6">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">
            Análisis de categoría
          </p>
          <p className="mt-1 font-[family-name:var(--font-syne)] text-sm font-bold text-white">
            Suplementos · TikTok Shop MX
          </p>
        </div>

        {/* Competitor bars */}
        {[
          { label: "Tu marca", value: 0, potential: 78, isSelf: true },
          { label: "Competidor A", value: 65, potential: 0, isSelf: false },
          { label: "Competidor B", value: 42, potential: 0, isSelf: false },
          { label: "Competidor C", value: 28, potential: 0, isSelf: false },
        ].map((item) => (
          <div key={item.label} className="data-bar space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-text">
                {item.label}
              </span>
              <span className="font-mono text-[10px] text-muted">
                {item.isSelf ? "Oportunidad" : `$${item.value}K GMV`}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-void">
              {item.isSelf ? (
                <div
                  className="h-full rounded-full bg-gradient-to-r from-magenta/60 to-magenta"
                  style={{ width: `${item.potential}%` }}
                />
              ) : (
                <div
                  className="h-full rounded-full bg-border"
                  style={{ width: `${item.value}%` }}
                />
              )}
            </div>
          </div>
        ))}

        {/* Bottom metric row */}
        <div className="mt-6 flex justify-between border-t border-border pt-4">
          <div>
            <p className="font-mono text-[9px] uppercase text-muted">
              Potencial
            </p>
            <p className="font-[family-name:var(--font-syne)] text-lg font-extrabold text-magenta">
              $78K
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase text-muted">
              Competidores
            </p>
            <p className="font-[family-name:var(--font-syne)] text-lg font-extrabold text-white">
              12
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase text-muted">
              Gap
            </p>
            <p className="font-[family-name:var(--font-syne)] text-lg font-extrabold text-white">
              Alto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".ventaja-label", { y: 20, opacity: 0 });
      gsap.set(".ventaja-headline", { y: 30, opacity: 0 });
      gsap.set(".ventaja-block", { y: 25, opacity: 0 });
      gsap.set(".ventaja-viz", { scale: 0.97, opacity: 0 });
      gsap.set(".data-bar div:last-child > div", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".ventaja-sources", { y: 15, opacity: 0 });

      gsap.to(".ventaja-label", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".ventaja-label", start: "top 85%", once: true },
      });

      gsap.to(".ventaja-headline", {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".ventaja-headline", start: "top 85%", once: true },
      });

      gsap.to(".ventaja-block", {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".ventaja-block", start: "top 85%", once: true },
      });

      gsap.to(".ventaja-viz", {
        scale: 1, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".ventaja-viz", start: "top 85%", once: true },
      });

      gsap.to(".data-bar div:last-child > div", {
        scaleX: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".data-bar", start: "top 85%", once: true },
      });

      gsap.to(".ventaja-sources", {
        y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".ventaja-sources", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-border bg-void py-20 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <span className="ventaja-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Tu Ventaja
        </span>

        <h2 className="ventaja-headline mt-5 max-w-xl font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px]">
          No adivinamos.
          <br />
          Operamos con datos.
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text blocks */}
          <div className="space-y-8">
            {BLOCKS.map((block) => (
              <div key={block.title} className="ventaja-block">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                  {block.title}
                </h3>
                <p className="mt-2 max-w-[500px] font-[family-name:var(--font-outfit)] text-[15px] font-light leading-relaxed text-text">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right — data visualization */}
          <div className="ventaja-viz">
            <DataViz />
          </div>
        </div>

        <p className="ventaja-sources mt-10 font-mono text-[11px] tracking-[0.05em] text-border">
          Fuentes: TikTok Shop Analytics · FastMoss · Kalodata · TikTok Seller
          Center
        </p>
      </div>
    </section>
  );
}
