import React from 'react';
import {notFound} from 'next/navigation';
import {PROJECTS_DATA, getProjectBySlug} from '@/lib/projects-data';
import {ProjectDetailTemplate} from '@/components/projects/project-detail-template';

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    'project-slug': project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{'project-slug': string}>;
}) {
  const resolvedParams = await params;
  const projectSlug = resolvedParams['project-slug'];
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailTemplate project={project} />;
}
