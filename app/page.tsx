'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {
  Navbar,
  Footer,
  Button,
  KickerLabel,
  MetadataRow,
  SectionHeading,
  SubjectCard,
  ImageContainer,
  CTASection,
} from '@/components/design-system';
import {
  PLATFORM_IMAGES,
  SUBJECTS_DATA,
  ICE_FLOATING_JOURNEY_STEPS,
  REAL_WORLD_LEARNING_METHODS,
  BEYOND_CLASSROOM_SKILLS,
} from '@/lib/content-data';

const METHOD_DESTINATION_MAP: Record<
  string,
  {href: string; actionLabel: string; stageConnection: string}
> = {
  'real-world-examples': {
    href: '/resources',
    actionLabel: 'Explore Concept Articles (/resources)',
    stageConnection: 'Stage 01–02 · Understand & Explore',
  },
  'visual-explanations': {
    href: '/how-it-works',
    actionLabel: 'Inspect Our 4-Step Framework (/how-it-works)',
    stageConnection: 'Stage 02 · Mechanism & Intuition',
  },
  'practical-projects': {
    href: '/projects',
    actionLabel: 'Open 16-Part Experiment Guides (/projects)',
    stageConnection: 'Stage 03–04 · Apply & Create',
  },
  'interactive-exploration': {
    href: '/learn',
    actionLabel: 'Explore All 6 Subject Hubs (/learn)',
    stageConnection: 'All Stages · Cross-Disciplinary Inquiry',
  },
};

