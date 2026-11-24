import React from 'react';
import {cn} from '@/lib/utils';

export type SemanticTone = 'primary' | 'secondary' | 'accent' | 'neutral';

export interface KickerLabelProps {
  index?: string;
  label: string;
  tone?: SemanticTone;
  className?: string;
}

const toneTextClasses: Record<SemanticTone, string> = {
  primary: 'text-[#315BE8]',
  secondary: 'text-[#16A6A0]',
  accent: 'text-[#C87A19]',
  neutral: 'text-[#64748B]',
};

const PRESERVE_UPPER_SET = new Set([
  'STEM',
  'DC',
  'AC',
  'LED',
  'FAQ',
  'FAQS',
  'BD',
  'II',
  'III',
  'IV',
  'SI',
  'PH',
]);

const MINOR_WORDS_SET = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'by',
  'for',
  'from',
  'in',
  'into',
  'of',
  'on',
  'or',
  'the',
  'to',
  'vs',
  'with',
]);

const LABEL_FORMAT_CACHE = new Map<string, string>();

/**
 * Formats ALL-CAPS strings into natural Editorial Title Case while preserving
 * short acronyms (STEM, DC, LED, FAQ, H₂O, BD) and Roman/numeric prefixes.
 * Memoized at module level to avoid repeated string tokenization during renders.
 */
function formatEditorialLabel(raw: string): string {
  if (!raw) return raw;
  const cached = LABEL_FORMAT_CACHE.get(raw);
  if (cached !== undefined) {
    return cached;
  }

  const upperCount = (raw.match(/[A-Z]/g) || []).length;
  const alphaCount = (raw.match(/[A-Za-z]/g) || []).length;
  if (alphaCount === 0 || upperCount / alphaCount < 0.75) {
    LABEL_FORMAT_CACHE.set(raw, raw);
    return raw;
  }

  const formatted = raw
    .split(/(\s+|·|—|\/|-)/)
    .map((token, idx) => {
      if (!/^[A-Za-z0-9]+$/.test(token)) return token;
      const upper = token.toUpperCase();
      if (PRESERVE_UPPER_SET.has(upper)) {
        return upper;
      }
      const lower = token.toLowerCase();
      if (idx > 0 && MINOR_WORDS_SET.has(lower)) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');

  LABEL_FORMAT_CACHE.set(raw, formatted);
  return formatted;
}

/**
 * Unboxed editorial kicker label with optional numerical index (e.g., "01 · Core Concept").
 * Uses natural editorial title case rather than all-caps shouting.
 */
export function KickerLabel({
  index,
  label,
  tone = 'primary',
  className,
}: KickerLabelProps) {
  const displayLabel = formatEditorialLabel(label);

  return (
    <div
      className={cn(
        'inline-flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-normal',
        toneTextClasses[tone],
        className
      )}
    >
      {index && (
        <>
          <span className="font-mono tabular-nums text-xs font-semibold">
            {formatEditorialLabel(index)}
          </span>
          <span aria-hidden="true" className="text-[#64748B]/50">
            —
          </span>
        </>
      )}
      <span>{displayLabel}</span>
    </div>
  );
}

export interface MetadataRowProps {
  items: Array<{
    label: string;
    tone?: SemanticTone;
    mono?: boolean;
  }>;
  separator?: '·' | '/';
  className?: string;
}

/**
 * Unboxed inline metadata row separated by clean typographic separators (· or /).
 * Used for subject names, academic levels, reading durations, and experiment parameters.
 */
export function MetadataRow({
  items,
  separator = '·',
  className,
}: MetadataRowProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#64748B]',
        className
      )}
    >
      {items.map((item, idx) => (
        <React.Fragment key={`${item.label}-${idx}`}>
          {idx > 0 && (
            <span aria-hidden="true" className="text-[#64748B]/45 select-none">
              {separator}
            </span>
          )}
          <span
            className={cn(
              item.tone ? toneTextClasses[item.tone] : 'text-[#64748B]',
              item.tone && item.tone !== 'neutral' && 'font-semibold',
              item.mono && 'font-mono tabular-nums'
            )}
          >
            {formatEditorialLabel(item.label)}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

export interface LearningStageTagProps {
  stage: 'understand' | 'explore' | 'apply' | 'create';
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const stageMeta = {
  understand: {
    step: '01',
    title: 'Understand',
    accent: 'text-[#315BE8]',
    activeBg: 'bg-[#EEF3FF] border-[#315BE8]/30 text-[#17243B]',
  },
  explore: {
    step: '02',
    title: 'Explore',
    accent: 'text-[#16A6A0]',
    activeBg: 'bg-[#EAF8F7] border-[#16A6A0]/30 text-[#17243B]',
  },
  apply: {
    step: '03',
    title: 'Apply',
    accent: 'text-[#315BE8]',
    activeBg: 'bg-[#EEF3FF] border-[#315BE8]/30 text-[#17243B]',
  },
  create: {
    step: '04',
    title: 'Create',
    accent: 'text-[#C87A19]',
    activeBg: 'bg-[#FEF6EB] border-[#F3A644]/40 text-[#17243B]',
  },
};

/**
 * Interactive or structural stage label representing the core principle:
 * Understand -> Explore -> Apply -> Create.
 */
export function LearningStageBadge({
  stage,
  active = false,
  onClick,
  className,
}: LearningStageTagProps) {
  const info = stageMeta[stage];

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
          active
            ? info.activeBg
            : 'bg-white border-[#E6EBF2] text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF]',
          className
        )}
      >
        <span className={cn('font-mono tabular-nums font-semibold', info.accent)}>
          {info.step}
        </span>
        <span>{info.title}</span>
      </button>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-medium text-[#17243B] whitespace-nowrap shrink-0',
        className
      )}
    >
      <span className={cn('font-mono tabular-nums font-semibold', info.accent)}>
        {info.step}
      </span>
      <span aria-hidden="true" className="text-[#64748B]/50">
        ·
      </span>
      <span>{info.title}</span>
    </span>
  );
}

export interface SegmentedFilterProps<T extends string> {
  options: Array<{value: T; label: string; count?: number}>;
  value: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * Functional interactive filter control for switching subjects, learner levels, or resource types.
 */
export function SegmentedFilter<T extends string>({
  options,
  value,
  onChange,
  ariaLabel = 'Filter items',
  className,
}: SegmentedFilterProps<T>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex flex-wrap items-center gap-1 p-1 bg-[#F6F9FF] border border-[#E6EBF2] rounded-xl',
        className
      )}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={isSelected}
            className={cn(
              'min-h-[36px] px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
              isSelected
                ? 'bg-white text-[#17243B] shadow-xs border border-[#E6EBF2]'
                : 'text-[#64748B] hover:text-[#17243B] border border-transparent'
            )}
          >
            <span>{opt.label}</span>
            {typeof opt.count === 'number' && (
              <span
                className={cn(
                  'ml-1.5 font-mono tabular-nums text-[11px]',
                  isSelected ? 'text-[#315BE8]' : 'text-[#64748B]'
                )}
              >
                ({opt.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
