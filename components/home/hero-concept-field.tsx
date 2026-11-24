'use client';

import React, {useRef, useState} from 'react';
import Link from 'next/link';
import {ArrowRight, X} from 'lucide-react';
import {useRafLoop} from '@/hooks/use-raf-loop';
import {useMotionSystem} from '@/components/motion/motion-provider';

export interface FloatingFormulaBadgeData {
  id: string;
  formula: string;
  discipline: string;
  intuitionTitle: string;
  intuitionBody: string;
  href: string;
  positionClass: string;
  phaseOffset: number;
  accentHex: string;
}

export const HERO_FORMULA_BADGES: readonly FloatingFormulaBadgeData[] = [
  {
    id: 'density-ice',
    formula: 'ρ(ice) = 0.917',
    discipline: 'Chemistry & Physics',
    intuitionTitle: 'Why ice floats on winter lakes',
    intuitionBody:
      'At 0°C, hydrogen bonds lock H₂O into an open hexagonal lattice that is ~8.3% less dense than 4°C liquid water (1.000 g/cm³)—insulating aquatic life below.',
    href: '#how-learning-happens',
    positionClass: 'top-3 left-3 sm:top-4 sm:left-6 lg:left-8',
    phaseOffset: 0,
    accentHex: '#0284C7',
  },
  {
    id: 'newton-force',
    formula: 'F = ma',
    discipline: 'Physics & Mechanics',
    intuitionTitle: 'Why a heavy truck takes longer to brake than a bicycle',
    intuitionBody:
      'Force equals mass times acceleration: a loaded 15,000 kg truck requires 150× more braking force than a 100 kg bicycle rider to stop at the same deceleration rate.',
    href: '/learn/physics',
    positionClass: 'top-3 right-3 sm:top-5 sm:right-6 lg:right-10',
    phaseOffset: 1.6,
    accentHex: '#315BE8',
  },
  {
    id: 'water-molecule',
    formula: 'H₂O · 104.5°',
    discipline: 'Molecular Chemistry',
    intuitionTitle: 'Why water dissolves salts and forms hexagonal crystals',
    intuitionBody:
      'The 104.5° bent bond angle makes every water molecule an electrical dipole—allowing it to pull apart ionic crystals and lock into hexagonal ice rings.',
    href: '/learn/chemistry',
    positionClass: 'bottom-3 left-3 sm:bottom-4 sm:left-8 lg:left-12',
    phaseOffset: 3.1,
    accentHex: '#16A6A0',
  },
  {
    id: 'pi-geometry',
    formula: 'π ≈ 3.14159',
    discipline: 'Mathematics & Engineering',
    intuitionTitle: 'How circular ratios govern wheels, waves, and orbits',
    intuitionBody:
      'Whether measuring a bicycle wheel revolution, alternating current sine waves, or structural arch curvature, π links linear distance to rotation.',
    href: '/learn/mathematics',
    positionClass: 'bottom-3 right-3 sm:bottom-4 sm:right-8 lg:right-12',
    phaseOffset: 4.7,
    accentHex: '#D97706',
  },
];

/**
 * Word-by-Word Clip Reveal for the Hero Headline with Multi-Tone Gradient Coloring System
 */
