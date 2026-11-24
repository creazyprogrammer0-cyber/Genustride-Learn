'use client';

import {useCallback, useRef} from 'react';
import {useMotionSystem} from '@/components/motion/motion-provider';

/**
 * Pointer-tracking hook computing 3D perspective card tilt
 * (`perspective(1000px) rotateX() rotateY()`) and diagonal shimmer coordinates.
 */
export function useTilt3D<T extends HTMLElement = HTMLElement>(
  maxTiltDeg = 4.5
) {
  const {isAnimationAllowed} = useMotionSystem();
  const ref = useRef<T | null>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<T>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / Math.max(rect.width, 1);
      const relY = (e.clientY - rect.top) / Math.max(rect.height, 1);

      // Update card-local coordinates for blueprint spotlight & diagonal shimmer
      el.style.setProperty('--card-mouse-x', `${(e.clientX - rect.left).toFixed(1)}px`);
      el.style.setProperty('--card-mouse-y', `${(e.clientY - rect.top).toFixed(1)}px`);
      el.style.setProperty('--shimmer-pct', `${Math.round(relX * 100)}%`);

      if (!isAnimationAllowed) return;

      const rotateY = (relX - 0.5) * 2 * maxTiltDeg;
      const rotateX = (0.5 - relY) * 2 * maxTiltDeg;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -3px, 0)`;
    },
    [isAnimationAllowed, maxTiltDeg]
  );

  const handlePointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  }, []);

  return {
    ref,
    tiltProps: {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
    },
  };
}
