'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {KickerLabel} from '@/components/design-system';

type ComparisonMode = 'both' | 'traditional' | 'conceptual';

const COMPARISON_PAIRS = [
  {
    index: '01',
    traditionalTitle: 'Memorize definitions.',
    traditionalDetail:
      'Retaining terminology without visualizing the underlying physical or logical process.',
    conceptualTitle: 'Understand concepts.',
    conceptualDetail:
      'Grasp the core principle, physical cause, and intuition behind every law or equation before memorizing symbols.',
    tone: 'text-[#315BE8]',
    realWorldTest:
      'When asked why a spoon looks bent in a glass of water, memorization recalls "n₁ sin θ₁ = n₂ sin θ₂", while conceptual understanding explains how light slows down entering denser water.',
  },
  {
    index: '02',
    traditionalTitle: 'Follow fixed answers.',
    traditionalDetail:
      'Repeating prescribed steps rather than exploring alternative ways to reason through a problem.',
    conceptualTitle: 'Ask questions and reason.',
    conceptualDetail:
      'Investigate cause and effect step by step instead of accepting formulas on authority alone.',
    tone: 'text-[#16A6A0]',
    realWorldTest:
      'When a circuit LED fails to light up, fixed-step learning gets stuck, whereas conceptual reasoning tests voltage drop, polarity, and series resistance.',
  },
  {
    index: '03',
    traditionalTitle: 'Study mainly for examinations.',
    traditionalDetail:
      'Treating chapters as temporary hurdles rather than tools for lifelong thinking.',
    conceptualTitle: 'Apply knowledge.',
    conceptualDetail:
      'Test understanding through hands-on observations, controlled experiments, and practical scenarios.',
    tone: 'text-[#315BE8]',
    realWorldTest:
      'Instead of solving worksheet pressure problems for a test grade, you build a two-syringe hydraulic lifter and verify Pascal’s force multiplication firsthand.',
  },
  {
    index: '04',
    traditionalTitle: 'Learn isolated subjects.',
    traditionalDetail:
      'Keeping mathematics, physics, chemistry, and biology in separate boxes without seeing how they interact.',
    conceptualTitle: 'Connect ideas with reality.',
    conceptualDetail:
      'Bridge mathematics, physics, chemistry, biology, and computing to see how complete real-world systems operate.',
    tone: 'text-[#16A6A0]',
    realWorldTest:
      'Understanding a frozen winter lake connects H₂O hydrogen bond angles (Chemistry), buoyancy & density (Physics), and thermal insulation of fish habitats (Biology).',
  },
] as const;

