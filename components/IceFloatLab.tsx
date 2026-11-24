'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {ArrowRight, Pause, Play, RotateCcw} from 'lucide-react';
import {ImageContainer, KickerLabel} from '@/components/design-system';
import {useMotionSystem} from '@/components/motion/motion-provider';

export interface IceFloatingStep {
  stepNumber: string;
  stageTag: string;
  title: string;
  subtitle: string;
  description: string;
  scientificNote: string;
}

export interface IceFloatLabProps {
  steps: readonly IceFloatingStep[];
  iceMolecularImageSrc: string;
  frozenLakeImageSrc: string;
}

interface MicroBubble {
  x: number;
  y: number;
  r: number;
  speed: number;
}

/**
 * Section 04 (Star Feature) — Interactive <IceFloatLab /> Simulation
 *
 * Combines:
 * 1. Scroll-synced & clickable 6-step inquiry walkthrough (01 to 06) via IntersectionObserver.
 * 2. Retina HTML5 <canvas> cross-section water tank with damped buoyancy physics (~91.7% submerged at 0°C),
 *    rising micro-bubbles, and rotating hexagonal H₂O crystal lattice inside the ice block.
 * 3. Animated Dual Density Bar (Ice 0.917 g/cm³ vs. Liquid Water 1.000 g/cm³).
 * 4. Play/Pause control, Temperature Slider (0.0°C to 4.0°C), and "Test Your Intuition" bottom-up vs. top-down freezing check.
 */
