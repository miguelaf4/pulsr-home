"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── DATA ─── */

const WIDGETS = [
  {
    name: "Product Spotlight",
    desc: "Showcase your current product with price, images & buy button — auto-synced with your TikTok Shop catalog.",
    color: "magenta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    preview: (
      <div className="flex items-center gap-3 rounded-xl border border-magenta/20 bg-void/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-magenta/10">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-magenta">
            <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">Serum Vitamina C</p>
          <p className="font-mono text-[10px] text-magenta">$299 MXN</p>
        </div>
        <div className="ml-auto rounded-md bg-magenta px-2 py-1 text-[9px] font-bold text-white">BUY</div>
      </div>
    ),
  },
  {
    name: "Flash Sale Timer",
    desc: "Countdown urgency widget that drives impulse purchases. Customizable duration, colors & end-action.",
    color: "cyan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9v4l2.5 2.5M12 4V2M9 2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    preview: (
      <div className="rounded-xl border border-cyan/20 bg-void/80 px-4 py-3 text-center backdrop-blur-sm">
        <p className="text-[9px] font-semibold tracking-widest uppercase text-cyan">Flash Sale Ends In</p>
        <div className="mt-1.5 flex items-center justify-center gap-1.5">
          {["04", ":", "32", ":", "17"].map((v, i) => (
            <span key={i} className={v === ":" ? "text-sm text-cyan/60" : "rounded-md bg-cyan/10 px-2 py-1 font-mono text-lg font-bold tabular-nums text-white"}>
              {v}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Stock Counter",
    desc: "Real-time inventory display — shows remaining units to create FOMO and drive faster purchasing decisions.",
    color: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 13h8v8H3zM13 3h8v8h-8zM3 3h8v8H3zM13 13h8v8h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    preview: (
      <div className="rounded-xl border border-purple/20 bg-void/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase text-purple">Stock Left</p>
          <span className="font-mono text-lg font-bold text-white">7</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-purple/10">
          <div className="h-full w-[15%] rounded-full bg-gradient-to-r from-purple to-magenta" />
        </div>
        <p className="mt-1 text-right font-mono text-[9px] text-purple/60">of 48 units</p>
      </div>
    ),
  },
  {
    name: "Sales Goal Tracker",
    desc: "Community-driven goal bar that unlocks rewards or discounts when collective purchase targets are hit.",
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 20h18M6 16v4M10 12v8M14 8v12M18 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    preview: (
      <div className="rounded-xl border border-blue/20 bg-void/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase text-blue">Sales Goal</p>
          <span className="font-mono text-xs text-white">$12,450 / $20,000</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-blue/10">
          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-blue to-cyan" />
        </div>
        <p className="mt-1.5 text-[9px] text-blue/80">Unlock free shipping at $15K!</p>
      </div>
    ),
  },
  {
    name: "Cart Alerts",
    desc: "Real-time purchase notifications — shows when viewers buy, creating social proof that converts watchers.",
    color: "magenta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    preview: (
      <div className="space-y-2">
        <div className="flex items-center gap-2.5 rounded-xl border border-magenta/20 bg-void/80 px-3 py-2 backdrop-blur-sm">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-magenta/20 text-[10px]">🛒</div>
          <div>
            <p className="text-[10px] font-medium text-white">@maria_glow just bought!</p>
            <p className="font-mono text-[8px] text-magenta/70">Serum Vitamina C × 2</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-magenta/10 bg-void/60 px-3 py-2 opacity-60 backdrop-blur-sm">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-magenta/10 text-[10px]">🛒</div>
          <div>
            <p className="text-[10px] font-medium text-white/70">@carlos_fit just bought!</p>
            <p className="font-mono text-[8px] text-magenta/40">Retinol Night Cream × 1</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Viewer Poll",
    desc: "Interactive polls that let your audience vote in real-time — perfect for product picks and engagement.",
    color: "cyan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 12h4M7 8h8M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    preview: (
      <div className="rounded-xl border border-cyan/20 bg-void/80 px-4 py-3 backdrop-blur-sm">
        <p className="text-[10px] font-semibold text-cyan">Which product next? 🗳️</p>
        <div className="mt-2 space-y-1.5">
          {[
            { label: "Vitamin C Serum", pct: 64 },
            { label: "Hyaluronic Acid", pct: 36 },
          ].map((opt) => (
            <div key={opt.label} className="relative overflow-hidden rounded-md bg-cyan/5 px-2.5 py-1.5">
              <div className="absolute inset-y-0 left-0 bg-cyan/10" style={{ width: `${opt.pct}%` }} />
              <div className="relative flex items-center justify-between">
                <span className="text-[10px] text-white">{opt.label}</span>
                <span className="font-mono text-[10px] font-bold text-cyan">{opt.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Pick your widgets",
    desc: "Browse the widget library and select the overlays that fit your live strategy.",
  },
  {
    num: "02",
    title: "Customize everything",
    desc: "Match your brand — colors, fonts, sizing, animations, position on screen.",
  },
  {
    num: "03",
    title: "Go live",
    desc: "Add your overlay URL to OBS or your streaming tool. Widgets update in real-time.",
  },
];

/* ─── COLOR MAP ─── */

const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  magenta: {
    text: "text-magenta",
    border: "border-magenta/20",
    bg: "bg-magenta/5",
    glow: "shadow-[0_0_40px_rgba(255,45,107,0.08)]",
  },
  cyan: {
    text: "text-cyan",
    border: "border-cyan/20",
    bg: "bg-cyan/5",
    glow: "shadow-[0_0_40px_rgba(0,212,204,0.08)]",
  },
  purple: {
    text: "text-purple",
    border: "border-purple/20",
    bg: "bg-purple/5",
    glow: "shadow-[0_0_40px_rgba(139,26,255,0.08)]",
  },
  blue: {
    text: "text-blue",
    border: "border-blue/20",
    bg: "bg-blue/5",
    glow: "shadow-[0_0_40px_rgba(77,93,255,0.08)]",
  },
};

/* ─── NAV ─── */

function SaaSNav() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { backgroundColor: "rgba(8,8,12,0)" },
        {
          backgroundColor: "rgba(8,8,12,0.92)",
          borderBottomColor: "rgba(42,42,60,1)",
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "80px top",
            end: "200px top",
            scrub: true,
          },
        }
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 right-0 left-0 z-50 h-[72px] border-b border-transparent backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-20">
        <a href="/" className="relative z-10 flex items-center gap-2.5">
          <svg viewBox="0 0 320 60" fill="none" className="h-8 w-auto">
            <path
              d="M0 30 Q8 30 12 15 Q16 0 20 30 Q24 60 28 30 Q32 8 36 30 Q40 48 44 30 L48 30"
              stroke="#FF2D6B"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <text
              x="62"
              y="43"
              fontFamily="var(--font-syne), Syne, sans-serif"
              fontWeight="800"
              fontSize="44"
              fill="#F5F5FA"
              letterSpacing="4"
            >
              PULSR
            </text>
          </svg>
          <span className="hidden rounded-md border border-cyan/30 bg-cyan/5 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-cyan sm:inline-block">
            OVERLAYS
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a href="#widgets" className="group relative font-[family-name:var(--font-outfit)] text-[15px] font-medium text-text transition-colors duration-200 hover:text-white">
            Widgets
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-magenta transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#how-it-works" className="group relative font-[family-name:var(--font-outfit)] text-[15px] font-medium text-text transition-colors duration-200 hover:text-white">
            How It Works
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-magenta transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-magenta px-6 py-2.5 font-[family-name:var(--font-outfit)] text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98]"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const magentaRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isTouch = !window.matchMedia("(pointer: fine)").matches;

      // Blob drift
      if (magentaRef.current) {
        gsap.to(magentaRef.current, {
          x: isTouch ? 40 : 20,
          y: isTouch ? -30 : 15,
          duration: isTouch ? 7 : 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
      if (blueRef.current) {
        gsap.to(blueRef.current, {
          x: isTouch ? -50 : -30,
          y: isTouch ? 25 : -15,
          duration: isTouch ? 9 : 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        });
      }

      // Text entrance
      gsap.set(".hero-h1", { y: 50, opacity: 0 });
      gsap.set(".hero-p", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { y: 20, opacity: 0 });
      gsap.set(".hero-badge", { scale: 0.8, opacity: 0 });
      gsap.set(".hero-phone-wrap", { y: 60, opacity: 0, rotateY: 8 });
      gsap.set(".hero-widget-float", { scale: 0.7, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(".hero-badge", { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" })
        .to(".hero-h1", { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.2")
        .to(".hero-p", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .to(".hero-cta", { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")
        .to(".hero-phone-wrap", { y: 0, opacity: 1, rotateY: 0, duration: 0.8, ease: "power3.out" }, 0.3)
        .to(".hero-widget-float", { scale: 1, opacity: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.4)" }, "-=0.3");

      // Scroll fade
      gsap.to(".hero-inner", {
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
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-void" />
        <div
          ref={magentaRef}
          className="pointer-events-none absolute top-[25%] left-[35%] h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse,rgba(255,45,107,0.12)_0%,transparent_70%)] blur-[80px]" />
        </div>
        <div
          ref={blueRef}
          className="pointer-events-none absolute top-[60%] left-[65%] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse,rgba(0,212,204,0.08)_0%,transparent_70%)] blur-[60px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,8,12,0.7)_100%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,200,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,216,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-inner relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_340px] lg:gap-16 lg:px-20 lg:py-0">
        {/* Left */}
        <div>
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            <span className="font-mono text-[11px] font-medium tracking-wider text-cyan">
              Built for TikTok Shop Lives
            </span>
          </div>

          <h1 className="hero-h1 mt-6 font-[family-name:var(--font-syne)] text-[36px] font-extrabold leading-[1.08] text-white sm:text-[48px] lg:text-[56px]">
            Overlay widgets
            <br />
            that make your
            <br />
            <span className="bg-gradient-to-r from-magenta via-purple to-cyan bg-clip-text text-transparent">
              lives sell more.
            </span>
          </h1>

          <p className="hero-p mt-5 max-w-lg font-[family-name:var(--font-outfit)] text-base leading-relaxed text-text lg:text-lg">
            Premium, fully customizable overlay widgets designed exclusively for TikTok Shop live streams. Product cards, timers, alerts, polls — everything you need to convert viewers into buyers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="hero-cta rounded-lg bg-magenta px-8 py-3.5 text-center font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98]"
            >
              Get Early Access
            </a>
            <a
              href="#widgets"
              className="hero-cta group flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 font-[family-name:var(--font-outfit)] text-[15px] font-medium text-white transition-all duration-200 hover:border-cyan hover:text-cyan"
            >
              <span>See Widgets</span>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
                <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Phone mockup with floating widgets */}
        <div className="relative flex justify-center">
          <div className="hero-phone-wrap relative w-[220px] sm:w-[240px] lg:w-[260px]">
            {/* Floating widget previews */}
            <div className="hero-widget-float absolute -left-32 top-[10%] z-20 w-48 sm:-left-36 lg:-left-44">
              <div className="rounded-xl border border-magenta/20 bg-surface/80 px-3 py-2 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-magenta/10">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-magenta">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-white">Glow Serum</p>
                    <p className="font-mono text-[9px] text-magenta">$299</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-widget-float absolute -right-28 top-[35%] z-20 w-40 sm:-right-32 lg:-right-40">
              <div className="rounded-xl border border-cyan/20 bg-surface/80 px-3 py-2 shadow-lg backdrop-blur-md">
                <p className="text-[8px] font-semibold tracking-widest uppercase text-cyan">Flash Sale</p>
                <div className="mt-1 flex items-center gap-1">
                  {["04", ":", "32"].map((v, i) => (
                    <span key={i} className={v === ":" ? "text-[10px] text-cyan/60" : "rounded bg-cyan/10 px-1.5 py-0.5 font-mono text-xs font-bold text-white"}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-widget-float absolute -left-24 bottom-[18%] z-20 w-44 sm:-left-28 lg:-left-36">
              <div className="flex items-center gap-2 rounded-xl border border-purple/20 bg-surface/80 px-3 py-2 shadow-lg backdrop-blur-md">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple/20 text-[9px]">🛒</div>
                <div>
                  <p className="text-[9px] font-medium text-white">@ana just bought!</p>
                  <p className="font-mono text-[8px] text-purple/70">Glow Serum × 2</p>
                </div>
              </div>
            </div>

            {/* Phone frame */}
            <div className="overflow-hidden rounded-[32px] border-2 border-surface-2/80 bg-surface shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-center bg-surface-2 py-2">
                <div className="h-[18px] w-[80px] rounded-full bg-void" />
              </div>
              <div className="relative flex aspect-[9/16] items-center justify-center overflow-hidden bg-gradient-to-b from-surface via-void/80 to-surface">
                {/* Simulated live content */}
                <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 via-void to-cyan/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-magenta/20 to-purple/20 backdrop-blur-sm" />
                  <div className="h-2 w-24 rounded-full bg-surface-2" />
                  <div className="h-2 w-16 rounded-full bg-surface-2/50" />
                </div>

                {/* LIVE badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-md bg-magenta/90 px-2.5 py-1">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  <span className="font-mono text-[10px] font-medium tracking-wider text-white">LIVE</span>
                </div>

                <div className="absolute top-4 right-4 rounded-md bg-void/60 px-2 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[10px] text-white">3,842</span>
                </div>

                {/* Overlay grid hint */}
                <div className="pointer-events-none absolute inset-0 border-2 border-dashed border-cyan/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void/50" />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 left-[10%] h-6 w-[80%] rounded-full bg-magenta/5 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WIDGETS SHOWCASE ─── */

function WidgetsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".widget-card", { y: 40, opacity: 0 });
      ScrollTrigger.batch(".widget-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          }),
        start: "top 85%",
      });

      gsap.set(".section-title", { y: 30, opacity: 0 });
      gsap.to(".section-title", {
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
    <section ref={sectionRef} id="widgets" className="relative overflow-hidden px-6 py-28 lg:px-20 lg:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,45,107,0.04)_0%,transparent_70%)] blur-[60px]" />

      <div className="mx-auto max-w-[1200px]">
        <div className="section-title text-center">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta">
            Widget Library
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            Every widget your
            <br />
            live stream needs
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-outfit)] text-base text-text">
            Purpose-built for TikTok Shop. Each widget is designed to increase engagement and drive purchases during your live.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WIDGETS.map((widget) => {
            const c = colorMap[widget.color];
            return (
              <div
                key={widget.name}
                className={`widget-card group rounded-2xl border ${c.border} ${c.bg} p-6 transition-all duration-300 hover:${c.glow} hover:border-opacity-40`}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                    {widget.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                    {widget.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 font-[family-name:var(--font-outfit)] text-sm leading-relaxed text-text">
                  {widget.desc}
                </p>

                {/* Mini preview */}
                <div className="mt-5">{widget.preview}</div>
              </div>
            );
          })}
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
      gsap.set(".custom-item", { x: -30, opacity: 0 });
      ScrollTrigger.batch(".custom-item", {
        onEnter: (batch) =>
          gsap.to(batch, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          }),
        start: "top 85%",
      });
    },
    { scope: sectionRef }
  );

  const features = [
    { icon: "🎨", title: "Brand Colors & Fonts", desc: "Match your exact brand palette and typography across every widget." },
    { icon: "📐", title: "Drag & Drop Positioning", desc: "Place widgets anywhere on the screen — pixel-perfect control." },
    { icon: "✨", title: "Animation Presets", desc: "Slide, fade, bounce, pulse — choose how your widgets appear and transition." },
    { icon: "📱", title: "Real-time Preview", desc: "See exactly how your overlay looks before going live." },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-border/50 px-6 py-28 lg:px-20 lg:py-36">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left — Visual */}
        <div className="relative flex justify-center">
          {/* Mock editor UI */}
          <div className="w-full max-w-[440px] overflow-hidden rounded-2xl border border-border/60 bg-surface/50 shadow-2xl backdrop-blur-sm">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border/40 bg-dark/80 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-magenta/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-cyan/40" />
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 font-mono text-[10px] text-muted">widget-editor.pulsr</span>
            </div>

            {/* Editor content */}
            <div className="grid grid-cols-[140px_1fr] divide-x divide-border/30">
              {/* Sidebar */}
              <div className="space-y-1 bg-dark/40 p-3">
                <p className="mb-2 font-mono text-[9px] font-medium tracking-widest uppercase text-muted">Properties</p>
                {[
                  { label: "Background", value: "#0E0E14" },
                  { label: "Accent", value: "#FF2D6B" },
                  { label: "Border", value: "8px" },
                  { label: "Font Size", value: "14px" },
                  { label: "Animation", value: "slide-up" },
                  { label: "Opacity", value: "95%" },
                ].map((prop) => (
                  <div key={prop.label} className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-surface/40">
                    <span className="text-[10px] text-muted">{prop.label}</span>
                    <span className="font-mono text-[10px] text-white">{prop.value}</span>
                  </div>
                ))}
              </div>

              {/* Canvas */}
              <div className="relative flex items-center justify-center bg-void/60 p-6">
                <div className="w-full">
                  {/* Widget being edited */}
                  <div className="rounded-xl border-2 border-dashed border-magenta/40 p-1">
                    <div className="flex items-center gap-3 rounded-lg border border-magenta/20 bg-void/80 px-4 py-3 backdrop-blur-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-magenta/10">
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-magenta">
                          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-white">Glow Serum Pro</p>
                        <p className="font-mono text-[10px] text-magenta">$349 MXN</p>
                      </div>
                      <div className="ml-auto rounded-md bg-magenta px-2.5 py-1 text-[10px] font-bold text-white">
                        BUY
                      </div>
                    </div>
                  </div>

                  {/* Resize handles */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-magenta/60" />
                    <div className="h-1.5 w-1.5 rounded-full bg-magenta/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Text + features */}
        <div>
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-cyan">
            Full Customization
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px]">
            Your brand, your rules
          </h2>
          <p className="mt-4 max-w-md font-[family-name:var(--font-outfit)] text-base text-text">
            Every widget is fully customizable. Match your brand identity down to the last pixel — no coding required.
          </p>

          <div className="mt-8 space-y-5">
            {features.map((f) => (
              <div key={f.title} className="custom-item flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-surface/60 text-base">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-syne)] text-[15px] font-bold text-white">{f.title}</h4>
                  <p className="mt-0.5 font-[family-name:var(--font-outfit)] text-sm text-text">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */

function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".step-card", { y: 40, opacity: 0 });
      ScrollTrigger.batch(".step-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          }),
        start: "top 85%",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="how-it-works" className="relative overflow-hidden border-t border-border/50 px-6 py-28 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-purple">
            How It Works
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            Live in 3 steps
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="step-card group relative rounded-2xl border border-border/40 bg-surface/30 p-8 transition-all duration-300 hover:border-magenta/20 hover:bg-surface/50">
              {/* Step number */}
              <span className="font-mono text-[48px] font-bold leading-none text-border/40 transition-colors group-hover:text-magenta/20">
                {step.num}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-syne)] text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-outfit)] text-sm leading-relaxed text-text">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */

function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");

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

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden px-6 py-28 lg:px-20 lg:py-36">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,45,107,0.06)_0%,transparent_70%)] blur-[60px]" />

      <div className="cta-content relative mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-magenta/20 bg-magenta/5 px-4 py-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" />
          <span className="font-mono text-[11px] font-medium tracking-wider text-magenta">Early Access</span>
        </div>

        <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
          Ready to level up
          <br />
          your TikTok lives?
        </h2>
        <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-outfit)] text-base text-text">
          Join the waitlist for early access. Be among the first to get premium overlay widgets built exclusively for TikTok Shop.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="flex-1 rounded-lg border border-border bg-surface/60 px-5 py-3.5 font-[family-name:var(--font-outfit)] text-sm text-white outline-none placeholder:text-muted transition-colors focus:border-magenta/50 focus:ring-1 focus:ring-magenta/20"
          />
          <button
            type="submit"
            className="rounded-lg bg-magenta px-8 py-3.5 font-[family-name:var(--font-outfit)] text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98]"
          >
            Join Waitlist
          </button>
        </form>

        <p className="mt-4 font-mono text-[11px] text-muted">
          Free during beta. No credit card required.
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */

function SaaSFooter() {
  return (
    <footer className="border-t border-border bg-dark px-6 py-14 lg:px-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 220 36" fill="none" className="h-7 w-auto">
              <path
                d="M0 18 Q5 18 7 9 Q9 0 12 18 Q14 36 17 18 Q19 5 21 18 Q23 28 26 18 L28 18"
                stroke="#FF2D6B"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <text
                x="38"
                y="26"
                fontFamily="var(--font-syne), Syne, sans-serif"
                fontWeight="800"
                fontSize="28"
                fill="#F5F5FA"
                letterSpacing="3"
              >
                PULSR
              </text>
            </svg>
            <span className="rounded-md border border-cyan/30 bg-cyan/5 px-2 py-0.5 font-mono text-[9px] font-medium tracking-wider text-cyan">
              OVERLAYS
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted">
            Premium widgets for TikTok Shop Lives
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#widgets" className="font-[family-name:var(--font-outfit)] text-sm text-muted transition-colors hover:text-white">
            Widgets
          </a>
          <a href="#how-it-works" className="font-[family-name:var(--font-outfit)] text-sm text-muted transition-colors hover:text-white">
            How It Works
          </a>
          <a href="/privacy-policy" className="font-[family-name:var(--font-outfit)] text-sm text-muted transition-colors hover:text-white">
            Privacy
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] border-t border-border pt-6 text-center">
        <p className="font-mono text-[11px] tracking-[0.1em] text-border">
          © 2026 PULSR
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */

export default function OverlaysLanding() {
  return (
    <>
      <SaaSNav />
      <HeroSection />
      <WidgetsSection />
      <CustomizationSection />
      <HowItWorksSection />
      <CTASection />
      <SaaSFooter />
    </>
  );
}
