'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {ImageContainer} from './image-container';
import {MetadataRow} from './badge-label';
import {useTilt3D} from '@/hooks/use-tilt-3d';
import {useMagneticHover} from '@/hooks/use-magnetic-hover';

export interface SubjectCardProps {
  title: string;
  disciplineCode?: string;
  levelScope?: string;
  description: string;
  coreFocus?: string;
  exemplarTopics?: string[];
  imageSrc: string;
  imageAlt?: string;
  accentColor?: 'blue' | 'teal' | 'amber';
  href?: string;
  onExplore?: () => void;
  className?: string;
}

function SubjectMiniProbe({subjectKey}: {subjectKey: string}) {
  const [probeStep, setProbeStep] = useState<number>(0);

  if (subjectKey === 'physics') {
    const angles = [
      {deg: '15°', sinVal: '0.26 · Gentle Force', accel: '2.5 m/s²'},
      {deg: '30°', sinVal: '0.50 · Half Gravity', accel: '4.9 m/s²'},
      {deg: '45°', sinVal: '0.71 · Steep Vector', accel: '6.9 m/s²'},
    ];
    const current = angles[probeStep % angles.length];
    return (
      <div className="pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between gap-2 text-xs">
        <div className="min-w-0">
          <span className="font-mono font-bold text-[#0284C7]">
            F∥ = mg·sin({current.deg})
          </span>
          <span className="ml-1.5 text-[11px] text-[#64748B]">
            a = {current.accel}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setProbeStep((prev) => (prev + 1) % angles.length);
          }}
          className="px-2.5 py-1 rounded-md bg-[#F6F9FF] hover:bg-[#E0F2FE] border border-[#E6EBF2] text-[11px] font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Tilt Ramp ({current.deg})
        </button>
      </div>
    );
  }

  if (subjectKey === 'mathematics') {
    const slopes = [
      {k: 1, eq: 'f(x) = 1·x²', rate: 'Slope dy/dx = 2x'},
      {k: 2, eq: 'f(x) = 2·x²', rate: 'Slope dy/dx = 4x'},
      {k: 3, eq: 'f(x) = 3·x²', rate: 'Slope dy/dx = 6x'},
    ];
    const current = slopes[probeStep % slopes.length];
    return (
      <div className="pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between gap-2 text-xs">
        <div className="min-w-0">
          <span className="font-mono font-bold text-[#4F46E5]">
            {current.eq}
          </span>
          <span className="ml-1.5 text-[11px] text-[#64748B]">
            ({current.rate})
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setProbeStep((prev) => (prev + 1) % slopes.length);
          }}
          className="px-2.5 py-1 rounded-md bg-[#F6F9FF] hover:bg-[#EDE9FE] border border-[#E6EBF2] text-[11px] font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Nudge Slope (k={current.k})
        </button>
      </div>
    );
  }

  if (subjectKey === 'chemistry') {
    const bonds = [
      {state: 'Liquid H₂O (104.5°)', note: 'Transient H-Bonds · 1.000 g/cm³'},
      {state: 'Hexagonal Ice (109.5°)', note: 'Locked Tetrahedral · 0.917 g/cm³'},
    ];
    const current = bonds[probeStep % bonds.length];
    return (
      <div className="pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between gap-2 text-xs">
        <div className="min-w-0 truncate">
          <span className="font-mono font-bold text-[#0D9488]">
            {current.state}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setProbeStep((prev) => (prev + 1) % bonds.length);
          }}
          className="px-2.5 py-1 rounded-md bg-[#F6F9FF] hover:bg-[#EAF8F7] border border-[#E6EBF2] text-[11px] font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Pulse Bond State
        </button>
      </div>
    );
  }

  if (subjectKey === 'biology') {
    const states = [
      {mode: 'Isotonic', result: 'Net H₂O Flux = 0 (Balanced)'},
      {mode: 'Hypotonic', result: 'H₂O Enters Cell (Turgid)'},
      {mode: 'Hypertonic', result: 'H₂O Exits Cell (Plasmolysis)'},
    ];
    const current = states[probeStep % states.length];
    return (
      <div className="pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between gap-2 text-xs">
        <div className="min-w-0 truncate">
          <span className="font-mono font-bold text-[#059669]">
            {current.mode}:
          </span>
          <span className="ml-1 text-[11px] text-[#64748B]">
            {current.result}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setProbeStep((prev) => (prev + 1) % states.length);
          }}
          className="px-2.5 py-1 rounded-md bg-[#F6F9FF] hover:bg-[#DCFCE7] border border-[#E6EBF2] text-[11px] font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Toggle Membrane
        </button>
      </div>
    );
  }

  if (subjectKey === 'technology') {
    const gates = [
      {gate: 'AND (1, 0)', out: 'OUT = 0'},
      {gate: 'OR (1, 0)', out: 'OUT = 1'},
      {gate: 'XOR (1, 1)', out: 'OUT = 0'},
    ];
    const current = gates[probeStep % gates.length];
    return (
      <div className="pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between gap-2 text-xs">
        <div className="min-w-0">
          <span className="font-mono font-bold text-[#0891B2]">
            {current.gate} → {current.out}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setProbeStep((prev) => (prev + 1) % gates.length);
          }}
          className="px-2.5 py-1 rounded-md bg-[#F6F9FF] hover:bg-[#E0F2FE] border border-[#E6EBF2] text-[11px] font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Switch Logic Gate
        </button>
      </div>
    );
  }

  // Engineering default: Truss Load-Distribution Stress Highlight
  const loads = [
    {load: '20 N Load', axial: 'Diagonal Stress = 11.5 N (Nominal)'},
    {load: '60 N Load', axial: 'Diagonal Stress = 34.6 N (High Tension)'},
  ];
  const current = loads[probeStep % loads.length];
  return (
    <div className="pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between gap-2 text-xs">
      <div className="min-w-0 truncate">
        <span className="font-mono font-bold text-[#D97706]">
          {current.load}:
        </span>
        <span className="ml-1 text-[11px] text-[#64748B]">
          {current.axial}
        </span>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setProbeStep((prev) => (prev + 1) % loads.length);
        }}
        className="px-2.5 py-1 rounded-md bg-[#F6F9FF] hover:bg-[#FEF3C7] border border-[#E6EBF2] text-[11px] font-semibold text-[#17243B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
      >
        Test Truss Load
      </button>
    </div>
  );
}

