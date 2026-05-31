"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShaderHero from "@/components/shader-hero";
import ShaderCanvas from "@/components/shader-canvas";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

/* ─── DATA ─── */

const OVERLAYS = [
  {
    name: "Product Card",
    desc: "Show what you're selling, on screen, with price, stock, and a strike-through for the discount.",
    gradient: "radial-gradient(ellipse at 30% 50%, rgba(255,45,107,0.18) 0%, transparent 70%)",
  },
  {
    name: "Multi-Product Carousel",
    desc: "Rotate through a lineup of SKUs in one overlay slot. Great for hauls and collections.",
    gradient: "radial-gradient(ellipse at 70% 40%, rgba(0,212,204,0.18) 0%, transparent 70%)",
  },
  {
    name: "Countdown Timer",
    desc: "Flash-sale clock that counts down to a discount expiry, drop close, or stream goal.",
    gradient: "radial-gradient(ellipse at 40% 60%, rgba(139,26,255,0.18) 0%, transparent 70%)",
  },
  {
    name: "Goal Tracker",
    desc: "Progress bar or milestone tiers toward a sales target. Rally the chat behind a number.",
    gradient: "radial-gradient(ellipse at 60% 30%, rgba(77,93,255,0.18) 0%, transparent 70%)",
  },
  {
    name: "Code Drop",
    desc: "Big, readable discount code card. Viewers screenshot it before you finish saying it.",
    gradient: "radial-gradient(ellipse at 25% 40%, rgba(255,45,107,0.14) 0%, rgba(139,26,255,0.08) 50%, transparent 70%)",
  },
  {
    name: "Just-Sold Ticker",
    desc: "Live feed of recent purchases — social proof that orders are landing while you talk.",
    gradient: "radial-gradient(ellipse at 70% 60%, rgba(0,212,204,0.14) 0%, rgba(77,93,255,0.08) 50%, transparent 70%)",
  },
  {
    name: "Trust Badges",
    desc: "Free shipping, warranty, secure checkout. 12 hand-drawn icons in 3 styles, or upload your own.",
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(0,212,204,0.16) 0%, transparent 70%)",
  },
  {
    name: "Announcement Banner",
    desc: "Edge-to-edge banner for promos, restocks, shipping cutoffs, anything you want to repeat.",
    gradient: "radial-gradient(ellipse at 35% 55%, rgba(139,26,255,0.16) 0%, transparent 70%)",
  },
  {
    name: "Brand Header",
    desc: "Persistent brand name and tagline at the top of the stream. Tells new viewers who you are.",
    gradient: "radial-gradient(ellipse at 65% 45%, rgba(77,93,255,0.16) 0%, transparent 70%)",
  },
  {
    name: "Media",
    desc: "Drop in a logo, sticker, or short video clip. For everything the other overlays don't cover.",
    gradient: "radial-gradient(ellipse at 50% 60%, rgba(255,45,107,0.14) 0%, transparent 70%)",
  },
];

