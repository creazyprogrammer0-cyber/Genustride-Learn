'use client';

import React, {useState} from 'react';
import {ChevronDown, HelpCircle} from 'lucide-react';

export interface ParentsFaqItem {
  question: string;
  answer: string;
}

export function ParentsFaqAccordion({items}: {items: ParentsFaqItem[]}) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openFaqIndex === idx;
        return (
          <div
            key={item.question}
            className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F6F9FF]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#315BE8]"
            >
              <span className="text-base font-bold text-[#17243B] flex items-start gap-3">
                <HelpCircle
                  className="w-5 h-5 text-[#315BE8] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-150 ${
                  isOpen ? 'rotate-180 text-[#315BE8]' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-[#E6EBF2] text-sm sm:text-[15px] text-[#64748B] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
