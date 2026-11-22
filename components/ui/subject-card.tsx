'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ImageContainer} from './image-container';
import {MetadataRow} from './badge-label';

export interface SubjectCardProps {
  title: string;
  disciplineCode?: string;
  levelScope: string;
  description: string;
  coreFocus: string;
  exemplarTopics: string[];
  imageSrc?: string;
  imageAlt?: string;
  accentColor?: 'blue' | 'teal' | 'amber';
  onExplore?: () => void;
  className?: string;
}

export function SubjectCard({
  title,
  disciplineCode,
  levelScope,
  description,
  coreFocus,
  exemplarTopics,
  imageSrc,
  imageAlt,
  accentColor = 'blue',
  onExplore,
  className,
}: SubjectCardProps) {
  const toneMap = {
    blue: 'primary' as const,
    teal: 'secondary' as const,
    amber: 'accent' as const,
  };

  return (
    <article
      className={cn(
        'surface-card surface-card-interactive rounded-xl overflow-hidden flex flex-col justify-between p-6',
        className
      )}
    >
      <div className="space-y-4">
        {imageSrc && (
          <ImageContainer
            src={imageSrc}
            alt={imageAlt || title}
            aspectRatio="4:3"
            rounded="lg"
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
            {title}
          </h3>

          <p className="text-[15px] text-[#64748B] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E6EBF2] space-y-2">
          <p className="text-xs font-medium text-[#17243B]">
            Real-World Concept Focus:
          </p>
          <p className="text-xs text-[#64748B] leading-relaxed">{coreFocus}</p>

          <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#17243B]">
            {exemplarTopics.map((topic, idx) => (
              <React.Fragment key={topic}>
                {idx > 0 && (
                  <span aria-hidden="true" className="text-[#64748B]/40">
                    ·
                  </span>
                )}
                <span className="text-xs text-[#17243B]/90">{topic}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E6EBF2] flex items-center justify-between">
        <span className="text-xs text-[#64748B]">
          Understand → Explore → Apply → Create
        </span>
        <button
          type="button"
          onClick={onExplore}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
        >
          <span>Explore Subject</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
