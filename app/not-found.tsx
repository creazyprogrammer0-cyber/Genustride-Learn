import React from 'react';
import Link from 'next/link';
import {Compass, BookOpen, FlaskConical, Sparkles, ArrowLeft} from 'lucide-react';
import {Navbar, Footer, KickerLabel} from '@/components/design-system';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243B]">
      <Navbar
        primaryCtaLabel="Explore Learning"
        primaryCtaHref="/learn"
      />

      <main
        id="main-content"
        className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl w-full rounded-2xl bg-[#F6F9FF] border border-[#E6EBF2] p-8 sm:p-10 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#315BE8] mx-auto shadow-2xs">
            <Compass className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <KickerLabel label="404 · PAGE NOT FOUND" tone="primary" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17243B] tracking-tight">
              We Could Not Find That Learning Page.
            </h1>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg mx-auto">
              The concept guide, subject hub, or experiment you are looking for
              may have moved. Choose one of our core destinations below to
              continue exploring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/learn"
              className="p-4 rounded-xl bg-white border border-[#E6EBF2] hover:border-[#315BE8] transition-colors space-y-1.5"
            >
              <BookOpen className="w-4 h-4 text-[#315BE8]" />
              <div className="text-xs font-bold text-[#17243B]">
                Explore Learning
              </div>
              <p className="text-[11px] text-[#64748B]">
                Browse 6 core STEM subjects
              </p>
            </Link>

            <Link
              href="/projects"
              className="p-4 rounded-xl bg-white border border-[#E6EBF2] hover:border-[#315BE8] transition-colors space-y-1.5"
            >
              <FlaskConical className="w-4 h-4 text-[#16A6A0]" />
              <div className="text-xs font-bold text-[#17243B]">
                Experiments & Projects
              </div>
              <p className="text-[11px] text-[#64748B]">
                16-part hands-on lab guides
              </p>
            </Link>

            <Link
              href="/resources"
              className="p-4 rounded-xl bg-white border border-[#E6EBF2] hover:border-[#315BE8] transition-colors space-y-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#F3A644]" />
              <div className="text-xs font-bold text-[#17243B]">
                Learning Resources
              </div>
              <p className="text-[11px] text-[#64748B]">
                Articles & concept explainers
              </p>
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#315BE8] hover:bg-[#2548C9] text-white text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Genustride Learn Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
