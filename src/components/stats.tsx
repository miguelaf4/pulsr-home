"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  {
    value: "10",
    prefix: "Hasta ",
    suffix: "×",
    label: "más conversión que el e-commerce tradicional",
    source: "— TikTok, 2025",
  },
  {
    value: "76",
    suffix: "%",
    label: "de viewers en TikTok LIVE compraron en el último año",
    source: "— GlobalData",
  },
  {
    value: "33",
    prefix: "$",
    suffix: "B USD",
    label: "GMV global de TikTok Shop en 2024",
    source: "— Momentum Works",
  },
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: spanRef.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (spanRef.current) {
          spanRef.current.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
        }
      },
    });
  });

  return (
    <span ref={spanRef} className="text-white">
      {prefix}0{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Set initial states
      gsap.set(".stats-label", { y: 20, opacity: 0 });
      gsap.set(".stats-headline", { y: 30, opacity: 0 });
      gsap.set(".stat-card", { scale: 0.95, opacity: 0 });
      gsap.set(".stats-body", { y: 20, opacity: 0 });

      // Section label + headline entrance
      gsap.to(".stats-label", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-label",
          start: "top 85%",
          once: true,
        },
      });

      gsap.to(".stats-headline", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-headline",
          start: "top 85%",
          once: true,
        },
      });

      // Stat cards stagger
      gsap.to(".stat-card", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stat-card",
          start: "top 85%",
          once: true,
        },
      });

      // Body text
      gsap.to(".stats-body", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-body",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="mercado"
      className="relative border-t border-border bg-void py-20 lg:py-[120px]"
    >
      {/* Subtle glow behind stats */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,45,107,0.06)_0%,transparent_70%)] blur-[60px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-20">
        <span className="stats-label font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          El Mercado
        </span>

        <h2 className="stats-headline mt-5 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px]">
          El live shopping ya está aquí.
          <br />
          ¿Tu marca está vendiendo?
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="stat-card group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-magenta/40 hover:shadow-[0_0_40px_rgba(255,45,107,0.08)]"
            >
              <p className="font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-none lg:text-[56px]">
                <CountUp
                  target={Number(stat.value)}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-3 font-[family-name:var(--font-outfit)] text-sm text-muted">
                {stat.label}
              </p>
              <p className="mt-4 font-mono text-[11px] text-border">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <p className="stats-body mt-14 max-w-[640px] font-[family-name:var(--font-outfit)] text-lg font-light leading-relaxed text-text">
          TikTok Shop México crece más rápido que cualquier otro canal digital.
          Las marcas que hacen lives capturan audiencias que tus competidores no
          tocan. Las que no, dejan dinero sobre la mesa.
        </p>

        <a
          href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
          target="_blank"
          rel="noopener noreferrer"
          className="stats-body mt-6 inline-flex items-center gap-1.5 font-[family-name:var(--font-outfit)] text-[15px] text-magenta transition-colors hover:text-magenta-hover"
        >
          ¿Quieres ver dónde está tu marca vs. tu competencia? Solicita un análisis gratuito
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </section>
  );
}
