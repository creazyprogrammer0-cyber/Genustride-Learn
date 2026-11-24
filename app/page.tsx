import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
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
import {
  HeroHeadlineReveal,
  HeroFloatingStemBadges,
} from '@/components/home/hero-concept-field';
import {HomepageOpeningMotion} from '@/components/home/homepage-opening-motion';
import {RethinkingLearningComparison} from '@/components/home/rethinking-learning-comparison';
import {FourStageMethodology} from '@/components/home/four-stage-methodology';
import {IceFloatLab} from '@/components/IceFloatLab';
import {RealWorldMethodsExplorer} from '@/components/home/real-world-methods-explorer';
import {
  FadeUp,
  MagneticButton,
  Marquee,
  CountUpMetric,
} from '@/components/motion';

const SUBJECTS_LIST = Object.values(SUBJECTS_DATA);

const CURIOSITY_LAUNCHPAD_QUESTIONS = [
  {
    question: 'Why does voltage act like water pressure?',
    discipline: 'Physics · Circuits',
    href: '/resources/why-voltage-is-pressure-not-flow',
  },
  {
    question: 'How do triangles hold up heavy bridges?',
    discipline: 'Engineering · Geometry',
    href: '/projects/load-test-a-structural-truss-bridge',
  },
  {
    question: 'How do algorithms & binary logic sort chaos?',
    discipline: 'Technology & Computing',
    href: '/learn/technology',
  },
] as const;

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-transparent">
      {/* Full-Screen Opening Animation Screen (Shows ONLY when loading the homepage) */}
      <HomepageOpeningMotion />

      {/* Global Navigation Bar & Mobile Navigation */}
      <Navbar
        activeSection="home"
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            SECTION 1 — HERO ("Directional Stride Constellation" & Interactive Concept Field)
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FAF9F6]/65 border-b border-[#E6EBF2] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
          {/* Subtle Blue and Teal Ambient Radial Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/4 w-[36rem] h-[36rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-8 w-[30rem] h-[30rem] rounded-full ambient-glow-teal"
          />

          {/* Interactive Floating STEM Formula Badges in Outer Hero Margins */}
          <HeroFloatingStemBadges />

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
                  <HeroHeadlineReveal text="Don't Just Learn What It Is. Understand Why It Matters." />

                  <p
                    aria-label="Discover how knowledge works in the real world."
                    className="text-xl sm:text-2xl font-semibold text-[#315BE8] tracking-tight leading-snug"
                  >
                    {'Discover how knowledge works in the real world.'
                      .split(' ')
                      .map((word, wordIdx, allWords) => {
                        const prevCharsCount = allWords
                          .slice(0, wordIdx)
                          .reduce((acc, w) => acc + w.length, 0);
                        return (
                          <span
                            key={`${word}-${wordIdx}`}
                            className="inline-block mr-[0.28em] whitespace-nowrap"
                          >
                            {word.split('').map((ch, charIdx) => (
                              <span
                                key={`${ch}-${charIdx}`}
                                style={{
                                  animationDelay: `${(prevCharsCount + charIdx) * 55}ms`,
                                }}
                                className="char-harmonic-wave bg-gradient-to-r from-[#315BE8] to-[#16A6A0] bg-clip-text text-transparent"
                              >
                                {ch}
                              </span>
                            ))}
                          </span>
                        );
                      })}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                  Move beyond memorization and textbook learning. Explore
                  concepts, connect ideas, experiment with knowledge, and
                  develop the ability to solve real-world problems.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <MagneticButton strength={6}>
                    <Button
                      variant="primary"
                      size="lg"
                      href="/learn"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Learning
                    </Button>
                  </MagneticButton>

                  <MagneticButton strength={5}>
                    <Button
                      variant="outline"
                      size="lg"
                      href="/how-it-works"
                    >
                      Discover Our Approach
                    </Button>
                  </MagneticButton>
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
            SECTION 2 — THE PROBLEM WITH TRADITIONAL LEARNING (Interactive Mode Switcher)
           ===================================================================== */}
        <section
          id="traditional-vs-concept"
          className="py-16 sm:py-24 bg-[#F6F9FF]/80 border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <FadeUp className="max-w-3xl space-y-3.5">
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
            </FadeUp>

            <RethinkingLearningComparison />
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — OUR LEARNING PHILOSOPHY (4-Stage Methodology & Stride Dot)
           ===================================================================== */}
        <section
          id="our-philosophy"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#FAF9F6]/70 border-b border-[#E6EBF2]"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <FadeUp>
              <SectionHeading
                index="02"
                kicker="Our Learning Philosophy"
                title="Learning Should Go Beyond Knowing."
                description="Every topic on Genustride Learn follows a connected four-stage progression—guiding learners from initial comprehension to independent creation."
              />
            </FadeUp>

            <FourStageMethodology />
          </div>
        </section>

        {/* =====================================================================
            SECTION 4 — EXPLORE LEARNING AREAS (3D Tilt, Blueprint Spotlight & Mini-Probes)
           ===================================================================== */}
        <section
          id="learning-areas"
          className="py-16 sm:py-24 bg-[#F6F9FF]/75 border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <FadeUp>
              <SectionHeading
                index="03"
                kicker="Explore Learning Areas"
                title="Explore the World Through Different Fields of Knowledge."
                description="Select any discipline below to open its dedicated subject landing page—or test the interactive micro-probe inside each card to see a core principle in action."
              />
            </FadeUp>

            {/* Six Subject Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {SUBJECTS_LIST.map((subject, idx) => (
                <FadeUp key={subject.slug} delayMs={idx * 70}>
                  <SubjectCard
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
                    className="h-full"
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5 — HOW LEARNING ACTUALLY HAPPENS (Interactive <IceFloatLab /> Simulation)
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
                description="See how a single everyday observation unfolds across chemistry, physics, ecology, and engineering—and test the live buoyancy & molecular lattice lab yourself."
              />

              <div className="px-4 py-3 rounded-xl bg-white border border-[#E6EBF2] shrink-0 space-y-0.5">
                <div className="text-[11px] font-semibold text-[#315BE8]">
                  Interactive Simulation & Walkthrough
                </div>
                <div className="text-sm sm:text-base font-bold text-[#17243B]">
                  &ldquo;Why Does Ice Float on Water?&rdquo;
                </div>
              </div>
            </div>

            <IceFloatLab
              steps={ICE_FLOATING_JOURNEY_STEPS}
              iceMolecularImageSrc={PLATFORM_IMAGES.iceFloatingMolecular}
              frozenLakeImageSrc={PLATFORM_IMAGES.frozenLakeNature}
            />
          </div>
        </section>

        {/* =====================================================================
            INFINITE KINETIC MARQUEE & ANIMATED COUNT-UP METRICS STRIP
           ===================================================================== */}
        <Marquee />

        <section
          aria-label="Platform scope and learning methodology metrics"
          className="py-12 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2]">
              <div className="pt-4 md:pt-0">
                <CountUpMetric
                  target={120}
                  suffix="+"
                  label="Practical Concept & Experiment Guides"
                  sublabel="Step-by-step physical mechanisms, household apparatus procedures, and empirical logbooks."
                />
              </div>
              <div className="pt-6 md:pt-0 md:pl-8">
                <CountUpMetric
                  target={6}
                  label="Core Interconnected STEM Disciplines"
                  sublabel="Mathematics, Physics, Chemistry, Biology, Technology & Computing, and Engineering."
                />
              </div>
              <div className="pt-6 md:pt-0 md:pl-8">
                <CountUpMetric
                  target={4}
                  label="Progressive Learning Stages"
                  sublabel="Every topic moves methodically through Understand → Explore → Apply → Create."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6 — REAL-WORLD LEARNING (Leaf Client Component)
           ===================================================================== */}
        <section
          id="real-world-learning"
          className="py-16 sm:py-24 bg-[#F6F9FF]/75 border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <FadeUp>
              <SectionHeading
                index="05"
                kicker="Practical Methodology"
                title="Knowledge Becomes Powerful When You Put It to Work."
                description="We combine four complementary learning methods so concepts are never trapped on a page—they are observed, tested, built, and explored interactively."
              />
            </FadeUp>

            <RealWorldMethodsExplorer methods={REAL_WORLD_LEARNING_METHODS} />
          </div>
        </section>

        {/* =====================================================================
            SECTION 7 — SKILLS BEYOND ACADEMIC KNOWLEDGE
           ===================================================================== */}
        <section
          id="skills-beyond"
          className="py-16 sm:py-24 bg-[#FAF9F6]/75 border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <FadeUp>
              <SectionHeading
                index="06"
                kicker="Lifelong Capabilities"
                title="Build the Skills That Matter Beyond the Classroom."
                description="When you learn by questioning, experimenting, and applying concepts, you develop enduring intellectual habits that serve you in any career or discipline."
              />
            </FadeUp>

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
          className="relative overflow-hidden py-16 sm:py-24 bg-[#F6F9FF]/75 border-b border-[#E6EBF2]"
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
            SECTION 9 — INTERACTIVE "PICK YOUR FIRST QUESTION" LAUNCHPAD & FINAL CTA
           ===================================================================== */}
        <section className="py-16 sm:py-24 bg-[#FAF9F6]/85">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Interactive "Pick Your First Question" Launchpad */}
            <div className="rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 space-y-5 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <KickerLabel
                    label="Interactive Curiosity Launchpad"
                    tone="primary"
                  />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#17243B]">
                    Pick Your First Question to Start Exploring Right Now
                  </h2>
                </div>
                <span className="text-xs text-[#64748B]">
                  Select any question to jump directly into the concept or experiment guide
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CURIOSITY_LAUNCHPAD_QUESTIONS.map((item, idx) => (
                  <Link
                    key={item.question}
                    href={item.href}
                    className="group rounded-xl bg-[#F6F9FF] hover:bg-[#EEF3FF] border border-[#E6EBF2] hover:border-[#315BE8]/45 p-4 flex flex-col justify-between space-y-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#315BE8]">
                          INQUIRY 0{idx + 1}
                        </span>
                        <span className="text-[#16A6A0] font-medium">
                          {item.discipline}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                        &ldquo;{item.question}&rdquo;
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-[#E6EBF2] flex items-center justify-between text-xs font-semibold text-[#315BE8]">
                      <span>Investigate Answer</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

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
