'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import {SUBJECTS_DATA, resolveSubjectSlug} from '@/lib/content-data';
import {SubjectPageTemplate} from '@/components/subject/subject-page-template';

export default function LearnSubjectPage() {
  const params = useParams();
  const rawSubject =
    typeof params?.subject === 'string' ? params.subject : 'physics';
  const slug = resolveSubjectSlug(rawSubject);
  const subjectData = SUBJECTS_DATA[slug];

  return <SubjectPageTemplate subject={subjectData} />;
}