export function RethinkingLearningComparison() {
  const [viewMode, setViewMode] = useState<ComparisonMode>('both');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activePair = COMPARISON_PAIRS[activeIndex] || COMPARISON_PAIRS[0];

  return (
    <div className="space-y-8">
      {/* Interactive Mode Switcher & Point Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E6EBF2]">
        <div
          role="group"
          aria-label="Filter learning comparison mode"
          className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E6EBF2] rounded-lg self-start"
        >
          {[
            {id: 'both' as const, label: 'Side-by-Side Contrast'},
            {
              id: 'traditional' as const,
              label: 'Memorization Mode (Fragile)',
            },
            {
              id: 'conceptual' as const,
              label: 'Conceptual Mode (Durable)',
            },
          ].map((tab) => {
            const isActive = viewMode === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setViewMode(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                  isActive
                    ? 'bg-[#17243B] text-white shadow-2xs'
                    : 'text-[#64748B] hover:text-[#17243B]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
          <span>Inspect Contrast Point:</span>
          {COMPARISON_PAIRS.map((pair, idx) => (
            <button
              key={pair.index}
              type="button"
              aria-pressed={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold transition-colors cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#315BE8] text-white'
                  : 'bg-white border border-[#E6EBF2] text-[#64748B] hover:text-[#17243B]'
              }`}
            >
              {pair.index}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Editorial Ledger Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Traditional Approach */}
        {viewMode !== 'conceptual' && (
          <div
            className={`${
              viewMode === 'traditional' ? 'lg:col-span-12' : 'lg:col-span-5'
            } rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all`}
          >
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
                Focuses primarily on recalling information in the exact form it
                was presented, often leaving learners unsure how to use that
                knowledge outside a test paper.
              </p>

              <ul className="divide-y divide-[#E6EBF2] border-t border-[#E6EBF2]">
                {COMPARISON_PAIRS.map((point, idx) => {
                  const isHighlighted = activeIndex === idx;
                  return (
                    <li
                      key={point.traditionalTitle}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => setActiveIndex(idx)}
                      className={`py-3.5 px-2.5 -mx-2.5 rounded-lg flex items-start gap-3 text-sm transition-colors cursor-pointer ${
                        isHighlighted ? 'bg-[#F6F9FF]' : 'hover:bg-[#F6F9FF]/60'
                      }`}
                    >
                      <span
                        className={`font-mono tabular-nums text-xs mt-0.5 shrink-0 font-bold ${
                          isHighlighted ? 'text-[#315BE8]' : 'text-[#64748B]'
                        }`}
                      >
                        {point.index}
                      </span>
                      <div>
                        <span className="font-semibold text-[#17243B]">
                          {point.traditionalTitle}{' '}
                        </span>
                        <span className="text-[#64748B]">
                          {point.traditionalDetail}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E6EBF2] text-xs text-[#64748B]">
              Outcome: Information is remembered briefly for an exam, then
              quickly forgotten.
            </div>
          </div>
        )}

        {/* Genustride Learn Concept-Driven Approach */}
        {viewMode !== 'traditional' && (
          <div
            className={`${
              viewMode === 'conceptual' ? 'lg:col-span-12' : 'lg:col-span-7'
            } relative overflow-hidden rounded-2xl bg-white border border-[#315BE8]/35 p-6 sm:p-8 shadow-[0_8px_28px_-6px_rgba(49,91,232,0.08)] flex flex-col justify-between space-y-6 transition-all`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full ambient-glow-blue"
            />

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <KickerLabel label="Genustride Learn Approach" tone="primary" />
                <span className="text-xs font-medium text-[#16A6A0]">
                  Concept-Driven & Practical
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#17243B]">
                Our Approach: Deep Conceptual Understanding
              </h3>

              <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                Builds on academic foundations by asking why each idea matters,
                observing how it behaves in nature and technology, and putting
                it to work on real questions.
              </p>

              <ul className="divide-y divide-[#E6EBF2] border-t border-[#E6EBF2]">
                {COMPARISON_PAIRS.map((point, idx) => {
                  const isHighlighted = activeIndex === idx;
                  return (
                    <li
                      key={point.conceptualTitle}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => setActiveIndex(idx)}
                      className={`py-3.5 px-2.5 -mx-2.5 rounded-lg flex items-start gap-3 text-sm transition-colors cursor-pointer ${
                        isHighlighted
                          ? 'bg-[#EEF3FF]/70'
                          : 'hover:bg-[#F6F9FF]/60'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${point.tone}`}
                        aria-hidden="true"
                      />
                      <div>
                        <span className="font-bold text-[#17243B]">
                          {point.conceptualTitle}{' '}
                        </span>
                        <span className="text-[#64748B]">
                          {point.conceptualDetail}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-medium text-[#17243B]">
                Outcome: Durable understanding that empowers learners to solve
                unfamiliar problems.
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
        )}
      </div>

      {/* Live Contrast Spotlight Bar for Active Point (01-04) */}
      <div className="rounded-xl bg-white border border-[#E6EBF2] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono font-bold text-[#315BE8]">
              Contrast Point {activePair.index} in Action
            </span>
            <span aria-hidden="true" className="text-[#64748B]">
              ·
            </span>
            <span className="font-semibold text-[#17243B]">
              {activePair.traditionalTitle.replace('.', '')} vs.{' '}
              {activePair.conceptualTitle.replace('.', '')}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {activePair.realWorldTest}
          </p>
        </div>

        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] whitespace-nowrap shrink-0"
        >
          <span>See Methodology</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
