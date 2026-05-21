"use client";

import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";

/* ─── SHADERS ─── */

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_speed;
  uniform sampler2D u_waterTexture;
  uniform float u_waterStrength;
  uniform float u_ripple_time;
  uniform vec2 u_ripple_position;
  uniform float u_ripple_strength;

  varying vec2 vUv;

  vec4 pulsrGradient(vec2 u, float t) {
    float a = 0.0, d = 0.0, i = 0.0;
    for (; i < 12.; d += sin(i++ * u.y + a))
       a += sin(i - d + 0.1 * t - a * u.x);

    vec3 magenta = vec3(1.0, 0.176, 0.42);
    vec3 purple  = vec3(0.545, 0.102, 1.0);
    vec3 cyan    = vec3(0.0, 0.831, 0.8);
    vec3 blue    = vec3(0.302, 0.365, 1.0);
    vec3 dark    = vec3(0.031, 0.031, 0.047);

    float v1 = 0.5 + 0.5 * cos(a + d);
    float v2 = 0.5 + 0.5 * sin(a * 0.7 + d * 1.3);
    float v3 = 0.5 + 0.5 * cos(a * 1.5 - d * 0.8 + t * 0.05);

    vec3 c = mix(dark, magenta, smoothstep(0.3, 0.7, v1) * 0.6);
    c = mix(c, purple, smoothstep(0.4, 0.8, v2) * 0.5);
    c = mix(c, cyan, smoothstep(0.5, 0.9, v3) * 0.35);
    c = mix(c, blue, smoothstep(0.6, 1.0, v1 * v2) * 0.25);

    c *= 0.55;
    c += magenta * pow(smoothstep(0.7, 1.0, v1), 4.0) * 0.15;
    c += cyan * pow(smoothstep(0.75, 1.0, v3), 4.0) * 0.1;

    return vec4(c, 1.0);
  }

  void main() {
    vec2 r = u_resolution;
    vec2 FC = gl_FragCoord.xy;
    vec2 screenP = (FC.xy * 2.0 - r) / r.y;

    vec2 wCoord = vec2(FC.x / r.x, FC.y / r.y);
    float waterHeight = texture2D(u_waterTexture, wCoord).r;
    float waterInfluence = clamp(waterHeight * u_waterStrength, -0.5, 0.5);

    vec2 gradientUV = screenP;
    float totalWaterInfluence = clamp(waterInfluence * u_waterStrength, -0.8, 0.8);

    gradientUV += vec2(totalWaterInfluence * 0.3, totalWaterInfluence * 0.2);

    float rippleTime = u_time - u_ripple_time;
    vec2 ripplePos = u_ripple_position * r;
    float rippleDist = distance(FC.xy, ripplePos);

    float clickRipple = 0.0;
    if (rippleTime < 3.0 && rippleTime > 0.0) {
      float rippleRadius = rippleTime * 150.0;
      float rippleWidth = 30.0;
      float rippleDecay = 1.0 - rippleTime / 3.0;
      clickRipple = exp(-abs(rippleDist - rippleRadius) / rippleWidth) * rippleDecay * u_ripple_strength;
    }

    float totalWaterEffect = totalWaterInfluence + clickRipple * 0.2;
    gradientUV += vec2(totalWaterEffect * 0.4, totalWaterEffect * 0.3);

    float modifiedTime = u_time * u_speed + totalWaterEffect * 2.0;
    vec4 gradientColor = pulsrGradient(gradientUV, modifiedTime);

    gl_FragColor = gradientColor;
  }
