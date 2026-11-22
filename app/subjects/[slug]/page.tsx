'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  FlaskConical,
  Lightbulb,
  Wrench,
  BookOpen,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Breadcrumbs,
  Button,
  KickerLabel,
  MetadataRow,
  ImageContainer,
  SectionHeading,
  CTASection,
  SegmentedFilter,
  SUBJECT_CATEGORIES,
  SubjectCategorySlug,
} from '@/components/design-system';
import {SUBJECTS_DATA} from '@/lib/content-data';

export default function SubjectLandingPage() {
  const params = useParams();
  const router = useRouter();
  const rawSlug = typeof params?.slug === 'string' ? params.slug : 'physics';

  const subjectKey: SubjectCategorySlug =
    rawSlug in SUBJECTS_DATA
      ? (rawSlug as SubjectCategorySlug)
      : 'physics';

  const subject = SUBJECTS_DATA[subjectKey];

  const [selectedAcademicStage, setSelectedAcademicStage] = useState<
    'school' | 'college' | 'university'
  >('college');

  const academicStageGuidance = {
    school: {
      title: 'School Level (Foundational Intuition & Observation)',
      focus:
        'Build physical intuition first. Observe real phenomena directly, ask why patterns occur, and connect everyday experiences to foundational principles before memorizing formulas.',
    },
    college: {
      title: 'College Level (Mechanisms, Quantitative Models & Lab Practice)',
      focus:
        'Connect mathematical derivations to physical mechanisms. Conduct structured experiments, plot measured variables, and analyze how changing parameters shifts system behavior.',
    },
    university: {
      title: 'University & Independent (System Design & Open-Ended Creation)',
      focus:
        'Synthesize principles across disciplines to model complex systems, analyze real-world engineering constraints, and build functional prototypes or research investigations.',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar primaryCtaLabel="All Learning Areas" />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#F6F9FF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <Breadcrumbs
            items={[
              {id: 'home', label: 'Home'},
              {id: 'learning-areas', label: 'Explore Learning Areas'},
              {id: subject.slug, label: subject.title, current: true},
            ]}
            onNavigate={(item) => {
              if (item.id === 'home') {
                router.push('/');
              } else if (item.id === 'learning-areas') {
                router.push('/#learning-areas');
              }
            }}
          />

          <Link
            href="/#learning-areas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to All 6 Learning Areas</span>
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* Subject Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-20 border-b border-[#E6EBF2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 w-[30rem] h-[30rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-10 w-[24rem] h-[24rem] rounded-full ambient-glow-teal"
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
                    {label: 'SUBJECT LANDING PAGE', tone: 'secondary'},
                    {label: subject.levelScope, tone: 'neutral'},
                  ]}
                />

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#17243B] tracking-tight leading-[1.15]">
                  {subject.title}
                </h1>

                <p className="text-base sm:text-lg text-[#17243B] font-medium leading-relaxed max-w-2xl">
                  {subject.shortDescription}
                </p>

                <p className="text-[15px] text-[#64748B] leading-relaxed max-w-2xl">
                  {subject.leadSummary}
                </p>

                <div className="pt-2 space-y-2">
                  <div className="text-xs font-semibold text-[#17243B]">
                    Exemplar Concept Threads in {subject.title}:
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#315BE8] font-medium">
                    {subject.exemplarTopics.map((topic, idx) => (
                      <React.Fragment key={topic}>
                        {idx > 0 && (
                          <span
                            aria-hidden="true"
                            className="text-[#64748B]/50"
                          >
                            ·
                          </span>
                        )}
                        <span>{topic}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      const el = document.getElementById('concept-deep-dive');
                      el?.scrollIntoView({behavior: 'smooth'});
                    }}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Concept Breakdown
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => router.push('/#how-learning-happens')}
                  >
                    See How Learning Happens
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ImageContainer
                  src={subject.imageSrc}
                  alt={subject.imageAlt}
                  aspectRatio="4:3"
                  rounded="xl"
                  caption={subject.coreFocus}
                  creditOrContext={subject.disciplineCode}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Academic Depth Perspective Switcher */}
        <section className="py-12 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <KickerLabel
                  index="01"
                  label="ADAPTIVE LEARNING DEPTH"
                  tone="primary"
                />
                <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#17243B]">
                  How We Approach {subject.title} Across Learning Stages
                </h2>
              </div>

              <SegmentedFilter
                ariaLabel="Select learner stage"
                value={selectedAcademicStage}
                onChange={setSelectedAcademicStage}
                options={[
                  {value: 'school', label: 'School Learners'},
                  {value: 'college', label: 'College Learners'},
                  {value: 'university', label: 'University & Independent'},
                ]}
              />
            </div>

            <div className="surface-card rounded-xl p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-3xl">
                <div className="text-sm font-bold text-[#315BE8]">
                  {academicStageGuidance[selectedAcademicStage].title}
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {academicStageGuidance[selectedAcademicStage].focus}
                </p>
              </div>
              <div className="shrink-0 text-xs font-mono text-[#16A6A0] font-semibold">
                Understand → Explore → Apply → Create
              </div>
            </div>
          </div>
        </section>

        {/* 8-Point Content Principle Exemplar Breakdown */}
        <section
          id="concept-deep-dive"
          className="py-16 sm:py-20 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker={`CONCEPT ARCHITECTURE IN ${subject.title.toUpperCase()}`}
              title={subject.featuredConcept.topicTitle}
              description={`Guiding Question: "${subject.featuredConcept.guidingQuestion}"`}
            />

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. What is it? */}
              <div className="surface-card rounded-xl p-6 sm:p-7 space-y-3">
                <KickerLabel
                  index="01 · UNDERSTAND"
                  label="WHAT IS IT?"
                  tone="primary"
                />
                <h3 className="text-lg font-bold text-[#17243B]">
                  Core Conceptual Definition
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.whatIsIt}
                </p>
              </div>

              {/* 2. Why does it matter? */}
              <div className="surface-card rounded-xl p-6 sm:p-7 space-y-3">
                <KickerLabel
                  index="02 · UNDERSTAND"
                  label="WHY DOES IT MATTER?"
                  tone="primary"
                />
                <h3 className="text-lg font-bold text-[#17243B]">
                  Purpose & Human Relevance
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.whyItMatters}
                </p>
              </div>

              {/* 3. How does it work? */}
              <div className="surface-card rounded-xl p-6 sm:p-7 space-y-3">
                <KickerLabel
                  index="03 · EXPLORE"
                  label="HOW DOES IT ACTUALLY WORK?"
                  tone="secondary"
                />
                <h3 className="text-lg font-bold text-[#17243B]">
                  Underlying Mechanism & Reasoning
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.howItWorks}
                </p>
              </div>

              {/* 4. Practical Applications */}
              <div className="surface-card rounded-xl p-6 sm:p-7 space-y-3">
                <KickerLabel
                  index="04 · APPLY"
                  label="WHERE IS IT USED IN REAL LIFE?"
                  tone="primary"
                />
                <h3 className="text-lg font-bold text-[#17243B]">
                  Real-World Examples & Context
                </h3>
                <ul className="space-y-2 text-sm text-[#64748B]">
                  {subject.featuredConcept.realWorldExamples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="text-[#315BE8] font-mono select-none mt-0.5"
                      >
                        →
                      </span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hands-on Experiment & Creative Synthesis Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <KickerLabel
                    index="05 · OBSERVE & EXPERIMENT"
                    label="HANDS-ON INVESTIGATION"
                    tone="secondary"
                  />
                  <FlaskConical
                    className="w-5 h-5 text-[#16A6A0]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#17243B]">
                  {subject.featuredConcept.experimentOrObservation.title}
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.experimentOrObservation.summary}
                </p>
                <div className="pt-3 border-t border-[#E6EBF2] text-xs text-[#64748B]">
                  <strong className="text-[#17243B]">
                    Observation Apparatus:{' '}
                  </strong>
                  {subject.featuredConcept.experimentOrObservation.apparatus}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-[#FEF6EB]/70 border border-[#F3A644]/40 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <KickerLabel
                      index="06 · CREATE"
                      label="WHAT CAN YOU BUILD WITH IT?"
                      tone="accent"
                    />
                    <Wrench
                      className="w-5 h-5 text-[#C87A19]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#17243B]">
                    From Understanding to Creation
                  </h3>
                  <p className="text-[15px] text-[#17243B]/90 leading-relaxed">
                    {subject.featuredConcept.whatYouCanCreate}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F3A644]/30 text-xs text-[#64748B]">
                  <strong className="text-[#17243B]">
                    Field Application:{' '}
                  </strong>
                  {subject.featuredConcept.practicalApplication}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Navigation Across All 6 Subject Fields */}
        <section className="py-14 sm:py-16 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeading
              kicker="INTERCONNECTED KNOWLEDGE"
              title="Switch to Another Field of Knowledge"
              description="Real-world challenges rarely belong to a single textbook chapter. Explore how all six learning areas connect."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SUBJECT_CATEGORIES.map((item) => {
                const isCurrent = item.slug === subject.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/subjects/${item.slug}`}
                    className={`rounded-xl p-5 border transition-all flex flex-col justify-between gap-3 ${
                      isCurrent
                        ? 'bg-[#EEF3FF] border-[#315BE8] shadow-xs'
                        : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/40 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#17243B] text-base">
                          {item.name}
                        </span>
                        {isCurrent ? (
                          <span className="font-mono text-xs text-[#315BE8] font-semibold">
                            Viewing Now
                          </span>
                        ) : (
                          <ArrowRight className="w-4 h-4 text-[#315BE8]" />
                        )}
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <CTASection
              kicker="RETURN TO HOMEPAGE"
              title="Your Learning Journey Should Go Beyond the Classroom."
              description="Continue exploring our 4-step learning philosophy, real-world experiments, and how concept-driven learning works."
              primaryActionLabel="Back to Genustride Learn Home"
              onPrimaryAction={() => router.push('/')}
              secondaryActionLabel="Explore Ice Density Example"
              onSecondaryAction={() => router.push('/#how-learning-happens')}
              surface="white"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
