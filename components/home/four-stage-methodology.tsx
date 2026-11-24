'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowRight, Lock, Unlock} from 'lucide-react';
import {useFadeUpReveal} from '@/hooks/use-fade-up-reveal';
import {useRafLoop} from '@/hooks/use-raf-loop';

const STAGES_DATA = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Discover what something is, why it exists, and why it matters.',
    guidingPrompt: 'What is it & why does it matter?',
    exampleNote:
      'Before memorizing Ohm’s Law (V = I·R), first understand why voltage acts like water pressure pushing charge through a wire.',
    topBarClass: 'bg-[#0284C7]',
    numberColor: 'text-[#0284C7]',
    ambientHoverBg: 'hover:bg-[#E0F2FE]/35',
    activeBg: 'bg-[#E0F2FE]/25 ring-2 ring-[#0284C7]/30',
    footerTintBg: 'bg-[#E0F2FE]/45',
    accentHex: '#0284C7',
    practiceHref: '/resources/why-voltage-is-pressure-not-flow',
    practiceCta: 'Read Voltage Intuition Guide',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'Understand how it works and connect different concepts.',
    guidingPrompt: 'How does the mechanism work?',
    exampleNote:
      'Trace how changing resistance alters current flow, and see how mathematics models that inverse proportionality.',
    topBarClass: 'bg-[#4F46E5]',
    numberColor: 'text-[#4F46E5]',
    ambientHoverBg: 'hover:bg-[#EDE9FE]/40',
    activeBg: 'bg-[#EDE9FE]/30 ring-2 ring-[#4F46E5]/30',
    footerTintBg: 'bg-[#EDE9FE]/50',
    accentHex: '#4F46E5',
    practiceHref: '/learn/physics',
    practiceCta: 'Explore Physics Mechanisms',
  },
  {
    number: '03',
    title: 'Apply',
    description:
      'Use knowledge through practical examples, experiments, and challenges.',
    guidingPrompt: 'Where is it used & how can we test it?',
    exampleNote:
      'Wire a 3V battery pack, 220Ω resistor, and LED on a breadboard to measure voltage drops and verify the law firsthand.',
    topBarClass: 'bg-[#059669]',
    numberColor: 'text-[#059669]',
    ambientHoverBg: 'hover:bg-[#DCFCE7]/40',
    activeBg: 'bg-[#DCFCE7]/30 ring-2 ring-[#059669]/30',
    footerTintBg: 'bg-[#DCFCE7]/50',
    accentHex: '#059669',
    practiceHref: '/projects/build-a-simple-electric-circuit',
    practiceCta: 'Open 3V LED Circuit Lab Guide',
  },
  {
    number: '04',
    title: 'Create',
    description:
      'Build, innovate, and solve meaningful problems.',
    guidingPrompt: 'What can you build or improve with it?',
    exampleNote:
      'Combine circuits with solar panels or environmental sensors to build a working weather logger or water probe.',
    topBarClass: 'bg-[#D97706]',
    numberColor: 'text-[#D97706]',
    ambientHoverBg: 'hover:bg-[#FEF3C7]/45',
    activeBg: 'bg-[#FEF3C7]/35 ring-2 ring-[#D97706]/35',
    footerTintBg: 'bg-[#FEF3C7]/55',
    accentHex: '#D97706',
    practiceHref: '/projects/understand-solar-energy',
    practiceCta: 'Open Solar Engineering Project',
  },
] as const;

