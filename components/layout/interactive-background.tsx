'use client';

import React, {useEffect, useRef} from 'react';

/**
 * Stage ambient tint palette (Understand -> Explore -> Apply -> Create)
 * Smoothly interpolated in RGB space based on scroll progress or hovered stage card.
 */
const STAGE_TINTS_RGB: readonly [number, number, number][] = [
  [224, 242, 254], // 01 Understand: Cool Sky Blue (#E0F2FE)
  [237, 233, 254], // 02 Explore: Indigo/Violet (#EDE9FE)
  [220, 252, 231], // 03 Apply: Emerald/Teal (#DCFCE7)
  [254, 243, 199], // 04 Create: Warm Amber (#FEF3C7)
];

/**
 * Discipline-specific RGB accents for the Cursor-Reactive Blueprint Spotlight
 */
const SUBJECT_ACCENT_RGB_MAP: Record<string, string> = {
  physics: '2, 132, 199', // Cyan (#0284C7)
  mathematics: '79, 70, 229', // Indigo (#4F46E5)
  chemistry: '13, 148, 136', // Teal (#0D9488)
  biology: '5, 150, 105', // Emerald (#059669)
  technology: '8, 145, 178', // Cyan-Teal (#0891B2)
  engineering: '217, 119, 6', // Warm Amber (#D97706)
  blue: '49, 91, 232', // Royal Blue fallback
  teal: '22, 166, 160', // Teal fallback
  amber: '217, 119, 6', // Amber fallback
};

interface ConstellationNode {
  baseXRatio: number;
  baseYRatio: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  color: string;
  stageTargetIndex: number; // 0..3 for 4-point horizontal alignment on scroll
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function interpolateStageTintRgb(progress0to1: number): string {
  const scaled = clamp(progress0to1, 0, 1) * (STAGE_TINTS_RGB.length - 1);
  const idx = Math.floor(scaled);
  const frac = scaled - idx;
  const c1 = STAGE_TINTS_RGB[idx] || STAGE_TINTS_RGB[0];
  const c2 =
    STAGE_TINTS_RGB[Math.min(idx + 1, STAGE_TINTS_RGB.length - 1)] || c1;
  const r = Math.round(lerp(c1[0], c2[0], frac));
  const g = Math.round(lerp(c1[1], c2[1], frac));
  const b = Math.round(lerp(c1[2], c2[2], frac));
  return `${r}, ${g}, ${b}`;
}

/**
 * Unified Interactive Background Design System ("Scientific Drafting Canvas")
 *
 * Mounted at the root layout level (`z-index: -1`, `pointer-events: none`).
 * Uses a single requestAnimationFrame coordinator to update CSS Custom Properties
 * and render the Hero Directional Stride Constellation canvas at a locked 60fps
 * without triggering React re-renders.
 */
export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const threadPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    let prefersReducedMotion = reducedMotionQuery.matches;

    // Mutable pointer & scroll state (zero React state re-renders)
    const state = {
      mouseX: window.innerWidth * 0.5,
      mouseY: window.innerHeight * 0.35,
      clientMouseX: -9999,
      clientMouseY: -9999,
      scrollY: window.scrollY,
      viewportW: window.innerWidth,
      viewportH: window.innerHeight,
      heroProgress: 0,
      philosophyProgress: 0,
      iceProgress: 0,
      hoveredStageIndex: -1,
      isHoveringSubjectGrid: false,
      activeSubjectRgb: '49, 91, 232',
      isTabVisible: !document.hidden,
      needsCssSync: true,
    };

    // Initialize 24 Constellation Nodes (6 Primary Discipline Anchors + 18 Concept Satellites)
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 12 : 24;
    const primaryLabels = [
      {label: 'MATH', color: '#315BE8'},
      {label: 'PHYS', color: '#0284C7'},
      {label: 'CHEM', color: '#16A6A0'},
      {label: 'BIO', color: '#059669'},
      {label: 'TECH', color: '#4F46E5'},
      {label: 'ENGR', color: '#D97706'},
    ];

