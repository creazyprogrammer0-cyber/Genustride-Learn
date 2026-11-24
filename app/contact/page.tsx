'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  Mail,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  RotateCcw,
  BookOpen,
  FlaskConical,
  Users,
  Sparkles,
} from 'lucide-react';
import {
  Navbar,
  Footer,
  Button,
  KickerLabel,
  Breadcrumbs,
  SectionHeading,
} from '@/components/design-system';

export type InquiryCategory =
  | 'Concept or Subject Question'
  | 'Experiment or Project Feedback'
  | 'Educator & School Collaboration'
  | 'Parent Inquiry'
  | 'Content Suggestion or Correction'
  | 'General Inquiry';

const INQUIRY_CATEGORIES: {
  label: InquiryCategory;
  description: string;
}[] = [
  {
    label: 'Concept or Subject Question',
    description:
      'Ask about a scientific principle, mathematical derivation, or concept explainer.',
  },
  {
    label: 'Experiment or Project Feedback',
    description:
      'Share your observation log observations or suggest a hands-on activity.',
  },
  {
    label: 'Educator & School Collaboration',
    description:
      'Discuss using Genustride Learn frameworks in classrooms or workshops.',
  },
  {
    label: 'Parent Inquiry',
    description:
      'Questions about supporting conceptual learning and safe home experiments.',
  },
  {
    label: 'Content Suggestion or Correction',
    description:
      'Propose a new topic or report a scientific/typographical improvement.',
  },
  {
    label: 'General Inquiry',
    description:
      'Any other thought, idea, or question for the Genustride Learn initiative.',
  },
];

interface ContactFormValues {
  name: string;
  email: string;
  category: InquiryCategory;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const router = useRouter();

  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    category: 'Concept or Subject Question',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [validatedSubmission, setValidatedSubmission] =
    useState<ContactFormValues | null>(null);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const validateField = (
    values: ContactFormValues
  ): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (values.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(values.email.trim())) {
      newErrors.email =
        'Please enter a valid email address (e.g., learner@example.com).';
    }

    if (!values.subject.trim()) {
      newErrors.subject = 'Please provide a clear subject line.';
    } else if (values.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters long.';
    }

    if (!values.message.trim()) {
      newErrors.message = 'Please write your question, idea, or message.';
    } else if (values.message.trim().length < 20) {
      newErrors.message =
        'Please provide at least 20 characters so we can understand your inquiry clearly.';
    }

