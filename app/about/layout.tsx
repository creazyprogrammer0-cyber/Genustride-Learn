import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Genustride Learn — Mission, Vision & Educational Philosophy',
  description:
    'Learn why Genustride Learn was created to replace rote memorization with conceptual clarity, scientific reasoning, and practical learning in Bangladesh.',
  path: '/about',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.aboutHeroCollaborative.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.aboutHeroCollaborative.alt,
});

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
