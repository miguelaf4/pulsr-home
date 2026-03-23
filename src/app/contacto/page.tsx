"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactoBanner from "@/components/contacto-banner";
import ContactoForm from "@/components/contacto-form";
import PulseDivider from "@/components/pulse-divider";

export default function ContactoPage() {
  return (
    <>
      <Nav />
      {/* Background with subtle gradient */}
      <main className="relative min-h-screen bg-void pt-[72px] overflow-x-hidden">
        {/* Decorative background grid/gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,45,107,0.06)_0%,transparent_70%)] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "256px 256px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-12 lg:px-20 lg:py-20">
          {/* Header section */}
          <div className="mx-auto max-w-3xl text-center">
             <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-magenta">
                Contacto
             </span>
             <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
                Hablemos de tu marca
             </h1>
             <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-outfit)] text-lg text-text">
               Llena el formulario abajo o reserva un espacio en nuestro calendario para un análisis inicial.
             </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px]">
            {/* Left Column: Form */}
            <div>
              <ContactoForm />
            </div>

            {/* Right Column: Banner / Additional Info */}
            <div className="flex flex-col gap-6">
              <ContactoBanner />
              
              {/* Extra contact methods just in case */}
              <div className="rounded-2xl border border-white/5 bg-surface/50 p-6 backdrop-blur-md">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                  Información Directa
                </h3>
                <div className="mt-6 flex flex-col gap-5 font-[family-name:var(--font-outfit)]">
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a href="mailto:miguel@pulsr.live" className="mt-1 block text-base text-white transition-colors hover:text-magenta">
                      miguel@pulsr.live
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Ubicación</p>
                    <p className="mt-1 text-base leading-relaxed text-white">
                      Escandón, CDMX<br />
                      México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PulseDivider />
      <Footer />
    </>
  );
}
