'use client';

import React, {useState} from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Compass,
  FlaskConical,
  BookOpen,
  Sparkles,
  Smartphone,
  Monitor,
  Tablet,
  X,
} from 'lucide-react';
import {
  BRAND_COLORS,
  LEARNING_STAGES,
  SUBJECT_CATEGORIES,
  TYPOGRAPHY_SCALE,
  RESPONSIVE_BREAKPOINTS,
  Button,
  KickerLabel,
  MetadataRow,
  LearningStageBadge,
  SegmentedFilter,
  Breadcrumbs,
  BreadcrumbItem,
  SectionHeading,
  ImageContainer,
  DropdownMenu,
  SubjectCard,
  ProjectCard,
  ResourceCard,
  CTASection,
  Navbar,
  Footer,
} from '@/components/design-system';

const IMAGES = {
  physicsOptics: '/src/assets/images/subject_physics_optics_1795307344643.jpg',
  biologyMicroscopy:
    '/src/assets/images/subject_biology_microscopy_1795307346120.jpg',
  solarWaterProject:
    '/src/assets/images/project_solar_water_sensor_1795307346390.jpg',
  fluidDynamicsLab:
    '/src/assets/images/resource_fluid_dynamics_lab_1795307344557.jpg',
};

interface DetailModalState {
  title: string;
  category: string;
  whatItIs: string;
  whyItMatters: string;
  howItWorks: string;
  whatYouCanCreate: string;
}

