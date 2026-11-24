'use client';

import {useCallback, useRef} from 'react';
import {useMotionSystem} from '@/components/motion/motion-provider';

/**
 * Pointer proximity hook that pulls CTA buttons gently toward the cursor
 * using GPU-composited translate3d() and springs back smoothly on leave.
 */
export function useMagneticHover<T extends HTMLElement = HTMLElement>(
  maxPullPx = 7
) {
  const {isAnimationAllowed} = useMotionSystem();
  const ref = useRef<T | null>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<T>) => {
      if (!isAnimationAllowed) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * maxPullPx;
      const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * maxPullPx;

      el.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0)`;
    },
    [isAnimationAllowed, maxPullPx]
  );

  const handlePointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0px, 0px, 0)';
  }, []);

  return {
    ref,
    magneticProps: {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
    },
  };
}
