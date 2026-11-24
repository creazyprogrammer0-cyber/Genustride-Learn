import React from 'react';
import {cn} from '@/lib/utils';
import {KickerLabel, SemanticTone} from './badge-label';

export interface SectionHeadingProps {
  index?: string;
  kicker?: string;
  kickerTone?: SemanticTone;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  index,
  kicker,
  kickerTone = 'primary',
  title,
  description,
  align = 'left',
  action,
  className,
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        !isCentered && action && 'md:flex-row md:items-end md:justify-between',
        isCentered && 'items-center text-center',
        className
      )}
    >
      <div className={cn('space-y-3', isCentered ? 'max-w-3xl' : 'max-w-3xl')}>
        {kicker && (
          <KickerLabel index={index} label={kicker} tone={kickerTone} />
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight text-[#17243B] leading-[1.15] text-balance">
          {title}
        </h2>
        {description && (
          <p className="text-[15px] sm:text-[17px] text-[#64748B] leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