    return newErrors;
  };

  const handleFieldChange = (
    field: keyof ContactFormValues,
    value: string
  ) => {
    const updated = {...formValues, [field]: value} as ContactFormValues;
    setFormValues(updated);
    setValidatedSubmission(null);
    if (touched[field]) {
      setErrors(validateField(updated));
    }
  };

  const handleFieldBlur = (field: keyof ContactFormValues) => {
    setTouched((prev) => ({...prev, [field]: true}));
    setErrors(validateField(formValues));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validateField(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setValidatedSubmission({...formValues});
      setCopiedToClipboard(false);
    }
  };

  const formatInquiryPayload = (data: ContactFormValues) => {
    return [
      `GENUSTRIDE LEARN INQUIRY`,
      `------------------------`,
      `Category: ${data.category}`,
      `From: ${data.name.trim()} <${data.email.trim()}>`,
      `Subject: ${data.subject.trim()}`,
      ``,
      `Message:`,
      data.message.trim(),
    ].join('\n');
  };

  const handleCopyInquiry = async () => {
    if (!validatedSubmission) return;
    try {
      await navigator.clipboard.writeText(
        formatInquiryPayload(validatedSubmission)
      );
      setCopiedToClipboard(true);
    } catch {
      setCopiedToClipboard(false);
    }
  };

  const buildMailtoHref = (data: ContactFormValues) => {
    const subjectEncoded = encodeURIComponent(
      `[${data.category}] ${data.subject.trim()}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${data.name.trim()}\nEmail: ${data.email.trim()}\nInquiry Category: ${data.category}\n\n${data.message.trim()}`
    );
    return `mailto:contact@genustride.org?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        activeSection="contact"
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      <main id="main-content" className="flex-1">
        {/* =====================================================================
            HERO SECTION
            Headline: "Have a Question, Idea, or Something to Share?"
           ===================================================================== */}
        <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-12 lg:pb-16 border-b border-[#E6EBF2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ambient-glow-hero"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Breadcrumbs
              items={[
                {id: 'home', label: 'Home', href: '/'},
                {id: 'contact', label: 'Contact', current: true},
              ]}
              onNavigate={(item) => {
                if (item.href) router.push(item.href);
              }}
            />

            <div className="max-w-3xl space-y-4">
              <KickerLabel
                label="CONTACT GENUSTRIDE LEARN · QUESTIONS, IDEAS & FEEDBACK"
                tone="primary"
              />
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17243B] tracking-tight leading-[1.08]">
                Have a Question, Idea, or Something to Share?
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Whether you have a question about a scientific explanation, an
                observation from an experiment you tried, or an idea for
                collaborating with students and educators in Bangladesh, we
                welcome your thoughts.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            MAIN CONTACT FORM & INQUIRY CATEGORIES SECTION
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-[#F6F9FF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Inquiry Categories Guide & Transparency Note */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-7 space-y-5">
                  <div className="space-y-1.5">
                    <KickerLabel label="INQUIRY CATEGORIES" tone="secondary" />
                    <h2 className="text-xl font-bold text-[#17243B]">
                      Select What You Would Like to Discuss
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      Click any category below to pre-select it in the form.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {INQUIRY_CATEGORIES.map((cat) => {
                      const isSelected = formValues.category === cat.label;
                      return (
                        <button
                          key={cat.label}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() =>
                            handleFieldChange('category', cat.label)
                          }
                          className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                            isSelected
                              ? 'bg-[#F6F9FF] border-[#315BE8] ring-1 ring-[#315BE8]/30'
                              : 'bg-white border-[#E6EBF2] hover:border-[#315BE8]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs sm:text-sm font-bold text-[#17243B]">
                              {cat.label}
                            </span>
                            {isSelected && (
                              <span className="text-[11px] font-mono font-bold text-[#315BE8]">
                                SELECTED
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#64748B] mt-1">
                            {cat.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Honest Delivery Status Notice */}
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-6 space-y-2.5">
                  <div className="text-xs font-mono font-bold text-[#315BE8] uppercase">
                    Transparent Delivery Notice
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    In accordance with our commitment to honesty, please note
                    that this public preview environment does not connect to a
                    live background email server. When you validate your form,
                    we generate a clean, ready-to-send inquiry package that you
                    can copy or open directly in your email client.
                  </p>
                </div>
              </div>

              {/* Right Column: Client-Validated Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white border border-[#E6EBF2] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
                  <div className="space-y-1.5 border-b border-[#E6EBF2] pb-4">
                    <KickerLabel label="WRITE YOUR INQUIRY" tone="primary" />
                    <h2 className="text-2xl font-bold text-[#17243B]">
                      Prepare Your Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold text-[#17243B]"
                        >
                          Your Name <span className="text-[#315BE8]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formValues.name}
                          onChange={(e) =>
                            handleFieldChange('name', e.target.value)
                          }
                          onBlur={() => handleFieldBlur('name')}
                          placeholder="e.g., Farhana Ahmed"
                          aria-invalid={Boolean(touched.name && errors.name)}
                          aria-describedby={
                            touched.name && errors.name
                              ? 'contact-name-error'
                              : undefined
                          }
                          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 ${
                            touched.name && errors.name
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-[#E6EBF2] focus:ring-[#315BE8]'
                          }`}
                        />
                        {touched.name && errors.name && (
                          <p
                            id="contact-name-error"
                            role="alert"
                            className="text-xs text-red-600 flex items-center gap-1 pt-0.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold text-[#17243B]"
                        >
                          Email Address{' '}
                          <span className="text-[#315BE8]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formValues.email}
                          onChange={(e) =>
                            handleFieldChange('email', e.target.value)
                          }
                          onBlur={() => handleFieldBlur('email')}
                          placeholder="learner@example.com"
                          aria-invalid={Boolean(touched.email && errors.email)}
                          aria-describedby={
                            touched.email && errors.email
                              ? 'contact-email-error'
                              : undefined
                          }
                          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 ${
                            touched.email && errors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-[#E6EBF2] focus:ring-[#315BE8]'
                          }`}
                        />
                        {touched.email && errors.email && (
                          <p
                            id="contact-email-error"
                            role="alert"
                            className="text-xs text-red-600 flex items-center gap-1 pt-0.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Inquiry Category Select */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-category"
                        className="block text-xs font-bold text-[#17243B]"
                      >
                        Inquiry Category{' '}
                        <span className="text-[#315BE8]">*</span>
                      </label>
                      <select
                        id="contact-category"
                        value={formValues.category}
                        onChange={(e) =>
                          handleFieldChange(
                            'category',
                            e.target.value as InquiryCategory
                          )
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E6EBF2] bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315BE8]"
                      >
                        {INQUIRY_CATEGORIES.map((cat) => (
                          <option key={cat.label} value={cat.label}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-bold text-[#17243B]"
                      >
                        Subject <span className="text-[#315BE8]">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formValues.subject}
                        onChange={(e) =>
                          handleFieldChange('subject', e.target.value)
                        }
                        onBlur={() => handleFieldBlur('subject')}
                        placeholder="e.g., Question about the Water Filtration experiment flow rate"
                        aria-invalid={Boolean(
                          touched.subject && errors.subject
                        )}
                        aria-describedby={
                          touched.subject && errors.subject
                            ? 'contact-subject-error'
                            : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 ${
                          touched.subject && errors.subject
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#E6EBF2] focus:ring-[#315BE8]'
                        }`}
                      />
                      {touched.subject && errors.subject && (
                        <p
                          id="contact-subject-error"
                          role="alert"
                          className="text-xs text-red-600 flex items-center gap-1 pt-0.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-bold text-[#17243B]"
                        >
                          Message <span className="text-[#315BE8]">*</span>
                        </label>
                        <span className="text-[11px] font-mono text-[#64748B]">
                          {formValues.message.trim().length} chars (min 20)
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={formValues.message}
                        onChange={(e) =>
                          handleFieldChange('message', e.target.value)
                        }
                        onBlur={() => handleFieldBlur('message')}
                        placeholder="Share the details of your question, observation, or collaboration idea..."
                        aria-invalid={Boolean(
                          touched.message && errors.message
                        )}
                        aria-describedby={
                          touched.message && errors.message
                            ? 'contact-message-error'
                            : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-[#F6F9FF] text-[#17243B] focus:bg-white focus:outline-none focus:ring-2 ${
                          touched.message && errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#E6EBF2] focus:ring-[#315BE8]'
                        }`}
                      />
                      {touched.message && errors.message && (
                        <p
                          id="contact-message-error"
                          role="alert"
                          className="text-xs text-red-600 flex items-center gap-1 pt-0.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit & Reset Controls */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setFormValues({
                            name: '',
                            email: '',
                            category: 'Concept or Subject Question',
                            subject: '',
                            message: '',
                          });
                          setErrors({});
                          setTouched({});
                          setValidatedSubmission(null);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#17243B] cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset Form</span>
                      </button>

                      <Button type="submit" variant="primary" size="lg">
                        Validate & Prepare Inquiry
                      </Button>
                    </div>
                  </form>

                  {/* Honest Post-Validation Panel (Does NOT pretend automatic server delivery occurred) */}
                  {validatedSubmission && (
                    <div className="mt-6 p-6 rounded-2xl bg-[#F6F9FF] border-2 border-[#315BE8] space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#16A6A0] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-[#17243B]">
                            Inquiry Validated Locally — Ready to Send or Copy
                          </h3>
                          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                            <strong className="text-[#17243B]">
                              Important Status Notice:
                            </strong>{' '}
                            No automated backend email service is connected to
                            this preview environment, so your message has{' '}
                            <strong className="text-[#17243B]">not</strong> been
                            silently transmitted over a server. Use either option
                            below to open your pre-filled inquiry in your email
                            client or copy the formatted text to your clipboard.
                          </p>
                        </div>
                      </div>

                      <pre className="p-4 rounded-xl bg-white border border-[#E6EBF2] text-xs font-mono text-[#17243B] whitespace-pre-wrap overflow-x-auto">
                        {formatInquiryPayload(validatedSubmission)}
                      </pre>

                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={buildMailtoHref(validatedSubmission)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#315BE8] hover:bg-[#2548C9] text-white text-xs font-semibold transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App (mailto:)</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyInquiry}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#EAF8F7] text-[#17243B] border border-[#E6EBF2] text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Copy className="w-3.5 h-3.5 text-[#16A6A0]" />
                          <span>
                            {copiedToClipboard
                              ? '✓ Copied to Clipboard'
                              : 'Copy Formatted Inquiry'}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            HELPFUL QUICK ROUTES WHILE YOU ARE HERE
           ===================================================================== */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeading
              kicker="QUICK LINKS"
              kickerTone="secondary"
              title="Looking for a Specific Learning Guide?"
              description="Jump directly to our core learning sections."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Explore Learning Hub',
                  desc: 'Browse all six core academic subjects and conceptual pathways.',
                  href: '/learn',
                  icon: BookOpen,
                },
                {
                  title: 'Experiments & Projects',
                  desc: '16-part step-by-step hands-on builds and observation logs.',
                  href: '/projects',
                  icon: FlaskConical,
                },
                {
                  title: 'Learning Resources',
                  desc: 'Articles across 7 categories of science, math, and reasoning.',
                  href: '/resources',
                  icon: Sparkles,
                },
                {
                  title: 'Parents & Educators',
                  desc: 'Guidance and FAQs for supporting conceptual understanding.',
                  href: '/for-parents-and-educators',
                  icon: Users,
                },
              ].map((card) => {
                const IconComp = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="p-5 rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] hover:border-[#315BE8] transition-all space-y-2.5 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#315BE8]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#17243B] group-hover:text-[#315BE8] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {card.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
