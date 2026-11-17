import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS_MASALAH } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export const SectionMasalah: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal on scroll untuk stat blocks asimetris
      const stats = [stat1Ref.current, stat2Ref.current, stat3Ref.current];

      stats.forEach((stat, index) => {
        if (!stat) return;
        gsap.from(stat, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="masalah"
      className="relative py-24 sm:py-32 border-t border-[#24402A]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Editorial Asymmetric Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#6B4A2B]/10 border border-[#6B4A2B]/20 text-[#6B4A2B] text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6B4A2B]" />
              Fakta & Observasi Lapangan
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-[1.15]">
              Realita di Balik Gurihnya Gorengan & Dapur Usaha Bojongsoang
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-base text-[#1A211B]/80 leading-relaxed">
              Di sepanjang Jalan Telekomunikasi, Sukabirus, hingga Baleendah, puluhan gerai kuliner mikro beroperasi setiap hari.
              Namun ke mana perginya minyak goreng sisa yang sudah hitam pekat?
            </p>
            {/* Field Note Caveat */}
            <div className="mt-3 font-handwriting text-xl text-[#6B4A2B] select-none -rotate-1">
              ✎ Catatan observasi 30 warung kuliner di Bojongsoang–Dayeuhkolot
            </div>
          </div>
        </div>

        {/* 3 Asymmetric Stats (NON-IDENTICAL CARDS - Strict Anti-Slop Rule) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Stat 1: Wide Anchor Block (Volume Jelantah) */}
          <div
            ref={stat1Ref}
            className="lg:col-span-5 bg-[#F3EEDD] border-2 border-[#6B4A2B]/30 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-[2px_4px_0_rgba(107,74,43,0.15)] relative overflow-hidden"
          >
            {/* Visual Texture: Hand-drawn Oil Canister SVG */}
            <div className="absolute -right-4 -bottom-4 w-36 h-36 opacity-10 pointer-events-none text-[#6B4A2B]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M30 20 L70 20 L75 90 L25 90 Z" />
                <rect x="40" y="10" width="20" height="10" />
                <path d="M20 35 L10 40 L10 65 L22 60" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>

            <div>
              <div className="flex items-baseline gap-2 text-[#6B4A2B]">
                <span className="font-serif text-5xl sm:text-6xl font-bold tracking-tight">
                  {STATS_MASALAH[0].number}
                </span>
                <span className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
                  {STATS_MASALAH[0].unit}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#1A211B]">
                {STATS_MASALAH[0].title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#1A211B]/80 leading-relaxed">
                {STATS_MASALAH[0].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#6B4A2B]/20 flex items-center justify-between text-xs font-medium text-[#6B4A2B]">
              <span>Rata-rata akumulasi per bulan</span>
              <span className="font-mono font-bold">1 gerai = 15 L</span>
            </div>
          </div>

          {/* Stat 2: High Impact Block (Penyumbatan Selokan) */}
          <div
            ref={stat2Ref}
            className="lg:col-span-4 bg-[#24402A] text-[#F3EEDD] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden"
          >
            {/* Clogged Drain Infographic SVG in background */}
            <div className="absolute right-0 top-0 bottom-0 w-24 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 300" fill="none" className="h-full w-full">
                <rect x="20" y="0" width="60" height="300" stroke="#F3EEDD" strokeWidth="4" />
                {/* Fatberg clumps */}
                <ellipse cx="50" cy="120" rx="25" ry="40" fill="#D79A22" />
                <ellipse cx="50" cy="200" rx="28" ry="35" fill="#D79A22" />
              </svg>
            </div>

            <div>
              <div className="flex items-baseline gap-2 text-[#A9C23F]">
                <span className="font-serif text-5xl sm:text-6xl font-bold tracking-tight">
                  {STATS_MASALAH[1].number}
                </span>
                <span className="text-sm sm:text-base font-semibold uppercase tracking-wider">
                  Saluran Berisiko
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#F3EEDD]">
                {STATS_MASALAH[1].title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#F3EEDD]/85 leading-relaxed">
                {STATS_MASALAH[1].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F3EEDD]/20">
              <span className="inline-block px-2.5 py-1 rounded bg-[#A9C23F]/20 text-[#A9C23F] text-xs font-semibold">
                Lemak beku menyumbat drainase pemukiman
              </span>
            </div>
          </div>

          {/* Stat 3: Narrow Accent Block (Pengepul Informal) */}
          <div
            ref={stat3Ref}
            className="lg:col-span-3 bg-[#EAE4CE] border border-[#24402A]/20 rounded-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-[#24402A]">
                <span className="font-serif text-5xl sm:text-6xl font-bold tracking-tight">
                  {STATS_MASALAH[2].number}
                </span>
                <span className="block text-xs uppercase font-bold tracking-wider text-[#5B7F3A] mt-1">
                  Akses Pengepul Terjadwal
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-[#1A211B]">
                {STATS_MASALAH[2].title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#1A211B]/80 leading-relaxed">
                {STATS_MASALAH[2].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#24402A]/15 font-handwriting text-lg text-[#24402A]">
              "Seringnya ditumpahkan saja ke tanah atau got belakang warung."
            </div>
          </div>
        </div>

        {/* Narrative Connection to Solution */}
        <div className="mt-12 p-6 rounded-lg bg-[#5B7F3A]/10 border border-[#5B7F3A]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#5B7F3A] text-[#F3EEDD] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#24402A]">
                Padahal, 1 Liter Minyak Jelantah Bisa Menjadi 4 Liter Sabun Berkualitas
              </h4>
              <p className="text-xs sm:text-sm text-[#1A211B]/80">
                Dengan metode adsorpsi arang aktif 65–70°C dan saponifikasi KOH murni, limbah jelantah dapat terlahir kembali menjadi sabun cuci piring berdaya bersih tinggi.
              </p>
            </div>
          </div>

          <a
            href="#proses"
            className="shrink-0 px-5 py-2.5 rounded bg-[#24402A] text-[#F3EEDD] text-xs sm:text-sm font-semibold hover:bg-[#1a301f] transition-colors"
          >
            Lihat 9 Tahap Pemurnian →
          </a>
        </div>
      </div>
    </section>
  );
};
