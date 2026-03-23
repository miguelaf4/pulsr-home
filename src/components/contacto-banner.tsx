import React from 'react';

export default function ContactoBanner() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-magenta/20 bg-magenta/5 p-8 transition-all duration-300 hover:border-magenta/40 hover:bg-magenta/10">
      {/* Decorative inner glow */}
      <div className="absolute top-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-magenta/20 blur-2xl transition-all duration-500 group-hover:bg-magenta/30" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-magenta/20 text-magenta">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white">
            Análisis Gratuito
          </h3>
        </div>
        
        <p className="mt-4 font-[family-name:var(--font-outfit)] text-[15px] leading-relaxed text-text">
          Obtén un reporte estructurado de los números en tu categoría de TikTok antes de invertir un peso.
        </p>
        
        <a
          href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-between rounded-xl bg-magenta px-5 py-3 font-[family-name:var(--font-outfit)] text-sm font-semibold text-white transition-all duration-200 hover:bg-magenta-hover active:scale-[0.98]"
        >
          <span>Agendar llamada de 30m</span>
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
