import React from 'react';
import {notFound} from 'next/navigation';
import {
  RESOURCE_ARTICLES,
  getResourceArticleBySlug,
} from '@/lib/resources-data';
import {ArticleDetailTemplate} from '@/components/resources/article-detail-template';

export function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({
    'article-slug': article.slug,
  }));
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

  return <ArticleDetailTemplate article={article} />;
}
