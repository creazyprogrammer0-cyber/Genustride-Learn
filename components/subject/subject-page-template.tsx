'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {
  Navbar,
  Footer,
  Breadcrumbs,
  Button,
  KickerLabel,
  MetadataRow,
  ImageContainer,
  SectionHeading,
  ProjectCard,
  CTASection,
} from '@/components/design-system';
import {SubjectPageContent} from '@/lib/content-data';

export interface SubjectPageTemplateProps {
  subject: SubjectPageContent;
}

const RELATED_PROJECT_HREF_MAP: Record<string, string> = {
  'phy-proj-1': '/projects/build-a-simple-electric-circuit',
  'phy-proj-2': '/projects/build-a-commutated-dc-electric-motor',
  'mat-proj-1': '/projects/explore-mathematical-patterns-in-nature',
  'mat-proj-2': '/projects/load-test-a-structural-truss-bridge',
  'chm-proj-1': '/projects/explore-water-filtration',
  'chm-proj-2': '/projects/build-a-simple-electric-circuit',
  'bio-proj-1': '/projects/leaf-stomata-microscopy-and-osmosis',
  'bio-proj-2': '/projects/explore-water-filtration',
  'tec-proj-1': '/projects/microcontroller-ultrasonic-distance-logger',
  'tec-proj-2': '/projects/build-a-simple-weather-station',
  'eng-proj-1': '/projects/load-test-a-structural-truss-bridge',
  'eng-proj-2': '/projects/understand-solar-energy',
};

