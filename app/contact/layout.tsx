import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Genustride Learn — Questions, Feedback & Collaboration',
  description:
    'Share questions about scientific concepts, feedback from hands-on experiments, or ideas for educational collaboration with the Genustride Learn initiative.',
  path: '/contact',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.bangladeshLearnersVision.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.bangladeshLearnersVision.alt,
});

export default function ContactLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
