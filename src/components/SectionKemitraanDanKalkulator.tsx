import React, { useState, useId } from 'react';
import { KEMITRAAN_BENEFITS } from '../data/content';

export const SectionKemitraanDanKalkulator: React.FC = () => {
  const [liters, setLiters] = useState<number>(20);
  const sliderId = useId();

  // Kalkulasi Berdasarkan Rumus Resmi Brief:
  // 1. Pendapatan = liter * Rp4.500
  // 2. Bonus botol = floor(liter / 15)
  // 3. Potensi sabun = liter * 8 botol (atau liter * 4 liter)
  // 4. Dampak = liter * 1.000 mL jelantah terselamatkan dari drainase
  const cashIncome = liters * 4500;
  const bonusBottles = Math.floor(liters / 15);
  const potentialBottles = liters * 8;
  const potentialLitersSoap = liters * 4;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="kemitraan" className="relative py-24 sm:py-32 border-t border-[#24402A]/10 bg-[#F3EEDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
            Program Kemitraan Sirkular UMKM
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-tight">
            Ubah Beban Jelantah Dapur Menjadi Keuntungan Tunai & Pasokan Sabun
          </h2>

          <p className="mt-4 text-base text-[#1A211B]/80 leading-relaxed">
            Khusus pedagang gorengan, pecel lele, kedai makan, dan kafe di wilayah Bojongsoang, Dayeuhkolot, dan Baleendah.
            Kami meminjamkan jeriken steril, menjemput jelantah gratis ke warung Anda, dan membelinya seharga Rp4.500 per liter.
          </p>

          <div className="mt-3 font-handwriting text-xl text-[#5B7F3A] select-none -rotate-1">
            ✎ "Minyak jelantah dijemput gratis tiap Senin & Kamis langsung di warung."
          </div>
        </div>

        {/* 4 Benefits Cards (Custom Vector Illustrations, No Emojis, No Generic Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {KEMITRAAN_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#EAE4CE] border border-[#24402A]/20 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#5B7F3A] uppercase tracking-wider">
                    Keuntungan 0{idx + 1}
                  </span>
                  {/* Distinct SVG Icon per benefit */}
                  <div className="w-8 h-8 rounded-md bg-[#24402A]/10 text-[#24402A] flex items-center justify-center group-hover:bg-[#24402A] group-hover:text-[#F3EEDD] transition-colors">
                    {idx === 0 && (
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v10M9 9h6" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="2" y="5" width="14" height="12" rx="2" />
                        <path d="M16 10h4l2 3v4h-6v-7z" />
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="18" cy="17" r="2" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="5" y="6" width="14" height="15" rx="3" />
                        <path d="M9 3h6v3H9z" />
                        <path d="M14 6v-2" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="font-serif text-2xl font-bold text-[#24402A] mb-1.5">
                  {benefit.value}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1A211B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1A211B]/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#24402A]/10 flex items-center justify-between text-[11px] font-semibold text-[#5B7F3A]">
                <span>Wilayah Terjangkau</span>
                <span>Bojongsoang & Sekitarnya</span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            KALKULATOR INTERAKTIF "HITUNG SETORAN JELANTAHMU"
        ========================================================================= */}
        <div className="rounded-2xl bg-[#24402A] text-[#F3EEDD] p-6 sm:p-10 shadow-xl border-2 border-[#5B7F3A] relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none text-[#F3EEDD]"
          >
            <svg viewBox="0 0 200 200" fill="currentColor">
              <circle cx="100" cy="100" r="90" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Slider Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="px-3 py-1 rounded bg-[#A9C23F] text-[#24402A] text-xs font-bold uppercase tracking-wider">
                  Kalkulator Kemitraan UMKM
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F3EEDD] mt-3">
                  Hitung Potensi Setoran Jelantahmu
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EEDD]/80 mt-2 leading-relaxed">
                  Geser slider di bawah sesuai perkiraan liter minyak goreng sisa yang dihasilkan dapur atau warung Anda tiap bulan.
                </p>
              </div>

              {/* Slider Input Component */}
              <div className="bg-[#1A2B1D] p-6 rounded-xl border border-[#5B7F3A]/40 space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor={sliderId} className="text-xs font-bold text-[#A9C23F] uppercase tracking-wider">
                    Estimasi Jelantah Dapur:
                  </label>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F3EEDD]">
                    {liters} <span className="text-sm font-sans text-[#A9C23F] font-semibold">Liter / Bulan</span>
                  </span>
                </div>

                <input
                  id={sliderId}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={liters}
                  onChange={(e) => setLiters(Number(e.target.value))}
                  className="w-full h-3 bg-[#24402A] rounded-lg appearance-none cursor-pointer accent-[#A9C23F] focus:outline-none focus:ring-2 focus:ring-[#A9C23F]"
                  aria-label="Estimasi liter jelantah per bulan"
                />

                <div className="flex justify-between text-[11px] font-mono text-[#F3EEDD]/60 pt-1">
                  <span>0 Liter</span>
                  <span>25 L</span>
                  <span>50 L</span>
                  <span>75 L</span>
                  <span>100 Liter/Bulan</span>
                </div>
              </div>

              {/* Note in Caveat */}
              <div className="font-handwriting text-xl text-[#A9C23F] select-none">
                ✎ "Uang setoran bisa diambil tunai langsung atau dipotongkan untuk pembelian sabun jeriken 5 L."
              </div>
            </div>

            {/* Right Column: Dynamic Live Calculation Outputs */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Output 1: Uang Tunai Pembelian Jelantah */}
              <div className="p-5 rounded-xl bg-[#F3EEDD] text-[#1A211B] shadow-sm flex flex-col justify-between">
                <span className="text-xs font-bold text-[#6B4A2B] uppercase tracking-wider">
                  1. Pendapatan Tunai
                </span>
                <div className="my-3 font-serif text-3xl font-bold text-[#24402A] tracking-tight">
                  {formatRupiah(cashIncome)}
                </div>
                <div className="text-[11px] text-[#1A211B]/75 border-t border-[#1A211B]/10 pt-2">
                  Dihitung dari {liters} L × Rp4.500/liter (dibayar saat penjemputan).
                </div>
              </div>

              {/* Output 2: Bonus Botol Sabun */}
              <div className="p-5 rounded-xl bg-[#EAE4CE] text-[#1A211B] shadow-sm flex flex-col justify-between">
                <span className="text-xs font-bold text-[#5B7F3A] uppercase tracking-wider">
                  2. Bonus Sabun Tambahan
                </span>
                <div className="my-3 font-serif text-3xl font-bold text-[#5B7F3A] tracking-tight">
                  +{bonusBottles} <span className="text-lg font-sans font-semibold">Botol</span>
                </div>
                <div className="text-[11px] text-[#1A211B]/75 border-t border-[#1A211B]/10 pt-2">
                  Gratis 1 botol 500 mL tiap akumulasi 15 liter setoran.
                </div>
              </div>

              {/* Output 3: Potensi Sabun Bersih yang Tercipta */}
              <div className="p-5 rounded-xl bg-[#1A2B1D] text-[#F3EEDD] border border-[#5B7F3A]/40 flex flex-col justify-between">
                <span className="text-xs font-bold text-[#A9C23F] uppercase tracking-wider">
                  3. Potensi Sabun Dihasilkan
                </span>
                <div className="my-3 font-serif text-3xl font-bold text-[#A9C23F] tracking-tight">
                  {potentialBottles} <span className="text-base font-sans font-normal text-[#F3EEDD]">Botol ({potentialLitersSoap} L)</span>
                </div>
                <div className="text-[11px] text-[#F3EEDD]/75 border-t border-[#F3EEDD]/10 pt-2">
                  Rendemen 1 L jelantah = 4 Liter sabun cuci berkualitas.
                </div>
              </div>

              {/* Output 4: Dampak Lingkungan Drainase */}
              <div className="p-5 rounded-xl bg-[#5B7F3A] text-[#F3EEDD] shadow-sm flex flex-col justify-between">
                <span className="text-xs font-bold text-[#F3EEDD] uppercase tracking-wider">
                  4. Got Terlindungi
                </span>
                <div className="my-3 font-serif text-3xl font-bold text-[#F3EEDD] tracking-tight">
                  {liters} <span className="text-base font-sans font-normal">Liter Minyak</span>
                </div>
                <div className="text-[11px] text-[#F3EEDD]/85 border-t border-[#F3EEDD]/20 pt-2">
                  Dihentikan dari saluran pembuangan Bojongsoang.
                </div>
              </div>

              {/* CTA Action button to register */}
              <div className="sm:col-span-2 pt-2">
                <a
                  href={`#daftar-mitra`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#A9C23F] text-[#24402A] font-bold text-sm hover:bg-[#b8d447] transition-all shadow-md active:translate-y-0.5"
                >
                  <span>Daftarkan Warung dengan Estimasi {liters} L/Bulan Ini →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