export function SubjectCard({
  title,
  disciplineCode,
  levelScope = 'School · College · University',
  description,
  coreFocus,
  exemplarTopics,
  imageSrc,
  imageAlt,
  accentColor = 'blue',
  href,
  onExplore,
  className,
}: SubjectCardProps) {
  const {ref: tiltRef, tiltProps} = useTilt3D<HTMLElement>(4);
  const {ref: magneticCtaRef, magneticProps} =
    useMagneticHover<HTMLDivElement>(5);

  const toneMap = {
    blue: 'primary' as const,
    teal: 'secondary' as const,
    amber: 'accent' as const,
  };

  const normalizedTitle = title.toLowerCase();
  const subjectKey = normalizedTitle.includes('phys')
    ? 'physics'
    : normalizedTitle.includes('math')
      ? 'mathematics'
      : normalizedTitle.includes('chem')
        ? 'chemistry'
        : normalizedTitle.includes('bio')
          ? 'biology'
          : normalizedTitle.includes('tech')
            ? 'technology'
            : normalizedTitle.includes('eng')
              ? 'engineering'
              : accentColor;

  return (
    <article
      ref={tiltRef}
      {...tiltProps}
      data-subject-card="true"
      data-subject-key={subjectKey}
      data-subject-accent={accentColor}
      className={cn(
        'group relative surface-card surface-card-interactive rounded-xl overflow-hidden flex flex-col justify-between p-5 sm:p-6 bg-white/95 will-change-transform',
        className
      )}
    >
      {/* Cursor-Reactive Blueprint Coordinate Sub-Grid Spotlight (opacity: 0.14 on hover, tinted to subject theme color) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 subject-card-blueprint-overlay"
      />

      {/* Diagonal Header Shimmer on Hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 subject-card-shimmer"
      />

      <div className="relative z-10 space-y-4">
        {href ? (
          <Link
            href={href}
            tabIndex={-1}
            aria-hidden="true"
            className="block rounded-lg overflow-hidden focus-visible:outline-none"
          >
            <ImageContainer
              src={imageSrc}
              alt={imageAlt || title}
              aspectRatio="4:3"
              rounded="lg"
              imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </Link>
        ) : (
          <ImageContainer
            src={imageSrc}
            alt={imageAlt || title}
            aspectRatio="4:3"
            rounded="lg"
            imageClassName="group-hover:scale-[1.02] transition-transform duration-300 ease-out"
          />
        )}

        <div className="space-y-2">
          <MetadataRow
            items={[
              ...(disciplineCode
                ? [
                    {
                      label: disciplineCode,
                      tone: toneMap[accentColor],
                      mono: true,
                    },
                  ]
                : []),
              {label: levelScope, tone: 'neutral' as const},
            ]}
          />

          <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
            {href ? (
              <Link
                href={href}
                className="group-hover:text-[#315BE8] hover:text-[#315BE8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>

          <p className="text-[15px] text-[#64748B] leading-relaxed">
            {description}
          </p>
        </div>

        {(coreFocus || (exemplarTopics && exemplarTopics.length > 0)) && (
          <div className="pt-3.5 border-t border-[#E6EBF2] space-y-2">
            {coreFocus && (
              <p className="text-xs text-[#64748B] leading-relaxed">
                <strong className="font-semibold text-[#17243B]">
                  Real-World Lens:{' '}
                </strong>
                {coreFocus}
              </p>
            )}

            {exemplarTopics && exemplarTopics.length > 0 && (
              <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#17243B]">
                {exemplarTopics.map((topic, idx) => (
                  <React.Fragment key={topic}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-[#64748B]/40">
                        ·
                      </span>
                    )}
                    <span className="text-xs font-medium text-[#17243B]/85">
                      {topic}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Interactive Mini-Probe per Discipline Card */}
        <SubjectMiniProbe subjectKey={subjectKey} />
      </div>

      <div className="relative z-10 mt-5 pt-3.5 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <span className="text-xs text-[#64748B]">
          {exemplarTopics && exemplarTopics.length > 0
            ? `${exemplarTopics.length} Core Topic Areas`
            : 'Concepts & Experiments'}
        </span>

        <div
          ref={magneticCtaRef}
          {...magneticProps}
          className="inline-block transition-transform duration-150 ease-out"
        >
          {href ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
            >
              <span>Explore {title}</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] transition-colors shrink-0 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
            >
              <span>Explore {title}</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
