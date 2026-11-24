import React from 'react';
import Link from 'next/link';
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
import {IceFloatingWalkthrough} from '@/components/home/ice-floating-walkthrough';
import {RealWorldMethodsExplorer} from '@/components/home/real-world-methods-explorer';

const SUBJECTS_LIST = Object.values(SUBJECTS_DATA);

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-transparent">
      {/* Global Navigation Bar & Mobile Navigation */}
      <Navbar
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            SECTION 1 — HERO ("Directional Stride Constellation" Canvas Backdrop)
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FAF9F6]/65 border-b border-[#E6EBF2] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
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
                    href="/learn"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Learning
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    href="/how-it-works"
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
                    <a
                      key={item.step}
                      href="#our-philosophy"
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
                    </a>
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
          className="py-16 sm:py-24 bg-[#F6F9FF]/80 border-b border-[#E6EBF2]"
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
            SECTION 3 — OUR LEARNING PHILOSOPHY (4-Stage Progress Thread & Tint Shift)
           ===================================================================== */}
        <section
          id="our-philosophy"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#FAF9F6]/70 border-b border-[#E6EBF2]"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="Our Learning Philosophy"
              title="Learning Should Go Beyond Knowing."
              description="Every topic on Genustride Learn follows a connected four-stage progression—guiding learners from initial comprehension to independent creation."
            />

            {/* Architectural 4-Stage Connected Hairline Matrix with Stage-Specific Ambient Tint Shift */}
            <div className="rounded-2xl border border-[#E6EBF2] bg-white/95 overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2] shadow-2xs">
              {[
                {
                  number: '01',
                  title: 'Understand',
                  description:
                    'Discover what something is, why it exists, and why it matters.',
                  guidingPrompt: 'What is it & why does it matter?',
                  exampleNote:
                    'Before memorizing Ohm’s Law (V = I·R), first understand why voltage acts like water pressure pushing charge through a wire.',
                  topBarClass: 'bg-[#0284C7]',
                  numberColor: 'text-[#0284C7]',
                  ambientHoverBg: 'hover:bg-[#E0F2FE]/35',
                  footerTintBg: 'bg-[#E0F2FE]/45',
                },
                {
                  number: '02',
                  title: 'Explore',
                  description:
                    'Understand how it works and connect different concepts.',
                  guidingPrompt: 'How does the mechanism work?',
                  exampleNote:
                    'Trace how changing resistance alters current flow, and see how mathematics models that inverse proportionality.',
                  topBarClass: 'bg-[#4F46E5]',
                  numberColor: 'text-[#4F46E5]',
                  ambientHoverBg: 'hover:bg-[#EDE9FE]/40',
                  footerTintBg: 'bg-[#EDE9FE]/50',
                },
                {
                  number: '03',
                  title: 'Apply',
                  description:
                    'Use knowledge through practical examples, experiments, and challenges.',
                  guidingPrompt: 'Where is it used & how can we test it?',
                  exampleNote:
                    'Wire a 3V battery pack, 220Ω resistor, and LED on a breadboard to measure voltage drops and verify the law firsthand.',
                  topBarClass: 'bg-[#059669]',
                  numberColor: 'text-[#059669]',
                  ambientHoverBg: 'hover:bg-[#DCFCE7]/40',
                  footerTintBg: 'bg-[#DCFCE7]/50',
                },
                {
                  number: '04',
                  title: 'Create',
                  description:
                    'Build, innovate, and solve meaningful problems.',
                  guidingPrompt: 'What can you build or improve with it?',
                  exampleNote:
                    'Combine circuits with solar panels or environmental sensors to build a working weather logger or water probe.',
                  topBarClass: 'bg-[#D97706]',
                  numberColor: 'text-[#D97706]',
                  ambientHoverBg: 'hover:bg-[#FEF3C7]/45',
                  footerTintBg: 'bg-[#FEF3C7]/55',
                },
              ].map((step, idx) => (
                <article
                  key={step.number}
                  data-stage-index={idx}
                  className={`flex flex-col justify-between bg-white/90 transition-colors duration-300 ${step.ambientHoverBg} ${
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

                  <div className={`px-6 sm:px-7 py-4 ${step.footerTintBg} border-t border-[#E6EBF2]`}>
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
            SECTION 4 — EXPLORE LEARNING AREAS (Cursor-Reactive Blueprint Spotlight)
           ===================================================================== */}
        <section
          id="learning-areas"
          className="py-16 sm:py-24 bg-[#F6F9FF]/75 border-b border-[#E6EBF2]"
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
              {SUBJECTS_LIST.map((subject) => (
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
            SECTION 5 — HOW LEARNING ACTUALLY HAPPENS (Scroll-Scrubbed Hexagonal Lattice Watermark)
           ===================================================================== */}
        <section
          id="how-learning-happens"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#FAF9F6]/80 border-b border-[#E6EBF2]"
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

            <IceFloatingWalkthrough
              steps={ICE_FLOATING_JOURNEY_STEPS}
              iceMolecularImageSrc={PLATFORM_IMAGES.iceFloatingMolecular}
              frozenLakeImageSrc={PLATFORM_IMAGES.frozenLakeNature}
            />
          </div>
        </section>

        {/* =====================================================================
            SECTION 6 — REAL-WORLD LEARNING (Leaf Client Component)
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

            <RealWorldMethodsExplorer methods={REAL_WORLD_LEARNING_METHODS} />
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

            {/* Editorial Hairline Matrix Grid */}
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
              primaryActionHref="/learn"
              secondaryActionLabel="How Our Methodology Works"
              secondaryActionHref="/how-it-works"
              surface="soft-blue"
            />
          </div>
        </section>
      </main>

      {/* =====================================================================
          SECTION 10 — FOOTER
         ===================================================================== */}
      <Footer />
    </div>
  );
}
