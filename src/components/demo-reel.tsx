"use client";

import { useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function DemoReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  useGSAP(
    () => {
      gsap.set(".reel-label", { y: 15, opacity: 0 });
      gsap.set(".reel-frame", { scale: 0.98, opacity: 0 });

      gsap.to(".reel-label", {
        y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".reel-label", start: "top 85%", once: true },
      });

      gsap.to(".reel-frame", {
        scale: 1, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".reel-frame", start: "top 85%", once: true },
      });
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="demo-reel"
      className="relative border-t border-border bg-void py-20 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <span className="reel-label mb-8 block text-center font-mono text-xs font-medium tracking-[0.25em] uppercase text-muted">
          Demo Reel — Producción PULSR
        </span>

        {/* Video frame */}
        <div className="reel-frame group relative overflow-hidden rounded-xl border border-border bg-surface">
          <div className="relative aspect-video bg-void">
            <video
              ref={videoRef}
              src="/assets/pulsr-teaser-full-sound.mp4"
              className="h-full w-full object-cover"
              playsInline
              preload="metadata"
              onClick={togglePlay}
            />

            {/* Play/pause overlay */}
            <button
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center bg-void/20 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-magenta/60 bg-void/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-magenta hover:shadow-[0_0_40px_rgba(255,45,107,0.3)]">
                <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-7 w-7">
                  {isPlaying ? (
                    <>
                      <rect x="7" y="5" width="3" height="14" rx="1" fill="white" />
                      <rect x="14" y="5" width="3" height="14" rx="1" fill="white" />
                    </>
                  ) : (
                    <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" fill="white" />
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
