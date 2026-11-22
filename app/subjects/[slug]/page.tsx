'use client';

import React from 'react';
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';
import {ArrowLeft, ArrowRight, FlaskConical, Compass, Sparkles} from 'lucide-react';
import {
  Navbar,
  Footer,
  Breadcrumbs,
  Button,
  KickerLabel,
  MetadataRow,
  SectionHeading,
  ImageContainer,
  SubjectCard,
  CTASection,
} from '@/components/design-system';
import {SUBJECTS_DATA} from '@/lib/platform-data';

export default function SubjectLandingPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params?.slug === 'string' ? params.slug : 'physics';

  const subject =
    SUBJECTS_DATA.find((s) => s.slug === slug) || SUBJECTS_DATA[1];
  const otherSubjects = SUBJECTS_DATA.filter((s) => s.slug !== subject.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Navbar
        primaryCtaLabel="All Learning Areas"
        onPrimaryCta={() => router.push('/#explore-areas')}
      />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#F6F9FF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs
            items={[
              {id: 'home', label: 'Home'},
              {id: 'explore', label: 'Explore Learning Areas'},
              {id: subject.slug, label: subject.title, current: true},
            ]}
            onNavigate={(item) => {
              if (item.id === 'home') {
                router.push('/');
              } else if (item.id === 'explore') {
                router.push('/#explore-areas');
              }
            }}
          />

          <Link
            href="/#explore-areas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to All 6 Fields of Knowledge</span>
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* Subject Hero */}
        <section className="relative overflow-hidden py-14 sm:py-20 border-b border-[#E6EBF2] bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 w-[30rem] h-[30rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-12 w-[26rem] h-[26rem] rounded-full ambient-glow-teal"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <MetadataRow
                  items={[
                    {label: subject.disciplineCode, tone: 'primary', mono: true},
                    {label: subject.levelScope, tone: 'secondary'},
                    {label: 'Concept-Driven Field Guide', tone: 'neutral'},
                  ]}
                />

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17243B] tracking-tight leading-[1.14]">
                  {subject.title}
                </h1>

                <p className="text-lg sm:text-xl font-medium text-[#17243B]/90 leading-snug max-w-2xl">
                  {subject.heroSubtitle}
                </p>

                <p className="text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
                  {subject.whyThisFieldMatters}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      const el = document.getElementById('featured-concept');
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
                  caption={`Real-world observation and conceptual inquiry in ${subject.title}`}
                  creditOrContext={subject.disciplineCode}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Concept Deep-Dive (Understand -> Explore -> Apply -> Create) */}
        <section
          id="featured-concept"
          className="py-16 sm:py-20 border-b border-[#E6EBF2] bg-[#F6F9FF]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="01"
              kicker={`CONCEPTUAL CASE STUDY · ${subject.title.toUpperCase()}`}
              title={subject.featuredConcept.question}
              description="Every topic in Genustride Learn moves systematically from understanding what a concept is and why it matters to exploring how it works, observing it directly, and creating with it."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 01. Understand */}
              <div className="surface-card rounded-2xl p-6 sm:p-8 bg-white space-y-4">
                <KickerLabel
                  index="01"
                  label="UNDERSTAND · WHAT IS IT & WHY DOES IT MATTER?"
                  tone="primary"
                />
                <h3 className="text-xl font-bold text-[#17243B]">
                  The Core Principle
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.whatItIs}
                </p>
                <div className="pt-3 border-t border-[#E6EBF2]">
                  <p className="text-xs font-semibold text-[#17243B] mb-1">
                    Why This Knowledge Matters:
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {subject.featuredConcept.whyItMatters}
                  </p>
                </div>
              </div>

              {/* 02. Explore */}
              <div className="surface-card rounded-2xl p-6 sm:p-8 bg-white space-y-4">
                <KickerLabel
                  index="02"
                  label="EXPLORE · HOW DOES THE MECHANISM ACTUALLY WORK?"
                  tone="secondary"
                />
                <h3 className="text-xl font-bold text-[#17243B]">
                  Underlying Mechanism
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.howItWorks}
                </p>
                <div className="pt-3 border-t border-[#E6EBF2]">
                  <p className="text-xs font-semibold text-[#17243B] mb-1.5">
                    Core Topics Connected in {subject.title}:
                  </p>
                  <MetadataRow
                    items={subject.exemplarTopics.map((t) => ({
                      label: t,
                      tone: 'secondary',
                    }))}
                  />
                </div>
              </div>

              {/* 03. Apply */}
              <div className="surface-card rounded-2xl p-6 sm:p-8 bg-white space-y-4">
                <KickerLabel
                  index="03"
                  label="APPLY · REAL-WORLD EXAMPLES & OBSERVATION"
                  tone="primary"
                />
                <h3 className="text-xl font-bold text-[#17243B]">
                  Where It Operates in the Real World
                </h3>
                <ul className="space-y-2 text-sm text-[#64748B]">
                  {subject.featuredConcept.realWorldExamples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2.5">
                      <Compass
                        className="w-4 h-4 text-[#315BE8] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#16A6A0]">
                    <FlaskConical className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Guided Experiment & Observation</span>
                  </div>
                  <p className="text-xs text-[#17243B] leading-relaxed">
                    {subject.featuredConcept.experimentOrObservation}
                  </p>
                </div>
              </div>

              {/* 04. Create */}
              <div className="surface-card rounded-2xl p-6 sm:p-8 bg-white space-y-4">
                <KickerLabel
                  index="04"
                  label="CREATE · WHAT CAN LEARNERS BUILD WITH THIS?"
                  tone="accent"
                />
                <h3 className="text-xl font-bold text-[#17243B]">
                  From Understanding to Creation
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {subject.featuredConcept.whatLearnersCreate}
                </p>
                <div className="p-4 rounded-xl bg-[#FEF6EB] border border-[#F3A644]/35 flex items-start gap-3">
                  <Sparkles
                    className="w-4 h-4 text-[#C87A19] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-[#17243B] leading-relaxed">
                    Every concept in <strong>{subject.title}</strong> culminates
                    in a practical challenge where learners design, measure, or
                    build something meaningful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Subject Areas */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="INTERDISCIPLINARY CONNECTIONS"
              title="Explore Other Fields of Knowledge"
              description="Real-world challenges rarely stay inside a single textbook chapter. Connect concepts across all six core disciplines."
              action={
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/')}
                >
                  Return to Homepage
                </Button>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherSubjects.slice(0, 3).map((item) => (
                <SubjectCard
                  key={item.slug}
                  title={item.title}
                  disciplineCode={item.disciplineCode}
                  levelScope={item.levelScope}
                  description={item.shortDescription}
                  coreFocus={item.coreFocus}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  accentColor={item.accentColor}
                  href={`/subjects/${item.slug}`}
                />
              ))}
            </div>

            <div className="pt-4">
              <CTASection
                kicker="CONTINUE YOUR LEARNING JOURNEY"
                title="Your Learning Journey Should Go Beyond the Classroom."
                description="Start asking better questions, understanding deeper concepts, and discovering what you can do with what you learn."
                primaryActionLabel="Back to Homepage"
                onPrimaryAction={() => router.push('/')}
                secondaryActionLabel="View All 6 Subjects"
                onSecondaryAction={() => router.push('/#explore-areas')}
                surface="soft-blue"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
