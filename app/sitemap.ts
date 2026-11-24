import type {MetadataRoute} from 'next';
import {getSiteUrl} from '@/lib/seo';
import {SUBJECTS_DATA} from '@/lib/content-data';
import {PROJECTS_DATA} from '@/lib/projects-data';
import {RESOURCE_ARTICLES} from '@/lib/resources-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/learn`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/for-parents-and-educators`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const subjectRoutes: MetadataRoute.Sitemap = Object.values(SUBJECTS_DATA).map(
    (subject) => ({
      url: `${siteUrl}/learn/${subject.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    })
  );

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = RESOURCE_ARTICLES.map(
    (article) => ({
      url: `${siteUrl}/resources/${article.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );

  return [
    ...staticRoutes,
    ...subjectRoutes,
    ...projectRoutes,
    ...articleRoutes,
  ];
}
