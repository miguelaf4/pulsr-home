"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PixelOverlay from "@/components/pixel-overlay";

/* ─── CONFIG ─── */

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScJKc_Hiwtq36jd5W1-J4TGRaz2C4ix-jUooVkG-Xi8PjcsjA/viewform?usp=sharing&ouid=117667752682347200162";

/* ─── DATA ─── */

const BENEFITS = [
  {
    icon: "commission",
    title: "Comisiones premium",
    desc: "Ganas comisiones por encima del promedio de tu categoría. Vendes más y te llevas una mejor tajada de cada venta.",
    gradient:
      "radial-gradient(ellipse at 30% 50%, rgba(255,45,107,0.18) 0%, transparent 70%)",
  },
  {
    icon: "bonus",
    title: "Bonos por live y performance",
    desc: "Además de tu comisión, ganas bonos por cada transmisión y bonos extra al superar tus metas de venta.",
    gradient:
      "radial-gradient(ellipse at 70% 40%, rgba(139,26,255,0.18) 0%, transparent 70%)",
  },
  {
    icon: "training",
    title: "Capacitación con expertos",
    desc: "Aprende a vender frente a cámara con quienes ya dominan el live shopping: guiones, cierres, manejo del chat y ritmo de venta.",
    gradient:
      "radial-gradient(ellipse at 40% 60%, rgba(0,212,204,0.18) 0%, transparent 70%)",
  },
  {
    icon: "equipment",
    title: "Equipo profesional",
    desc: "Trabajas con luces, micrófono, fondo, tripiés para teléfono/cámara y monitores de nivel estudio, sin invertir en tu propio equipo.",
    gradient:
      "radial-gradient(ellipse at 60% 30%, rgba(77,93,255,0.18) 0%, transparent 70%)",
  },
  {
    icon: "software",
    title: "Software y asesoría de producción",
    desc: "Accede a nuestras herramientas y a la guía de nuestro equipo para subir el nivel de tus lives: overlays, escenografía y flujo de transmisión.",
    gradient:
      "radial-gradient(ellipse at 25% 40%, rgba(255,45,107,0.14) 0%, rgba(139,26,255,0.08) 50%, transparent 70%)",
  },
];

const EQUIPMENT = [
  { icon: "light", label: "Luces" },
  { icon: "mic", label: "Micrófonos" },
  { icon: "backdrop", label: "Fondos" },
  { icon: "stand", label: "Tripiés de teléfono y cámara" },
  { icon: "monitor", label: "Monitores" },
  { icon: "more", label: "Y más para tu setup" },
];

const STEPS = [
  {
    n: "01",
    title: "Aplica",
    desc: "Llena el formulario. Revisamos tu perfil, tu categoría y tus seguidores.",
    gradient:
      "radial-gradient(ellipse at 30% 40%, rgba(255,45,107,0.18) 0%, transparent 70%)",
  },
  {
    n: "02",
    title: "Onboarding y capacitación",
    desc: "Te damos de alta en la red y te capacitamos en live shopping con nuestros expertos.",
    gradient:
      "radial-gradient(ellipse at 60% 50%, rgba(139,26,255,0.18) 0%, transparent 70%)",
  },
  {
    n: "03",
    title: "Recibe tu equipo",
    desc: "Preparamos tu equipo y te ayudamos a armar tu setup de transmisión.",
    gradient:
      "radial-gradient(ellipse at 40% 60%, rgba(0,212,204,0.18) 0%, transparent 70%)",
  },
  {
    n: "04",
    title: "Haz lives y escala",
    desc: "Empiezas a transmitir con soporte, ganas comisiones premium más bonos y creces con la red.",
    gradient:
      "radial-gradient(ellipse at 60% 30%, rgba(77,93,255,0.18) 0%, transparent 70%)",
  },
];

