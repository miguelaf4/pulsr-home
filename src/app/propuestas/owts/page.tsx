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
        {/* black logo on dark bg — silhouette it against a brand-gradient glow */}
        <div className="anim relative mb-8">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-28 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-magenta/50 via-purple/45 to-blue/40 blur-[32px] sm:h-32 sm:w-80" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/owts-logo.avif"
            alt="OWTS"
            className="relative mx-auto h-16 w-auto sm:h-20"
          />
        </div>
        <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Análisis de Oportunidad
        </span>
        <h1 className="anim mt-8 font-[family-name:var(--font-satoshi)] text-4xl font-extrabold leading-[1.1] text-white sm:text-[56px]">
          OWTS
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
    "Ya transmites: 18 lives en el último mes",
    "2 alianzas con creadores ya activas",
    "Producto premium: 25g de proteína por porción, sin azúcar añadida, hecho en México",
    "Bundles + suscripción: recompra integrada y LTV claro",
    "1,000+ clientes verificados · Shopify, Amazon MX y Mercado Libre",
  ];
  const missing = [
    "Producción profesional: set, host, operación de ofertas en vivo",
    "Consistencia: horario fijo y cadencia semanal sostenida",
    "Un playbook de live diseñado para marca premium, no de volumen",
    "Resultado actual: ~$2.6K MXN/mes en un canal donde tu categoría genera $166K–$1.42M por marca",
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Marca
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
        Ya arrancaste en live.
        <br />
        Lo que falta es el sistema.
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

      <p className="anim mt-8 text-center font-[family-name:var(--font-satoshi)] text-base text-white">
        Llegaste temprano al canal y sin costos hundidos que proteger.
        <br />
        <span className="font-semibold text-magenta">Todo lo que se construya encima es crecimiento neto — y 100% atribuible.</span>
      </p>
    </SlideWrap>
  );
}

/* ── Slide 3: The Proof ── */
function SlideProof({ active }: { active: boolean }) {
  const waldosRef = useRef<HTMLSpanElement>(null);
  const fursonRef = useRef<HTMLSpanElement>(null);
  const cazelRef = useRef<HTMLSpanElement>(null);

  const fmtMXN = useCallback(
    (v: number) => `$${(v / 1000000).toFixed(2)}M MXN/mes`,
    []
  );

  useCountUp(waldosRef, 2222042, active, fmtMXN);
  useCountUp(fursonRef, 1419439, active, fmtMXN);
  useCountUp(cazelRef, 1269766, active, fmtMXN);

  const cards = [
    {
      name: "Waldo's Shop",
      revenueRef: waldosRef,
      revenueFinal: "$2.22M MXN/mes",
      detail: "1,141 lives/mes · 1,516 creadores",
      stats: "Retail multicategoría con snacks fuertes · +27% MoM · AOV $65",
      callout: null,
    },
    {
      name: "Don Fursón",
      revenueRef: fursonRef,
      revenueFinal: "$1.42M MXN/mes",
      detail: "2,407 lives/mes · 950 creadores",
      stats: "Snacks y chocolates premium · +31% MoM · AOV $140",
      callout:
        "Snacks premium, como OWTS. Corre 2,400+ lives al mes. El canal no es una apuesta: es infraestructura.",
    },
    {
      name: "CAZEL MX",
      revenueRef: cazelRef,
      revenueFinal: "$1.27M MXN/mes",
      detail: "503 lives/mes · 828 creadores",
      stats: "Confitería y dulces · +29% MoM · 370 SKUs",
      callout: null,
    },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Categoría en TikTok Shop
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        El mercado de snacks ya decidió:
        <br />
        el live es el canal.
      </h2>
      <p className="anim mt-3 font-[family-name:var(--font-satoshi)] text-sm font-light text-muted">
        TikTok Shop México · Últimos 30 días · Fuente: Kalodata
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
        Ocho marcas de snacks generan entre <span className="font-semibold text-magenta">$166K y $1.42M MXN al mes</span>,
        con el live impulsando 65–100% de sus ingresos.
        <br />
        La sesión #1 de la categoría hizo $35.5K en una sola transmisión.
      </p>
    </SlideWrap>
  );
}

