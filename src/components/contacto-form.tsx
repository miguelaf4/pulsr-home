"use client";

import { useState } from "react";

export default function ContactoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-white/5 bg-surface p-8 text-center sm:p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-magenta/20 text-magenta">
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="mt-6 font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-3 max-w-[300px] font-[family-name:var(--font-outfit)] text-text">
          Gracias por escribirnos. Nuestro equipo revisará tu información y se pondrá en contacto muy pronto.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-wide text-magenta hover:text-magenta-hover transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/5 bg-surface p-6 sm:p-10">
      <div className="mb-8">
        <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white sm:text-3xl">
          Empieza a vender por lives hoy
        </h2>
        <p className="mt-3 font-[family-name:var(--font-outfit)] text-[15px] text-text">
          Déjanos tus datos de contacto y cuéntanos un poco sobre tus objetivos con el Live Commerce.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-[family-name:var(--font-outfit)]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white/90">
              Nombre completo <span className="text-magenta">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Juan Pérez"
              className="rounded-xl border border-white/10 bg-void/50 px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-muted focus:border-magenta/50 focus:bg-void focus:ring-1 focus:ring-magenta/50"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/90">
              Email corporativo <span className="text-magenta">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="juan@empresa.com"
              className="rounded-xl border border-white/10 bg-void/50 px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-muted focus:border-magenta/50 focus:bg-void focus:ring-1 focus:ring-magenta/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-medium text-white/90">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              placeholder="Nombre de tu marca"
              className="rounded-xl border border-white/10 bg-void/50 px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-muted focus:border-magenta/50 focus:bg-void focus:ring-1 focus:ring-magenta/50"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-white/90">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+52 55 1234 5678"
              className="rounded-xl border border-white/10 bg-void/50 px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-muted focus:border-magenta/50 focus:bg-void focus:ring-1 focus:ring-magenta/50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-white/90">
            ¿En qué podemos ayudarte? <span className="text-magenta">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Cuéntanos brevemente sobre tus metas en e-commerce y volumen de ventas..."
            className="resize-y rounded-xl border border-white/10 bg-void/50 px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-muted focus:border-magenta/50 focus:bg-void focus:ring-1 focus:ring-magenta/50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-4 flex w-full items-center justify-center rounded-xl bg-magenta py-4 font-semibold text-white transition-all duration-200 hover:bg-magenta-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100"
        >
          {status === "submitting" ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            "Enviar mensaje"
          )}
        </button>
      </form>
    </div>
  );
}
