"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PulsrLogo from "@/components/pulsr-logo";

type Variant = "transparent" | "solid";

interface SiteNavProps {
  /**
   * "transparent" — fades into a solid bg on scroll (landing page over shader).
   * "solid"       — always solid bg (inner pages with no hero shader).
   */
  variant?: Variant;
}

const NAV_LINKS = [
  { href: "/overlays#widgets", label: "Overlays" },
  { href: "/overlays#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "https://app.pulsr.live", label: "Log in" },
];

export default function SiteNav({ variant = "solid" }: SiteNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      if (variant !== "transparent") return;
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
    { scope: navRef, dependencies: [variant] }
  );

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  // Close menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const baseClasses =
    "fixed top-0 right-0 left-0 z-50 h-[72px] backdrop-blur-xl";
  const variantClasses =
    variant === "transparent"
      ? "border-b border-transparent"
      : "border-b border-border/60 bg-[rgba(8,8,12,0.92)]";

  return (
    <>
      <nav ref={navRef} className={`${baseClasses} ${variantClasses}`}>
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-20">
          <a
            href="/overlays"
            aria-label="pulsr — overlays home"
            className="relative z-10 inline-flex items-center"
          >
            <PulsrLogo size={24} />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-satoshi)] text-[14px] font-medium text-text transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.pulsr.live"
              className="btn-primary rounded-lg px-5 py-2.5 font-[family-name:var(--font-satoshi)] text-sm font-semibold"
            >
              Start free
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-surface/60 text-white transition-colors duration-200 hover:border-white/30 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-void/80 backdrop-blur-md transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 flex min-h-[100dvh] flex-col gap-1 border-b border-border/60 bg-[rgba(8,8,12,0.98)] px-6 pt-[88px] pb-10 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border/40 py-4 font-[family-name:var(--font-satoshi)] text-lg font-semibold text-white transition-colors duration-200 hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.pulsr.live"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-6 rounded-xl px-5 py-3.5 text-center font-[family-name:var(--font-satoshi)] text-[15px] font-bold"
          >
            Start free
          </a>
        </div>
      </div>
    </>
  );
}
