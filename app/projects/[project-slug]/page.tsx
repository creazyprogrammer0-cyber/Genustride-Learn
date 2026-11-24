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

  const resolvedRelated = project.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedSource =
    resolvedRelated.length > 0
      ? resolvedRelated
      : PROJECTS_DATA.filter((p) => p.slug !== project.slug).slice(0, 3);

  const relatedProjects = relatedSource.map((rel) => ({
    slug: rel.slug,
    title: rel.title,
    subjectLabel: rel.subjectLabel,
    difficulty: rel.difficulty,
    estimatedTime: rel.estimatedTime,
    imageSrc: rel.imageSrc,
    imageAlt: rel.imageAlt,
    subtitle: rel.subtitle,
    whatYouCreateSummary: rel.whatYouCreateSummary,
    coreMechanismFormula: rel.coreMechanismFormula,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(howToJsonLd)}}
      />
      <ProjectDetailTemplate
        project={project}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
