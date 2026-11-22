'use client';

import React, {useState} from 'react';
import {Compass} from 'lucide-react';
import {cn} from '@/lib/utils';

export type ImageAspectRatio = '16:9' | '4:3' | '1:1' | '3:4';

export interface ImageContainerProps {
  src: string;
  alt: string;
  aspectRatio?: ImageAspectRatio;
  caption?: string;
  creditOrContext?: string;
  rounded?: 'none' | 'lg' | 'xl';
  className?: string;
  imageClassName?: string;
}

const aspectClasses: Record<ImageAspectRatio, string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
};

const roundedClasses = {
  none: 'rounded-none',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

export function ImageContainer({
  src,
  alt,
  aspectRatio = '4:3',
  caption,
  creditOrContext,
  rounded = 'xl',
  className,
  imageClassName,
}: ImageContainerProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={cn('w-full', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden bg-[#F6F9FF] border border-[#E6EBF2]',
          aspectClasses[aspectRatio],
          roundedClasses[rounded]
        )}
      >
        {!hasError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={cn(
              'w-full h-full object-cover object-center transition-transform duration-300 ease-out',
              imageClassName
            )}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F6F9FF] via-white to-[#EAF8F7]">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#315BE8] mb-2.5 shadow-2xs">
              <Compass className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-[#17243B] max-w-xs line-clamp-2">
              {alt}
            </p>
          </div>
        )}
      </div>

      {(caption || creditOrContext) && (
        <figcaption className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
          {caption && <span>{caption}</span>}
          {creditOrContext && (
            <span className="font-mono text-[11px] text-[#64748B]/80">
              {creditOrContext}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
