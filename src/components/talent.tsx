"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Talent() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".talent-label", { y: 20, opacity: 0 });
      gsap.set(".talent-headline", { y: 30, opacity: 0 });
      gsap.set(".talent-body", { y: 20, opacity: 0 });
      gsap.set(".talent-cta", { y: 15, opacity: 0 });

      gsap.to(".talent-label", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".talent-label", start: "top 85%", once: true },
      });

      gsap.to(".talent-headline", {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".talent-headline", start: "top 85%", once: true },
      });

      gsap.to(".talent-body", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".talent-body", start: "top 85%", once: true },
      });

      gsap.to(".talent-cta", {
        y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".talent-cta", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="talento"
      className="relative border-t border-border bg-dark py-20 lg:py-[120px]"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(77,93,255,0.06)_0%,transparent_70%)] blur-[80px]" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        {/* Text */}
        <div className="max-w-xl">
          <span className="talent-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
            Talento
          </span>

          <h2 className="talent-headline mt-5 font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px]">
            ¿Sabes vender
            <br />
            frente a cámara?
          </h2>

          <p className="talent-body mt-6 max-w-[500px] font-[family-name:var(--font-outfit)] text-lg font-light leading-relaxed text-text">
            Buscamos hosts con energía, facilidad de palabra, y hambre de crecer
            en live commerce. Pago competitivo por hora + bonos por performance +
            participación en ventas.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSePBUziBctpZADAnetJ1-ua2i-jDmeye1wj49TM4q56Gdcg0Q/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="talent-cta mt-8 inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-[family-name:var(--font-outfit)] text-[15px] font-medium text-white transition-all duration-200 hover:border-magenta hover:text-magenta"
          >
            Aplica como host
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-surface lg:h-80 lg:w-80">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,45,107,0.05)_0%,transparent_70%)]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/dlxmedia-hu-Gz4AEq4QN5g-unsplash (1).jpg"
              alt="PULSR host en vivo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
