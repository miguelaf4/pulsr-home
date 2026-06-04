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
          src="/assets/wayulogo.avif"
          alt="Wayú"
          className="anim mx-auto mb-8 h-16 w-auto brightness-[2] contrast-[0.9] sm:h-20"
        />
        <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Análisis de Oportunidad
        </span>
        <h1 className="anim mt-8 font-[family-name:var(--font-satoshi)] text-4xl font-extrabold leading-[1.1] text-white sm:text-[56px]">
          Wayú
          <br />
          <span className="bg-gradient-to-r from-magenta via-purple to-blue bg-clip-text text-transparent">
            × TikTok Live Commerce
          </span>
        </h1>
        <p className="anim mt-6 font-[family-name:var(--font-satoshi)] text-lg font-light text-muted">
          Análisis preparado por PULSR · Junio 2026
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
              fontFamily="var(--font-satoshi), Satoshi, sans-serif"
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
    "Distribución nacional en Farmacias del Ahorro",
    "Presencia en Amazon México",
    "4 SKUs de limonadas funcionales con colágeno (Matcha · Jamaica · Blueberry · ACV)",
    "Posicionamiento limpio: orgánico, vegano, gluten free, endulzado con agave",
  ];
  const missing = [
    "0 tienda en TikTok Shop",
    "0 videos en TikTok Shop",
    "0 transmisiones en vivo",
    "0 presencia en el canal de mayor crecimiento de la categoría",
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Marca
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
        Retail nacional.
        <br />
        $0 en TikTok Shop.
      </h2>

      <div className="anim mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
        {/* What they have */}
        <div>
          <p className="font-[family-name:var(--font-satoshi)] text-sm font-medium tracking-wide uppercase text-muted">
            Lo que tienes
          </p>
          <ul className="mt-4 space-y-3">
            {have.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                <span className="font-[family-name:var(--font-satoshi)] text-base text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's missing */}
        <div>
          <p className="font-[family-name:var(--font-satoshi)] text-sm font-medium tracking-wide uppercase text-muted">
            Lo que falta
          </p>
          <ul className="mt-4 space-y-3">
            {missing.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border border-border" />
                <span className="font-[family-name:var(--font-satoshi)] text-base text-white">
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
  const obyRef = useRef<HTMLSpanElement>(null);

  const fmtMXN = useCallback(
    (v: number) => `$${(v / 1000000).toFixed(2)}M MXN/mes`,
    []
  );

  useCountUp(birdmanRef, 7450000, active, fmtMXN);
  useCountUp(blifeRef, 2840000, active, fmtMXN);
  useCountUp(obyRef, 2400000, active, fmtMXN);

  const cards = [
    {
      name: "Birdman",
      revenueRef: birdmanRef,
      revenueFinal: "$7.45M MXN/mes",
      detail: "59% de ingresos vienen de live",
      stats: "Live = $4.4M MXN/mes · Colágeno mexicano · Distribución en retail",
      callout:
        "El espejo más cercano a Wayú. Marca mexicana, misma categoría, misma jugada de retail.",
    },
    {
      name: "B Life",
      revenueRef: blifeRef,
      revenueFinal: "$2.84M MXN/mes",
      detail: "59% de ingresos vienen de live",
      stats: "Live = ~$1.68M MXN/mes · Wellness · Sin retail físico",
      callout: null,
    },
    {
      name: "OBY",
      revenueRef: obyRef,
      revenueFinal: "$2.40M MXN/mes",
      detail: "63% de ingresos vienen de live",
      stats: "Live = ~$1.51M MXN/mes · Wellness emergente",
      callout: null,
    },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Categoría en TikTok Shop
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        Las marcas de salud y bienestar
        <br />
        ya generan millones con live en México.
      </h2>
      <p className="anim mt-3 font-[family-name:var(--font-satoshi)] text-sm font-light text-muted">
        TikTok Shop México · 22 feb – 23 mar 2026 · Fuente: Kalodata
      </p>

      <div className="anim mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.name}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6"
          >
            {/* Glow behind revenue */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/4 rounded-full bg-magenta/[0.06] blur-[40px]" />
            <p className="font-[family-name:var(--font-satoshi)] text-lg font-bold text-white">
              {c.name}
            </p>
            <div className="my-3 h-px bg-border" />
            <p className="font-[family-name:var(--font-satoshi)] text-2xl font-extrabold text-magenta sm:text-[32px]">
              <span ref={c.revenueRef}>{c.revenueFinal}</span>
            </p>
            <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-muted">
              {c.detail}
            </p>
            <p className="mt-3 font-[family-name:var(--font-mono)] text-xs leading-relaxed text-text">
              {c.stats}
            </p>
            {c.callout && (
              <p className="mt-3 rounded-lg bg-magenta/[0.08] px-3 py-2 font-[family-name:var(--font-satoshi)] text-sm text-magenta">
                {c.callout}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="anim mt-8 text-center font-[family-name:var(--font-satoshi)] text-base text-white">
        Birdman vende <span className="font-semibold text-magenta">$4.4M MXN al mes solo de live</span>. Misma categoría, misma jugada de retail.
        <br />
        Las marcas líderes de wellness capturan 56–63% de sus ingresos en live (Zesty: $1.72M/mes, 56% live). Wayú: $0 en el canal.
      </p>
    </SlideWrap>
  );
}

/* ── Slide 4: Spillover ── */
function SlideSpillover({ active }: { active: boolean }) {
  const cards = [
    {
      stat: "$6.70",
      unit: "por cada $1 de GMV en TikTok",
      desc: "Ingreso fuera de la plataforma — Amazon, retail, búsqueda directa — atribuible a presencia en TikTok, en una ventana de 90 días.",
      source: "Fuente: Cruva (vía Advertising Week)",
    },
    {
      stat: "42%",
      unit: "de las ventas en Amazon",
      desc: "Están influenciadas por canales externos como TikTok. La atribución estándar de Amazon no lo acredita.",
      source: "Fuente: Fospha",
    },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        El Efecto Halo
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        El live no compite con Farmacias del Ahorro
        <br />
        ni con Amazon. Los alimenta.
      </h2>
      <p className="anim mt-4 max-w-[680px] font-[family-name:var(--font-satoshi)] text-base font-light leading-relaxed text-text">
        La demanda de marca creada en un live se convierte en sell-through en
        farmacia y en búsquedas y ventas en Amazon. Es el mismo consumidor,
        cruzando canales. La atribución estándar nunca lo acredita.
      </p>

      <div className="anim mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.stat}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6"
          >
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/4 rounded-full bg-magenta/[0.06] blur-[40px]" />
            <p className="relative font-[family-name:var(--font-satoshi)] text-4xl font-extrabold text-magenta sm:text-[44px]">
              {c.stat}
            </p>
            <p className="relative mt-1 font-[family-name:var(--font-satoshi)] text-base font-semibold text-white">
              {c.unit}
            </p>
            <div className="relative my-3 h-px bg-border" />
            <p className="relative font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text">
              {c.desc}
            </p>
            <p className="relative mt-3 font-[family-name:var(--font-mono)] text-xs text-muted">
              {c.source}
            </p>
          </div>
        ))}
      </div>

      <p className="anim mt-8 text-center font-[family-name:var(--font-satoshi)] text-base text-white">
        Para Wayú, cada peso vendido en live multiplica el sell-through en
        Farmacias del Ahorro y en Amazon.
        <br />
        El live es la cima del funnel. El retail es donde se cobra.
      </p>
    </SlideWrap>
  );
}

/* ── Slide 5: The Strategy ── */
function SlideStrategy({ active }: { active: boolean }) {
  const blocks = [
    {
      title: "Producto héroe: Collagen Jamaica",
      body: "El SKU más visual del catálogo: color vibrante, herencia mexicana, ritual claro en cámara. Ancla del live, con Matcha Lemonade y Collagen Blueberry como variantes de sabor y Apple Cider Vinegar Lemonade como ritual matutino educativo.",
    },
    {
      title: "Formato: Ritual + Tasting + Flash Deals",
      body: "Sesiones de 2 horas. La host construye el ritual de bebida en cámara — cómo se sirve, sabor, momento del día — con demos en vivo de los 4 sabores. Cada 20 minutos, oferta flash exclusiva para viewers del live. Birdman corre sesiones equivalentes y promedia $4.4M MXN/mes de live.",
    },
    {
      title: "Calendario: 3× por semana",
      body: "Martes y Jueves 6:00 PM (after-work) · Domingo 11:00 AM (brunch). Horarios de máximo tráfico para bebidas funcionales en México.",
    },
  ];

  return (
    <SlideWrap active={active}>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Estrategia
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        Diseñado para Wayú.
      </h2>

      <div className="mt-10 space-y-8">
        {blocks.map((b) => (
          <div key={b.title} className="anim">
            <h3 className="font-[family-name:var(--font-satoshi)] text-lg font-bold text-white">
              {b.title}
            </h3>
            <p className="mt-2 font-[family-name:var(--font-satoshi)] text-base font-light leading-relaxed text-text">
              {b.body}
            </p>
          </div>
        ))}
      </div>
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
        <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
          En 2 semanas, Wayú
          <br />
          transmite en vivo.
        </h2>
        <p className="anim mt-5 font-[family-name:var(--font-satoshi)] text-lg font-light text-muted">
          Agenda 30 minutos para platicar cómo arrancamos.
        </p>
        <a
          href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
          target="_blank"
          rel="noopener noreferrer"
          className="anim mt-8 inline-block rounded-lg bg-magenta px-8 py-4 font-[family-name:var(--font-satoshi)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.3)] active:scale-[0.98]"
        >
          Agendar llamada →
        </a>
        <p className="anim mt-4 font-[family-name:var(--font-satoshi)] text-sm text-muted">
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
              fontFamily="var(--font-satoshi), Satoshi, sans-serif"
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

export default function WayuDeck() {
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
      <SlideSpillover active={current === 3} />
      <SlideStrategy active={current === 4} />
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