const REQUIREMENTS = [
  {
    title: "Ya eres afiliado de TikTok Shop",
    desc: "Tienes tu cuenta de afiliado activa y lista para vender.",
  },
  {
    title: "Mínimo 5,000 seguidores",
    desc: "Es el mínimo que pide TikTok Shop para hacer lives como afiliado.",
  },
];

/* ─── ICONS ─── */

function BenefitIcon({ type }: { type: string }) {
  const cls = "h-6 w-6 text-magenta";
  switch (type) {
    case "commission":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 9a3 3 0 0 0-3-2c-1.7 0-3 1-3 2.3 0 3 6 1.7 6 4.7 0 1.3-1.3 2.3-3 2.3a3 3 0 0 1-3-2M12 5.5v1.5m0 10v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bonus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9-2.8.9-5.5-4-3.9 5.5-.8L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M3 8l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 10.5V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5M21 8v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "equipment":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 10l4-2v8l-4-2v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "software":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function EquipmentIcon({ type }: { type: string }) {
  const cls = "h-5 w-5 text-cyan";
  switch (type) {
    case "light":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1-1 2H9c0-1-.3-1.4-1-2A6 6 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "backdrop":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="4" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 20h16M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "stand":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="8" y="3" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 15v6M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── NAV ─── */

function TalentoNav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-[72px] border-b border-border/60 bg-[rgba(8,8,12,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-20">
        <a href="/" className="relative z-10 flex items-center gap-2 sm:gap-3" aria-label="PULSR — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-pulsr-agency.svg" alt="" aria-hidden="true" className="h-8 w-auto sm:h-9" />
          <span className="font-[family-name:var(--font-satoshi)] text-[20px] font-extrabold tracking-[0.15em] text-white sm:text-[24px] sm:tracking-[0.18em]">
            PULSR
          </span>
        </a>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-magenta px-4 py-2.5 font-[family-name:var(--font-satoshi)] text-[13px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98] sm:px-6 sm:text-sm"
        >
          Aplica ahora
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".t-hero-el", { y: 24, opacity: 0 });
      gsap.to(".t-hero-el", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  const textGlow = "drop-shadow-[0_0_24px_rgba(0,0,0,0.7)]";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-[72px]"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0 bg-void">
        <div className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(255,45,107,0.22)_0%,transparent_65%)] blur-[100px]" />
        <div className="absolute top-1/4 -right-1/4 h-[65vh] w-[65vh] rounded-full bg-[radial-gradient(circle,rgba(139,26,255,0.20)_0%,transparent_65%)] blur-[110px]" />
        <div className="absolute -bottom-1/3 left-1/4 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(77,93,255,0.16)_0%,transparent_65%)] blur-[110px]" />
      </div>
      <PixelOverlay variant="grid" cell={6} opacity={0.22} blend="overlay" className="z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-void to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[860px] px-6 py-20 text-center lg:px-20">
        <span className={`t-hero-el inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta backdrop-blur-sm ${textGlow}`}>
          Red de Afiliados PULSR
        </span>

        <h1 className={`t-hero-el mt-6 font-[family-name:var(--font-satoshi)] text-[30px] font-extrabold leading-[1.12] text-white sm:text-[46px] lg:text-[58px] ${textGlow}`}>
          Haz tus lives con el
          <br className="hidden sm:block" /> respaldo de un estudio.
          <br />
          <span className="bg-gradient-to-r from-magenta via-purple to-blue bg-clip-text text-transparent">
            Gana más en cada transmisión.
          </span>
        </h1>

        <p className={`t-hero-el mx-auto mt-6 max-w-xl font-[family-name:var(--font-satoshi)] text-base font-light leading-relaxed text-white/80 sm:text-lg ${textGlow}`}>
          Únete a la red de afiliados de PULSR y accede a comisiones premium,
          bonos por live, equipo profesional en préstamo y capacitación con
          expertos en live shopping.
        </p>

        <div className="t-hero-el mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-magenta px-9 py-4 text-center font-[family-name:var(--font-satoshi)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.35)] active:scale-[0.98] sm:w-auto"
          >
            Aplica a la red de afiliados
            <span className="ml-2">→</span>
          </a>
          <a
            href="#beneficios"
            className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-9 py-4 text-center font-[family-name:var(--font-satoshi)] text-[15px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-magenta/60 hover:text-magenta sm:w-auto"
          >
            Ver qué ofrecemos
          </a>
        </div>

        <p className={`t-hero-el mt-6 font-mono text-[11px] tracking-[0.15em] text-white/50 ${textGlow}`}>
          Solo para afiliados de TikTok Shop con 5,000+ seguidores.
        </p>
      </div>
    </section>
  );
}

/* ─── BENEFITS ─── */

function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".benefit-title", { y: 30, opacity: 0 });
      gsap.to(".benefit-title", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.set(".benefit-card", { y: 30, opacity: 0 });
      ScrollTrigger.batch(".benefit-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.07,
            ease: "power3.out",
          }),
        start: "top 88%",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      className="relative overflow-hidden border-t border-border/50 bg-dark px-6 py-24 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="benefit-title max-w-2xl">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta">
            Lo que te ofrecemos
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[44px]">
            Todo lo que un afiliado necesita
            <br />
            para vender más en vivo.
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text sm:text-lg">
            Tú pones el talento frente a cámara. Nosotros ponemos el estudio, el
            equipo, la capacitación y las mejores condiciones para que ganes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="benefit-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-7 transition-all duration-300 hover:border-white/[0.12]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: b.gradient }}
              />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <BenefitIcon type={b.icon} />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-satoshi)] text-[18px] font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text/70">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EQUIPMENT ─── */

