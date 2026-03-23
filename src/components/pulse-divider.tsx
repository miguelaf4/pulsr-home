"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function PulseDivider() {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const path = ref.current?.querySelector("path");
    if (!path) return;

    gsap.fromTo(
      path,
      { strokeDashoffset: 1200 },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
      <svg
        ref={ref}
        viewBox="0 0 1200 40"
        fill="none"
        className="w-full"
        preserveAspectRatio="none"
      >
        <path
          d={generateWavePath(1200, 40)}
          stroke="rgba(255,45,107,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="1200"
          strokeDashoffset="1200"
        />
      </svg>
    </div>
  );
}

function generateWavePath(width: number, height: number): string {
  const mid = height / 2;
  const segments = 20;
  const segWidth = width / segments;
  let d = `M0 ${mid}`;

  for (let i = 0; i < segments; i++) {
    const x1 = i * segWidth + segWidth * 0.25;
    const x2 = i * segWidth + segWidth * 0.75;
    const x3 = (i + 1) * segWidth;
    const amp = i % 3 === 0 ? mid * 0.8 : mid * 0.4;
    const dir = i % 2 === 0 ? -1 : 1;
    d += ` Q${x1} ${mid + dir * amp} ${x2} ${mid} Q${x2} ${mid} ${x3} ${mid}`;
  }

  return d;
}