export function HeroHeadlineReveal({text}: {text: string}) {
  const {reduceMotion} = useMotionSystem();
  const words = text.split(' ');

  return (
    <h1
      aria-label={text}
      className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight leading-[1.12] text-balance"
    >
      {words.map((word, idx) => {
        // First sentence ("Don't Just Learn What It Is.") in deep navy -> royal cobalt gradient;
        // Second sentence ("Understand Why It Matters.") in vibrant cobalt -> cyan -> scientific teal gradient
        const wordGradientClass =
          idx < 6
            ? 'bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#315BE8] bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-[#315BE8] via-[#0284C7] to-[#16A6A0] bg-clip-text text-transparent';

        return (
          <span
            key={`${word}-${idx}`}
            className="inline-block overflow-hidden align-bottom mr-[0.26em] pb-1"
          >
            <span
              style={
                reduceMotion
                  ? undefined
                  : {
                      animationDelay: `${idx * 42}ms`,
                    }
              }
              className={`${
                reduceMotion
                  ? 'inline-block'
                  : 'inline-block hero-word-clip-reveal'
              } ${wordGradientClass}`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </h1>
  );
}

export interface FloatingStemBadgeProps {
  badge: FloatingFormulaBadgeData;
  isOpen?: boolean;
  onToggle?: (badgeId: string) => void;
  onClose?: () => void;
  renderInlineTooltip?: boolean;
}

/**
 * Individual FloatingStemBadge component that uses `useRafLoop` to float gently
 * in the viewport and opens a dismissible tooltip with real-world intuition when clicked.
 */
export function FloatingStemBadge({
  badge,
  isOpen: controlledIsOpen,
  onToggle,
  onClose,
  renderInlineTooltip = false,
}: FloatingStemBadgeProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const badgeElRef = useRef<HTMLDivElement | null>(null);

  const isSelected =
    controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledOpen;

  useRafLoop((_delta, elapsed) => {
    const el = badgeElRef.current;
    if (!el) return;
    const y = Math.sin(elapsed * 1.35 + badge.phaseOffset) * 5.5;
    const x = Math.cos(elapsed * 0.95 + badge.phaseOffset) * 3.0;
    el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
  });

  const handleToggle = () => {
    if (onToggle) {
      onToggle(badge.id);
    } else {
      setUncontrolledOpen((prev) => !prev);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setUncontrolledOpen(false);
    }
  };

  return (
    <div
      ref={badgeElRef}
      className={`pointer-events-auto absolute ${badge.positionClass} will-change-transform`}
    >
      <button
        type="button"
        aria-expanded={isSelected}
        onClick={handleToggle}
        className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold backdrop-blur-md border transition-all cursor-pointer whitespace-nowrap shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
          isSelected
            ? 'bg-[#17243B] text-white border-[#17243B] shadow-md scale-105'
            : 'bg-white/85 text-[#17243B] border-[#E6EBF2] hover:border-[#315BE8]/50 hover:bg-white'
        }`}
      >
        <span
          style={{
            color: isSelected ? '#FFFFFF' : badge.accentHex,
          }}
        >
          {badge.formula}
        </span>
        <span className="ml-1.5 text-[10px] font-sans font-medium text-[#64748B]">
          {isSelected ? '×' : '?'}
        </span>
      </button>

      {renderInlineTooltip && isSelected && (
        <div
          role="dialog"
          aria-label={`Quick concept intuition for ${badge.formula}`}
          className="mt-2 w-72 sm:w-80 rounded-xl bg-white/95 backdrop-blur-md border border-[#315BE8]/35 p-3.5 shadow-md animate-reveal"
        >
          <div className="flex items-start justify-between gap-2.5">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="font-mono font-bold text-[#315BE8]">
                  {badge.formula}
                </span>
                <span aria-hidden="true" className="text-[#64748B]">
                  ·
                </span>
                <span className="font-medium text-[#16A6A0]">
                  {badge.discipline}
                </span>
              </div>
              <h2 className="text-xs font-bold text-[#17243B]">
                {badge.intuitionTitle}
              </h2>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {badge.intuitionBody}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close concept intuition tooltip"
              onClick={handleClose}
              className="p-1 rounded-md text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#E6EBF2] flex items-center justify-end text-xs">
            <Link
              href={badge.href}
              className="inline-flex items-center gap-1 font-semibold text-[#315BE8] hover:text-[#2548C9] whitespace-nowrap shrink-0"
            >
              <span>Explore Concept</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Interactive Floating STEM Formula Badges positioned in the outer hero margins.
 * Clicking any badge opens a compact, dismissible "Quick Concept Tooltip" with real-world intuition.
 */
export function HeroFloatingStemBadges() {
  const [activeBadgeId, setActiveBadgeId] = useState<string | null>(null);
  const activeBadge = HERO_FORMULA_BADGES.find((b) => b.id === activeBadgeId);

  return (
    <>
      {/* Outer-Margin Floating Formula Buttons (Hidden on cramped <640px screens so hero text never clips) */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block z-20">
        {HERO_FORMULA_BADGES.map((badge) => (
          <FloatingStemBadge
            key={badge.id}
            badge={badge}
            isOpen={activeBadgeId === badge.id}
            onToggle={(id) =>
              setActiveBadgeId((prev) => (prev === id ? null : id))
            }
            onClose={() => setActiveBadgeId(null)}
          />
        ))}
      </div>

      {/* Dismissible Quick Concept Tooltip Drawer */}
      {activeBadge && (
        <div
          role="dialog"
          aria-label={`Quick concept intuition for ${activeBadge.formula}`}
          className="relative z-30 mt-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#315BE8]/35 p-4 shadow-md max-w-xl animate-reveal"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono font-bold text-[#315BE8]">
                  {activeBadge.formula}
                </span>
                <span aria-hidden="true" className="text-[#64748B]">
                  ·
                </span>
                <span className="font-medium text-[#16A6A0]">
                  {activeBadge.discipline}
                </span>
              </div>
              <h2 className="text-sm font-bold text-[#17243B]">
                {activeBadge.intuitionTitle}
              </h2>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {activeBadge.intuitionBody}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close concept intuition tooltip"
              onClick={() => setActiveBadgeId(null)}
              className="p-1 rounded-md text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#E6EBF2] flex items-center justify-between text-xs">
            <span className="text-[#64748B]">
              Click any floating formula in the hero margin to inspect its real-world meaning
            </span>
            <Link
              href={activeBadge.href}
              className="inline-flex items-center gap-1 font-semibold text-[#315BE8] hover:text-[#2548C9] whitespace-nowrap shrink-0"
            >
              <span>Explore Concept</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
