'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Compass,
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

const FAQ_ITEMS = [
  {
    question:
      'Will focusing on conceptual understanding and experiments distract learners from school and board examinations?',
    answer:
      'Quite the opposite. When a student understands why an equation or biological process works from first principles, they no longer panic when an examination question is phrased in an unfamiliar way. Conceptual clarity reduces the hours wasted on repetitive rote cramming and improves both exam confidence and long-term retention.',
  },
  {
    question:
      'Do families or schools need expensive laboratory equipment to use Genustride Learn?',
    answer:
      'No. Our beginner and classroom experiments are intentionally designed around safe, accessible household and school materials—such as 3V AA battery packs, plastic syringes for hydraulic force multiplication, clear bottles with sand and activated charcoal for water filtration, and paper cups for weather anemometers.',
  },
  {
    question:
      'How can a parent or teacher use Genustride Learn alongside regular textbook study?',
    answer:
      'Before or after a student studies a chapter in physics, chemistry, biology, or mathematics, open the corresponding Subject Hub (/learn) or Concept Explainer (/resources) together. Ask the learner the four framework questions: What is the concept? How does the mechanism work? Where do we see it in daily life? How can we test it?',
  },
  {
    question:
      'Are the experiments safe for younger learners to try at home?',
    answer:
      'Every project guide on Genustride Learn includes an explicit Safety Instructions banner and avoids dangerous high-voltage, toxic, or explosive materials. We use low-voltage DC power (1.5V–6V batteries) and non-hazardous materials, and we clearly note where adult supervision is recommended (such as cutting a plastic bottle edge or handling glass microscope slides).',
  },
  {
    question:
      'Does Genustride Learn currently offer formal certificates, paid tutoring, or physical classes?',
    answer:
      'Genustride Learn is currently an open, concept-driven online learning platform focused on building conceptual resources, subject guides, and practical experiment procedures—with an initial focus on learners in Bangladesh. We do not currently offer paid certificates or operate physical campuses.',
  },
];

