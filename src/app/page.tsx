"use client";

import { useState, useCallback } from "react";
import IntroAnimation from "@/components/intro-animation";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import PulseDivider from "@/components/pulse-divider";
import Services from "@/components/services";
import DemoReel from "@/components/demo-reel";
import Process from "@/components/process";
import Categories from "@/components/categories";
import FreeAnalysis from "@/components/free-analysis";
import Talent from "@/components/talent";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <IntroAnimation onComplete={handleIntroComplete} />

      <div
        className={`transition-opacity duration-500 ${introComplete ? "opacity-100" : "opacity-0"}`}
      >
        <Nav />
        <Hero ready={introComplete} />
        <PulseDivider />
        <Stats />
        <Services />
        <DemoReel />
        <PulseDivider />
        <Categories />
        <FreeAnalysis />
        <Process />
        <Talent />
        <FinalCta />
        <Footer />
      </div>
    </>
  );
}
