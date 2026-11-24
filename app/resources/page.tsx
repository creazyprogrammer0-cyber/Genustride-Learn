'use client';

import React, {useMemo, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Search,
  X,
  Sparkles,
  FlaskConical,
  Layers,
  Clock,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Button,
  KickerLabel,
  MetadataRow,
  Breadcrumbs,
  SectionHeading,
  ImageContainer,
  ResourceCard,
  CTASection,
} from '@/components/design-system';
import {
  RESOURCE_ARTICLES,
  RESOURCE_CATEGORIES,
  ResourceCategoryName,
} from '@/lib/resources-data';

export default function ResourcesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    ResourceCategoryName | 'All'
  >('All');
  const [searchQuery, setSearchQuery] = useState('');

  const spotlightArticle = RESOURCE_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return RESOURCE_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.subjectLabel.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        activeSection="resources"
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            HERO SECTION
            Headline: "Ideas, Explanations, and Discoveries Worth Exploring."
           ===================================================================== */}
        <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#E6EBF2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-hero"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Breadcrumbs
              items={[
                {id: 'home', label: 'Home', href: '/'},
                {
                  id: 'resources',
                  label: 'Learning Resources & Articles',
                  current: true,
                },
              ]}
              onNavigate={(item) => {
                if (item.href) router.push(item.href);
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <KickerLabel
                    label="GENUSTRIDE LEARNING RESOURCES · CONCEPT LIBRARY"
                    tone="primary"
                  />
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#17243B] tracking-tight leading-[1.08]">
                    Ideas, Explanations, and Discoveries Worth Exploring.
                  </h1>
                  <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl">
                    Deep-dive concept explainers, everyday scientific
                    investigations, mathematical intuition guides, and critical
                    thinking challenges written for curious minds.
                  </p>
                </div>

                {/* Search Input & Quick Filter */}
                <div className="max-w-xl">
                  <div className="relative">
                    <Search className="w-4 h-4 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles by concept, equation, or everyday question..."
                      aria-label="Search learning resources"
                      className="w-full pl-11 pr-10 py-3 text-sm rounded-xl border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search query"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-[#64748B] hover:text-[#17243B] hover:bg-[#E6EBF2]/60 transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Category Count Summary */}
                <MetadataRow
                  items={[
                    {label: '7 Editorial Categories', tone: 'primary'},
                    {label: 'First-Principles Reasoning', tone: 'secondary'},
                    {label: 'Connected to Hands-On Labs', tone: 'neutral'},
                  ]}
                />
              </div>

              {/* Spotlight Editorial Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-4 sm:p-5 shadow-lg space-y-4">
                  <Link
                    href={`/resources/${spotlightArticle.slug}`}
                    className="block focus-visible:outline-none"
                  >
                    <ImageContainer
                      src={spotlightArticle.imageSrc}
                      alt={spotlightArticle.imageAlt}
                      aspectRatio="16:9"
                      rounded="xl"
                      priority
                    />
                  </Link>

                  <div className="space-y-2">
                    <MetadataRow
                      items={[
                        {label: spotlightArticle.category, tone: 'primary'},
                        {
                          label: spotlightArticle.readingTime,
                          tone: 'neutral',
                          mono: true,
                        },
                      ]}
                    />
                    <h2 className="text-lg font-bold text-[#17243B]">
                      <Link
                        href={`/resources/${spotlightArticle.slug}`}
                        className="hover:text-[#315BE8] transition-colors"
                      >
                        {spotlightArticle.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {spotlightArticle.subtitle}
                    </p>
                    <div className="pt-2 flex items-center justify-between border-t border-[#E6EBF2]">
                      <span className="text-xs font-medium text-[#16A6A0]">
                        {spotlightArticle.subjectLabel}
                      </span>
                      <Link
                        href={`/resources/${spotlightArticle.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2 — SEVEN RESOURCE CATEGORIES & INTERACTIVE FILTER
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <SectionHeading
                kicker="01 · BROWSE BY CATEGORY"
                kickerTone="primary"
                title="Seven Perspectives on Conceptual Understanding."
                description="Select any category below to filter articles, or browse all seven domains of inquiry."
              />

              {(selectedCategory !== 'All' || searchQuery.trim() !== '') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-[#315BE8] hover:underline self-start md:self-end cursor-pointer"
                >
                  Reset Filters (Show All Articles)
                </button>
              )}
            </div>

            {/* Category Selector Tabs */}
            <div className="space-y-3">
              <div
                role="group"
                aria-label="Filter articles by category"
                className="flex flex-wrap items-center gap-2"
              >
                <button
                  type="button"
                  aria-pressed={selectedCategory === 'All'}
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                    selectedCategory === 'All'
                      ? 'bg-[#315BE8] text-white border-[#315BE8]'
                      : 'bg-white text-[#17243B] border-[#E6EBF2] hover:border-[#315BE8]'
                  }`}
                >
                  All Categories ({RESOURCE_ARTICLES.length})
                </button>

                {RESOURCE_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() =>
                        setSelectedCategory(isSelected ? 'All' : cat.name)
                      }
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                        isSelected
                          ? 'bg-[#315BE8] text-white border-[#315BE8]'
                          : 'bg-white text-[#17243B] border-[#E6EBF2] hover:border-[#315BE8]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              <div
                aria-live="polite"
                className="text-xs font-medium text-[#64748B]"
              >
                Showing {filteredArticles.length} of {RESOURCE_ARTICLES.length}{' '}
                {filteredArticles.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All'
                  ? ` in "${selectedCategory}"`
                  : ''}
                {searchQuery.trim()
                  ? ` matching "${searchQuery.trim()}"`
                  : ''}
              </div>
            </div>

            {/* Filtered Article Cards Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredArticles.map((article) => (
                  <ResourceCard
                    key={article.slug}
                    title={article.title}
                    format={article.category}
                    subject={article.subjectLabel}
                    readTime={article.readingTime}
                    summary={article.subtitle}
                    conceptQuestions={[
                      article.coreQuestion,
                      article.quickSummary[0],
                    ]}
                    imageSrc={article.imageSrc}
                    imageAlt={article.imageAlt}
                    href={`/resources/${article.slug}`}
                    actionLabel="Read Full Article"
                  />
                ))}
              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-white border border-[#E6EBF2] text-center space-y-3">
                <p className="text-base font-bold text-[#17243B]">
                  No articles matched your current filter.
                </p>
                <p className="text-xs text-[#64748B]">
                  Try clearing your search query or switching back to All
                  Categories.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Show All Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — SEVEN CATEGORY OVERVIEW DIRECTORY
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="02 · EDITORIAL ARCHITECTURE"
              kickerTone="secondary"
              title="Explore All Seven Resource Categories."
              description="Each article series on Genustride Learn is structured to move you from a real question to a verifiable physical or logical explanation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCE_CATEGORIES.map((category, idx) => {
                const matchingArticle = RESOURCE_ARTICLES.find(
                  (a) => a.category === category.name
                );
                return (
                  <div
                    key={category.name}
                    className="p-6 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono font-bold text-[#315BE8]">
                        CATEGORY 0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[#17243B]">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {category.shortDescription}
                      </p>
                    </div>

                    {matchingArticle && (
                      <div className="pt-4 border-t border-[#E6EBF2] space-y-2">
                        <div className="text-[11px] font-semibold text-[#16A6A0] uppercase">
                          Featured in this Category:
                        </div>
                        <Link
                          href={`/resources/${matchingArticle.slug}`}
                          className="block text-xs font-bold text-[#17243B] hover:text-[#315BE8] transition-colors"
                        >
                          {matchingArticle.title} →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            FINAL CTA
           ===================================================================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="READ → TEST → DISCOVER"
              title="Pair Conceptual Reading with Hands-On Experimentation."
              description="Every article in our resource library connects directly to a practical experiment or subject hub where you can test the concept yourself."
              primaryActionLabel="Explore Experiments (/projects)"
              onPrimaryAction={() => router.push('/projects')}
              secondaryActionLabel="Explore All Subjects (/learn)"
              onSecondaryAction={() => router.push('/learn')}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
