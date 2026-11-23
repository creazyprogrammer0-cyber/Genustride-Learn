import React from 'react';
import type {Metadata} from 'next';
import {SUBJECTS_DATA, resolveSubjectSlug} from '@/lib/content-data';
import {SubjectPageTemplate} from '@/components/subject/subject-page-template';
import {buildPageMetadata, buildSubjectJsonLd} from '@/lib/seo';

export function generateStaticParams() {
  return Object.keys(SUBJECTS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolveSubjectSlug(resolvedParams.slug || 'physics');
  const subjectData = SUBJECTS_DATA[slug];

  return buildPageMetadata({
    title: `${subjectData.title} — ${subjectData.heroHeadline} | Genustride Learn`,
    description: subjectData.shortDescription,
    // Canonical URL points to /learn/[subject] to prevent duplicate indexing
    path: `/learn/${subjectData.slug}`,
    imageUrl: subjectData.imageSrc,
    imageAlt: subjectData.imageAlt,
  });
}

export default async function LegacySubjectPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const resolvedParams = await params;
  const slug = resolveSubjectSlug(resolvedParams.slug || 'physics');
  const subjectData = SUBJECTS_DATA[slug];
  const jsonLd = buildSubjectJsonLd(subjectData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <SubjectPageTemplate subject={subjectData} />
    </>
  );
}
