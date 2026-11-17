import React from 'react';
import { PRODUCT_SPECS } from '../data/content';

export const SectionDampakSiklusTertutup: React.FC = () => {
  return (
    <section id="dampak" className="relative py-24 sm:py-32 border-t border-[#24402A]/10 bg-[#EAE4CE]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
            Ekonomi Sirkular Mandiri
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-tight">
            Siklus Tertutup: Dari Warung Lokal, Kembali ke Dapur Lokal
          </h2>

          <p className="mt-4 text-base text-[#1A211B]/80 leading-relaxed max-w-2xl mx-auto">
            Bukan sekadar mendaur ulang, melainkan menciptakan sistem rantai pasok tertutup yang menguntungkan pedagang
            secara finansial sekaligus menjaga ekosistem aliran air pemukiman tetap bersih.
          </p>

          <div className="mt-3 font-handwriting text-xl text-[#5B7F3A] select-none">
            ✎ "Minyak yang tadinya mencemari got, kini membersihkan perabot dapur."
          </div>
        </div>

        {/* =========================================================================
            DIAGRAM MELINGKAR SIKLUS TERTUTUP (CUSTOM HAND-CRAFTED SVG)
        ========================================================================= */}
        <div className="bg-[#F3EEDD] border-2 border-[#24402A]/20 rounded-2xl p-6 sm:p-10 shadow-lg mb-16">
          <div className="relative w-full max-w-[840px] mx-auto aspect-[16/10] min-h-[380px] flex items-center justify-center">
            <svg
              viewBox="0 0 840 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full select-none"
            >
              <defs>
                {/* Loop Animated Dash Pattern */}
                <linearGradient id="circleLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D79A22" />
                  <stop offset="50%" stopColor="#5B7F3A" />
                  <stop offset="100%" stopColor="#24402A" />
                </linearGradient>

                <filter id="nodeShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#1A211B" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Main Circular Track Path */}
              <circle
                cx="420"
                cy="250"
                r="180"
                stroke="url(#circleLoopGrad)"
                strokeWidth="5"
                strokeDasharray="12 8"
                className="water-flow-line"
                fill="none"
              />

              {/* Center Brand Emblem */}
              <g transform="translate(360, 190)" filter="url(#nodeShadow)">
                <circle cx="60" cy="60" r="55" fill="#24402A" stroke="#5B7F3A" strokeWidth="3" />
                <circle cx="60" cy="60" r="48" fill="#1A2B1D" />
                <path
                  d="M60 30 C60 30 42 50 42 62 C42 72 50 80 60 80 C70 80 78 72 78 62 C78 50 60 30 60 30 Z"
                  fill="#5B7F3A"
                />
                <path d="M60 65 C60 56 66 48 74 46 C74 54 70 63 60 65 Z" fill="#A9C23F" />
                <text x="60" y="96" fill="#F3EEDD" fontSize="11" fontFamily="serif" fontWeight="bold" textAnchor="middle">
                  SoilOAP
                </text>
              </g>

              {/* Node 1: UMKM Kuliner (Top) */}
              <g transform="translate(340, 15)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="160" height="70" rx="10" fill="#F3EEDD" stroke="#6B4A2B" strokeWidth="2" />
                <circle cx="28" cy="35" r="16" fill="#6B4A2B" />
                <text x="28" y="40" fill="#F3EEDD" fontSize="13" fontWeight="bold" textAnchor="middle">①</text>
                <text x="54" y="30" fill="#24402A" fontSize="11" fontWeight="bold">UMKM Kuliner</text>
                <text x="54" y="45" fill="#6B4A2B" fontSize="9">Warung Gorengan & Makan</text>
                <text x="54" y="58" fill="#1A211B" fontSize="8" opacity="0.8">Hasilkan 8–15 L Jelantah</text>
              </g>

              {/* Node 2: Penjemputan Jelantah (Right-Top) */}
              <g transform="translate(620, 150)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="170" height="70" rx="10" fill="#F3EEDD" stroke="#D79A22" strokeWidth="2" />
                <circle cx="28" cy="35" r="16" fill="#D79A22" />
                <text x="28" y="40" fill="#1A211B" fontSize="13" fontWeight="bold" textAnchor="middle">②</text>
                <text x="54" y="28" fill="#24402A" fontSize="11" fontWeight="bold">Jelantah Disetor</text>
                <text x="54" y="43" fill="#D79A22" fontSize="9" fontWeight="bold">Dibeli Rp4.500/Liter</text>
                <text x="54" y="56" fill="#1A211B" fontSize="8" opacity="0.8">Penjemputan Gratis</text>
              </g>

              {/* Node 3: Purifikasi Arang & Saponifikasi (Right-Bottom) */}
              <g transform="translate(560, 370)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="180" height="75" rx="10" fill="#24402A" stroke="#5B7F3A" strokeWidth="2" />
                <circle cx="28" cy="37" r="16" fill="#5B7F3A" />
                <text x="28" y="42" fill="#F3EEDD" fontSize="13" fontWeight="bold" textAnchor="middle">③</text>
                <text x="54" y="30" fill="#A9C23F" fontSize="11" fontWeight="bold">Purifikasi & Saponifikasi</text>
                <text x="54" y="45" fill="#F3EEDD" fontSize="9">Arang Aktif 65–70°C + KOH</text>
                <text x="54" y="58" fill="#F3EEDD" fontSize="8" opacity="0.8">Rendemen 1 L jadi 4 L</text>
              </g>

              {/* Node 4: Sabun Berkualitas Lolos QC (Left-Bottom) */}
              <g transform="translate(100, 370)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="180" height="75" rx="10" fill="#F3EEDD" stroke="#24402A" strokeWidth="2" />
                <circle cx="28" cy="37" r="16" fill="#24402A" />
                <text x="28" y="42" fill="#F3EEDD" fontSize="13" fontWeight="bold" textAnchor="middle">④</text>
                <text x="54" y="30" fill="#24402A" fontSize="11" fontWeight="bold">Sabun SoilOAP</text>
                <text x="54" y="45" fill="#5B7F3A" fontSize="9" fontWeight="bold">pH 8,5–9,5 • Jeruk Nipis</text>
                <text x="54" y="58" fill="#1A211B" fontSize="8" opacity="0.8">Uji Tiap Batch Produksi</text>
              </g>

              {/* Node 5: Kembali ke UMKM & Rumah Tangga (Left-Top) */}
              <g transform="translate(50, 150)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="180" height="75" rx="10" fill="#EAE4CE" stroke="#5B7F3A" strokeWidth="2" />
                <circle cx="28" cy="37" r="16" fill="#5B7F3A" />
                <text x="28" y="42" fill="#F3EEDD" fontSize="13" fontWeight="bold" textAnchor="middle">⑤</text>
                <text x="54" y="28" fill="#24402A" fontSize="11" fontWeight="bold">Kembali ke UMKM</text>
                <text x="54" y="43" fill="#6B4A2B" fontSize="9" fontWeight="bold">Grosir 5 L (Hemat 25–35%)</text>
                <text x="54" y="56" fill="#1A211B" fontSize="8" opacity="0.8">Tukar Jeriken Steril</text>
              </g>

              {/* Animated Directional Arrows along the circle */}
              <g fill="#24402A">
                {/* Arrow 1 -> 2 */}
                <polygon points="560,95 572,90 568,102" />
                {/* Arrow 2 -> 3 */}
                <polygon points="635,320 642,332 630,332" />
                {/* Arrow 3 -> 4 */}
                <polygon points="360,432 350,422 360,418" />
                {/* Arrow 4 -> 5 */}
                <polygon points="205,320 198,308 210,308" />
                {/* Arrow 5 -> 1 */}
                <polygon points="280,95 270,105 282,108" />
              </g>
            </svg>
          </div>
        </div>

        {/* =========================================================================
            4 IMPACT COUNTERS (STRICT BRIEF METRICS)
        ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Impact 1 */}
          <div className="p-6 rounded-xl bg-[#24402A] text-[#F3EEDD] shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-bold text-[#A9C23F] tracking-wider">
              Dampak per Botol
            </span>
            <div className="my-3 font-serif text-4xl font-bold text-[#F3EEDD]">
              125 mL
            </div>
            <p className="text-xs text-[#F3EEDD]/80 leading-relaxed border-t border-[#F3EEDD]/15 pt-3">
              Minyak jelantah yang diselamatkan dari pembuangan got setiap Anda menggunakan 1 botol 500 mL SoilOAP.
            </p>
          </div>

          {/* Impact 2 */}
          <div className="p-6 rounded-xl bg-[#F3EEDD] border border-[#24402A]/20 shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-bold text-[#5B7F3A] tracking-wider">
              Target Fase Awal
            </span>
            <div className="my-3 font-serif text-4xl font-bold text-[#24402A]">
              1.800 L
            </div>
            <p className="text-xs text-[#1A211B]/80 leading-relaxed border-t border-[#24402A]/10 pt-3">
              Minimal liter jelantah yang ditargetkan terserap per tahun di Bojongsoang, Dayeuhkolot, dan Baleendah.
            </p>
          </div>

          {/* Impact 3 */}
          <div className="p-6 rounded-xl bg-[#EAE4CE] border border-[#24402A]/20 shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-bold text-[#6B4A2B] tracking-wider">
              Target Kemitraan
            </span>
            <div className="my-3 font-serif text-4xl font-bold text-[#6B4A2B]">
              25 UMKM
            </div>
            <p className="text-xs text-[#1A211B]/80 leading-relaxed border-t border-[#24402A]/10 pt-3">
              Pelaku usaha kuliner lokal mitra penampungan jelantah terjadwal dengan jeriken steril.
            </p>
          </div>

          {/* Impact 4 */}
          <div className="p-6 rounded-xl bg-[#5B7F3A] text-[#F3EEDD] shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-bold text-[#F3EEDD] tracking-wider">
              Rendemen Produk
            </span>
            <div className="my-3 font-serif text-4xl font-bold text-[#F3EEDD]">
              1 : 4 L
            </div>
            <p className="text-xs text-[#F3EEDD]/85 leading-relaxed border-t border-[#F3EEDD]/20 pt-3">
              {PRODUCT_SPECS.yieldRatio}. Efisiensi tinggi yang menjaga harga grosir tetap ramah pedagang kecil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
