'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import {SUBJECTS_DATA, resolveSubjectSlug} from '@/lib/content-data';
import {SubjectPageTemplate} from '@/components/subject/subject-page-template';

export default function LegacySubjectPage() {
  const params = useParams();
  const rawSlug = typeof params?.slug === 'string' ? params.slug : 'physics';
  const slug = resolveSubjectSlug(rawSlug);
  const subjectData = SUBJECTS_DATA[slug];

  return <SubjectPageTemplate subject={subjectData} />;
}
