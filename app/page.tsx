'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowRight,
  Compass,
  FlaskConical,
  Layers,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
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
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  const subjectsList = Object.values(SUBJECTS_DATA);
  const activeMethod =
    REAL_WORLD_LEARNING_METHODS.find((m) => m.id === activeMethodId) ||
    REAL_WORLD_LEARNING_METHODS[0];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* Global Navigation Bar & Mobile Navigation */}
      <Navbar
        activeSection={activeNavSection}
        onNavigate={(sectionId) => scrollToSection(sectionId)}
        primaryCtaLabel="Explore Learning"
        onPrimaryCta={() => router.push('/learn')}
      />

      <main className="flex-1">
        {/* =====================================================================
            SECTION 1 — HERO
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E6EBF2] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
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
                    {label: 'CONCEPT-DRIVEN LEARNING PLATFORM', tone: 'primary'},
                    {
                      label: 'Understand → Explore → Apply → Create',
                      tone: 'secondary',
                    },
                  ]}
                />

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#17243B] tracking-tight leading-[1.12]">
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
                    onClick={() => scrollToSection('traditional-vs-concept')}
                  >
                    Discover Our Approach
                  </Button>
                </div>

                {/* Quiet Editorial Principle Strip */}
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
                      className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-md"
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
                <div className="surface-card rounded-2xl p-3 sm:p-4 bg-white">
                  <ImageContainer
                    src={PLATFORM_IMAGES.heroCuriousLearners}
                    alt="Students collaborating at a laboratory workbench with physical prototypes, scientific measurement instruments, and notebooks"
                    aspectRatio="4:3"
                    rounded="xl"
                  />
                  <div className="mt-3.5 px-2 pb-1 flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-[#17243B]">
                        Connecting Academic Knowledge with Practical Experience
                      </div>
                      <p className="text-xs text-[#64748B]">
                        Observations, experiments, logical reasoning, and
                        real-world problem-solving.
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-[#16A6A0] font-semibold shrink-0">
                      Concept → Reality
                    </span>
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
            <div className="max-w-3xl space-y-4">
              <KickerLabel
                index="01"
                label="RETHINKING HOW WE LEARN"
                tone="primary"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17243B] tracking-tight leading-[1.2]">
                Knowing the Answer Isn&apos;t the Same as Understanding It.
              </h2>
              <p className="text-[15px] sm:text-base text-[#64748B] leading-relaxed">
                Classroom curricula and textbooks provide essential academic
                foundations. Yet when learning stops at memorizing definitions or
                repeating steps for an examination, knowledge remains fragile.
                True confidence emerges when you understand why a principle
                exists, how its mechanism works, and how different subjects
                connect in the real world.
              </p>
            </div>

            {/* Contrasting Approaches Split Editorial Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Traditional Approach */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-7 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-[#64748B] tracking-wide">
                    CONVENTIONAL HABIT
                  </div>
                  <h3 className="text-xl font-bold text-[#17243B]">
                    Traditional Approach
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Focuses primarily on recalling information in the exact form
                    it was presented, often leaving learners unsure how to use
                    that knowledge outside a test paper.
                  </p>

                  <ul className="pt-2 space-y-3.5">
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
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="font-mono text-xs text-[#64748B] mt-0.5 shrink-0">
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
                  Result: Information is remembered briefly, but rarely applied.
                </div>
              </div>

              {/* Genustride Learn Concept-Driven Approach */}
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-white border border-[#315BE8]/30 p-7 sm:p-9 shadow-[0_8px_28px_-6px_rgba(49,91,232,0.08)] flex flex-col justify-between space-y-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full ambient-glow-blue"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full ambient-glow-teal"
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <KickerLabel
                      label="GENUSTRIDE LEARN APPROACH"
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

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Understand concepts.',
                        detail:
                          'Grasp the core principle and intuition behind every law or equation first.',
                        tone: 'text-[#315BE8]',
                      },
                      {
                        title: 'Ask questions and reason.',
                        detail:
                          'Investigate cause and effect instead of accepting formulas on authority alone.',
                        tone: 'text-[#16A6A0]',
                      },
                      {
                        title: 'Apply knowledge.',
                        detail:
                          'Test understanding through observations, experiments, and practical scenarios.',
                        tone: 'text-[#315BE8]',
                      },
                      {
                        title: 'Connect ideas with reality.',
                        detail:
                          'Bridge mathematics, science, and computing to see how the real world operates.',
                        tone: 'text-[#16A6A0]',
                      },
                    ].map((point) => (
                      <div
                        key={point.title}
                        className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${point.tone}`}
                            aria-hidden="true"
                          />
                          <span className="text-sm font-bold text-[#17243B]">
                            {point.title}
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {point.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#17243B]">
                    Result: Durable understanding that empowers learners to solve
                    unfamiliar problems.
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollToSection('our-philosophy')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors"
                  >
                    <span>See the 4-Step Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full ambient-glow-blue"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="OUR LEARNING PHILOSOPHY"
              title="Learning Should Go Beyond Knowing."
              description="Every topic on Genustride Learn is structured around a progressive four-stage cycle—guiding learners from initial comprehension to independent creation."
            />

            {/* Four Visually Distinctive Yet Consistent Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: '01',
                  title: 'Understand',
                  description:
                    'Discover what something is, why it exists, and why it matters.',
                  guidingPrompt: 'What is it & why does it matter?',
                  exampleNote:
                    'Grasp the real-world purpose of a concept before memorizing symbols.',
                  accentHex: '#315BE8',
                  badgeBg: 'bg-[#EEF3FF] text-[#315BE8]',
                  icon: BookOpen,
                },
                {
                  number: '02',
                  title: 'Explore',
                  description:
                    'Understand how it works and connect different concepts.',
                  guidingPrompt: 'How does the mechanism work?',
                  exampleNote:
                    'Trace cause and effect across disciplines to see how the system behaves.',
                  accentHex: '#16A6A0',
                  badgeBg: 'bg-[#EAF8F7] text-[#16A6A0]',
                  icon: Compass,
                },
                {
                  number: '03',
                  title: 'Apply',
                  description:
                    'Use knowledge through practical examples, experiments, and challenges.',
                  guidingPrompt: 'Where is it used in real life?',
                  exampleNote:
                    'Verify principles through hands-on observations and real-world scenarios.',
                  accentHex: '#315BE8',
                  badgeBg: 'bg-[#EEF3FF] text-[#315BE8]',
                  icon: FlaskConical,
                },
                {
                  number: '04',
                  title: 'Create',
                  description:
                    'Build, innovate, and solve meaningful problems.',
                  guidingPrompt: 'What can you do or build with it?',
                  exampleNote:
                    'Synthesize what you have learned to design something new and useful.',
                  accentHex: '#F3A644',
                  badgeBg: 'bg-[#FEF6EB] text-[#C87A19]',
                  icon: Lightbulb,
                },
              ].map((step) => {
                const IconComponent = step.icon;
                return (
                  <article
                    key={step.number}
                    className="surface-card surface-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-sm font-bold px-3 py-1 rounded-lg ${step.badgeBg}`}
                        >
                          {step.number}
                        </span>
                        <IconComponent
                          className="w-5 h-5 text-[#64748B]"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                          {step.number}. {step.title}
                        </h3>
                        <p className="text-[15px] text-[#17243B]/90 font-medium leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {step.exampleNote}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E6EBF2]">
                      <div className="text-xs font-medium text-[#64748B]">
                        Core Question:
                      </div>
                      <div className="text-xs font-semibold text-[#17243B] mt-0.5">
                        {step.guidingPrompt}
                      </div>
                    </div>
                  </article>
                );
              })}
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
              kicker="EXPLORE LEARNING AREAS"
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
                kicker="HOW LEARNING ACTUALLY HAPPENS"
                kickerTone="secondary"
                title="From a Simple Question to Real Understanding."
                description="See how a single everyday observation unfolds across chemistry, physics, ecology, and engineering when you follow a concept from start to finish."
              />

              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] shrink-0">
                <HelpCircle
                  className="w-4 h-4 text-[#315BE8] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-[#64748B]">
                  Exemplar Question:
                </span>
                <span className="text-sm font-bold text-[#17243B]">
                  &ldquo;Why Does Ice Float on Water?&rdquo;
                </span>
              </div>
            </div>

            {/* Asymmetric Visual Progression & Interactive 6-Step Walkthrough */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: 6-Step Interactive Progression List */}
              <div className="lg:col-span-7 space-y-3.5">
                {ICE_FLOATING_JOURNEY_STEPS.map((item, idx) => {
                  const isActive = idx === activeIceStepIndex;
                  return (
                    <button
                      key={item.stepNumber}
                      type="button"
                      onClick={() => setActiveIceStepIndex(idx)}
                      className={`w-full text-left rounded-xl p-5 transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                        isActive
                          ? 'bg-[#F6F9FF] border-[#315BE8] shadow-xs'
                          : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/40 hover:bg-[#F6F9FF]/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-[#315BE8] text-white'
                              : 'bg-[#F6F9FF] text-[#315BE8] border border-[#E6EBF2]'
                          }`}
                        >
                          {idx + 1}
                        </span>

                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-[#17243B]">
                              {idx + 1}. {item.title}
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
                            <div className="pt-2 mt-2 border-t border-[#E6EBF2] text-xs text-[#17243B] font-medium">
                              Key Insight: {item.scientificNote}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Dual Real Scientific Photography & Molecular-to-Ecosystem Connection */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                <div className="surface-card rounded-2xl p-5 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <KickerLabel
                      index="STEPS 1–4"
                      label="DENSITY & MOLECULAR STRUCTURE"
                      tone="primary"
                    />
                    <span className="font-mono text-xs text-[#64748B]">
                      ρ(ice) = 0.917 g/cm³
                    </span>
                  </div>

                  <ImageContainer
                    src={PLATFORM_IMAGES.iceFloatingMolecular}
                    alt="Ice floating at the top of a laboratory beaker beside a thermometer and a 3D hexagonal ball-and-stick molecular model of water"
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
                      so ice floats above denser 4°C liquid water.
                    </p>
                  </div>
                </div>

                <div className="surface-card rounded-2xl p-5 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <KickerLabel
                      index="STEPS 5–6"
                      label="FROZEN LAKES & AQUATIC LIFE"
                      tone="secondary"
                    />
                    <span className="font-mono text-xs text-[#16A6A0]">
                      Ecological Insulation
                    </span>
                  </div>

                  <ImageContainer
                    src={PLATFORM_IMAGES.frozenLakeNature}
                    alt="Surface layer of ice floating on a winter lake with liquid water and sunlight beneath supporting aquatic ecosystems"
                    aspectRatio="16:9"
                    rounded="lg"
                  />

                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-[#17243B]">
                      Why Aquatic Life Survives Winter
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Because ice floats at the surface, it forms an insulating
                      thermal shield that prevents deep lakes and rivers from
                      freezing solid—preserving aquatic life below.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E6EBF2] flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">
                      Explore Chemistry & Physics connections
                    </span>
                    <Link
                      href="/learn/chemistry"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                    >
                      <span>Open Chemistry</span>
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
              kicker="PRACTICAL METHODOLOGY"
              title="Knowledge Becomes Powerful When You Put It to Work."
              description="We combine four complementary learning methods so concepts are never trapped on a page—they are observed, tested, built, and explored interactively."
            />

            {/* Interactive Featured Showcase + 4 Learning Method Selectors */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left 5 Columns: 4 Method Cards */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
                {REAL_WORLD_LEARNING_METHODS.map((method) => {
                  const isSelected = method.id === activeMethod.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setActiveMethodId(method.id)}
                      className={`w-full text-left rounded-xl p-5 transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                        isSelected
                          ? 'bg-white border-[#315BE8] shadow-sm'
                          : 'bg-white/75 border-[#E6EBF2] hover:bg-white hover:border-[#315BE8]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-xs font-semibold text-[#315BE8]">
                          METHOD {method.index}
                        </span>
                        <span className="text-xs text-[#16A6A0] font-medium">
                          {isSelected ? 'Selected View' : 'Click to Preview'}
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
                      index={`METHOD ${activeMethod.index}`}
                      label={activeMethod.title.toUpperCase()}
                      tone="primary"
                    />
                    <span className="text-xs text-[#64748B]">
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
                    Exemplar Domain: {activeMethod.exampleConnection}
                  </div>
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={() => router.push('/learn/engineering')}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Practical Projects
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
              kicker="LIFELONG CAPABILITIES"
              title="Build the Skills That Matter Beyond the Classroom."
              description="When you learn by questioning, experimenting, and applying concepts, you develop enduring intellectual habits that serve you in any career or discipline."
            />

            {/* Editorial Hairline Matrix Grid (Distinct from standard cards) */}
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
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#315BE8]">
                        SKILL {skill.index}
                      </span>
                      <Layers
                        className="w-4 h-4 text-[#16A6A0]"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {skill.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6EBF2] text-xs text-[#17243B]/85">
                    <span className="font-semibold text-[#315BE8]">
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
            <div className="surface-card rounded-2xl p-7 sm:p-10 lg:p-12 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <MetadataRow
                    items={[
                      {label: '07 · OUR VISION FOR BANGLADESH', tone: 'primary'},
                      {label: 'Accessible · Practical · English-First', tone: 'secondary'},
                    ]}
                  />

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17243B] tracking-tight leading-[1.18]">
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

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                      <div className="text-xs font-bold text-[#17243B]">
                        Concept Clarity First
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Bridging classroom syllabi with clear explanations of
                        why principles matter and how they work.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                      <div className="text-xs font-bold text-[#17243B]">
                        Practical & Accessible Inquiry
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Focusing on real observations, logical reasoning, and
                        achievable hands-on experiments.
                      </p>
                    </div>
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
              kicker="START YOUR JOURNEY"
              title="Your Learning Journey Should Go Beyond the Classroom."
              description="Start asking better questions, understanding deeper concepts, and discovering what you can do with what you learn."
              primaryActionLabel="Start Exploring"
              onPrimaryAction={() => router.push('/learn')}
              secondaryActionLabel="Review Our 4-Step Philosophy"
              onSecondaryAction={() => scrollToSection('our-philosophy')}
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
