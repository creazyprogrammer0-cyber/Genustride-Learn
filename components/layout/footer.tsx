'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {X, Mail, ShieldCheck, FileText, Compass} from 'lucide-react';
import {SUBJECT_CATEGORIES, LEARNING_STAGES} from '@/lib/design-tokens';
import {Button} from '@/components/ui/button';
import {KickerLabel} from '@/components/ui/badge-label';

export interface FooterProps {
  onSelectSection?: (sectionId: string, label?: string) => void;
}

type InfoModalType = 'privacy' | 'terms' | 'contact' | 'about' | null;

export function Footer({onSelectSection}: FooterProps) {
  const router = useRouter();
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalType>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    role: 'Student / Learner',
    email: '',
    message: '',
  });

  const handleSectionGo = (sectionId: string, label: string) => {
    if (onSelectSection) {
      onSelectSection(sectionId, label);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <>
      <footer className="bg-white border-t border-[#E6EBF2] text-[#17243B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Identity & Philosophy */}
            <div className="lg:col-span-4 space-y-4">
              <Link
                href="/"
                className="inline-block text-xl font-extrabold tracking-tight text-[#17243B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
              >
                Genustride Learn
              </Link>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
                &ldquo;Don&apos;t just learn what it is. Understand why it
                matters, how it works, and what you can do with it.&rdquo;
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                {LEARNING_STAGES.map((stage, idx) => (
                  <React.Fragment key={stage.id}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-[#315BE8]">
                        →
                      </span>
                    )}
                    <span className="font-medium text-[#17243B]">
                      {stage.label}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Column 1: Explore */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                <li>
                  <Link
                    href="/learn"
                    className="hover:text-[#315BE8] transition-colors block font-medium text-[#17243B]"
                  >
                    Explore Learning Hub
                  </Link>
                </li>
                {SUBJECT_CATEGORIES.map((subject) => (
                  <li key={subject.slug}>
                    <Link
                      href={subject.route}
                      className="hover:text-[#315BE8] transition-colors block"
                    >
                      {subject.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: About */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                About
              </h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo('our-philosophy', 'Our Learning Philosophy')
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Learning Philosophy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo(
                        'traditional-vs-concept',
                        'Why Concept-Driven Learning'
                      )
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Our Approach
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo(
                        'vision-bangladesh',
                        'Our Vision for Bangladesh'
                      )
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Vision for Bangladesh
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoModal('about')}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    About Genustride Learn
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: For Learners */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                For Learners
              </h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo(
                        'how-learning-happens',
                        'How Learning Happens'
                      )
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    How Learning Happens
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo(
                        'real-world-learning',
                        'Experiments & Projects'
                      )
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Experiments & Projects
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo('skills-beyond', 'Skills Beyond Academics')
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Practical Skills
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionGo('learning-areas', 'Explore Learning Areas')
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Subject Guides
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Information (Privacy Policy, Terms of Use, Contact) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                Information
              </h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoModal('privacy')}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoModal('terms')}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setContactSubmitted(false);
                      setActiveInfoModal('contact');
                    }}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-[#E6EBF2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>
              © {new Date().getFullYear()} Genustride Learn. Concept-driven
              practical education.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setActiveInfoModal('privacy')}
                className="hover:text-[#315BE8] transition-colors"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setActiveInfoModal('terms')}
                className="hover:text-[#315BE8] transition-colors"
              >
                Terms of Use
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => {
                  setContactSubmitted(false);
                  setActiveInfoModal('contact');
                }}
                className="hover:text-[#315BE8] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Modal for Privacy Policy, Terms of Use, About & Contact */}
      {activeInfoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17243B]/40 backdrop-blur-xs"
          onClick={() => setActiveInfoModal(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E6EBF2] pb-4">
              <div className="space-y-1">
                <KickerLabel
                  label={
                    activeInfoModal === 'privacy'
                      ? 'PRIVACY POLICY'
                      : activeInfoModal === 'terms'
                        ? 'TERMS OF USE'
                        : activeInfoModal === 'about'
                          ? 'ABOUT GENUSTRIDE LEARN'
                          : 'CONTACT US'
                  }
                  tone="primary"
                />
                <h2 className="text-xl font-bold text-[#17243B] flex items-center gap-2">
                  {activeInfoModal === 'privacy' && (
                    <>
                      <ShieldCheck className="w-5 h-5 text-[#315BE8]" />
                      <span>Privacy Policy</span>
                    </>
                  )}
                  {activeInfoModal === 'terms' && (
                    <>
                      <FileText className="w-5 h-5 text-[#315BE8]" />
                      <span>Terms of Use</span>
                    </>
                  )}
                  {activeInfoModal === 'about' && (
                    <>
                      <Compass className="w-5 h-5 text-[#315BE8]" />
                      <span>About Genustride Learn</span>
                    </>
                  )}
                  {activeInfoModal === 'contact' && (
                    <>
                      <Mail className="w-5 h-5 text-[#315BE8]" />
                      <span>Contact Genustride Learn</span>
                    </>
                  )}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveInfoModal(null)}
                aria-label="Close modal"
                className="min-h-[40px] min-w-[40px] rounded-lg border border-[#E6EBF2] flex items-center justify-center text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeInfoModal === 'privacy' && (
              <div className="space-y-3 text-sm text-[#64748B] leading-relaxed">
                <p className="text-[#17243B] font-medium">
                  Genustride Learn respects learner privacy and is committed to
                  transparent, minimal data practices.
                </p>
                <p>
                  <strong className="text-[#17243B]">
                    Public Learning Access:
                  </strong>{' '}
                  Our public concept guides, subject exploration pages, and
                  experiment frameworks can be browsed freely without mandatory
                  account registration.
                </p>
                <p>
                  <strong className="text-[#17243B]">
                    Contact Inquiries:
                  </strong>{' '}
                  When you reach out via our contact form, we use your name,
                  email, and message strictly to respond to your educational or
                  partnership inquiry. We never sell learner data to third
                  parties.
                </p>
              </div>
            )}

            {activeInfoModal === 'terms' && (
              <div className="space-y-3 text-sm text-[#64748B] leading-relaxed">
                <p className="text-[#17243B] font-medium">
                  By using Genustride Learn, you agree to engage with our
                  educational materials responsibly and safely.
                </p>
                <p>
                  <strong className="text-[#17243B]">
                    Educational Purpose & Safety:
                  </strong>{' '}
                  All hands-on observations, experiments, and practical project
                  guides are designed for educational understanding. Learners
                  conducting physical or chemical experiments should follow
                  standard laboratory safety precautions and appropriate
                  supervision.
                </p>
                <p>
                  <strong className="text-[#17243B]">
                    Intellectual Property:
                  </strong>{' '}
                  Learners and educators are encouraged to use our conceptual
                  frameworks (Understand → Explore → Apply → Create) in
                  classrooms and personal study with attribution to Genustride
                  Learn.
                </p>
              </div>
            )}

            {activeInfoModal === 'about' && (
              <div className="space-y-3 text-sm text-[#64748B] leading-relaxed">
                <p className="text-[#17243B] font-medium">
                  Genustride Learn is a concept-driven online learning platform
                  created to connect academic subjects with real-world
                  understanding and application.
                </p>
                <p>
                  With an initial focus on learners in Bangladesh and
                  international-grade English-first educational content, we aim
                  to help school, college, university, and independent learners
                  move beyond rote memorization toward genuine scientific
                  reasoning and practical creation.
                </p>
              </div>
            )}

            {activeInfoModal === 'contact' && (
              <div>
                {contactSubmitted ? (
                  <div className="p-5 rounded-xl bg-[#EAF8F7] border border-[#16A6A0]/30 space-y-2 text-sm">
                    <div className="font-bold text-[#17243B]">
                      Thank you for reaching out to Genustride Learn.
                    </div>
                    <p className="text-[#64748B]">
                      We have received your message from{' '}
                      <span className="font-medium text-[#17243B]">
                        {contactForm.name || 'Learner'}
                      </span>{' '}
                      and will respond to your inquiry shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#17243B] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="e.g., Tahmid Rahman"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-white text-[#17243B] focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#17243B] mb-1.5">
                          I am a...
                        </label>
                        <select
                          value={contactForm.role}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              role: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-white text-[#17243B] focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                        >
                          <option>Student / Learner</option>
                          <option>Educator / Teacher</option>
                          <option>Parent</option>
                          <option>Independent Researcher</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17243B] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value,
                          })
                        }
                        placeholder="learner@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-white text-[#17243B] focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17243B] mb-1.5">
                        How can we help?
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Share a question about a subject, experiment, or educational collaboration..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-white text-[#17243B] focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveInfoModal(null)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" variant="primary" size="sm">
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {activeInfoModal !== 'contact' && (
              <div className="flex justify-end pt-3 border-t border-[#E6EBF2]">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveInfoModal(null)}
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
