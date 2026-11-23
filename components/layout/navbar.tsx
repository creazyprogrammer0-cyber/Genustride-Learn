'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter, usePathname} from 'next/navigation';
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
  primaryCtaLabel = 'Explore Learning',
  onPrimaryCta,
  className,
}: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect active subject slug when visiting /learn/[subject]
  const activeSubjectMatch = SUBJECT_CATEGORIES.find(
    (s) => pathname === s.route || pathname.startsWith(`${s.route}/`)
  );
  const activeSubjectSlug = activeSubjectMatch?.slug;

  const [mobileSubjectsExpanded, setMobileSubjectsExpanded] = useState(
    Boolean(activeSubjectSlug)
  );

  // Determine active navigation states from current URL pathname + optional prop
  const isExploreActive =
    pathname === '/learn' || activeSection === 'learn';
  const isSubjectsActive = Boolean(activeSubjectSlug);
  const isHowItWorksActive =
    pathname === '/how-it-works' ||
    activeSection === 'how-learning-happens';
  const isProjectsActive =
    pathname === '/projects' ||
    pathname.startsWith('/projects/') ||
    activeSection === 'projects' ||
    activeSection === 'real-world-learning';
  const isResourcesActive =
    pathname === '/resources' ||
    pathname.startsWith('/resources/') ||
    activeSection === 'resources';
  const isParentsActive = pathname === '/for-parents-and-educators';
  const isAboutActive = pathname === '/about';
  const isContactActive = pathname === '/contact';

  // Close mobile drawer on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E6EBF2]',
        className
      )}
    >
      {/* Accessibility Skip-to-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2.5 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#315BE8] focus:text-white focus:text-xs focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Strict 3-Zone Top Bar Contract on Desktop, Compact at 320px */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <Link
          href="/"
          className="text-base sm:text-xl font-extrabold tracking-tight text-[#17243B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
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
            aria-current={isExploreActive ? 'page' : undefined}
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs',
              isExploreActive
                ? 'text-[#315BE8] border-[#315BE8] font-semibold'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            Explore Learning
          </Link>

          <DropdownMenu
            triggerLabel="Subjects"
            items={subjectDropdownItems}
            activeItemId={activeSubjectSlug}
            isActiveTrigger={isSubjectsActive}
            footerAction={{
              label: 'Open Explore Learning Hub (/learn)',
              onClick: () => router.push('/learn'),
            }}
          />

          <Link
            href="/how-it-works"
            aria-current={isHowItWorksActive ? 'page' : undefined}
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs',
              isHowItWorksActive
                ? 'text-[#315BE8] border-[#315BE8] font-semibold'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            How It Works
          </Link>

          <Link
            href="/projects"
            aria-current={isProjectsActive ? 'page' : undefined}
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs',
              isProjectsActive
                ? 'text-[#315BE8] border-[#315BE8] font-semibold'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            Experiments
          </Link>

          <Link
            href="/resources"
            aria-current={isResourcesActive ? 'page' : undefined}
            className={cn(
              'py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs',
              isResourcesActive
                ? 'text-[#315BE8] border-[#315BE8] font-semibold'
                : 'text-[#17243B] border-transparent hover:text-[#315BE8]'
            )}
          >
            Resources
          </Link>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle on <1024px */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
            className="lg:hidden min-h-[42px] min-w-[42px] inline-flex items-center justify-center rounded-lg text-[#17243B] hover:bg-[#F6F9FF] border border-[#E6EBF2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
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
          className="lg:hidden border-t border-[#E6EBF2] bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto animate-reveal"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            <Link
              href="/learn"
              aria-current={isExploreActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isExploreActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-semibold text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>Explore Learning Hub</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>

            {/* Mobile Accordion for Subjects */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubjectsExpanded((prev) => !prev)}
                aria-expanded={mobileSubjectsExpanded}
                className={cn(
                  'w-full min-h-[44px] px-3 py-2.5 flex items-center justify-between gap-2 text-left text-sm rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                  isSubjectsActive
                    ? 'bg-[#EEF3FF]/60 font-bold text-[#315BE8]'
                    : 'font-medium text-[#17243B] hover:bg-[#F6F9FF]'
                )}
              >
                <span>Subjects (6 Learning Areas)</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-[#64748B] transition-transform duration-150 shrink-0',
                    mobileSubjectsExpanded && 'rotate-180 text-[#315BE8]'
                  )}
                />
              </button>

              {mobileSubjectsExpanded && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-[#E6EBF2] space-y-1">
                  {SUBJECT_CATEGORIES.map((subject) => {
                    const isCurrentSubject = activeSubjectSlug === subject.slug;
                    return (
                      <Link
                        key={subject.slug}
                        href={subject.route}
                        aria-current={isCurrentSubject ? 'page' : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'w-full min-h-[40px] px-3 py-2 text-left text-xs rounded-md transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                          isCurrentSubject
                            ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                            : 'font-medium text-[#64748B] hover:text-[#315BE8] hover:bg-[#F6F9FF]'
                        )}
                      >
                        <span>{subject.name}</span>
                        <ArrowRight className="w-3 h-3 shrink-0" aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/how-it-works"
              aria-current={isHowItWorksActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isHowItWorksActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>How It Works</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/projects"
              aria-current={isProjectsActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isProjectsActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>Experiments & Projects</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/resources"
              aria-current={isResourcesActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isResourcesActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>Learning Resources</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/for-parents-and-educators"
              aria-current={isParentsActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isParentsActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>Parents & Educators</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/about"
              aria-current={isAboutActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isAboutActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>About Genustride Learn</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact"
              aria-current={isContactActive ? 'page' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'min-h-[44px] px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                isContactActive
                  ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                  : 'font-medium text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8]'
              )}
            >
              <span>Contact Us</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>
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
