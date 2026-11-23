import type {Metadata} from 'next';
import {buildPageMetadata} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export const metadata: Metadata = buildPageMetadata({
  title: 'Experiments & Projects — Hands-On STEM Laboratory Guides | Genustride Learn',
  description:
    'Try practical scientific experiments, engineering builds, and mathematical investigations with step-by-step procedures, safety rules, and observation logs.',
  path: '/projects',
  imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.projectElectricCircuit.url,
  imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.projectElectricCircuit.alt,
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
