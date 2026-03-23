import gsap from "gsap";

export const fadeIn = (
  target: gsap.TweenTarget,
  vars?: gsap.TweenVars
): gsap.core.Tween =>
  gsap.from(target, {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    ...vars,
  });

export const slideUp = (
  target: gsap.TweenTarget,
  vars?: gsap.TweenVars
): gsap.core.Tween =>
  gsap.from(target, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    ...vars,
  });

export const staggerChildren = (
  target: gsap.TweenTarget,
  vars?: gsap.TweenVars
): gsap.core.Tween =>
  gsap.from(target, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out",
    ...vars,
  });

export const parallax = (
  target: gsap.TweenTarget,
  speed: number = 0.5,
  vars?: gsap.TweenVars
): gsap.core.Tween =>
  gsap.to(target, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: target as gsap.DOMTarget,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    ...vars,
  });
