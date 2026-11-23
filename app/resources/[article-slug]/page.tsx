import React from 'react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {
  RESOURCE_ARTICLES,
  getResourceArticleBySlug,
} from '@/lib/resources-data';
import {ArticleDetailTemplate} from '@/components/resources/article-detail-template';
import {buildArticleJsonLd, buildPageMetadata} from '@/lib/seo';

export function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({
    'article-slug': article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{'article-slug': string}>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const articleSlug = resolvedParams['article-slug'];
  const article = getResourceArticleBySlug(articleSlug);

  if (!article) {
    return buildPageMetadata({
      title: 'Article Not Found | Genustride Learn',
      description:
        'Explore first-principles concept explainers and scientific articles on Genustride Learn.',
      path: '/resources',
    });
  }

  return buildPageMetadata({
    title: `${article.title} — ${article.category} | Genustride Learn`,
    description: article.subtitle,
    path: `/resources/${article.slug}`,
    imageUrl: article.imageSrc,
    imageAlt: article.imageAlt,
    type: 'article',
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{'article-slug': string}>;
}) {
  const resolvedParams = await params;
  const articleSlug = resolvedParams['article-slug'];
  const article = getResourceArticleBySlug(articleSlug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = buildArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}}
      />
      <ArticleDetailTemplate article={article} />
    </>
  );
}
