'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {Compass} from 'lucide-react';
import {cn} from '@/lib/utils';

export type ImageAspectRatio = '16:9' | '4:3' | '1:1' | '3:4';
export type ImageObjectPosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

export interface ImageContainerProps {
  src: string;
  alt: string;
  aspectRatio?: ImageAspectRatio;
  objectPosition?: ImageObjectPosition;
  priority?: boolean;
  sizes?: string;
  caption?: string;
  creditOrContext?: string;
  rounded?: 'none' | 'md' | 'lg' | 'xl';
  className?: string;
  imageClassName?: string;
}

const aspectClasses: Record<ImageAspectRatio, string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
};

const intrinsicDimensions: Record<
  ImageAspectRatio,
  {width: number; height: number}
> = {
  '16:9': {width: 1200, height: 675},
  '4:3': {width: 1200, height: 900},
  '1:1': {width: 900, height: 900},
  '3:4': {width: 900, height: 1200},
};

const objectPositionClasses: Record<ImageObjectPosition, string> = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
};

const roundedClasses = {
  none: 'rounded-none',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

function ImageContainerBase({
  src,
  alt,
  aspectRatio = '4:3',
  objectPosition = 'center',
  priority = false,
  sizes,
  caption,
  creditOrContext,
  rounded = 'lg',
  className,
  imageClassName,
}: ImageContainerProps) {
  const [hasError, setHasError] = useState(false);

  const dims = intrinsicDimensions[aspectRatio];
  const resolvedSizes =
    sizes ||
    (priority
      ? '(max-width: 640px) 94vw, (max-width: 1024px) 52vw, 680px'
      : '(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 420px');

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
          <Image
            src={src}
            alt={alt}
            width={dims.width}
            height={dims.height}
            sizes={resolvedSizes}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            quality={80}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={cn(
              'w-full h-full object-cover transition-transform duration-300 ease-out',
              objectPositionClasses[objectPosition],
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

export const ImageContainer = React.memo(ImageContainerBase);
ImageContainer.displayName = 'ImageContainer';