const FEATURES = [
  {
    title: "Change a price mid-stream",
    desc: "Edit any field in the dashboard. The overlay in OBS updates in about 2 seconds. No restarting the browser source.",
    gradient: "radial-gradient(ellipse at 30% 50%, rgba(0,212,204,0.18) 0%, transparent 70%)",
  },
  {
    title: "34 visual themes",
    desc: "Every overlay ships with multiple themes. Swap looks without rebuilding from scratch.",
    gradient: "radial-gradient(ellipse at 70% 40%, rgba(139,26,255,0.18) 0%, transparent 70%)",
  },
  {
    title: "28 ready-made templates",
    desc: "Flash sales, drops, free-shipping banners, sales tickers — with copy already written. One click to use.",
    gradient: "radial-gradient(ellipse at 40% 60%, rgba(255,45,107,0.18) 0%, transparent 70%)",
  },
  {
    title: "Scenes",
    desc: "Stack a product card, countdown, and trust badges into one browser source URL. Toggle each one on or off mid-stream.",
    pro: true,
    gradient: "radial-gradient(ellipse at 60% 30%, rgba(77,93,255,0.18) 0%, transparent 70%)",
  },
  {
    title: "Brand defaults",
    desc: "Pick a font and a primary color once. Every new overlay inherits them. Repeat-stream setup time drops to zero.",
    pro: true,
    gradient: "radial-gradient(ellipse at 25% 40%, rgba(0,212,204,0.14) 0%, rgba(139,26,255,0.08) 50%, transparent 70%)",
  },
  {
    title: "Automation",
    desc: "Cycle just-sold entries, code drops, and announcements on a timer, random interval, or schedule. Set it once and stream.",
    pro: true,
    gradient: "radial-gradient(ellipse at 70% 60%, rgba(255,45,107,0.14) 0%, rgba(77,93,255,0.08) 50%, transparent 70%)",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Pick a template",
    desc: "Open the gallery, pick a flash-sale card, a code drop, a sales ticker. Copy is already written.",
    gradient: "radial-gradient(ellipse at 30% 40%, rgba(255,45,107,0.18) 0%, transparent 70%)",
  },
  {
    n: "02",
    title: "Drop in your products",
    desc: "Paste a name, image, and price — or hook up your catalog. Customize colors and fonts to match your brand.",
    gradient: "radial-gradient(ellipse at 60% 50%, rgba(139,26,255,0.18) 0%, transparent 70%)",
  },
  {
    n: "03",
    title: "Paste the URL into OBS",
    desc: "One browser source. The overlay shows up on your live stream. Edits from the dashboard sync in ~2 seconds.",
    gradient: "radial-gradient(ellipse at 40% 60%, rgba(0,212,204,0.18) 0%, transparent 70%)",
  },
];

/* ─── BUILT FOR LIVE SHOPPING (positioning section) ─── */

function PositioningSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".positioning-content", { y: 30, opacity: 0 });
      gsap.to(".positioning-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/40 px-6 py-24 lg:px-20 lg:py-32"
    >
      <div className="positioning-content mx-auto max-w-[900px] text-center">
        <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta">
          Built for live shopping
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[44px]">
          Most overlay tools are made for gamers.
          <br />
          <span className="bg-gradient-to-r from-magenta to-cyan bg-clip-text text-transparent">
            PULSR is made for sellers.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text sm:text-lg">
          Every overlay is built around the things live shopping streams
          actually need on screen — products, prices, stock, codes, shipping,
          and proof that orders are landing. No follower counters. No gift
          alerts. Just commerce.
        </p>
      </div>
    </section>
  );
}

/* ─── OVERLAYS SHOWCASE ─── */

function WidgetsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-advance the mobile slider every 2s. Pauses while the user is
  // actively touching/dragging it, and respects reduced-motion.
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let paused = false;
    const onPointerDown = () => {
      paused = true;
    };
    const onPointerUp = () => {
      paused = false;
    };
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    const id = window.setInterval(() => {
      if (paused) return;
      // Only run while the slider is actually visible (i.e. mobile breakpoint).
      if (el.offsetParent === null) return;

      const slide = el.firstElementChild as HTMLElement | null;
      if (!slide) return;
      const step = slide.getBoundingClientRect().width + 16; // gap-4 = 16px

      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + step,
        behavior: "smooth",
      });
    }, 2000);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  useGSAP(
    () => {
      gsap.set(".widget-card", { y: 40, opacity: 0 });
      ScrollTrigger.batch(".widget-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "power3.out",
          }),
        start: "top 85%",
      });

      gsap.set([".widget-video", ".section-title"], { y: 30, opacity: 0 });
      gsap.to([".widget-video", ".section-title"], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  // Group overlays into pairs for the mobile slider (2 cards per slide).
  const overlayPairs: (typeof OVERLAYS)[] = [];
  for (let i = 0; i < OVERLAYS.length; i += 2) {
    overlayPairs.push(OVERLAYS.slice(i, i + 2));
  }

  return (
    <section
      ref={sectionRef}
      id="widgets"
      className="relative overflow-hidden border-t border-border/40 px-6 py-28 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,360px),minmax(0,1fr)] lg:gap-14">
          {/* Title — mobile: 1st, desktop: top right */}
          <div className="section-title order-1 text-center lg:order-none lg:col-start-2 lg:row-start-1 lg:text-left">
            <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta">
              The overlay catalog
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
              10 overlays. 34 themes.
              <br />
              One copy-paste URL.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-satoshi)] text-base text-text lg:mx-0">
              Every overlay below is on the Free plan. Pick what fits your
              stream and customize the rest.
            </p>
          </div>

          {/* Video — mobile: 2nd (between title and cards), desktop: tall left column */}
          <div className="widget-video order-2 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:sticky lg:top-24 lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c14] shadow-[0_30px_80px_-20px_rgba(139,26,255,0.25)]">
              <video
                src="/assets/demo-pulsr-app.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="block aspect-[9/16] w-full object-cover"
              />
            </div>
          </div>

          {/* Cards — mobile: 3rd (horizontal slider, 2 per slide); desktop: 2-col grid */}
          <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:mt-2">
            {/* Mobile slider */}
            <div className="lg:hidden">
              <div
                ref={sliderRef}
                className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {overlayPairs.map((pair, idx) => (
                  <div
                    key={idx}
                    className="flex w-[calc(100vw-3rem)] shrink-0 snap-center flex-col gap-4"
                  >
                    {pair.map((overlay) => (
                      <OverlayCard key={overlay.name} overlay={overlay} />
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] uppercase text-text/40">
                Swipe →
              </p>
            </div>

            {/* Desktop grid */}
            <div className="hidden gap-4 lg:grid lg:grid-cols-2">
              {OVERLAYS.map((overlay) => (
                <OverlayCard key={overlay.name} overlay={overlay} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverlayCard({
  overlay,
}: {
  overlay: (typeof OVERLAYS)[number];
}) {
  return (
    <div className="widget-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-7 transition-all duration-300 hover:border-white/[0.1]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: overlay.gradient }}
      />
      <div className="relative">
        <h3 className="font-[family-name:var(--font-satoshi)] text-[17px] font-bold text-white">
          {overlay.name}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text/70">
          {overlay.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── HOW IT WORKS ─── */

function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".how-step", { y: 30, opacity: 0 });
      ScrollTrigger.batch(".how-step", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          }),
        start: "top 85%",
      });

      gsap.set(".how-title", { y: 30, opacity: 0 });
      gsap.to(".how-title", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative overflow-hidden border-t border-border/40 px-6 py-28 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="how-title text-center">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-cyan">
            How it works
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            From dashboard to live
            <br />
            in under five minutes.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="how-step group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-7 transition-all duration-300 hover:border-white/[0.1]"
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

/* ─── FEATURES SECTION ─── */

function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".feature-card", { y: 30, opacity: 0 });
      ScrollTrigger.batch(".feature-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.07,
            ease: "power3.out",
          }),
        start: "top 85%",
      });

      gsap.set(".features-title", { y: 30, opacity: 0 });
      gsap.to(".features-title", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden border-t border-border/40 px-6 py-28 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="features-title text-center">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-cyan">
            Inside the dashboard
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            The boring stuff,
            <br />
            handled.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-satoshi)] text-base text-text">
            One copy-paste URL into OBS or TikTok LIVE Studio. Everything else
            is editable from the dashboard, even while you&apos;re streaming.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-7 transition-all duration-300 hover:border-white/[0.1]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: feature.gradient }}
              />
              {feature.pro && (
                <span className="absolute top-5 right-5 z-10 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-widest uppercase text-primary">
                  Pro
                </span>
              )}
              <div className="relative">
                <h3 className="font-[family-name:var(--font-satoshi)] text-[17px] font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text/70">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-satoshi)] text-sm font-medium text-cyan transition-colors hover:text-white"
          >
            See what&apos;s on the Free plan
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CUSTOMIZATION SECTION ─── */

function CustomizationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".custom-content", { y: 30, opacity: 0 });
      gsap.to(".custom-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-border/50 px-6 py-28 lg:px-20 lg:py-36">
      <div className="custom-content mx-auto max-w-[800px] text-center">
        <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-cyan">
          Customization
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
          Your brand,
          <br />
          <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">down to the pixel.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text">
          Colors, fonts, sizing, animation timing &mdash; every field is yours
          to edit. Curated font library plus any Google Font. Brand-aware color
          picker. No CSS required.
        </p>
      </div>
    </section>
  );
}