export function FourStageMethodology() {
  const {ref: sectionRef, isVisible} = useFadeUpReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  // Active stage index + whether user clicked to lock the spotlight
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isLockedByClick, setIsLockedByClick] = useState<boolean>(false);
  const [strideProgressPct, setStrideProgressPct] = useState<number>(12.5);

  // Interactive Sandbox state for Ohm's Law across Stages 01-04
  const [waterPressureHigh, setWaterPressureHigh] = useState<boolean>(true);
  const [resistanceOhms, setResistanceOhms] = useState<number>(220);
  const [circuitSwitchClosed, setCircuitSwitchClosed] = useState<boolean>(true);
  const [selectedSensorModule, setSelectedSensorModule] = useState<
    'solar-panel' | 'water-salinity' | 'wind-anemometer'
  >('solar-panel');

  // Continuously animate the traveling "Stride" dot (01 -> 02 -> 03 -> 04) unless locked by click
  useRafLoop((_delta, elapsed) => {
    if (isLockedByClick) return;
    // Complete one full 4-stage cycle every 12 seconds
    const cycle = (elapsed % 12) / 12;
    const pct = 12.5 + cycle * 75; // travels smoothly from Stage 01 center (12.5%) to Stage 04 center (87.5%)
    setStrideProgressPct(pct);
    const derivedStage = Math.min(Math.floor(cycle * 4), 3);
    if (derivedStage !== activeStageIndex) {
      setActiveStageIndex(derivedStage);
    }
  }, isVisible && !isLockedByClick);

  const handleStageSelect = (idx: number) => {
    setActiveStageIndex(idx);
    setIsLockedByClick(true);
    setStrideProgressPct(12.5 + idx * 25);
  };

  const activeStage = STAGES_DATA[activeStageIndex] || STAGES_DATA[0];
  const currentMa = ((3.0 - 1.9) / resistanceOhms) * 1000;

  return (
    <div ref={sectionRef} className="space-y-6">
      {/* Self-Drawing Progress Connector & Traveling "Stride" Dot Header */}
      <div className="rounded-xl bg-white/90 border border-[#E6EBF2] px-4 py-3.5 space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-[#315BE8]">
              STAGE PROGRESSION TRACK
            </span>
            <span aria-hidden="true" className="text-[#64748B]">
              ·
            </span>
            <span className="font-medium text-[#17243B]">
              Currently Highlighting:{' '}
              <strong style={{color: activeStage.accentHex}}>
                {activeStage.number}. {activeStage.title}
              </strong>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsLockedByClick((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#17243B] cursor-pointer whitespace-nowrap"
          >
            {isLockedByClick ? (
              <>
                <Lock className="w-3.5 h-3.5 text-[#315BE8]" />
                <span>Stage Locked (Click to Resume Auto-Stride)</span>
              </>
            ) : (
              <>
                <Unlock className="w-3.5 h-3.5 text-[#16A6A0]" />
                <span>Auto-Stride Active (Click Any Card to Lock)</span>
              </>
            )}
          </button>
        </div>

        {/* Self-Drawing Horizontal Track + Traveling Stride Dot */}
        <div className="relative h-2.5 w-full rounded-full bg-[#F6F9FF] border border-[#E6EBF2] overflow-hidden">
          <div
            style={{
              width: isVisible ? `${Math.max(strideProgressPct, 12.5)}%` : '0%',
            }}
            className="h-full rounded-full bg-gradient-to-r from-[#0284C7] via-[#4F46E5] to-[#059669] transition-[width] duration-150 ease-out"
          />
          {/* Traveling Stride Indicator */}
          <div
            style={{
              left: `calc(${strideProgressPct}% - 6px)`,
            }}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#315BE8] shadow-xs transition-[left] duration-150 ease-out"
          />
        </div>
      </div>

      {/* Scroll-Staggered 4-Stage Matrix */}
      <div className="rounded-2xl border border-[#E6EBF2] bg-white/95 overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF2] shadow-2xs">
        {STAGES_DATA.map((step, idx) => {
          const isCurrent = activeStageIndex === idx;
          return (
            <article
              key={step.number}
              data-stage-index={idx}
              role="button"
              tabIndex={0}
              aria-pressed={isCurrent}
              onClick={() => handleStageSelect(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleStageSelect(idx);
                }
              }}
              style={{
                transitionDelay: isVisible ? `${idx * 90}ms` : '0ms',
              }}
              className={`flex flex-col justify-between transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${
                isCurrent
                  ? step.activeBg
                  : `bg-white/90 ${step.ambientHoverBg}`
              } ${
                idx >= 2 ? 'md:border-t md:border-[#E6EBF2] lg:border-t-0' : ''
              }`}
            >
              <div>
                <div className={`h-1.5 w-full ${step.topBarClass}`} />
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-mono tabular-nums text-2xl font-extrabold ${step.numberColor}`}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      {isCurrent
                        ? 'Active Stage'
                        : `Stage ${step.number} of 04`}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#17243B] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-[#17243B]/90 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6EBF2] space-y-1">
                    <div className="text-xs font-semibold text-[#17243B]">
                      In Practice:
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {step.exampleNote}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`px-6 sm:px-7 py-4 ${step.footerTintBg} border-t border-[#E6EBF2]`}
              >
                <div className="text-[11px] font-medium text-[#64748B]">
                  Guiding Question
                </div>
                <div className="text-xs font-bold text-[#17243B] mt-0.5">
                  &ldquo;{step.guidingPrompt}&rdquo;
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Stage Practice Preview Bar (Ohm's Law across Stages 01 -> 04) */}
      <div className="rounded-2xl bg-white border border-[#E6EBF2] p-5 sm:p-6 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span
                className="font-mono font-bold"
                style={{color: activeStage.accentHex}}
              >
                STAGE {activeStage.number} INTERACTIVE PREVIEW
              </span>
              <span aria-hidden="true" className="text-[#64748B]">
                ·
              </span>
              <span className="font-semibold text-[#17243B]">
                Ohm&apos;s Law (V = I · R)
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#17243B]">
              {activeStageIndex === 0 &&
                '01. Understand: Why Voltage Acts Like Water Pressure'}
              {activeStageIndex === 1 &&
                '02. Explore: Adjust Resistance (R) to See Current (I) Respond'}
              {activeStageIndex === 2 &&
                '03. Apply: Test a 3.0V Breadboard LED Circuit Loop'}
              {activeStageIndex === 3 &&
                '04. Create: Combine Circuits with Environmental Sensors'}
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {activeStage.exampleNote}
            </p>
          </div>

          {/* Interactive Control Area per Stage */}
          <div className="lg:col-span-4 rounded-xl bg-[#F6F9FF] border border-[#E6EBF2] p-4">
            {activeStageIndex === 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#17243B]">
                    Tank Pressure Analogy:
                  </span>
                  <span className="font-mono font-bold text-[#0284C7]">
                    {waterPressureHigh
                      ? '3.0V (High Pressure → Fast Flow)'
                      : '1.5V (Low Pressure → Gentle Flow)'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setWaterPressureHigh(false)}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      !waterPressureHigh
                        ? 'bg-[#0284C7] text-white'
                        : 'bg-white border border-[#E6EBF2] text-[#17243B]'
                    }`}
                  >
                    1.5V Single Cell
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaterPressureHigh(true)}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      waterPressureHigh
                        ? 'bg-[#0284C7] text-white'
                        : 'bg-white border border-[#E6EBF2] text-[#17243B]'
                    }`}
                  >
                    3.0V Dual Cell
                  </button>
                </div>
              </div>
            )}

            {activeStageIndex === 1 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label
                    htmlFor="stage2-resistance-slider"
                    className="font-semibold text-[#17243B]"
                  >
                    Series Resistor (R):{' '}
                    <span className="font-mono text-[#4F46E5]">
                      {resistanceOhms} Ω
                    </span>
                  </label>
                  <span className="font-mono font-bold text-[#059669]">
                    I = {currentMa.toFixed(1)} mA
                  </span>
                </div>
                <input
                  id="stage2-resistance-slider"
                  type="range"
                  min={100}
                  max={680}
                  step={20}
                  value={resistanceOhms}
                  onChange={(e) => setResistanceOhms(Number(e.target.value))}
                  className="w-full accent-[#4F46E5] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#64748B]">
                  <span>100 Ω (Bright · 11.0 mA)</span>
                  <span>680 Ω (Dim · 1.6 mA)</span>
                </div>
              </div>
            )}

            {activeStageIndex === 2 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#17243B]">
                    3.0V Breadboard Loop:
                  </span>
                  <span className="font-mono font-bold text-[#059669]">
                    {circuitSwitchClosed
                      ? 'CLOSED (V_R=1.1V, V_LED=1.9V)'
                      : 'OPEN (I = 0.0 mA)'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setCircuitSwitchClosed((prev) => !prev)}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    circuitSwitchClosed
                      ? 'bg-[#059669] text-white'
                      : 'bg-white border border-[#E6EBF2] text-[#17243B]'
                  }`}
                >
                  {circuitSwitchClosed
                    ? 'Switch SW1 Closed · Red LED Lit (5.0 mA)'
                    : 'Switch SW1 Open · Click to Energize Loop'}
                </button>
              </div>
            )}

            {activeStageIndex === 3 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#17243B]">
                  Select Prototype Sensor Input:
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    {id: 'solar-panel' as const, label: 'Solar PV'},
                    {id: 'water-salinity' as const, label: 'Water Probe'},
                    {id: 'wind-anemometer' as const, label: 'Wind Sensor'},
                  ].map((mod) => (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => setSelectedSensorModule(mod.id)}
                      className={`py-1.5 px-2 rounded-md text-[11px] font-semibold cursor-pointer transition-colors whitespace-nowrap ${
                        selectedSensorModule === mod.id
                          ? 'bg-[#D97706] text-white'
                          : 'bg-white border border-[#E6EBF2] text-[#17243B]'
                      }`}
                    >
                      {mod.label}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-[#64748B]">
                  {selectedSensorModule === 'solar-panel' &&
                    'Output: 5.2V PV regulated via voltage divider'}
                  {selectedSensorModule === 'water-salinity' &&
                    'Output: Ionic conductance measures dissolved TDS'}
                  {selectedSensorModule === 'wind-anemometer' &&
                    'Output: Pulse frequency proportional to wind speed'}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <Link
              href={activeStage.practiceHref}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#17243B] text-white text-xs font-semibold hover:bg-[#315BE8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>{activeStage.practiceCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