    const nodes: ConstellationNode[] = Array.from(
      {length: nodeCount},
      (_, i) => {
        // Position nodes predominantly in the outer & upper hero margins so center headline stays crisp
        const angle = (i / nodeCount) * Math.PI * 2;
        const ringRadiusX = 0.28 + (i % 3) * 0.11;
        const ringRadiusY = 0.24 + (i % 4) * 0.08;
        const baseXRatio = clamp(0.5 + Math.cos(angle) * ringRadiusX, 0.06, 0.94);
        const baseYRatio = clamp(0.42 + Math.sin(angle) * ringRadiusY, 0.1, 0.86);
        const primary = i < primaryLabels.length ? primaryLabels[i] : undefined;

        return {
          baseXRatio,
          baseYRatio,
          x: baseXRatio * state.viewportW,
          y: baseYRatio * Math.min(state.viewportH, 760),
          vx: (((i * 17) % 11) - 5) * 0.035,
          vy: (((i * 23) % 11) - 5) * 0.035,
          radius: primary ? 3.2 : 1.9,
          label: primary?.label,
          color: primary ? primary.color : i % 2 === 0 ? '#315BE8' : '#16A6A0',
          stageTargetIndex: i % 4,
        };
      }
    );

    const updateSectionMetrics = () => {
      const scrollY = window.scrollY;
      state.scrollY = scrollY;
      const docHeight = Math.max(
        document.body.scrollHeight - state.viewportH,
        1
      );
      const globalProgress = clamp(scrollY / docHeight, 0, 1);

      // 1. Hero scroll transition progress (0 at top -> 1 as hero exits)
      const heroHeight = Math.min(state.viewportH * 0.85, 740);
      state.heroProgress = clamp(scrollY / Math.max(heroHeight, 1), 0, 1);

      // 2. Philosophy & 4-Stage section scroll progress
      const philosophyEl =
        document.getElementById('our-philosophy') ||
        document.getElementById('four-step-framework');
      if (philosophyEl) {
        const rect = philosophyEl.getBoundingClientRect();
        const totalTravel = state.viewportH + rect.height;
        const traveled = state.viewportH - rect.top;
        state.philosophyProgress = clamp(
          traveled / Math.max(totalTravel, 1),
          0,
          1
        );
      } else {
        state.philosophyProgress = clamp((scrollY - 300) / 900, 0, 1);
      }

      // 3. Exemplar Inquiry Walkthrough ("Why Does Ice Float on Water?") scroll scrub
      const iceEl =
        document.getElementById('how-learning-happens') ||
        document.getElementById('ice-learning-example');
      if (iceEl) {
        const rect = iceEl.getBoundingClientRect();
        const totalTravel = state.viewportH + rect.height;
        const traveled = state.viewportH - rect.top;
        state.iceProgress = clamp(traveled / Math.max(totalTravel, 1), 0, 1);
      } else {
        state.iceProgress = 0;
      }

      // Sync CSS Custom Properties on <html>
      root.style.setProperty('--scroll-progress', globalProgress.toFixed(4));
      root.style.setProperty(
        '--hero-progress',
        state.heroProgress.toFixed(4)
      );
      root.style.setProperty(
        '--philosophy-progress',
        state.philosophyProgress.toFixed(4)
      );
      root.style.setProperty('--ice-progress', state.iceProgress.toFixed(4));

      // Compute active 4-stage ambient tint (either from hovered stage card or scroll progress)
      const stageFraction =
        state.hoveredStageIndex >= 0
          ? state.hoveredStageIndex / 3
          : state.philosophyProgress;
      root.style.setProperty(
        '--stage-tint-rgb',
        interpolateStageTintRgb(stageFraction)
      );

      // Sync SVG scroll thread stroke-dashoffset directly
      if (threadPathRef.current) {
        const dashOffset = lerp(1200, 0, state.philosophyProgress);
        threadPathRef.current.style.strokeDashoffset = `${dashOffset.toFixed(1)}`;
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      state.clientMouseX = e.clientX;
      state.clientMouseY = e.clientY;
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      state.needsCssSync = true;

      // Detect if cursor is inside a SubjectCard or 4-Stage Card
      const target = e.target as HTMLElement | null;
      if (target) {
        const subjectCard = target.closest<HTMLElement>('[data-subject-card]');
        if (subjectCard) {
          const subjectKey = (
            subjectCard.getAttribute('data-subject-key') ||
            subjectCard.getAttribute('data-subject-accent') ||
            'blue'
          ).toLowerCase();
          const matchedRgb =
            SUBJECT_ACCENT_RGB_MAP[subjectKey] || SUBJECT_ACCENT_RGB_MAP.blue;
          state.isHoveringSubjectGrid = true;
          state.activeSubjectRgb = matchedRgb;

          // Compute card-relative spotlight coordinates for the card's internal blueprint overlay
          const cardRect = subjectCard.getBoundingClientRect();
          subjectCard.style.setProperty(
            '--card-mouse-x',
            `${(e.clientX - cardRect.left).toFixed(1)}px`
          );
          subjectCard.style.setProperty(
            '--card-mouse-y',
            `${(e.clientY - cardRect.top).toFixed(1)}px`
          );
          subjectCard.style.setProperty('--card-spotlight-rgb', matchedRgb);
        } else {
          state.isHoveringSubjectGrid = Boolean(
            target.closest('#learning-areas')
          );
        }

        const stageCard = target.closest<HTMLElement>('[data-stage-index]');
        if (stageCard) {
          const idx = Number(stageCard.getAttribute('data-stage-index'));
          state.hoveredStageIndex = Number.isNaN(idx) ? -1 : idx;
        } else {
          state.hoveredStageIndex = -1;
        }
      }
    };

    const handleScroll = () => {
      state.needsCssSync = true;
    };

    const handleResize = () => {
      state.viewportW = window.innerWidth;
      state.viewportH = window.innerHeight;
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const heroCanvasH = Math.min(state.viewportH, 780);
        canvasRef.current.width = state.viewportW * dpr;
        canvasRef.current.height = heroCanvasH * dpr;
        canvasRef.current.style.width = `${state.viewportW}px`;
        canvasRef.current.style.height = `${heroCanvasH}px`;
      }
      state.needsCssSync = true;
    };

