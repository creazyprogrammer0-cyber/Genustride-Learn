import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Globe2,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Button,
  MetadataRow,
  Breadcrumbs,
  SectionHeading,
  ImageContainer,
  ResourceCard,
  CTASection,
} from '@/components/design-system';
import {
  ResourceArticleData,
  RESOURCE_ARTICLES,
  getResourceArticleBySlug,
} from '@/lib/resources-data';
import {getProjectBySlug} from '@/lib/projects-data';
import {ArticleReasoningChallenge} from '@/components/resources/article-reasoning-challenge';

export function ArticleDetailTemplate({
  article,
}: {
  article: ResourceArticleData;
}) {
  const companionProject = getProjectBySlug(article.relatedProjectSlug);
  const relatedArticles = article.relatedArticleSlugs
    .map((slug) => getResourceArticleBySlug(slug))
    .filter((a): a is ResourceArticleData => Boolean(a));

  const fallbackRelatedArticles =
    relatedArticles.length > 0
      ? relatedArticles
      : RESOURCE_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        activeSection="resources"
        primaryCtaLabel="All Resources"
        primaryCtaHref="/resources"
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            ARTICLE HEADER & CORE QUESTION
           ===================================================================== */}
        <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-16 border-b border-[#E6EBF2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-hero"
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Breadcrumbs
                items={[
                  {id: 'home', label: 'Home', href: '/'},
                  {
                    id: 'resources',
                    label: 'Learning Resources',
                    href: '/resources',
                  },
                  {id: article.slug, label: article.title, current: true},
                ]}
              />

              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Resources</span>
              </Link>
            </div>

            <div className="space-y-4">
              <MetadataRow
                items={[
                  {label: article.category, tone: 'primary'},
                  {label: article.subjectLabel, tone: 'secondary'},
                  {label: article.readingTime, tone: 'neutral', mono: true},
                ]}
              />

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#17243B] tracking-tight leading-[1.12]">
                {article.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed">
                {article.subtitle}
              </p>
            </div>

            {/* Core Guiding Question Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F6F9FF] border-l-4 border-[#315BE8] space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                Core Question Explored in This Article
              </div>
              <p className="text-base sm:text-lg font-bold text-[#17243B]">
                {article.coreQuestion}
              </p>
            </div>

            {/* Main Editorial Illustration */}
            <div className="pt-2">
              <ImageContainer
                src={article.imageSrc}
                alt={article.imageAlt}
                aspectRatio="16:9"
                rounded="lg"
                priority
                caption={`${article.publishedContext} · ${article.subjectLabel}`}
              />
            </div>
          </div>
        </section>

        {/* =====================================================================
            ARTICLE BODY & CONCEPTUAL SECTIONS
           ===================================================================== */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Key Takeaways Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#16A6A0] uppercase">
                <BookOpen className="w-4 h-4" />
                <span>Key Conceptual Takeaways</span>
              </div>
              <ul className="space-y-3">
                {article.quickSummary.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-[#17243B] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#16A6A0] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured Article Sections */}
            <div className="space-y-10">
              {article.sections.map((section, idx) => (
                <article key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-[26px] font-bold text-[#17243B] tracking-tight">
                    {section.heading}
                  </h2>

                  <div className="space-y-4 text-base sm:text-[17px] text-[#17243B]/90 leading-[1.75]">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {section.keyPrincipleOrFormula && (
                    <div className="my-5 p-5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-2">
                      <div className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                        {section.keyPrincipleOrFormula.label}
                      </div>
                      <div className="text-base sm:text-lg font-mono font-bold text-[#17243B]">
                        {section.keyPrincipleOrFormula.expression}
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {section.keyPrincipleOrFormula.explanation}
                      </p>
                    </div>
                  )}

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 pl-1 pt-1">
                      {section.bulletPoints.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] text-sm text-[#17243B] flex items-start gap-2.5"
                        >
                          <span className="font-mono font-bold text-[#315BE8]">
                            →
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            {/* Real-World Application & Bangladesh Context */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#EAF8F7] border border-[#16A6A0]/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#16A6A0] uppercase">
                <Globe2 className="w-4 h-4" />
                <span>Where This Concept Operates in the Real World</span>
              </div>
              <h3 className="text-xl font-bold text-[#17243B]">
                {article.realWorldConnection.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#17243B]/90 leading-relaxed">
                {article.realWorldConnection.description}
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#16A6A0]/20 text-xs sm:text-sm text-[#17243B] leading-relaxed">
                <strong className="text-[#16A6A0]">
                  In Bangladesh & Practical Engineering:{' '}
                </strong>
                {article.realWorldConnection.bangladeshExample}
              </div>
            </div>

            {/* Interactive Critical Thinking Check (Leaf Client Component) */}
            <ArticleReasoningChallenge
              prompt={article.thinkingChallenge.prompt}
              reasoningGuide={article.thinkingChallenge.reasoningGuide}
            />

            {/* Companion Hands-On Experiment Banner */}
            {companionProject && (
              <div className="p-6 sm:p-7 rounded-2xl bg-[#17243B] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16A6A0] uppercase">
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>Companion Hands-On Experiment</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Try It Yourself: {companionProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    {companionProject.subtitle}
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href={`/projects/${companionProject.slug}`}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Open Experiment Guide
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            RELATED ARTICLES
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionHeading
                kicker="CONTINUE EXPLORING"
                kickerTone="primary"
                title="Related Articles and Concept Guides."
                description="Explore connected explanations from the Genustride Learn resource library."
              />
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8] hover:text-[#2548C9]"
              >
                <span>All Learning Resources</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {fallbackRelatedArticles.map((rel) => (
                <ResourceCard
                  key={rel.slug}
                  title={rel.title}
                  format={rel.category}
                  subject={rel.subjectLabel}
                  readTime={rel.readingTime}
                  summary={rel.subtitle}
                  conceptQuestions={[rel.coreQuestion]}
                  imageSrc={rel.imageSrc}
                  imageAlt={rel.imageAlt}
                  href={`/resources/${rel.slug}`}
                  actionLabel="Read Article"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="UNDERSTAND → EXPLORE → APPLY → CREATE"
              title="Explore the Subject Behind This Article."
              description={`Dive deeper into ${article.subjectLabel} or browse all seven categories in our Learning Resources hub.`}
              primaryActionLabel={`Explore ${article.subjectLabel}`}
              primaryActionHref={`/learn/${article.subjectSlug}`}
              secondaryActionLabel="Back to All Resources"
              secondaryActionHref="/resources"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