export function SubjectPageTemplate({subject}: SubjectPageTemplateProps) {
  const router = useRouter();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    subject.topicCategories[0]?.id || ''
  );

  const selectedTopicIndex = Math.max(
    0,
    subject.topicCategories.findIndex((t) => t.id === selectedTopicId)
  );
  const selectedTopic =
    subject.topicCategories[selectedTopicIndex] || subject.topicCategories[0];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* Global Navigation Bar */}
      <Navbar
        activeSection="subjects"
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      {/* Breadcrumbs & Back to Explore Learning Bar */}
      <div className="bg-[#F6F9FF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <Breadcrumbs
            items={[
              {id: 'home', label: 'Home'},
              {id: 'learn', label: 'Explore Learning'},
              {id: subject.slug, label: subject.title, current: true},
            ]}
            onNavigate={(item) => {
              if (item.id === 'home') {
                router.push('/');
              } else if (item.id === 'learn') {
                router.push('/learn');
              }
            }}
          />

          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Explore Learning (/learn)</span>
          </Link>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            1. SUBJECT-SPECIFIC HERO SECTION
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E6EBF2] py-14 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 w-[34rem] h-[34rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-10 w-[28rem] h-[28rem] rounded-full ambient-glow-teal"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <MetadataRow
                  items={[
                    {
                      label: subject.disciplineCode,
                      tone: 'primary',
                      mono: true,
                    },
                    {label: subject.title, tone: 'secondary'},
                    {label: subject.levelScope, tone: 'neutral'},
                  ]}
                />

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#17243B] tracking-tight leading-[1.1] text-balance">
                    {subject.heroHeadline}
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-[#315BE8] leading-snug">
                    {subject.heroSubheadline}
                  </p>
                </div>

                <p className="text-[15px] sm:text-[17px] text-[#64748B] leading-relaxed max-w-2xl">
                  {subject.leadSummary}
                </p>

                {/* Quick Jump Topic Links */}
                <div className="pt-2 border-t border-[#E6EBF2] space-y-2">
                  <div className="text-xs font-semibold text-[#17243B]">
                    Core Topics Covered in {subject.shortTitle}:
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs">
                    {subject.topicCategories.map((topic, idx) => (
                      <React.Fragment key={topic.id}>
                        {idx > 0 && (
                          <span
                            aria-hidden="true"
                            className="text-[#64748B]/40"
                          >
                            ·
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTopicId(topic.id);
                            scrollToId('topic-categories');
                          }}
                          className="font-medium text-[#315BE8] hover:underline cursor-pointer"
                        >
                          {topic.name}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => scrollToId('topic-categories')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore {subject.shortTitle} Topics
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToId('real-world-applications')}
                  >
                    Real-World Connections
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="surface-card rounded-2xl p-4 sm:p-5 bg-white">
                  <ImageContainer
                    src={subject.imageSrc}
                    alt={subject.imageAlt}
                    aspectRatio="4:3"
                    rounded="lg"
                    priority
                    caption={subject.coreFocus}
                    creditOrContext={subject.disciplineCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. WHY THIS SUBJECT MATTERS (Unified 3-Column Hairline Matrix)
           ===================================================================== */}
        <section
          id="why-it-matters"
          className="py-16 sm:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              index="01"
              kicker={`Why ${subject.shortTitle} Matters`}
              title={`Why Understanding ${subject.title} Changes How You See the World`}
              description={subject.whyItMatters.lead}
            />

            <div className="rounded-2xl border border-[#E6EBF2] bg-white overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2]">
              {subject.whyItMatters.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-8 bg-white space-y-3"
                >
                  <div className="font-mono tabular-nums text-xs font-semibold text-[#315BE8]">
                    01.{idx + 1} — Core Purpose
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#17243B] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. WHAT LEARNERS WILL UNDERSTAND (Editorial 2-Column Ledger)
           ===================================================================== */}
        <section
          id="what-learners-understand"
          className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              index="02"
              kicker="Conceptual Outcomes"
              title={`What Learners Will Understand in ${subject.title}`}
              description="Moving beyond memorized definitions to build lasting conceptual models you can reason with."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 border-t border-[#E6EBF2] pt-8">
              {subject.whatLearnersWillUnderstand.map((outcome) => (
                <div
                  key={outcome.index}
                  className="flex items-start gap-4"
                >
                  <span className="font-mono tabular-nums text-base font-extrabold text-[#315BE8] shrink-0 mt-0.5">
                    {outcome.index}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-[#17243B]">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. TOPIC CATEGORIES (Unified Two-Zone Topic Architecture Explorer)
           ===================================================================== */}
        <section
          id="topic-categories"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              index="03"
              kicker={`${subject.shortTitle} Topic Architecture`}
              title={`Core Topic Categories in ${subject.title}`}
              description={`Select any of the ${subject.topicCategories.length} topic areas below to inspect its guiding conceptual question, underlying mechanism, and real-world anchor.`}
            />

            {selectedTopic && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Interactive Numbered Topic List */}
                <div
                  role="group"
                  aria-label={`${subject.title} topic categories`}
                  className="lg:col-span-5 rounded-2xl border border-[#E6EBF2] bg-white overflow-hidden divide-y divide-[#E6EBF2]"
                >
                  {subject.topicCategories.map((topic, idx) => {
                    const isSelected = topic.id === selectedTopic.id;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`w-full text-left p-4 sm:p-5 transition-colors flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#315BE8] ${
                          isSelected
                            ? 'bg-[#F6F9FF]'
                            : 'bg-white hover:bg-[#F6F9FF]/60'
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <span
                            className={`font-mono tabular-nums text-xs font-bold mt-0.5 ${
                              isSelected ? 'text-[#315BE8]' : 'text-[#64748B]'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <div className="space-y-1">
                            <div
                              className={`text-sm sm:text-base font-bold ${
                                isSelected ? 'text-[#315BE8]' : 'text-[#17243B]'
                              }`}
                            >
                              {topic.name}
                            </div>
                            <p className="text-xs text-[#64748B] line-clamp-1">
                              {topic.realLifeAnchor}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-xs font-mono shrink-0 mt-0.5 ${
                            isSelected
                              ? 'text-[#315BE8] font-bold'
                              : 'text-[#64748B]/50'
                          }`}
                        >
                          →
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Active Topic Deep-Dive Breakdown */}
                <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 lg:p-9 bg-white space-y-6 lg:sticky lg:top-24">
                  <div className="space-y-2 border-b border-[#E6EBF2] pb-5">
                    <KickerLabel
                      index={`Topic 0${selectedTopicIndex + 1} of 0${subject.topicCategories.length}`}
                      label={subject.title}
                      tone="primary"
                    />
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17243B] tracking-tight">
                      {selectedTopic.name}
                    </h3>
                    <p className="text-[15px] sm:text-base text-[#64748B] leading-relaxed">
                      {selectedTopic.summary}
                    </p>
                  </div>

                  {/* Guiding Conceptual Question */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-[#16A6A0]">
                      01 · Guiding Conceptual Question
                    </div>
                    <p className="text-base sm:text-lg font-bold text-[#17243B] leading-snug">
                      &ldquo;{selectedTopic.guidingQuestion}&rdquo;
                    </p>
                  </div>

                  {/* How the Underlying Mechanism Works */}
                  <div className="pt-5 border-t border-[#E6EBF2] space-y-1.5">
                    <div className="text-xs font-semibold text-[#315BE8]">
                      02 · How the Underlying Mechanism Works
                    </div>
                    <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                      {selectedTopic.coreMechanism}
                    </p>
                  </div>

                  {/* Where You See It in Reality */}
                  <div className="pt-5 border-t border-[#E6EBF2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-[#17243B]">
                        03 · Where You See It in Reality
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B]">
                        {selectedTopic.realLifeAnchor}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => scrollToId('experiments-activities')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] shrink-0 cursor-pointer"
                    >
                      <span>See Hands-On Experiments</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            5. REAL-WORLD APPLICATIONS
           ===================================================================== */}
        <section
          id="real-world-applications"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="04"
              kicker="Real-World Connections"
              kickerTone="secondary"
              title={`Where ${subject.title} Operates in Everyday Life`}
              description={`Every concept in ${subject.shortTitle} explains systems you encounter daily. Here is how academic knowledge powers real-world phenomena.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subject.realWorldConnections.map((conn, idx) => (
                <div
                  key={conn.title}
                  className="surface-card rounded-xl p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <MetadataRow
                      items={[
                        {
                          label: `Application 0${idx + 1}`,
                          tone: 'primary',
                          mono: true,
                        },
                        {label: conn.topicLink, tone: 'secondary'},
                      ]}
                    />

                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {conn.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {conn.howItWorks}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#E6EBF2] text-xs text-[#64748B] leading-relaxed">
                    <strong className="text-[#17243B] font-semibold">
                      Everyday Observation:{' '}
                    </strong>
                    {conn.everydayObservation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. FEATURED PRACTICAL EXAMPLES
           ===================================================================== */}
        <section
          id="featured-examples"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="05"
              kicker="Featured Practical Examples"
              title={`Inside the Mechanism: ${subject.shortTitle} in Action`}
              description="Step-by-step conceptual case studies connecting physical evidence to fundamental principles."
            />

            <div className="space-y-8">
              {subject.featuredPracticalExamples.map((example, idx) => (
                <article
                  key={example.id}
                  className="surface-card rounded-2xl p-6 sm:p-8 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div
                    className={`lg:col-span-5 ${
                      idx % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <ImageContainer
                      src={example.imageSrc}
                      alt={example.imageAlt}
                      aspectRatio="4:3"
                      rounded="xl"
                    />
                  </div>

                  <div
                    className={`lg:col-span-7 space-y-4 ${
                      idx % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <MetadataRow
                      items={[
                        {
                          label: `Case Study 0${idx + 1}`,
                          tone: 'primary',
                          mono: true,
                        },
                        {label: example.topicBadge, tone: 'secondary'},
                      ]}
                    />

                    <h3 className="text-xl sm:text-2xl font-bold text-[#17243B] tracking-tight">
                      {example.title}
                    </h3>

                    <div className="text-sm font-semibold text-[#315BE8]">
                      Guiding Question: &ldquo;{example.question}&rdquo;
                    </div>

                    <p className="text-[15px] text-[#64748B] leading-relaxed">
                      {example.explanation}
                    </p>

                    <div className="pt-3.5 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#17243B]">
                        Governing Principle / Relationship:
                      </span>
                      <span className="font-mono text-[#16A6A0] font-semibold">
                        {example.underlyingLaw}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. EXPERIMENTS AND ACTIVITIES
           ===================================================================== */}
        <section
          id="experiments-activities"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="06"
              kicker="Experiments & Hands-On Activities"
              kickerTone="secondary"
              title={`Observe and Test ${subject.title} Firsthand`}
              description="Practical experiments and observations designed to verify principles using accessible laboratory or household instruments."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {subject.experimentsAndActivities.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="surface-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <MetadataRow
                      items={[
                        {
                          label: `Experiment 0${idx + 1}`,
                          tone: 'secondary',
                          mono: true,
                        },
                        {label: exp.topic, tone: 'primary'},
                        {label: exp.duration, tone: 'neutral', mono: true},
                      ]}
                    />

                    <h3 className="text-xl font-bold text-[#17243B]">
                      {exp.title}
                    </h3>

                    <div className="pt-3 border-t border-[#E6EBF2] text-xs text-[#64748B] leading-relaxed">
                      <strong className="text-[#17243B] font-semibold">
                        Materials & Apparatus:{' '}
                      </strong>
                      {exp.materials}
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-xs font-semibold text-[#17243B]">
                        Observation Procedure:
                      </div>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {exp.procedure}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6EBF2] space-y-1">
                    <div className="text-xs font-semibold text-[#16A6A0]">
                      What You Will Discover:
                    </div>
                    <p className="text-xs text-[#17243B] leading-relaxed">
                      {exp.whatYouDiscover}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            8. RELATED PROJECTS (Direct links to 16-part /projects/[project-slug])
           ===================================================================== */}
        <section
          id="related-projects"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="07"
              kicker="Apply & Create"
              kickerTone="accent"
              title={`Related Practical Projects in ${subject.title}`}
              description="Move from understanding and observation to building working models, calibrated instruments, and investigative prototypes."
              action={
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8] hover:text-[#2548C9]"
                >
                  <span>Browse All Projects (/projects)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subject.relatedProjects.map((project) => {
                const projectHref =
                  RELATED_PROJECT_HREF_MAP[project.id] || '/projects';
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    subject={project.subject}
                    level={project.level}
                    duration={project.duration}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    whyItMatters={project.whyItMatters}
                    scientificPrinciple={project.scientificPrinciple}
                    whatYouCreate={project.whatYouCreate}
                    href={projectHref}
                    actionLabel="Open Full 16-Part Lab Guide"
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            9. RELATED SUBJECTS
           ===================================================================== */}
        <section
          id="related-subjects"
          className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              index="08"
              kicker="Interconnected Knowledge"
              title={`How ${subject.title} Connects With Other Fields`}
              description="Real-world challenges cross academic boundaries. Explore how this subject links directly with neighboring disciplines."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subject.relatedSubjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/learn/${rel.slug}`}
                  className="surface-card surface-card-interactive rounded-xl p-6 bg-white flex flex-col justify-between space-y-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
                >
                  <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-[#16A6A0]">
                      {subject.shortTitle} × {rel.name}
                    </div>
                    <h3 className="text-lg font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                      {rel.intersectionTitle}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {rel.howTheyConnect}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs font-semibold text-[#315BE8]">
                    <span>Explore {rel.name}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            10. EXPLORE MORE CTA
           ===================================================================== */}
        <section className="py-16 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="Continue Your Learning Journey"
              title="Ready to Connect More Ideas Across the Real World?"
              description="Return to the Explore Learning hub to browse all six disciplines, cross-disciplinary learning paths, and practical experiments."
              primaryActionLabel="Explore All Learning Areas"
              onPrimaryAction={() => router.push('/learn')}
              secondaryActionLabel={
                subject.relatedSubjects[0]
                  ? `Next: Explore ${subject.relatedSubjects[0].name}`
                  : 'Back to Homepage'
              }
              onSecondaryAction={() =>
                router.push(
                  subject.relatedSubjects[0]
                    ? `/learn/${subject.relatedSubjects[0].slug}`
                    : '/'
                )
              }
              surface="soft-blue"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
