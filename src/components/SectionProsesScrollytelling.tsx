import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS, type ProcessStep } from '../data/processSteps';
import { ProcessStageSVG } from './scrollytelling/ProcessStageSVG';

gsap.registerPlugin(ScrollTrigger);

export const SectionProsesScrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const pinTarget = pinTargetRef.current;
      const container = containerRef.current;
      if (!pinTarget || !container) return;

      const totalSteps = PROCESS_STEPS.length;

      // Master ScrollTrigger yang mem-pin stage selama 800% viewport height
      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=700%',
        pin: pinTarget,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          // Hitung index langkah aktif (0 hingga 8) berdasarkan rasio progress scroll
          const progress = self.progress;
          const calculatedStep = Math.min(
            totalSteps - 1,
            Math.floor(progress * totalSteps)
          );
          setActiveStep(calculatedStep);
        },
      });

      scrollTriggerInstance.current = st;
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Jump to specific step by clicking on the vertical progress node
  const jumpToStep = (index: number) => {
    if (!scrollTriggerInstance.current) {
      // Fallback jika reduced motion
      const el = document.getElementById(`static-step-${index}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const st = scrollTriggerInstance.current;
    const totalSteps = PROCESS_STEPS.length;
    // Hitung posisi scroll absolut
    const targetScroll = st.start + ((index + 0.1) / totalSteps) * (st.end - st.start);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setActiveStep(index);
  };

  const currentStepData: ProcessStep = PROCESS_STEPS[activeStep] || PROCESS_STEPS[0];

  // =========================================================================
  // FALLBACK UNTUK PREFERS-REDUCED-MOTION (9 KARTU STATIS BERURUTAN)
  // =========================================================================
  if (isReducedMotion) {
    return (
      <section id="proses" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
            Alur Purifikasi 9 Tahap
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A211B]">
            9 Tahap Meja Kerja Pemurnian & Saponifikasi
          </h2>
          <p className="mt-3 text-sm text-[#1A211B]/80">
            Dari jelantah mentah hingga sabun cair hijau bening siap pakai.
          </p>
        </div>

        <div className="space-y-12">
          {PROCESS_STEPS.map((step: ProcessStep) => (
            <div
              key={step.stepNumber}
              id={`static-step-${step.step}`}
              className="p-8 rounded-2xl bg-[#F3EEDD] border-2 border-[#24402A]/20 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-bold text-[#5B7F3A]">{step.stepNumber}</span>
                  <span className="px-2.5 py-1 rounded text-xs font-bold bg-[#24402A] text-[#F3EEDD]">
                    {step.fluidLabel}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A211B]">{step.title}</h3>
                <p className="text-sm text-[#1A211B]/85 leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {step.chips.map((chip: string, cIdx: number) => (
                    <span key={cIdx} className="px-2.5 py-1 rounded bg-[#EAE4CE] text-[#24402A] text-xs font-semibold border border-[#24402A]/15">
                      {chip}
                    </span>
                  ))}
                </div>
                {step.fieldNote && (
                  <div className="font-handwriting text-lg text-[#5B7F3A]">✎ {step.fieldNote}</div>
                )}
              </div>
              <div className="lg:col-span-6">
                <ProcessStageSVG currentStep={step.step} stepData={step} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // =========================================================================
  // STANDARD SCROLLYTELLING INTERAKTIF (PINNED 100VH + MEJA KERJA SVG)
  // =========================================================================
  return (
    <div id="proses" ref={containerRef} className="relative w-full">
      {/* Target Pin Penuh 100vh */}
      <div
        ref={pinTargetRef}
        className="h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F3EEDD] border-y border-[#24402A]/15 py-6 sm:py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between">
          {/* Top Bar: Section Title & Live Fluid Status Badge */}
          <div className="flex items-center justify-between border-b border-[#24402A]/15 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#24402A] text-[#F3EEDD] font-mono text-xs font-bold">
                LANGKAH {currentStepData.stepNumber} / 08
              </span>
              <span className="hidden sm:inline font-serif text-sm sm:text-base font-bold text-[#1A211B]">
                Alur Purifikasi & Saponifikasi Meja Kerja
              </span>
            </div>

            {/* Fluid State Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4CE] border border-[#24402A]/20">
              <span
                className="w-3.5 h-3.5 rounded-full shrink-0 border border-[#24402A]/40 transition-colors duration-500"
                style={{ backgroundColor: currentStepData.fluidColor }}
              />
              <span className="text-xs font-bold text-[#24402A]">
                {currentStepData.fluidLabel}
              </span>
              {currentStepData.temperature && (
                <span className="hidden md:inline text-[11px] font-mono text-[#6B4A2B] font-semibold border-l border-[#24402A]/20 pl-2">
                  {currentStepData.temperature}
                </span>
              )}
            </div>
          </div>

          {/* Main Scrollytelling Stage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 my-3 overflow-hidden">
            {/* Left Column (Desktop) / Bottom Column (Mobile): Step Information */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center space-y-4 z-10">
              {/* Huge Step Number */}
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#24402A] leading-none select-none">
                  {currentStepData.stepNumber}
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#5B7F3A]">
                  {currentStepData.shortSubtitle}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A211B] leading-snug">
                {currentStepData.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm md:text-base text-[#1A211B]/85 leading-relaxed">
                {currentStepData.description}
              </p>

              {/* Specification Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentStepData.chips.map((chip: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EAE4CE] text-[#24402A] text-xs font-semibold border border-[#24402A]/15 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B7F3A]" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* Hand-written Margin Field Note */}
              {currentStepData.fieldNote && (
                <div className="pt-2 font-handwriting text-xl text-[#5B7F3A] -rotate-1 select-none">
                  ✎ "{currentStepData.fieldNote}"
                </div>
              )}
            </div>

            {/* Center/Right Column: Pinned Interactive Saung Workbench SVG Stage */}
            <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center justify-center relative">
              <ProcessStageSVG
                currentStep={activeStep}
                stepData={currentStepData}
              />
            </div>
          </div>

          {/* Bottom Bar: 9-Node Clickable Interactive Timeline Navigation */}
          <div className="border-t border-[#24402A]/15 pt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#24402A]">
              <span className="uppercase tracking-wider">Tahapan Scrollytelling (Klik nomor untuk lompat):</span>
              <span className="text-[#5B7F3A]">
                {Math.round(((activeStep + 1) / PROCESS_STEPS.length) * 100)}% Selesai
              </span>
            </div>

            {/* 9 Interactive Clickable Step Nodes */}
            <div className="grid grid-cols-9 gap-1.5 sm:gap-2 w-full">
              {PROCESS_STEPS.map((step: ProcessStep, idx: number) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => jumpToStep(idx)}
                    title={`Lompat ke Langkah ${step.stepNumber}: ${step.title}`}
                    className={`group py-1.5 px-1 rounded flex flex-col items-center justify-center transition-all duration-200 border ${
                      isActive
                        ? 'bg-[#24402A] text-[#F3EEDD] border-[#24402A] shadow-sm scale-105'
                        : isPassed
                        ? 'bg-[#EAE4CE] text-[#24402A] border-[#5B7F3A]/40 hover:bg-[#24402A]/10'
                        : 'bg-[#F3EEDD] text-[#1A211B]/60 border-[#24402A]/20 hover:border-[#24402A]/50'
                    }`}
                  >
                    <span className="font-mono text-[11px] sm:text-xs font-bold">
                      {step.stepNumber}
                    </span>
                    <span className="hidden md:inline text-[9px] truncate max-w-full font-medium mt-0.5">
                      {step.chips[0]?.split(' ')[0] || step.stepNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
