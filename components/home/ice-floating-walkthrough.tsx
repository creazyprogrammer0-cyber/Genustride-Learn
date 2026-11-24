'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {KickerLabel, ImageContainer} from '@/components/design-system';

export interface IceFloatingStep {
  stepNumber: string;
  stageTag: string;
  title: string;
  subtitle: string;
  description: string;
  scientificNote: string;
}

export function IceFloatingWalkthrough({
  steps,
  iceMolecularImageSrc,
  frozenLakeImageSrc,
}: {
  steps: readonly IceFloatingStep[];
  iceMolecularImageSrc: string;
  frozenLakeImageSrc: string;
}) {
  const [activeIceStepIndex, setActiveIceStepIndex] = useState<number>(0);
  const activeIceStep = steps[activeIceStepIndex] || steps[0];
  const stepRatio = activeIceStepIndex / Math.max(steps.length - 1, 1);
  const latticeScale = (1 + stepRatio * 0.09).toFixed(3);
  const latticeRotateDeg = Math.round(stepRatio * 30);

  return (
    <div className="relative">
      {/* Far-Right Margin Scientific Watermark: Hexagonal H2O Crystal Lattice Wireframe (rotates & expands +9% across Steps 01–06) */}
      <div
        aria-hidden="true"
        style={{
          transform: `rotate(calc(${latticeRotateDeg}deg + var(--ice-progress, 0) * 18deg)) scale(${latticeScale})`,
        }}
        className="pointer-events-none absolute -right-12 top-1/3 -z-10 hidden xl:block opacity-[0.08] transition-transform duration-500 ease-out"
      >
        <svg
          viewBox="0 0 320 320"
          fill="none"
          className="w-80 h-80 text-[#0284C7]"
        >
          <polygon
            points="160,20 281,90 281,230 160,300 39,230 39,90"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <polygon
            points="160,72 236,116 236,204 160,248 84,204 84,116"
            stroke="#16A6A0"
            strokeWidth="1.5"
          />
          <line x1="160" y1="20" x2="160" y2="72" stroke="currentColor" strokeWidth="1.2" />
          <line x1="281" y1="90" x2="236" y2="116" stroke="currentColor" strokeWidth="1.2" />
          <line x1="281" y1="230" x2="236" y2="204" stroke="currentColor" strokeWidth="1.2" />
          <line x1="160" y1="300" x2="160" y2="248" stroke="currentColor" strokeWidth="1.2" />
          <line x1="39" y1="230" x2="84" y2="204" stroke="currentColor" strokeWidth="1.2" />
          <line x1="39" y1="90" x2="84" y2="116" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="160" cy="72" r="5" fill="#315BE8" />
          <circle cx="236" cy="116" r="5" fill="#16A6A0" />
          <circle cx="236" cy="204" r="5" fill="#315BE8" />
          <circle cx="160" cy="248" r="5" fill="#16A6A0" />
          <circle cx="84" cy="204" r="5" fill="#315BE8" />
          <circle cx="84" cy="116" r="5" fill="#16A6A0" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: 6-Step Interactive Progression List */}
        <div className="lg:col-span-7 space-y-3">
        {steps.map((item, idx) => {
          const isActive = idx === activeIceStepIndex;
          return (
            <button
              key={item.stepNumber}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIceStepIndex(idx)}
              className={`w-full text-left rounded-xl p-5 transition-colors border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                isActive
                  ? 'bg-[#F6F9FF] border-[#315BE8] shadow-xs'
                  : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/40 hover:bg-[#F6F9FF]/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`font-mono tabular-nums text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5 ${
                    isActive
                      ? 'bg-[#315BE8] text-white'
                      : 'bg-[#F6F9FF] text-[#315BE8] border border-[#E6EBF2]'
                  }`}
                >
                  0{idx + 1}
                </span>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#17243B]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-[#16A6A0] font-semibold">
                      Stage: {item.stageTag}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#315BE8]">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>

                  {isActive && (
                    <div className="pt-2.5 mt-2.5 border-t border-[#E6EBF2] text-xs text-[#17243B] font-medium">
                      <strong className="text-[#315BE8]">
                        Scientific Mechanism:{' '}
                      </strong>
                      {item.scientificNote}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Dual Real Scientific Photography dynamically linked to active step */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
        {/* Active Step Status Banner */}
        <div className="p-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-mono font-semibold text-[#315BE8]">
              Inspecting Step 0{activeIceStepIndex + 1} of 06 ·{' '}
              {activeIceStep.stageTag}
            </div>
            <div className="text-sm font-bold text-[#17243B] mt-0.5">
              {activeIceStep.title}: {activeIceStep.subtitle}
            </div>
          </div>
          <Link
            href="/how-it-works#ice-learning-example"
            className="text-xs font-semibold text-[#315BE8] hover:underline shrink-0"
          >
            Interactive Sim →
          </Link>
        </div>

        {/* Card 1: Molecular & Density Regime (Highlighted during Steps 1–4) */}
        <div
          className={`rounded-2xl p-5 bg-white transition-colors space-y-4 border ${
            activeIceStepIndex < 4
              ? 'border-[#315BE8] ring-2 ring-[#315BE8]/15 shadow-sm'
              : 'border-[#E6EBF2] opacity-90'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <KickerLabel
              index="Steps 01–04"
              label="Density & Molecular Structure"
              tone="primary"
            />
            <span className="font-mono text-xs text-[#315BE8] font-semibold">
              ρ(ice) = 0.917 g/cm³
            </span>
          </div>

          <ImageContainer
            src={iceMolecularImageSrc}
            alt="Crystalline ice floating at the top of liquid water demonstrating lower solid density than liquid water"
            aspectRatio="16:9"
            rounded="lg"
          />

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-[#17243B]">
              Hexagonal Hydrogen-Bonded Lattice vs. Liquid Water
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              In solid ice, hydrogen bonds lock H₂O molecules into an open
              hexagonal crystal structure, increasing volume by ~9% so ice
              floats above denser 4°C liquid water (1.000 g/cm³).
            </p>
          </div>
        </div>

        {/* Card 2: Ecological & Engineering Regime (Highlighted during Steps 5–6) */}
        <div
          className={`rounded-2xl p-5 bg-white transition-colors space-y-4 border ${
            activeIceStepIndex >= 4
              ? 'border-[#16A6A0] ring-2 ring-[#16A6A0]/15 shadow-sm'
              : 'border-[#E6EBF2] opacity-90'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <KickerLabel
              index="Steps 05–06"
              label="Frozen Lakes & Real-World Impact"
              tone="secondary"
            />
            <span className="font-mono text-xs text-[#16A6A0] font-semibold">
              Ecological Insulation
            </span>
          </div>

          <ImageContainer
            src={frozenLakeImageSrc}
            alt="Surface layer of ice floating on a winter lake with liquid water beneath supporting aquatic ecosystems"
            aspectRatio="16:9"
            rounded="lg"
          />

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-[#17243B]">
              Why Aquatic Life Survives Winter & Pipes Burst
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Because ice floats at the surface, it forms an insulating thermal
              shield that prevents lakes and rivers from freezing solid—while
              the same 9% expansion can rupture uninsulated metal water pipes.
            </p>
          </div>

          <div className="pt-3 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/learn/chemistry"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9]"
            >
              <span>Explore Chemistry Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/learn/physics"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#16A6A0] hover:text-[#128984]"
            >
              <span>Explore Physics Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
