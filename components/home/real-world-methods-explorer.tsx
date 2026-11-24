'use client';

import React, {useState} from 'react';
import {ArrowRight} from 'lucide-react';
import {Button, KickerLabel, ImageContainer} from '@/components/design-system';

export interface RealWorldMethodItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  exampleConnection: string;
  imageSrc: string;
  imageAlt: string;
}

const METHOD_DESTINATION_MAP: Record<
  string,
  {href: string; actionLabel: string; stageConnection: string}
> = {
  'real-world-examples': {
    href: '/resources',
    actionLabel: 'Explore Concept Articles (/resources)',
    stageConnection: 'Stage 01–02 · Understand & Explore',
  },
  'visual-explanations': {
    href: '/how-it-works',
    actionLabel: 'Inspect Our 4-Step Framework (/how-it-works)',
    stageConnection: 'Stage 02 · Mechanism & Intuition',
  },
  'practical-projects': {
    href: '/projects',
    actionLabel: 'Open 16-Part Experiment Guides (/projects)',
    stageConnection: 'Stage 03–04 · Apply & Create',
  },
  'interactive-exploration': {
    href: '/learn',
    actionLabel: 'Explore All 6 Subject Hubs (/learn)',
    stageConnection: 'All Stages · Cross-Disciplinary Inquiry',
  },
};

export function RealWorldMethodsExplorer({
  methods,
}: {
  methods: readonly RealWorldMethodItem[];
}) {
  const [activeMethodId, setActiveMethodId] = useState<string>(
    methods[0]?.id || 'real-world-examples'
  );

  const activeMethod =
    methods.find((m) => m.id === activeMethodId) || methods[0];
  const activeMethodRoute =
    METHOD_DESTINATION_MAP[activeMethod.id] ||
    METHOD_DESTINATION_MAP['real-world-examples'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left 5 Columns: 4 Method Selectors */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
        {methods.map((method) => {
          const isSelected = method.id === activeMethod.id;
          const meta = METHOD_DESTINATION_MAP[method.id];
          return (
            <button
              key={method.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setActiveMethodId(method.id)}
              className={`w-full text-left rounded-xl p-5 transition-colors border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] ${
                isSelected
                  ? 'bg-white border-[#315BE8] shadow-xs'
                  : 'bg-white/75 border-[#E6EBF2] hover:bg-white hover:border-[#315BE8]/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-mono tabular-nums text-xs font-semibold text-[#315BE8]">
                  Method {method.index}
                </span>
                <span className="text-xs text-[#16A6A0] font-medium">
                  {meta?.stageConnection}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#17243B]">
                {method.title}
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                {method.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Right 7 Columns: Featured Authentic Photography & Context */}
      <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <KickerLabel
              index={`Method ${activeMethod.index}`}
              label={activeMethod.title}
              tone="primary"
            />
            <span className="text-xs font-medium text-[#16A6A0]">
              {activeMethod.exampleConnection}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#17243B] tracking-tight">
            {activeMethod.subtitle}
          </h3>

          <ImageContainer
            src={activeMethod.imageSrc}
            alt={activeMethod.imageAlt}
            aspectRatio="16:9"
            rounded="xl"
          />

          <p className="text-[15px] text-[#64748B] leading-relaxed pt-1">
            {activeMethod.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#17243B] font-medium">
            <span className="text-[#64748B]">Exemplar Focus: </span>
            {activeMethod.exampleConnection}
          </div>
          <Button
            variant="subtle"
            size="sm"
            href={activeMethodRoute.href}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            {activeMethodRoute.actionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
