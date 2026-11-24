'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

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

export function MotionControls() {
  return null;
}
