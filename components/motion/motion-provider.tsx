'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Pause, Play, EyeOff, Sparkles} from 'lucide-react';

export interface MotionSystemContextValue {
  reduceMotion: boolean;
  pauseAnimations: boolean;
  isAnimationAllowed: boolean;
  toggleReduceMotion: () => void;
  togglePauseAnimations: () => void;
  setReduceMotion: (val: boolean) => void;
  setPauseAnimations: (val: boolean) => void;
}

const MotionSystemContext = createContext<MotionSystemContextValue>({
  reduceMotion: false,
  pauseAnimations: false,
  isAnimationAllowed: true,
  toggleReduceMotion: () => {},
  togglePauseAnimations: () => {},
  setReduceMotion: () => {},
  setPauseAnimations: () => {},
});

export function useMotionSystem(): MotionSystemContextValue {
  return useContext(MotionSystemContext);
}

export function MotionProvider({children}: {children: React.ReactNode}) {
  const [reduceMotion, setReduceMotionState] = useState<boolean>(false);
  const [pauseAnimations, setPauseAnimationsState] = useState<boolean>(false);

  // Sync initial state with system prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const rafId = window.requestAnimationFrame(() => {
      setReduceMotionState(mq.matches);
    });

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotionState(e.matches);
    };
    mq.addEventListener('change', handleChange);
    return () => {
      window.cancelAnimationFrame(rafId);
      mq.removeEventListener('change', handleChange);
    };
  }, []);

  // Sync HTML attributes and CSS custom properties on <html> for zero-lag CSS/rAF checks
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    if (reduceMotion) {
      root.setAttribute('data-reduce-motion', 'true');
    } else {
      root.removeAttribute('data-reduce-motion');
    }

    if (pauseAnimations || reduceMotion) {
      root.setAttribute('data-pause-animations', 'true');
      root.style.setProperty('--animation-play-state', 'paused');
    } else {
      root.removeAttribute('data-pause-animations');
      root.style.setProperty('--animation-play-state', 'running');
    }
  }, [reduceMotion, pauseAnimations]);

  const toggleReduceMotion = useCallback(() => {
    setReduceMotionState((prev) => !prev);
  }, []);

  const togglePauseAnimations = useCallback(() => {
    setPauseAnimationsState((prev) => !prev);
  }, []);

  const value = useMemo<MotionSystemContextValue>(
    () => ({
      reduceMotion,
      pauseAnimations,
      isAnimationAllowed: !reduceMotion && !pauseAnimations,
      toggleReduceMotion,
      togglePauseAnimations,
      setReduceMotion: setReduceMotionState,
      setPauseAnimations: setPauseAnimationsState,
    }),
    [
      reduceMotion,
      pauseAnimations,
      toggleReduceMotion,
      togglePauseAnimations,
    ]
  );

  return (
    <MotionSystemContext.Provider value={value}>
      {children}
    </MotionSystemContext.Provider>
  );
}

/**
 * Compact, non-intrusive Motion & Accessibility Control Bar.
 * Provides instant "Reduce Motion" and "Pause Animations" toggles.
 */
export function MotionControls() {
  const {
    reduceMotion,
    pauseAnimations,
    toggleReduceMotion,
    togglePauseAnimations,
  } = useMotionSystem();

  return (
    <div
      role="region"
      aria-label="Motion and animation accessibility controls"
      className="bg-[#FAF9F6]/90 border-b border-[#E6EBF2] text-xs text-[#64748B]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-[#64748B]">
          <span>Interactive Concept Platform</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-[#17243B]">
            Understand → Explore → Apply → Create
          </span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-[11px] font-medium text-[#64748B] hidden md:inline">
            Motion Preferences:
          </span>

          <button
            type="button"
            aria-pressed={reduceMotion}
            onClick={toggleReduceMotion}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
              reduceMotion
                ? 'bg-[#17243B] text-white'
                : 'bg-white border border-[#E6EBF2] text-[#17243B] hover:border-[#315BE8]/50 hover:text-[#315BE8]'
            }`}
          >
            {reduceMotion ? (
              <EyeOff className="w-3 h-3 text-[#16A6A0]" aria-hidden="true" />
            ) : (
              <Sparkles className="w-3 h-3 text-[#315BE8]" aria-hidden="true" />
            )}
            <span>{reduceMotion ? 'Motion Reduced' : 'Reduce Motion'}</span>
          </button>

          <button
            type="button"
            aria-pressed={pauseAnimations}
            onClick={togglePauseAnimations}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
              pauseAnimations
                ? 'bg-[#315BE8] text-white'
                : 'bg-white border border-[#E6EBF2] text-[#17243B] hover:border-[#315BE8]/50 hover:text-[#315BE8]'
            }`}
          >
            {pauseAnimations ? (
              <Play className="w-3 h-3" aria-hidden="true" />
            ) : (
              <Pause className="w-3 h-3 text-[#16A6A0]" aria-hidden="true" />
            )}
            <span>
              {pauseAnimations ? 'Resume Animations' : 'Pause Animations'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
