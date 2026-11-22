/**
 * Genustride Learn — Centralized Design Tokens & Architectural Constants
 * Philosophy: "Don't just learn what it is. Understand why it matters, how it works, and what you can do with it."
 * Principle: Understand -> Explore -> Apply -> Create
 */

export const BRAND_COLORS = {
  primary: {
    name: 'Brand Blue',
    hex: '#315BE8',
    hoverHex: '#2548C9',
    subtleHex: '#EEF3FF',
    usage: 'Brand identity, primary actions, structured conceptual frameworks, and active states.',
  },
  secondary: {
    name: 'Discovery Teal',
    hex: '#16A6A0',
    hoverHex: '#118883',
    subtleHex: '#EAF8F7',
    usage: 'Discovery, scientific observation, interactive exploration, and learning progression.',
  },
  accent: {
    name: 'Curiosity Amber',
    hex: '#F3A644',
    hoverHex: '#DC8E2C',
    subtleHex: '#FEF6EB',
    usage: 'Used sparingly for curiosity prompts, creative insights, and key experimental highlights.',
  },
  base: {
    white: {
      name: 'Pure Canvas White',
      hex: '#FFFFFF',
      usage: 'Dominant page background and clean elevated card surfaces.',
    },
    softBlue: {
      name: 'Soft Blue Surface',
      hex: '#F6F9FF',
      usage: 'Secondary section backdrops, structured learning callouts, and subtle contrast zones.',
    },
    mainText: {
      name: 'Deep Navy Ink',
      hex: '#17243B',
      usage: 'Primary headings, body copy, and high-contrast editorial typography.',
    },
    secondaryText: {
      name: 'Slate Editorial',
      hex: '#64748B',
      usage: 'Supporting explanations, captions, and unboxed metadata labels.',
    },
    border: {
      name: 'Hairline Structural Border',
      hex: '#E6EBF2',
      usage: 'Card boundaries, section dividers, and table/input hairlines.',
    },
  },
} as const;

export const LEARNING_STAGES = [
  {
    id: 'understand',
    step: '01',
    label: 'Understand',
    question: 'What is it & why does it matter?',
    description: 'Grasp the core concept and the real-world problem it solves before memorizing formulas.',
    accentColor: '#315BE8',
  },
  {
    id: 'explore',
    step: '02',
    label: 'Explore',
    question: 'How does it actually work?',
    description: 'Investigate the underlying mechanism through observations, models, and guided experiments.',
    accentColor: '#16A6A0',
  },
  {
    id: 'apply',
    step: '03',
    label: 'Apply',
    question: 'Where is it used in real life?',
    description: 'Connect academic principles to practical engineering, nature, industry, and everyday technology.',
    accentColor: '#315BE8',
  },
  {
    id: 'create',
    step: '04',
    label: 'Create',
    question: 'What can you build with it?',
    description: 'Synthesize knowledge to design new solutions, physical prototypes, or investigative projects.',
    accentColor: '#F3A644',
  },
] as const;

export type SubjectCategorySlug =
  | 'mathematics'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'technology'
  | 'engineering';

export interface SubjectCategoryToken {
  slug: SubjectCategorySlug;
  route: string;
  name: string;
  shortName: string;
  tagline: string;
  coreFocus: string;
  accentHex: string;
  exemplarTopics: string[];
}

