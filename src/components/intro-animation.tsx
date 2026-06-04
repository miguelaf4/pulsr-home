"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Skip on reduced motion or repeat visits
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasVisited = sessionStorage.getItem("pulsr-visited");

    if (prefersReducedMotion || hasVisited) {
      setShouldAnimate(false);
      onComplete();
    } else {
      sessionStorage.setItem("pulsr-visited", "1");
    }
  }, [onComplete]);

  useGSAP(
    () => {
      if (!shouldAnimate) return;

      const tl = gsap.timeline({
        onComplete,
      });

      // 1. Black screen pause
      tl.set(overlayRef.current, { opacity: 1 });

      // 2. Logo mark scales/fades in
      tl.fromTo(
        ".intro-mark",
        { opacity: 0, scale: 0.7, y: 8 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.2
      );

      // 3. Wordmark fades in
      tl.from(
        ".intro-wordmark",
        {
          opacity: 0,
          x: -10,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // 4. Hold briefly
      tl.to({}, { duration: 0.3 });

      // 5. Scale down and fade overlay
      tl.to(".intro-logo-group", {
        scale: 0.6,
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.2"
      );
    },
    { scope: overlayRef, dependencies: [shouldAnimate] }
  );

  if (!shouldAnimate) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
      style={{ pointerEvents: "none" }}
    >
      <div className="intro-logo-group flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo-pulsr-agency.svg"
          alt=""
          aria-hidden="true"
          className="intro-mark h-16 w-auto"
        />
        <span className="intro-wordmark font-[family-name:var(--font-satoshi)] text-4xl font-extrabold tracking-[0.15em] text-white">
          PULSR
        </span>
      </div>
    </div>
  );
}
