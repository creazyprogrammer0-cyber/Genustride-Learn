import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'Explore Learning — 6 Core Subjects & Real-World Concepts | Genustride Learn',
  description:
    'Explore Mathematics, Physics, Chemistry, Biology, Technology, and Engineering through conceptual explanations, real-world examples, and practical experiments.',
  path: '/learn',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.learnRealWorldElectronics.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.learnRealWorldElectronics.alt,
});

export default function LearnLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
