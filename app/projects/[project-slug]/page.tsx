import React from 'react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {PROJECTS_DATA, getProjectBySlug} from '@/lib/projects-data';
import {ProjectDetailTemplate} from '@/components/projects/project-detail-template';
import {buildPageMetadata, buildProjectHowToJsonLd} from '@/lib/seo';

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    'project-slug': project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{'project-slug': string}>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const projectSlug = resolvedParams['project-slug'];
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return buildPageMetadata({
      title: 'Project Not Found | Genustride Learn',
      description: 'Explore hands-on STEM experiments and projects on Genustride Learn.',
      path: '/projects',
    });
  }

  return buildPageMetadata({
    title: `${project.title} — ${project.subjectLabel} Experiment Guide | Genustride Learn`,
    description: project.subtitle,
    path: `/projects/${project.slug}`,
    imageUrl: project.imageSrc,
    imageAlt: project.imageAlt,
    type: 'article',
  });
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

  const howToJsonLd = buildProjectHowToJsonLd(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(howToJsonLd)}}
      />
      <ProjectDetailTemplate project={project} />
    </>
  );
}
