'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  Layers,
  Eye,
  Wrench,
  Sliders,
  Brain,
  Check,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Breadcrumbs,
  Button,
  KickerLabel,
  MetadataRow,
  SectionHeading,
  ImageContainer,
  CTASection,
} from '@/components/design-system';
import {PLATFORM_IMAGES} from '@/lib/content-data';

interface FrameworkStageDetail {
  number: string;
  id: 'understand' | 'explore' | 'apply' | 'create';
  title: string;
  tagline: string;
  accentHex: string;
  badgeClasses: string;
  borderActiveClasses: string;
  coreQuestions: string[];
  whatHappensInMind: string;
  concreteExample: string;
  subjectLink: {
    label: string;
    href: string;
  };
}

const FOUR_STEP_FRAMEWORK: FrameworkStageDetail[] = [
  {
    number: '01',
    id: 'understand',
    title: 'UNDERSTAND',
    tagline: 'Begin with meaning, purpose, and intuition before memorizing symbols.',
    accentHex: '#315BE8',
    badgeClasses: 'bg-[#EEF3FF] text-[#315BE8] border-[#315BE8]/25',
    borderActiveClasses: 'border-[#315BE8] bg-[#F6F9FF]',
    coreQuestions: [
      'What is the concept?',
      'Why does it exist?',
      'Why does it matter?',
    ],
    whatHappensInMind:
      'Instead of starting with an abstract definition or formula to memorize, you start by recognizing a real phenomenon or problem that needs explaining. When you know why an idea exists, your mind has a clear anchor for every detail that follows.',
    concreteExample:
      'Before learning Snell’s Law (n₁ sin θ₁ = n₂ sin θ₂), first ask: Why does a spoon look bent in a glass of water, and how do eyeglasses bring blurry light into focus?',
    subjectLink: {
      label: 'See in Physics (/learn/physics)',
      href: '/learn/physics',
    },
  },
  {
    number: '02',
    id: 'explore',
    title: 'EXPLORE',
    tagline: 'Investigate the inner mechanism and connect ideas across fields.',
    accentHex: '#16A6A0',
    badgeClasses: 'bg-[#EAF8F7] text-[#16A6A0] border-[#16A6A0]/25',
    borderActiveClasses: 'border-[#16A6A0] bg-[#EAF8F7]/40',
    coreQuestions: [
      'How does it work?',
      'What are the underlying principles?',
      'How does it connect with other ideas?',
    ],
    whatHappensInMind:
      'You open the "black box" to trace cause and effect step by step. You examine how changing one variable affects another, and discover how mathematics, physics, chemistry, and biology describe different layers of the same process.',
    concreteExample:
      'Tracing how a changing magnetic field pushes electrons in a copper coil (Physics), how trigonometry models the alternating sine wave (Mathematics), and how transformers step voltage down for homes (Engineering).',
    subjectLink: {
      label: 'See in Mathematics (/learn/mathematics)',
      href: '/learn/mathematics',
    },
  },
  {
    number: '03',
    id: 'apply',
    title: 'APPLY',
    tagline: 'Test knowledge through observations, experiments, and real scenarios.',
    accentHex: '#315BE8',
    badgeClasses: 'bg-[#EEF3FF] text-[#315BE8] border-[#315BE8]/25',
    borderActiveClasses: 'border-[#315BE8] bg-[#F6F9FF]',
    coreQuestions: [
      'Where can we see it in real life?',
      'How can we test it?',
      'What problems can it help solve?',
    ],
    whatHappensInMind:
      'Knowledge moves from passive theory to active verification. By setting up an experiment, taking real measurements, or analyzing a practical case study, you confirm for yourself that the principle holds true in the physical world.',
    concreteExample:
      'Building a copper-zinc galvanic cell on a workbench, measuring its 1.10V potential with a multimeter, and seeing how electrolyte conductance also measures water salinity.',
    subjectLink: {
      label: 'See in Chemistry (/learn/chemistry)',
      href: '/learn/chemistry',
    },
  },
  {
    number: '04',
    id: 'create',
    title: 'CREATE',
    tagline: 'Synthesize understanding to build, improve, and innovate.',
    accentHex: '#F3A644',
    badgeClasses: 'bg-[#FEF6EB] text-[#C87A19] border-[#F3A644]/40',
    borderActiveClasses: 'border-[#F3A644] bg-[#FEF6EB]/60',
    coreQuestions: [
      'What can we build?',
      'What can we improve?',
      'How can we use this knowledge in new ways?',
    ],
    whatHappensInMind:
      'The highest proof of understanding is creation. When you combine concepts from multiple subjects to design a prototype, solve an unfamiliar challenge, or improve an existing tool, the knowledge becomes permanently yours.',
    concreteExample:
      'Combining photovoltaic power regulation, ionic conductivity sensing, and calibration curves to build a standalone solar-powered water quality probe.',
    subjectLink: {
      label: 'See in Engineering (/learn/engineering)',
      href: '/learn/engineering',
    },
  },
];

