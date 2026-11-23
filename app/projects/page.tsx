'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowRight,
  FlaskConical,
  Wrench,
  Cpu,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  Layers,
  ClipboardList,
  Search,
  X,
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
import {
  PROJECTS_DATA,
  PROJECT_CATEGORY_DEFINITIONS,
  ProjectCategorySlug,
  ProjectDifficulty,
} from '@/lib/projects-data';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    ProjectCategorySlug | 'all'
  >('all');
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState<
    ProjectDifficulty | 'all'
  >('all');
  const [projectSearchQuery, setProjectSearchQuery] = useState('');

  const featuredProjects = PROJECTS_DATA.filter((p) => p.isFeatured);
  const engineeringProjects = PROJECTS_DATA.filter(
    (p) => p.category === 'engineering'
  );
  const scienceProjects = PROJECTS_DATA.filter((p) => p.category === 'science');
  const technologyProjects = PROJECTS_DATA.filter(
    (p) => p.category === 'technology'
  );
  const mathematicsProjects = PROJECTS_DATA.filter(
    (p) => p.category === 'mathematics'
  );
  const beginnerProjects = PROJECTS_DATA.filter((p) => p.isBeginnerFriendly);

  const filteredCategoryProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategoryFilter === 'all' ||
      project.category === selectedCategoryFilter;
    const matchesDifficulty =
      selectedDifficultyFilter === 'all' ||
      project.difficulty === selectedDifficultyFilter;
    const query = projectSearchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.subjectLabel.toLowerCase().includes(query) ||
      project.coreMechanismFormula.toLowerCase().includes(query);
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      {/* Sticky Top Navbar */}
      <Navbar
        activeSection="projects"
        primaryCtaLabel="Explore Learning"
        onPrimaryCta={() => router.push('/learn')}
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            SECTION 1 — HERO INTRODUCTION
            Headline: "Don't Just Read About It. Try It. Build It. Discover It."
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
                  {
                    id: 'projects',
                    label: 'Experiments & Projects',
                    current: true,
                  },
                ]}
                onNavigate={(item) => {
                  if (item.href) router.push(item.href);
                }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Editorial Headline & Quick Category Jumps */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <KickerLabel
                    label="EXPERIMENTS, LABS & PRACTICAL BUILDS"
                    tone="secondary"
                  />
                  <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#17243B] tracking-tight leading-[1.08]">
                    Don&apos;t Just Read About It. Try It. Build It. Discover It.
                  </h1>
                  <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl">
                    Explore practical activities, scientific experiments, and
                    creative projects that help turn knowledge into real-world
                    understanding.
                  </p>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => scrollToSection('featured-experiments')}
                  >
                    Explore Featured Experiments
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection('beginner-friendly')}
                  >
                    Start with Beginner Projects
                  </Button>
                </div>

                {/* Quick Jump Anchor Bar */}
                <div className="pt-5 border-t border-[#E6EBF2] space-y-2.5">
                  <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                    Jump to Discipline
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => scrollToSection('engineering-projects')}
                      className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#17243B] bg-[#F6F9FF] hover:bg-[#EBF2FF] hover:text-[#315BE8] border border-[#E6EBF2] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Wrench className="w-3.5 h-3.5 text-[#315BE8]" />
                      <span>Engineering Projects</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('science-activities')}
                      className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#17243B] bg-[#F6F9FF] hover:bg-[#EAF8F7] hover:text-[#16A6A0] border border-[#E6EBF2] transition-colors inline-flex items-center gap-1.5"
                    >
                      <FlaskConical className="w-3.5 h-3.5 text-[#16A6A0]" />
                      <span>Science Activities</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('technology-projects')}
                      className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#17243B] bg-[#F6F9FF] hover:bg-[#EBF2FF] hover:text-[#315BE8] border border-[#E6EBF2] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Cpu className="w-3.5 h-3.5 text-[#315BE8]" />
                      <span>Technology Projects</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('mathematics-challenges')}
                      className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#17243B] bg-[#F6F9FF] hover:bg-[#FEF6EC] hover:text-[#B86E14] border border-[#E6EBF2] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#F3A644]" />
                      <span>Mathematics Challenges</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Lab Spotlight Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-4 sm:p-5 shadow-lg space-y-4">
                  <Link
                    href="/projects/build-a-simple-electric-circuit"
                    className="block group focus-visible:outline-none"
                  >
                    <ImageContainer
                      src={VERIFIED_PHOTOGRAPHY_INVENTORY.projectElectricCircuit.url}
                      alt={VERIFIED_PHOTOGRAPHY_INVENTORY.projectElectricCircuit.alt}
                      aspectRatio="16:9"
                      rounded="lg"
                      priority
                      caption="Every project includes required materials, safety guidelines, step-by-step procedures, expected observations, and scientific explanations."
                    />
                  </Link>

                  <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <KickerLabel
                        label="STARTER EXPERIMENT SPOTLIGHT"
                        tone="primary"
                      />
                      <span className="text-xs font-mono text-[#315BE8] font-semibold">
                        V = I · R
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-[#17243B]">
                      Build a Simple Electric Circuit
                    </h2>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Trace how voltage, current, and series resistance control
                      a real LED circuit on a solderless breadboard using safe
                      3V AA batteries.
                    </p>
                    <div className="pt-1 flex items-center justify-between">
                      <MetadataRow
                        items={[
                          {label: 'Beginner', tone: 'secondary'},
                          {label: '45 mins', tone: 'neutral', mono: true},
                          {label: 'Physics', tone: 'primary'},
                        ]}
                      />
                      <Link
                        href="/projects/build-a-simple-electric-circuit"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                      >
                        <span>Open Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2 — FEATURED EXPERIMENTS (THE 6 CORE INITIAL PROJECTS)
           ===================================================================== */}
        <section
          id="featured-experiments"
          className="py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading
                kicker="01 · FEATURED EXPERIMENTS"
                kickerTone="primary"
                title="Six Essential Hands-On Investigations."
                description="Start with our core interdisciplinary experiments. Each project connects a fundamental scientific or mathematical law to a tangible apparatus you can assemble, test, and measure."
              />
              <div className="text-xs text-[#64748B] font-medium shrink-0">
                Click any project card to open the full 16-part laboratory guide
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  subject={project.subjectLabel}
                  level={project.difficulty}
                  duration={project.estimatedTime}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  whyItMatters={project.subtitle}
                  whatYouCreate={project.whatYouCreateSummary}
                  scientificPrinciple={project.coreMechanismFormula}
                  materialsPreview={project.requiredMaterials
                    .slice(0, 3)
                    .map((m) => m.name.split(' (')[0])}
                  href={`/projects/${project.slug}`}
                  actionLabel="Open Full Project Guide"
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — ENGINEERING PROJECTS
           ===================================================================== */}
        <section
          id="engineering-projects"
          className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <SectionHeading
                kicker="02 · ENGINEERING PROJECTS"
                kickerTone="primary"
                title="Design, Build, and Test Physical Systems."
                description="Explore mechanical force multiplication, solar photovoltaic power curves, and triangulated structural trusses under real physical loads."
              />
              <Link
                href="/learn/engineering"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8] hover:text-[#2548C9] shrink-0"
              >
                <span>Explore Engineering Subject Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {engineeringProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  subject={project.subjectLabel}
                  level={project.difficulty}
                  duration={project.estimatedTime}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  whyItMatters={project.subtitle}
                  whatYouCreate={project.whatYouCreateSummary}
                  scientificPrinciple={project.coreMechanismFormula}
                  href={`/projects/${project.slug}`}
                  actionLabel="Open Engineering Guide"
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4 — SCIENCE ACTIVITIES
           ===================================================================== */}
        <section
          id="science-activities"
          className="relative overflow-hidden py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-teal"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <SectionHeading
                kicker="03 · SCIENCE ACTIVITIES"
                kickerTone="secondary"
                title="Observe Physics, Chemistry, and Biology in Action."
                description="Investigate closed-loop electrical circuits, porous media water filtration, electromagnetic Lorentz motors, and cellular osmosis through controlled experiments."
              />
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#315BE8]">
                <Link href="/learn/physics" className="hover:underline">
                  Physics Hub →
                </Link>
                <Link href="/learn/chemistry" className="hover:underline">
                  Chemistry Hub →
                </Link>
                <Link href="/learn/biology" className="hover:underline">
                  Biology Hub →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {scienceProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  subject={project.subjectLabel}
                  level={project.difficulty}
                  duration={project.estimatedTime}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  whyItMatters={project.subtitle}
                  whatYouCreate={project.whatYouCreateSummary}
                  scientificPrinciple={project.coreMechanismFormula}
                  href={`/projects/${project.slug}`}
                  actionLabel="Open Science Experiment"
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5 — TECHNOLOGY PROJECTS
           ===================================================================== */}
        <section
          id="technology-projects"
          className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <SectionHeading
                kicker="04 · TECHNOLOGY PROJECTS"
                kickerTone="primary"
                title="Instrumentation, Sensors, and Environmental Measurement."
                description="Learn how mechanical and electronic sensors convert wind velocity, rainfall depth, and acoustic echoes into calibrated quantitative data."
              />
              <Link
                href="/learn/technology"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8] hover:text-[#2548C9] shrink-0"
              >
                <span>Explore Technology Subject Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {technologyProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  subject={project.subjectLabel}
                  level={project.difficulty}
                  duration={project.estimatedTime}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  whyItMatters={project.subtitle}
                  whatYouCreate={project.whatYouCreateSummary}
                  scientificPrinciple={project.coreMechanismFormula}
                  href={`/projects/${project.slug}`}
                  actionLabel="Open Technology Guide"
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6 — MATHEMATICS CHALLENGES
           ===================================================================== */}
        <section
          id="mathematics-challenges"
          className="relative overflow-hidden py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-amber"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <SectionHeading
                kicker="05 · MATHEMATICS CHALLENGES"
                kickerTone="accent"
                title="Measure the Hidden Geometry of Nature and Structures."
                description="Move beyond worksheet drill problems. Use protractors, calipers, and graph paper to verify Fibonacci phyllotaxis, the 137.5° Golden Angle, and structural vector equilibrium."
              />
              <Link
                href="/learn/mathematics"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#315BE8] hover:text-[#2548C9] shrink-0"
              >
                <span>Explore Mathematics Subject Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {mathematicsProjects.map((project) => (
                <div key={project.slug} className="lg:col-span-7">
                  <ProjectCard
                    title={project.title}
                    subject={project.subjectLabel}
                    level={project.difficulty}
                    duration={project.estimatedTime}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    whyItMatters={project.subtitle}
                    whatYouCreate={project.whatYouCreateSummary}
                    scientificPrinciple={project.coreMechanismFormula}
                    materialsPreview={project.requiredMaterials.map(
                      (m) => m.name.split(' (')[0]
                    )}
                    href={`/projects/${project.slug}`}
                    actionLabel="Start Mathematics Challenge"
                    className="h-full"
                  />
                </div>
              ))}

              {/* Companion Mathematical Modeling Challenge Panel */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <KickerLabel
                    label="APPLIED MATHEMATICAL REASONING"
                    tone="accent"
                  />
                  <h3 className="text-2xl font-bold text-[#17243B]">
                    Why Hands-On Mathematics Changes How You Think
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    When you count 8 clockwise spirals and 13 counter-clockwise
                    spirals on a pinecone—or calculate the area ratio{' '}
                    <span className="font-mono text-[#17243B]">
                      (D₂ / D₁)²
                    </span>{' '}
                    of two hydraulic syringes—numbers stop being arbitrary rules
                    and become physical invariants you can verify yourself.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                      <div className="text-xs font-mono font-semibold text-[#315BE8]">
                        Challenge A · Fibonacci Convergence
                      </div>
                      <p className="text-xs text-[#64748B] mt-1">
                        Measure opposing parastichy spirals on pinecones,
                        sunflowers, and pineapples to test convergence toward{' '}
                        <span className="font-mono text-[#17243B]">
                          φ ≈ 1.61803
                        </span>
                        .
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2]">
                      <div className="text-xs font-mono font-semibold text-[#16A6A0]">
                        Challenge B · Trigonometric Truss Vectors
                      </div>
                      <p className="text-xs text-[#64748B] mt-1">
                        Resolve mid-span bridge loads into diagonal axial member
                        forces{' '}
                        <span className="font-mono text-[#17243B]">
                          F = R / sin(60°)
                        </span>{' '}
                        in our Structural Truss Bridge project.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href="/projects/explore-mathematical-patterns-in-nature"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                  >
                    <span>Explore Nature Patterns Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/projects/load-test-a-structural-truss-bridge"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16A6A0] hover:text-[#128984]"
                  >
                    <span>Truss Vector Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7 — BEGINNER-FRIENDLY PROJECTS
           ===================================================================== */}
        <section
          id="beginner-friendly"
          className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              kicker="06 · BEGINNER-FRIENDLY PROJECTS"
              kickerTone="secondary"
              title="Accessible Experiments You Can Start at Home or in School."
              description="No specialized laboratory required. These six foundational projects use safe, low-cost household and classroom materials while teaching rigorous scientific observation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beginnerProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group surface-card surface-card-interactive rounded-xl p-5 flex flex-col justify-between space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#16A6A0]">
                        STARTER 0{index + 1} · {project.difficulty.toUpperCase()}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-[#64748B]">
                        <Clock className="w-3.5 h-3.5 text-[#315BE8]" />
                        {project.estimatedTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6EBF2] space-y-2">
                    <div className="text-[11px] text-[#64748B]">
                      <strong className="text-[#17243B]">
                        Everyday Materials:{' '}
                      </strong>
                      {project.requiredMaterials
                        .slice(0, 2)
                        .map((m) => m.name.split(' (')[0])
                        .join(', ')}
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#315BE8]">
                      <span>{project.subjectLabel}</span>
                      <span className="inline-flex items-center gap-1">
                        <span>Start Build</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 8 — PROJECT CATEGORIES & INTERACTIVE DIRECTORY
           ===================================================================== */}
        <section
          id="project-categories"
          className="py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              kicker="07 · PROJECT CATEGORIES"
              kickerTone="primary"
              title="Browse Experiments by Category and Difficulty."
              description="Filter our complete hands-on project library across Engineering, Science, Technology, and Mathematics."
            />

            {/* 4 Category Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROJECT_CATEGORY_DEFINITIONS.map((cat) => {
                const isSelected = selectedCategoryFilter === cat.slug;
                const count = PROJECTS_DATA.filter(
                  (p) => p.category === cat.slug
                ).length;

                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() =>
                      setSelectedCategoryFilter(
                        isSelected ? 'all' : cat.slug
                      )
                    }
                    className={`text-left rounded-xl p-5 border transition-all flex flex-col justify-between space-y-4 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#315BE8] ring-2 ring-[#315BE8]/20 shadow-md'
                        : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                          {cat.shortLabel}
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          {count} {count === 1 ? 'Project' : 'Projects'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#17243B]">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E6EBF2] flex items-center justify-between text-xs font-semibold text-[#315BE8]">
                      <span>
                        {isSelected ? 'Showing Category' : 'Filter by Category'}
                      </span>
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Filter Bar: Category + Difficulty + Search */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E6EBF2] space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#17243B] mr-1">
                    Category:
                  </span>
                  {(
                    [
                      {slug: 'all', label: 'All Categories'},
                      {slug: 'engineering', label: 'Engineering'},
                      {slug: 'science', label: 'Science'},
                      {slug: 'technology', label: 'Technology'},
                      {slug: 'mathematics', label: 'Mathematics'},
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      aria-pressed={selectedCategoryFilter === item.slug}
                      onClick={() => setSelectedCategoryFilter(item.slug)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                        selectedCategoryFilter === item.slug
                          ? 'bg-[#315BE8] text-white'
                          : 'bg-[#F6F9FF] text-[#64748B] hover:text-[#17243B]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#17243B] mr-1">
                    Difficulty:
                  </span>
                  {(
                    [
                      {slug: 'all', label: 'All Levels'},
                      {slug: 'Beginner', label: 'Beginner'},
                      {slug: 'Intermediate', label: 'Intermediate'},
                    ] as const
                  ).map((level) => (
                    <button
                      key={level.slug}
                      type="button"
                      aria-pressed={selectedDifficultyFilter === level.slug}
                      onClick={() => setSelectedDifficultyFilter(level.slug)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A6A0] ${
                        selectedDifficultyFilter === level.slug
                          ? 'bg-[#16A6A0] text-white'
                          : 'bg-[#F6F9FF] text-[#64748B] hover:text-[#17243B]'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E6EBF2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative w-full sm:max-w-md">
                  <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={projectSearchQuery}
                    onChange={(e) => setProjectSearchQuery(e.target.value)}
                    placeholder="Filter projects by title, subject, or formula..."
                    aria-label="Filter projects by keyword"
                    className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-lg border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                  />
                  {projectSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setProjectSearchQuery('')}
                      aria-label="Clear project search"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-[#64748B] hover:text-[#17243B] cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div
                  aria-live="polite"
                  className="text-xs font-medium text-[#64748B] flex items-center justify-between sm:justify-end gap-3"
                >
                  <span>
                    Showing {filteredCategoryProjects.length} of{' '}
                    {PROJECTS_DATA.length} projects
                  </span>
                  {(selectedCategoryFilter !== 'all' ||
                    selectedDifficultyFilter !== 'all' ||
                    projectSearchQuery.trim() !== '') && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategoryFilter('all');
                        setSelectedDifficultyFilter('all');
                        setProjectSearchQuery('');
                      }}
                      className="text-xs font-semibold text-[#315BE8] hover:underline cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filtered Compact Directory List */}
            {filteredCategoryProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCategoryProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="p-4 rounded-xl bg-white border border-[#E6EBF2] hover:border-[#315BE8] transition-all flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
                  >
                    <div className="space-y-1 min-w-0">
                      <MetadataRow
                        items={[
                          {label: project.categoryLabel, tone: 'primary'},
                          {label: project.difficulty, tone: 'secondary'},
                          {
                            label: project.estimatedTime,
                            tone: 'neutral',
                            mono: true,
                          },
                        ]}
                      />
                      <h4 className="text-base font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#64748B] line-clamp-1">
                        {project.whatYouCreateSummary}
                      </p>
                    </div>
                    <div className="shrink-0 text-right space-y-1">
                      <div className="text-xs font-mono text-[#315BE8] hidden sm:block">
                        {project.coreMechanismFormula}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8]">
                        <span>Open Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-white border border-[#E6EBF2] text-center space-y-3">
                <p className="text-base font-bold text-[#17243B]">
                  No projects matched your current filter.
                </p>
                <p className="text-xs text-[#64748B]">
                  Try clearing your search query or resetting category and
                  difficulty filters.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setSelectedDifficultyFilter('all');
                    setProjectSearchQuery('');
                  }}
                >
                  Show All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            SECTION 9 — LEARNING THROUGH EXPERIMENTATION
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="08 · LEARNING THROUGH EXPERIMENTATION"
              kickerTone="secondary"
              title="How Scientific Honesty and Hands-On Testing Build Real Understanding."
              description="An experiment is not a recipe where you pretend to get a textbook number. It is an honest dialogue with physical reality."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div className="p-6 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#315BE8]">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#17243B]">
                  1. Expected Observations vs. Actual Measured Results
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Every project guide on Genustride Learn explicitly separates{' '}
                  <strong className="text-[#17243B]">
                    expected theoretical behavior
                  </strong>{' '}
                  from{' '}
                  <strong className="text-[#17243B]">
                    your actual measured results
                  </strong>
                  . If a battery’s voltage sag or syringe O-ring friction causes
                  a deviation, investigating <em>why</em> that deviation
                  occurred is where deep scientific learning happens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#16A6A0]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#17243B]">
                  2. Safety-First Engineering Culture
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Real scientists and engineers respect physical hazards before
                  energizing a circuit or testing a fluid column. Every
                  experiment uses safe low-voltage power sources (1.5V–6V DC)
                  and household materials with clear safety protocols.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#F3A644]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#17243B]">
                  3. Interactive Observation Logbooks
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Inside each project detail page, you can record your trial
                  measurements, compare them against theoretical predictions,
                  answer reflection questions, and export your completed
                  observation log.
                </p>
              </div>
            </div>

            {/* 4-Step Experimental Loop Strip */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#17243B] text-white grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#16A6A0]">
                  UNDERSTAND → EXPLORE → APPLY → CREATE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Ready to Open Your First Experiment Guide?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every guide walks you through materials preparation, safety
                  checks, step-by-step assembly, observation logging, and
                  real-world applications.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'Build a Simple Electric Circuit',
                    meta: 'Beginner · 45 mins · Physics',
                    href: '/projects/build-a-simple-electric-circuit',
                  },
                  {
                    title: 'Explore Water Filtration',
                    meta: 'Beginner · 60 mins · Chemistry',
                    href: '/projects/explore-water-filtration',
                  },
                  {
                    title: 'Make a Basic Hydraulic System',
                    meta: 'Beginner · 50 mins · Engineering',
                    href: '/projects/make-a-basic-hydraulic-system',
                  },
                  {
                    title: 'Explore Mathematical Patterns in Nature',
                    meta: 'Beginner · 45 mins · Mathematics',
                    href: '/projects/explore-mathematical-patterns-in-nature',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-mono text-slate-300">
                        {item.meta}
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        {item.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#F3A644] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 10 — FINAL CALL TO ACTION
           ===================================================================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="TURN KNOWLEDGE INTO DISCOVERY"
              title="Choose a Project and Build Real Understanding Today."
              description="Start with a beginner-friendly breadboard circuit or multi-layer water filter, or explore the underlying concepts across our six core subjects."
              primaryActionLabel="Start: Simple Electric Circuit"
              onPrimaryAction={() =>
                router.push('/projects/build-a-simple-electric-circuit')
              }
              secondaryActionLabel="Explore All Subjects (/learn)"
              onSecondaryAction={() => router.push('/learn')}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
