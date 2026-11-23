import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'How It Works — Our 4-Step Learning Framework | Genustride Learn',
  description:
    'Discover how Genustride Learn guides learners from curiosity to real-world mastery through our four-step framework: Understand, Explore, Apply, and Create.',
  path: '/how-it-works',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.howItWorksHero.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.howItWorksHero.alt,
});

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
