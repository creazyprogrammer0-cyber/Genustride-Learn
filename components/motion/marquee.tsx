'use client';

import React from 'react';
import {cn} from '@/lib/utils';

const DEFAULT_MARQUEE_ITEMS = [
  'Question',
  'Experiment',
  'Build',
  'Create',
  'Understand',
  'Explore',
  'Apply',
] as const;

export interface MarqueeProps {
  items?: readonly string[];
  className?: string;
}

/**
 * Infinite Kinetic Marquee Ticker
 * Seamless horizontal scroll that pauses on hover and respects global Pause Animations / Reduce Motion.
 */
export function Marquee({
  items = DEFAULT_MARQUEE_ITEMS,
  className,
}: MarqueeProps) {
  const repeatedGroups = [0, 1, 2, 3];

  return (
    <div
      aria-label="Conceptual learning cycle keywords"
      className={cn(
        'group relative w-full overflow-hidden border-y border-[#E6EBF2] bg-[#FAF9F6] py-3.5 select-none',
        className
      )}
    >
      {/* Left & Right edge soft gradient fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF9F6] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF9F6] to-transparent"
      />

      <div className="kinetic-marquee-track flex w-max items-center">
        {repeatedGroups.map((groupIdx) => (
          <div
            key={groupIdx}
            aria-hidden={groupIdx > 0 ? 'true' : undefined}
            className="flex shrink-0 items-center"
          >
            {items.map((word) => (
              <span
                key={`${groupIdx}-${word}`}
                className="inline-flex items-center text-sm sm:text-base font-bold tracking-tight text-[#17243B]/80"
              >
                <span className="px-5 sm:px-7">{word}</span>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-[#315BE8]"
                >
                  •
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
