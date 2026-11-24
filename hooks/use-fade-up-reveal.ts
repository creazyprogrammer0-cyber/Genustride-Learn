'use client';

import {useEffect, useRef, useState} from 'react';
import {useMotionSystem} from '@/components/motion/motion-provider';

export interface UseFadeUpRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Shared IntersectionObserver hook for staggered entrance reveals.
 * Immediately marks content visible when `reduceMotion` is active.
 */
export function useFadeUpReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseFadeUpRevealOptions = {}
) {
  const {threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = true} =
    options;
  const {reduceMotion} = useMotionSystem();
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else {
            // Only hide elements that are currently below the viewport fold
            if (entry.boundingClientRect.top > window.innerHeight * 0.9) {
              setIsVisible(false);
            }
          }
        }
      },
      {threshold, rootMargin}
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, reduceMotion]);

  return {
    ref,
    isVisible: reduceMotion ? true : isVisible,
  };
}
