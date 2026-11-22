'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Button} from './button';
import {KickerLabel} from './badge-label';

export interface CTASectionProps {
  kicker?: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  principleSummary?: string;
  surface?: 'soft-blue' | 'white';
  className?: string;
}

export function CTASection({
  kicker = 'CONCEPT-DRIVEN LEARNING',
  title,
  description,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  principleSummary = 'Understand → Explore → Apply → Create',
  surface = 'soft-blue',
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-2xl border border-[#E6EBF2] p-8 sm:p-12 lg:p-14',
        surface === 'soft-blue' ? 'bg-[#F6F9FF]' : 'bg-white',
        className
      )}
    >
      {/* Subtle Ambient Radial Glows (Diffuse & Restrained) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 w-96 h-96 rounded-full ambient-glow-blue"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 w-96 h-96 rounded-full ambient-glow-teal"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full ambient-glow-amber"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <KickerLabel label={kicker} tone="primary" />
            <span aria-hidden="true" className="text-xs text-[#64748B]/50">
              ·
            </span>
            <span className="text-xs font-medium text-[#16A6A0]">
              {principleSummary}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17243B] tracking-tight leading-[1.18]">
            {title}
          </h2>

          <p className="text-[15px] sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-end justify-start lg:justify-end gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={onPrimaryAction}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {primaryActionLabel}
          </Button>

          {secondaryActionLabel && (
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
