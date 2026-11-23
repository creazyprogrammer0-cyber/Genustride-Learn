'use client';

import React from 'react';
import Link from 'next/link';
import {ChevronRight} from 'lucide-react';
import {cn} from '@/lib/utils';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (item: BreadcrumbItem) => void;
  className?: string;
}

const DEFAULT_BREADCRUMB_HREFS: Record<string, string> = {
  home: '/',
  learn: '/learn',
  'how-it-works': '/how-it-works',
  projects: '/projects',
  resources: '/resources',
  about: '/about',
  contact: '/contact',
  'for-parents-and-educators': '/for-parents-and-educators',
};

export function Breadcrumbs({items, onNavigate, className}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'flex items-center text-xs text-[#64748B] min-w-0',
        className
      )}
    >
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 min-w-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.current;
          const resolvedHref =
            item.href || DEFAULT_BREADCRUMB_HREFS[item.id];

          return (
            <li
              key={item.id}
              className="inline-flex items-center gap-1.5 min-w-0"
            >
              {index > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-[#64748B]/60 shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-[#17243B] break-words"
                >
                  {item.label}
                </span>
              ) : resolvedHref ? (
                <Link
                  href={resolvedHref}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item);
                    }
                  }}
                  className="py-0.5 text-[#64748B] hover:text-[#315BE8] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate?.(item)}
                  className="py-0.5 text-[#64748B] hover:text-[#315BE8] hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
