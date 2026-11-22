'use client';

import React from 'react';
import {SUBJECT_CATEGORIES, LEARNING_STAGES} from '@/lib/design-tokens';

export interface FooterProps {
  onSelectLink?: (id: string, label: string) => void;
}

export function Footer({onSelectLink}: FooterProps) {
  return (
    <footer className="bg-white border-t border-[#E6EBF2] text-[#17243B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Philosophy Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xl font-extrabold tracking-tight text-[#17243B]">
              Genustride Learn
            </div>
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

          {/* Initial Subject Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
              Subject Categories
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              {SUBJECT_CATEGORIES.map((subject) => (
                <li key={subject.slug}>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectLink?.(`subject-${subject.slug}`, subject.name)
                    }
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    {subject.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Sections */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
              Learning Platform
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              {[
                {id: 'explore-learning', label: 'Explore Learning'},
                {id: 'how-it-works', label: 'How It Works'},
                {id: 'experiments-projects', label: 'Experiments & Projects'},
                {id: 'learning-resources', label: 'Learning Resources'},
                {id: 'parents-educators', label: 'For Parents & Educators'},
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onSelectLink?.(link.id, link.label)}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization & Focus */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-[#17243B] tracking-wide">
              About & Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              {[
                {id: 'about-us', label: 'About Us'},
                {id: 'philosophy', label: 'Educational Philosophy'},
                {id: 'contact', label: 'Contact'},
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onSelectLink?.(link.id, link.label)}
                    className="hover:text-[#315BE8] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Regional Focus Bar */}
        <div className="mt-12 pt-6 border-t border-[#E6EBF2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {new Date().getFullYear()} Genustride Learn. Concept-driven
            practical education.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span>Initial Focus: Bangladesh</span>
            <span aria-hidden="true">·</span>
            <span>English-First Public Learning Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
