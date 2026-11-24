import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Lightbulb,
  FlaskConical,
  Sparkles,
  BookOpen,
  Globe2,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Button,
  KickerLabel,
  Breadcrumbs,
  SectionHeading,
  ImageContainer,
  CTASection,
} from '@/components/design-system';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

const CORE_VALUES = [
  {
    number: '01',
    title: 'Curiosity',
    subtitle: 'Questions Come Before Formulas',
    description:
      'Every meaningful discovery starts with an honest question about how the world works. We treat "Why does this happen?" as the starting engine of education rather than an interruption to the syllabus.',
    icon: Compass,
    tone: 'primary' as const,
  },
  {
    number: '02',
    title: 'Understanding',
    subtitle: 'First Principles Over Rote Recall',
    description:
      'Memorizing an answer lets you repeat it once; understanding the underlying mechanism lets you reconstruct it forever and adapt it to unfamiliar challenges.',
    icon: BookOpen,
    tone: 'secondary' as const,
  },
  {
    number: '03',
    title: 'Reasoning',
    subtitle: 'Cause, Effect, and Logical Proof',
    description:
      'We help learners trace causal chains—connecting mathematical proportions, physical conservation laws, and empirical evidence so conclusions are earned through logic.',
    icon: Lightbulb,
    tone: 'primary' as const,
  },
  {
    number: '04',
    title: 'Practical Application',
    subtitle: 'Knowledge Tested in Reality',
    description:
      'Concepts come alive when wired on a breadboard, measured with a ruler, or observed in everyday water filtration, weather patterns, and mechanical structures.',
    icon: FlaskConical,
    tone: 'secondary' as const,
  },
  {
    number: '05',
    title: 'Creativity',
    subtitle: 'Building and Improving Systems',
    description:
      'The highest stage of learning is creation—using scientific and mathematical principles to design new solutions, modify variables, and solve local problems.',
    icon: Sparkles,
    tone: 'accent' as const,
  },
  {
    number: '06',
    title: 'Continuous Learning',
    subtitle: 'Lifelong Scientific Habits',
    description:
      'Education does not end with a school or university examination. We cultivate independent habits of observation, verification, and intellectual humility.',
    icon: ShieldCheck,
    tone: 'primary' as const,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        activeSection="about"
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            HERO SECTION
            Headline: "We Believe Education Should Create Understanding, Not Just Remembering."
           ===================================================================== */}
        <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[#E6EBF2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-hero"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  {id: 'home', label: 'Home', href: '/'},
                  {id: 'about', label: 'About Genustride Learn', current: true},
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <KickerLabel
                    label="ABOUT GENUSTRIDE LEARN · OUR PHILOSOPHY & PURPOSE"
                    tone="primary"
                  />
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#17243B] tracking-tight leading-[1.08]">
                    We Believe Education Should Create Understanding, Not Just
                    Remembering.
                  </h1>
                  <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl">
                    Genustride Learn exists to bridge the gap between academic
                    subjects and the physical world—helping learners move from
                    rote textbook memorization to conceptual clarity, practical
                    experimentation, and independent problem-solving.
                  </p>
                </div>

                {/* Core Philosophy Quote Block */}
                <div className="p-5 rounded-xl bg-[#F6F9FF] border-l-4 border-[#315BE8] space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                    Guiding Educational Principle
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#17243B]">
                    &ldquo;Don&apos;t just learn what it is. Understand why it
                    matters, how it works, and what you can do with it.&rdquo;
                  </p>
                  <div className="text-xs font-mono text-[#16A6A0] font-semibold pt-1">
                    Understand → Explore → Apply → Create
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/how-it-works"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Discover How It Works
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="/learn"
                  >
                    Explore Learning Areas
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-4 shadow-lg space-y-4">
                  <ImageContainer
                    src={VERIFIED_PHOTOGRAPHY_INVENTORY.aboutHeroCollaborative.url}
                    alt={VERIFIED_PHOTOGRAPHY_INVENTORY.aboutHeroCollaborative.alt}
                    aspectRatio="4:3"
                    rounded="lg"
                    priority
                    caption="Connecting academic concepts in mathematics, science, and engineering with hands-on observation and reasoning."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 1 — OUR STORY
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="01 · OUR STORY"
              kickerTone="primary"
              title="Why We Started Building a Concept-Driven Learning Platform."
              description="Across classrooms everywhere, millions of capable learners spend years memorizing definitions, copying pre-solved derivations, and rehearsing exam answers—yet rarely get to ask how those ideas actually work in reality."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 space-y-5">
                <h3 className="text-2xl font-bold text-[#17243B]">
                  Moving Beyond the Memorization Trap
                </h3>
                <div className="space-y-4 text-[15px] sm:text-base text-[#64748B] leading-relaxed">
                  <p>
                    Too often, traditional education treats knowledge as a list
                    of disconnected facts to be stored before an examination and
                    forgotten shortly after. A student might memorize Ohm&apos;s
                    Law (<span className="font-mono text-[#17243B]">V = I · R</span>),
                    Pascal&apos;s Principle (<span className="font-mono text-[#17243B]">P = F / A</span>),
                    or the definition of cellular osmosis for a test, yet feel
                    completely uncertain when asked how a household LED circuit
                    is protected, how a hydraulic excavator lifts a heavy load,
                    or why coastal soil salinity stresses rice crops.
                  </p>
                  <p>
                    <strong className="text-[#17243B]">
                      Genustride Learn was conceived to change that relationship
                      with knowledge.
                    </strong>{' '}
                    We noticed that when a learner first encounters a concept
                    through a real physical question—and then traces its
                    mechanism step by step into a hands-on experiment or
                    everyday observation—fear of difficult subjects disappears.
                    Mathematics becomes a visual language of patterns and rates;
                    physics and chemistry become tools for explaining the
                    material world; technology and engineering become frameworks
                    for building useful things.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <KickerLabel
                    label="THE SHIFT WE CHAMPION"
                    tone="secondary"
                  />
                  <h3 className="text-xl font-bold text-[#17243B]">
                    Six Questions Every Learner Deserves to Answer
                  </h3>
                  <ul className="space-y-3 text-sm text-[#17243B]">
                    {[
                      'What am I actually learning—in clear, plain language?',
                      'Why does this knowledge matter beyond an examination paper?',
                      'How do the underlying mechanisms and equations really work?',
                      'Where is this principle used in everyday life and industry?',
                      'How can I test and apply this knowledge with my own hands?',
                      'How can I combine these ideas to create or improve something new?',
                    ].map((question, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#16A6A0] shrink-0 mt-0.5" />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2]">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                  >
                    <span>Explore Our 4-Step Learning Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2 — OUR MISSION & OUR VISION
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="02 · MISSION & VISION"
              kickerTone="secondary"
              title="Our Purpose and Where We Are Headed."
              description="Clear commitments that guide every subject page, concept explainer, and experiment guide we publish."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Our Mission Card */}
              <div className="rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <KickerLabel label="OUR MISSION" tone="primary" />
                  <blockquote className="text-2xl sm:text-[26px] font-bold text-[#17243B] tracking-tight leading-snug">
                    &ldquo;To make meaningful, practical, and concept-driven
                    learning accessible to learners by connecting academic
                    knowledge with real-world experiences and
                    problem-solving.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] text-sm text-[#64748B] leading-relaxed">
                  We fulfill this mission by designing structured explanations,
                  visual mechanisms, and accessible experiments that any
                  curious learner can explore without expensive barriers.
                </div>
              </div>

              {/* Our Vision Card */}
              <div className="rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <KickerLabel label="OUR VISION" tone="secondary" />
                  <blockquote className="text-2xl sm:text-[26px] font-bold text-[#17243B] tracking-tight leading-snug">
                    &ldquo;To build a future-ready learning ecosystem that
                    empowers individuals to think independently, create
                    intelligently, and contribute meaningfully to
                    society.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] text-sm text-[#64748B] leading-relaxed">
                  We envision a generation of thinkers and builders who do not
                  merely consume technology or repeat textbook lines, but
                  understand how systems work from first principles.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — OUR VALUES (6 CORE VALUES)
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="03 · OUR VALUES"
              kickerTone="primary"
              title="The Six Principles Behind Everything We Build."
              description="Our core educational values shape how we explain concepts, design experiments, and encourage learners to think."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {CORE_VALUES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-7 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#315BE8]">
                          VALUE {item.number}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] flex items-center justify-center text-[#315BE8]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#17243B]">
                          {item.title}
                        </h3>
                        <div className="text-xs font-semibold text-[#16A6A0] mt-0.5">
                          {item.subtitle}
                        </div>
                      </div>

                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4 — OUR JOURNEY (INITIAL FOCUS ON BANGLADESH & LONG-TERM ROADMAP)
            Explicit Honesty Rule: Do not claim physical campuses or established programs.
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="04 · OUR JOURNEY & ROADMAP"
              kickerTone="accent"
              title="Starting in Bangladesh. Building Toward a Comprehensive Learning Institution."
              description="We believe in complete transparency about where we are today and where we are working to go."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Honest Current Stage & Bangladesh Context */}
              <div className="lg:col-span-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                  <Globe2 className="w-5 h-5 text-[#315BE8]" />
                  <h3 className="text-xl font-bold text-[#17243B]">
                    Rooted in Bangladesh, Designed for Global Standards
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                  <p>
                    Our initial focus is supporting school, college, university,
                    and independent learners in{' '}
                    <strong className="text-[#17243B]">Bangladesh</strong>. We
                    ground our scientific and engineering examples in contexts
                    learners can observe around them every day—from multi-layer
                    water filtration, solar home systems, and coastal salinity
                    osmosis to river bridge trusses and monsoon meteorology—while
                    presenting every concept in clear, international-standard
                    English.
                  </p>
                  <p>
                    <strong className="text-[#17243B]">
                      Where We Stand Today:
                    </strong>{' '}
                    Genustride Learn is currently in its foundational digital
                    platform phase. We are actively building our public library
                    of concept explainers, subject exploration guides, and
                    safe, hands-on experiment procedures that learners and
                    teachers can use immediately at home or in the classroom.
                  </p>
                </div>

                {/* Explicit Transparency Notice */}
                <div className="p-4 rounded-xl bg-white border border-[#E6EBF2] space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                    Institutional Transparency Note
                  </div>
                  <p className="text-xs sm:text-sm text-[#17243B] leading-relaxed">
                    Genustride Learn is an online concept-driven learning
                    initiative in its foundational growth stage. We do not
                    currently operate physical campuses, accredited degree
                    programs, or formal certification centers. Our long-term
                    vision is to grow step by step into a comprehensive online
                    and practical learning institution.
                  </p>
                </div>
              </div>

              {/* Right Column: 3-Horizon Evolution Roadmap */}
              <div className="lg:col-span-5 space-y-4">
                {[
                  {
                    phase: 'HORIZON 01 · CURRENT FOUNDATION',
                    title: 'Open Concept & Experiment Platform',
                    status: 'Active Today',
                    description:
                      'Developing concept-driven subject hubs across Mathematics, Physics, Chemistry, Biology, Technology, and Engineering alongside safe, reproducible home and classroom experiment guides.',
                  },
                  {
                    phase: 'HORIZON 02 · INTERACTIVE LEARNING & LABS',
                    title: 'Interactive Explorations & Project Portfolios',
                    status: 'In Development',
                    description:
                      'Expanding interactive conceptual simulations, structured observation logbooks, and guided problem-solving pathways tailored for students and educators across Bangladesh.',
                  },
                  {
                    phase: 'HORIZON 03 · LONG-TERM INSTITUTIONAL VISION',
                    title: 'Comprehensive Online & Practical Learning Institution',
                    status: 'Long-Term Vision',
                    description:
                      'Evolving into a dedicated educational institution that combines rigorous digital conceptual learning with practical maker workshops, laboratory mentorship, and collaborative research.',
                  },
                ].map((milestone) => (
                  <div
                    key={milestone.phase}
                    className="p-5 rounded-2xl bg-white border border-[#E6EBF2] space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#315BE8]">
                        {milestone.phase}
                      </span>
                      <span className="text-[11px] font-mono text-[#16A6A0] font-semibold">
                        {milestone.status}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#17243B]">
                      {milestone.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FINAL CTA
           ===================================================================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="JOIN OUR LEARNING JOURNEY"
              title="Explore Concepts, Try an Experiment, or Share Your Ideas."
              description="Whether you are a student, an independent learner, a parent, or an educator, we invite you to explore how concept-driven learning works."
              primaryActionLabel="Explore Learning Hub (/learn)"
              primaryActionHref="/learn"
              secondaryActionLabel="Contact Genustride Learn"
              secondaryActionHref="/contact"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
