'use client';

import React from 'react';
import {cn} from '@/lib/utils';
import {useMagneticHover} from '@/hooks/use-magnetic-hover';

export interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 6,
  className,
}: MagneticButtonProps) {
  const {ref, magneticProps} = useMagneticHover<HTMLDivElement>(strength);

  return (
    <div
      ref={ref}
      {...magneticProps}
      className={cn(
        'inline-block transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform',
        className
      )}
    >
      {children}
    </div>
  );
}
