import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'For Parents & Educators — Supporting Conceptual Learning | Genustride Learn',
  description:
    'Practical guidance for parents, teachers, and mentors on helping students move beyond rote cramming toward deep conceptual understanding and safe experiments.',
  path: '/for-parents-and-educators',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.parentsEducatorsHero.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.parentsEducatorsHero.alt,
});

export default function ParentsAndEducatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
