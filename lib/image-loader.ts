'use client';

import type {ImageLoaderProps} from 'next/image';

/**
 * Custom responsive image loader for Next.js static export (`output: 'export'`).
 * Preserves responsive `srcset` width and quality optimization across Unsplash,
 * Pexels, Wikimedia, and local assets without disabling Next.js image optimization.
 */
export default function cloudflareResponsiveImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const targetQuality = quality || 80;

  // Handle local relative assets
  if (src.startsWith('/')) {
    return `${src}?w=${width}&q=${targetQuality}`;
  }

  try {
    const url = new URL(src);

    // Unsplash native CDN optimization (AVIF/WebP auto-negotiation + width + quality)
    if (url.hostname.includes('unsplash.com')) {
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      url.searchParams.set('w', String(width));
      url.searchParams.set('q', String(targetQuality));
      return url.toString();
    }

    // Pexels native CDN optimization
    if (url.hostname.includes('pexels.com')) {
      url.searchParams.set('auto', 'compress');
      url.searchParams.set('cs', 'tinysrgb');
      url.searchParams.set('w', String(width));
      return url.toString();
    }

    // Generic remote image with width hint
    url.searchParams.set('w', String(width));
    return url.toString();
  } catch {
    return src;
  }
}
