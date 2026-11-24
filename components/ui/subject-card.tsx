import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ImageContainer} from './image-container';
import {MetadataRow} from './badge-label';

export interface SubjectCardProps {
  title: string;
  disciplineCode?: string;
  levelScope?: string;
  description: string;
  coreFocus?: string;
  exemplarTopics?: string[];
  imageSrc: string;
  imageAlt?: string;
  accentColor?: 'blue' | 'teal' | 'amber';
  href?: string;
  onExplore?: () => void;
  className?: string;
}

export function SubjectCard({
  title,
  disciplineCode,
  levelScope = 'School · College · University',
  description,
  coreFocus,
  exemplarTopics,
  imageSrc,
  imageAlt,
  accentColor = 'blue',
  href,
  onExplore,
  className,
}: SubjectCardProps) {
  const toneMap = {
    blue: 'primary' as const,
    teal: 'secondary' as const,
    amber: 'accent' as const,
  };

  const normalizedTitle = title.toLowerCase();
  const subjectKey = normalizedTitle.includes('phys')
    ? 'physics'
    : normalizedTitle.includes('math')
      ? 'mathematics'
      : normalizedTitle.includes('chem')
        ? 'chemistry'
        : normalizedTitle.includes('bio')
          ? 'biology'
          : normalizedTitle.includes('tech')
            ? 'technology'
            : normalizedTitle.includes('eng')
              ? 'engineering'
              : accentColor;

  return (
    <article
      data-subject-card="true"
      data-subject-key={subjectKey}
      data-subject-accent={accentColor}
      className={cn(
        'group relative surface-card surface-card-interactive rounded-xl overflow-hidden flex flex-col justify-between p-5 sm:p-6 bg-white/95',
        className
      )}
    >
      {/* Cursor-Reactive Blueprint Coordinate Sub-Grid Spotlight (opacity: 0.14 on hover, tinted to subject theme color) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 subject-card-blueprint-overlay"
      />

      <div className="relative z-10 space-y-4">
        {href ? (
          <Link
            href={href}
            tabIndex={-1}
            aria-hidden="true"
            className="block rounded-lg overflow-hidden focus-visible:outline-none"
          >
            <ImageContainer
              src={imageSrc}
              alt={imageAlt || title}
              aspectRatio="4:3"
              rounded="lg"
              imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </Link>
        ) : (
          <ImageContainer
            src={imageSrc}
            alt={imageAlt || title}
            aspectRatio="4:3"
            rounded="lg"
            imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
          />
        )}

        <div className="space-y-2">
          <MetadataRow
            items={[
              ...(disciplineCode
                ? [
                    {
                      label: disciplineCode,
                      tone: toneMap[accentColor],
                      mono: true,
                    },
                  ]
                : []),
              {label: levelScope, tone: 'neutral' as const},
            ]}
          />

          <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
            {href ? (
              <Link
                href={href}
                className="group-hover:text-[#315BE8] hover:text-[#315BE8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>

          <p className="text-[15px] text-[#64748B] leading-relaxed">
            {description}
          </p>
        </div>

        {(coreFocus || (exemplarTopics && exemplarTopics.length > 0)) && (
          <div className="pt-3.5 border-t border-[#E6EBF2] space-y-2">
            {coreFocus && (
              <p className="text-xs text-[#64748B] leading-relaxed">
                <strong className="font-semibold text-[#17243B]">
                  Real-World Lens:{' '}
                </strong>
                {coreFocus}
              </p>
            )}

            {exemplarTopics && exemplarTopics.length > 0 && (
              <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#17243B]">
                {exemplarTopics.map((topic, idx) => (
                  <React.Fragment key={topic}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-[#64748B]/40">
                        ·
                      </span>
                    )}
                    <span className="text-xs font-medium text-[#17243B]/85">
                      {topic}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative z-10 mt-5 pt-3.5 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <span className="text-xs text-[#64748B]">
          {exemplarTopics && exemplarTopics.length > 0
            ? `${exemplarTopics.length} Core Topic Areas`
            : 'Concepts & Experiments'}
        </span>
        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>Explore {title}</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0"
              aria-hidden="true"
            />
          </Link>
        ) : (
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>Explore {title}</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </article>
  );
}
