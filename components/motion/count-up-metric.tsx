'use client';

import React, {useEffect, useRef, useState} from 'react';
import {useMotionSystem} from '@/components/motion/motion-provider';

export interface CountUpMetricProps {
  target: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  durationMs?: number;
}

export function CountUpMetric({
  target,
  suffix = '',
  label,
  sublabel,
  durationMs = 1300,
}: CountUpMetricProps) {
  const {isAnimationAllowed} = useMotionSystem();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState<number>(target);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !isAnimationAllowed) return;

    const node = containerRef.current;
    if (!node) return;

    let rafId = 0;

    const runCountUp = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const startTime = performance.now();
      setDisplayValue(0);

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / durationMs, 1);
        // Cubic ease-out
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplayValue(Math.round(eased * target));
        if (t < 1) {
          rafId = window.requestAnimationFrame(step);
        } else {
          setDisplayValue(target);
        }
      };

      rafId = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runCountUp();
            observer.disconnect();
          }
        }
      },
      {threshold: 0.25}
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
    };
  }, [target, durationMs, isAnimationAllowed]);

  const shownValue = isAnimationAllowed ? displayValue : target;

  return (
    <div ref={containerRef} className="space-y-1">
      <div className="font-mono tabular-nums text-3xl sm:text-4xl font-extrabold text-[#17243B] tracking-tight">
        <span>{shownValue}</span>
        {suffix && <span className="text-[#315BE8]">{suffix}</span>}
      </div>
      <div className="text-sm font-bold text-[#17243B]">{label}</div>
      {sublabel && (
        <p className="text-xs text-[#64748B] leading-relaxed">{sublabel}</p>
      )}
    </div>
  );
}
