"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".cta-label", { y: 20, opacity: 0 });
      gsap.set(".cta-headline", { y: 30, opacity: 0 });
      gsap.set(".cta-sub", { y: 20, opacity: 0 });
      gsap.set(".cta-buttons", { y: 20, opacity: 0 });

      gsap.to(".cta-label", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".cta-label", start: "top 85%", once: true },
      });

      gsap.to(".cta-headline", {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-headline", start: "top 85%", once: true },
      });

      gsap.to(".cta-sub", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".cta-sub", start: "top 85%", once: true },
      });

      gsap.to(".cta-buttons", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".cta-buttons", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative border-t border-border bg-void py-24 lg:py-[140px]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,107,0.12)_0%,transparent_70%)] blur-[80px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-20">
        <span className="cta-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Empecemos
        </span>

        <h2 className="cta-headline mx-auto mt-6 max-w-3xl font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[52px]">
          ¿Tu marca está lista
          <br />
          para vender en vivo?
        </h2>

        <p className="cta-sub mx-auto mt-6 max-w-lg font-[family-name:var(--font-outfit)] text-lg font-light leading-relaxed text-text">
          Empieza con un análisis gratuito de tu categoría.  Solo datos reales sobre tu oportunidad. 30 minutos
        </p>

        <div className="cta-buttons mt-10 flex flex-col items-center gap-4">
          <a
            href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-magenta px-10 py-4 font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.3)] active:scale-[0.98]"
          >
            Solicita tu análisis gratis
            <span className="ml-2">→</span>
          </a>
          <div className="flex flex-col items-center gap-4 mt-2">
            <p className="font-[family-name:var(--font-outfit)] text-sm text-muted">
              O ponte en contacto
            </p>
            <a
              href="mailto:miguel@pulsr.live"
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-300 hover:border-magenta/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-magenta/10 text-magenta transition-colors duration-300 group-hover:bg-magenta group-hover:text-white">
                <span className="font-[family-name:var(--font-syne)] text-lg font-bold">M</span>
              </div>
              <div className="text-left font-[family-name:var(--font-outfit)]">
                <h3 className="text-[15px] font-medium text-white">
                  Miguel Arrañaga
                </h3>
                <div className="mt-0.5 flex flex-col text-[13px] sm:flex-row sm:items-center sm:gap-2">
                  <span className="text-magenta">Success Manager</span>
                  <span className="hidden text-muted/50 sm:inline">•</span>
                  <span className="text-muted transition-colors duration-200 group-hover:text-white/80">
                    miguel@pulsr.live
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
