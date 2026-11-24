'use client';

import React, {useState, useEffect, useMemo} from 'react';
import Link from 'next/link';
import {useRouter, usePathname} from 'next/navigation';
import {Menu, X, ChevronDown, ArrowRight, ArrowUpRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import {SUBJECT_CATEGORIES} from '@/lib/design-tokens';

export interface NavbarProps {
  activeSection?: string;
  onNavigate?: (targetId: string, label?: string) => void;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  onPrimaryCta?: () => void;
  className?: string;
}

const ABOUT_MENU_LINKS = [
  {
    id: 'about',
    label: 'About Us',
    meta: 'Mission & Vision',
    description:
      'Why we created a practical, concept-driven learning platform for real understanding.',
    href: '/about',
  },
  {
    id: 'for-parents-and-educators',
    label: 'Parents & Educators',
    meta: 'Schools & Home',
    description:
      'How concept-driven learning supports classroom teaching, homework, and curiosity.',
    href: '/for-parents-and-educators',
  },
  {
    id: 'contact',
    label: 'Contact',
    meta: 'Get in Touch',
    description:
      'Reach out with subject questions, feedback, or educational partnership inquiries.',
    href: '/contact',
  },
] as const;

export function Navbar({
  activeSection,
  primaryCtaLabel = 'Explore Learning',
  primaryCtaHref = '/learn',
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

  // Determine active navigation states from current URL pathname + optional prop
  const isExploreActive = pathname === '/learn';
  const isSubjectsActive = Boolean(activeSubjectSlug) || isExploreActive;
  const isHowItWorksActive =
    pathname === '/how-it-works' || activeSection === 'how-learning-happens';
  const isProjectsActive =
    pathname === '/projects' ||
    pathname.startsWith('/projects/') ||
    activeSection === 'projects' ||
    activeSection === 'real-world-learning';
  const isResourcesActive =
    pathname === '/resources' ||
    pathname.startsWith('/resources/') ||
    activeSection === 'resources';
  const isAboutActive = pathname === '/about' || activeSection === 'about';
  const isParentsActive =
    pathname === '/for-parents-and-educators' ||
    activeSection === 'for-parents-and-educators';
  const isContactActive =
    pathname === '/contact' || activeSection === 'contact';

  const activeAboutItemId = isAboutActive
    ? 'about'
    : isParentsActive
      ? 'for-parents-and-educators'
      : isContactActive
        ? 'contact'
        : undefined;
  const isAboutGroupActive = Boolean(activeAboutItemId);

  const [mobileSubjectsExpanded, setMobileSubjectsExpanded] =
    useState<boolean>(isSubjectsActive);
  const [mobileAboutExpanded, setMobileAboutExpanded] =
    useState<boolean>(isAboutGroupActive);

  // Close mobile drawer on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const subjectDropdownItems: DropdownMenuItem[] = useMemo(
    () =>
      SUBJECT_CATEGORIES.map((subject) => ({
        id: subject.slug,
        label: subject.name,
        meta: subject.shortName,
        description: subject.tagline,
        onSelect: () => {
          setMobileMenuOpen(false);
          router.push(subject.route);
        },
      })),
    [router]
  );

  const aboutDropdownItems: DropdownMenuItem[] = useMemo(
    () =>
      ABOUT_MENU_LINKS.map((item) => ({
        id: item.id,
        label: item.label,
        meta: item.meta,
        description: item.description,
        onSelect: () => {
          setMobileMenuOpen(false);
          router.push(item.href);
        },
      })),
    [router]
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/98 sm:bg-white/95 sm:backdrop-blur-md border-b border-[#E6EBF2]',
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

      {/* Strict 3-Zone Top Bar Contract on Desktop, Compact on Mobile/Tablet (<1024px) */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <Link
          href="/"
          className="text-base sm:text-xl font-extrabold tracking-tight text-[#17243B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
        >
          Genustride Learn
        </Link>

        {/* Zone 2: 5 Unified Primary Navigation Items (Identical structure to Mobile/Tablet Drawer) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#64748B]"
        >
          <DropdownMenu
            triggerLabel="Subjects"
            items={subjectDropdownItems}
            activeItemId={activeSubjectSlug}
            isActiveTrigger={isSubjectsActive}
            footerAction={{
              label: 'All Subjects Hub (/learn)',
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

          <DropdownMenu
            triggerLabel="About"
            items={aboutDropdownItems}
            activeItemId={activeAboutItemId}
            isActiveTrigger={isAboutGroupActive}
            align="right"
          />
        </nav>

        {/* Zone 3: 1 Primary CTA on Desktop (lg:block) + Drawer Toggle on Mobile/Tablet (<1024px) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              href={onPrimaryCta ? undefined : primaryCtaHref}
              onClick={
                onPrimaryCta
                  ? () => {
                      onPrimaryCta();
                    }
                  : undefined
              }
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

      {/* Responsive Mobile & Tablet Navigation Drawer (320px - 1023px) — 100% Unified with Desktop */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#E6EBF2] bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto animate-reveal"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            {/* 1. Subjects Accordion (Matches Desktop 'Subjects' Dropdown) */}
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
                <span>Subjects</span>
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
                        <ArrowRight
                          className="w-3 h-3 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}

                  <Link
                    href="/learn"
                    aria-current={isExploreActive ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'w-full min-h-[40px] px-3 py-2 text-left text-xs rounded-md transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                      isExploreActive
                        ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                        : 'font-semibold text-[#315BE8] hover:bg-[#F6F9FF]'
                    )}
                  >
                    <span>All Subjects Hub (/learn)</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )}
            </div>

            {/* 2. How It Works */}
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

            {/* 3. Experiments */}
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
              <span>Experiments</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            {/* 4. Resources */}
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
              <span>Resources</span>
              <ArrowRight
                className="w-4 h-4 text-[#64748B] shrink-0"
                aria-hidden="true"
              />
            </Link>

            {/* 5. About Accordion (Matches Desktop 'About' Dropdown) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutExpanded((prev) => !prev)}
                aria-expanded={mobileAboutExpanded}
                className={cn(
                  'w-full min-h-[44px] px-3 py-2.5 flex items-center justify-between gap-2 text-left text-sm rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                  isAboutGroupActive
                    ? 'bg-[#EEF3FF]/60 font-bold text-[#315BE8]'
                    : 'font-medium text-[#17243B] hover:bg-[#F6F9FF]'
                )}
              >
                <span>About</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-[#64748B] transition-transform duration-150 shrink-0',
                    mobileAboutExpanded && 'rotate-180 text-[#315BE8]'
                  )}
                />
              </button>

              {mobileAboutExpanded && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-[#E6EBF2] space-y-1">
                  {ABOUT_MENU_LINKS.map((item) => {
                    const isCurrent = activeAboutItemId === item.id;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        aria-current={isCurrent ? 'page' : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'w-full min-h-[40px] px-3 py-2 text-left text-xs rounded-md transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                          isCurrent
                            ? 'bg-[#EEF3FF] font-bold text-[#315BE8]'
                            : 'font-medium text-[#64748B] hover:text-[#315BE8] hover:bg-[#F6F9FF]'
                        )}
                      >
                        <span>{item.label}</span>
                        <ArrowRight
                          className="w-3 h-3 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Primary CTA Button (Identical label and destination to Desktop Zone 3) */}
          <div className="pt-3 border-t border-[#E6EBF2]">
            <Button
              variant="primary"
              size="md"
              fullWidth
              href={onPrimaryCta ? undefined : primaryCtaHref}
              onClick={() => {
                setMobileMenuOpen(false);
                if (onPrimaryCta) {
                  onPrimaryCta();
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