    const handleVisibilityChange = () => {
      state.isTabVisible = !document.hidden;
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };

    handleResize();
    updateSectionMetrics();

    window.addEventListener('mousemove', handlePointerMove, {passive: true});
    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('resize', handleResize, {passive: true});
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    let rafId = 0;

    const renderFrame = () => {
      if (state.needsCssSync) {
        root.style.setProperty('--mouse-x', `${state.mouseX.toFixed(1)}px`);
        root.style.setProperty('--mouse-y', `${state.mouseY.toFixed(1)}px`);
        root.style.setProperty(
          '--subject-grid-rgb',
          state.activeSubjectRgb
        );
        root.style.setProperty(
          '--subject-spotlight-opacity',
          state.isHoveringSubjectGrid ? '0.16' : '0.07'
        );
        updateSectionMetrics();
        state.needsCssSync = false;
      }

      // Render Hero "Directional Stride Constellation" Canvas when visible in viewport
      const canvas = canvasRef.current;
      if (
        canvas &&
        state.isTabVisible &&
        state.scrollY < state.viewportH * 1.15
      ) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const width = state.viewportW;
          const height = Math.min(state.viewportH, 780);

          ctx.save();
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, width, height);

          // 4-Point Horizontal Progression Targets (01 Understand -> 02 Explore -> 03 Apply -> 04 Create)
          const alignT = clamp(state.heroProgress * 1.15, 0, 1);
          const stageY = height * 0.78;
          const stageXs = [
            width * 0.2,
            width * 0.4,
            width * 0.6,
            width * 0.8,
          ];

          const isMotionDisabled =
            prefersReducedMotion ||
            root.getAttribute('data-pause-animations') === 'true' ||
            root.getAttribute('data-reduce-motion') === 'true';

