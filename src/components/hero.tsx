"use client";

import { useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ShaderCanvas from "./shader-canvas";
import PixelOverlay from "./pixel-overlay";

const PERKS = [
  { icon: "studio", label: "Estudio profesional" },
  { icon: "host", label: "Hosts capacitados" },
  { icon: "production", label: "Producción completa" },
  { icon: "strategy", label: "Estrategia incluida" },
];

const FLOATING_STATS = [
  { value: "10×", label: "más conversión", pos: "-left-5 sm:-left-10 top-[15%]" },
  { value: "$50K+", label: "GMV / sesión", pos: "-right-6 sm:-right-8 top-[35%]" },
  { value: "76%", label: "viewers compran", pos: "-right-4 sm:-right-6 bottom-[22%]" },
];

function PerkIcon({ type }: { type: string }) {
  const cls = "h-4 w-4 text-magenta";
  switch (type) {
    case "studio":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={cls}>
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "host":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={cls}>
          <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 18c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "production":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={cls}>
          <path d="M4 4l12 6-12 6V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "strategy":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={cls}>
          <path d="M3 17V7l7-4 7 4v10l-7 4-7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 3v14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hero({ ready = true }: { ready?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Desktop: floating stats push away from cursor
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;

    const stats = sectionRef.current.querySelectorAll(".hero-float-stat");
    stats.forEach((stat) => {
      const r = stat.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * 8;
        gsap.to(stat, {
          x: -dx / dist * force,
          y: -dy / dist * force,
          scale: 1 + (1 - dist / maxDist) * 0.06,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(stat, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(0.4, 0.3)",
          overwrite: "auto",
        });
      }
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (isDesktop) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  useGSAP(
    () => {
      if (!ready) return;

      const isTouch = !window.matchMedia("(pointer: fine)").matches;

      if (isTouch) {
        // Mobile: scroll-based physics for floating stats
        const stats = sectionRef.current?.querySelectorAll(".hero-float-stat");
        if (stats?.length) {
          stats.forEach((stat, i) => {
            gsap.to(stat, {
              y: i === 0 ? -40 : i === 1 ? -70 : -30,
              x: i === 0 ? -10 : i === 1 ? 15 : 10,
              rotation: i === 0 ? -8 : i === 1 ? 10 : -6,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
              },
            });
          });
        }
      }

      // Initial states
      gsap.set(".hero-headline", { y: 40, opacity: 0 });
      gsap.set(".hero-sub", { y: 25, opacity: 0 });
      gsap.set(".hero-perk", { x: -10, opacity: 0 });
      gsap.set(".hero-cta-btn", { y: 20, opacity: 0 });
      gsap.set(".hero-phone", { y: 50, opacity: 0, rotateY: 6 });
      gsap.set(".hero-float-stat", { scale: 0.8, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(".hero-headline", {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
      })
        .to(".hero-sub", {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        }, "-=0.5")
        .to(".hero-perk", {
          x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out",
        }, "-=0.3")
        .to(".hero-cta-btn", {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        }, "-=0.2");

      tl.to(".hero-phone", {
        y: 0, opacity: 1, rotateY: 0, duration: 0.8, ease: "power3.out",
      }, 0.3)
        .to(".hero-float-stat", {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)",
        }, "-=0.3");

      // Scroll fade
      gsap.to(".hero-content", {
        y: -40,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [ready], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-x-clip overflow-y-visible pt-[72px]"
    >
      {/* Shader background (matches /overlays hero) */}
      <ShaderCanvas className="absolute inset-0 z-0" />
      {/* Pixelated overlay on top of the shader. Swap `variant` to test looks. */}
      <PixelOverlay
        variant="grid"
        cell={6}
        opacity={0.35}
        blend="overlay"
        className="z-[1]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-void to-transparent" />

      {/* Content */}
      <div className="hero-content relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1fr_280px] md:gap-10 lg:grid-cols-[1fr_300px] lg:gap-14 lg:px-20 lg:py-0">
        {/* Left — text */}
        <div>
          <h1 className="hero-headline font-[family-name:var(--font-satoshi)] text-[32px] font-extrabold leading-[1.1] text-white sm:text-[40px] lg:text-[52px]">
            Tu marca en vivo.
            <br />
            <span className="bg-gradient-to-r from-magenta via-purple to-blue bg-clip-text text-transparent">
              Tus ventas en real-time.
            </span>
          </h1>

          <p className="hero-sub mt-5 max-w-md font-[family-name:var(--font-satoshi)] text-base font-light leading-relaxed text-text lg:text-lg">
            Operamos tus lives en TikTok Shop México — todo incluido.
          </p>

          {/* Perks list */}
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {PERKS.map((perk) => (
              <li key={perk.icon} className="hero-perk flex items-center gap-2.5">
                <PerkIcon type={perk.icon} />
                <span className="font-[family-name:var(--font-satoshi)] text-sm text-text">
                  {perk.label}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn rounded-lg bg-magenta px-7 py-3.5 text-center font-[family-name:var(--font-satoshi)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98]"
            >
              Solicita tu análisis gratis
            </a>
            <a
              href="#demo-reel"
              className="hero-cta-btn group flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-7 py-3.5 font-[family-name:var(--font-satoshi)] text-[15px] font-medium text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-200 hover:border-magenta/60 hover:bg-white/[0.1] hover:text-magenta"
            >
              <span>Ver demo reel</span>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 6.5L13.5 10L8 13.5V6.5Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — 9:16 phone mockup with floating stats */}
        <div className="relative flex justify-center md:justify-center">
          {/* Phone frame */}
          <div className="hero-phone relative w-[200px] sm:w-[210px] lg:w-[230px]">
            {/* Floating stat tags — anchored to phone */}
            {FLOATING_STATS.map((stat, i) => (
              <div
                key={i}
                className={`hero-float-stat absolute z-20 rounded-lg border border-border/60 bg-surface/80 px-2.5 py-1.5 backdrop-blur-md will-change-transform ${stat.pos}`}
              >
                <p className="font-[family-name:var(--font-satoshi)] text-sm sm:text-base font-extrabold leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 font-mono text-[8px] tracking-wider uppercase text-muted">
                  {stat.label}
                </p>
              </div>
            ))}

            <div className="overflow-hidden rounded-[32px] border-2 border-surface-2/80 bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Notch */}
              <div className="flex items-center justify-center bg-surface-2 py-2">
                <div className="h-[18px] w-[80px] rounded-full bg-void" />
              </div>
              {/* Screen */}
              <div className="relative flex aspect-[9/16] items-center justify-center overflow-hidden bg-gradient-to-b from-surface via-void/80 to-surface">
                <video
                  src="/assets/oby-test-3-short.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="PULSR live commerce session"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void/50" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-md bg-magenta/90 px-2.5 py-1">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  <span className="font-mono text-[10px] font-medium tracking-wider text-white">LIVE</span>
                </div>

                <div className="absolute top-4 right-4 rounded-md bg-void/60 px-2 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[10px] text-white">1,247</span>
                </div>

                <div className="absolute right-3 bottom-4 left-3 space-y-1.5">
                  <div className="rounded-md bg-void/50 px-2.5 py-1.5 backdrop-blur-sm">
                    <span className="font-mono text-[9px] text-magenta">@ana_mx</span>
                    <span className="ml-1.5 text-[10px] text-text/70">quiero 2! 🔥</span>
                  </div>
                  <div className="rounded-md bg-void/50 px-2.5 py-1.5 backdrop-blur-sm">
                    <span className="font-mono text-[9px] text-magenta">@carlos</span>
                    <span className="ml-1.5 text-[10px] text-text/70">envío gratis?</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 left-[10%] h-6 w-[80%] rounded-full bg-magenta/5 blur-xl" />
          </div>


        </div>
      </div>
    </section>
  );
}
