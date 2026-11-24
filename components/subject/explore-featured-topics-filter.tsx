'use client';

import React, {useMemo, useState} from 'react';
import Link from 'next/link';
import {ArrowRight, Compass, RotateCcw} from 'lucide-react';
import {
  Button,
  KickerLabel,
  MetadataRow,
  SectionHeading,
  SubjectCategorySlug,
} from '@/components/design-system';

export interface ExploreFeaturedTopicItem {
  readonly id: string;
  readonly subjectSlug: SubjectCategorySlug;
  readonly subjectName: string;
  readonly topicCategory: string;
  readonly title: string;
  readonly whyItMatters: string;
  readonly coreQuestion: string;
}

const SUBJECT_FILTER_TABS: readonly {
  readonly slug: SubjectCategorySlug | 'all';
  readonly label: string;
}[] = [
  {slug: 'all', label: 'All Subjects'},
  {slug: 'physics', label: 'Physics'},
  {slug: 'mathematics', label: 'Mathematics'},
  {slug: 'chemistry', label: 'Chemistry'},
  {slug: 'biology', label: 'Biology & Life Science'},
  {slug: 'technology', label: 'Technology & Computing'},
];

export function ExploreFeaturedTopicsFilter({
  topics,
}: {
  topics: readonly ExploreFeaturedTopicItem[];
}) {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<
    SubjectCategorySlug | 'all'
  >('all');

  const filteredTopics = useMemo(
    () =>
      selectedSubjectFilter === 'all'
        ? topics
        : topics.filter((topic) => topic.subjectSlug === selectedSubjectFilter),
    [selectedSubjectFilter, topics]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E6EBF2] pb-8">
        <SectionHeading
          index="03"
          kicker="Featured Topics"
          title="Big Questions That Build Real Understanding."
          description="Start with a single question that challenges everyday assumptions and reveals how foundational ideas actually work."
        />
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter featured topics by subject"
        >
          {SUBJECT_FILTER_TABS.map((tab) => {
            const isActive = selectedSubjectFilter === tab.slug;
            return (
              <button
                key={tab.slug}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedSubjectFilter(tab.slug)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                  isActive
                    ? 'bg-[#17243B] text-white shadow-2xs'
                    : 'border border-[#E6EBF2] bg-[#F6F9FF] text-[#64748B] hover:border-[#315BE8]/40 hover:text-[#17243B]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* EDITORIAL TOPIC INDEX LEDGER */}
      <div className="divide-y divide-[#E6EBF2] border-b border-[#E6EBF2]">
        {filteredTopics.map((topic, index) => (
          <Link
            key={topic.id}
            href={`/learn/${topic.subjectSlug}`}
            aria-label={`${topic.title} — ${topic.subjectName} (${topic.coreQuestion})`}
            className="group grid grid-cols-1 gap-4 py-7 transition-colors hover:bg-[#F6F9FF]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] sm:px-4 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            {/* Index & Subject */}
            <div className="flex items-center gap-3 md:col-span-3">
              <span className="font-mono text-xs font-semibold text-[#64748B]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <KickerLabel label={topic.subjectName} tone="primary" />
            </div>

            {/* Core Question & Title */}
            <div className="md:col-span-6">
              <p className="mb-1.5 font-mono text-xs font-medium text-[#16A6A0]">
                Inquiry: &ldquo;{topic.coreQuestion}&rdquo;
              </p>
              <h3 className="text-xl font-bold tracking-tight text-[#17243B] transition-colors group-hover:text-[#315BE8] sm:text-2xl">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                {topic.whyItMatters}
              </p>
            </div>

            {/* Metadata & Action */}
            <div className="flex items-center justify-between border-t border-[#E6EBF2] pt-3 md:col-span-3 md:flex-col md:items-end md:justify-between md:border-t-0 md:pt-0">
              <MetadataRow
                items={[
                  {label: topic.topicCategory, tone: 'secondary'},
                  {label: 'Concept Guide', tone: 'neutral'},
                ]}
              />
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8]">
                <span>Explore in {topic.subjectName}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="rounded-xl border border-[#E6EBF2] bg-[#F6F9FF] p-10 text-center">
          <Compass className="mx-auto mb-3 h-8 w-8 text-[#64748B]" />
          <h3 className="text-lg font-bold text-[#17243B]">
            No featured topics found for this filter
          </h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-[#64748B]">
            Reset the subject filter to browse all featured conceptual inquiries across every discipline.
          </p>
          <div className="mt-5">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<RotateCcw className="h-3.5 w-3.5" />}
              onClick={() => setSelectedSubjectFilter('all')}
            >
              Show All Featured Topics
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
