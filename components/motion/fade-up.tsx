'use client';

import React from 'react';
import {cn} from '@/lib/utils';
import {useFadeUpReveal} from '@/hooks/use-fade-up-reveal';

export interface FadeUpProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

export function FadeUp({children, delayMs = 0, className}: FadeUpProps) {
  const {ref, isVisible} = useFadeUpReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delayMs > 0 ? `${delayMs}ms` : undefined,
      }}
      className={cn(
        'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4',
        className
      )}
    >
      {children}
    </div>
  );
}
