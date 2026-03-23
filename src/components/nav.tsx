"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NAV_LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Talento", href: "/#talento" },
  { label: "Contacto", href: "/contacto" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useGSAP(
    () => {
      // Nav background fades in after scrolling past hero
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
    <>
      <nav
        ref={navRef}
        className="fixed top-0 right-0 left-0 z-50 h-[72px] border-b border-transparent backdrop-blur-xl"
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-20">
          {/* Logo */}
          <a href="/" className="relative z-10 flex items-center gap-2">
            <svg
              viewBox="0 0 320 60"
              fill="none"
              className="h-8 w-auto"
            >
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
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-[family-name:var(--font-outfit)] text-[15px] font-medium text-text transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-magenta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-magenta px-6 py-2.5 font-[family-name:var(--font-outfit)] text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-magenta-hover hover:shadow-[0_0_30px_rgba(255,45,107,0.3)] active:scale-[0.98]"
            >
              Solicita tu análisis gratis
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[2.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-void/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white transition-colors hover:text-magenta"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendar.app.google/vTswBoXFYyKLH3TF7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-lg bg-magenta px-8 py-3 font-[family-name:var(--font-outfit)] text-base font-semibold text-white transition-all hover:bg-magenta-hover"
          >
            Solicita tu análisis gratis
          </a>
        </div>
      </div>
    </>
  );
}
