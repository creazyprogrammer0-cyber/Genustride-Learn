'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ImageContainer} from './image-container';
import {MetadataRow} from './badge-label';

export interface SubjectCardProps {
  title: string;
  disciplineCode?: string;
  levelScope: string;
  description: string;
  coreFocus?: string;
  exemplarTopics?: string[];
  imageSrc?: string;
  imageAlt?: string;
  accentColor?: 'blue' | 'teal' | 'amber';
  href?: string;
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
  href,
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
        'surface-card surface-card-interactive rounded-xl overflow-hidden flex flex-col justify-between p-6 bg-white',
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
            {href ? (
              <Link
                href={href}
                className="hover:text-[#315BE8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
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
          <div className="pt-3 border-t border-[#E6EBF2] space-y-2">
            {coreFocus && (
              <p className="text-xs text-[#64748B] leading-relaxed">
                <strong className="font-semibold text-[#17243B]">
                  Key Focus:{' '}
                </strong>
                {coreFocus}
              </p>
            )}

            {exemplarTopics && exemplarTopics.length > 0 && (
              <div className="pt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#17243B]">
                {exemplarTopics.map((topic, idx) => (
                  <React.Fragment key={topic}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-[#64748B]/40">
                        ·
                      </span>
                    )}
                    <span className="text-xs text-[#17243B]/85">{topic}</span>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-[#E6EBF2] flex items-center justify-between gap-3">
        <span className="text-xs text-[#64748B]">
          Understand → Explore → Apply → Create
        </span>
        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>Explore {title}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>Explore {title}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}