function Equipment() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".equip-content", { y: 30, opacity: 0 });
      gsap.to(".equip-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.set(".equip-video", { y: 30, opacity: 0, scale: 0.96 });
      gsap.to(".equip-video", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.set(".equip-item", { y: 20, opacity: 0 });
      ScrollTrigger.batch(".equip-item", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
          }),
        start: "top 90%",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/50 px-6 py-24 lg:px-20 lg:py-32"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,212,204,0.07)_0%,transparent_70%)] blur-[80px]" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left: title + cards */}
        <div className="equip-content">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-cyan">
            Equipo profesional
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[26px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            Setup de estudio,
            <br />
            <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              sin comprar nada.
            </span>
          </h2>
          <p className="mt-5 max-w-lg font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text sm:text-lg">
            Transmites con equipo de nivel estudio desde el día uno. Nosotros te
            ayudamos a configurarlo para que solo te concentres en vender.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {EQUIPMENT.map((item) => (
              <div
                key={item.label}
                className="equip-item flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#0c0c14] px-4 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                  <EquipmentIcon type={item.icon} />
                </div>
                <span className="font-[family-name:var(--font-satoshi)] text-sm font-medium leading-tight text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted">
            El equipo se entrega en préstamo mientras formas parte de la red.
          </p>
        </div>

        {/* Right: video — mismo live que la home */}
        <div className="equip-video mx-auto w-full max-w-[300px] lg:sticky lg:top-28 lg:max-w-[340px] lg:justify-self-end">
          <div className="relative w-full">
            <div className="overflow-hidden rounded-[32px] border-2 border-surface-2/80 bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-center bg-surface-2 py-2">
                <div className="h-[18px] w-[80px] rounded-full bg-void" />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden bg-void">
                <video
                  src="/assets/oby-test-3-short.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Live de un afiliado PULSR"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void/50" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-md bg-magenta/90 px-2.5 py-1">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  <span className="font-mono text-[10px] font-medium tracking-wider text-white">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 left-[10%] h-6 w-[80%] rounded-full bg-magenta/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */

function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".how-title", { y: 30, opacity: 0 });
      gsap.to(".how-title", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.set(".how-step", { y: 30, opacity: 0 });
      ScrollTrigger.batch(".how-step", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          }),
        start: "top 88%",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/50 bg-dark px-6 py-24 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="how-title text-center">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            De la aplicación a tu primer
            <br />
            live con soporte.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="how-step group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-7 transition-all duration-300 hover:border-white/[0.12]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: step.gradient }}
              />
              <div className="relative">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-magenta">
                  {step.n}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-satoshi)] text-[19px] font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text/70">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── REQUIREMENTS ─── */

function Requirements() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".req-el", { y: 24, opacity: 0 });
      gsap.to(".req-el", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/50 px-6 py-24 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-[860px] text-center">
        <span className="req-el inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-cyan">
          Requisitos
        </span>
        <h2 className="req-el mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
          ¿Quién puede aplicar?
        </h2>
        <p className="req-el mx-auto mt-5 max-w-lg font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text">
          Buscamos afiliados que ya estén listos para hacer lives. Solo pedimos
          dos cosas para empezar.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {REQUIREMENTS.map((req) => (
            <div
              key={req.title}
              className="req-el flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-8 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta/10 text-magenta">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-satoshi)] text-[18px] font-bold text-white">
                {req.title}
              </h3>
              <p className="font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text/70">
                {req.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */

function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".fcta-el", { y: 26, opacity: 0 });
      gsap.to(".fcta-el", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/50 bg-void py-24 lg:py-[140px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,107,0.12)_0%,transparent_70%)] blur-[80px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-20">
        <span className="fcta-el font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Aplica hoy
        </span>
        <h2 className="fcta-el mx-auto mt-6 max-w-3xl font-[family-name:var(--font-satoshi)] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[52px]">
          ¿Listo para llevar tus lives
          <br />
          al siguiente nivel?
        </h2>
        <p className="fcta-el mx-auto mt-6 max-w-lg font-[family-name:var(--font-satoshi)] text-lg font-light leading-relaxed text-text">
          Aplica a la red de afiliados de PULSR y empieza a vender con mejores
          comisiones, equipo profesional y un equipo que te respalda.
        </p>

        <div className="fcta-el mt-10 flex flex-col items-center gap-4">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-magenta px-10 py-4 font-[family-name:var(--font-satoshi)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.3)] active:scale-[0.98]"
          >
            Aplica a la red de afiliados
            <span className="ml-2">→</span>
          </a>
          <p className="font-mono text-[11px] tracking-[0.15em] text-muted">
            Requisitos: afiliado de TikTok Shop · 5,000+ seguidores
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */

function TalentoFooter() {
  return (
    <footer className="border-t border-border bg-dark px-6 py-14 lg:px-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <a href="/" className="flex items-center gap-2.5" aria-label="PULSR — inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-pulsr-agency.svg" alt="" aria-hidden="true" className="h-7 w-auto" />
            <span className="font-[family-name:var(--font-satoshi)] text-[20px] font-extrabold tracking-[0.18em] text-white">
              PULSR
            </span>
          </a>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted">
            Live Commerce Studio · CDMX
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="/" className="font-[family-name:var(--font-satoshi)] text-sm text-muted transition-colors hover:text-white">
            Inicio
          </a>
          <a href="/#servicios" className="font-[family-name:var(--font-satoshi)] text-sm text-muted transition-colors hover:text-white">
            Servicios
          </a>
          <a href="/contacto" className="font-[family-name:var(--font-satoshi)] text-sm text-muted transition-colors hover:text-white">
            Contacto
          </a>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-[family-name:var(--font-satoshi)] text-sm font-medium text-white transition-all duration-200 hover:border-magenta hover:text-magenta"
        >
          Aplica ahora
          <ArrowRight />
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] border-t border-border pt-6 text-center">
        <p className="font-mono text-[11px] tracking-[0.1em] text-border">© 2026 PULSR</p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */

export default function TalentoPage() {
  return (
    <>
      <TalentoNav />
      <Hero />
      <Benefits />
      <Equipment />
      <HowItWorks />
      <Requirements />
      <FinalCta />
      <TalentoFooter />
    </>
  );
}