export default function HomePage() {
  const router = useRouter();
  const [activeNavSection, setActiveNavSection] = useState<string>('');
  const [activeIceStepIndex, setActiveIceStepIndex] = useState<number>(0);
  const [activeMethodId, setActiveMethodId] = useState<string>(
    REAL_WORLD_LEARNING_METHODS[0].id
  );

  const scrollToSection = (sectionId: string) => {
    setActiveNavSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  const subjectsList = Object.values(SUBJECTS_DATA);
  const activeMethod =
    REAL_WORLD_LEARNING_METHODS.find((m) => m.id === activeMethodId) ||
    REAL_WORLD_LEARNING_METHODS[0];
  const activeMethodRoute =
    METHOD_DESTINATION_MAP[activeMethod.id] ||
    METHOD_DESTINATION_MAP['real-world-examples'];
  const activeIceStep =
    ICE_FLOATING_JOURNEY_STEPS[activeIceStepIndex] ||
    ICE_FLOATING_JOURNEY_STEPS[0];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* Global Navigation Bar & Mobile Navigation */}
      <Navbar
        activeSection={activeNavSection}
        onNavigate={(sectionId) => scrollToSection(sectionId)}
        primaryCtaLabel="Explore Learning"
        onPrimaryCta={() => router.push('/learn')}
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            SECTION 1 — HERO
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E6EBF2] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
          {/* Subtle Blue and Teal Ambient Radial Glows on White Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/4 w-[36rem] h-[36rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-8 w-[30rem] h-[30rem] rounded-full ambient-glow-teal"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Editorial Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <MetadataRow
                  items={[
                    {label: 'Concept-Driven Learning Platform', tone: 'primary'},
                    {
                      label: 'Understand → Explore → Apply → Create',
                      tone: 'secondary',
                    },
                  ]}
                />

                <div className="space-y-3.5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-[#17243B] tracking-tight leading-[1.1] text-balance">
                    Don&apos;t Just Learn What It Is. Understand Why It Matters.
                  </h1>

                  <p className="text-xl sm:text-2xl font-semibold text-[#315BE8] tracking-tight leading-snug">
                    Discover how knowledge works in the real world.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                  Move beyond memorization and textbook learning. Explore
                  concepts, connect ideas, experiment with knowledge, and
                  develop the ability to solve real-world problems.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => router.push('/learn')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Learning
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => router.push('/how-it-works')}
                  >
                    Discover Our Approach
                  </Button>
                </div>

                {/* Editorial 4-Stage Pedagogical Spine */}
                <div className="pt-6 border-t border-[#E6EBF2] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                  {[
                    {step: '01', label: 'Understand', note: 'Why it matters'},
                    {step: '02', label: 'Explore', note: 'How it works'},
                    {step: '03', label: 'Apply', note: 'Real-world use'},
                    {step: '04', label: 'Create', note: 'Build & solve'},
                  ].map((item) => (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => scrollToSection('our-philosophy')}
                      className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-md"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#315BE8]">
                        <span>{item.step}</span>
                        <span aria-hidden="true" className="text-[#64748B]/40">
                          ·
                        </span>
                        <span className="font-sans font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        {item.note}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Balanced Editorial Photography Column */}
              <div className="lg:col-span-5">
                <div className="surface-card rounded-2xl p-4 sm:p-5 bg-white space-y-4">
                  <ImageContainer
                    src={PLATFORM_IMAGES.heroCuriousLearners}
                    alt="Students collaborating at a laboratory workbench with physical prototypes, scientific measurement instruments, and notebooks"
                    aspectRatio="4:3"
                    rounded="lg"
                    priority
                  />
                  <div className="pt-1 border-t border-[#E6EBF2] space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#17243B]">
                        From Academic Theory to Physical Reality
                      </span>
                      <span className="font-mono text-[11px] text-[#16A6A0] font-semibold shrink-0">
                        6 Core Disciplines
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Every concept is anchored in a real question—from why ice
                      floats on winter lakes to how triangular trusses support
                      river bridges and how circuits control current.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2 — THE PROBLEM WITH TRADITIONAL LEARNING
           ===================================================================== */}
        <section
          id="traditional-vs-concept"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3.5">
              <KickerLabel
                index="01"
                label="Rethinking How We Learn"
                tone="primary"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#17243B] tracking-tight leading-[1.15] text-balance">
                Knowing the Answer Isn&apos;t the Same as Understanding It.
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#64748B] leading-relaxed">
                Classroom curricula and textbooks provide essential academic
                foundations. Yet when learning stops at memorizing definitions or
                repeating steps for an examination, knowledge remains fragile.
                True confidence emerges when you understand why a principle
                exists, how its mechanism works, and how different subjects
                connect in the real world.
              </p>
            </div>

            {/* Side-by-Side Editorial Ledger Comparison (Zero nested boxes within cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Traditional Approach */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-[#64748B]">
                      Conventional Habit
                    </div>
                    <h3 className="text-xl font-bold text-[#17243B]">
                      Traditional Approach
                    </h3>
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Focuses primarily on recalling information in the exact form
                    it was presented, often leaving learners unsure how to use
                    that knowledge outside a test paper.
                  </p>

                  <ul className="divide-y divide-[#E6EBF2] border-t border-[#E6EBF2]">
                    {[
                      {
                        title: 'Memorize definitions.',
                        detail:
                          'Retaining terminology without visualizing the underlying physical or logical process.',
                      },
                      {
                        title: 'Follow fixed answers.',
                        detail:
                          'Repeating prescribed steps rather than exploring alternative ways to reason through a problem.',
                      },
                      {
                        title: 'Study mainly for examinations.',
                        detail:
                          'Treating chapters as temporary hurdles rather than tools for lifelong thinking.',
                      },
                      {
                        title: 'Learn isolated subjects.',
                        detail:
                          'Keeping mathematics, physics, chemistry, and biology in separate boxes without seeing how they interact.',
                      },
                    ].map((point, idx) => (
                      <li
                        key={point.title}
                        className="py-3.5 flex items-start gap-3 text-sm"
                      >
                        <span className="font-mono tabular-nums text-xs text-[#64748B] mt-0.5 shrink-0">
                          0{idx + 1}
                        </span>
                        <div>
                          <span className="font-semibold text-[#17243B]">
                            {point.title}{' '}
                          </span>
                          <span className="text-[#64748B]">{point.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] text-xs text-[#64748B]">
                  Outcome: Information is remembered briefly for an exam, then
                  quickly forgotten.
                </div>
              </div>

              {/* Genustride Learn Concept-Driven Approach */}
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-white border border-[#315BE8]/35 p-6 sm:p-8 shadow-[0_8px_28px_-6px_rgba(49,91,232,0.08)] flex flex-col justify-between space-y-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full ambient-glow-blue"
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <KickerLabel
                      label="Genustride Learn Approach"
                      tone="primary"
                    />
                    <span className="text-xs font-medium text-[#16A6A0]">
                      Concept-Driven & Practical
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#17243B]">
                    Our Approach: Deep Conceptual Understanding
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                    Builds on academic foundations by asking why each idea
                    matters, observing how it behaves in nature and technology,
                    and putting it to work on real questions.
                  </p>

                  {/* Clean Hairline Ledger instead of nested boxes */}
                  <ul className="divide-y divide-[#E6EBF2] border-t border-[#E6EBF2]">
                    {[
                      {
                        title: 'Understand concepts.',
                        detail:
                          'Grasp the core principle, physical cause, and intuition behind every law or equation before memorizing symbols.',
                        tone: 'text-[#315BE8]',
                      },
                      {
                        title: 'Ask questions and reason.',
                        detail:
                          'Investigate cause and effect step by step instead of accepting formulas on authority alone.',
                        tone: 'text-[#16A6A0]',
                      },
                      {
                        title: 'Apply knowledge.',
                        detail:
                          'Test understanding through hands-on observations, controlled experiments, and practical scenarios.',
                        tone: 'text-[#315BE8]',
                      },
                      {
                        title: 'Connect ideas with reality.',
                        detail:
                          'Bridge mathematics, physics, chemistry, biology, and computing to see how complete real-world systems operate.',
                        tone: 'text-[#16A6A0]',
                      },
                    ].map((point) => (
                      <li
                        key={point.title}
                        className="py-3.5 flex items-start gap-3 text-sm"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${point.tone}`}
                          aria-hidden="true"
                        />
                        <div>
                          <span className="font-bold text-[#17243B]">
                            {point.title}{' '}
                          </span>
                          <span className="text-[#64748B]">{point.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#17243B]">
                    Outcome: Durable understanding that empowers learners to
                    solve unfamiliar problems.
                  </span>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors"
                  >
                    <span>Explore Our 4-Step Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — OUR LEARNING PHILOSOPHY
           ===================================================================== */}
        <section
          id="our-philosophy"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="Our Learning Philosophy"
              title="Learning Should Go Beyond Knowing."
              description="Every topic on Genustride Learn follows a connected four-stage progression—guiding learners from initial comprehension to independent creation."
            />

            {/* Architectural 4-Stage Connected Hairline Matrix (Replaces generic SaaS icon cards) */}
            <div className="rounded-2xl border border-[#E6EBF2] bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2] shadow-2xs">
              {[
                {
                  number: '01',
                  title: 'Understand',
                  description:
                    'Discover what something is, why it exists, and why it matters.',
                  guidingPrompt: 'What is it & why does it matter?',
                  exampleNote:
                    'Before memorizing Ohm’s Law (V = I·R), first understand why voltage acts like water pressure pushing charge through a wire.',
                  topBarClass: 'bg-[#315BE8]',
                  numberColor: 'text-[#315BE8]',
                },
                {
                  number: '02',
                  title: 'Explore',
                  description:
                    'Understand how it works and connect different concepts.',
                  guidingPrompt: 'How does the mechanism work?',
                  exampleNote:
                    'Trace how changing resistance alters current flow, and see how mathematics models that inverse proportionality.',
                  topBarClass: 'bg-[#16A6A0]',
                  numberColor: 'text-[#16A6A0]',
                },
                {
                  number: '03',
                  title: 'Apply',
                  description:
                    'Use knowledge through practical examples, experiments, and challenges.',
                  guidingPrompt: 'Where is it used & how can we test it?',
                  exampleNote:
                    'Wire a 3V battery pack, 220Ω resistor, and LED on a breadboard to measure voltage drops and verify the law firsthand.',
                  topBarClass: 'bg-[#315BE8]',
                  numberColor: 'text-[#315BE8]',
                },
                {
                  number: '04',
                  title: 'Create',
                  description:
                    'Build, innovate, and solve meaningful problems.',
                  guidingPrompt: 'What can you build or improve with it?',
                  exampleNote:
                    'Combine circuits with solar panels or environmental sensors to build a working weather logger or water probe.',
                  topBarClass: 'bg-[#F3A644]',
                  numberColor: 'text-[#C87A19]',
                },
              ].map((step, idx) => (
                <article
                  key={step.number}
                  className={`flex flex-col justify-between bg-white ${
                    idx >= 2 ? 'md:border-t md:border-[#E6EBF2] lg:border-t-0' : ''
                  }`}
                >
                  <div>
                    <div className={`h-1.5 w-full ${step.topBarClass}`} />
                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-baseline justify-between">
                        <span
                          className={`font-mono tabular-nums text-2xl font-extrabold ${step.numberColor}`}
                        >
                          {step.number}
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          Stage {step.number} of 04
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-[15px] text-[#17243B]/90 font-medium leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E6EBF2] space-y-1">
                        <div className="text-xs font-semibold text-[#17243B]">
                          In Practice:
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {step.exampleNote}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 py-4 bg-[#F6F9FF] border-t border-[#E6EBF2]">
                    <div className="text-[11px] font-medium text-[#64748B]">
                      Guiding Question
                    </div>
                    <div className="text-xs font-bold text-[#17243B] mt-0.5">
                      &ldquo;{step.guidingPrompt}&rdquo;
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4 — EXPLORE LEARNING AREAS
           ===================================================================== */}
        <section
          id="learning-areas"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="03"
              kicker="Explore Learning Areas"
              title="Explore the World Through Different Fields of Knowledge."
              description="Select any discipline below to open its dedicated subject landing page—complete with real-world concept breakdowns, experiments, and creative challenges."
            />

            {/* Six Subject Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {subjectsList.map((subject) => (
                <SubjectCard
                  key={subject.slug}
                  title={subject.title}
                  disciplineCode={subject.disciplineCode}
                  levelScope={subject.levelScope}
                  description={subject.shortDescription}
                  coreFocus={subject.coreFocus}
                  exemplarTopics={subject.exemplarTopics}
                  imageSrc={subject.imageSrc}
                  imageAlt={subject.imageAlt}
                  accentColor={subject.accentColor}
                  href={subject.route}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5 — HOW LEARNING ACTUALLY HAPPENS
           ===================================================================== */}
        <section
          id="how-learning-happens"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-1/4 w-[32rem] h-[32rem] rounded-full ambient-glow-teal"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <SectionHeading
                index="04"
                kicker="How Learning Actually Happens"
                kickerTone="secondary"
                title="From a Simple Question to Real Understanding."
                description="See how a single everyday observation unfolds across chemistry, physics, ecology, and engineering when you follow a concept from start to finish."
              />

              <div className="px-4 py-3 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] shrink-0 space-y-0.5">
                <div className="text-[11px] font-semibold text-[#315BE8]">
                  Exemplar Inquiry Walkthrough
                </div>
                <div className="text-sm sm:text-base font-bold text-[#17243B]">
                  &ldquo;Why Does Ice Float on Water?&rdquo;
                </div>
              </div>
            </div>

            {/* Asymmetric Visual Progression & Interactive 6-Step Walkthrough */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: 6-Step Interactive Progression List */}
              <div className="lg:col-span-7 space-y-3">
                {ICE_FLOATING_JOURNEY_STEPS.map((item, idx) => {
                  const isActive = idx === activeIceStepIndex;
                  return (
                    <button
                      key={item.stepNumber}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIceStepIndex(idx)}
                      className={`w-full text-left rounded-xl p-5 transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                        isActive
                          ? 'bg-[#F6F9FF] border-[#315BE8] shadow-xs'
                          : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/40 hover:bg-[#F6F9FF]/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-mono tabular-nums text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-[#315BE8] text-white'
                              : 'bg-[#F6F9FF] text-[#315BE8] border border-[#E6EBF2]'
                          }`}
                        >
                          0{idx + 1}
                        </span>

                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-[#17243B]">
                              {item.title}
                            </h3>
                            <span className="text-xs font-mono text-[#16A6A0] font-semibold">
                              Stage: {item.stageTag}
                            </span>
                          </div>

                          <div className="text-xs font-semibold text-[#315BE8]">
                            {item.subtitle}
                          </div>

                          <p className="text-sm text-[#64748B] leading-relaxed">
                            {item.description}
                          </p>

                          {isActive && (
                            <div className="pt-2.5 mt-2.5 border-t border-[#E6EBF2] text-xs text-[#17243B] font-medium">
                              <strong className="text-[#315BE8]">
                                Scientific Mechanism:{' '}
                              </strong>
                              {item.scientificNote}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Dual Real Scientific Photography dynamically linked to active step */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                {/* Active Step Status Banner */}
                <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-mono font-semibold text-[#315BE8]">
                      Inspecting Step 0{activeIceStepIndex + 1} of 06 ·{' '}
                      {activeIceStep.stageTag}
                    </div>
                    <div className="text-sm font-bold text-[#17243B] mt-0.5">
                      {activeIceStep.title}: {activeIceStep.subtitle}
                    </div>
                  </div>
                  <Link
                    href="/how-it-works#real-learning-example"
                    className="text-xs font-semibold text-[#315BE8] hover:underline shrink-0"
                  >
                    Interactive Sim →
                  </Link>
                </div>

                {/* Card 1: Molecular & Density Regime (Highlighted during Steps 1–4) */}
                <div
                  className={`rounded-2xl p-5 bg-white transition-all space-y-4 border ${
                    activeIceStepIndex < 4
                      ? 'border-[#315BE8] ring-2 ring-[#315BE8]/15 shadow-sm'
                      : 'border-[#E6EBF2] opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <KickerLabel
                      index="Steps 01–04"
                      label="Density & Molecular Structure"
                      tone="primary"
                    />
                    <span className="font-mono text-xs text-[#315BE8] font-semibold">
                      ρ(ice) = 0.917 g/cm³
                    </span>
                  </div>

                  <ImageContainer
                    src={PLATFORM_IMAGES.iceFloatingMolecular}
                    alt="Crystalline ice floating at the top of liquid water demonstrating lower solid density than liquid water"
                    aspectRatio="16:9"
                    rounded="lg"
                  />

                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-[#17243B]">
                      Hexagonal Hydrogen-Bonded Lattice vs. Liquid Water
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      In solid ice, hydrogen bonds lock H₂O molecules into an
                      open hexagonal crystal structure, increasing volume by ~9%
                      so ice floats above denser 4°C liquid water (1.000 g/cm³).
                    </p>
                  </div>
                </div>

                {/* Card 2: Ecological & Engineering Regime (Highlighted during Steps 5–6) */}
                <div
                  className={`rounded-2xl p-5 bg-white transition-all space-y-4 border ${
                    activeIceStepIndex >= 4
                      ? 'border-[#16A6A0] ring-2 ring-[#16A6A0]/15 shadow-sm'
                      : 'border-[#E6EBF2] opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <KickerLabel
                      index="Steps 05–06"
                      label="Frozen Lakes & Real-World Impact"
                      tone="secondary"
                    />
                    <span className="font-mono text-xs text-[#16A6A0] font-semibold">
                      Ecological Insulation
                    </span>
                  </div>

                  <ImageContainer
                    src={PLATFORM_IMAGES.frozenLakeNature}
                    alt="Surface layer of ice floating on a winter lake with liquid water beneath supporting aquatic ecosystems"
                    aspectRatio="16:9"
                    rounded="lg"
                  />

                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-[#17243B]">
                      Why Aquatic Life Survives Winter & Pipes Burst
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Because ice floats at the surface, it forms an insulating
                      thermal shield that prevents lakes and rivers from
                      freezing solid—while the same 9% expansion can rupture
                      uninsulated metal water pipes.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-2">
                    <Link
                      href="/learn/chemistry"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                    >
                      <span>Explore Chemistry Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/learn/physics"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#16A6A0] hover:text-[#128984]"
                    >
                      <span>Explore Physics Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6 — REAL-WORLD LEARNING
           ===================================================================== */}
        <section
          id="real-world-learning"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="05"
              kicker="Practical Methodology"
              title="Knowledge Becomes Powerful When You Put It to Work."
              description="We combine four complementary learning methods so concepts are never trapped on a page—they are observed, tested, built, and explored interactively."
            />

            {/* Interactive Featured Showcase + 4 Learning Method Selectors */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left 5 Columns: 4 Method Selectors */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
                {REAL_WORLD_LEARNING_METHODS.map((method) => {
                  const isSelected = method.id === activeMethod.id;
                  const meta = METHOD_DESTINATION_MAP[method.id];
                  return (
                    <button
                      key={method.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setActiveMethodId(method.id)}
                      className={`w-full text-left rounded-xl p-5 transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                        isSelected
                          ? 'bg-white border-[#315BE8] shadow-xs'
                          : 'bg-white/75 border-[#E6EBF2] hover:bg-white hover:border-[#315BE8]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono tabular-nums text-xs font-semibold text-[#315BE8]">
                          Method {method.index}
                        </span>
                        <span className="text-xs text-[#16A6A0] font-medium">
                          {meta?.stageConnection}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#17243B]">
                        {method.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                        {method.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right 7 Columns: Featured Authentic Photography & Context */}
              <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <KickerLabel
                      index={`Method ${activeMethod.index}`}
                      label={activeMethod.title}
                      tone="primary"
                    />
                    <span className="text-xs font-medium text-[#16A6A0]">
                      {activeMethod.exampleConnection}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#17243B] tracking-tight">
                    {activeMethod.subtitle}
                  </h3>

                  <ImageContainer
                    src={activeMethod.imageSrc}
                    alt={activeMethod.imageAlt}
                    aspectRatio="16:9"
                    rounded="xl"
                  />

                  <p className="text-[15px] text-[#64748B] leading-relaxed pt-1">
                    {activeMethod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#17243B] font-medium">
                    <span className="text-[#64748B]">Exemplar Focus: </span>
                    {activeMethod.exampleConnection}
                  </div>
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={() => router.push(activeMethodRoute.href)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {activeMethodRoute.actionLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7 — SKILLS BEYOND ACADEMIC KNOWLEDGE
           ===================================================================== */}
        <section
          id="skills-beyond"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="06"
              kicker="Lifelong Capabilities"
              title="Build the Skills That Matter Beyond the Classroom."
              description="When you learn by questioning, experimenting, and applying concepts, you develop enduring intellectual habits that serve you in any career or discipline."
            />

            {/* Editorial Hairline Matrix Grid (Zero repetitive decorative icons) */}
            <div className="rounded-2xl border border-[#E6EBF2] bg-[#F6F9FF] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2]">
              {BEYOND_CLASSROOM_SKILLS.map((skill, idx) => (
                <div
                  key={skill.title}
                  className={`p-7 sm:p-8 bg-white flex flex-col justify-between space-y-4 ${
                    idx >= 3 ? 'lg:border-t lg:border-[#E6EBF2]' : ''
                  } ${idx >= 2 ? 'md:border-t md:border-[#E6EBF2] lg:border-t-0' : ''} ${
                    idx >= 3 ? 'lg:!border-t lg:!border-[#E6EBF2]' : ''
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="font-mono tabular-nums text-xs font-semibold text-[#315BE8]">
                      Capability {skill.index}
                    </div>

                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {skill.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#E6EBF2] text-xs text-[#17243B]/85 leading-relaxed">
                    <span className="font-semibold text-[#16A6A0]">
                      In Practice:{' '}
                    </span>
                    {skill.practiceContext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 8 — OUR VISION FOR BANGLADESH
           ===================================================================== */}
        <section
          id="vision-bangladesh"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 w-[32rem] h-[32rem] rounded-full ambient-glow-amber"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="surface-card rounded-2xl p-6 sm:p-10 lg:p-12 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <MetadataRow
                    items={[
                      {label: '07 · Our Vision for Bangladesh', tone: 'primary'},
                      {
                        label: 'Accessible · Practical · English-First',
                        tone: 'secondary',
                      },
                    ]}
                  />

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17243B] tracking-tight leading-[1.15] text-balance">
                    A Better Learning Future Starts Here.
                  </h2>

                  <p className="text-[15px] sm:text-base text-[#17243B]/90 font-medium leading-relaxed">
                    Across Bangladesh, millions of curious school, college, and
                    university students work hard to master demanding academic
                    subjects—yet access to laboratory equipment, clear
                    conceptual explanations, and practical application guides
                    often remains uneven.
                  </p>

                  <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                    Genustride Learn is committed to making meaningful,
                    concept-driven, and practical education accessible to
                    learners in Bangladesh. By connecting core science,
                    mathematics, computing, and engineering concepts to
                    observable everyday experiments and real local and global
                    contexts, we aim to help every curious learner move from
                    memorizing textbook chapters to understanding—and
                    shaping—the world around them.
                  </p>

                  {/* Clean Hairline Pillars instead of nested boxes */}
                  <div className="pt-4 border-t border-[#E6EBF2] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-[#17243B]">
                        01. Concept Clarity First
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Bridging classroom syllabi with clear explanations of
                        why principles matter and how they work.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-[#17243B]">
                        02. Practical & Accessible Inquiry
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Focusing on real observations, logical reasoning, and
                        achievable hands-on experiments.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#315BE8]">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Read Our Story & Mission (/about)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/for-parents-and-educators"
                      className="inline-flex items-center gap-1 text-[#16A6A0] hover:underline"
                    >
                      <span>For Parents & Educators</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <ImageContainer
                    src={PLATFORM_IMAGES.bangladeshLearners}
                    alt="Students in Bangladesh collaborating with scientific instruments, geometric models, and notebooks in a sunlit classroom"
                    aspectRatio="16:9"
                    rounded="xl"
                    caption="Empowering curious learners across Bangladesh with concept-driven, practical understanding."
                    creditOrContext="Focus · Bangladesh"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 9 — FINAL CTA
           ===================================================================== */}
        <section className="py-16 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="Start Your Journey"
              title="Your Learning Journey Should Go Beyond the Classroom."
              description="Start asking better questions, understanding deeper concepts, and discovering what you can do with what you learn."
              primaryActionLabel="Start Exploring"
              onPrimaryAction={() => router.push('/learn')}
              secondaryActionLabel="How Our Methodology Works"
              onSecondaryAction={() => router.push('/how-it-works')}
              surface="soft-blue"
            />
          </div>
        </section>
      </main>

      {/* =====================================================================
          SECTION 10 — FOOTER
         ===================================================================== */}
      <Footer onSelectSection={(sectionId) => scrollToSection(sectionId)} />
    </div>
  );
}
