'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ImageContainer} from './image-container';
import {MetadataRow} from './badge-label';

export interface ResourceCardProps {
  title: string;
  format: string;
  subject: string;
  readTime: string;
  summary: string;
  conceptQuestions: string[];
  imageSrc?: string;
  imageAlt?: string;
  layout?: 'horizontal' | 'vertical';
  href?: string;
  actionLabel?: string;
  onOpenResource?: () => void;
  className?: string;
}

export function ResourceCard({
  title,
  format,
  subject,
  readTime,
  summary,
  conceptQuestions,
  imageSrc,
  imageAlt,
  layout = 'vertical',
  href,
  actionLabel = 'Read Concept Guide',
  onOpenResource,
  className,
}: ResourceCardProps) {
  const isHorizontal = layout === 'horizontal' && Boolean(imageSrc);

  return (
    <article
      className={cn(
        'group surface-card surface-card-interactive rounded-xl overflow-hidden p-5 sm:p-6 bg-white',
        isHorizontal
          ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch'
          : 'flex flex-col justify-between',
        className
      )}
    >
      {imageSrc && (
        <div className={cn(isHorizontal ? 'lg:col-span-5' : 'mb-4')}>
          {href ? (
            <Link
              href={href}
              tabIndex={-1}
              aria-hidden="true"
              className="block h-full rounded-lg overflow-hidden focus-visible:outline-none"
            >
              <ImageContainer
                src={imageSrc}
                alt={imageAlt || title}
                aspectRatio={isHorizontal ? '16:9' : '4:3'}
                rounded="lg"
                className="h-full"
                imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </Link>
          ) : (
            <ImageContainer
              src={imageSrc}
              alt={imageAlt || title}
              aspectRatio={isHorizontal ? '16:9' : '4:3'}
              rounded="lg"
              className="h-full"
              imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          )}
        </div>
      )}

      <div
        className={cn(
          'flex flex-col justify-between',
          isHorizontal ? 'lg:col-span-7' : 'flex-1'
        )}
      >
        <div className="space-y-3">
          <MetadataRow
            items={[
              {label: format, tone: 'primary'},
              {label: subject, tone: 'secondary'},
              {label: readTime, tone: 'neutral', mono: true},
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
            {summary}
          </p>

          {conceptQuestions.length > 0 && (
            <div className="pt-3 border-t border-[#E6EBF2] space-y-1.5">
              <p className="text-xs font-semibold text-[#17243B]">
                Core Inquiry:
              </p>
              <ul className="space-y-1 text-xs text-[#64748B]">
                {conceptQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="text-[#315BE8] font-mono select-none shrink-0"
                    >
                      →
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-5 pt-3.5 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="text-xs text-[#64748B]">
            First-Principles Explanation
          </span>

          {href ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
            >
              <span>{actionLabel}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <button
              type="button"
              onClick={onOpenResource}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
            >
              <span>{actionLabel}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
