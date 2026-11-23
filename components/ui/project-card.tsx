'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowRight, FlaskConical} from 'lucide-react';
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
        'surface-card surface-card-interactive rounded-xl overflow-hidden flex flex-col justify-between p-6',
        className
      )}
    >
      <div className="space-y-4">
        {href ? (
          <Link href={href} className="block group focus-visible:outline-none">
            <ImageContainer
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="4:3"
              rounded="lg"
            />
          </Link>
        ) : (
          <ImageContainer
            src={imageSrc}
            alt={imageAlt}
            aspectRatio="4:3"
            rounded="lg"
          />
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
                className="hover:text-[#315BE8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>

          <p className="text-[15px] text-[#64748B] leading-relaxed">
            {whyItMatters}
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-[#17243B]">
              Core Mechanism
            </span>
            <span className="font-mono text-[#315BE8] text-right">
              {scientificPrinciple}
            </span>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            <strong className="text-[#17243B] font-medium">
              What Learners Create:{' '}
            </strong>
            {whatYouCreate}
          </p>
          {materialsPreview && materialsPreview.length > 0 && (
            <p className="text-xs text-[#64748B] leading-relaxed pt-1 border-t border-[#E6EBF2]">
              <strong className="text-[#17243B] font-medium">
                Key Materials:{' '}
              </strong>
              {materialsPreview.join(' · ')}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E6EBF2] flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-[#16A6A0] font-medium">
          <FlaskConical className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Hands-on Observation & Build</span>
        </span>

        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={onInspectProject}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}