/* ── Slide 4: The Template ── */
function SlideTemplate({ active }: { active: boolean }) {
  const tomatillasRef = useRef<HTMLSpanElement>(null);
  const fmtK = useCallback(
    (v: number) => `$${Math.round(v / 1000)}K MXN`,
    []
  );
  useCountUp(tomatillasRef, 201000, active, fmtK);

  const stats = [
    { label: "AOV", value: "$182 — el más alto de la categoría" },
    { label: "Modelo", value: "74% ingresos por canal propio" },
    { label: "Cadencia", value: "~70 lives/mes, no 2,400" },
    { label: "Audiencia", value: "@tomatillas · 32K seguidores" },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        El Modelo Correcto
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        No necesitas 1,000 afiliados.
        <br />
        Necesitas un canal propio que venda.
      </h2>
      <p className="anim mt-4 max-w-[700px] font-[family-name:var(--font-satoshi)] text-base font-light leading-relaxed text-text">
        Tu ticket promedio de $513 MXN — contra $144 del promedio de la
        categoría — no es una anomalía: es la señal de que tu carril es el
        premium, no el de volumen. Y para una marca premium de pocos SKUs, el
        modelo ganador en este mercado es el canal propio bien producido — no el
        ejército de afiliados. La prueba se llama Tomatillas.
      </p>

      <div className="anim mt-8 relative overflow-hidden rounded-2xl border border-magenta/25 bg-surface p-6 sm:p-8">
        <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-magenta/[0.07] blur-[50px]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-satoshi)] text-lg font-bold text-white">
              Tomatillas — snacks artesanales premium
            </p>
            <p className="mt-2 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold text-magenta sm:text-[40px]">
              <span ref={tomatillasRef}>$201K MXN</span>
            </p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-muted">
              generados con solo 22 lives desde su cuenta propia
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-8">
            {stats.map((s) => (
              <li key={s.label} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                <span className="font-[family-name:var(--font-satoshi)] text-sm text-white">
                  <span className="text-muted">{s.label}:</span> {s.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="relative mt-6 rounded-lg bg-magenta/[0.08] px-4 py-3 font-[family-name:var(--font-satoshi)] text-sm text-magenta">
          Este es OWTS en doce meses con producción detrás: posicionamiento
          premium, audiencia propia, pocas transmisiones de alta calidad.
        </p>
      </div>

      <p className="anim mt-8 text-center font-[family-name:var(--font-satoshi)] text-base text-white">
        Fase 1: canal propio bien producido. Fase 2: red selecta de afiliados
        <br />
        (el modelo híbrido de Gomitas Matonas: $437K/mes, 43% canal propio).
      </p>
    </SlideWrap>
  );
}

/* ── Slide 5: The Strategy ── */
function SlideStrategy({ active }: { active: boolean }) {
  const blocks = [
    {
      title: "Producto héroe: el bundle de 20 porciones",
      body: "Tu best seller ($1,052 MXN) como ancla de cada live, con el pack de 40 como oferta exclusiva de transmisión y el de 5 como ticket de entrada. La preparación en cámara — overnight en frío y versión caliente en 5 minutos — recorre los 5 sabores en cada sesión.",
    },
    {
      title: "Formato: Ritual de desayuno + Tasting + Flash Bundles",
      body: "Sesiones de 2 horas. La host construye el ritual del desayuno alto en proteína en cámara: preparación, textura, sabor por sabor. Cada 20 minutos, bundle flash exclusivo para viewers del live. Las tácticas ganadoras de la categoría — FOMO, giveaways, retos de sabor — adaptadas a un tono premium.",
    },
    {
      title: "Calendario: pocas sesiones, bien producidas",
      body: "Ya corres ~18 lives al mes — el hábito existe. El siguiente paso no es más volumen sino estructura: 3 lives por semana en horario fijo, siguiendo el modelo Tomatillas de calidad sobre cantidad. Con cadencia fija y producción detrás, ese mismo esfuerzo es el que en tu categoría genera seis cifras al mes.",
    },
    {
      title: "Compliance en vivo: tu historia, del lado legal",
      body: "Como alimento, OWTS tiene libertad de claims que los suplementos no tienen. El riesgo corre al revés: proteína, saciedad y sin azúcar se deslizan rápido hacia claims de control de peso, prohibidos en TikTok. Un moderador en vivo mantiene la narrativa del lado correcto de la línea, en tiempo real. Un guion estático no puede.",
    },
  ];

  return (
    <SlideWrap active={active}>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Tu Estrategia
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        Diseñado para OWTS.
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

/* ── Slide 6: Channel Ownership / Halo ── */
function SlideHalo({ active }: { active: boolean }) {
  const cards = [
    {
      stat: "3×",
      unit: "valor total de ecosistema",
      desc: "Por cada peso vendido en TikTok Shop, las marcas capturan un múltiplo en valor total — recompra, suscripción y ventas en otros canales.",
      source: "Fuente: Jordan West / Social Commerce Club",
    },
    {
      stat: "33%",
      unit: "de uplift por efecto halo",
      desc: "La demanda creada en live se convierte en búsquedas y ventas en Amazon México y Mercado Libre. La atribución estándar nunca lo acredita.",
      source: "Fuente: Social Commerce Club",
    },
  ];

  return (
    <SlideWrap active={active} wide>
      <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
        Canal Propio
      </span>
      <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-2xl font-extrabold leading-[1.15] text-white sm:text-[40px]">
        Amazon y Mercado Libre son rentados.
        <br />
        El live es el primer canal que OWTS posee.
      </h2>
      <p className="anim mt-4 max-w-[680px] font-[family-name:var(--font-satoshi)] text-base font-light leading-relaxed text-text">
        Las comisiones, los algoritmos y los datos de cliente de los
        marketplaces le pertenecen a un tercero. Un canal de live en TikTok Shop
        alimenta ingresos que OWTS controla — y derrama demanda de regreso hacia
        Amazon MX y Mercado Libre.
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
        Producto de consumo diario + suscripción = cada cliente ganado en live
        <br />
        vale meses de recompra, no una orden.
      </p>
    </SlideWrap>
  );
}

/* ── Slide 7: Next Step ── */
function SlideNextStep({ active }: { active: boolean }) {
  return (
    <SlideWrap active={active}>
      <div className="flex flex-col items-center text-center">
        <span className="anim font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] uppercase text-magenta">
          Siguiente Paso
        </span>
        <h2 className="anim mt-5 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold leading-[1.1] text-white sm:text-[48px]">
          En 2 semanas, OWTS
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

const TOTAL_SLIDES = 7;

export default function OwtsDeck() {
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
      <SlideTemplate active={current === 3} />
      <SlideStrategy active={current === 4} />
      <SlideHalo active={current === 5} />
      <SlideNextStep active={current === 6} />

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
