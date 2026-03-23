"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SERVICES = [
  {
    title: "Producción Completa",
    body: "Estudio equipado, multicámara, iluminación profesional, streaming directo a TikTok. Tú mandas el producto, nosotros hacemos el resto.",
    clip: "/assets/clip-services-1.webp",
  },
  {
    title: "Hosts Que Venden",
    body: "Talento con experiencia en venta en vivo. No leen guión — conectan, crean urgencia, y mueven producto.",
    clip: "/assets/clip-2.webp",
  },
  {
    title: "Operación en Vivo",
    body: "Flash deals, product pinning, moderación de chat, análisis en tiempo real. Tu live corre como reloj.",
    clip: "/assets/clip-5.webp",
  },
];

function PhoneMockup({ index, clip }: { index: number; clip: string }) {
  return (
    <div className="phone-mockup mx-auto w-[180px] sm:w-[200px]">
      <div className="overflow-hidden rounded-[28px] border-2 border-surface-2 bg-surface shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-surface-2 px-4 py-1.5">
          <span className="font-mono text-[8px] text-muted">9:41</span>
          <div className="h-4 w-10 rounded-full bg-void" />
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-muted" />
            <div className="h-1.5 w-1.5 rounded-full bg-muted" />
          </div>
        </div>
        {/* Screen */}
        <div className="relative aspect-[9/16] overflow-hidden bg-void">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={clip}
            alt="PULSR live session"
            className="h-full w-full object-cover"
          />
          {/* LIVE badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-magenta/90 px-2 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] font-medium tracking-wider text-white">
              LIVE
            </span>
          </div>
          {/* Viewer count */}
          <div className="absolute top-3 right-3 rounded-md bg-void/60 px-2 py-0.5 backdrop-blur-sm">
            <span className="font-mono text-[9px] text-white">
              {(847 + index * 312).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".services-label", { y: 20, opacity: 0 });
      gsap.set(".services-headline", { y: 30, opacity: 0 });
      gsap.set(".phone-mockup", { y: 60, rotateY: 5, opacity: 0 });
      gsap.set(".service-text", { y: 30, opacity: 0 });
      gsap.set(".services-extras", { y: 15, opacity: 0 });

      gsap.to(".services-label", {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".services-label", start: "top 85%", once: true },
      });

      gsap.to(".services-headline", {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".services-headline", start: "top 85%", once: true },
      });

      gsap.to(".phone-mockup", {
        y: 0, rotateY: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".phone-mockup", start: "top 85%", once: true },
      });

      gsap.to(".service-text", {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".service-text", start: "top 85%", once: true },
      });

      gsap.to(".services-extras", {
        y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".services-extras", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative border-t border-border bg-dark py-20 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <span className="services-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Qué Hacemos
        </span>

        <h2 className="services-headline mt-5 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px]">
          Tu producto. Nuestro estudio.
          <br />
          Ventas desde el día uno.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="group flex flex-col items-center md:items-start">
              <PhoneMockup index={i} clip={service.clip} />
              <div className="service-text mt-8 text-center md:text-left">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm font-[family-name:var(--font-outfit)] text-[15px] font-light leading-relaxed text-text">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="services-extras mt-14 text-center font-mono text-xs tracking-[0.1em] text-muted md:text-left">
          + Clips editados para contenido orgánico · Reportes semanales ·
          Estrategia mensual
        </p>
      </div>
    </section>
  );
}
