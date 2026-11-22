'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {Menu, X, ChevronDown, ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import {SUBJECT_CATEGORIES} from '@/lib/design-tokens';

export interface NavbarProps {
  activeSection?: string;
  onNavigate?: (targetId: string, label?: string) => void;
  primaryCtaLabel?: string;
  onPrimaryCta?: () => void;
  className?: string;
}

export function Navbar({
  activeSection,
  onNavigate,
  primaryCtaLabel = 'Explore Learning',
  onPrimaryCta,
  className,
}: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubjectsExpanded, setMobileSubjectsExpanded] = useState(false);

  const subjectDropdownItems: DropdownMenuItem[] = SUBJECT_CATEGORIES.map(
    (subject) => ({
      id: subject.slug,
      label: subject.name,
      meta: subject.shortName,
      description: subject.tagline,
      onSelect: () => {
        setMobileMenuOpen(false);
        router.push(subject.route);
      },
    })
  );

  const handleSectionNavigation = (sectionId: string, label: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId, label);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E6EBF2]',
        className
      )}
    >
      {/* Strict 3-Zone Top Bar Contract on Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-extrabold tracking-tight text-[#17243B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
        >
          Genustride Learn
        </Link>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#64748B]"
        >
          <Link
            href="/learn"
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2',
              activeSection === 'learn'
                ? 'text-[#315BE8] border-[#315BE8]'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            Explore Learning
          </Link>

          <DropdownMenu
            triggerLabel="Subjects"
            items={subjectDropdownItems}
            footerAction={{
              label: 'Open Explore Learning Hub (/learn)',
              onClick: () => router.push('/learn'),
            }}
          />

          <button
            type="button"
            onClick={() =>
              handleSectionNavigation('how-learning-happens', 'How It Works')
            }
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer',
              activeSection === 'how-learning-happens'
                ? 'text-[#315BE8] border-[#315BE8]'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            How It Works
          </button>

          <button
            type="button"
            onClick={() =>
              handleSectionNavigation(
                'real-world-learning',
                'Experiments & Practice'
              )
            }
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer',
              activeSection === 'real-world-learning'
                ? 'text-[#315BE8] border-[#315BE8]'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            Experiments
          </button>

          <button
            type="button"
            onClick={() =>
              handleSectionNavigation('vision-bangladesh', 'About & Vision')
            }
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer',
              activeSection === 'vision-bangladesh'
                ? 'text-[#315BE8] border-[#315BE8]'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            Our Vision
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle on <1024px */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                if (onPrimaryCta) {
                  onPrimaryCta();
                } else {
                  router.push('/learn');
                }
              }}
            >
              {primaryCtaLabel}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-[#17243B] hover:bg-[#F6F9FF] border border-[#E6EBF2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer (320px - 1023px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#E6EBF2] bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            <Link
              href="/learn"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] px-3 py-2.5 text-left text-sm font-semibold text-[#315BE8] hover:bg-[#F6F9FF] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Explore Learning Hub (/learn)</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            {/* Mobile Accordion for Subjects */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubjectsExpanded((prev) => !prev)}
                aria-expanded={mobileSubjectsExpanded}
                className="w-full min-h-[44px] px-3 py-2.5 flex items-center justify-between text-left text-sm font-medium text-[#17243B] hover:bg-[#F6F9FF] rounded-lg transition-colors"
              >
                <span>Subjects (6 Learning Areas)</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-[#64748B] transition-transform duration-150',
                    mobileSubjectsExpanded && 'rotate-180 text-[#315BE8]'
                  )}
                />
              </button>

              {mobileSubjectsExpanded && (
                <div className="mt-1 ml-3 pl-3 border-l border-[#E6EBF2] space-y-1">
                  {SUBJECT_CATEGORIES.map((subject) => (
                    <Link
                      key={subject.slug}
                      href={subject.route}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full min-h-[40px] px-3 py-2 text-left text-xs font-medium text-[#64748B] hover:text-[#315BE8] hover:bg-[#F6F9FF] rounded-md transition-colors flex items-center justify-between"
                    >
                      <span>{subject.name}</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                handleSectionNavigation('our-philosophy', 'Our Philosophy')
              }
              className="min-h-[44px] px-3 py-2.5 text-left text-sm font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8] rounded-lg transition-colors"
            >
              Our Learning Philosophy
            </button>

            <button
              type="button"
              onClick={() =>
                handleSectionNavigation(
                  'how-learning-happens',
                  'How Learning Happens'
                )
              }
              className="min-h-[44px] px-3 py-2.5 text-left text-sm font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8] rounded-lg transition-colors"
            >
              How Learning Happens
            </button>

            <button
              type="button"
              onClick={() =>
                handleSectionNavigation(
                  'real-world-learning',
                  'Real-World Learning'
                )
              }
              className="min-h-[44px] px-3 py-2.5 text-left text-sm font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8] rounded-lg transition-colors"
            >
              Experiments & Real-World Learning
            </button>

            <button
              type="button"
              onClick={() =>
                handleSectionNavigation(
                  'vision-bangladesh',
                  'Our Vision for Bangladesh'
                )
              }
              className="min-h-[44px] px-3 py-2.5 text-left text-sm font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8] rounded-lg transition-colors"
            >
              Our Vision for Bangladesh
            </button>
          </nav>

          <div className="pt-3 border-t border-[#E6EBF2]">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                if (onPrimaryCta) {
                  onPrimaryCta();
                } else {
                  router.push('/learn');
                }
              }}
            >
              {primaryCtaLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
