'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {X, CheckCircle2, Send} from 'lucide-react';
import {SUBJECT_CATEGORIES, LEARNING_STAGES} from '@/lib/design-tokens';
import {Button} from '@/components/ui/button';
import {KickerLabel} from '@/components/ui/badge-label';

export interface FooterProps {
  onSelectLink?: (id: string, label: string) => void;
}

type InfoModalType = 'about' | 'privacy' | 'terms' | 'contact' | null;

export function Footer({onSelectLink}: FooterProps) {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<InfoModalType>(null);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactRole, setContactRole] = useState('Student / Independent Learner');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const navigateToSection = (sectionId: string, label: string) => {
    onSelectLink?.(sectionId, label);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      return;
    }
    setContactSubmitted(true);
  };

  const resetAndOpenContact = () => {
    setContactSubmitted(false);
    setActiveModal('contact');
  };

  return (
    <>
      <footer className="bg-white border-t border-[#E6EBF2] text-[#17243B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Identity & Philosophy Column */}
            <div className="lg:col-span-4 space-y-4">
              <Link
                href="/"
                className="inline-block text-xl font-extrabold tracking-tight text-[#17243B] hover:text-[#315BE8] transition-colors"
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
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                {SUBJECT_CATEGORIES.map((subject) => (
                  <li key={subject.slug}>
                    <Link
                      href={`/subjects/${subject.slug}`}
                      className="hover:text-[#315BE8] transition-colors block"
                    >
                      {subject.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: About & Column 3: For Learners */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                  About
                </h3>
                <ul className="space-y-2.5 text-sm text-[#64748B]">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveModal('about')}
                      className="hover:text-[#315BE8] transition-colors text-left"
                    >
                      About Genustride Learn
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(
                          'learning-philosophy',
                          'Our Learning Philosophy'
                        )
                      }
                      className="hover:text-[#315BE8] transition-colors text-left"
                    >
                      Our Learning Philosophy
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(
                          'bangladesh-vision',
                          'Our Vision for Bangladesh'
                        )
                      }
                      className="hover:text-[#315BE8] transition-colors text-left"
                    >
                      Our Vision for Bangladesh
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                  For Learners
                </h3>
                <ul className="space-y-2.5 text-sm text-[#64748B]">
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(
                          'how-learning-happens',
                          'How Learning Happens'
                        )
                      }
                      className="hover:text-[#315BE8] transition-colors text-left"
                    >
                      How Learning Actually Happens
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(
                          'real-world-learning',
                          'Real-World Learning'
                        )
                      }
                      className="hover:text-[#315BE8] transition-colors text-left"
                    >
                      Experiments & Practical Projects
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(
                          'skills-beyond-classroom',
                          'Skills Beyond the Classroom'
                        )
                      }
                      className="hover:text-[#315BE8] transition-colors text-left"
                    >
                      Skills Beyond Academic Knowledge
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Information */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
                Information
              </h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('terms')}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={resetAndOpenContact}
                    className="hover:text-[#315BE8] transition-colors text-left font-medium text-[#17243B]"
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
              practical learning platform.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="hover:text-[#315BE8] transition-colors"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setActiveModal('terms')}
                className="hover:text-[#315BE8] transition-colors"
              >
                Terms of Use
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={resetAndOpenContact}
                className="hover:text-[#315BE8] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Information & Contact Modal Dialogs */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17243B]/45 backdrop-blur-xs"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E6EBF2] pb-4">
              <div>
                <KickerLabel
                  label={
                    activeModal === 'about'
                      ? 'ABOUT GENUSTRIDE LEARN'
                      : activeModal === 'privacy'
                        ? 'PRIVACY POLICY'
                        : activeModal === 'terms'
                          ? 'TERMS OF USE'
                          : 'CONTACT GENUSTRIDE LEARN'
                  }
                  tone="primary"
                />
                <h2
                  id="footer-modal-title"
                  className="mt-1 text-xl sm:text-2xl font-bold text-[#17243B]"
                >
                  {activeModal === 'about' &&
                    'Connecting Academic Knowledge with Real-World Understanding'}
                  {activeModal === 'privacy' && 'Privacy & Data Stewardship'}
                  {activeModal === 'terms' &&
                    'Educational Content & Platform Terms'}
                  {activeModal === 'contact' &&
                    'Get in Touch with Genustride Learn'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close dialog"
                className="min-h-[40px] min-w-[40px] rounded-lg border border-[#E6EBF2] flex items-center justify-center text-[#64748B] hover:text-[#17243B] hover:bg-[#F6F9FF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeModal === 'about' && (
              <div className="space-y-4 text-sm text-[#64748B] leading-relaxed">
                <p className="text-[#17243B] font-medium">
                  Genustride Learn is a concept-driven online learning platform
                  designed to help school, college, university, and independent
                  learners move beyond rote memorization.
                </p>
                <p>
                  We organize knowledge around four core stages:{' '}
                  <strong className="text-[#17243B]">
                    Understand → Explore → Apply → Create
                  </strong>
                  . Every topic explains what a concept is, why it matters, how
                  the underlying mechanism works, where it appears in real life,
                  and how learners can experiment with it.
                </p>
                <p>
                  With an initial focus on learners in Bangladesh and an
                  international-standard English-first curriculum architecture,
                  our mission is to cultivate scientific curiosity, practical
                  problem-solving, and independent thinking.
                </p>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4 text-sm text-[#64748B] leading-relaxed">
                <p className="text-[#17243B] font-medium">
                  Genustride Learn respects the privacy of students, educators,
                  parents, and independent learners.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-[#17243B]">
                      Public Learning Exploration:
                    </strong>{' '}
                    You can browse our public subject guides, conceptual
                    breakdowns, and experiment workflows without creating an
                    account.
                  </li>
                  <li>
                    <strong className="text-[#17243B]">
                      Contact Inquiries:
                    </strong>{' '}
                    Information submitted through our contact form is used
                    solely to respond to your educational or partnership inquiry.
                  </li>
                  <li>
                    <strong className="text-[#17243B]">
                      No Third-Party Data Selling:
                    </strong>{' '}
                    We never sell learner data or display intrusive third-party
                    advertising.
                  </li>
                </ul>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="space-y-4 text-sm text-[#64748B] leading-relaxed">
                <p className="text-[#17243B] font-medium">
                  By accessing Genustride Learn, you agree to use our learning
                  materials responsibly for educational and non-commercial study.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-[#17243B]">
                      Laboratory & Experiment Safety:
                    </strong>{' '}
                    Hands-on observations and experiments should be performed
                    with appropriate supervision, protective equipment, and care.
                  </li>
                  <li>
                    <strong className="text-[#17243B]">
                      Conceptual Integrity:
                    </strong>{' '}
                    Our guides are designed to foster genuine comprehension and
                    independent problem-solving rather than rote exam shortcuts.
                  </li>
                </ul>
              </div>
            )}

            {activeModal === 'contact' && (
              <div>
                {contactSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#EAF8F7] border border-[#16A6A0]/30 space-y-3 text-center">
                    <CheckCircle2 className="w-8 h-8 text-[#16A6A0] mx-auto" />
                    <h3 className="text-lg font-bold text-[#17243B]">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm text-[#64748B]">
                      We have received your message from{' '}
                      <strong className="text-[#17243B]">{contactName}</strong>{' '}
                      ({contactRole}) and will respond to{' '}
                      <strong className="text-[#17243B]">{contactEmail}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#17243B] mb-1.5"
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g., Tahmid Rahman"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#17243B] mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="learner@example.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-role"
                        className="block text-xs font-semibold text-[#17243B] mb-1.5"
                      >
                        I am contacting as a
                      </label>
                      <select
                        id="contact-role"
                        value={contactRole}
                        onChange={(e) => setContactRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                      >
                        <option value="Student / Independent Learner">
                          Student / Independent Learner
                        </option>
                        <option value="Parent / Guardian">
                          Parent / Guardian
                        </option>
                        <option value="School / College / University Educator">
                          School / College / University Educator
                        </option>
                        <option value="Curriculum & Science Collaborator">
                          Curriculum & Science Collaborator
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#17243B] mb-1.5"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Share a question about a subject, suggest an experiment, or inquire about Genustride Learn..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveModal(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        rightIcon={<Send className="w-3.5 h-3.5" />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {activeModal !== 'contact' && (
              <div className="flex justify-end pt-2 border-t border-[#E6EBF2]">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveModal(null)}
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