`;

/* ─── WATER SIM ─── */

const WATER_RES = 256;
const WATER_DAMPING = 0.913;
const WATER_TENSION = 0.02;
const RIPPLE_RADIUS = 8;
const MOUSE_INTENSITY = 1.2;
const CLICK_INTENSITY = 3.0;
const MOTION_DECAY = 0.08;
const RIPPLE_DECAY = 1.0;
const WAVE_HEIGHT = 0.01;
const SPIRAL_INTENSITY = 0.2;
const SWIRL_MOTION = 0.2;
const RIPPLE_SIZE = 0.1;
const IMPACT_FORCE = 50000;

/* ─── COMPONENT ─── */

export default function ShaderCanvas({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const throttleRef = useRef(0);
  const waterRef = useRef<{
    current: Float32Array;
    previous: Float32Array;
    velocity: Float32Array;
    vorticity: Float32Array;
    pressure: Float32Array;
  } | null>(null);

  const addRipple = useCallback((x: number, y: number, strength: number = 1.0) => {
    const water = waterRef.current;
    const container = containerRef.current;
    if (!water || !container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;
    const normalizedX = x / w;
    const normalizedY = 1.0 - y / h;
    const texX = Math.floor(normalizedX * WATER_RES);
    const texY = Math.floor(normalizedY * WATER_RES);
    const radius = Math.max(RIPPLE_RADIUS, Math.floor(RIPPLE_SIZE * WATER_RES));
    const rippleStrength = strength * (IMPACT_FORCE / 100000);
    const radiusSquared = radius * radius;

    for (let i = -radius; i <= radius; i++) {
      for (let j = -radius; j <= radius; j++) {
        const distSq = i * i + j * j;
        if (distSq <= radiusSquared) {
          const posX = texX + i;
          const posY = texY + j;
          if (posX >= 0 && posX < WATER_RES && posY >= 0 && posY < WATER_RES) {
            const index = posY * WATER_RES + posX;
            const velIndex = index * 2;
            const dist = Math.sqrt(distSq);
            const falloff = 1.0 - dist / radius;
            const rippleValue = Math.cos((dist / radius) * Math.PI * 0.5) * rippleStrength * falloff;
            water.previous[index] += rippleValue;
            const angle = Math.atan2(j, i);
            const velStr = rippleValue * SPIRAL_INTENSITY;
            water.velocity[velIndex] += Math.cos(angle) * velStr;
            water.velocity[velIndex + 1] += Math.sin(angle) * velStr;
            const swirlAngle = angle + Math.PI * 0.5;
            const swirlStr = Math.min(velStr * 0.3, 0.1);
            water.velocity[velIndex] += Math.cos(swirlAngle) * swirlStr;
            water.velocity[velIndex + 1] += Math.sin(swirlAngle) * swirlStr;
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const water = {
      current: new Float32Array(WATER_RES * WATER_RES),
      previous: new Float32Array(WATER_RES * WATER_RES),
      velocity: new Float32Array(WATER_RES * WATER_RES * 2),
      vorticity: new Float32Array(WATER_RES * WATER_RES),
      pressure: new Float32Array(WATER_RES * WATER_RES),
    };
    waterRef.current = water;

    const waterTex = new THREE.DataTexture(water.current, WATER_RES, WATER_RES, THREE.RedFormat, THREE.FloatType);
    waterTex.minFilter = THREE.LinearFilter;
    waterTex.magFilter = THREE.LinearFilter;
    waterTex.needsUpdate = true;

    const w = container.clientWidth;
    const h = container.clientHeight;
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(w * pixelRatio, h * pixelRatio) },
        u_speed: { value: 1.3 },
        u_waterTexture: { value: waterTex },
        u_waterStrength: { value: 0.55 },
        u_ripple_time: { value: -10 },
        u_ripple_position: { value: new THREE.Vector2(0.5, 0.5) },
        u_ripple_strength: { value: 0.5 },
      },
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const clock = new THREE.Clock();

    function updateWater() {
      const { current, previous, velocity, vorticity } = water;
      for (let i = 0; i < WATER_RES * WATER_RES * 2; i++) velocity[i] *= 1.0 - MOTION_DECAY;
      for (let i = 1; i < WATER_RES - 1; i++) {
        for (let j = 1; j < WATER_RES - 1; j++) {
          const idx = i * WATER_RES + j;
          vorticity[idx] = (velocity[(idx + 1) * 2 + 1] - velocity[(idx - 1) * 2 + 1] - (velocity[(idx + WATER_RES) * 2] - velocity[(idx - WATER_RES) * 2])) * 0.5;
        }
      }
      if (SWIRL_MOTION > 0.001) {
        for (let i = 1; i < WATER_RES - 1; i++) {
          for (let j = 1; j < WATER_RES - 1; j++) {
            const idx = i * WATER_RES + j;
            const vi = idx * 2;
            const gx = (Math.abs(vorticity[idx + 1]) - Math.abs(vorticity[idx - 1])) * 0.5;
            const gy = (Math.abs(vorticity[idx + WATER_RES]) - Math.abs(vorticity[idx - WATER_RES])) * 0.5;
            const len = Math.sqrt(gx * gx + gy * gy) + 1e-5;
            const sv = Math.max(-1, Math.min(1, vorticity[idx]));
            velocity[vi] += Math.max(-0.1, Math.min(0.1, (gy / len) * sv * SWIRL_MOTION * 0.1));
            velocity[vi + 1] += Math.max(-0.1, Math.min(0.1, (-gx / len) * sv * SWIRL_MOTION * 0.1));
          }
        }
      }
      const safeTension = Math.min(WATER_TENSION, 0.05);
      for (let i = 1; i < WATER_RES - 1; i++) {
        for (let j = 1; j < WATER_RES - 1; j++) {
          const idx = i * WATER_RES + j;
          const vi = idx * 2;
          current[idx] = (previous[idx - WATER_RES] + previous[idx + WATER_RES] + previous[idx - 1] + previous[idx + 1]) / 2 - current[idx];
          current[idx] = current[idx] * WATER_DAMPING + previous[idx] * (1 - WATER_DAMPING);
          current[idx] += (0 - previous[idx]) * safeTension;
          current[idx] += Math.min(Math.sqrt(velocity[vi] * velocity[vi] + velocity[vi + 1] * velocity[vi + 1]) * WAVE_HEIGHT, 0.1);
          current[idx] *= 1.0 - RIPPLE_DECAY * 0.01;
          current[idx] = Math.max(-2, Math.min(2, current[idx]));
        }
      }
      for (let i = 0; i < WATER_RES; i++) {
        current[i] = 0; current[(WATER_RES - 1) * WATER_RES + i] = 0;
        current[i * WATER_RES] = 0; current[i * WATER_RES + (WATER_RES - 1)] = 0;
        velocity[i * 2] = 0; velocity[i * 2 + 1] = 0;
        velocity[((WATER_RES - 1) * WATER_RES + i) * 2] = 0; velocity[((WATER_RES - 1) * WATER_RES + i) * 2 + 1] = 0;
        velocity[i * WATER_RES * 2] = 0; velocity[i * WATER_RES * 2 + 1] = 0;
        velocity[(i * WATER_RES + (WATER_RES - 1)) * 2] = 0; velocity[(i * WATER_RES + (WATER_RES - 1)) * 2 + 1] = 0;
      }
      const tmp = water.current; water.current = water.previous; water.previous = tmp;
      waterTex.image.data = water.current;
      waterTex.needsUpdate = true;
    }

    function animate() {
      rafRef.current = requestAnimationFrame(animate);
      material.uniforms.u_time.value = clock.getElapsedTime();
      updateWater();
      renderer.render(scene, camera);
    }
    animate();

    setTimeout(() => addRipple(w / 2, h / 2, 1.5), 500);

    function onResize() {
      if (!container) return;
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const pr = Math.min(window.devicePixelRatio, 2);
      renderer.setSize(cw, ch);
      renderer.setPixelRatio(pr);
      material.uniforms.u_resolution.value.set(cw * pr, ch * pr);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      const now = performance.now();
      if (now - throttleRef.current < 8) return;
      throttleRef.current = now;
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 1) {
        const vel = dist / 8;
        const fluidInt = Math.min(dist / 20, 1.0) * Math.min(vel / 10, 2.0) * MOUSE_INTENSITY;
        addRipple(x + (Math.random() - 0.5) * 3, y + (Math.random() - 0.5) * 3, fluidInt * (Math.random() * 0.3 + 0.7));
        lastMouseRef.current = { x, y };
      }
    }

    function onClick(e: MouseEvent) {
      if (!container) return;
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      addRipple(x, y, CLICK_INTENSITY);
      material.uniforms.u_ripple_position.value.set(x / container.clientWidth, 1.0 - y / container.clientHeight);
      material.uniforms.u_ripple_time.value = clock.getElapsedTime();
    }

    function onTouchMove(e: TouchEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const now = performance.now();
      if (now - throttleRef.current < 8) return;
      throttleRef.current = now;
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 1) {
        const vel = dist / 8;
        const fluidInt = Math.min(dist / 20, 1.0) * Math.min(vel / 10, 2.0) * MOUSE_INTENSITY;
        addRipple(x + (Math.random() - 0.5) * 3, y + (Math.random() - 0.5) * 3, fluidInt * (Math.random() * 0.3 + 0.7));
        lastMouseRef.current = { x, y };
      }
    }

    function onTouchStart(e: TouchEvent) {
      if (!container) return;
      const rect = renderer.domElement.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      addRipple(x, y, CLICK_INTENSITY);
      material.uniforms.u_ripple_position.value.set(x / container.clientWidth, 1.0 - y / container.clientHeight);
      material.uniforms.u_ripple_time.value = clock.getElapsedTime();
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      waterTex.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [addRipple]);

  return <div ref={containerRef} className={className} />;
}