          // Update node positions
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];

            if (!isMotionDisabled) {
              node.baseXRatio += node.vx / Math.max(width, 800);
              node.baseYRatio += node.vy / Math.max(height, 600);

              if (node.baseXRatio < 0.05 || node.baseXRatio > 0.95) {
                node.vx *= -1;
              }
              if (node.baseYRatio < 0.08 || node.baseYRatio > 0.88) {
                node.vy *= -1;
              }
            }

            let targetX = node.baseXRatio * width;
            let targetY = node.baseYRatio * height;

            // Cursor gravitational attraction within 180px radius
            const heroLocalMouseY = state.clientMouseY + state.scrollY;
            const dxMouse = state.clientMouseX - targetX;
            const dyMouse = heroLocalMouseY - targetY;
            const distMouse = Math.hypot(dxMouse, dyMouse);

            if (distMouse < 180 && distMouse > 1 && !isMotionDisabled) {
              const pull = (1 - distMouse / 180) * 22;
              targetX += (dxMouse / distMouse) * pull;
              targetY += (dyMouse / distMouse) * pull;
            }

            // Scroll Transition: smoothly align into the 4-point horizontal progression path
            const stageX = stageXs[node.stageTargetIndex];
            const finalX = lerp(targetX, stageX, alignT);
            const finalY = lerp(targetY, stageY, alignT);

            node.x = lerp(node.x, finalX, 0.14);
            node.y = lerp(node.y, finalY, 0.14);
          }

          // Draw horizontal 4-point progression spine as user scrolls past hero
          if (alignT > 0.08) {
            ctx.beginPath();
            ctx.moveTo(stageXs[0], stageY);
            ctx.lineTo(stageXs[3], stageY);
            ctx.strokeStyle = `rgba(49, 91, 232, ${(alignT * 0.22).toFixed(3)})`;
            ctx.lineWidth = 1.25;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Draw connecting vector lines between nearby nodes & cursor
          const heroLocalMouseY = state.clientMouseY + state.scrollY;
          for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];

            // Connect to cursor if within 180px radius
            const distToCursor = Math.hypot(
              state.clientMouseX - a.x,
              heroLocalMouseY - a.y
            );
            if (distToCursor < 180) {
              const alpha = (1 - distToCursor / 180) * 0.22;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(state.clientMouseX, heroLocalMouseY);
              ctx.strokeStyle = `rgba(49, 91, 232, ${alpha.toFixed(3)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }

            // Connect nearby concept nodes
            for (let j = i + 1; j < nodes.length; j++) {
              const b = nodes[j];
              const dist = Math.hypot(a.x - b.x, a.y - b.y);
              const maxDist = isMobile ? 130 : 165;
              if (dist < maxDist) {
                const nearCursorBoost =
                  distToCursor < 180 ? 0.14 : 0.065;
                const alpha = (1 - dist / maxDist) * nearCursorBoost;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = `rgba(23, 36, 59, ${alpha.toFixed(3)})`;
                ctx.lineWidth = 0.85;
                ctx.stroke();
              }
            }
          }

          // Draw constellation nodes and subtle discipline coordinate tags
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.globalAlpha = node.label ? 0.34 : 0.2;
            ctx.fill();

            if (node.label && !isMobile) {
              ctx.font = '600 9px "JetBrains Mono", monospace';
              ctx.fillStyle = '#17243B';
              ctx.globalAlpha = 0.26 * (1 - alignT * 0.5);
              ctx.fillText(node.label, node.x + 6, node.y + 3);
            }
          }

          ctx.restore();
        }
      }

      rafId = window.requestAnimationFrame(renderFrame);
    };

    rafId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener(
        'change',
        handleReducedMotionChange
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Base Editorial Paper Surface (#FAF9F6 light / #0B0F19 dark) + 48px Architectural Blueprint Grid (0.04 opacity) */}
      <div className="absolute inset-0 scientific-drafting-canvas" />

      {/* 2. Outer-Margin Slow-Drifting Aurora Orbs (0.08 - 0.12 opacity, keeping center reading column 100% crisp) */}
      <div className="aurora-margin-orb aurora-margin-orb-left" />
      <div className="aurora-margin-orb aurora-margin-orb-right" />

      {/* 3. Dynamic 4-Stage Ambient Tint Layer (Understand #E0F2FE -> Explore #EDE9FE -> Apply #DCFCE7 -> Create #FEF3C7) */}
      <div className="absolute inset-0 stage-ambient-wash transition-colors duration-500" />

      {/* 4. Cursor-Reactive Blueprint Spotlight Sub-Grid (Illuminates sharper 12px/48px coordinate sub-grid beneath cursor) */}
      <div className="absolute inset-0 blueprint-subgrid-spotlight" />

      {/* 5. Hero Section "Directional Stride Constellation" Canvas (Absolute to top of viewport, scrolls naturally with hero) */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full opacity-90"
      />

      {/* 6. Scroll-Driven 4-Stage Progress Thread (Understand -> Explore -> Apply -> Create) */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        className="
          absolute inset-x-0 top-[18vh] h-[72vh] w-full
          opacity-[0.18] dark:opacity-[0.22]
        "
      >
        {/* Subtle Reference Track */}
        <path
          d="M 80 140 C 380 140, 440 340, 720 340 C 1000 340, 1060 560, 1360 560"
          stroke="#315BE8"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.35"
        />
        {/* Live Scroll-Drawn Progress Thread */}
        <path
          ref={threadPathRef}
          d="M 80 140 C 380 140, 440 340, 720 340 C 1000 340, 1060 560, 1360 560"
          stroke="url(#stride-thread-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1200"
          strokeDashoffset="1200"
        />
        {/* 4 Stage Coordinate Anchor Nodes along the thread */}
        <circle cx="140" cy="145" r="4" fill="#0284C7" />
        <circle cx="520" cy="272" r="4" fill="#4F46E5" />
        <circle cx="920" cy="408" r="4" fill="#059669" />
        <circle cx="1300" cy="554" r="4" fill="#D97706" />
        <defs>
          <linearGradient
            id="stride-thread-gradient"
            x1="80"
            y1="140"
            x2="1360"
            y2="560"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="33%" stopColor="#4F46E5" />
            <stop offset="66%" stopColor="#059669" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>

      {/* 7. Scroll-Scrubbed Hexagonal H2O Crystal Lattice Watermark in Far Right Margin (Rotates & expands +9% across Steps 01-06) */}
      <div className="ice-lattice-margin-watermark hidden lg:block">
        <svg
          viewBox="0 0 260 260"
          fill="none"
          className="w-64 h-64 text-[#16A6A0]"
        >
          {/* Outer Hexagonal Crystalline Ring */}
          <polygon
            points="130,18 227,74 227,186 130,242 33,186 33,74"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="5 4"
          />
          {/* Inner Hexagonal Hydrogen-Bond Ring */}
          <polygon
            points="130,58 192,94 192,166 130,202 68,166 68,94"
            stroke="#315BE8"
            strokeWidth="1.2"
          />
          {/* Radial Tetrahedral Bond Vectors */}
          <line x1="130" y1="18" x2="130" y2="58" stroke="currentColor" strokeWidth="1" />
          <line x1="227" y1="74" x2="192" y2="94" stroke="currentColor" strokeWidth="1" />
          <line x1="227" y1="186" x2="192" y2="166" stroke="currentColor" strokeWidth="1" />
          <line x1="130" y1="242" x2="130" y2="202" stroke="currentColor" strokeWidth="1" />
          <line x1="33" y1="186" x2="68" y2="166" stroke="currentColor" strokeWidth="1" />
          <line x1="33" y1="74" x2="68" y2="94" stroke="currentColor" strokeWidth="1" />
          {/* H2O Oxygen Vertex Nodes */}
          <circle cx="130" cy="58" r="4.5" fill="#315BE8" />
          <circle cx="192" cy="94" r="4.5" fill="#16A6A0" />
          <circle cx="192" cy="166" r="4.5" fill="#315BE8" />
          <circle cx="130" cy="202" r="4.5" fill="#16A6A0" />
          <circle cx="68" cy="166" r="4.5" fill="#315BE8" />
          <circle cx="68" cy="94" r="4.5" fill="#16A6A0" />
          {/* Center Coordinate Crosshair */}
          <line x1="122" y1="130" x2="138" y2="130" stroke="#17243B" strokeWidth="1" />
          <line x1="130" y1="122" x2="130" y2="138" stroke="#17243B" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
