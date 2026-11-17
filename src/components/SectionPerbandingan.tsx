import React, { useState } from 'react';
import { MARKET_COMPARISONS } from '../data/content';

export const SectionPerbandingan: React.FC = () => {
  const [calculationBasis, setCalculationBasis] = useState<'perLiter' | 'perBotol'>('perLiter');

  return (
    <section id="perbandingan" className="relative py-24 sm:py-32 border-t border-[#24402A]/10 bg-[#EAE4CE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
            Efisiensi Ekonomi & Standar Kualitas
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-tight">
            Transparansi Biaya: Mengapa Beralih ke SoilOAP?
          </h2>

          <p className="mt-4 text-base text-[#1A211B]/80 leading-relaxed">
            Banyak warung makan di Bojongsoang terjebak di antara dua pilihan ekstrem: membeli sabun merek pabrikan yang mahal,
            atau sabun curah tanpa izin yang encer dan berisiko iritasi. SoilOAP hadir sebagai jalan tengah yang logis dan berdampak.
          </p>
        </div>

        {/* Calculation Toggle */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 bg-[#F3EEDD] p-1 rounded-md border border-[#24402A]/20 text-xs font-semibold">
            <button
              onClick={() => setCalculationBasis('perLiter')}
              className={`px-3 py-1.5 rounded transition-colors ${
                calculationBasis === 'perLiter'
                  ? 'bg-[#24402A] text-[#F3EEDD]'
                  : 'text-[#1A211B]/70 hover:text-[#24402A]'
              }`}
            >
              Bandingkan Harga per Liter
            </button>
            <button
              onClick={() => setCalculationBasis('perBotol')}
              className={`px-3 py-1.5 rounded transition-colors ${
                calculationBasis === 'perBotol'
                  ? 'bg-[#24402A] text-[#F3EEDD]'
                  : 'text-[#1A211B]/70 hover:text-[#24402A]'
              }`}
            >
              Bandingkan Kemasan 500 mL
            </button>
          </div>

          {/* Handwriting field note */}
          <div className="font-handwriting text-xl text-[#5B7F3A] select-none -rotate-1">
            ✎ Hemat 25% – 35% dibandingkan produk komersial nasional
          </div>
        </div>

        {/* Visual Comparison Bar Chart & Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Animated Visual Bar Chart */}
          <div className="lg:col-span-7 bg-[#F3EEDD] border border-[#24402A]/20 rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#24402A] mb-6">
              Grafik Perbandingan Biaya {calculationBasis === 'perLiter' ? '(per 1.000 mL)' : '(per 500 mL)'}
            </h3>

            <div className="space-y-6">
              {/* 1. Merek Nasional */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5 text-[#1A211B]">
                  <span>Merek Nasional Pabrikan (LAS / LABS)</span>
                  <span className="font-bold text-[#6B4A2B]">
                    {calculationBasis === 'perLiter' ? 'Rp26.000 – Rp40.000' : 'Rp13.000 – Rp20.000'}
                  </span>
                </div>
                <div className="h-7 w-full bg-[#EAE4CE] rounded-full overflow-hidden p-1 flex items-center">
                  <div
                    className="h-full bg-[#6B4A2B]/80 rounded-full transition-all duration-700 flex items-center justify-end pr-3 text-[10px] text-[#F3EEDD] font-bold"
                    style={{ width: calculationBasis === 'perLiter' ? '92%' : '88%' }}
                  >
                    Paling Mahal
                  </div>
                </div>
                <span className="text-[11px] text-[#1A211B]/60 mt-1 block">
                  Bahan baku petrokimia impor, kemasan botol plastik komersial sekali buang.
                </span>
              </div>

              {/* 2. SoilOAP (Solusi Sirkular) */}
              <div className="p-3 rounded-lg bg-[#24402A]/5 border border-[#24402A]/20">
                <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5 text-[#24402A]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B7F3A]" />
                    SoilOAP (Jelantah Terpurifikasi Arang Aktif)
                  </span>
                  <span className="font-serif text-base text-[#24402A]">
                    {calculationBasis === 'perLiter' ? 'Rp16.000 / Liter (Grosir)' : 'Rp10.000 / 500 mL'}
                  </span>
                </div>
                <div className="h-8 w-full bg-[#EAE4CE] rounded-full overflow-hidden p-1 flex items-center">
                  <div
                    className="h-full bg-[#24402A] rounded-full transition-all duration-700 flex items-center justify-between px-3 text-[11px] text-[#A9C23F] font-bold shadow-sm"
                    style={{ width: calculationBasis === 'perLiter' ? '46%' : '52%' }}
                  >
                    <span>SoilOAP</span>
                    <span>Hemat 25–35%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#5B7F3A] mt-1.5">
                  <span>Minyak terpurifikasi 65–70°C • Uji pH 8,5–9,5</span>
                  <span>100% Mengurangi Limbah Got</span>
                </div>
              </div>

              {/* 3. Sabun Curah */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5 text-[#1A211B]">
                  <span>Sabun Curah Tanpa Merek (Pasar Tradisional)</span>
                  <span className="font-bold text-[#5B7F3A]">
                    {calculationBasis === 'perLiter' ? 'Rp6.000 – Rp8.000' : 'Rp3.500 – Rp4.500'}
                  </span>
                </div>
                <div className="h-7 w-full bg-[#EAE4CE] rounded-full overflow-hidden p-1 flex items-center">
                  <div
                    className="h-full bg-[#5B7F3A]/40 rounded-full transition-all duration-700 flex items-center justify-end pr-3 text-[10px] text-[#1A211B] font-bold"
                    style={{ width: calculationBasis === 'perLiter' ? '25%' : '26%' }}
                  >
                    Murah tapi Berisiko
                  </div>
                </div>
                <span className="text-[11px] text-[#1A211B]/60 mt-1 block">
                  Sangat encer, seringkali tanpa uji pH resmi, aroma sintetis menyengat dan residu kaustik iritatif.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Comparison Matrix */}
          <div className="lg:col-span-5 space-y-4">
            {MARKET_COMPARISONS.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl transition-all duration-200 border ${
                  item.isSoilOAP
                    ? 'bg-[#24402A] text-[#F3EEDD] border-[#5B7F3A] shadow-md'
                    : 'bg-[#F3EEDD] text-[#1A211B] border-[#24402A]/15'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4
                    className={`font-serif text-lg font-bold ${
                      item.isSoilOAP ? 'text-[#A9C23F]' : 'text-[#24402A]'
                    }`}
                  >
                    {item.category}
                  </h4>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      item.isSoilOAP
                        ? 'bg-[#A9C23F] text-[#24402A]'
                        : 'bg-[#24402A]/10 text-[#24402A]'
                    }`}
                  >
                    {item.priceRange}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mt-3 pt-3 border-t border-current/15">
                  <div>
                    <span className="block font-semibold opacity-70">Uji pH & Standar:</span>
                    <span>{item.phTesting}</span>
                  </div>
                  <div>
                    <span className="block font-semibold opacity-70">Bahan Baku:</span>
                    <span>{item.ingredients}</span>
                  </div>
                </div>

                <div className="mt-3 text-xs opacity-90">
                  <span className="font-semibold">Dampak Lingkungan: </span>
                  {item.ecoImpactNote}
                </div>

                {item.savingsNote && (
                  <div className="mt-3 p-2 rounded bg-[#5B7F3A]/20 text-[#A9C23F] text-xs font-bold flex items-center gap-1.5">
                    <span>★</span>
                    <span>{item.savingsNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
