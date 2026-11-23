import type {Metadata} from 'next';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from './photography-inventory';
import type {SubjectPageContent} from './content-data';
import type {ProjectDetailData} from './projects-data';
import type {ResourceArticleData} from './resources-data';

export const SITE_NAME = 'Genustride Learn';

/**
 * Resolves the canonical base URL from environment configuration or falls back
 * to the canonical production domain.
 */
export function getSiteUrl(): string {
  const candidates = [
    process.env.APP_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
    'https://learn.genustride.org',
  ];
  for (const candidate of candidates) {
    if (candidate && /^https?:\/\/[^\s]+$/i.test(candidate.trim())) {
      return candidate.trim().replace(/\/+$/, '');
    }
  }
  return 'https://learn.genustride.org';
}

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
}

/**
 * Builds complete, unique Next.js Metadata for any static or dynamic route,
 * including canonical URLs, Open Graph social cards, and Twitter/X cards.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  imageUrl = VERIFIED_PHOTOGRAPHY_INVENTORY.homeHero.url,
  imageAlt = VERIFIED_PHOTOGRAPHY_INVENTORY.homeHero.alt,
  type = 'website',
}: PageSeoConfig): Metadata {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Genuine Organization + WebSite Schema.org JSON-LD.
 * Contains no fake ratings, reviews, course credentials, or unverified claims.
 */
export function buildWebsiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: siteUrl,
        description:
          'Concept-driven practical online learning platform connecting academic subjects with real-world understanding, experiments, and creation.',
        areaServed: 'BD',
        knowsAbout: [
          'Mathematics',
          'Physics',
          'Chemistry',
          'Biology',
          'Technology',
          'Engineering',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description:
          "Don't just learn what it is. Understand why it matters, how it works, and what you can do with it.",
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * Genuine BreadcrumbList + CollectionPage JSON-LD for Subject Landing Pages (/learn/[subject]).
 */
export function buildSubjectJsonLd(subject: SubjectPageContent) {
  const siteUrl = getSiteUrl();
  const subjectUrl = `${siteUrl}/learn/${subject.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Explore Learning',
            item: `${siteUrl}/learn`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: subject.title,
            item: subjectUrl,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': subjectUrl,
        url: subjectUrl,
        name: `${subject.title} — ${subject.heroHeadline} | ${SITE_NAME}`,
        description: subject.shortDescription,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@type': 'Thing',
          name: subject.title,
          description: subject.shortDescription,
        },
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * Genuine BreadcrumbList + HowTo JSON-LD for Hands-On Experiment Guides (/projects/[project-slug]).
 * Uses only the real materials and step-by-step procedures present on the page.
 */
export function buildProjectHowToJsonLd(project: ProjectDetailData) {
  const siteUrl = getSiteUrl();
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Experiments & Projects',
            item: `${siteUrl}/projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': projectUrl,
        name: project.title,
        description: project.subtitle,
        image: project.imageSrc,
        supply: project.requiredMaterials.map((item) => ({
          '@type': 'HowToSupply',
          name: `${item.name} (${item.quantity})`,
        })),
        step: project.stepByStepProcedure.map((step) => ({
          '@type': 'HowToStep',
          position: step.stepNumber,
          name: step.title,
          text: step.instruction,
        })),
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * Genuine BreadcrumbList + Article JSON-LD for Resource Articles (/resources/[article-slug]).
 */
export function buildArticleJsonLd(article: ResourceArticleData) {
  const siteUrl = getSiteUrl();
  const articleUrl = `${siteUrl}/resources/${article.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Learning Resources',
            item: `${siteUrl}/resources`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
      {
        '@type': 'Article',
        '@id': articleUrl,
        headline: article.title,
        description: article.subtitle,
        image: [article.imageSrc],
        articleSection: article.category,
        about: {
          '@type': 'Thing',
          name: article.subjectLabel,
        },
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: siteUrl,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * Genuine FAQPage JSON-LD for /for-parents-and-educators using only the visible FAQs on the page.
 */
export function buildParentsFaqJsonLd(
  faqs: {question: string; answer: string}[]
) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/for-parents-and-educators`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'For Parents & Educators',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': pageUrl,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