export default function DesignSystemPreviewPage() {
  const [activeNavSection, setActiveNavSection] = useState<string>('tokens');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<
    'understand' | 'explore' | 'apply' | 'create'
  >('understand');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [selectedAcademicLevel, setSelectedAcademicLevel] = useState<string>(
    'School · College · University'
  );
  const [activeBreadcrumbId, setActiveBreadcrumbId] =
    useState<string>('refraction');
  const [statusMessage, setStatusMessage] = useState<string>(
    'Interactive Design System Ready — Select any component to inspect its behavior.'
  );
  const [inspectedConcept, setInspectedConcept] =
    useState<DetailModalState | null>(null);

  const handleCopyHex = (hex: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    setStatusMessage(`Copied ${label} token (${hex}) to clipboard.`);
    setTimeout(() => {
      setCopiedHex((prev) => (prev === hex ? null : prev));
    }, 1800);
  };

  const handleNavigate = (sectionId: string, label?: string) => {
    const cleanId = sectionId.startsWith('subject-') ? 'cards' : sectionId;
    setActiveNavSection(cleanId);
    if (sectionId.startsWith('subject-')) {
      const slug = sectionId.replace('subject-', '');
      setSubjectFilter(slug);
    }
    if (label) {
      setStatusMessage(`Navigated to ${label}`);
    }
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    {id: 'home', label: 'Home'},
    {id: 'explore', label: 'Explore Learning'},
    {id: 'physics', label: 'Physics'},
    {
      id: 'refraction',
      label: 'Wave Optics & Prism Refraction',
      current: activeBreadcrumbId === 'refraction',
    },
  ];

  const subjectCardsData = [
    {
      slug: 'physics',
      title: 'Physics',
      disciplineCode: 'PHY-02',
      levelScope: 'School · College · University',
      description:
        'Understand matter, energy, wave propagation, and forces through direct physical observation and real-world systems.',
      coreFocus:
        'Wave optics, geometric light refraction, electromagnetic induction, and fluid laminar mechanics.',
      exemplarTopics: [
        'Prism Refraction & Dispersion',
        'Electromagnetic Induction',
        'Laminar Fluid Flow',
      ],
      imageSrc: IMAGES.physicsOptics,
      imageAlt:
        'Glass prism refracting a beam of light across a laboratory notebook with ray diagrams',
      accentColor: 'blue' as const,
      conceptDetail: {
        title: 'Physics — Wave Optics & Light Refraction',
        category: 'Subject Architecture · Physics',
        whatItIs:
          'The study of how electromagnetic waves bend and separate into constituent wavelengths when crossing boundaries between media of different optical densities.',
        whyItMatters:
          'Explains everything from fiber-optic internet cables across Bangladesh to camera lenses, microscope optics, and atmospheric rainbows.',
        howItWorks:
          "Governed by Snell's Law (n₁ sin θ₁ = n₂ sin θ₂), shorter wavelengths (violet/blue) slow down more in glass than longer wavelengths (red), causing angular dispersion.",
        whatYouCanCreate:
          'Build a calibrated tabletop spectrometer to measure light emission spectra from different household and natural light sources.',
      },
    },
    {
      slug: 'biology-life-science',
      title: 'Biology & Life Science',
      disciplineCode: 'BIO-04',
      levelScope: 'School · College · University',
      description:
        'Explore living cells, vascular transport, enzyme kinetics, and ecosystems as dynamic self-regulating biological machines.',
      coreFocus:
        'Cellular microscopy, plant vascular transport (xylem and phloem), and physiological oxygen affinity.',
      exemplarTopics: [
        'Leaf Stomata Microscopy',
        'Xylem Capillary Transport',
        'Hemoglobin Bohr Effect',
      ],
      imageSrc: IMAGES.biologyMicroscopy,
      imageAlt:
        'Student researcher examining plant leaf specimens under a compound microscope in a bright laboratory',
      accentColor: 'teal' as const,
      conceptDetail: {
        title: 'Biology & Life Science — Plant Vascular Transport',
        category: 'Subject Architecture · Biology & Life Science',
        whatItIs:
          'The biophysical mechanism by which plants transport water, minerals, and synthesized sugars across meters of vertical height without mechanical pumps.',
        whyItMatters:
          'Foundation for sustainable agriculture, drought-resistant crop breeding, and bio-inspired microfluidic filtration systems.',
        howItWorks:
          'Transpiration at leaf stomata creates negative water potential tension that pulls cohesive water columns upward through microscopic xylem vessels.',
        whatYouCanCreate:
          'Design a quantitative potometer apparatus and microscopic stomatal density map across local plant species.',
      },
    },
    {
      slug: 'mathematics',
      title: 'Mathematics',
      disciplineCode: 'MAT-01',
      levelScope: 'School · College · University',
      description:
        'Move beyond rote formula manipulation to see mathematics as the language of change, proportion, symmetry, and uncertainty.',
      coreFocus:
        'Rates of change, geometric optimization, spatial vectors, and Bayesian probability modeling.',
      exemplarTopics: [
        'Differential Rates of Change',
        'Geometric Ratios in Structural Design',
        'Probability Decision Trees',
      ],
      accentColor: 'blue' as const,
      conceptDetail: {
        title: 'Mathematics — Rates of Change & Optimization',
        category: 'Subject Architecture · Mathematics',
        whatItIs:
          'Mathematical modeling of how one quantity responds dynamically to changes in another across continuous time or space.',
        whyItMatters:
          'Used to optimize river flood forecasting, electrical grid load balancing, structural bridge curves, and epidemiological modeling.',
        howItWorks:
          'Derivatives capture instantaneous rate of change (dy/dx), while integrals accumulate continuous quantities over boundaries.',
        whatYouCanCreate:
          'Construct an optimization model for solar panel tilt angles across seasons at 23.8°N latitude.',
      },
    },
    {
      slug: 'chemistry',
      title: 'Chemistry',
      disciplineCode: 'CHM-03',
      levelScope: 'School · College · University',
      description:
        'Connect atomic bonding, reaction equilibrium, and electrochemistry to clean water, energy storage, and materials.',
      coreFocus:
        'Electrochemical cells, pH buffer systems, water quality titration, and catalytic reaction kinetics.',
      exemplarTopics: [
        'Galvanic & Electrolytic Cells',
        'Natural Water Buffer Equilibrium',
        'Activation Energy & Catalysis',
      ],
      accentColor: 'teal' as const,
      conceptDetail: {
        title: 'Chemistry — Electrochemistry & Water Quality',
        category: 'Subject Architecture · Chemistry',
        whatItIs:
          'The quantitative study of electron transfer reactions (redox) and dissolved ionic equilibria in aqueous solutions.',
        whyItMatters:
          'Directly underpins rechargeable battery technology, corrosion prevention, and drinking water salinity and arsenic testing.',
        howItWorks:
          'Potential differences between half-cells drive electron flow through an external circuit while ions migrate across a conductive bridge.',
        whatYouCanCreate:
          'Assemble and test a multi-cell galvanic battery array and measure voltage decay under resistive load.',
      },
    },
    {
      slug: 'technology-computing',
      title: 'Technology & Computing',
      disciplineCode: 'TEC-05',
      levelScope: 'School · College · University',
      description:
        'Understand how binary logic gates, algorithms, networks, and embedded microcontrollers sense and process real-world information.',
      coreFocus:
        'Digital logic circuits, sensor analog-to-digital conversion, data structures, and network protocols.',
      exemplarTopics: [
        'Boolean Logic to Silicon Gates',
        'Analog-to-Digital Sensor Sampling',
        'Graph Routing Algorithms',
      ],
      accentColor: 'blue' as const,
      conceptDetail: {
        title: 'Technology & Computing — Sensor Data Acquisition',
        category: 'Subject Architecture · Technology & Computing',
        whatItIs:
          'How continuous physical phenomena (voltage, temperature, light intensity) are sampled, quantized, and processed by digital algorithms.',
        whyItMatters:
          'Powers automated weather stations, medical diagnostic pulse oximeters, and smart agricultural irrigation controllers.',
        howItWorks:
          'An Analog-to-Digital Converter (ADC) samples continuous voltage at discrete intervals and maps values into binary registers.',
        whatYouCanCreate:
          'Program a real-time data logger that filters noisy sensor readings using a moving-average algorithm.',
      },
    },
    {
      slug: 'engineering-innovation',
      title: 'Engineering & Innovation',
      disciplineCode: 'ENG-06',
      levelScope: 'School · College · University',
      description:
        'Synthesize mathematics, physics, and computing to design, prototype, and test practical hardware and infrastructure solutions.',
      coreFocus:
        'Solar-powered environmental instrumentation, structural load testing, and closed-loop feedback systems.',
      exemplarTopics: [
        'Solar Water Quality Telemetry',
        'Truss Bridge Force Distribution',
        'PID Feedback Control',
      ],
      imageSrc: IMAGES.solarWaterProject,
      imageAlt:
        'Student engineering a solar-powered breadboard circuit connected to a water quality probe and multimeter',
      accentColor: 'amber' as const,
      conceptDetail: {
        title: 'Engineering & Innovation — Solar Water Quality Probe',
        category: 'Subject Architecture · Engineering & Innovation',
        whatItIs:
          'An integrated hardware design project combining photovoltaic power regulation, conductivity sensing, and circuit calibration.',
        whyItMatters:
          'Enables low-cost, autonomous monitoring of river and groundwater salinity and total dissolved solids (TDS).',
        howItWorks:
          'A photovoltaic cell powers a regulated voltage divider and probe oscillator whose output voltage varies proportionally with water conductivity.',
        whatYouCanCreate:
          'Build and calibrate a standalone solar-powered water conductivity and temperature testing node.',
      },
    },
  ];

  const filteredSubjects =
    subjectFilter === 'all'
      ? subjectCardsData
      : subjectCardsData.filter((s) => s.slug === subjectFilter);

  const activeStageObj =
    LEARNING_STAGES.find((s) => s.id === selectedStage) || LEARNING_STAGES[0];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* 1. Navigation Bar, Dropdown Menus & Responsive Mobile Navigation */}
      <Navbar
        activeSection={activeNavSection}
        onNavigate={handleNavigate}
        primaryCtaLabel="Explore Components"
        onPrimaryCta={() => handleNavigate('cards', 'Component Cards')}
      />

      {/* Interactive Feedback Bar + Breadcrumbs Showcase */}
      <div className="bg-[#F6F9FF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Breadcrumbs
            items={breadcrumbItems}
            onNavigate={(item) => {
              setActiveBreadcrumbId(item.id);
              setStatusMessage(`Breadcrumb selected: ${item.label}`);
            }}
          />
          <div className="text-xs text-[#64748B] flex items-center gap-2">
            <span className="font-semibold text-[#315BE8]">
              Genustride Learn Design System v1.0
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate max-w-xs sm:max-w-md">{statusMessage}</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Overview with Subtle Diffuse Ambient Lighting */}
        <section className="relative overflow-hidden border-b border-[#E6EBF2] py-14 sm:py-20">
          {/* Diffuse radial glows on dominant white canvas */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 w-[32rem] h-[32rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-12 right-10 w-[26rem] h-[26rem] rounded-full ambient-glow-teal"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 w-[22rem] h-[22rem] rounded-full ambient-glow-amber"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <MetadataRow
                  items={[
                    {label: 'DESIGN SYSTEM & COMPONENT LIBRARY', tone: 'primary'},
                    {label: 'Understand → Explore → Apply → Create', tone: 'secondary'},
                    {label: 'English-First · Bangladesh & Global', tone: 'neutral'},
                  ]}
                />

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#17243B] tracking-tight leading-[1.15]">
                  Visual Architecture for Practical, Concept-Driven Learning.
                </h1>

                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                  &ldquo;Don&apos;t just learn what it is. Understand why it
                  matters, how it works, and what you can do with it.&rdquo; This
                  living design system establishes Genustride Learn&apos;s brand
                  tokens, editorial typography, ambient lighting rules, and 13
                  reusable UI components.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleNavigate('tokens', 'Foundation Tokens')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inspect Brand Tokens
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => handleNavigate('cards', 'Educational Cards')}
                  >
                    Explore Subject & Project Cards
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleNavigate('controls', 'Interactive Controls')}
                  >
                    Interactive Primitives
                  </Button>
                </div>
              </div>

              {/* Core Learning Principle Interactive Stage Card */}
              <div className="lg:col-span-5">
                <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-5 bg-white">
                  <div className="flex items-center justify-between border-b border-[#E6EBF2] pb-4">
                    <div>
                      <KickerLabel
                        index="00"
                        label="CORE LEARNING PRINCIPLE"
                        tone="primary"
                      />
                      <h2 className="mt-1 text-lg font-bold text-[#17243B]">
                        4-Stage Conceptual Progression
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-[#16A6A0] font-semibold">
                      Interactive
                    </span>
                  </div>

                  {/* Interactive Stage Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {LEARNING_STAGES.map((stage) => (
                      <LearningStageBadge
                        key={stage.id}
                        stage={stage.id}
                        active={selectedStage === stage.id}
                        onClick={() => {
                          setSelectedStage(stage.id);
                          setStatusMessage(
                            `Learning Stage ${stage.step} (${stage.label}): ${stage.question}`
                          );
                        }}
                      />
                    ))}
                  </div>

                  {/* Active Stage Explanation */}
                  <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-[#315BE8]">
                        STAGE {activeStageObj.step} · {activeStageObj.label.toUpperCase()}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {activeStageObj.question}
                      </span>
                    </div>
                    <p className="text-sm text-[#17243B] font-medium leading-relaxed">
                      {activeStageObj.description}
                    </p>
                  </div>

                  <div className="text-xs text-[#64748B] flex items-center justify-between pt-1">
                    <span>Click any stage above to preview active token styling</span>
                    <span className="font-mono text-[#17243B]">4 / 4 Stages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01: BRAND COLORS, AMBIENT LIGHTING & TYPOGRAPHY TOKENS */}
        <section
          id="tokens"
          className="py-16 sm:py-20 border-b border-[#E6EBF2] bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <SectionHeading
              index="01"
              kicker="DESIGN TOKENS & VISUAL FOUNDATION"
              title="Color Architecture, Ambient Lighting & Typography"
              description="Built on a clean white canvas (#FFFFFF) with soft blue structural surfaces (#F6F9FF), high-contrast navy typography (#17243B), and purposeful primary blue, discovery teal, and curiosity amber accents."
            />

            {/* Brand Colors Grid */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#17243B]">
                Primary, Secondary & Accent Brand Tokens (Click any swatch to copy HEX)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    key: 'primary',
                    ...BRAND_COLORS.primary,
                    roleLabel: 'Primary · Brand & Actions',
                  },
                  {
                    key: 'secondary',
                    ...BRAND_COLORS.secondary,
                    roleLabel: 'Secondary · Discovery & Progress',
                  },
                  {
                    key: 'accent',
                    ...BRAND_COLORS.accent,
                    roleLabel: 'Accent · Curiosity & Highlights',
                  },
                ].map((token) => (
                  <div
                    key={token.key}
                    className="surface-card rounded-xl overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="h-24 w-full flex items-end justify-between p-4 border-b border-[#E6EBF2]"
                        style={{backgroundColor: token.hex}}
                      >
                        <span
                          className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md ${
                            token.key === 'accent'
                              ? 'bg-white/90 text-[#17243B]'
                              : 'bg-black/25 text-white'
                          }`}
                        >
                          {token.hex}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyHex(token.hex, token.name)}
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-white text-[#17243B] hover:bg-[#F6F9FF] transition-colors shadow-2xs"
                        >
                          {copiedHex === token.hex ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#16A6A0]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="p-5 space-y-2">
                        <div className="text-xs text-[#64748B] font-medium">
                          {token.roleLabel}
                        </div>
                        <div className="text-lg font-bold text-[#17243B]">
                          {token.name}
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {token.usage}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 py-3 bg-[#F6F9FF] border-t border-[#E6EBF2] flex items-center justify-between text-xs font-mono text-[#64748B]">
                      <span>Hover: {token.hoverHex}</span>
                      <span>Subtle: {token.subtleHex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Base Neutral & Surface Palette */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#17243B]">
                Base Surfaces, Typography Ink & Hairline Border Tokens
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {Object.entries(BRAND_COLORS.base).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleCopyHex(item.hex, item.name)}
                    className="surface-card surface-card-interactive rounded-xl p-4 text-left flex flex-col justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className="w-10 h-10 rounded-lg border border-[#E6EBF2] shrink-0"
                          style={{backgroundColor: item.hex}}
                        />
                        <span className="font-mono text-xs font-semibold text-[#17243B]">
                          {copiedHex === item.hex ? 'Copied!' : item.hex}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#17243B]">
                          {item.name}
                        </div>
                        <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                          {item.usage}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Subtle Ambient Lighting Demonstration */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#17243B]">
                Subtle Ambient Radial Lighting Rules (White Dominant Canvas)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-xl border border-[#E6EBF2] bg-white p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-56 h-56 rounded-full ambient-glow-blue"
                  />
                  <div className="relative z-10 space-y-2">
                    <KickerLabel label="HERO & CONCEPT ANCHORS" tone="primary" />
                    <h4 className="text-base font-bold text-[#17243B]">
                      Soft Blue Radial Glow
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Diffuse 8% radial opacity (#315BE8) positioned behind primary hero anchors and conceptual frameworks.
                    </p>
                    <p className="pt-2 font-mono text-[11px] text-[#315BE8]">
                      .ambient-glow-blue
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#E6EBF2] bg-white p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -right-12 w-56 h-56 rounded-full ambient-glow-teal"
                  />
                  <div className="relative z-10 space-y-2">
                    <KickerLabel
                      label="DISCOVERY & EXPERIMENTS"
                      tone="secondary"
                    />
                    <h4 className="text-base font-bold text-[#17243B]">
                      Subtle Teal Discovery Glow
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Diffuse 7% radial opacity (#16A6A0) used in exploration, simulation, and hands-on observation zones.
                    </p>
                    <p className="pt-2 font-mono text-[11px] text-[#16A6A0]">
                      .ambient-glow-teal
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#E6EBF2] bg-white p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -left-12 w-56 h-56 rounded-full ambient-glow-amber"
                  />
                  <div className="relative z-10 space-y-2">
                    <KickerLabel label="CURIOSITY & CREATION" tone="accent" />
                    <h4 className="text-base font-bold text-[#17243B]">
                      Occasional Amber Light Accent
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Restrained 8% radial warmth (#F3A644) highlighting creative challenges and &ldquo;What can you build?&rdquo; prompts.
                    </p>
                    <p className="pt-2 font-mono text-[11px] text-[#C87A19]">
                      .ambient-glow-amber
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Hierarchy Specification */}
            <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#E6EBF2] pb-4">
                <div>
                  <KickerLabel
                    index="01.B"
                    label="TYPOGRAPHY SYSTEM"
                    tone="primary"
                  />
                  <h3 className="mt-1 text-xl font-bold text-[#17243B]">
                    Manrope Display Headings · Inter Body · JetBrains Mono Notation
                  </h3>
                </div>
                <span className="text-xs text-[#64748B]">
                  Readable measure: 65ch–72ch · Balanced headlines
                </span>
              </div>

              <div className="divide-y divide-[#E6EBF2]">
                {TYPOGRAPHY_SCALE.map((item) => (
                  <div
                    key={item.role}
                    className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline"
                  >
                    <div className="lg:col-span-4 space-y-1">
                      <div className="text-sm font-bold text-[#17243B]">
                        {item.role}
                      </div>
                      <div className="text-xs font-mono text-[#315BE8]">
                        {item.font} · LH {item.lineHeight}
                      </div>
                      <p className="text-xs text-[#64748B]">{item.usage}</p>
                    </div>
                    <div className="lg:col-span-8">
                      {item.role.includes('Metadata') ? (
                        <div className="font-mono text-xs text-[#17243B]">
                          PHY-02 · Snell&apos;s Law: n₁ sin(θ₁) = n₂ sin(θ₂) · 15 min observation
                        </div>
                      ) : (
                        <div
                          className={`${item.sizeClass} ${
                            item.font.startsWith('Manrope')
                              ? 'font-bold text-[#17243B]'
                              : 'font-normal text-[#17243B]'
                          }`}
                        >
                          Understand why knowledge matters, how concepts actually
                          work, and what you can create.
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: BUTTONS, DROPDOWNS, BREADCRUMBS, BADGES & SECTION HEADINGS */}
        <section
          id="controls"
          className="py-16 sm:py-20 border-b border-[#E6EBF2] bg-[#F6F9FF]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="INTERACTIVE CONTROLS & NAVIGATION COMPONENTS"
              title="Buttons, Dropdowns, Breadcrumbs, Labels & Section Headings"
              description="Every interactive control features single-line text containment, accessible focus rings, smooth <200ms feedback, and clear visual hierarchy."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* 1. Primary, Secondary, Outline, Subtle, Ghost & Accent Buttons */}
              <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white">
                <div className="border-b border-[#E6EBF2] pb-4">
                  <KickerLabel
                    index="COMP 01"
                    label="BUTTON SYSTEM"
                    tone="primary"
                  />
                  <h3 className="mt-1 text-lg font-bold text-[#17243B]">
                    Primary, Secondary, Outline, Subtle, Ghost & Accent Buttons
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-[#64748B]">
                    Semantic Variants (Medium Default)
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="primary"
                      onClick={() =>
                        setStatusMessage('Primary button clicked: Main learning action')
                      }
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Primary Action
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() =>
                        setStatusMessage(
                          'Secondary button clicked: Discovery & interactive exploration'
                        )
                      }
                      leftIcon={<Compass className="w-4 h-4" />}
                    >
                      Explore Concept
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        setStatusMessage('Outline button clicked: Secondary navigation')
                      }
                    >
                      Outline Surface
                    </Button>
                    <Button
                      variant="subtle"
                      onClick={() =>
                        setStatusMessage('Subtle button clicked: Soft blue callout action')
                      }
                    >
                      Subtle Action
                    </Button>
                    <Button
                      variant="accent"
                      onClick={() =>
                        setStatusMessage('Accent button clicked: Creative project highlight')
                      }
                      leftIcon={<Sparkles className="w-4 h-4" />}
                    >
                      Create Project
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() =>
                        setStatusMessage('Ghost button clicked: Low-emphasis action')
                      }
                    >
                      Ghost Action
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] space-y-4">
                  <p className="text-xs font-semibold text-[#64748B]">
                    Size Scale (Small 38px · Medium 42px · Large 48px)
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setStatusMessage('Small button triggered')}
                    >
                      Small (sm)
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setStatusMessage('Medium button triggered')}
                    >
                      Medium Default (md)
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setStatusMessage('Large button triggered')}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Large Hero Action (lg)
                    </Button>
                  </div>
                </div>
              </div>

              {/* 2. Dropdown Menus, Breadcrumbs & Badges/Labels */}
              <div className="lg:col-span-5 surface-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white">
                <div className="border-b border-[#E6EBF2] pb-4">
                  <KickerLabel
                    index="COMP 02–04"
                    label="DROPDOWNS, BREADCRUMBS & LABELS"
                    tone="secondary"
                  />
                  <h3 className="mt-1 text-lg font-bold text-[#17243B]">
                    Menus, Trail Navigation & Editorial Metadata
                  </h3>
                </div>

                {/* Dropdown Menu Showcase */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#64748B]">
                    Interactive Dropdown Menu (Keyboard Escape & Click-Outside)
                  </p>
                  <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                    <DropdownMenu
                      triggerLabel={`Learner Level: ${selectedAcademicLevel}`}
                      items={[
                        {
                          id: 'all-levels',
                          label: 'School · College · University',
                          meta: 'All Stages',
                          description:
                            'Foundational intuition through university analytical depth.',
                          onSelect: () => {
                            setSelectedAcademicLevel(
                              'School · College · University'
                            );
                            setStatusMessage(
                              'Selected all academic tiers: School, College & University'
                            );
                          },
                        },
                        {
                          id: 'school',
                          label: 'School Learners',
                          meta: 'Classes 6–10',
                          description:
                            'Visual intuition, everyday observations, and foundational experiments.',
                          onSelect: () => {
                            setSelectedAcademicLevel('School Learners');
                            setStatusMessage('Selected level: School Learners');
                          },
                        },
                        {
                          id: 'college',
                          label: 'College Learners',
                          meta: 'Classes 11–12',
                          description:
                            'Quantitative derivations, deeper mechanisms, and practical instrumentation.',
                          onSelect: () => {
                            setSelectedAcademicLevel('College Learners');
                            setStatusMessage('Selected level: College Learners');
                          },
                        },
                        {
                          id: 'university',
                          label: 'University & Independent',
                          meta: 'Advanced',
                          description:
                            'System design, computational modeling, and open-ended engineering projects.',
                          onSelect: () => {
                            setSelectedAcademicLevel('University & Independent');
                            setStatusMessage(
                              'Selected level: University & Independent'
                            );
                          },
                        },
                      ]}
                    />
                  </div>
                </div>

                {/* Unboxed Metadata & Labels */}
                <div className="pt-3 border-t border-[#E6EBF2] space-y-2.5">
                  <p className="text-xs font-semibold text-[#64748B]">
                    Editorial Kickers & Unboxed Metadata Rows
                  </p>
                  <div className="space-y-2 p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                    <KickerLabel
                      index="03"
                      label="PRACTICAL APPLICATION"
                      tone="primary"
                    />
                    <MetadataRow
                      items={[
                        {label: 'Physics', tone: 'primary'},
                        {label: 'Geometric Optics', tone: 'secondary'},
                        {label: '20 min lab', tone: 'neutral', mono: true},
                      ]}
                    />
                  </div>
                </div>

                {/* Breadcrumbs Component */}
                <div className="pt-3 border-t border-[#E6EBF2] space-y-2">
                  <p className="text-xs font-semibold text-[#64748B]">
                    Breadcrumbs Trail Component
                  </p>
                  <div className="p-3 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                    <Breadcrumbs
                      items={breadcrumbItems}
                      onNavigate={(item) =>
                        setStatusMessage(`Breadcrumb clicked: ${item.label}`)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Heading & Responsive Mobile Navigation Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white">
                <div className="border-b border-[#E6EBF2] pb-4">
                  <KickerLabel
                    index="COMP 05"
                    label="SECTION HEADINGS"
                    tone="primary"
                  />
                  <h3 className="mt-1 text-lg font-bold text-[#17243B]">
                    Editorial Section Heading Variants
                  </h3>
                </div>

                <div className="p-5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                  <SectionHeading
                    index="01"
                    kicker="CONCEPTUAL ARCHITECTURE"
                    title="Connect Academic Knowledge with Real Life"
                    description="Every topic begins with why the concept matters and how the underlying mechanism works before introducing formulas."
                    action={
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setStatusMessage('Section heading action clicked')
                        }
                      >
                        View All Topics
                      </Button>
                    }
                  />
                </div>
              </div>

              {/* Responsive Breakpoints & Mobile Navigation Spec */}
              <div className="lg:col-span-5 surface-card rounded-2xl p-6 sm:p-8 space-y-5 bg-white">
                <div className="border-b border-[#E6EBF2] pb-4">
                  <KickerLabel
                    index="COMP 06"
                    label="RESPONSIVE ARCHITECTURE"
                    tone="secondary"
                  />
                  <h3 className="mt-1 text-lg font-bold text-[#17243B]">
                    Mobile-First to 1440px Desktop Grid
                  </h3>
                </div>

                <div className="space-y-3">
                  {RESPONSIVE_BREAKPOINTS.map((bp, idx) => (
                    <div
                      key={bp.tier}
                      className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#315BE8] shrink-0 mt-0.5">
                        {idx === 0 ? (
                          <Smartphone className="w-4 h-4" />
                        ) : idx === 1 ? (
                          <Tablet className="w-4 h-4" />
                        ) : (
                          <Monitor className="w-4 h-4" />
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-bold text-[#17243B]">
                            {bp.tier}
                          </span>
                          <span aria-hidden="true" className="text-[#64748B]">
                            ·
                          </span>
                          <span className="font-mono text-[#315BE8]">
                            {bp.range}
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {bp.behavior}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: SUBJECT CARDS & HANDS-ON PROJECT CARDS */}
        <section
          id="cards"
          className="py-16 sm:py-20 border-b border-[#E6EBF2] bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <SectionHeading
                index="03"
                kicker="EDUCATIONAL CARD ARCHITECTURE"
                title="Subject Cards & Hands-On Experiment Project Cards"
                description="Clean white surfaces (#FFFFFF), subtle hairline borders (#E6EBF2), soft shadows, real documentary educational photography, and zero pill clutter."
              />

              <SegmentedFilter
                ariaLabel="Filter subject cards"
                value={subjectFilter}
                onChange={(val) => {
                  setSubjectFilter(val);
                  setStatusMessage(`Filtered subject cards by: ${val}`);
                }}
                options={[
                  {value: 'all', label: 'All 6 Subjects', count: 6},
                  {value: 'physics', label: 'Physics'},
                  {value: 'biology-life-science', label: 'Biology'},
                  {value: 'engineering-innovation', label: 'Engineering'},
                  {value: 'mathematics', label: 'Mathematics'},
                  {value: 'chemistry', label: 'Chemistry'},
                  {value: 'technology-computing', label: 'Computing'},
                ]}
              />
            </div>

            {/* Subject Cards Grid (6 Initial Subject Categories) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSubjects.map((subject) => (
                <SubjectCard
                  key={subject.slug}
                  title={subject.title}
                  disciplineCode={subject.disciplineCode}
                  levelScope={subject.levelScope}
                  description={subject.description}
                  coreFocus={subject.coreFocus}
                  exemplarTopics={subject.exemplarTopics}
                  imageSrc={subject.imageSrc}
                  imageAlt={subject.imageAlt}
                  accentColor={subject.accentColor}
                  onExplore={() => {
                    setInspectedConcept(subject.conceptDetail);
                    setStatusMessage(`Inspecting ${subject.title} architecture`);
                  }}
                />
              ))}
            </div>

            {/* Hands-on Experiment & Project Cards */}
            <div className="pt-8 border-t border-[#E6EBF2] space-y-8">
              <SectionHeading
                index="03.B"
                kicker="EXPERIMENTS & PROJECTS COMPONENT"
                kickerTone="secondary"
                title="Project Cards Connecting Theory to Physical Creation"
                description="Designed for the 'Experiments & Projects' and subject landing pages—showing why an experiment matters, its core scientific principle, and what learners build."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                  title="Solar-Powered Water Conductivity & Salinity Probe"
                  subject="Engineering & Chemistry"
                  level="College · University"
                  duration="45 min build"
                  imageSrc={IMAGES.solarWaterProject}
                  imageAlt="Hands-on student engineering workbench with a solar cell, breadboard circuit, multimeter, and water sensor in a glass beaker"
                  whyItMatters="Salinity intrusion and dissolved solids affect drinking and agricultural water across coastal and river delta regions. Building a sensor demystifies how environmental telemetry works."
                  scientificPrinciple="Ohm's Law & Ionic Conductivity (G = 1/R)"
                  whatYouCreate="A calibrated breadboard conductivity probe powered by a small photovoltaic cell that measures total dissolved solids (TDS) in water samples."
                  onInspectProject={() =>
                    setInspectedConcept({
                      title: 'Solar-Powered Water Conductivity & Salinity Probe',
                      category: 'Hands-On Project · Engineering & Chemistry',
                      whatItIs:
                        'A practical instrumentation project that measures dissolved ionic concentration in water using an AC-excited conductivity probe and solar power circuit.',
                      whyItMatters:
                        'Connects textbook electrochemistry and circuit analysis to real environmental monitoring in river and coastal communities.',
                      howItWorks:
                        'Dissolved ions carry electrical current between two submerged electrodes. Measuring the voltage drop across a precision sense resistor yields water conductivity.',
                      whatYouCanCreate:
                        'A portable, solar-powered water quality meter with a handwritten calibration curve comparing rainwater, tap water, and saline water.',
                    })
                  }
                />

                <ProjectCard
                  title="Geometric Ray Tracing & Prism Dispersion Spectrometer"
                  subject="Physics & Mathematics"
                  level="School · College"
                  duration="30 min experiment"
                  imageSrc={IMAGES.physicsOptics}
                  imageAlt="Precision glass prism splitting a collimated light beam across a notebook with handwritten geometric ray diagrams"
                  whyItMatters="Instead of memorizing Snell's Law as an abstract trigonometric equation, learners measure incident and refracted angles directly on graph paper."
                  scientificPrinciple="Snell's Law & Wavelength Dispersion"
                  whatYouCreate="A documented ray-tracing lab notebook and calibrated angular dispersion plot measuring refractive index across visible wavelengths."
                  onInspectProject={() =>
                    setInspectedConcept({
                      title:
                        'Geometric Ray Tracing & Prism Dispersion Spectrometer',
                      category: 'Hands-On Experiment · Physics & Mathematics',
                      whatItIs:
                        'An optical experiment measuring the angular deviation and spectral dispersion of light passing through a triangular glass prism.',
                      whyItMatters:
                        'Reveals how refractive index depends on wavelength—the core principle behind optical spectrometers used in astronomy and chemical analysis.',
                      howItWorks:
                        'By tracing incident and emergent rays on millimeter graph paper, learners calculate the refractive index n = sin((A + Dₘ)/2) / sin(A/2).',
                      whatYouCanCreate:
                        'A calibrated tabletop prism goniometer capable of identifying light source spectra.',
                    })
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: LEARNING RESOURCE CARDS, IMAGE CONTAINERS & CTA SECTION */}
        <section
          id="resources"
          className="py-16 sm:py-20 border-b border-[#E6EBF2] bg-[#F6F9FF]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <SectionHeading
              index="04"
              kicker="EDITORIAL RESOURCES & MEDIA CONTAINERS"
              title="Resource Cards, Purposeful Image Containers & CTA Sections"
              description="Structured editorial layouts for concept guides, observation handbooks, and real educational photography with resilient aspect-ratio containers."
            />

            {/* Featured Horizontal Resource Card */}
            <ResourceCard
              layout="horizontal"
              title="Understanding Laminar vs. Turbulent Flow in Rivers and Pipelines"
              format="Interactive Concept Guide"
              subject="Physics & Engineering"
              readTime="12 min read · 8-stage framework"
              summary="Why does water flow smoothly in narrow channels at low velocity, yet break into chaotic vortices past bridge piers? Explore the Reynolds number as a ratio of inertial to viscous forces."
              conceptQuestions={[
                'What is the physical meaning of the Reynolds number (Re = ρvL/μ)?',
                'How do civil engineers shape bridge piers to prevent turbulent scouring?',
                'How can you observe laminar streamlines at home using a simple water channel?',
              ]}
              imageSrc={IMAGES.fluidDynamicsLab}
              imageAlt="University engineering students observing a fluid dynamics wave tank experiment in a naturally lit laboratory"
              onOpenResource={() =>
                setInspectedConcept({
                  title:
                    'Understanding Laminar vs. Turbulent Flow in Rivers and Pipelines',
                  category: 'Learning Resource · Physics & Engineering',
                  whatItIs:
                    'A complete 8-part conceptual breakdown of fluid flow regimes, boundary layers, and the dimensionless Reynolds number.',
                  whyItMatters:
                    'Essential for designing river erosion defenses, irrigation canals, blood flow models in arteries, and aerodynamic vehicles.',
                  howItWorks:
                    'When viscous forces dominate (low Re), fluid layers slide smoothly past one another. When inertial momentum dominates (high Re), small perturbations grow into eddies.',
                  whatYouCanCreate:
                    'Construct a desktop laminar flow nozzle and dye-streamline visualizer using household materials.',
                })
              }
            />

            {/* Vertical Resource Card + Image Container Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 flex">
                <ResourceCard
                  layout="vertical"
                  title="How Leaf Stomata Regulate Gas Exchange and Transpiration"
                  format="Microscopy Field Guide"
                  subject="Biology & Life Science"
                  readTime="9 min read"
                  summary="Observe how guard cells use turgor pressure and potassium ion transport to balance carbon dioxide intake against water loss under sunlight."
                  conceptQuestions={[
                    'How does osmotic pressure bend guard cell walls to open a stomatal pore?',
                    'What can a leaf impression reveal about a plant’s native climate?',
                  ]}
                  onOpenResource={() =>
                    setInspectedConcept({
                      title:
                        'How Leaf Stomata Regulate Gas Exchange and Transpiration',
                      category: 'Microscopy Field Guide · Biology & Life Science',
                      whatItIs:
                        'An observational guide to plant epidermal guard cells and the biophysical feedback loop controlling leaf gas exchange.',
                      whyItMatters:
                        'Explains how crops survive heat waves and how global forests regulate atmospheric water vapor and carbon cycles.',
                      howItWorks:
                        'Light triggers proton pumps in guard cell membranes, drawing in K⁺ ions and water via osmosis, bowing the radially reinforced cell walls apart.',
                      whatYouCanCreate:
                        'Prepare clear nail-varnish leaf epidermis casts to count and compare stomatal density across shade and sun leaves.',
                    })
                  }
                  className="w-full"
                />
              </div>

              <div className="lg:col-span-7 surface-card rounded-xl p-6 bg-white flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <KickerLabel
                    index="COMP 08"
                    label="IMAGE CONTAINER COMPONENT"
                    tone="secondary"
                  />
                  <h3 className="text-lg font-bold text-[#17243B]">
                    Purposeful Educational Photography with Aspect Ratio Control
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Supports 16:9, 4:3, 1:1, and 3:4 containers with natural cropping, semantic captions, and automatic fallback protection.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ImageContainer
                    src={IMAGES.physicsOptics}
                    alt="Prism refraction experiment on a laboratory workbench"
                    aspectRatio="4:3"
                    caption="4:3 Card & Experiment Container"
                    creditOrContext="Physics · Optics Lab"
                  />
                  <ImageContainer
                    src={IMAGES.biologyMicroscopy}
                    alt="Microscope and botanical leaf specimens in a science lab"
                    aspectRatio="4:3"
                    caption="4:3 Observation Container"
                    creditOrContext="Biology · Microscopy"
                  />
                </div>
              </div>
            </div>

            {/* Component 09: CTA Section */}
            <div className="pt-4">
              <CTASection
                kicker="READY FOR PAGE IMPLEMENTATION"
                title="Don't Just Learn What It Is. Understand How It Works and What You Can Create."
                description="This reusable design system powers all upcoming Genustride Learn public pages—from Explore Learning and Subject Landing Pages to Experiments & Projects."
                primaryActionLabel="Inspect 8-Point Content Architecture"
                onPrimaryAction={() =>
                  setInspectedConcept(subjectCardsData[0].conceptDetail)
                }
                secondaryActionLabel="Back to Foundation Tokens"
                onSecondaryAction={() =>
                  handleNavigate('tokens', 'Foundation Tokens')
                }
                surface="white"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer Component */}
      <Footer
        onSelectLink={(id, label) => {
          setStatusMessage(`Footer link selected: ${label}`);
          if (id.startsWith('subject-')) {
            handleNavigate(id, label);
          }
        }}
      />

      {/* Interactive Concept Inspection Modal (8-Stage Content Principle Demonstration) */}
      {inspectedConcept && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="concept-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17243B]/40 backdrop-blur-xs"
          onClick={() => setInspectedConcept(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E6EBF2] pb-4">
              <div className="space-y-1">
                <KickerLabel label={inspectedConcept.category} tone="primary" />
                <h2
                  id="concept-modal-title"
                  className="text-xl sm:text-2xl font-bold text-[#17243B]"
                >
                  {inspectedConcept.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setInspectedConcept(null)}
                aria-label="Close concept breakdown"
                className="min-h-[40px] min-w-[40px] rounded-lg border border-[#E6EBF2] flex items-center justify-center text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1.5">
                <div className="text-xs font-mono font-semibold text-[#315BE8]">
                  01 · UNDERSTAND (WHAT IS IT?)
                </div>
                <p className="text-xs text-[#17243B] leading-relaxed">
                  {inspectedConcept.whatItIs}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1.5">
                <div className="text-xs font-mono font-semibold text-[#315BE8]">
                  02 · WHY DOES IT MATTER?
                </div>
                <p className="text-xs text-[#17243B] leading-relaxed">
                  {inspectedConcept.whyItMatters}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#EAF8F7]/60 border border-[#16A6A0]/25 space-y-1.5">
                <div className="text-xs font-mono font-semibold text-[#16A6A0]">
                  03 · EXPLORE (HOW DOES IT WORK?)
                </div>
                <p className="text-xs text-[#17243B] leading-relaxed">
                  {inspectedConcept.howItWorks}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FEF6EB] border border-[#F3A644]/35 space-y-1.5">
                <div className="text-xs font-mono font-semibold text-[#C87A19]">
                  04 · APPLY & CREATE (WHAT CAN YOU BUILD?)
                </div>
                <p className="text-xs text-[#17243B] leading-relaxed">
                  {inspectedConcept.whatYouCanCreate}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#E6EBF2]">
              <span className="text-xs text-[#64748B]">
                Genustride Learn Content Principle Preview
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setInspectedConcept(null)}
              >
                Done Inspecting
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