export function IceFloatLab({
  steps,
  iceMolecularImageSrc,
  frozenLakeImageSrc,
}: IceFloatLabProps) {
  const {isAnimationAllowed} = useMotionSystem();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stepElsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Active step synced with scroll (IntersectionObserver) or manual click
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Simulation controls
  const [isSimPlaying, setIsSimPlaying] = useState<boolean>(true);
  const [temperatureC, setTemperatureC] = useState<number>(0.0);
  const [intuitionMode, setIntuitionMode] = useState<
    'real-ice-floats' | 'hypothetical-dense-ice'
  >('real-ice-floats');

  // Derived physical parameters from temperatureC (0.0°C -> 4.0°C)
  const meltFraction = Math.min(Math.max(temperatureC / 4.0, 0), 1);
  const iceScale = 1 - meltFraction * 0.58; // Ice block shrinks as it melts toward 4.0°C
  const hBondLockPct = Math.round((1 - meltFraction * 0.85) * 100);
  const waterDensity = 0.9998 + meltFraction * 0.0002; // 0.9998 at 0°C -> 1.0000 peak at 4.0°C
  const effectiveIceDensity =
    intuitionMode === 'hypothetical-dense-ice'
      ? 1.05
      : 0.917 + meltFraction * 0.065;
  const submergedRatio = Math.min(effectiveIceDensity / waterDensity, 1.0);
  const submergedPct = (submergedRatio * 100).toFixed(1);

  // Keep latest simulation parameters accessible inside 60fps canvas loop without re-creating canvas
  const simParamsRef = useRef({
    temperatureC,
    meltFraction,
    iceScale,
    submergedRatio,
    intuitionMode,
    isSimPlaying,
    isAnimationAllowed,
  });

  useEffect(() => {
    simParamsRef.current = {
      temperatureC,
      meltFraction,
      iceScale,
      submergedRatio,
      intuitionMode,
      isSimPlaying,
      isAnimationAllowed,
    };
  }, [
    temperatureC,
    meltFraction,
    iceScale,
    submergedRatio,
    intuitionMode,
    isSimPlaying,
    isAnimationAllowed,
  ]);

  // Scroll-Sync Steps 01-06 via IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const elements = stepElsRef.current.filter(
      (el): el is HTMLButtonElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idxAttr = entry.target.getAttribute('data-ice-step-idx');
            if (idxAttr !== null) {
              const parsed = Number(idxAttr);
              if (!Number.isNaN(parsed)) {
                setActiveStepIndex(parsed);
              }
            }
          }
        }
      },
      {
        rootMargin: '-28% 0px -52% 0px',
        threshold: 0.2,
      }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [steps.length]);

  // Retina HTML5 <canvas> Water Tank + Hexagonal H2O Lattice Simulation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const bubbles: MicroBubble[] = Array.from({length: 14}, (_, i) => ({
      x: 35 + ((i * 37) % 340),
      y: 95 + ((i * 29) % 135),
      r: 1.5 + (i % 3) * 0.9,
      speed: 14 + (i % 4) * 6,
    }));

    let rafId = 0;
    let lastTime = performance.now();
    let simElapsed = 0;
    let currentIceCenterY = 105;

    const drawTank = (now: number) => {
      const params = simParamsRef.current;
      const rootPaused =
        document.documentElement.getAttribute('data-pause-animations') ===
          'true' ||
        document.documentElement.getAttribute('data-reduce-motion') === 'true';

      const shouldAdvance =
        params.isSimPlaying &&
        params.isAnimationAllowed &&
        !rootPaused &&
        !document.hidden;

      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;
      if (shouldAdvance) {
        simElapsed += dt;
      }

      const ctx = canvas.getContext('2d');
      if (ctx) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const cssWidth = canvas.clientWidth || 440;
        const cssHeight = 250;

        if (
          canvas.width !== Math.round(cssWidth * dpr) ||
          canvas.height !== Math.round(cssHeight * dpr)
        ) {
          canvas.width = Math.round(cssWidth * dpr);
          canvas.height = Math.round(cssHeight * dpr);
        }

        ctx.save();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, cssWidth, cssHeight);

        const waterLineY = 74;
        const tankBottomY = cssHeight - 16;

        // 1. Air Region above waterline
        ctx.fillStyle = '#FAF9F6';
        ctx.fillRect(0, 0, cssWidth, waterLineY);

        // 2. Liquid Water Column
        const waterGrad = ctx.createLinearGradient(0, waterLineY, 0, tankBottomY);
        waterGrad.addColorStop(0, 'rgba(224, 242, 254, 0.85)');
        waterGrad.addColorStop(0.55, 'rgba(186, 230, 253, 0.72)');
        waterGrad.addColorStop(1, 'rgba(125, 211, 252, 0.65)');
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, waterLineY, cssWidth, tankBottomY - waterLineY);

        // 3. Tank Floor & Depth Ruler Marks
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 1;
        for (let y = waterLineY + 25; y < tankBottomY; y += 25) {
          ctx.beginPath();
          ctx.moveTo(10, y);
          ctx.lineTo(20, y);
          ctx.stroke();
        }

        // 4. Rising Micro-Bubbles in Liquid Water
        for (const b of bubbles) {
          if (shouldAdvance) {
            b.y -= b.speed * dt * (1 + params.meltFraction * 0.45);
            if (b.y < waterLineY + 6) {
              b.y = tankBottomY - 8;
            }
          }
          ctx.beginPath();
          ctx.arc(
            (b.x / 420) * (cssWidth * 0.62),
            b.y,
            b.r,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(2, 132, 199, 0.25)';
          ctx.fill();
        }

        // 5. Compute Damped Buoyancy Ice Block Position
        const baseBlockW = 116 * params.iceScale;
        const baseBlockH = 88 * params.iceScale;
        const blockCenterX = cssWidth * 0.33;

        const bobOffset = shouldAdvance
          ? Math.sin(simElapsed * 2.2) * 3.2 * (1 - params.meltFraction * 0.4)
          : 0;

        let targetCenterY: number;
        if (params.intuitionMode === 'hypothetical-dense-ice') {
          // Sinks to the bottom of the tank!
          targetCenterY = tankBottomY - baseBlockH / 2 - 3;
        } else {
          // Floats with ~91.7% submerged below waterLineY
          const topY = waterLineY - baseBlockH * (1 - params.submergedRatio);
          targetCenterY = topY + baseBlockH / 2 + bobOffset;
        }

        currentIceCenterY += (targetCenterY - currentIceCenterY) * 0.14;

        const blockLeft = blockCenterX - baseBlockW / 2;
        const blockTop = currentIceCenterY - baseBlockH / 2;

        // Draw Translucent Crystalline Ice Block
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(blockLeft, blockTop, baseBlockW, baseBlockH, 10);
        ctx.fillStyle =
          params.intuitionMode === 'hypothetical-dense-ice'
            ? 'rgba(254, 226, 226, 0.88)'
            : 'rgba(255, 255, 255, 0.86)';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle =
          params.intuitionMode === 'hypothetical-dense-ice'
            ? '#DC2626'
            : '#0284C7';
        ctx.stroke();

        // Draw Rotating Hexagonal H2O Crystal Lattice inside the Ice Block
        const hexRadius = Math.max(18 * params.iceScale, 10);
        const rotAngle = simElapsed * 0.45;
        ctx.translate(blockCenterX, currentIceCenterY);
        ctx.rotate(rotAngle);

        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const a = (k * Math.PI) / 3;
          const hx = Math.cos(a) * hexRadius;
          const hy = Math.sin(a) * hexRadius;
          if (k === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(22, 166, 160, 0.65)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        for (let k = 0; k < 6; k++) {
          const a = (k * Math.PI) / 3;
          const hx = Math.cos(a) * hexRadius;
          const hy = Math.sin(a) * hexRadius;
          ctx.beginPath();
          ctx.arc(hx, hy, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = k % 2 === 0 ? '#315BE8' : '#16A6A0';
          ctx.fill();
        }
        ctx.restore();

        // 6. Draw Water Surface Meniscus Wave Line over Ice Block
        ctx.beginPath();
        for (let x = 0; x <= cssWidth; x += 12) {
          const waveY =
            waterLineY +
            (shouldAdvance ? Math.sin(x * 0.035 + simElapsed * 2.6) * 1.6 : 0);
          if (x === 0) ctx.moveTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.strokeStyle = '#0284C7';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Surface & Submerged Annotation Labels on Left
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#0284C7';
        ctx.fillText(
          params.intuitionMode === 'hypothetical-dense-ice'
            ? 'SUNK TO BED (100% SUBMERGED)'
            : `~${(100 - params.submergedRatio * 100).toFixed(1)}% ABOVE SURFACE`,
          16,
          waterLineY - 8
        );

        ctx.fillStyle = '#17243B';
        ctx.fillText(
          params.intuitionMode === 'hypothetical-dense-ice'
            ? 'Lake freezes bottom-up!'
            : `~${(params.submergedRatio * 100).toFixed(1)}% SUBMERGED · 4°C WATER BELOW`,
          16,
          tankBottomY - 8
        );

        // 7. Right-Side Molecular Magnifier Loupe inside Canvas
        const loupeX = cssWidth * 0.77;
        const loupeY = cssHeight * 0.52;
        const loupeR = Math.min(cssWidth * 0.16, 62);

        ctx.save();
        ctx.beginPath();
        ctx.arc(loupeX, loupeY, loupeR, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#315BE8';
        ctx.stroke();

        // Draw H2O Molecules inside Magnifier Loupe (Hexagonal at 0°C -> Dense Liquid at 4°C)
        const ringR = loupeR * (0.56 - params.meltFraction * 0.16);
        for (let k = 0; k < 6; k++) {
          const baseAngle = (k * Math.PI) / 3 + simElapsed * 0.3;
          const thermalJitterX =
            Math.sin(simElapsed * 4.2 + k * 1.7) * (params.meltFraction * 7);
          const thermalJitterY =
            Math.cos(simElapsed * 3.8 + k * 2.1) * (params.meltFraction * 7);
          const mx = loupeX + Math.cos(baseAngle) * ringR + thermalJitterX;
          const my = loupeY + Math.sin(baseAngle) * ringR + thermalJitterY;

          // Draw hydrogen bond dashed line to next molecule when near 0°C
          if (params.meltFraction < 0.75) {
            const nextAngle = (((k + 1) % 6) * Math.PI) / 3 + simElapsed * 0.3;
            const nx = loupeX + Math.cos(nextAngle) * ringR;
            const ny = loupeY + Math.sin(nextAngle) * ringR;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `rgba(22, 166, 160, ${(0.75 - params.meltFraction).toFixed(2)})`;
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 2]);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Oxygen atom
          ctx.beginPath();
          ctx.arc(mx, my, 5.2, 0, Math.PI * 2);
          ctx.fillStyle = '#315BE8';
          ctx.fill();

          // Two Hydrogen atoms (104.5° bent angle)
          ctx.beginPath();
          ctx.arc(mx - 4.5, my - 4, 2.5, 0, Math.PI * 2);
          ctx.arc(mx + 4.5, my - 4, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#17243B';
          ctx.fill();
        }

        // Center molecule appears in liquid state (4°C maximum packing)
        if (params.meltFraction > 0.25) {
          ctx.globalAlpha = Math.min((params.meltFraction - 0.25) * 1.4, 1);
          ctx.beginPath();
          ctx.arc(loupeX, loupeY, 5.2, 0, Math.PI * 2);
          ctx.fillStyle = '#0284C7';
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        ctx.restore();

        ctx.font = '700 10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#17243B';
        ctx.textAlign = 'center';
        ctx.fillText(
          params.meltFraction < 0.35
            ? 'HEXAGONAL LATTICE'
            : params.meltFraction < 0.8
              ? 'MELTING TRANSITION'
              : '4°C MAX DENSITY',
          loupeX,
          loupeY - loupeR - 8
        );
        ctx.textAlign = 'left';

        ctx.restore();
      }

      rafId = window.requestAnimationFrame(drawTank);
    };

    rafId = window.requestAnimationFrame(drawTank);
    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const activeStep = steps[activeStepIndex] || steps[0];
  const stepRatio = activeStepIndex / Math.max(steps.length - 1, 1);
  const latticeScale = (1 + stepRatio * 0.09).toFixed(3);
  const latticeRotateDeg = Math.round(stepRatio * 30);

  return (
    <div className="relative">
      {/* Far-Right Margin Scientific Watermark: Hexagonal H2O Crystal Lattice Wireframe */}
      <div
        aria-hidden="true"
        style={{
          transform: `rotate(calc(${latticeRotateDeg}deg + var(--ice-progress, 0) * 18deg)) scale(${latticeScale})`,
        }}
        className="pointer-events-none absolute -right-12 top-1/3 -z-10 hidden xl:block opacity-[0.08] transition-transform duration-500 ease-out"
      >
        <svg
          viewBox="0 0 320 320"
          fill="none"
          className="w-80 h-80 text-[#0284C7]"
        >
          <polygon
            points="160,20 281,90 281,230 160,300 39,230 39,90"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <polygon
            points="160,72 236,116 236,204 160,248 84,204 84,116"
            stroke="#16A6A0"
            strokeWidth="1.5"
          />
          <circle cx="160" cy="72" r="5" fill="#315BE8" />
          <circle cx="236" cy="116" r="5" fill="#16A6A0" />
          <circle cx="236" cy="204" r="5" fill="#315BE8" />
          <circle cx="160" cy="248" r="5" fill="#16A6A0" />
          <circle cx="84" cy="204" r="5" fill="#315BE8" />
          <circle cx="84" cy="116" r="5" fill="#16A6A0" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: 6-Step Scroll-Synced & Clickable Inquiry Progression */}
        <div className="lg:col-span-6 space-y-3">
          {steps.map((item, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={item.stepNumber}
                ref={(el) => {
                  stepElsRef.current[idx] = el;
                }}
                data-ice-step-idx={idx}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left rounded-xl p-5 transition-colors border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                  isActive
                    ? 'bg-[#F6F9FF] border-[#315BE8] shadow-xs'
                    : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/40 hover:bg-[#F6F9FF]/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`font-mono tabular-nums text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5 ${
                      isActive
                        ? 'bg-[#315BE8] text-white'
                        : 'bg-[#F6F9FF] text-[#315BE8] border border-[#E6EBF2]'
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#17243B]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#16A6A0] font-semibold">
                        Stage: {item.stageTag}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#315BE8]">
                      {item.subtitle}
                    </div>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>

                    {isActive && (
                      <div className="pt-2.5 mt-2.5 border-t border-[#E6EBF2] text-xs text-[#17243B] font-medium">
                        <strong className="text-[#315BE8]">
                          Scientific Mechanism:{' '}
                        </strong>
                        {item.scientificNote}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Interactive <IceFloatLab /> Simulation Sandbox + Real Photography Proof */}
        <div className="lg:col-span-6 space-y-5 lg:sticky lg:top-20">
          {/* Interactive Buoyancy & Molecular Simulation Card */}
          <div className="rounded-2xl bg-white border border-[#315BE8]/35 p-5 sm:p-6 shadow-sm space-y-5">
            {/* Simulation Header synced with Active Step */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6EBF2] pb-3.5">
              <div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono font-bold text-[#0284C7]">
                    INTERACTIVE BUOYANCY & LATTICE LAB
                  </span>
                  <span aria-hidden="true" className="text-[#64748B]">
                    ·
                  </span>
                  <span className="font-mono text-[#16A6A0] font-semibold">
                    Step 0{activeStepIndex + 1} ({activeStep.stageTag})
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#17243B] mt-0.5">
                  {activeStep.title}: {activeStep.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-pressed={!isSimPlaying}
                  onClick={() => setIsSimPlaying((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F9FF] hover:bg-[#E0F2FE] border border-[#E6EBF2] text-xs font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isSimPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#315BE8]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#059669]" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setTemperatureC(0.0);
                    setIntuitionMode('real-ice-floats');
                    setIsSimPlaying(true);
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#F6F9FF] border border-[#E6EBF2] text-xs font-semibold text-[#64748B] hover:text-[#17243B] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Retina HTML5 Canvas Water Tank + Molecular Magnifier */}
            <div className="rounded-xl overflow-hidden border border-[#E6EBF2] bg-[#FAF9F6]">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label={`Interactive water tank simulation at ${temperatureC.toFixed(1)} degrees Celsius showing ice block ${submergedPct}% submerged and hexagonal H2O molecular lattice`}
                className="w-full h-[250px] block"
              />
            </div>

            {/* Hands-On Temperature Slider (0.0°C to 4.0°C) */}
            <div className="rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] p-4 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <label
                  htmlFor="ice-lab-temp-slider"
                  className="font-bold text-[#17243B]"
                >
                  Water Temperature Slider:{' '}
                  <span className="font-mono text-[#0284C7]">
                    {temperatureC.toFixed(1)} °C
                  </span>
                </label>
                <span className="font-mono text-[#16A6A0] font-semibold">
                  H-Bond Lattice Lock: {hBondLockPct}%
                </span>
              </div>

              <input
                id="ice-lab-temp-slider"
                type="range"
                min={0}
                max={4}
                step={0.1}
                value={temperatureC}
                onChange={(e) => setTemperatureC(Number(e.target.value))}
                className="w-full accent-[#0284C7] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-[#64748B]">
                <span>0.0°C (Rigid Hexagonal Ice · +9% Vol)</span>
                <span>4.0°C (Max Liquid Density · 1.000 g/cm³)</span>
              </div>
            </div>

            {/* Animated Dual Density Comparison Bars */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#17243B]">
                  Live Density Comparison (Submerged: {submergedPct}%)
                </span>
                <span className="font-mono text-[#64748B]">
                  ρ = Mass / Volume
                </span>
              </div>

              <div className="space-y-2">
                {/* Ice Density Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#0284C7] font-semibold">
                      {intuitionMode === 'hypothetical-dense-ice'
                        ? 'Hypothetical Dense Ice'
                        : 'Crystalline Ice (0°C)'}
                    </span>
                    <span className="font-bold text-[#17243B] tabular-nums">
                      {effectiveIceDensity.toFixed(3)} g/cm³
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-[#F6F9FF] border border-[#E6EBF2] overflow-hidden">
                    <div
                      style={{
                        width: `${Math.min((effectiveIceDensity / 1.1) * 100, 100)}%`,
                      }}
                      className={`h-full rounded-full transition-all duration-300 ${
                        intuitionMode === 'hypothetical-dense-ice'
                          ? 'bg-[#DC2626]'
                          : 'bg-[#0284C7]'
                      }`}
                    />
                  </div>
                </div>

                {/* Liquid Water Density Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#16A6A0] font-semibold">
                      Liquid Water ({temperatureC.toFixed(1)}°C)
                    </span>
                    <span className="font-bold text-[#17243B] tabular-nums">
                      {waterDensity.toFixed(4)} g/cm³
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-[#F6F9FF] border border-[#E6EBF2] overflow-hidden">
                    <div
                      style={{
                        width: `${(waterDensity / 1.1) * 100}%`,
                      }}
                      className="h-full rounded-full bg-[#16A6A0] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* "Test Your Intuition" Quick Check Toggle */}
            <div className="pt-3 border-t border-[#E6EBF2] space-y-2.5">
              <div className="text-xs font-bold text-[#17243B]">
                Test Your Intuition: What if solid ice were denser than liquid
                water?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  aria-pressed={intuitionMode === 'real-ice-floats'}
                  onClick={() => setIntuitionMode('real-ice-floats')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold text-left transition-colors cursor-pointer ${
                    intuitionMode === 'real-ice-floats'
                      ? 'bg-[#0284C7] text-white'
                      : 'bg-[#F6F9FF] border border-[#E6EBF2] text-[#17243B]'
                  }`}
                >
                  <div>Real H₂O (0.917 g/cm³)</div>
                  <div className="text-[11px] opacity-85 font-normal">
                    Floats at top · Insulates lake life
                  </div>
                </button>

                <button
                  type="button"
                  aria-pressed={intuitionMode === 'hypothetical-dense-ice'}
                  onClick={() => setIntuitionMode('hypothetical-dense-ice')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold text-left transition-colors cursor-pointer ${
                    intuitionMode === 'hypothetical-dense-ice'
                      ? 'bg-[#DC2626] text-white'
                      : 'bg-[#F6F9FF] border border-[#E6EBF2] text-[#17243B]'
                  }`}
                >
                  <div>If Ice Were 1.050 g/cm³</div>
                  <div className="text-[11px] opacity-85 font-normal">
                    Sinks to bottom · Lake freezes solid
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Real Scientific Photography Context Card (Dynamic based on active step 01-04 vs 05-06) */}
          <div className="rounded-2xl p-4 sm:p-5 bg-white border border-[#E6EBF2] space-y-3">
            <div className="flex items-center justify-between gap-2">
              <KickerLabel
                index={activeStepIndex < 4 ? 'Steps 01–04' : 'Steps 05–06'}
                label={
                  activeStepIndex < 4
                    ? 'Density & Molecular Structure'
                    : 'Frozen Lakes & Ecological Insulation'
                }
                tone={activeStepIndex < 4 ? 'primary' : 'secondary'}
              />
              <Link
                href="/how-it-works#ice-learning-example"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:underline whitespace-nowrap shrink-0"
              >
                <span>Full Deep-Dive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <ImageContainer
              src={
                activeStepIndex < 4 ? iceMolecularImageSrc : frozenLakeImageSrc
              }
              alt={
                activeStepIndex < 4
                  ? 'Crystalline ice floating at the top of liquid water demonstrating lower solid density than liquid water'
                  : 'Surface layer of ice floating on a winter lake with liquid water beneath supporting aquatic ecosystems'
              }
              aspectRatio="16:9"
              rounded="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
