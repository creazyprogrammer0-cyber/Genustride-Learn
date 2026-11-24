'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ShieldAlert,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  BookOpen,
  Globe2,
  HelpCircle,
  Sparkles,
  ClipboardCheck,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Button,
  KickerLabel,
  MetadataRow,
  Breadcrumbs,
  SectionHeading,
  ImageContainer,
  ProjectCard,
  CTASection,
} from '@/components/design-system';
import type {ProjectDetailData} from '@/lib/projects-data';

export interface RelatedProjectSummary {
  slug: string;
  title: string;
  subjectLabel: string;
  difficulty: ProjectDetailData['difficulty'];
  estimatedTime: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  whatYouCreateSummary: string;
  coreMechanismFormula: string;
}

function ProjectScientificDiagram({
  diagramType,
}: {
  diagramType: ProjectDetailData['scientificExplanation']['diagramType'];
}) {
  if (diagramType === 'electric-circuit') {
    return (
      <svg
        viewBox="0 0 560 220"
        className="w-full h-auto"
        role="img"
        aria-label="Schematic diagram of a 3V DC series circuit with battery, switch, current-limiting resistor, and forward-biased LED"
      >
        <rect
          x="8"
          y="8"
          width="544"
          height="204"
          rx="12"
          fill="#F6F9FF"
          stroke="#E6EBF2"
        />
        {/* Closed Loop Conductive Path */}
        <rect
          x="80"
          y="48"
          width="400"
          height="124"
          rx="8"
          fill="none"
          stroke="#315BE8"
          strokeWidth="2.5"
        />
        {/* Battery Source on Left */}
        <rect x="52" y="84" width="56" height="52" rx="6" fill="#FFFFFF" stroke="#17243B" strokeWidth="1.5" />
        <text x="80" y="106" textAnchor="middle" fill="#17243B" fontSize="11" fontWeight="700">
          3.0V DC
        </text>
        <text x="80" y="122" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
          2×AA Cells
        </text>
        {/* Switch on Top Left */}
        <rect x="145" y="32" width="84" height="32" rx="6" fill="#FFFFFF" stroke="#16A6A0" strokeWidth="1.5" />
        <text x="187" y="52" textAnchor="middle" fill="#17243B" fontSize="10.5" fontWeight="700">
          Switch (SW1)
        </text>
        {/* Series Resistor on Top Right */}
        <rect x="290" y="32" width="120" height="32" rx="6" fill="#FFFFFF" stroke="#315BE8" strokeWidth="1.5" />
        <text x="350" y="48" textAnchor="middle" fill="#315BE8" fontSize="10.5" fontWeight="700" fontFamily="monospace">
          R = 220 Ω
        </text>
        <text x="350" y="60" textAnchor="middle" fill="#64748B" fontSize="8.5">
          Drops ~1.1 V
        </text>
        {/* LED on Right */}
        <rect x="444" y="82" width="76" height="56" rx="8" fill="#FEF6EC" stroke="#F3A644" strokeWidth="1.8" />
        <text x="482" y="104" textAnchor="middle" fill="#17243B" fontSize="11" fontWeight="700">
          Red LED
        </text>
        <text x="482" y="120" textAnchor="middle" fill="#B86E14" fontSize="9.5" fontFamily="monospace">
          V_f ≈ 1.9V
        </text>
        {/* Current Flow Direction Arrow */}
        <text x="280" y="114" textAnchor="middle" fill="#17243B" fontSize="11" fontWeight="700" fontFamily="monospace">
          I = (3.0V − 1.9V) / 220Ω ≈ 5.0 mA  →
        </text>
        <text x="280" y="192" textAnchor="middle" fill="#64748B" fontSize="10">
          Kirchhoff’s Voltage Loop: V_source (3.0V) = V_resistor (1.1V) + V_LED (1.9V)
        </text>
      </svg>
    );
  }

  if (diagramType === 'water-filtration') {
    return (
      <svg
        viewBox="0 0 560 220"
        className="w-full h-auto"
        role="img"
        aria-label="Cross-section schematic of a 4-stage multi-media gravity water filtration column"
      >
        <rect
          x="8"
          y="8"
          width="544"
          height="204"
          rx="12"
          fill="#F6F9FF"
          stroke="#E6EBF2"
        />
        {/* 4 Horizontal Filtration Stage Cards */}
        <rect x="28" y="46" width="115" height="128" rx="8" fill="#FFFFFF" stroke="#315BE8" strokeWidth="1.5" />
        <text x="85" y="72" textAnchor="middle" fill="#315BE8" fontSize="10" fontWeight="700" fontFamily="monospace">
          STAGE 01 · TOP
        </text>
        <text x="85" y="94" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
          Coarse Gravel
        </text>
        <text x="85" y="116" textAnchor="middle" fill="#64748B" fontSize="9.5">
          Traps large debris
        </text>
        <text x="85" y="132" textAnchor="middle" fill="#64748B" fontSize="9.5">
          &amp; prevents sand
        </text>
        <text x="85" y="148" textAnchor="middle" fill="#64748B" fontSize="9.5">
          disturbance
        </text>

        <rect x="158" y="46" width="115" height="128" rx="8" fill="#FFFFFF" stroke="#16A6A0" strokeWidth="1.5" />
        <text x="215" y="72" textAnchor="middle" fill="#16A6A0" fontSize="10" fontWeight="700" fontFamily="monospace">
          STAGE 02 · MID
        </text>
        <text x="215" y="94" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
          Fine Silica Sand
        </text>
        <text x="215" y="116" textAnchor="middle" fill="#64748B" fontSize="9.5">
          Tortuous pore
        </text>
        <text x="215" y="132" textAnchor="middle" fill="#64748B" fontSize="9.5">
          channels strain
        </text>
        <text x="215" y="148" textAnchor="middle" fill="#64748B" fontSize="9.5">
          suspended silt
        </text>

        <rect x="288" y="46" width="115" height="128" rx="8" fill="#FFFFFF" stroke="#17243B" strokeWidth="1.5" />
        <text x="345" y="72" textAnchor="middle" fill="#17243B" fontSize="10" fontWeight="700" fontFamily="monospace">
          STAGE 03 · BASE
        </text>
        <text x="345" y="94" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
          Activated Carbon
        </text>
        <text x="345" y="116" textAnchor="middle" fill="#64748B" fontSize="9.5">
          Microporous surface
        </text>
        <text x="345" y="132" textAnchor="middle" fill="#64748B" fontSize="9.5">
          adsorbs organic
        </text>
        <text x="345" y="148" textAnchor="middle" fill="#64748B" fontSize="9.5">
          pigments &amp; odor
        </text>

        <rect x="418" y="46" width="114" height="128" rx="8" fill="#EAF8F7" stroke="#16A6A0" strokeWidth="1.5" />
        <text x="475" y="72" textAnchor="middle" fill="#16A6A0" fontSize="10" fontWeight="700" fontFamily="monospace">
          STAGE 04 · EXIT
        </text>
        <text x="475" y="94" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
          Cotton Retaining
        </text>
        <text x="475" y="116" textAnchor="middle" fill="#64748B" fontSize="9.5">
          Holds charcoal bed
        </text>
        <text x="475" y="132" textAnchor="middle" fill="#64748B" fontSize="9.5">
          while clarified
        </text>
        <text x="475" y="148" textAnchor="middle" fill="#64748B" fontSize="9.5">
          filtrate drips out
        </text>

        <text x="280" y="196" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">
          Gravity Percolation Direction: Stage 01 (Coarsest Pores) → Stage 04 (Clarified Filtrate)
        </text>
      </svg>
    );
  }

  if (diagramType === 'hydraulic-pascal') {
    return (
      <svg
        viewBox="0 0 560 220"
        className="w-full h-auto"
        role="img"
        aria-label="Schematic of Pascal's Principle showing small input syringe A1 connected to large output syringe A2"
      >
        <rect
          x="8"
          y="8"
          width="544"
          height="204"
          rx="12"
          fill="#F6F9FF"
          stroke="#E6EBF2"
        />
        {/* Left Narrow Cylinder A1 */}
        <rect x="90" y="54" width="52" height="106" rx="4" fill="#DBEAFE" stroke="#315BE8" strokeWidth="2" />
        <rect x="96" y="34" width="40" height="24" rx="3" fill="#315BE8" />
        <text x="116" y="24" textAnchor="middle" fill="#17243B" fontSize="11" fontWeight="700">
          Input Force F₁ ↓
        </text>
        <text x="116" y="108" textAnchor="middle" fill="#17243B" fontSize="10.5" fontWeight="700" fontFamily="monospace">
          Area A₁
        </text>
        <text x="116" y="124" textAnchor="middle" fill="#315BE8" fontSize="9.5" fontFamily="monospace">
          Long Stroke d₁
        </text>

        {/* Connecting Fluid Line */}
        <rect x="142" y="136" width="236" height="20" fill="#93C5FD" stroke="#315BE8" strokeWidth="2" />
        <text x="260" y="150" textAnchor="middle" fill="#17243B" fontSize="10" fontWeight="700" fontFamily="monospace">
          Uniform Pressure P = F₁/A₁ = F₂/A₂
        </text>

        {/* Right Wide Cylinder A2 */}
        <rect x="378" y="54" width="104" height="106" rx="4" fill="#DBEAFE" stroke="#16A6A0" strokeWidth="2" />
        <rect x="384" y="44" width="92" height="18" rx="3" fill="#16A6A0" />
        <text x="430" y="30" textAnchor="middle" fill="#16A6A0" fontSize="11" fontWeight="700">
          ↑ Output Force F₂ = F₁ · (A₂/A₁)
        </text>
        <text x="430" y="108" textAnchor="middle" fill="#17243B" fontSize="10.5" fontWeight="700" fontFamily="monospace">
          Area A₂ &gt; A₁
        </text>
        <text x="430" y="124" textAnchor="middle" fill="#0F766E" fontSize="9.5" fontFamily="monospace">
          Short Stroke d₂
        </text>

        <text x="280" y="194" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">
          Volume Conservation: A₁ · d₁ = A₂ · d₂   |   Ideal Work Conservation: F₁ · d₁ = F₂ · d₂
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 560 200"
      className="w-full h-auto"
      role="img"
      aria-label="Scientific variable flow diagram from controlled physical input to quantitative measurement"
    >
      <rect
        x="8"
        y="8"
        width="544"
        height="184"
        rx="12"
        fill="#F6F9FF"
        stroke="#E6EBF2"
      />
      <rect x="32" y="52" width="144" height="96" rx="10" fill="#FFFFFF" stroke="#315BE8" strokeWidth="1.5" />
      <text x="104" y="82" textAnchor="middle" fill="#315BE8" fontSize="10" fontWeight="700" fontFamily="monospace">
        01 · INDEPENDENT VAR
      </text>
      <text x="104" y="104" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
        Physical Input
      </text>
      <text x="104" y="124" textAnchor="middle" fill="#64748B" fontSize="9.5">
        Angle, Load, or Geometry
      </text>

      <rect x="208" y="52" width="144" height="96" rx="10" fill="#FFFFFF" stroke="#16A6A0" strokeWidth="1.5" />
      <text x="280" y="82" textAnchor="middle" fill="#16A6A0" fontSize="10" fontWeight="700" fontFamily="monospace">
        02 · MECHANISM
      </text>
      <text x="280" y="104" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
        Physical Coupling
      </text>
      <text x="280" y="124" textAnchor="middle" fill="#64748B" fontSize="9.5">
        Governing Conservation Law
      </text>

      <rect x="384" y="52" width="144" height="96" rx="10" fill="#FFFFFF" stroke="#F3A644" strokeWidth="1.5" />
      <text x="456" y="82" textAnchor="middle" fill="#B86E14" fontSize="10" fontWeight="700" fontFamily="monospace">
        03 · DEPENDENT VAR
      </text>
      <text x="456" y="104" textAnchor="middle" fill="#17243B" fontSize="12" fontWeight="700">
        Measured Output
      </text>
      <text x="456" y="124" textAnchor="middle" fill="#64748B" fontSize="9.5">
        Empirical Log Comparison
      </text>
    </svg>
  );
}

export function ProjectDetailTemplate({
  project,
  relatedProjects,
}: {
  project: ProjectDetailData;
  relatedProjects: RelatedProjectSummary[];
}) {
  const router = useRouter();

  // Interactive checklist state for Required Materials
  const [checkedMaterials, setCheckedMaterials] = useState<
    Record<number, boolean>
  >({});

  // Interactive step completion tracking for Step-by-Step Procedure
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>(
    {}
  );

  // Interactive Learner Observation & Actual Measured Results Logbook (ready for future project submissions)
  const [learnerMeasurements, setLearnerMeasurements] = useState<
    Record<number, string>
  >({});
  const [learnerObserverNotes, setLearnerObserverNotes] = useState('');
  const [logSavedConfirmation, setLogSavedConfirmation] = useState(false);

  // Interactive Reflection Hint toggles
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>(
    {}
  );

  const completedStepsCount =
    Object.values(completedSteps).filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        activeSection="projects"
        primaryCtaLabel="All Experiments"
        onPrimaryCta={() => router.push('/projects')}
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            HERO & OVERVIEW HEADER (1. Title, 2. Main Photograph, 3. Difficulty, 4. Time)
           ===================================================================== */}
        <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-20 border-b border-[#E6EBF2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-hero"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Breadcrumb & Back Link */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Breadcrumbs
                items={[
                  {id: 'home', label: 'Home', href: '/'},
                  {
                    id: 'projects',
                    label: 'Experiments & Projects',
                    href: '/projects',
                  },
                  {id: project.slug, label: project.title, current: true},
                ]}
                onNavigate={(item) => {
                  if (item.href) router.push(item.href);
                }}
              />

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Experiments & Projects</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Title, Difficulty, Time, Core Mechanism, & Quick Anchors */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <KickerLabel
                    label={`${project.categoryLabel.toUpperCase()} · HANDS-ON GUIDE`}
                    tone="secondary"
                  />

                  {/* 1. Project Title */}
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#17243B] tracking-tight leading-[1.12]">
                    {project.title}
                  </h1>

                  <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* 3. Difficulty Level & 4. Estimated Completion Time Metadata Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                      Difficulty Level
                    </div>
                    <div className="text-base font-bold text-[#17243B] mt-1">
                      {project.difficulty}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                      Completion Time
                    </div>
                    <div className="text-base font-bold text-[#17243B] font-mono mt-1 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#315BE8]" />
                      <span>{project.estimatedTime}</span>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                      Core Principle
                    </div>
                    <div className="text-xs font-bold text-[#315BE8] font-mono mt-1.5 truncate">
                      {project.coreMechanismFormula}
                    </div>
                  </div>
                </div>

                {/* What You Will Create Callout */}
                <div className="p-4 rounded-xl bg-[#EAF8F7] border border-[#16A6A0]/30 space-y-1">
                  <div className="text-xs font-mono font-bold text-[#16A6A0] uppercase">
                    What You Will Build & Measure
                  </div>
                  <p className="text-sm font-medium text-[#17243B]">
                    {project.whatYouCreateSummary}
                  </p>
                </div>

                {/* Quick Section Navigation */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {[
                    {label: 'Materials', href: '#materials'},
                    {label: 'Safety', href: '#safety'},
                    {label: 'Step-by-Step Procedure', href: '#procedure'},
                    {label: 'Observations & Logbook', href: '#observations'},
                    {
                      label: 'Scientific Explanation',
                      href: '#scientific-explanation',
                    },
                  ].map((nav) => (
                    <a
                      key={nav.href}
                      href={nav.href}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F6F9FF] hover:bg-[#EBF2FF] text-[#17243B] hover:text-[#315BE8] border border-[#E6EBF2] transition-colors"
                    >
                      {nav.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: 2. Main Photograph */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-3 sm:p-4 shadow-md">
                  <ImageContainer
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    aspectRatio="16:9"
                    rounded="lg"
                    priority
                    caption={`${project.title} — ${project.subjectLabel} (${project.difficulty} · ${project.estimatedTime})`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. WHAT YOU WILL DISCOVER & 7. WHY THIS PROJECT MATTERS
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* 6. What You Will Discover */}
              <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 space-y-5">
                <div className="space-y-1.5">
                  <KickerLabel
                    label="WHAT YOU WILL DISCOVER"
                    tone="primary"
                  />
                  <h2 className="text-2xl font-bold text-[#17243B]">
                    Key Learning Discoveries
                  </h2>
                </div>

                <ul className="space-y-3.5">
                  {project.whatYouWillDiscover.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-[#17243B] leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#16A6A0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. Why This Project Matters */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <KickerLabel
                    label="WHY THIS PROJECT MATTERS"
                    tone="accent"
                  />
                  <h2 className="text-2xl font-bold text-[#17243B]">
                    Connecting Theory to Physical Reality
                  </h2>
                  <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                    {project.whyThisProjectMatters}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#64748B]">
                      Primary Academic Subject
                    </div>
                    <div className="text-sm font-bold text-[#17243B]">
                      {project.subjectLabel}
                    </div>
                  </div>
                  <Link
                    href={`/learn/${project.subjectSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                  >
                    <span>Explore Subject</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. REQUIRED MATERIALS & 8. CONCEPTS INVOLVED
           ===================================================================== */}
        <section
          id="materials"
          className="py-14 lg:py-20 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* 5. Required Materials */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <SectionHeading
                  kicker="REQUIRED MATERIALS & APPARATUS"
                  kickerTone="primary"
                  title="Everything You Need Before Starting."
                  description="Check off each item as you prepare your workspace. Every material has a specific physical function in the experiment."
                />
                <div className="text-xs font-mono text-[#64748B]">
                  {Object.values(checkedMaterials).filter(Boolean).length} of{' '}
                  {project.requiredMaterials.length} items ready
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.requiredMaterials.map((mat, index) => {
                  const isChecked = Boolean(checkedMaterials[index]);
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        setCheckedMaterials((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setCheckedMaterials((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }));
                        }
                      }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isChecked
                          ? 'bg-[#EAF8F7]/60 border-[#16A6A0]'
                          : 'bg-[#F6F9FF] border-[#E6EBF2] hover:border-[#315BE8]/50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-[#16A6A0] border-[#16A6A0] text-white'
                            : 'bg-white border-[#CBD5E1]'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-bold text-[#17243B]">
                            {mat.name}
                          </h3>
                          <span className="text-xs font-mono font-semibold text-[#315BE8] shrink-0">
                            {mat.quantity}
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          <strong className="text-[#17243B]">Purpose: </strong>
                          {mat.purpose}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. Concepts Involved */}
            <div className="space-y-6 pt-6 border-t border-[#E6EBF2]">
              <SectionHeading
                kicker="CONCEPTS INVOLVED"
                kickerTone="secondary"
                title="Scientific & Mathematical Principles at Work."
                description="Review the core principles that govern what you are about to build and measure."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.conceptsInvolved.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono font-semibold text-[#16A6A0] uppercase">
                        {concept.discipline}
                      </div>
                      <h3 className="text-lg font-bold text-[#17243B]">
                        {concept.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {concept.explanation}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-[#E6EBF2] text-xs font-mono text-[#315BE8] font-semibold">
                      {concept.principleOrFormula}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            9. SAFETY INSTRUCTIONS & 10. STEP-BY-STEP PROCEDURE
           ===================================================================== */}
        <section
          id="safety"
          className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 9. Safety Instructions Banner */}
            <div className="rounded-2xl bg-[#FEF6EC] border-2 border-[#F3A644] p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-6 h-6 text-[#B86E14] shrink-0" />
                  <h2 className="text-xl font-bold text-[#17243B]">
                    Safety Instructions & Laboratory Precautions
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-[#B86E14] uppercase">
                  {project.safetyInstructions.severityLevel}
                </span>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {project.safetyInstructions.warnings.map((warning, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#F3A644]/40 text-xs sm:text-sm text-[#17243B] leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="font-mono font-bold text-[#B86E14] shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 10. Step-by-Step Procedure */}
            <div id="procedure" className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <SectionHeading
                  kicker="STEP-BY-STEP PROCEDURE"
                  kickerTone="primary"
                  title="Build, Test, and Measure Methodically."
                  description="Follow each step in order. Mark a step complete once you have verified the checkpoint."
                />
                <div className="text-xs font-mono text-[#315BE8] font-semibold">
                  {completedStepsCount} of {project.stepByStepProcedure.length}{' '}
                  steps completed
                </div>
              </div>

              <div className="space-y-4">
                {project.stepByStepProcedure.map((step) => {
                  const isDone = Boolean(completedSteps[step.stepNumber]);
                  return (
                    <div
                      key={step.stepNumber}
                      className={`rounded-2xl bg-white border p-6 transition-all ${
                        isDone
                          ? 'border-[#16A6A0] bg-[#EAF8F7]/20'
                          : 'border-[#E6EBF2]'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl font-mono text-sm font-bold flex items-center justify-center shrink-0 ${
                              isDone
                                ? 'bg-[#16A6A0] text-white'
                                : 'bg-[#F6F9FF] text-[#315BE8] border border-[#E6EBF2]'
                            }`}
                          >
                            0{step.stepNumber}
                          </div>

                          <div className="space-y-2.5">
                            <h3 className="text-lg font-bold text-[#17243B]">
                              {step.title}
                            </h3>
                            <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                              {step.instruction}
                            </p>

                            <div className="p-3 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] text-xs text-[#17243B] flex items-start gap-2">
                              <FlaskConical className="w-4 h-4 text-[#16A6A0] shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-semibold">
                                  Verification Checkpoint:{' '}
                                </strong>
                                <span className="text-[#64748B]">
                                  {step.verificationCheck}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setCompletedSteps((prev) => ({
                              ...prev,
                              [step.stepNumber]: !prev[step.stepNumber],
                            }))
                          }
                          className={`px-3.5 py-2 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer self-start ${
                            isDone
                              ? 'bg-[#16A6A0] text-white'
                              : 'bg-[#F6F9FF] text-[#17243B] hover:bg-[#EBF2FF] hover:text-[#315BE8] border border-[#E6EBF2]'
                          }`}
                        >
                          {isDone ? '✓ Step Completed' : 'Mark Step Done'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            11. EXPECTED OBSERVATIONS vs. ACTUAL MEASURED RESULTS LOGBOOK
           ===================================================================== */}
        <section
          id="observations"
          className="py-14 lg:py-20 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              kicker="EXPECTED OBSERVATIONS & EMPIRICAL LOGBOOK"
              kickerTone="secondary"
              title="Compare Theoretical Expectations with Your Actual Measurements."
              description="Never invent experimental results. Use the theoretical benchmarks below to understand what should happen qualitatively, then record your real instrument readings in the interactive observation log."
            />

            {/* Scientific Honesty Distinction Notice */}
            <div className="p-5 rounded-xl bg-[#F6F9FF] border-l-4 border-[#315BE8] space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                Distinguishing Expected Behavior from Actual Measured Results
              </div>
              <p className="text-xs sm:text-sm text-[#17243B] leading-relaxed">
                {project.expectedObservations.distinctionNotice}
              </p>
            </div>

            {/* Qualitative Expected Observations List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.expectedObservations.qualitativeExpectations.map(
                (obs, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-start gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-[#16A6A0] mt-0.5">
                      EXPECTED 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#17243B] leading-relaxed">
                      {obs}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Interactive Learner Observation & Measurement Worksheet (Ready for Future Submissions) */}
            <div className="rounded-2xl bg-white border-2 border-[#E6EBF2] p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6EBF2] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#315BE8] uppercase">
                    <ClipboardCheck className="w-4 h-4" />
                    <span>Interactive Learner Observation & Measurement Log</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#17243B]">
                    Record Your Actual Measured Results
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setLearnerMeasurements({});
                    setLearnerObserverNotes('');
                    setLogSavedConfirmation(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#17243B] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Worksheet</span>
                </button>
              </div>

              <div className="space-y-4">
                {project.expectedObservations.measurementLogTemplate.map(
                  (row, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
                    >
                      <div className="lg:col-span-4 space-y-1">
                        <div className="text-xs font-bold text-[#17243B]">
                          {row.trialOrCondition}
                        </div>
                        <div className="text-[11px] font-mono text-[#64748B]">
                          Unit: {row.unit}
                        </div>
                      </div>

                      <div className="lg:col-span-4 text-xs text-[#64748B] leading-relaxed">
                        <strong className="text-[#17243B]">
                          Theoretical Expectation:{' '}
                        </strong>
                        {row.expectedQualitativeBehavior}
                      </div>

                      <div className="lg:col-span-4">
                        <label className="block text-[11px] font-semibold text-[#315BE8] mb-1">
                          Your Actual Measured Result ({row.unit}):
                        </label>
                        <input
                          type="text"
                          value={learnerMeasurements[idx] || ''}
                          onChange={(e) => {
                            setLogSavedConfirmation(false);
                            setLearnerMeasurements((prev) => ({
                              ...prev,
                              [idx]: e.target.value,
                            }));
                          }}
                          placeholder={row.learnerMeasurementPrompt}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#CBD5E1] text-[#17243B] focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Additional Notes & Save Action for Future Project Submissions */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-[#17243B]">
                  Experimental Notes & Sources of Measurement Deviation (e.g.,
                  ambient temperature, friction, resistor tolerance):
                </label>
                <textarea
                  rows={2}
                  value={learnerObserverNotes}
                  onChange={(e) => {
                    setLogSavedConfirmation(false);
                    setLearnerObserverNotes(e.target.value);
                  }}
                  placeholder="Describe any differences between expected theoretical behavior and what you actually observed..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] text-[#17243B] focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                />

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#64748B]">
                    Structured for learner portfolio logs and future project
                    submission reviews.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setLogSavedConfirmation(true)}
                  >
                    Save Observation Log Snapshot
                  </Button>
                </div>

                {logSavedConfirmation && (
                  <div className="p-3.5 rounded-xl bg-[#EAF8F7] border border-[#16A6A0]/40 text-xs text-[#17243B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A6A0] shrink-0" />
                    <span>
                      Your observation log for{' '}
                      <strong>{project.title}</strong> has been recorded in your
                      current session workspace.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            12. SCIENTIFIC EXPLANATION & 13. REAL-WORLD APPLICATION
           ===================================================================== */}
        <section
          id="scientific-explanation"
          className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 12. Scientific Explanation */}
              <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <KickerLabel
                    label="SCIENTIFIC EXPLANATION"
                    tone="primary"
                  />
                  <h2 className="text-2xl font-bold text-[#17243B]">
                    How the Underlying Mechanism Actually Works
                  </h2>
                  <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                    {project.scientificExplanation.overview}
                  </p>
                </div>

                {/* Governing Equation Box */}
                <div className="p-5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#315BE8] uppercase">
                    Governing Mathematical Relationship
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-bold text-[#17243B]">
                    {project.scientificExplanation.governingEquation}
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {project.scientificExplanation.equationBreakdown}
                  </p>
                </div>

                {/* Custom Scientific Schematic Diagram */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#17243B]">
                    System Mechanism Schematic
                  </div>
                  <ProjectScientificDiagram
                    diagramType={project.scientificExplanation.diagramType}
                  />
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed pt-2 border-t border-[#E6EBF2]">
                  {project.scientificExplanation.deeperMechanism}
                </p>
              </div>

              {/* 13. Real-World Application */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <KickerLabel
                    label="REAL-WORLD APPLICATION"
                    tone="secondary"
                  />
                  <h2 className="text-2xl font-bold text-[#17243B]">
                    {project.realWorldApplication.headline}
                  </h2>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {project.realWorldApplication.description}
                  </p>
                </div>

                {/* Bangladesh & Global Engineering Context */}
                <div className="p-4 rounded-xl bg-[#EAF8F7] border border-[#16A6A0]/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#16A6A0] uppercase">
                    <Globe2 className="w-4 h-4" />
                    <span>In Bangladesh & Global Industry</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#17243B] leading-relaxed">
                    {project.realWorldApplication.bangladeshAndGlobalContext}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-[#17243B] uppercase tracking-wider">
                    Where Engineers Use This Principle
                  </div>
                  <ul className="space-y-2">
                    {project.realWorldApplication.industryExamples.map(
                      (example, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg bg-[#F6F9FF] border border-[#E6EBF2] text-xs font-medium text-[#17243B] flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#315BE8] shrink-0" />
                          <span>{example}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            14. REFLECTION QUESTIONS & 15. FURTHER CHALLENGES
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* 14. Reflection Questions */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-1.5">
                  <KickerLabel
                    label="REFLECTION QUESTIONS"
                    tone="primary"
                  />
                  <h2 className="text-2xl font-bold text-[#17243B]">
                    Test Your Conceptual Understanding
                  </h2>
                  <p className="text-sm text-[#64748B]">
                    Reason through each question before revealing the conceptual
                    hint.
                  </p>
                </div>

                <div className="space-y-4">
                  {project.reflectionQuestions.map((item, idx) => {
                    const isRevealed = Boolean(revealedHints[idx]);
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <HelpCircle className="w-5 h-5 text-[#315BE8] shrink-0 mt-0.5" />
                          <h3 className="text-sm sm:text-base font-bold text-[#17243B] leading-snug">
                            {item.question}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setRevealedHints((prev) => ({
                              ...prev,
                              [idx]: !prev[idx],
                            }))
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] cursor-pointer"
                        >
                          <Lightbulb className="w-3.5 h-3.5" />
                          <span>
                            {isRevealed
                              ? 'Hide Conceptual Reasoning Hint'
                              : 'Reveal Conceptual Reasoning Hint'}
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              isRevealed ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isRevealed && (
                          <div className="p-3.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#64748B] leading-relaxed">
                            <strong className="text-[#17243B]">
                              Conceptual Hint:{' '}
                            </strong>
                            {item.conceptualHint}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 15. Further Challenges (Stage 04 · Create) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-1.5">
                  <KickerLabel
                    label="STAGE 04 · FURTHER CHALLENGES"
                    tone="accent"
                  />
                  <h2 className="text-2xl font-bold text-[#17243B]">
                    Modify, Extend, and Create Something New
                  </h2>
                  <p className="text-sm text-[#64748B]">
                    Take what you built and push it further by isolating a new
                    engineering variable.
                  </p>
                </div>

                <div className="space-y-4">
                  {project.furtherChallenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FEF6EC]/70 border border-[#F3A644]/40 space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-[#B86E14] uppercase">
                          EXTENSION CHALLENGE 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-[#17243B] font-semibold">
                          {challenge.targetVariable}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#17243B]">
                        {challenge.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            16. RELATED PROJECTS
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionHeading
                kicker="RELATED EXPERIMENTS & PROJECTS"
                kickerTone="secondary"
                title="Continue Your Hands-On Discovery."
                description="Explore connected projects that build upon the physical principles and measurement skills from this experiment."
              />
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8] hover:text-[#2548C9] shrink-0"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedProjects.map((rel) => (
                <ProjectCard
                  key={rel.slug}
                  title={rel.title}
                  subject={rel.subjectLabel}
                  level={rel.difficulty}
                  duration={rel.estimatedTime}
                  imageSrc={rel.imageSrc}
                  imageAlt={rel.imageAlt}
                  whyItMatters={rel.subtitle}
                  whatYouCreate={rel.whatYouCreateSummary}
                  scientificPrinciple={rel.coreMechanismFormula}
                  href={`/projects/${rel.slug}`}
                  actionLabel="Open Project Guide"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="UNDERSTAND → EXPLORE → APPLY → CREATE"
              title="Explore More Concepts Behind This Experiment."
              description={`Deepen your conceptual grasp of ${project.subjectLabel} or return to the Experiments & Projects directory to try your next build.`}
              primaryActionLabel={`Explore ${project.subjectLabel}`}
              onPrimaryAction={() =>
                router.push(`/learn/${project.subjectSlug}`)
              }
              secondaryActionLabel="All Experiments & Projects"
              onSecondaryAction={() => router.push('/projects')}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
