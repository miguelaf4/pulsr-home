"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STEPS = [
  {
    num: "01",
    title: "Análisis",
    body: "Mapeamos tu categoría, competencia, y oportunidad en TikTok Shop.",
  },
  {
    num: "02",
    title: "Setup",
    body: "Configuramos acceso, seleccionamos host, preparamos calendario.",
  },
  {
    num: "03",
    title: "Primer Live",
    body: "Tu marca en vivo desde nuestro estudio. Producción completa.",
  },
  {
    num: "04",
    title: "Escalar",
    body: "Analizamos, ajustamos, crecemos.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".process-label", { y: 20, opacity: 0 });
      gsap.set(".process-headline", { y: 30, opacity: 0 });
      gsap.set(".process-step", { y: 30, opacity: 0 });
      gsap.set(".process-line", { scaleX: 0, transformOrigin: "left center" });

      gsap.to(".process-label", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".process-label", start: "top 85%", once: true },
      });

      gsap.to(".process-headline", {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".process-headline", start: "top 85%", once: true },
      });

      gsap.to(".process-step", {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".process-step", start: "top 85%", once: true },
      });

      gsap.to(".process-line", {
        scaleX: 1, duration: 1.2, ease: "power2.inOut",
        scrollTrigger: { trigger: ".process-line", start: "top 85%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-border bg-dark py-20 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <span className="process-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Proceso
        </span>

        <h2 className="process-headline mt-5 max-w-xl font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px]">
          De cero a en vivo
          <br />
          en 2 semanas.
        </h2>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="process-line absolute top-[28px] right-8 left-8 hidden h-[1px] border-t border-dashed border-border lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="process-step group relative flex flex-col items-start"
              >
                {/* Step number circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium text-muted transition-all duration-300 group-hover:border-magenta group-hover:text-magenta">
                  {step.num}
                </div>

                {/* Vertical connector (mobile/tablet) */}
                <div className="ml-7 h-6 w-[1px] border-l border-dashed border-border lg:hidden" />

                <h3 className="mt-4 font-[family-name:var(--font-syne)] text-lg font-bold text-white lg:mt-6">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[260px] font-[family-name:var(--font-outfit)] text-[15px] font-light leading-relaxed text-text">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
