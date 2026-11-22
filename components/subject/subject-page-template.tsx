'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  FlaskConical,
  Layers,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  X,
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
  ProjectCard,
  CTASection,
} from '@/components/design-system';
import {
  SubjectPageContent,
  SubjectRelatedProject,
} from '@/lib/content-data';

export interface SubjectPageTemplateProps {
  subject: SubjectPageContent;
}

export function SubjectPageTemplate({subject}: SubjectPageTemplateProps) {
  const router = useRouter();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    subject.topicCategories[0]?.id || ''
  );
  const [activeProjectModal, setActiveProjectModal] =
    useState<SubjectRelatedProject | null>(null);

  const selectedTopic =
    subject.topicCategories.find((t) => t.id === selectedTopicId) ||
    subject.topicCategories[0];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* Global Navigation Bar */}
      <Navbar
        activeSection="learn"
        primaryCtaLabel="Explore All Subjects"
        onPrimaryCta={() => router.push('/learn')}
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

      <main className="flex-1">
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
                    {label: subject.title.toUpperCase(), tone: 'secondary'},
                    {label: subject.levelScope, tone: 'neutral'},
                  ]}
                />

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17243B] tracking-tight leading-[1.12]">
                    {subject.heroHeadline}
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-[#315BE8] leading-snug">
                    {subject.heroSubheadline}
                  </p>
                </div>

                <p className="text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
                  {subject.leadSummary}
                </p>

                {/* Quick Jump Topic Links */}
                <div className="pt-1 space-y-2">
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
                <div className="surface-card rounded-2xl p-3.5 bg-white">
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
          </div>
        </section>

        {/* =====================================================================
            2. WHY THIS SUBJECT MATTERS
           ===================================================================== */}
        <section
          id="why-it-matters"
          className="py-16 sm:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              index="01"
              kicker={`WHY ${subject.shortTitle.toUpperCase()} MATTERS`}
              title={`Why Understanding ${subject.title} Changes How You See the World`}
              description={subject.whyItMatters.lead}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subject.whyItMatters.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="surface-card rounded-xl p-6 sm:p-7 bg-white space-y-3"
                >
                  <KickerLabel
                    index={`01.${idx + 1}`}
                    label="CORE PURPOSE"
                    tone={idx === 1 ? 'secondary' : 'primary'}
                  />
                  <h3 className="text-lg font-bold text-[#17243B]">
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
            3. WHAT LEARNERS WILL UNDERSTAND
           ===================================================================== */}
        <section
          id="what-learners-understand"
          className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              index="02"
              kicker="CONCEPTUAL OUTCOMES"
              title={`What Learners Will Understand in ${subject.title}`}
              description="Moving beyond memorized definitions to build lasting conceptual models you can reason with."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subject.whatLearnersWillUnderstand.map((outcome) => (
                <div
                  key={outcome.index}
                  className="rounded-xl border border-[#E6EBF2] bg-[#F6F9FF] p-6 sm:p-7 flex items-start gap-4"
                >
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white text-[#315BE8] border border-[#E6EBF2] shrink-0 mt-0.5">
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
            4. TOPIC CATEGORIES
           ===================================================================== */}
        <section
          id="topic-categories"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="03"
              kicker={`${subject.shortTitle.toUpperCase()} TOPIC ARCHITECTURE`}
              title={`Core Topic Categories in ${subject.title}`}
              description={`Select any topic below to inspect its underlying mechanism, guiding question, and real-life anchor—or browse the complete ${subject.topicCategories.length}-topic overview.`}
            />

            {/* Interactive Topic Inspector Banner */}
            {selectedTopic && (
              <div className="surface-card rounded-2xl p-6 sm:p-8 bg-white space-y-6">
                <div className="flex flex-wrap items-center gap-2 border-b border-[#E6EBF2] pb-4">
                  <span className="text-xs font-semibold text-[#64748B] mr-1">
                    Select Topic to Inspect:
                  </span>
                  {subject.topicCategories.map((topic) => {
                    const isSelected = topic.id === selectedTopic.id;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#315BE8] text-white shadow-2xs'
                            : 'bg-[#F6F9FF] text-[#17243B] border border-[#E6EBF2] hover:border-[#315BE8]/40'
                        }`}
                      >
                        {topic.name}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <KickerLabel
                      label={`ACTIVE TOPIC · ${selectedTopic.name.toUpperCase()}`}
                      tone="primary"
                    />
                    <h3 className="text-2xl font-bold text-[#17243B]">
                      {selectedTopic.name}
                    </h3>
                    <p className="text-[15px] text-[#17243B]/90 leading-relaxed">
                      {selectedTopic.summary}
                    </p>
                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                      <div className="text-xs font-semibold text-[#315BE8]">
                        How the Underlying Concept Works:
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {selectedTopic.coreMechanism}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3">
                    <div className="p-4 rounded-xl bg-[#EAF8F7]/60 border border-[#16A6A0]/25 space-y-1.5">
                      <div className="text-xs font-semibold text-[#16A6A0]">
                        Guiding Conceptual Question
                      </div>
                      <p className="text-sm font-bold text-[#17243B] leading-snug">
                        &ldquo;{selectedTopic.guidingQuestion}&rdquo;
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                      <div className="text-xs font-semibold text-[#17243B]">
                        Where You See It in Reality
                      </div>
                      <p className="text-xs text-[#64748B]">
                        {selectedTopic.realLifeAnchor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Complete All-Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subject.topicCategories.map((topic, idx) => (
                <article
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`surface-card surface-card-interactive rounded-xl p-6 bg-white flex flex-col justify-between cursor-pointer ${
                    topic.id === selectedTopic?.id
                      ? 'ring-2 ring-[#315BE8]'
                      : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#315BE8]">
                        TOPIC 0{idx + 1}
                      </span>
                      <BookOpen
                        className="w-4 h-4 text-[#64748B]"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#17243B]">
                      {topic.name}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#E6EBF2] space-y-1">
                    <div className="text-[11px] font-semibold text-[#16A6A0]">
                      Real-Life Connection:
                    </div>
                    <p className="text-xs text-[#17243B]/90">
                      {topic.realLifeAnchor}
                    </p>
                  </div>
                </article>
              ))}
            </div>
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
              kicker="REAL-WORLD CONNECTIONS"
              kickerTone="secondary"
              title={`Where ${subject.title} Operates in Everyday Life`}
              description={`Every concept in ${subject.shortTitle} explains systems you encounter daily. Here is how academic knowledge powers real-world phenomena.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subject.realWorldConnections.map((conn, idx) => (
                <div
                  key={conn.title}
                  className="surface-card rounded-xl p-6 sm:p-7 bg-white flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <MetadataRow
                      items={[
                        {
                          label: `APPLICATION 0${idx + 1}`,
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

                  <div className="p-3.5 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] text-xs text-[#17243B]">
                    <strong className="text-[#315BE8] font-semibold">
                      Direct Observation:{' '}
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
              kicker="FEATURED PRACTICAL EXAMPLES"
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
                          label: `CASE STUDY 0${idx + 1}`,
                          tone: 'primary',
                          mono: true,
                        },
                        {label: example.topicBadge, tone: 'secondary'},
                      ]}
                    />

                    <h3 className="text-xl sm:text-2xl font-bold text-[#17243B] tracking-tight">
                      {example.title}
                    </h3>

                    <div className="p-3.5 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] text-xs font-semibold text-[#315BE8]">
                      Guiding Question: &ldquo;{example.question}&rdquo;
                    </div>

                    <p className="text-[15px] text-[#64748B] leading-relaxed">
                      {example.explanation}
                    </p>

                    <div className="pt-3 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#17243B]">
                        Core Principle / Relationship:
                      </span>
                      <span className="font-mono text-[#16A6A0] font-medium">
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
              kicker="EXPERIMENTS & HANDS-ON ACTIVITIES"
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
                    <div className="flex items-center justify-between gap-2">
                      <MetadataRow
                        items={[
                          {
                            label: `EXPERIMENT 0${idx + 1}`,
                            tone: 'secondary',
                            mono: true,
                          },
                          {label: exp.topic, tone: 'primary'},
                          {label: exp.duration, tone: 'neutral', mono: true},
                        ]}
                      />
                      <FlaskConical
                        className="w-5 h-5 text-[#16A6A0] shrink-0"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#17243B]">
                      {exp.title}
                    </h3>

                    <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] text-xs text-[#64748B]">
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

                  <div className="p-4 rounded-xl bg-[#EAF8F7]/60 border border-[#16A6A0]/25 space-y-1">
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
            8. RELATED PROJECTS
           ===================================================================== */}
        <section
          id="related-projects"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="07"
              kicker="APPLY & CREATE"
              kickerTone="accent"
              title={`Related Practical Projects in ${subject.title}`}
              description="Move from understanding and observation to building working models, calibrated instruments, and investigative prototypes."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subject.relatedProjects.map((project) => (
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
                  onInspectProject={() => setActiveProjectModal(project)}
                />
              ))}
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
              kicker="INTERCONNECTED KNOWLEDGE"
              title={`How ${subject.title} Connects With Other Fields`}
              description="Real-world challenges cross academic boundaries. Explore how this subject links directly with neighboring disciplines."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subject.relatedSubjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/learn/${rel.slug}`}
                  className="surface-card surface-card-interactive rounded-xl p-6 bg-white flex flex-col justify-between space-y-5 group"
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
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
              kicker="CONTINUE YOUR LEARNING JOURNEY"
              title="Ready to Connect More Ideas Across the Real World?"
              description={`Return to the Explore Learning hub to browse all six disciplines, cross-disciplinary learning paths, and practical experiments.`}
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

      {/* Project Inspection Dialog */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17243B]/40 backdrop-blur-xs"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E6EBF2] pb-4">
              <div className="space-y-1">
                <KickerLabel label={activeProjectModal.subject} tone="primary" />
                <h2 className="text-xl font-bold text-[#17243B]">
                  {activeProjectModal.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close project guide"
                className="min-h-[40px] min-w-[40px] rounded-lg border border-[#E6EBF2] flex items-center justify-center text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                <div className="text-xs font-semibold text-[#315BE8]">
                  01 · Why This Project Matters
                </div>
                <p className="text-[#17243B] leading-relaxed">
                  {activeProjectModal.whyItMatters}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#EAF8F7]/60 border border-[#16A6A0]/25 space-y-1">
                <div className="text-xs font-semibold text-[#16A6A0]">
                  02 · Governing Scientific Principle
                </div>
                <p className="font-mono text-xs text-[#17243B]">
                  {activeProjectModal.scientificPrinciple}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FEF6EB] border border-[#F3A644]/35 space-y-1">
                <div className="text-xs font-semibold text-[#C87A19]">
                  03 · What Learners Create
                </div>
                <p className="text-[#17243B] leading-relaxed">
                  {activeProjectModal.whatYouCreate}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#E6EBF2]">
              <span className="text-xs text-[#64748B]">
                {activeProjectModal.level} · {activeProjectModal.duration}
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setActiveProjectModal(null)}
              >
                Close Guide
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
