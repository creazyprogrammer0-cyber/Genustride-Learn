'use client';

import {useEffect, useRef} from 'react';
import {useMotionSystem} from '@/components/motion/motion-provider';

/**
 * Centralized requestAnimationFrame loop hook.
 * Automatically pauses when:
 * - `document.hidden` is true (tab in background)
 * - Global `Pause Animations` or `Reduce Motion` is active
 * - `isActive` parameter is false
 */
export function useRafLoop(
  callback: (deltaSec: number, elapsedSec: number) => void,
  isActive = true
) {
  const {isAnimationAllowed} = useMotionSystem();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isActive || !isAnimationAllowed) return;

    let rafId = 0;
    let lastTime = performance.now();
    const startTime = lastTime;
    let isTabVisible = !document.hidden;

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    const tick = (now: number) => {
      const rootPaused =
        document.documentElement.getAttribute('data-pause-animations') ===
          'true' ||
        document.documentElement.getAttribute('data-reduce-motion') === 'true';

      if (isTabVisible && !rootPaused) {
        const deltaSec = Math.min((now - lastTime) / 1000, 0.1);
        const elapsedSec = (now - startTime) / 1000;
        lastTime = now;
        callbackRef.current(deltaSec, elapsedSec);
      } else {
        lastTime = now;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isActive, isAnimationAllowed]);
}
