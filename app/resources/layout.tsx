import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'Learning Resources & Concept Articles | Genustride Learn',
  description:
    'Read first-principles concept explainers, everyday science investigations, mathematical intuition guides, and critical thinking challenges for curious minds.',
  path: '/resources',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.articleReadEquations.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.articleReadEquations.alt,
});

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
