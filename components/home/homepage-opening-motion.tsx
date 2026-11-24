'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Sparkles, ArrowRight} from 'lucide-react';
import {useMotionSystem} from '@/components/motion/motion-provider';

const GENUSTRIDE_CHARS = 'Genustride'.split('');
const WAVE_SENTENCE_TEXT = 'Discover how knowledge works in the real world.';
const WAVE_SENTENCE_WORDS = WAVE_SENTENCE_TEXT.split(' ');

/**
 * Interactive HTML5 Canvas that renders a Space Background Wave with an orbital
 * "wave-writer" stylus particle that traces the path while writing "Genustride",
 * plus an impact ripple when "Learn" drops from the top into place.
 */
function SpaceWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{x: number; y: number; active: boolean}>({
    x: 0.5,
    y: 0.5,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    const startTime = performance.now();

    // Generate deterministic cosmic star/node field
    const stars = Array.from({length: 56}, (_, i) => ({
      xRatio: ((i * 37 + 13) % 100) / 100,
      yRatio: ((i * 61 + 29) % 100) / 100,
      radius: 1 + (i % 3) * 0.65,
      phase: i * 0.7,
      speed: 0.4 + (i % 4) * 0.2,
    }));

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    };

    handleResize();
    window.addEventListener('resize', handleResize, {passive: true});

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      pointerRef.current.x = (e.clientX - rect.left) / rect.width;
      pointerRef.current.y = (e.clientY - rect.top) / rect.height;
      pointerRef.current.active = true;
    };

    window.addEventListener('pointermove', handlePointerMove, {passive: true});

    const render = (now: number) => {
      const elapsedSec = (now - startTime) / 1000;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Subtle space stars / blueprint nodes
      for (const star of stars) {
        const sx = star.xRatio * width;
        const sy =
          star.yRatio * height +
          Math.sin(elapsedSec * star.speed + star.phase) * 4;
        const alpha = 0.18 + 0.25 * Math.sin(elapsedSec * 1.8 + star.phase);
        ctx.beginPath();
        ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 197, 255, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      // Draw 3 harmonic space background waves
      const waveConfigs = [
        {
          color: 'rgba(49, 91, 232, 0.52)',
          amp: 28,
          freq: 0.012,
          speed: 2.4,
          lineWidth: 2.2,
          yOffset: 0,
        },
        {
          color: 'rgba(22, 166, 160, 0.44)',
          amp: 20,
          freq: 0.017,
          speed: -1.85,
          lineWidth: 1.5,
          yOffset: 12,
        },
        {
          color: 'rgba(243, 166, 68, 0.30)',
          amp: 15,
          freq: 0.022,
          speed: 3.1,
          lineWidth: 1.2,
          yOffset: -10,
        },
      ];

      const centerY = height * 0.52;
      const ptr = pointerRef.current;

      for (const w of waveConfigs) {
        ctx.beginPath();
        const step = Math.max(4, Math.floor(width / 90));
        for (let x = 0; x <= width; x += step) {
          const xNorm = x / Math.max(1, width);
          const pointerDist = Math.abs(xNorm - ptr.x);
          const pointerBoost =
            ptr.active && pointerDist < 0.24
              ? (1 - pointerDist / 0.24) * (ptr.y - 0.5) * 54
              : 0;

          const y =
            centerY +
            w.yOffset +
            Math.sin(x * w.freq + elapsedSec * w.speed) * w.amp +
            Math.cos(x * (w.freq * 0.6) - elapsedSec * 1.3) * (w.amp * 0.35) +
            pointerBoost;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = w.color;
        ctx.lineWidth = w.lineWidth;
        ctx.stroke();
      }

      // Phase 1 (0.0s -> 1.15s): Orbital "Wave-Writer" Stylus writing "Genustride" across the space wave
      const writeDuration = 1.12;
      if (elapsedSec <= writeDuration + 0.5) {
        const writeT = Math.min(1, elapsedSec / writeDuration);
        const easedT = 1 - Math.pow(1 - writeT, 3);
        const startX = width * 0.18;
        const endX = width * 0.62;
        const writerX = startX + (endX - startX) * easedT;
        const writerY =
          centerY + Math.sin(writerX * 0.015 + elapsedSec * 4.5) * 22;

        const fadeOut =
          elapsedSec > writeDuration
            ? Math.max(0, 1 - (elapsedSec - writeDuration) / 0.5)
            : 1;

        // Luminous orb glow
        const grad = ctx.createRadialGradient(
          writerX,
          writerY,
          1,
          writerX,
          writerY,
          32
        );
        grad.addColorStop(
          0,
          `rgba(56, 189, 248, ${(0.95 * fadeOut).toFixed(3)})`
        );
        grad.addColorStop(
          0.45,
          `rgba(49, 91, 232, ${(0.45 * fadeOut).toFixed(3)})`
        );
        grad.addColorStop(1, 'rgba(49, 91, 232, 0)');

        ctx.beginPath();
        ctx.arc(writerX, writerY, 32, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Spinning orbital satellite ring around the writer head
        const orbitAngle = elapsedSec * 9;
        const satX = writerX + Math.cos(orbitAngle) * 12;
        const satY = writerY + Math.sin(orbitAngle) * 12;

        ctx.beginPath();
        ctx.arc(satX, satY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 166, 68, ${fadeOut.toFixed(3)})`;
        ctx.fill();
      }

      // Phase 2 (1.35s -> 2.1s): Gravity impact shockwave ring when "Learn" lands on the right side
      const impactStart = 1.38;
      if (elapsedSec >= impactStart && elapsedSec <= impactStart + 0.85) {
        const impactT = (elapsedSec - impactStart) / 0.85;
        const impactX = width * 0.7;
        const impactY = centerY;
        const radius = 14 + impactT * 95;
        const alpha = (1 - impactT) * 0.55;

        ctx.beginPath();
        ctx.arc(impactX, impactY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(22, 166, 160, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.restore();
      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}

/**
 * Full-Screen Homepage Preloader / Opening Splash Screen.
 * Shows ONLY when the homepage loads, playing:
 * 1. "Genustride" spinning/writing across the space background wave
 * 2. "Learn" falling from the top and landing to the right side of "Genustride"
 * 3. Blinking and waving "Discover how knowledge works in the real world."
 * Then smoothly fades out to reveal the homepage content.
 */
export function HomepageOpeningMotion() {
  const {reduceMotion} = useMotionSystem();
  const [overlayPhase, setOverlayPhase] = useState<
    'playing' | 'exiting' | 'hidden'
  >('playing');

  const dismissOverlay = useCallback(() => {
    setOverlayPhase('exiting');
    window.setTimeout(() => {
      setOverlayPhase('hidden');
    }, 620);
  }, []);

  useEffect(() => {
    if (reduceMotion || overlayPhase !== 'playing') return;

    const exitTimer = window.setTimeout(() => {
      setOverlayPhase('exiting');
    }, 3400);

    const hideTimer = window.setTimeout(() => {
      setOverlayPhase('hidden');
    }, 4020);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reduceMotion, overlayPhase]);

  // Allow Escape key to dismiss opening screen immediately
  useEffect(() => {
    if (overlayPhase === 'hidden') return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissOverlay();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [overlayPhase, dismissOverlay]);

  if (reduceMotion || overlayPhase === 'hidden') {
    return null;
  }

  let charCounter = 0;

  return (
    <div
      role="dialog"
      aria-label="Genustride Learn opening animation"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#0A101F] text-white transition-opacity duration-600 ${
        overlayPhase === 'exiting'
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100'
      }`}
    >
      {/* Interactive Space Background Wave Canvas */}
      <SpaceWaveCanvas />

      {/* Subtle Radial Cosmic Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(49,91,232,0.22)_0%,rgba(22,166,160,0.09)_38%,transparent_72%)]"
      />

      {/* Skip / Enter Button (Top Right) */}
      <div className="absolute top-5 right-5 z-20">
        <button
          type="button"
          onClick={dismissOverlay}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white/90 backdrop-blur-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* Center Choreographed Stage: "Genustride" Spin-Write + "Learn" Top Drop + Blink & Wave Sentence */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/8 border border-white/15 text-[11px] font-mono uppercase tracking-widest text-[#7DD3FC]">
          <Sparkles
            className="w-3.5 h-3.5 text-[#16A6A0]"
            aria-hidden="true"
          />
          <span>Concept-Driven Learning Platform</span>
        </div>

        {/* "Genustride Learn" Assembly Row */}
        <div
          aria-label="Genustride Learn"
          className="flex flex-wrap items-baseline justify-center gap-x-3.5 sm:gap-x-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
        >
          {/* "Genustride" — Characters spin & write along the space wave */}
          <span className="inline-flex items-baseline text-white drop-shadow-[0_4px_24px_rgba(49,91,232,0.45)]">
            {GENUSTRIDE_CHARS.map((char, idx) => (
              <span
                key={`fs-char-${char}-${idx}`}
                style={{
                  animationDelay: `${idx * 85}ms`,
                }}
                className="genustride-char-spin"
              >
                {char}
              </span>
            ))}
          </span>

          {/* "Learn" — Falls from the top and sets to the right side of "Genustride" */}
          <span
            style={{
              animationDelay: '1080ms',
            }}
            className="learn-gravity-drop text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#16A6A0] to-[#60A5FA] drop-shadow-[0_4px_20px_rgba(22,166,160,0.4)]"
          >
            Learn
          </span>
        </div>

        {/* Blink and Wave Sentence: "Discover how knowledge works in the real world." */}
        <div className="min-h-[2.5rem] flex items-center justify-center">
          <p
            aria-label={WAVE_SENTENCE_TEXT}
            style={{animationDelay: '1620ms'}}
            className="sentence-photon-blink text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-[#7DD3FC] select-none"
          >
            {WAVE_SENTENCE_WORDS.map((word, wordIdx) => {
              const chars = word.split('');
              return (
                <span
                  key={`${word}-${wordIdx}`}
                  className="inline-block mr-[0.28em] whitespace-nowrap"
                >
                  {chars.map((ch, cIdx) => {
                    const globalCharIdx = charCounter++;
                    const waveDelayMs = 1620 + 520 + globalCharIdx * 45;
                    return (
                      <span
                        key={`${ch}-${cIdx}`}
                        style={{
                          animationDelay: `${waveDelayMs}ms`,
                        }}
                        className="char-harmonic-wave"
                      >
                        {ch}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