const WATER_TEMPERATURE_STATES = [
  {
    id: 'temp-20',
    tempLabel: '20°C (Room Temp Liquid)',
    density: '0.998 g/cm³',
    molecularState: 'Fast-moving liquid H₂O molecules',
    volumeNote: 'Baseline liquid volume',
    floatingBehavior: 'Thermal motion breaks and reforms hydrogen bonds continuously.',
    explanation:
      'At 20°C, water molecules have enough kinetic energy to slide closely past one another while transient hydrogen bonds form and break trillions of times per second.',
    latticeSpacing: 'compact',
  },
  {
    id: 'temp-4',
    tempLabel: '4°C (Maximum Density Peak)',
    density: '1.000 g/cm³',
    molecularState: 'Most closely packed liquid state',
    volumeNote: 'Minimum volume (denser than 0°C water or ice)',
    floatingBehavior: 'Sinks to the bottom of cold lakes, keeping deep water liquid at 4°C.',
    explanation:
      'At 4°C, thermal agitation slows just enough for water molecules to pack at their closest possible average distance before hexagonal lattice locking begins. Because 4°C water is the densest, it settles at the bottom of winter lakes.',
    latticeSpacing: 'densest',
  },
  {
    id: 'temp-0-ice',
    tempLabel: '0°C (Solid Crystalline Ice)',
    density: '0.917 g/cm³',
    molecularState: 'Rigid hexagonal hydrogen-bonded lattice',
    volumeNote: 'Expands by ~9% in volume upon freezing',
    floatingBehavior: 'Floats on liquid water with ~91.7% submerged and ~8.3% above the surface.',
    explanation:
      'When water freezes at 0°C, every H₂O molecule locks into four stable hydrogen bonds arranged in an open hexagonal crystal ring. The open spaces inside these hexagonal rings hold molecules farther apart than in liquid water—lowering density to 0.917 g/cm³ so ice floats.',
    latticeSpacing: 'hexagonal',
  },
] as const;

const SEVEN_LEARNING_METHODS = [
  {
    number: '01',
    id: 'visual-explanations',
    title: 'Visual explanations',
    category: 'Stage 01–02 · Understand & Explore',
    summary:
      'Clear diagrams, geometric ray traces, molecular models, and force vector breakdowns that make invisible mechanisms immediately visible.',
    howItHelps:
      'Replaces walls of abstract text with spatial mental models you can picture and reason through.',
    exemplar:
      'Seeing how a hexagonal H₂O crystal lattice creates open volume compared to liquid water.',
    icon: Eye,
  },
  {
    number: '02',
    id: 'real-world-examples',
    title: 'Real-world examples',
    category: 'Stage 01 & 03 · Understand & Apply',
    summary:
      'Every academic topic is anchored in real systems—from household electricity and river bridges to agriculture, cooking, and medical diagnostics.',
    howItHelps:
      'Answers "Where is this actually used?" so no subject ever feels disconnected from daily life.',
    exemplar:
      'Connecting electromagnetic induction directly to power plant generators and neighborhood transformers.',
    icon: Compass,
  },
  {
    number: '03',
    id: 'scientific-experiments',
    title: 'Scientific experiments',
    category: 'Stage 02–03 · Explore & Apply',
    summary:
      'Structured hands-on observations using accessible apparatus where learners measure angles, voltages, osmotic mass changes, or structural deflection.',
    howItHelps:
      'Builds scientific honesty and empirical confidence by testing laws against physical evidence.',
    exemplar:
      'Tracing light refraction through a glass prism on millimeter graph paper to calculate refractive index.',
    icon: FlaskConical,
  },
  {
    number: '04',
    id: 'interactive-demonstrations',
    title: 'Interactive demonstrations',
    category: 'Stage 02 · Explore',
    summary:
      'Step-by-step parameter explorers and conceptual sandboxes that let you change variables and observe immediate system responses.',
    howItHelps:
      'Develops intuition for cause-and-effect relationships across continuous variables.',
    exemplar:
      'Stepping water temperature from 20°C to 4°C to 0°C ice to observe density and molecular packing shifts.',
    icon: Sliders,
  },
  {
    number: '05',
    id: 'practical-projects',
    title: 'Practical projects',
    category: 'Stage 03–04 · Apply & Create',
    summary:
      'Interdisciplinary build challenges where learners combine knowledge from multiple subjects to construct a working instrument or prototype.',
    howItHelps:
      'Transforms passive knowledge into tangible engineering and creative capability.',
    exemplar:
      'Building and calibrating a solar-powered water conductivity probe or load-tested Warren truss bridge.',
    icon: Wrench,
  },
  {
    number: '06',
    id: 'problem-solving-activities',
    title: 'Problem-solving activities',
    category: 'Stage 03–04 · Apply & Create',
    summary:
      'Scenario-based reasoning challenges that ask learners to diagnose why a system failed or how to optimize a design under real constraints.',
    howItHelps:
      'Trains learners to tackle unfamiliar problems rather than only repeating textbook templates.',
    exemplar:
      'Determining the seasonal tilt angle that maximizes solar energy capture at 23.8°N latitude.',
    icon: Brain,
  },
  {
    number: '07',
    id: 'reflection-knowledge-checks',
    title: 'Reflection and knowledge checks',
    category: 'All Stages · Self-Verification',
    summary:
      'Conceptual check-in questions that test whether you truly understand the "why" and "how"—with immediate, constructive reasoning feedback.',
    howItHelps:
      'Reveals subtle misconceptions early and reinforces long-term conceptual retention.',
    exemplar:
      'Explaining what would happen to aquatic life in winter if solid ice were denser than liquid water.',
    icon: CheckCircle2,
  },
] as const;