export default function ParentsAndEducatorsPage() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        activeSection="for-parents-and-educators"
        primaryCtaLabel="Explore Learning"
        onPrimaryCta={() => router.push('/learn')}
      />

      <main className="flex-1">
        {/* =====================================================================
            HERO SECTION
            Headline: "Helping Learners Understand More Than What They Memorize."
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
                    id: 'for-parents-and-educators',
                    label: 'For Parents & Educators',
                    current: true,
                  },
                ]}
                onNavigate={(item) => {
                  if (item.href) router.push(item.href);
                }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <KickerLabel
                    label="FOR PARENTS, TEACHERS & ACADEMIC MENTORS"
                    tone="secondary"
                  />
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#17243B] tracking-tight leading-[1.08]">
                    Helping Learners Understand More Than What They Memorize.
                  </h1>
                  <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl">
                    Partnering with families and educators to nurture curiosity,
                    first-principles reasoning, safe practical experimentation,
                    and lifelong problem-solving confidence.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => router.push('/how-it-works')}
                  >
                    See Our 4-Step Framework
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => router.push('/projects')}
                  >
                    Browse Classroom & Home Experiments
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-4 shadow-lg">
                  <ImageContainer
                    src={VERIFIED_PHOTOGRAPHY_INVENTORY.parentsEducatorsHero.url}
                    alt={VERIFIED_PHOTOGRAPHY_INVENTORY.parentsEducatorsHero.alt}
                    aspectRatio="4:3"
                    rounded="lg"
                    priority
                    caption="Guided inquiry helps learners connect classroom definitions to real physical causes and effects."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 1 — WHY CONCEPTUAL UNDERSTANDING MATTERS
            SECTION 2 — LEARNING BEYOND EXAMINATIONS
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="01 & 02 · CONCEPTUAL DEPTH & LEARNING BEYOND EXAMS"
              kickerTone="primary"
              title="Why Conceptual Understanding Outlasts Exam Cramming."
              description="High marks earned through blind memorization can hide fragile understanding—until a learner encounters an unfamiliar problem in higher education or real life."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 1. Why Conceptual Understanding Matters */}
              <div className="rounded-2xl bg-white border border-[#E6EBF2] p-7 sm:p-8 space-y-5">
                <div className="w-10 h-10 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-center justify-center text-[#315BE8]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#17243B]">
                  1. Why Conceptual Understanding Matters
                </h3>
                <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                  When a student memorizes a formula without understanding the
                  physical relationship behind it, every new chapter feels like
                  an overwhelming pile of disconnected rules. When they
                  understand <em>why</em> pressure equals force divided by area
                  or <em>how</em> hydrogen bonding makes ice less dense than
                  liquid water, new knowledge connects naturally to a solid
                  mental scaffold.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#17243B]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16A6A0] shrink-0 mt-0.5" />
                    <span>
                      Replaces math and science anxiety with clear cause-and-effect logic.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16A6A0] shrink-0 mt-0.5" />
                    <span>
                      Allows learners to reconstruct equations even if memory slips.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 2. Learning Beyond Examinations */}
              <div className="rounded-2xl bg-white border border-[#E6EBF2] p-7 sm:p-8 space-y-5">
                <div className="w-10 h-10 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-center justify-center text-[#16A6A0]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#17243B]">
                  2. Learning Beyond Examinations
                </h3>
                <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                  Examinations are milestones, not the final destination of
                  education. A learner who studies solely for test scripts often
                  stops asking questions the moment the exam ends. By showing
                  students where classroom concepts operate in bridges, solar
                  panels, clean water systems, and living ecosystems, we help
                  them excel in academic assessments while building genuine
                  intellectual capability for life after school.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#17243B]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#315BE8] shrink-0 mt-0.5" />
                    <span>
                      Prepares students for creative/analytical problem questions (Srijonshil & higher-order reasoning).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#315BE8] shrink-0 mt-0.5" />
                    <span>
                      Connects school curricula with university engineering, medicine, and research.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 — DEVELOPING INDEPENDENT THINKING
            SECTION 4 — PRACTICAL LEARNING
            SECTION 5 — FUTURE-READY SKILLS
            SECTION 6 — RESPONSIBLE LEARNING
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              kicker="03 – 06 · PILLARS OF LEARNER DEVELOPMENT"
              kickerTone="secondary"
              title="How We Support Holistic Intellectual Growth."
              description="Four pillars that help parents and teachers cultivate capable, ethical, and self-reliant thinkers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* 3. Developing Independent Thinking */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#315BE8]">
                    PILLAR 03 · INDEPENDENT THINKING
                  </span>
                  <Lightbulb className="w-5 h-5 text-[#315BE8]" />
                </div>
                <h3 className="text-xl font-bold text-[#17243B]">
                  Developing Independent Thinking
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Instead of spoon-feeding pre-packaged answers, our guides ask
                  learners to form hypotheses, check boundary cases, and test
                  whether a claim holds up against physical evidence. Learners
                  develop the habit of asking{' '}
                  <strong className="text-[#17243B]">
                    &ldquo;How do we know this is true?&rdquo;
                  </strong>
                </p>
              </div>

              {/* 4. Practical Learning */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#16A6A0]">
                    PILLAR 04 · PRACTICAL LEARNING
                  </span>
                  <FlaskConical className="w-5 h-5 text-[#16A6A0]" />
                </div>
                <h3 className="text-xl font-bold text-[#17243B]">
                  Practical Learning at Home & in the Classroom
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Teachers can use our 16-part experiment guides as structured
                  classroom demonstrations or weekend lab assignments, while
                  parents can explore beginner-friendly builds with their
                  children at the kitchen table using everyday materials.
                </p>
              </div>

              {/* 5. Future-Ready Skills */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B86E14]">
                    PILLAR 05 · FUTURE-READY SKILLS
                  </span>
                  <Sparkles className="w-5 h-5 text-[#F3A644]" />
                </div>
                <h3 className="text-xl font-bold text-[#17243B]">
                  Future-Ready Analytical & Systems Skills
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  In a rapidly changing technological world, specific software
                  tools evolve every few years, but first-principles scientific
                  reasoning, mathematical modeling, empirical calibration, and
                  interdisciplinary problem-solving remain permanently valuable.
                </p>
              </div>

              {/* 6. Responsible Learning */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#315BE8]">
                    PILLAR 06 · RESPONSIBLE LEARNING
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#315BE8]" />
                </div>
                <h3 className="text-xl font-bold text-[#17243B]">
                  Responsible, Safe & Honest Scientific Culture
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  We teach learners to prioritize physical safety, respect
                  environmental resources, and practice scientific integrity—recording
                  what they actually measure in an experiment rather than
                  fabricating ideal numbers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7 — FREQUENTLY ASKED QUESTIONS (INTERACTIVE ACCORDION)
           ===================================================================== */}
        <section className="py-16 lg:py-24 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              kicker="07 · FREQUENTLY ASKED QUESTIONS"
              kickerTone="primary"
              title="Questions from Parents, Teachers, and Mentors."
              description="Clear, honest answers about how Genustride Learn supports students at home and in school."
            />

            <div className="space-y-3.5">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaqIndex(isOpen ? null : idx)
                      }
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F6F9FF]/60 transition-colors cursor-pointer"
                    >
                      <span className="text-base font-bold text-[#17243B] flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-[#315BE8] shrink-0 mt-0.5" />
                        <span>{item.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#315BE8]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-[#E6EBF2] text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            FINAL CTA
           ===================================================================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              kicker="PARTNER IN MEANINGFUL EDUCATION"
              title="Explore a Starter Project With Your Learner or Classroom."
              description="Browse our beginner-friendly experiments or reach out to share curriculum ideas and educational feedback."
              primaryActionLabel="Explore Beginner Projects (/projects)"
              onPrimaryAction={() => router.push('/projects')}
              secondaryActionLabel="Contact Our Team (/contact)"
              onSecondaryAction={() => router.push('/contact')}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
