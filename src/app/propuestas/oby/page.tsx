"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* ─── analytics helper ─── */
function trackSlide(n: number) {
  console.log(`[PULSR] slide_view`, { slide: n + 1, ts: Date.now() });
}

/* ─── count-up hook ─── */
function useCountUp(
  ref: React.RefObject<HTMLSpanElement | null>,
  target: number,
  active: boolean,
  format: (val: number) => string
) {
  const hasPlayed = useRef(false);
  useEffect(() => {
    if (!active || hasPlayed.current || !ref.current) return;
    hasPlayed.current = true;
    const el = ref.current;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = format(Math.round(obj.val));
      },
      onComplete: () => {
        el.textContent = format(target);
      },
    });
    return () => { gsap.killTweensOf(obj); };
  }, [active, target, format, ref]);
}

/* ─── slide wrapper with entrance animation ─── */
function SlideWrap({
  active,
  children,
  wide = false,
}: {
  active: boolean;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (active) {
      gsap.fromTo(
        ref.current.querySelectorAll(".anim"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.15 }
      );
    }
  }, [active]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-300 ${active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
    >
      <div className="flex min-h-full items-center justify-center px-6 py-16">
        <div className={`w-full ${wide ? "max-w-[960px]" : "max-w-[800px]"}`}>{children}</div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SLIDES
   ════════════════════════════════════════════════ */

/* ── Slide 1: Cover ── */
function SlideCover({ active }: { active: boolean }) {
  return (
    <SlideWrap active={active}>
      <div className="flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/oby-logo.avif"
          alt="OBY"
          className="anim mx-auto mb-8 h-16 w-auto brightness-[2] contrast-[0.9] sm:h-20"
        />
        <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Tu oportunidad en TikTok Live Commerce
        </span>
        <h1 className="anim mt-8 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-[1.1] text-white sm:text-[56px]">
          OBY
          <br />
          <span className="bg-gradient-to-r from-magenta via-purple to-blue bg-clip-text text-transparent">
            × PULSR
          </span>
        </h1>
        <p className="anim mt-6 font-[family-name:var(--font-outfit)] text-lg font-light text-muted">
          Análisis preparado para OBY · Marzo 2026
        </p>
        {/* PULSR logo */}
        <div className="anim mt-16 opacity-40">
          <svg viewBox="0 0 320 60" fill="none" className="h-7 w-auto">
            <path
              d="M0 30 Q8 30 12 15 Q16 0 20 30 Q24 60 28 30 Q32 8 36 30 Q40 48 44 30 L48 30"
              stroke="#6B6B88"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <text
              x="62"
              y="43"
              fontFamily="var(--font-syne), Syne, sans-serif"
              fontWeight="800"
              fontSize="44"
              fill="#6B6B88"
              letterSpacing="4"
            >
              PULSR
            </text>
          </svg>
        </div>
      </div>
    </SlideWrap>
  );
}

/* ── Slide 2: The Gap ── */
function SlideGap({ active }: { active: boolean }) {
  const have = [
    "$138.2K MXN/mes en TikTok Shop",
    "3.5M video views al mes",
    "692 unidades de Magnesio Complex vendidas (producto #1)",
    "Catálogo fuerte: Magnesio, Inositol (3 SKUs), Proteína Vegana, Colágeno, Omega 3",
    "Presencia en Amazon MX, Mercado Libre, oby.mx",
  ];
  const missing = [
    "Solo $2.12K de $138K viene de lives (1.5%)",
    "~3 lives en el último mes con bajo rendimiento",
    "98% de ingreso depende de video — sin diversificación",
    "11.8K seguidores en TikTok — creciendo 23/día",
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Marca
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-syne)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
        $138K en TikTok Shop.
        <br />
        Solo $2K viene de lives.
      </h2>

      <div className="anim mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
        {/* What they have */}
        <div>
          <p className="font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wide uppercase text-muted">
            Lo que tienes
          </p>
          <ul className="mt-4 space-y-3">
            {have.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                <span className="font-[family-name:var(--font-outfit)] text-base text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's missing */}
        <div>
          <p className="font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wide uppercase text-muted">
            Lo que falta
          </p>
          <ul className="mt-4 space-y-3">
            {missing.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border border-border" />
                <span className="font-[family-name:var(--font-outfit)] text-base text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideWrap>
  );
}

/* ── Slide 3: The Proof ── */
function SlideProof({ active }: { active: boolean }) {
  const birdmanRef = useRef<HTMLSpanElement>(null);
  const blifeRef = useRef<HTMLSpanElement>(null);
  const bloomRef = useRef<HTMLSpanElement>(null);

  const fmtMXN = useCallback(
    (v: number) => `$${(v / 1000000).toFixed(2)}M MXN/mes`,
    []
  );
  const fmtK = useCallback(
    (v: number) => `$${Math.round(v / 1000)}K MXN/mes`,
    []
  );

  useCountUp(birdmanRef, 1730000, active, fmtMXN);
  useCountUp(blifeRef, 785000, active, fmtK);
  useCountUp(bloomRef, 272000, active, fmtK);

  const cards = [
    {
      name: "Birdman",
      followers: "298K seguidores",
      revenueRef: birdmanRef,
      revenueFinal: "$1.73M MXN/mes",
      detail: "85% de ingresos vienen de lives",
      stats: "Mejor sesión: $202K · Sesiones de 4-5hrs · AOV: $440",
      callout: null,
    },
    {
      name: "B Life",
      followers: "1.1M seguidores",
      revenueRef: blifeRef,
      revenueFinal: "$785K MXN/mes",
      detail: "98% de ingresos vienen de lives",
      stats: "Mejor sesión: $174K · Sesiones de 2-3hrs · AOV: $505",
      callout:
        "Vende Magnesio, Inositol y Omega 3 — las mismas categorías que OBY.",
    },
    {
      name: "Bloom",
      followers: "42K seguidores",
      revenueRef: bloomRef,
      revenueFinal: "$272K MXN/mes",
      detail: "87% de ingresos vienen de lives",
      stats: "Mejor sesión: $32K · Sesiones de 3-8hrs · AOV: $438",
      callout: null,
    },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Categoría en TikTok Shop
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-syne)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        Las marcas que hacen lives bien,
        <br />
        generan 10-50× más por sesión.
      </h2>
      <p className="anim mt-3 font-[family-name:var(--font-outfit)] text-sm font-light text-muted">
        Datos de TikTok Shop · Últimos 30 días · Fuente: Kalodata
      </p>

      <div className="anim mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.name}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6"
          >
            {/* Glow behind revenue */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/4 rounded-full bg-magenta/[0.06] blur-[40px]" />
            <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
              {c.name}
            </p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-muted">
              {c.followers}
            </p>
            <div className="my-3 h-px bg-border" />
            <p className="font-[family-name:var(--font-syne)] text-2xl font-extrabold text-magenta sm:text-[32px]">
              <span ref={c.revenueRef}>{c.revenueFinal}</span>
            </p>
            <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-muted">
              {c.detail}
            </p>
            <p className="mt-3 font-[family-name:var(--font-mono)] text-xs leading-relaxed text-text">
              {c.stats}
            </p>
            {c.callout && (
              <p className="mt-3 rounded-lg bg-magenta/[0.08] px-3 py-2 font-[family-name:var(--font-outfit)] text-sm text-magenta">
                {c.callout}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="anim mt-8 text-center font-[family-name:var(--font-outfit)] text-base text-white">
        OBY ya genera $138K/mes en TikTok Shop sin lives profesionales.
        <br />
        Bloom genera $272K con 42K seguidores. El canal funciona — la ejecución hace la diferencia.
      </p>
    </SlideWrap>
  );
}

/* ── Slide 4: The Strategy ── */
function SlideStrategy({ active }: { active: boolean }) {
  const blocks = [
    {
      title: "Producto héroe: Magnesio Complex 5",
      body: "Tu producto más vendido con 692 unidades/mes y precio accesible ($98 MXN). Ideal para volumen en lives. Producto ancla de cada sesión con Inositol y Proteína Vegana como complementos de ticket alto ($245-$314 MXN).",
    },
    {
      title: "Formato: Educativo + Flash Deals",
      body: "Sesiones de 2 horas. La host educa sobre beneficios de magnesio, salud hormonal (inositol), y nutrición vegana. Cada 20 minutos, oferta flash exclusiva para viewers. B Life usa este mismo formato y genera $40-55K por sesión en 2-3 horas.",
    },
    {
      title: "Calendario: 3× por semana",
      body: "Martes y Jueves 8:00 PM · Domingo 3:00 PM. Tus lives anteriores fueron esporádicos y sin estructura. La consistencia es lo que separa $2K/mes de $200K/mes en live revenue. B Life transmite 4-5 veces por semana con horario fijo.",
    },
  ];

  return (
    <SlideWrap active={active}>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Estrategia
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-syne)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        Diseñado para OBY.
      </h2>

      <div className="mt-10 space-y-8">
        {blocks.map((b) => (
          <div key={b.title} className="anim">
            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
              {b.title}
            </h3>
            <p className="mt-2 font-[family-name:var(--font-outfit)] text-base font-light leading-relaxed text-text">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </SlideWrap>
  );
}

/* ── Slide 5: Investment ── */
function SlideInvestment({ active }: { active: boolean }) {
  const priceRef = useRef<HTMLSpanElement>(null);
  const fmtPrice = useCallback(
    (v: number) => `$${v.toLocaleString("es-MX")} MXN/mes`,
    []
  );
  useCountUp(priceRef, 42000, active, fmtPrice);

  const included = [
    "12 sesiones al mes (3×/semana, 2hrs cada una)",
    "Host dedicado con experiencia en venta en vivo",
    "Estudio equipado con producción completa",
    "Operación live: flash deals, product pins, moderación de chat",
    "Reporte semanal de performance",
    "Estrategia mensual personalizada",
  ];

  const scenarios = [
    { label: "Escenario Conservador", perSession: "$12K", total: "$144K/mes" },
    { label: "Escenario Moderado", perSession: "$22K", total: "$264K/mes" },
    { label: "Escenario Optimista", perSession: "$40K", total: "$480K/mes" },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Inversión
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-syne)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
        <span ref={priceRef}>$42,000 MXN/mes</span>
      </h2>
      <p className="anim mt-3 font-[family-name:var(--font-outfit)] text-base text-muted">
        Programa Founding Partner · Primeros 3 meses
      </p>

      <ul className="anim mt-8 space-y-3">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
            <span className="font-[family-name:var(--font-outfit)] text-[15px] text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <p className="anim mt-8 font-[family-name:var(--font-outfit)] text-[15px] font-light leading-relaxed text-text">
        OBY genera $138K/mes con video. Al agregar lives profesionales con el rendimiento de Bloom (la más conservadora), OBY podría sumar $150-$270K MXN/mes adicionales en live revenue.
      </p>

      {/* ROI banner — three columns */}
      <div className="anim mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {scenarios.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-xl border border-magenta/20 bg-gradient-to-b from-magenta/[0.08] to-purple/[0.05] px-5 py-5 text-center"
          >
            <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-magenta/10 blur-[30px]" />
            <p className="relative font-[family-name:var(--font-mono)] text-xs font-medium tracking-wide uppercase text-muted">
              {s.label}
            </p>
            <p className="relative mt-3 font-[family-name:var(--font-syne)] text-2xl font-extrabold text-magenta sm:text-[28px]">
              {s.total}
            </p>
            <p className="relative mt-1 font-[family-name:var(--font-mono)] text-xs text-text">
              {s.perSession} MXN/sesión × 12 sesiones
            </p>
          </div>
        ))}
      </div>

      <p className="anim mt-6 font-[family-name:var(--font-mono)] text-xs leading-relaxed text-muted">
        Estimación basada en el rendimiento de marcas similares en TikTok Shop México. Resultados reales dependen de producto, audiencia y ejecución. Inversión mensual: $42,000 MXN.
      </p>
    </SlideWrap>
  );
}

/* ── Slide 6: Next Step ── */
function SlideNextStep({ active }: { active: boolean }) {
  return (
    <SlideWrap active={active}>
      <div className="flex flex-col items-center text-center">
        <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Siguiente Paso
        </span>
        <h2 className="anim mt-5 font-[family-name:var(--font-syne)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
          En 2 semanas, OBY transmite
          <br />
          con producción profesional.
        </h2>
        <p className="anim mt-5 font-[family-name:var(--font-outfit)] text-lg font-light text-muted">
          Agenda 15 minutos para platicar cómo arrancamos.
        </p>
        <a
          href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
          target="_blank"
          rel="noopener noreferrer"
          className="anim mt-8 inline-block rounded-lg bg-magenta px-8 py-4 font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.3)] active:scale-[0.98]"
        >
          Agendar llamada →
        </a>
        <p className="anim mt-4 font-[family-name:var(--font-outfit)] text-sm text-muted">
          O responde este mensaje directamente.
        </p>

        {/* PULSR logo + tagline */}
        <div className="anim mt-16 flex flex-col items-center gap-2 opacity-40">
          <svg viewBox="0 0 320 60" fill="none" className="h-6 w-auto">
            <path
              d="M0 30 Q8 30 12 15 Q16 0 20 30 Q24 60 28 30 Q32 8 36 30 Q40 48 44 30 L48 30"
              stroke="#6B6B88"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <text
              x="62"
              y="43"
              fontFamily="var(--font-syne), Syne, sans-serif"
              fontWeight="800"
              fontSize="44"
              fill="#6B6B88"
              letterSpacing="4"
            >
              PULSR
            </text>
          </svg>
          <span className="font-[family-name:var(--font-mono)] text-xs text-border">
            Live Commerce Studio · CDMX
          </span>
        </div>
      </div>
    </SlideWrap>
  );
}

/* ════════════════════════════════════════════════
   MAIN DECK COMPONENT
   ════════════════════════════════════════════════ */

const TOTAL_SLIDES = 6;

export default function ObyDeck() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((c) => {
        const next = c + dir;
        if (next < 0 || next >= TOTAL_SLIDES) return c;
        return next;
      });
    },
    []
  );

  // Track slide views
  useEffect(() => {
    trackSlide(current);
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  // Click to advance
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // Don't advance if clicking a link or button
      const tag = (e.target as HTMLElement).closest("a, button");
      if (tag) return;
      go(1);
    },
    [go]
  );

  // Touch/swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStart.current;
      if (Math.abs(dx) > 50) {
        go(dx < 0 ? 1 : -1);
      }
      touchStart.current = null;
    },
    [go]
  );

  return (
    <div
      className="relative h-dvh w-full select-none overflow-hidden bg-void"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <SlideCover active={current === 0} />
      <SlideGap active={current === 1} />
      <SlideProof active={current === 2} />
      <SlideStrategy active={current === 3} />
      <SlideInvestment active={current === 4} />
      <SlideNextStep active={current === 5} />

      {/* Navigation arrows — top-right on mobile, sides on desktop */}
      <div className="absolute top-4 right-4 z-50 flex gap-2 sm:hidden">
        {current > 0 && (
          <button
            onClick={() => go(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-muted backdrop-blur-sm transition-all duration-200 active:scale-95"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {current < TOTAL_SLIDES - 1 && (
          <button
            onClick={() => go(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-muted backdrop-blur-sm transition-all duration-200 active:scale-95"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop side arrows */}
      {current > 0 && (
        <button
          onClick={() => go(-1)}
          className="absolute top-1/2 left-6 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-surface/60 text-muted backdrop-blur-sm transition-all duration-200 hover:border-magenta/40 hover:text-white sm:flex"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
            <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {current < TOTAL_SLIDES - 1 && (
        <button
          onClick={() => go(1)}
          className="absolute top-1/2 right-6 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-surface/60 text-muted backdrop-blur-sm transition-all duration-200 hover:border-magenta/40 hover:text-white sm:flex"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
            <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Progress bar */}
      <div className="absolute right-0 bottom-0 left-0 z-50 h-[3px] bg-border">
        <div
          className="h-full bg-magenta transition-all duration-300 ease-out"
          style={{ width: `${((current + 1) / TOTAL_SLIDES) * 100}%` }}
        />
      </div>
    </div>
  );
}