export default function HowItWorksPage() {
  const router = useRouter();
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [selectedTempStateId, setSelectedTempStateId] =
    useState<string>('temp-0-ice');
  const [selectedReflectionAnswer, setSelectedReflectionAnswer] = useState<
    number | null
  >(null);

  const activeStage = FOUR_STEP_FRAMEWORK[selectedStageIndex];
  const activeTempState =
    WATER_TEMPERATURE_STATES.find((s) => s.id === selectedTempStateId) ||
    WATER_TEMPERATURE_STATES[2];

  const scrollToSection = (id: string) => {
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

  const reflectionOptions = [
    {
      id: 0,
      text: 'Lakes would still freeze only at the top because cold air is above the water.',
      isCorrect: false,
      feedback:
        'Not quite. Even though cold air cools the surface first, if solid ice were denser than liquid water, every thin sheet of ice formed at the top would immediately sink to the bottom.',
    },
    {
      id: 1,
      text: 'Ice formed at the surface would sink to the bottom, causing lakes to freeze solid from the bottom up and destroying aquatic ecosystems.',
      isCorrect: true,
      feedback:
        'Exactly right. If ice were denser than liquid water, surface ice would sink continuously without insulating the water below—eventually freezing lakes solid from bottom to top.',
    },
    {
      id: 2,
      text: 'Water molecules would stop forming hydrogen bonds below 4°C.',
      isCorrect: false,
      feedback:
        'Actually, hydrogen bonds become more stable as thermal motion decreases near 0°C—which is why real H₂O locks into an open hexagonal lattice that floats.',
    },
  ];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Navbar
        activeSection="how-learning-happens"
        primaryCtaLabel="Explore Learning"
        onPrimaryCta={() => router.push('/learn')}
      />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#F6F9FF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <Breadcrumbs
            items={[
              {id: 'home', label: 'Home'},
              {id: 'how-it-works', label: 'How It Works', current: true},
            ]}
            onNavigate={(item) => {
              if (item.id === 'home') {
                router.push('/');
              }
            }}
          />
          <div className="text-xs font-medium text-[#64748B]">
            Core Principle:{' '}
            <span className="text-[#17243B] font-semibold">
              Understand → Explore → Apply → Create
            </span>
          </div>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            HERO SECTION
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E6EBF2] py-14 sm:py-20 lg:py-24">
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
              <div className="lg:col-span-7 space-y-6">
                <MetadataRow
                  items={[
                    {label: 'HOW GENUSTRIDE LEARN WORKS', tone: 'primary'},
                    {
                      label: 'CONCEPT-DRIVEN METHODOLOGY',
                      tone: 'secondary',
                    },
                  ]}
                />

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17243B] tracking-tight leading-[1.12]">
                  A Different Way to Understand and Apply Knowledge.
                </h1>

                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                  We believe meaningful learning begins with curiosity, grows
                  through understanding, and becomes powerful through real-world
                  application.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => scrollToSection('four-step-framework')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore the 4-Step Framework
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection('ice-learning-example')}
                  >
                    See a Real Learning Example
                  </Button>
                </div>
              </div>

              {/* Architectural Process Diagram Card in Hero */}
              <div className="lg:col-span-5">
                <div className="surface-card rounded-2xl p-6 sm:p-7 bg-white space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E6EBF2] pb-3.5">
                    <KickerLabel
                      index="PROCESS"
                      label="FROM CURIOSITY TO CREATION"
                      tone="primary"
                    />
                    <span className="font-mono text-xs text-[#16A6A0] font-semibold">
                      4 Connected Stages
                    </span>
                  </div>

                  {/* Process Flow Schematic */}
                  <div className="space-y-2.5">
                    {FOUR_STEP_FRAMEWORK.map((stage, idx) => (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => {
                          setSelectedStageIndex(idx);
                          scrollToSection('four-step-framework');
                        }}
                        className="w-full text-left p-3.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF3FF] border border-[#E6EBF2] hover:border-[#315BE8]/40 transition-all flex items-center justify-between gap-3 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="font-mono text-xs font-bold px-2.5 py-1 rounded-md border shrink-0"
                            style={{
                              color:
                                stage.id === 'create'
                                  ? '#C87A19'
                                  : stage.accentHex,
                              borderColor: `${stage.accentHex}33`,
                              backgroundColor: '#FFFFFF',
                            }}
                          >
                            {stage.number}
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                              {stage.title}
                            </div>
                            <p className="text-xs text-[#64748B] truncate">
                              {stage.coreQuestions.join(' · ')}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#315BE8] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 1 — WHY WE LEARN DIFFERENTLY
           ===================================================================== */}
        <section
          id="why-we-learn-differently"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Editorial Narrative Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <KickerLabel
                  index="01"
                  label="WHY WE LEARN DIFFERENTLY"
                  tone="primary"
                />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17243B] tracking-tight leading-[1.18]">
                  Why Memorizing Facts Alone Is Never Enough.
                </h2>
                <p className="text-[15px] sm:text-base text-[#17243B]/90 font-medium leading-relaxed">
                  A student can memorize a textbook definition, recite a theorem,
                  or substitute numbers into an equation for an exam—and still
                  feel completely lost when asked to explain how that principle
                  works in an everyday device or natural phenomenon.
                </p>
                <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                  When facts are stored as isolated fragments, they fade quickly
                  after examinations end. Genustride Learn is designed around a
                  different premise: knowledge becomes durable only when you
                  understand the logic behind it, see how it connects across
                  disciplines, and use it to reason independently.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="surface-card rounded-2xl p-4 bg-white">
                  <ImageContainer
                    src={PLATFORM_IMAGES.heroCuriousLearners}
                    alt="Students collaborating around a laboratory workbench with physical models, electronic measurement tools, and handwritten notebooks"
                    aspectRatio="4:3"
                    rounded="xl"
                    caption="Moving from passive textbook recall to active conceptual inquiry and practical reasoning."
                    creditOrContext="Methodology · Active Inquiry"
                  />
                </div>
              </div>
            </div>

            {/* 5 Core Pillars of Why We Learn Differently (Editorial Numbered Ledger) */}
            <div className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden shadow-2xs">
              <div className="px-6 py-4 bg-[#F6F9FF] border-b border-[#E6EBF2] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#17243B] tracking-wide">
                  FIVE PILLARS OF CONCEPT-DRIVEN LEARNING
                </span>
                <span className="text-xs text-[#64748B]">
                  Replacing rote memorization with structural comprehension
                </span>
              </div>

              <div className="divide-y divide-[#E6EBF2]">
                {[
                  {
                    num: '01',
                    title: 'Conceptual understanding',
                    contrast: 'Beyond memorizing definitions',
                    description:
                      'We focus on the underlying physical, mathematical, or biological intuition first—so learners grasp what an equation or law actually means in reality before manipulating symbols.',
                  },
                  {
                    num: '02',
                    title: 'Logical reasoning',
                    contrast: 'Beyond following fixed steps',
                    description:
                      'Instead of accepting rules on authority, learners trace cause and effect: asking why a relationship holds, what assumptions it relies on, and how changing one variable shifts the outcome.',
                  },
                  {
                    num: '03',
                    title: 'Connecting knowledge',
                    contrast: 'Beyond isolated textbook chapters',
                    description:
                      'Nature and technology do not divide themselves into separate school periods. We show how trigonometry, physics, chemistry, and biology intersect inside the same real-world phenomenon.',
                  },
                  {
                    num: '04',
                    title: 'Real-world applications',
                    contrast: 'Beyond studying only for examinations',
                    description:
                      'Every topic is grounded in tangible applications—from how water treatment chemistry and electric motors operate to how bridges carry loads and algorithms route information.',
                  },
                  {
                    num: '05',
                    title: 'Independent thinking',
                    contrast: 'Beyond waiting for a prescribed answer',
                    description:
                      'We equip learners with the habit of disciplined inquiry—knowing how to break down an unfamiliar question, test a hypothesis through observation, and reason toward a solution.',
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.num}
                    className="p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline hover:bg-[#F6F9FF]/50 transition-colors"
                  >
                    <div className="lg:col-span-4 flex items-baseline gap-3">
                      <span className="font-mono text-sm font-bold text-[#315BE8]">
                        {pillar.num}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#17243B]">
                          {pillar.title}
                        </h3>
                        <span className="text-xs text-[#16A6A0] font-medium">
                          {pillar.contrast}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2 — OUR FOUR-STEP LEARNING FRAMEWORK
           ===================================================================== */}
        <section
          id="four-step-framework"
          className="relative overflow-hidden py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full ambient-glow-blue"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="OUR FOUR-STEP LEARNING FRAMEWORK"
              title="Understand → Explore → Apply → Create"
              description="Every subject and topic on Genustride Learn guides learners through four progressive stages—moving from initial conceptual clarity to hands-on application and creation."
            />

            {/* Visual Process Diagram & Interactive Stage Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {FOUR_STEP_FRAMEWORK.map((stage, idx) => {
                const isSelected = idx === selectedStageIndex;
                return (
                  <div
                    key={stage.id}
                    onClick={() => setSelectedStageIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedStageIndex(idx);
                      }
                    }}
                    className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between space-y-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                      isSelected
                        ? `${stage.borderActiveClasses} shadow-sm ring-1 ring-[#315BE8]/20`
                        : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/40 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-xs font-bold px-3 py-1 rounded-lg border ${stage.badgeClasses}`}
                        >
                          STEP {stage.number}
                        </span>
                        {idx < 3 && (
                          <span
                            aria-hidden="true"
                            className="hidden lg:inline-block font-mono text-xs text-[#64748B]"
                          >
                            →
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-[#17243B] tracking-tight">
                          {stage.number}. {stage.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                          {stage.tagline}
                        </p>
                      </div>

                      {/* Exact Required Guiding Questions */}
                      <div className="pt-3 border-t border-[#E6EBF2] space-y-2">
                        <div className="text-[11px] font-semibold text-[#17243B] tracking-wide">
                          KEY QUESTIONS WE ASK:
                        </div>
                        <ul className="space-y-1.5">
                          {stage.coreQuestions.map((question) => (
                            <li
                              key={question}
                              className="flex items-start gap-2 text-xs font-medium text-[#17243B]"
                            >
                              <span
                                aria-hidden="true"
                                className="font-mono text-[#315BE8] select-none"
                              >
                                •
                              </span>
                              <span>{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E6EBF2] flex items-center justify-between text-xs">
                      <span
                        className={
                          isSelected
                            ? 'font-bold text-[#315BE8]'
                            : 'text-[#64748B]'
                        }
                      >
                        {isSelected ? 'Viewing Details Below' : 'Click to Inspect'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#315BE8]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Stage Deep-Dive Panel */}
            <div className="surface-card rounded-2xl p-6 sm:p-9 bg-white border border-[#E6EBF2]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <KickerLabel
                      index={`STAGE ${activeStage.number}`}
                      label={`DEEP DIVE · ${activeStage.title}`}
                      tone={
                        activeStage.id === 'explore'
                          ? 'secondary'
                          : activeStage.id === 'create'
                            ? 'accent'
                            : 'primary'
                      }
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#17243B]">
                    How Stage {activeStage.number} ({activeStage.title}) Works in Practice
                  </h3>

                  <p className="text-[15px] text-[#64748B] leading-relaxed">
                    {activeStage.whatHappensInMind}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {FOUR_STEP_FRAMEWORK.map((st, idx) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setSelectedStageIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          idx === selectedStageIndex
                            ? 'bg-[#17243B] text-white'
                            : 'bg-[#F6F9FF] text-[#64748B] hover:text-[#17243B] border border-[#E6EBF2]'
                        }`}
                      >
                        {st.number}. {st.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] p-6 space-y-4">
                  <div className="text-xs font-semibold text-[#315BE8]">
                    Concrete Subject Illustration:
                  </div>
                  <p className="text-sm text-[#17243B] leading-relaxed">
                    {activeStage.concreteExample}
                  </p>
                  <div className="pt-2 border-t border-[#E6EBF2] flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">
                      Experience this stage live:
                    </span>
                    <Link
                      href={activeStage.subjectLink.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                    >
                      <span>{activeStage.subjectLink.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — A REAL LEARNING EXAMPLE ("Why Does Ice Float on Water?")
           ===================================================================== */}
        <section
          id="ice-learning-example"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <SectionHeading
                index="03"
                kicker="A REAL LEARNING EXAMPLE"
                kickerTone="secondary"
                title="Why Does Ice Float on Water?"
                description="Follow how a learner moves from a simple everyday observation to understanding density, molecular hydrogen bonding, winter lake ecosystems, and civil engineering."
              />

              <div className="px-4 py-2.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#64748B] shrink-0">
                Crosses:{' '}
                <strong className="text-[#17243B]">
                  Chemistry · Physics · Biology · Engineering
                </strong>
              </div>
            </div>

            {/* Interactive Temperature, Density & Molecular Lattice Workbench */}
            <div className="surface-card rounded-2xl p-6 sm:p-8 lg:p-10 bg-white space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E6EBF2] pb-6">
                <div className="space-y-1">
                  <KickerLabel
                    index="INTERACTIVE CONCEPT DIAGRAM"
                    label="TEMPERATURE, DENSITY & MOLECULAR PACKING"
                    tone="primary"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#17243B]">
                    Compare Water at 20°C, 4°C, and 0°C Solid Ice
                  </h3>
                </div>

                {/* Interactive Temperature State Switcher */}
                <div
                  role="group"
                  aria-label="Select water temperature state"
                  className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F6F9FF] border border-[#E6EBF2] rounded-xl"
                >
                  {WATER_TEMPERATURE_STATES.map((state) => {
                    const isSelected = state.id === activeTempState.id;
                    return (
                      <button
                        key={state.id}
                        type="button"
                        onClick={() => setSelectedTempStateId(state.id)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#315BE8] text-white shadow-xs'
                            : 'text-[#17243B] hover:bg-white'
                        }`}
                      >
                        {state.tempLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Process Diagram (SVG Molecular & Density Representation) */}
                <div className="lg:col-span-5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#17243B]">
                      Molecular Spacing & Density Diagram
                    </span>
                    <span className="font-mono font-bold text-[#315BE8]">
                      ρ = {activeTempState.density}
                    </span>
                  </div>

                  {/* Clean Scientific SVG Diagram of H2O Molecular Packing */}
                  <div className="w-full aspect-[4/3] bg-white rounded-lg border border-[#E6EBF2] p-4 flex flex-col items-center justify-center">
                    {activeTempState.latticeSpacing === 'hexagonal' ? (
                      <svg
                        viewBox="0 0 280 180"
                        className="w-full h-full"
                        aria-label="Hexagonal hydrogen-bonded crystal lattice of solid ice at 0 degrees Celsius"
                      >
                        {/* Hexagonal Hydrogen Bond Lines */}
                        <g
                          stroke="#16A6A0"
                          strokeWidth="2"
                          strokeDasharray="4 3"
                        >
                          <polygon
                            points="140,25 185,50 185,102 140,128 95,102 95,50"
                            fill="rgba(22, 166, 160, 0.06)"
                          />
                          <line x1="95" y1="50" x2="55" y2="30" />
                          <line x1="185" y1="50" x2="225" y2="30" />
                          <line x1="95" y1="102" x2="55" y2="125" />
                          <line x1="185" y1="102" x2="225" y2="125" />
                        </g>
                        {/* H2O Nodes */}
                        {[
                          [140, 25],
                          [185, 50],
                          [185, 102],
                          [140, 128],
                          [95, 102],
                          [95, 50],
                          [55, 30],
                          [225, 30],
                          [55, 125],
                          [225, 125],
                        ].map(([cx, cy], i) => (
                          <g key={i}>
                            <circle
                              cx={cx}
                              cy={cy}
                              r="10"
                              fill="#315BE8"
                            />
                            <circle
                              cx={cx - 8}
                              cy={cy - 7}
                              r="4.5"
                              fill="#17243B"
                            />
                            <circle
                              cx={cx + 8}
                              cy={cy - 7}
                              r="4.5"
                              fill="#17243B"
                            />
                          </g>
                        ))}
                        <text
                          x="140"
                          y="79"
                          textAnchor="middle"
                          className="fill-[#16A6A0] text-[10px] font-mono font-bold"
                        >
                          Open Hexagonal Void
                        </text>
                        <text
                          x="140"
                          y="162"
                          textAnchor="middle"
                          className="fill-[#17243B] text-[11px] font-sans font-semibold"
                        >
                          0°C Solid Ice: Rigid Hexagonal Lattice (+9% Volume)
                        </text>
                      </svg>
                    ) : activeTempState.latticeSpacing === 'densest' ? (
                      <svg
                        viewBox="0 0 280 180"
                        className="w-full h-full"
                        aria-label="Closely packed liquid water molecules at 4 degrees Celsius maximum density"
                      >
                        <g stroke="#315BE8" strokeWidth="1.5" opacity="0.4">
                          <line x1="95" y1="55" x2="135" y2="60" />
                          <line x1="135" y1="60" x2="175" y2="55" />
                          <line x1="110" y1="90" x2="150" y2="92" />
                          <line x1="135" y1="60" x2="150" y2="92" />
                          <line x1="95" y1="55" x2="110" y2="90" />
                          <line x1="110" y1="90" x2="135" y2="120" />
                          <line x1="150" y1="92" x2="135" y2="120" />
                        </g>
                        {[
                          [95, 55],
                          [135, 60],
                          [175, 55],
                          [110, 90],
                          [150, 92],
                          [182, 90],
                          [90, 118],
                          [135, 120],
                          [172, 120],
                        ].map(([cx, cy], i) => (
                          <g key={i}>
                            <circle cx={cx} cy={cy} r="10" fill="#315BE8" />
                            <circle
                              cx={cx - 8}
                              cy={cy - 6}
                              r="4.5"
                              fill="#17243B"
                            />
                            <circle
                              cx={cx + 8}
                              cy={cy - 6}
                              r="4.5"
                              fill="#17243B"
                            />
                          </g>
                        ))}
                        <text
                          x="140"
                          y="162"
                          textAnchor="middle"
                          className="fill-[#17243B] text-[11px] font-sans font-semibold"
                        >
                          4°C Liquid Water: Closest Molecular Packing (1.000 g/cm³)
                        </text>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 280 180"
                        className="w-full h-full"
                        aria-label="Dynamic liquid water molecules at 20 degrees Celsius"
                      >
                        {[
                          [70, 45],
                          [135, 42],
                          [205, 50],
                          [95, 85],
                          [165, 82],
                          [215, 108],
                          [68, 122],
                          [130, 124],
                          [182, 126],
                        ].map(([cx, cy], i) => (
                          <g key={i}>
                            <circle cx={cx} cy={cy} r="10" fill="#315BE8" />
                            <circle
                              cx={cx - 8}
                              cy={cy - 6}
                              r="4.5"
                              fill="#17243B"
                            />
                            <circle
                              cx={cx + 8}
                              cy={cy - 6}
                              r="4.5"
                              fill="#17243B"
                            />
                          </g>
                        ))}
                        <text
                          x="140"
                          y="162"
                          textAnchor="middle"
                          className="fill-[#17243B] text-[11px] font-sans font-semibold"
                        >
                          20°C Liquid Water: Rapid Thermal Motion (0.998 g/cm³)
                        </text>
                      </svg>
                    )}
                  </div>

                  <div className="text-xs text-[#64748B] flex items-center justify-between">
                    <span>Blue = Oxygen atom · Dark Navy = Hydrogen atoms</span>
                    <span className="font-mono text-[#16A6A0]">H₂O (104.5°)</span>
                  </div>
                </div>

                {/* Explanation & Measurements for Selected State */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                      <div className="text-xs text-[#64748B]">State</div>
                      <div className="text-sm font-bold text-[#17243B] mt-0.5">
                        {activeTempState.tempLabel}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                      <div className="text-xs text-[#64748B]">
                        Measured Density (ρ)
                      </div>
                      <div className="text-sm font-mono font-bold text-[#315BE8] mt-0.5">
                        {activeTempState.density}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                      <div className="text-xs text-[#64748B]">Volume Effect</div>
                      <div className="text-xs font-semibold text-[#16A6A0] mt-1">
                        {activeTempState.volumeNote}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-[#17243B]">
                      What Is Happening at the Molecular Level?
                    </h4>
                    <p className="text-[15px] text-[#64748B] leading-relaxed">
                      {activeTempState.explanation}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EAF8F7]/60 border border-[#16A6A0]/25 text-xs text-[#17243B]">
                    <strong className="text-[#16A6A0] font-semibold">
                      Macroscopic Result:{' '}
                    </strong>
                    {activeTempState.floatingBehavior}
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Stage Visual Progression of "Why Does Ice Float on Water?" */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6 surface-card rounded-2xl p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <MetadataRow
                    items={[
                      {label: 'STAGES 01 & 02', tone: 'primary', mono: true},
                      {
                        label: 'MOLECULAR STRUCTURE & DENSITY LAB',
                        tone: 'secondary',
                      },
                    ]}
                  />

                  <ImageContainer
                    src={PLATFORM_IMAGES.iceFloatingMolecular}
                    alt="Ice floating at the top of a water beaker next to a thermometer and a 3D hexagonal water molecular model"
                    aspectRatio="16:9"
                    rounded="xl"
                  />

                  <h3 className="text-xl font-bold text-[#17243B]">
                    From a Simple Question to Molecular Structure & Density
                  </h3>

                  <ul className="space-y-2.5 text-sm text-[#64748B]">
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#315BE8] mt-0.5">
                        01.
                      </span>
                      <span>
                        <strong className="text-[#17243B]">
                          The Question & Density:
                        </strong>{' '}
                        Ice floats because its density (0.917 g/cm³) is ~9%
                        lower than liquid water (1.000 g/cm³ at 4°C).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#16A6A0] mt-0.5">
                        02.
                      </span>
                      <span>
                        <strong className="text-[#17243B]">
                          Molecular Geometry:
                        </strong>{' '}
                        Bent polar H₂O molecules form directional hydrogen bonds
                        that crystallize into open hexagonal rings with empty
                        internal space.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">
                    Disciplines: Chemistry (Bonding) + Physics (Buoyancy)
                  </span>
                  <Link
                    href="/learn/chemistry"
                    className="font-semibold text-[#315BE8] hover:underline"
                  >
                    Explore in Chemistry →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 surface-card rounded-2xl p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <MetadataRow
                    items={[
                      {label: 'STAGES 03 & 04', tone: 'secondary', mono: true},
                      {
                        label: 'NATURAL PHENOMENA & REAL-WORLD APPLICATION',
                        tone: 'primary',
                      },
                    ]}
                  />

                  <ImageContainer
                    src={PLATFORM_IMAGES.frozenLakeNature}
                    alt="Surface sheet of ice floating above liquid water in a winter lake with sunlight illuminating the ecosystem below"
                    aspectRatio="16:9"
                    rounded="xl"
                  />

                  <h3 className="text-xl font-bold text-[#17243B]">
                    From Frozen Lake Ecosystems to Civil Engineering
                  </h3>

                  <ul className="space-y-2.5 text-sm text-[#64748B]">
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#315BE8] mt-0.5">
                        03.
                      </span>
                      <span>
                        <strong className="text-[#17243B]">
                          Natural Phenomena:
                        </strong>{' '}
                        Floating surface ice forms an insulating thermal shield
                        over lakes and rivers, allowing fish and aquatic plants
                        to survive winter in the 4°C liquid water below.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#C87A19] mt-0.5">
                        04.
                      </span>
                      <span>
                        <strong className="text-[#17243B]">
                          Real-World Engineering:
                        </strong>{' '}
                        The same 9% expansion explains why uninsulated water
                        pipes burst in sub-zero weather, how frost fractures
                        rock into soil, and how engineers design cold-weather
                        pipelines.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">
                    Disciplines: Biology (Ecology) + Civil Engineering
                  </span>
                  <Link
                    href="/learn/biology"
                    className="font-semibold text-[#315BE8] hover:underline"
                  >
                    Explore in Biology →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4 — LEARNING THROUGH DIFFERENT METHODS
           ===================================================================== */}
        <section
          id="learning-methods"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <SectionHeading
              index="04"
              kicker="MULTIMODAL LEARNING ARCHITECTURE"
              title="Learning Through Seven Complementary Methods"
              description="No single format is enough to build deep mastery. We combine visual explanations, real-world examples, experiments, interactive demonstrations, practical projects, problem-solving, and reflection."
            />

            {/* 7 Methods Asymmetric Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SEVEN_LEARNING_METHODS.slice(0, 6).map((method) => {
                const IconComp = method.icon;
                return (
                  <div
                    key={method.id}
                    className="surface-card rounded-xl p-6 bg-white flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#315BE8]">
                          METHOD {method.number}
                        </span>
                        <IconComp
                          className="w-4 h-4 text-[#16A6A0]"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-[#17243B]">
                        {method.title}
                      </h3>

                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {method.summary}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-[#E6EBF2] space-y-1.5">
                      <div className="text-[11px] font-semibold text-[#16A6A0]">
                        {method.category}
                      </div>
                      <p className="text-xs text-[#17243B]/90">
                        <strong className="font-semibold">In Practice: </strong>
                        {method.exemplar}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Method 07: Interactive Reflection and Knowledge Check Showcase */}
            <div className="rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] p-6 sm:p-9">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <KickerLabel
                    index="METHOD 07"
                    label="REFLECTION AND KNOWLEDGE CHECKS"
                    tone="primary"
                  />
                  <h3 className="text-2xl font-bold text-[#17243B]">
                    Reflection and Knowledge Checks
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                    {SEVEN_LEARNING_METHODS[6].summary}
                  </p>
                  <p className="text-xs text-[#17243B] font-medium leading-relaxed">
                    Try the live conceptual check on the right—notice how it
                    asks you to reason about cause and effect rather than recite
                    a memorized number.
                  </p>
                </div>

                {/* Live Interactive Knowledge Check Widget */}
                <div className="lg:col-span-7 surface-card rounded-xl p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[#315BE8]">
                      CONCEPTUAL CHECK · TRY IT NOW
                    </span>
                    <span className="text-xs text-[#16A6A0] font-medium">
                      Immediate Reasoning Feedback
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#17243B]">
                    Suppose water behaved like almost every other substance, so
                    solid ice was denser than liquid water. What would happen to
                    a deep lake during a freezing winter?
                  </h4>

                  <div className="space-y-2.5">
                    {reflectionOptions.map((opt) => {
                      const isChosen = selectedReflectionAnswer === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedReflectionAnswer(opt.id)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 ${
                            isChosen
                              ? opt.isCorrect
                                ? 'bg-[#EAF8F7] border-[#16A6A0] text-[#17243B]'
                                : 'bg-[#FEF6EB] border-[#F3A644] text-[#17243B]'
                              : 'bg-[#F6F9FF] border-[#E6EBF2] hover:bg-white hover:border-[#315BE8]/40 text-[#17243B]'
                          }`}
                        >
                          <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-white border border-[#E6EBF2] shrink-0 mt-0.5">
                            {String.fromCharCode(65 + opt.id)}
                          </span>
                          <span className="font-medium">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedReflectionAnswer !== null && (
                    <div
                      className={`p-4 rounded-xl border text-xs leading-relaxed ${
                        reflectionOptions[selectedReflectionAnswer].isCorrect
                          ? 'bg-[#EAF8F7]/70 border-[#16A6A0]/30 text-[#17243B]'
                          : 'bg-[#FEF6EB] border-[#F3A644]/40 text-[#17243B]'
                      }`}
                    >
                      <strong className="font-bold block mb-1">
                        {reflectionOptions[selectedReflectionAnswer].isCorrect
                          ? 'Conceptual Insight Verified:'
                          : 'Think About the Density Mechanism:'}
                      </strong>
                      {reflectionOptions[selectedReflectionAnswer].feedback}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5 — LEARNING OUTCOMES
           ===================================================================== */}
        <section
          id="learning-outcomes"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="05"
              kicker="LONG-TERM LEARNING OUTCOMES"
              kickerTone="secondary"
              title="How This Methodology Transforms the Way You Think"
              description="When you consistently practice understanding, exploring, applying, and creating, you develop six enduring capabilities."
            />

            {/* 6 Learning Outcomes Architectural Grid */}
            <div className="rounded-2xl border border-[#E6EBF2] bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2]">
              {[
                {
                  index: '01',
                  title: 'Better conceptual understanding',
                  description:
                    'Grasp why principles work from first intuition so formulas and definitions make complete sense rather than feeling arbitrary.',
                  indicator: 'Retain ideas long after exams end',
                },
                {
                  index: '02',
                  title: 'Critical thinking',
                  description:
                    'Question assumptions, trace cause and effect, and evaluate scientific or quantitative claims using evidence and logic.',
                  indicator: 'Distinguish mechanism from coincidence',
                },
                {
                  index: '03',
                  title: 'Independent learning',
                  description:
                    'Approach any unfamiliar subject or technical topic systematically by asking the right sequence of foundational questions.',
                  indicator: 'Self-directed inquiry across fields',
                },
                {
                  index: '04',
                  title: 'Practical confidence',
                  description:
                    'Move comfortably from textbook diagrams to real measurement instruments, circuits, microscopes, and quantitative models.',
                  indicator: 'Bridge theory with physical reality',
                },
                {
                  index: '05',
                  title: 'Creativity',
                  description:
                    'Combine concepts across mathematics, physics, chemistry, biology, and computing to envision new designs and possibilities.',
                  indicator: 'Cross-disciplinary synthesis',
                },
                {
                  index: '06',
                  title: 'Problem-solving ability',
                  description:
                    'Decompose complex, open-ended real-world challenges into solvable physical and logical components.',
                  indicator: 'Solve unfamiliar real-world problems',
                },
              ].map((outcome, idx) => (
                <div
                  key={outcome.title}
                  className={`p-7 sm:p-8 flex flex-col justify-between space-y-5 ${
                    idx >= 3 ? 'lg:border-t lg:border-[#E6EBF2]' : ''
                  } ${
                    idx >= 2
                      ? 'md:border-t md:border-[#E6EBF2] lg:border-t-0'
                      : ''
                  } ${idx >= 3 ? 'lg:!border-t lg:!border-[#E6EBF2]' : ''}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#315BE8]">
                        OUTCOME {outcome.index}
                      </span>
                      <Check
                        className="w-4 h-4 text-[#16A6A0]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#E6EBF2] text-xs font-medium text-[#16A6A0]">
                    Outcome: {outcome.indicator}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6 — CTA
           ===================================================================== */}
        <section className="py-16 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="PUT THIS METHODOLOGY INTO PRACTICE"
              title="Start Learning Beyond Memorization."
              description="Explore six core fields of knowledge through understandable explanations, real-world connections, hands-on experiments, and practical projects."
              primaryActionLabel="Explore Learning"
              onPrimaryAction={() => router.push('/learn')}
              secondaryActionLabel="Back to Homepage"
              onSecondaryAction={() => router.push('/')}
              surface="soft-blue"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