export const SUBJECT_CATEGORIES: SubjectCategoryToken[] = [
  {
    slug: 'mathematics',
    route: '/learn/mathematics',
    name: 'Mathematics',
    shortName: 'Mathematics',
    tagline: 'Patterns, quantitative reasoning, and structural logic behind the physical and digital world.',
    coreFocus: 'Arithmetic, Algebra, Geometry, Trigonometry, Statistics, Probability, and Calculus.',
    accentHex: '#315BE8',
    exemplarTopics: ['Geometry & Architecture', 'Probability & Data Analysis', 'Calculus & Rates of Change'],
  },
  {
    slug: 'physics',
    route: '/learn/physics',
    name: 'Physics',
    shortName: 'Physics',
    tagline: 'Understand the forces, energy, waves, and laws that shape our physical universe.',
    coreFocus: 'Motion, Force, Energy, Electricity, Magnetism, Optics, and Thermodynamics.',
    accentHex: '#315BE8',
    exemplarTopics: ['Motion, Force & Energy', 'Electricity & Magnetism', 'Optics & Thermodynamics'],
  },
  {
    slug: 'chemistry',
    route: '/learn/chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    tagline: 'Atomic structure, chemical bonding, reactions, and materials that compose everyday life.',
    coreFocus: 'Atomic structure, Chemical bonding, Chemical reactions, Acids and bases, Materials, and Organic chemistry.',
    accentHex: '#16A6A0',
    exemplarTopics: ['Chemical Bonding & Reactions', 'Acids, Bases & Water Treatment', 'Electrochemistry & Batteries'],
  },
  {
    slug: 'biology',
    route: '/learn/biology',
    name: 'Biology & Life Science',
    shortName: 'Biology',
    tagline: 'Living cells, human physiology, genetics, microorganisms, and resilient ecosystems.',
    coreFocus: 'Cells, Human body, Genetics, Microorganisms, Ecology, and Evolution.',
    accentHex: '#16A6A0',
    exemplarTopics: ['Cells & Microorganisms', 'Human Body & Nutrition', 'Ecology & Agriculture'],
  },
  {
    slug: 'technology',
    route: '/learn/technology',
    name: 'Technology & Computing',
    shortName: 'Technology',
    tagline: 'Programming, computer systems, algorithms, networks, AI, and digital security.',
    coreFocus: 'Programming, Computer systems, Algorithms, Networking, Artificial Intelligence, and Cybersecurity.',
    accentHex: '#315BE8',
    exemplarTopics: ['Algorithms & Programming', 'Computer Systems & Networking', 'AI & Cybersecurity'],
  },
  {
    slug: 'engineering',
    route: '/learn/engineering',
    name: 'Engineering & Innovation',
    shortName: 'Engineering',
    tagline: 'Designing mechanical, electrical, civil, and robotic systems that solve human challenges.',
    coreFocus: 'Mechanical systems, Electrical systems, Civil engineering, Electronics, Robotics, and Design and manufacturing.',
    accentHex: '#F3A644',
    exemplarTopics: ['Bridges & Civil Structures', 'Electrical Systems & Renewables', 'Electronics, Robotics & Smart Devices'],
  },
];

export const TYPOGRAPHY_SCALE = [
  {
    role: 'Display Hero',
    font: 'Manrope (700 / Bold)',
    sizeClass: 'text-3xl sm:text-4xl lg:text-[2.75rem]',
    lineHeight: '1.15',
    tracking: '-0.025em',
    usage: 'Primary page headlines and core educational philosophy statements.',
  },
  {
    role: 'Section Heading (H2)',
    font: 'Manrope (700 / Bold)',
    sizeClass: 'text-2xl sm:text-3xl',
    lineHeight: '1.22',
    tracking: '-0.02em',
    usage: 'Major section anchors and modular learning domain headers.',
  },
  {
    role: 'Card & Concept Title (H3)',
    font: 'Manrope (600 / SemiBold)',
    sizeClass: 'text-lg sm:text-xl',
    lineHeight: '1.3',
    tracking: '-0.015em',
    usage: 'Subject cards, project titles, and concept question headers.',
  },
  {
    role: 'Editorial Body Lead',
    font: 'Inter (400 / Regular)',
    sizeClass: 'text-base sm:text-lg',
    lineHeight: '1.65',
    tracking: '0em',
    usage: 'Introductory concept summaries (65–72ch max measure).',
  },
  {
    role: 'Body Standard',
    font: 'Inter (400 / Regular)',
    sizeClass: 'text-[15px]',
    lineHeight: '1.65',
    tracking: '0em',
    usage: 'Card descriptions, experimental guides, and practical explanations.',
  },
  {
    role: 'Metadata & Scientific Notation',
    font: 'Inter (500) / JetBrains Mono',
    sizeClass: 'text-xs',
    lineHeight: '1.4',
    tracking: '0.01em',
    usage: 'Unboxed metadata rows, equations, units, and stage step numbers.',
  },
] as const;

export const RESPONSIVE_BREAKPOINTS = [
  {
    tier: 'Mobile',
    range: '320px – 767px',
    columns: '1-column stack',
    containerPadding: 'px-4 (16px)',
    behavior: 'Collapsible touch-friendly navigation drawer (>=44px targets), stacked cards, concise single-line buttons.',
  },
  {
    tier: 'Tablet',
    range: '768px – 1023px',
    columns: '2-column grid',
    containerPadding: 'px-6 (24px)',
    behavior: 'Balanced 2-column subject/project grids, adaptive horizontal resource cards, accessible touch/keyboard menus.',
  },
  {
    tier: 'Desktop',
    range: '1024px and above (1280px–1440px baseline)',
    columns: '3-column & asymmetric editorial splits',
    containerPadding: 'px-8 (32px), max-w-7xl (1280px)',
    behavior: '3-zone top navigation bar with live dropdown panels, generous whitespace rhythm, and subtle ambient radial lighting.',
  },
] as const;
