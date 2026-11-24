'use client';

import React, {useState} from 'react';
import {HelpCircle, Lightbulb, ChevronDown} from 'lucide-react';

export function ArticleReasoningChallenge({
  prompt,
  reasoningGuide,
}: {
  prompt: string;
  reasoningGuide: string;
}) {
  const [showReasoningGuide, setShowReasoningGuide] = useState(false);

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#FEF6EC] border border-[#F3A644]/50 space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B86E14] uppercase">
        <HelpCircle className="w-4 h-4" />
        <span>Interactive Reasoning Challenge</span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#17243B]">{prompt}</h3>

      <button
        type="button"
        onClick={() => setShowReasoningGuide((prev) => !prev)}
        aria-expanded={showReasoningGuide}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315BE8] hover:text-[#2548C9] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8] rounded-xs"
      >
        <Lightbulb className="w-3.5 h-3.5" />
        <span>
          {showReasoningGuide
            ? 'Hide First-Principles Reasoning Guide'
            : 'Reveal First-Principles Reasoning Guide'}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-150 ${
            showReasoningGuide ? 'rotate-180' : ''
          }`}
        />
      </button>

      {showReasoningGuide && (
        <div className="p-4 rounded-xl bg-white border border-[#F3A644]/40 text-xs sm:text-sm text-[#17243B] leading-relaxed">
          <strong>First-Principles Guide: </strong>
          {reasoningGuide}
        </div>
      )}
    </div>
  );
}
