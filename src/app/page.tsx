"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShaderHero from "@/components/shader-hero";
import ShaderCanvas from "@/components/shader-canvas";

/* ─── DATA ─── */

const OVERLAYS = [
  { name: "Product Spotlight", desc: "Highlight what you're selling with a sleek, always-visible product card.", gradient: "radial-gradient(ellipse at 30% 50%, rgba(255,45,107,0.18) 0%, transparent 70%)" },
  { name: "Flash Sale Timer", desc: "Create urgency with a live countdown your audience can't ignore.", gradient: "radial-gradient(ellipse at 70% 40%, rgba(0,212,204,0.18) 0%, transparent 70%)" },
  { name: "Stock Counter", desc: "Show remaining inventory in real time to drive faster decisions.", gradient: "radial-gradient(ellipse at 40% 60%, rgba(139,26,255,0.18) 0%, transparent 70%)" },
  { name: "Sales Goal Tracker", desc: "Rally your audience around a shared goal that builds momentum.", gradient: "radial-gradient(ellipse at 60% 30%, rgba(77,93,255,0.18) 0%, transparent 70%)" },
  { name: "Cart Alerts", desc: "Social proof that shows purchases happening live on stream.", gradient: "radial-gradient(ellipse at 25% 40%, rgba(255,45,107,0.14) 0%, rgba(139,26,255,0.08) 50%, transparent 70%)" },
  { name: "Viewer Poll", desc: "Let your audience interact and vote — engagement that converts.", gradient: "radial-gradient(ellipse at 70% 60%, rgba(0,212,204,0.14) 0%, rgba(77,93,255,0.08) 50%, transparent 70%)" },
];

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
              fontFamily="var(--font-satoshi), Satoshi, sans-serif"
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
          <a href="#widgets" className="group relative font-[family-name:var(--font-satoshi)] text-[15px] font-medium text-text transition-colors duration-200 hover:text-white">
            Overlays
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-magenta transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-magenta px-6 py-2.5 font-[family-name:var(--font-satoshi)] text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98]"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}


/* ─── OVERLAYS SHOWCASE ─── */

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
      <div className="mx-auto max-w-[1200px]">
        <div className="section-title text-center">
          <span className="inline-block font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-magenta">
            Overlay Collection
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-satoshi)] text-[28px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            Curated overlays that
            <br />
            drive engagement
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-satoshi)] text-base text-text">
            A growing collection of overlays crafted to keep your audience engaged and buying while you sell live.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OVERLAYS.map((overlay) => (
            <div
              key={overlay.name}
              className="widget-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-7 transition-all duration-300 hover:border-white/[0.1]"
            >
              {/* Gradient spotlight */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: overlay.gradient }}
              />

              {/* Content */}
              <div className="relative">
                <h3 className="font-[family-name:var(--font-satoshi)] text-[17px] font-bold text-white">
                  {overlay.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-satoshi)] text-sm leading-relaxed text-text/70">
                  {overlay.desc}
                </p>
              </div>
            </div>
          ))}
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
          Overlays that adapt
          <br />
          <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">to your brand.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text">
          Colors, fonts, layout, animations — every overlay is fully customizable to match your identity. No coding required. Just make it yours.
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
      <div className="compat-inner mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-5 rounded-2xl border border-border/40 bg-surface/30 px-8 py-10 text-center sm:flex-row sm:gap-8 sm:text-left">
        <div className="flex items-center gap-4">
          {/* OBS icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-surface/60">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          {/* TikTok Live Studio icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-surface/60">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
              <path d="M9 3v12a4 4 0 1 1-2-3.46V3h6a5 5 0 0 0 5 5v4a9 9 0 0 1-5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-satoshi)] text-lg font-bold text-white sm:text-xl">
            Compatible with OBS and TikTok Live Studio
          </h3>
          <p className="mt-1 font-[family-name:var(--font-satoshi)] text-sm text-text">
            Add your overlay URL as a browser source. Works with any streaming tool.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── SHADER ENDING (CTA + FOOTER) ─── */

function ShaderEnding() {
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

  const textGlow = "drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]";

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden">
      {/* Shader background */}
      <ShaderCanvas className="absolute inset-0 z-0" />

      {/* Top fade from void into shader */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-48 bg-gradient-to-b from-void to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {/* CTA */}
        <div className="cta-content px-6 pt-40 pb-28 lg:px-20 lg:pt-52 lg:pb-36">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`font-[family-name:var(--font-satoshi)] text-[32px] font-extrabold leading-tight text-white sm:text-[42px] lg:text-[52px] ${textGlow}`}>
              Ready to sell more
              <br />
              on your next live?
            </h2>
            <p className={`mx-auto mt-5 max-w-md font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-white/70 ${textGlow}`}>
              Join the waitlist and be among the first to access overlays built to perform.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 rounded-xl border border-white/15 bg-black/40 px-6 py-4 font-[family-name:var(--font-satoshi)] text-[15px] text-white outline-none placeholder:text-white/30 backdrop-blur-md transition-colors focus:border-magenta/50 focus:ring-1 focus:ring-magenta/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-magenta px-10 py-4 font-[family-name:var(--font-satoshi)] text-[15px] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_40px_rgba(255,45,107,0.35)] active:scale-[0.98]"
              >
                Get Early Access
              </button>
            </form>

            <p className={`mt-5 font-mono text-[11px] text-white/40 ${textGlow}`}>
              Free during beta. No credit card required.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] px-6 py-14 lg:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <div className={`flex items-center gap-2.5 ${textGlow}`}>
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
                    fontFamily="var(--font-satoshi), Satoshi, sans-serif"
                    fontWeight="800"
                    fontSize="28"
                    fill="#F5F5FA"
                    letterSpacing="3"
                  >
                    PULSR
                  </text>
                </svg>
                <span className="rounded-md border border-cyan/30 bg-cyan/5 px-2 py-0.5 font-mono text-[9px] font-medium tracking-wider text-cyan backdrop-blur-sm">
                  OVERLAYS
                </span>
              </div>
              <span className={`font-mono text-[11px] tracking-[0.15em] uppercase text-white ${textGlow}`}>
                Premium overlays for TikTok Shop Lives
              </span>
            </div>

            <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${textGlow}`}>
              <a href="#widgets" className="font-[family-name:var(--font-satoshi)] text-sm text-white transition-colors hover:text-white">
                Overlays
              </a>
              <a href="/terms" className="font-[family-name:var(--font-satoshi)] text-sm text-white transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="/refunds" className="font-[family-name:var(--font-satoshi)] text-sm text-white transition-colors hover:text-white">
                Refund Policy
              </a>
              <a href="/privacy" className="font-[family-name:var(--font-satoshi)] text-sm text-white transition-colors hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[1200px] border-t border-white/[0.06] pt-6 text-center">
            <p className={`font-mono text-[11px] tracking-[0.1em] text-white ${textGlow}`}>
              © 2026 PULSR
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */

export default function OverlaysLanding() {
  return (
    <>
      <SaaSNav />
      <ShaderHero />
      <WidgetsSection />
      <CustomizationSection />
      <CompatibilityBanner />
      <ShaderEnding />
    </>
  );
}
