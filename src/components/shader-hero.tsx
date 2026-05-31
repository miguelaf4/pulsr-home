"use client";

import ShaderCanvas from "./shader-canvas";

export default function ShaderHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ShaderCanvas className="absolute inset-0 z-0" />

      {/* Fade to void at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-void to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          <span className="font-mono text-[11px] font-medium tracking-wider text-cyan">
            TikTok Shop overlays
          </span>
        </div>

        <h1 className="mt-8 font-[family-name:var(--font-satoshi)] text-[40px] font-extrabold leading-[1.05] text-white sm:text-[56px] lg:text-[72px]">
          Sell more on every
          <br />
          <span className="bg-gradient-to-r from-magenta via-purple to-cyan bg-clip-text text-transparent">
            live shopping stream.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-satoshi)] text-base leading-relaxed text-text/90 sm:text-lg">
          TikTok Shop overlays built for live commerce. Drop product cards,
          countdowns, and code drops into TikTok LIVE Studio or OBS in seconds.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://app.pulsr.live"
            className="btn-primary rounded-lg px-8 py-3.5 font-[family-name:var(--font-satoshi)] text-[15px] font-semibold"
          >
            Start free
          </a>
          <a
            href="#widgets"
            className="group flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 font-[family-name:var(--font-satoshi)] text-[15px] font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-cyan/40 hover:text-cyan"
          >
            <span>See the overlays</span>
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="mt-6 font-mono text-[11px] text-white/50">
          Free plan &mdash; no credit card.
        </p>
      </div>
    </section>
  );
}
