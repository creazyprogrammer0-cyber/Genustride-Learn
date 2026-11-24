'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ImageContainer} from './image-container';
import {MetadataRow} from './badge-label';

export interface ProjectCardProps {
  title: string;
  subject: string;
  level: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  whyItMatters: string;
  whatYouCreate: string;
  scientificPrinciple: string;
  href?: string;
  materialsPreview?: string[];
  actionLabel?: string;
  onInspectProject?: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  subject,
  level,
  duration,
  imageSrc,
  imageAlt,
  whyItMatters,
  whatYouCreate,
  scientificPrinciple,
  href,
  materialsPreview,
  actionLabel = 'View Experiment Guide',
  onInspectProject,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group surface-card surface-card-interactive rounded-xl overflow-hidden flex flex-col justify-between p-5 sm:p-6 bg-white',
        className
      )}
    >
      <div className="space-y-4">
        {href ? (
          <Link
            href={href}
            tabIndex={-1}
            aria-hidden="true"
            className="block rounded-lg overflow-hidden focus-visible:outline-none"
          >
            <ImageContainer
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="4:3"
              rounded="lg"
              imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </Link>
        ) : (
          <div
            onClick={onInspectProject}
            className={cn(
              'rounded-lg overflow-hidden',
              onInspectProject && 'cursor-pointer'
            )}
          >
            <ImageContainer
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="4:3"
              rounded="lg"
              imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </div>
        )}

        <div className="space-y-2">
          <MetadataRow
            items={[
              {label: subject, tone: 'secondary'},
              {label: level, tone: 'neutral'},
              {label: duration, tone: 'neutral', mono: true},
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
            ) : onInspectProject ? (
              <button
                type="button"
                onClick={onInspectProject}
                className="text-left group-hover:text-[#315BE8] hover:text-[#315BE8] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
              >
                {title}
              </button>
            ) : (
              title
            )}
          </h3>

          <p className="text-[15px] text-[#64748B] leading-relaxed">
            {whyItMatters}
          </p>
        </div>

        {/* Clean Hairline Ledger (No nested "card within a card" box) */}
        <div className="pt-3.5 border-t border-[#E6EBF2] space-y-2 text-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
            <span className="font-semibold text-[#17243B]">
              Governing Principle
            </span>
            <span className="font-mono text-[#315BE8] font-medium">
              {scientificPrinciple}
            </span>
          </div>

          <p className="text-[#64748B] leading-relaxed">
            <strong className="text-[#17243B] font-semibold">
              What Learners Build:{' '}
            </strong>
            {whatYouCreate}
          </p>

          {materialsPreview && materialsPreview.length > 0 && (
            <p className="text-[#64748B] leading-relaxed pt-1">
              <strong className="text-[#17243B] font-semibold">
                Apparatus:{' '}
              </strong>
              {materialsPreview.join(' · ')}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <span className="text-xs text-[#16A6A0] font-medium">
          Hands-On Experiment
        </span>

        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>{actionLabel}</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0"
              aria-hidden="true"
            />
          </Link>
        ) : (
          <button
            type="button"
            onClick={onInspectProject}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>{actionLabel}</span>
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
