'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowRight,
  Compass,
  FlaskConical,
  BookOpen,
  Lightbulb,
  Layers,
  X,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Breadcrumbs,
  Button,
  KickerLabel,
  MetadataRow,
  SectionHeading,
  SubjectCard,
  ProjectCard,
  ImageContainer,
  CTASection,
  SegmentedFilter,
  LEARNING_STAGES,
  SubjectCategorySlug,
} from '@/components/design-system';
import {
  SUBJECTS_DATA,
  EXPLORE_FEATURED_TOPICS,
  SUGGESTED_LEARNING_PATHS,
  PLATFORM_IMAGES,
  SubjectRelatedProject,
} from '@/lib/content-data';

export default function ExploreLearningPage() {
  const router = useRouter();
  const [topicFilter, setTopicFilter] = useState<'all' | SubjectCategorySlug>(
    'all'
  );
  const [activeProjectModal, setActiveProjectModal] =
    useState<SubjectRelatedProject | null>(null);

  const subjectsList = [
    SUBJECTS_DATA.mathematics,
    SUBJECTS_DATA.physics,
    SUBJECTS_DATA.chemistry,
    SUBJECTS_DATA.biology,
    SUBJECTS_DATA.technology,
    SUBJECTS_DATA.engineering,
  ];

  const filteredFeaturedTopics =
    topicFilter === 'all'
      ? EXPLORE_FEATURED_TOPICS
      : EXPLORE_FEATURED_TOPICS.filter((t) => t.subjectSlug === topicFilter);

  const realWorldExamplesHighlight = [
    {
      subject: 'Physics',
      slug: 'physics' as SubjectCategorySlug,
      topic: 'Magnetism & Electricity',
      title: 'How Electric Motors & Household Power Grids Work',
      explanation:
        'See how the Lorentz force spins copper coils inside fans, water pumps, and electric vehicles—and how transformers deliver 220V power across transmission lines.',
      imageSrc: PLATFORM_IMAGES.learnRealWorldElectronics,
      imageAlt:
        'Electrical engineer testing an oscilloscope and circuit bench to analyze alternating current waveforms and motor power electronics',
    },
    {
      subject: 'Engineering & Mathematics',
      slug: 'engineering' as SubjectCategorySlug,
      topic: 'Civil Engineering & Trigonometry',
      title: 'How Bridges Carry Heavy Loads Across Turbulent Rivers',
      explanation:
        'Discover why triangular Warren and Pratt trusses distribute downward weight into balanced tension and compression members without buckling.',
      imageSrc: PLATFORM_IMAGES.learnRealWorldBridge,
      imageAlt:
        'Long-span triangulated steel truss bridge structure crossing a wide river channel under real traffic loads',
    },
    {
      subject: 'Biology & Chemistry',
      slug: 'biology' as SubjectCategorySlug,
      topic: 'Cells, Microorganisms & Agriculture',
      title: 'How Soil Microbes, Osmosis & Stomata Sustain Crops',
      explanation:
        'Trace how nitrogen-fixing root bacteria and leaf guard-cell turgor pressure enable plants to grow and adapt to seasonal water and salinity shifts.',
      imageSrc: PLATFORM_IMAGES.learnRealWorldAgriculture,
      imageAlt:
        'Close-up photograph of green crop seedlings growing in nutrient soil inside an agricultural research greenhouse',
    },
  ];

  const practicalExperimentsHighlight = [
    {
      subject: 'Physics',
      slug: 'physics' as SubjectCategorySlug,
      ...SUBJECTS_DATA.physics.experimentsAndActivities[0],
    },
    {
      subject: 'Chemistry',
      slug: 'chemistry' as SubjectCategorySlug,
      ...SUBJECTS_DATA.chemistry.experimentsAndActivities[0],
    },
    {
      subject: 'Biology',
      slug: 'biology' as SubjectCategorySlug,
      ...SUBJECTS_DATA.biology.experimentsAndActivities[0],
    },
    {
      subject: 'Engineering',
      slug: 'engineering' as SubjectCategorySlug,
      ...SUBJECTS_DATA.engineering.experimentsAndActivities[0],
    },
  ];

  const projectsHighlight: SubjectRelatedProject[] = [
    SUBJECTS_DATA.engineering.relatedProjects[0],
    SUBJECTS_DATA.engineering.relatedProjects[1],
    SUBJECTS_DATA.physics.relatedProjects[1],
    SUBJECTS_DATA.technology.relatedProjects[0],
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Navbar
        activeSection="learn"
        primaryCtaLabel="Browse 6 Subjects"
        onPrimaryCta={() => scrollToSection('subject-categories')}
      />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#F6F9FF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <Breadcrumbs
            items={[
              {id: 'home', label: 'Home'},
              {id: 'learn', label: 'Explore Learning', current: true},
            ]}
            onNavigate={(item) => {
              if (item.id === 'home') {
                router.push('/');
              }
            }}
          />

          <div className="text-xs text-[#64748B]">
            Understand → Explore → Apply → Create
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* =====================================================================
            HERO & 1. LEARNING INTRODUCTION
           ===================================================================== */}
        <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E6EBF2] py-14 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/4 w-[36rem] h-[36rem] rounded-full ambient-glow-blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-10 w-[28rem] h-[28rem] rounded-full ambient-glow-teal"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <MetadataRow
                  items={[
                    {label: 'EXPLORE LEARNING HUB', tone: 'primary'},
                    {label: '6 Core Fields of Knowledge', tone: 'secondary'},
                    {label: 'School · College · University', tone: 'neutral'},
                  ]}
                />

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17243B] tracking-tight leading-[1.12]">
                  Explore Ideas. Understand the World.
                </h1>

                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                  Discover different fields of knowledge through understandable
                  explanations, real-world examples, practical exploration, and
                  meaningful learning experiences.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => scrollToSection('subject-categories')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Choose a Subject Area
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection('learning-paths')}
                  >
                    View Suggested Learning Paths
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="surface-card rounded-2xl p-6 sm:p-7 bg-white space-y-4">
                  <KickerLabel
                    index="01"
                    label="LEARNING INTRODUCTION"
                    tone="primary"
                  />
                  <h2 className="text-xl font-bold text-[#17243B]">
                    How to Explore on Genustride Learn
                  </h2>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Whether you are studying for school or college classes,
                    preparing for university engineering and science, or simply
                    curious about how the world works, every subject here
                    follows a clear four-step progression:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {LEARNING_STAGES.map((stage) => (
                      <div
                        key={stage.id}
                        className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#315BE8]">
                          <span>{stage.step}</span>
                          <span>·</span>
                          <span className="font-sans text-[#17243B]">
                            {stage.label}
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B]">
                          {stage.question}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. SIX SUBJECT CATEGORIES
           ===================================================================== */}
        <section
          id="subject-categories"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="02"
              kicker="SIX SUBJECT CATEGORIES"
              title="Choose a Field of Knowledge to Explore"
              description="Each subject landing page includes its core topic categories, real-world connections, practical examples, hands-on experiments, and build projects."
            />

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
            3. FEATURED TOPICS
           ===================================================================== */}
        <section
          id="featured-topics"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <SectionHeading
                index="03"
                kicker="FEATURED CONCEPT TOPICS"
                title="High-Impact Topics Across Disciplines"
                description="Start with a foundational question that connects textbook theory directly to real-world systems."
              />

              <SegmentedFilter
                ariaLabel="Filter featured topics by subject"
                value={topicFilter}
                onChange={setTopicFilter}
                options={[
                  {value: 'all', label: 'All Subjects'},
                  {value: 'physics', label: 'Physics'},
                  {value: 'mathematics', label: 'Mathematics'},
                  {value: 'chemistry', label: 'Chemistry'},
                  {value: 'biology', label: 'Biology'},
                  {value: 'technology', label: 'Technology'},
                ]}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFeaturedTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/learn/${topic.subjectSlug}`}
                  className="surface-card surface-card-interactive rounded-xl p-6 bg-white flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    <MetadataRow
                      items={[
                        {label: topic.subjectName, tone: 'primary'},
                        {label: topic.topicCategory, tone: 'secondary'},
                      ]}
                    />

                    <h3 className="text-lg font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {topic.whyItMatters}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6EBF2] space-y-2">
                    <div className="text-xs text-[#17243B] font-medium">
                      <span className="text-[#315BE8] font-semibold">
                        Question:{' '}
                      </span>
                      {topic.coreQuestion}
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#315BE8] pt-1">
                      <span>Open in {topic.subjectName}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. REAL-WORLD LEARNING EXAMPLES
           ===================================================================== */}
        <section
          id="real-world-examples"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="04"
              kicker="REAL-WORLD LEARNING EXAMPLES"
              kickerTone="secondary"
              title="See How Academic Concepts Explain Everyday Reality"
              description="When you look closely at a spinning electric motor, a river bridge truss, or a growing crop field, you see physics, mathematics, chemistry, and biology working together."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {realWorldExamplesHighlight.map((item) => (
                <article
                  key={item.title}
                  className="surface-card surface-card-interactive rounded-xl p-6 bg-white flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <ImageContainer
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      aspectRatio="4:3"
                      rounded="lg"
                    />

                    <MetadataRow
                      items={[
                        {label: item.subject, tone: 'primary'},
                        {label: item.topic, tone: 'secondary'},
                      ]}
                    />

                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6EBF2] flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">
                      Real-World Case Study
                    </span>
                    <Link
                      href={`/learn/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
                    >
                      <span>Explore Subject</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. PRACTICAL EXPERIMENTS
           ===================================================================== */}
        <section
          id="practical-experiments"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="05"
              kicker="PRACTICAL EXPERIMENTS & OBSERVATIONS"
              title="Verify Principles With Your Own Hands and Eyes"
              description="Every subject includes structured experiments using straightforward apparatus so you can test predictions and observe mechanisms directly."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalExperimentsHighlight.map((exp) => (
                <div
                  key={exp.id}
                  className="surface-card rounded-2xl p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <MetadataRow
                        items={[
                          {label: exp.subject, tone: 'primary'},
                          {label: exp.topic, tone: 'secondary'},
                          {label: exp.duration, tone: 'neutral', mono: true},
                        ]}
                      />
                      <FlaskConical
                        className="w-4 h-4 text-[#16A6A0] shrink-0"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#17243B]">
                      {exp.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {exp.procedure}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] text-xs text-[#64748B]">
                      <strong className="text-[#17243B]">Apparatus: </strong>
                      {exp.materials}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6EBF2] flex items-center justify-between gap-3">
                    <span className="text-xs text-[#16A6A0] font-medium truncate">
                      Discovery: {exp.whatYouDiscover}
                    </span>
                    <Link
                      href={`/learn/${exp.slug}#experiments-activities`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] whitespace-nowrap shrink-0"
                    >
                      <span>Full Lab Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. PROJECT-BASED LEARNING
           ===================================================================== */}
        <section
          id="project-based-learning"
          className="py-16 sm:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="06"
              kicker="PROJECT-BASED LEARNING"
              kickerTone="accent"
              title="Move From Understanding to Building Real Solutions"
              description="In Stage 04 (Create), learners combine concepts across subjects to prototype instruments, structural models, and environmental sensors."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsHighlight.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  subject={project.subject}
                  level={project.level}
                  duration={project.duration}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  whyItMatters={project.whyItMatters}
                  scientificPrinciple={project.scientificPrinciple}
                  whatYouCreate={project.whatYouCreate}
                  onInspectProject={() => setActiveProjectModal(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. SUGGESTED LEARNING PATHS
           ===================================================================== */}
        <section
          id="learning-paths"
          className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              index="07"
              kicker="SUGGESTED LEARNING PATHS"
              title="Guided Journeys Across Interconnected Subjects"
              description="Not sure where to begin? Follow one of these curated three-stage pathways showing how fundamental science and math lead directly to engineering and real-world creation."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SUGGESTED_LEARNING_PATHS.map((path) => (
                <div
                  key={path.id}
                  className="surface-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <MetadataRow
                      items={[
                        {label: path.pathNumber, tone: 'primary', mono: true},
                        {label: path.audience, tone: 'secondary'},
                      ]}
                    />

                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {path.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {path.summary}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {path.steps.map((step) => (
                      <Link
                        key={step.step}
                        href={`/learn/${step.slug}`}
                        className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] hover:border-[#315BE8]/40 transition-colors flex items-center justify-between gap-4 group"
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white text-[#315BE8] border border-[#E6EBF2] shrink-0 mt-0.5">
                            0{step.step}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                              {step.subject}
                            </div>
                            <p className="text-xs text-[#64748B]">
                              {step.topic}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#315BE8] shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <CTASection
                kicker="START WITH ANY SUBJECT"
                title="Don't Just Memorize Formulas. Discover How the World Works."
                description="Pick any of our six core fields of knowledge to begin exploring concepts, experiments, and real-world applications."
                primaryActionLabel="Start With Physics"
                onPrimaryAction={() => router.push('/learn/physics')}
                secondaryActionLabel="Start With Mathematics"
                onSecondaryAction={() => router.push('/learn/mathematics')}
                surface="soft-blue"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Project Modal */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17243B]/40 backdrop-blur-xs"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E6EBF2] pb-4">
              <div className="space-y-1">
                <KickerLabel label={activeProjectModal.subject} tone="primary" />
                <h2 className="text-xl font-bold text-[#17243B]">
                  {activeProjectModal.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close project dialog"
                className="min-h-[40px] min-w-[40px] rounded-lg border border-[#E6EBF2] flex items-center justify-center text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-1">
                <div className="text-xs font-semibold text-[#315BE8]">
                  01 · Why This Project Matters
                </div>
                <p className="text-[#17243B] leading-relaxed">
                  {activeProjectModal.whyItMatters}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#EAF8F7]/60 border border-[#16A6A0]/25 space-y-1">
                <div className="text-xs font-semibold text-[#16A6A0]">
                  02 · Governing Scientific Principle
                </div>
                <p className="font-mono text-xs text-[#17243B]">
                  {activeProjectModal.scientificPrinciple}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FEF6EB] border border-[#F3A644]/35 space-y-1">
                <div className="text-xs font-semibold text-[#C87A19]">
                  03 · What Learners Create
                </div>
                <p className="text-[#17243B] leading-relaxed">
                  {activeProjectModal.whatYouCreate}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#E6EBF2]">
              <span className="text-xs text-[#64748B]">
                {activeProjectModal.level} · {activeProjectModal.duration}
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setActiveProjectModal(null)}
              >
                Close Guide
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
