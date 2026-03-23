"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FreeAnalysis() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".analysis-label", { y: 20, opacity: 0 });
      gsap.set(".analysis-headline", { y: 30, opacity: 0 });
      gsap.set(".analysis-body", { y: 20, opacity: 0 });
      gsap.set(".analysis-cta", { y: 15, opacity: 0 });

      gsap.to(".analysis-label", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".analysis-label", start: "top 85%", once: true },
      });

      gsap.to(".analysis-headline", {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".analysis-headline", start: "top 85%", once: true },
      });

      gsap.to(".analysis-body", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".analysis-body", start: "top 85%", once: true },
      });

      gsap.to(".analysis-cta", {
        y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".analysis-cta", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-border bg-surface py-20 lg:py-[120px]"
    >
      {/* Subtle magenta glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,45,107,0.08)_0%,transparent_70%)] blur-[80px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-20">
        <span className="analysis-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Análisis Gratuito
        </span>

        <h2 className="analysis-headline mx-auto mt-5 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px]">
          ¿Cómo se ve tu categoría
          <br />
          en TikTok Shop?
        </h2>

        <p className="analysis-body mx-auto mt-6 max-w-xl font-[family-name:var(--font-outfit)] text-lg font-light leading-relaxed text-text">
          Te preparamos un análisis personalizado de tu marca: competidores
          activos, oportunidad de mercado, productos con mayor potencial, y una
          estrategia recomendada. Gratis, en menos de 48 horas.
        </p>

        <div className="analysis-cta mt-8 flex flex-col items-center gap-4">
          <a
            href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-magenta px-10 py-4 font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.3)] active:scale-[0.98]"
          >
            Solicita tu análisis
            <span className="ml-2">→</span>
          </a>

          <p className="font-mono text-[11px] tracking-[0.05em] text-muted">
            Sin compromiso. Sin spam. Solo datos sobre tu marca.
          </p>
        </div>
      </div>
    </section>
  );
}
