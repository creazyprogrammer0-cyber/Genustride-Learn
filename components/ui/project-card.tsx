'use client';

import React from 'react';
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
        <ImageContainer
          src={imageSrc}
          alt={imageAlt}
          aspectRatio="4:3"
          rounded="lg"
        />

        <div className="space-y-2">
          <MetadataRow
            items={[
              {label: subject, tone: 'secondary'},
              {label: level, tone: 'neutral'},
              {label: duration, tone: 'neutral', mono: true},
            ]}
          />

          <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
            {title}
          </h3>

          <p className="text-[15px] text-[#64748B] leading-relaxed">
            {whyItMatters}
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#17243B]">
              Core Mechanism
            </span>
            <span className="font-mono text-[#315BE8]">
              {scientificPrinciple}
            </span>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            <strong className="text-[#17243B] font-medium">
              What Learners Create:{' '}
            </strong>
            {whatYouCreate}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E6EBF2] flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-[#16A6A0] font-medium">
          <FlaskConical className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Hands-on Observation & Build</span>
        </span>

        <button
          type="button"
          onClick={onInspectProject}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
        >
          <span>View Experiment Guide</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