/* ─── COMPATIBILITY BANNER ─── */

function CompatibilityBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".compat-inner", { y: 20, opacity: 0 });
      gsap.to(".compat-inner", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-border/50 px-6 py-16 lg:px-20 lg:py-20">
      <div className="compat-inner group relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(0,212,204,0.16) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(255,45,107,0.14) 0%, transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-center justify-center gap-5 px-8 py-10 text-center sm:flex-row sm:gap-8 sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-surface/60">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-surface/60">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                <path d="M9 3v12a4 4 0 1 1-2-3.46V3h6a5 5 0 0 0 5 5v4a9 9 0 0 1-5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-satoshi)] text-lg font-bold text-white sm:text-xl">
              Works with OBS and TikTok LIVE Studio
            </h3>
            <p className="mt-1 font-[family-name:var(--font-satoshi)] text-sm text-text">
              Drop the URL in as a browser source. Streamlabs, eCamm, and any
              OBS-compatible tool will pick it up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SHADER ENDING (CTA section only — footer is below, outside) ─── */

function ShaderCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".cta-content", { y: 30, opacity: 0 });
      gsap.to(".cta-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  const textGlow =
    "drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]";

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden">
      <ShaderCanvas className="absolute inset-0 z-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-48 bg-gradient-to-b from-void to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-void to-transparent" />

      <div className="cta-content relative z-10 px-6 pt-40 pb-40 lg:px-20 lg:pt-52 lg:pb-52">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`font-[family-name:var(--font-satoshi)] text-[32px] font-extrabold leading-tight text-white sm:text-[42px] lg:text-[52px] ${textGlow}`}
          >
            Your next live
            <br />
            looks better with overlays.
          </h2>
          <p
            className={`mx-auto mt-5 max-w-md font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-white/80 ${textGlow}`}
          >
            All 10 overlays and 34 themes on the Free plan. Upgrade when you
            want to stack overlays, automate, and lose the watermark.
          </p>

          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://app.pulsr.live"
              className="btn-primary w-full rounded-xl px-10 py-4 text-center font-[family-name:var(--font-satoshi)] text-[15px] font-bold sm:w-auto"
            >
              Start free
            </a>
            <a
              href="/pricing"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-10 py-4 text-center font-[family-name:var(--font-satoshi)] text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-cyan/40 hover:text-cyan sm:w-auto"
            >
              See pricing
            </a>
          </div>

          <p className={`mt-5 font-mono text-[11px] text-white/50 ${textGlow}`}>
            No credit card required for the Free plan.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── JSON-LD ─── */

const SOFTWARE_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PULSR",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Live Shopping Overlays",
  operatingSystem: "Web (browser)",
  description:
    "On-screen overlay graphics for live shopping streams. Product cards, countdowns, code drops, sales tickers, and trust badges for OBS and TikTok LIVE Studio.",
  url: "https://pulsr.live",
  image: "https://pulsr.live/opengraph-image",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      url: "https://pulsr.live/pricing",
    },
    {
      "@type": "Offer",
      name: "Pro (monthly)",
      price: "12.99",
      priceCurrency: "USD",
      url: "https://pulsr.live/pricing",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "12.99",
        priceCurrency: "USD",
        billingDuration: "P1M",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Pro (annual)",
      price: "129.99",
      priceCurrency: "USD",
      url: "https://pulsr.live/pricing",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "129.99",
        priceCurrency: "USD",
        billingDuration: "P1Y",
        unitText: "YEAR",
      },
    },
  ],
};

/* ─── PAGE ─── */

export default function OverlaysLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_LD) }}
      />
      <SiteNav variant="transparent" />
      <ShaderHero />
      <PositioningSection />
      <WidgetsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CustomizationSection />
      <CompatibilityBanner />
      <ShaderCTA />
      <SiteFooter />
    </>
  );
}
