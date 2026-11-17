import React, { useState } from 'react';
import { PRODUCT_VARIANTS, SITE_METADATA } from '../data/content';

export const SectionProduk: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'semua' | 'rumah' | 'umkm'>('semua');

  // Filter varian sesuai segmen jika dibutuhkan
  const displayedVariants = PRODUCT_VARIANTS.filter((variant) => {
    if (activeTab === 'rumah') return variant.id !== 'grosir-jeriken-5l';
    if (activeTab === 'umkm') return variant.id === 'grosir-jeriken-5l' || variant.id === 'refill-pouch-500ml';
    return true;
  });

  return (
    <section id="produk" className="relative py-24 sm:py-32 border-t border-[#24402A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
              Formulasi & Kemasan Berkelanjutan
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-tight">
              Pilihan Bersih untuk Dapur Rumah & Usaha Kuliner
            </h2>

            <p className="mt-4 text-base text-[#1A211B]/80 leading-relaxed">
              Cairan hijau bening berbusa melimpah dengan aroma segar jeruk nipis pembersih amis. Teruji memiliki pH stabil
              8,5–9,5, dirancang ampuh meluruhkan lemak minyak wajan tanpa membuat kulit tangan kering.
            </p>
          </div>

          {/* Segment Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#EAE4CE] rounded-lg border border-[#24402A]/15 self-start md:self-end">
            <button
              onClick={() => setActiveTab('semua')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === 'semua'
                  ? 'bg-[#24402A] text-[#F3EEDD] shadow-sm'
                  : 'text-[#1A211B]/70 hover:text-[#24402A]'
              }`}
            >
              Semua Varian
            </button>
            <button
              onClick={() => setActiveTab('rumah')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === 'rumah'
                  ? 'bg-[#24402A] text-[#F3EEDD] shadow-sm'
                  : 'text-[#1A211B]/70 hover:text-[#24402A]'
              }`}
            >
              Dapur Rumah
            </button>
            <button
              onClick={() => setActiveTab('umkm')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === 'umkm'
                  ? 'bg-[#24402A] text-[#F3EEDD] shadow-sm'
                  : 'text-[#1A211B]/70 hover:text-[#24402A]'
              }`}
            >
              Mitra UMKM
            </button>
          </div>
        </div>

        {/* 4 Distinct Asymmetric Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {displayedVariants.map((product) => {
            const isReguler = product.id === 'reguler-500ml';
            const isPaket = product.id === 'paket-hemat-3';
            const isJeriken = product.id === 'grosir-jeriken-5l';
            const isRefill = product.id === 'refill-pouch-500ml';

            return (
              <div
                key={product.id}
                className={`group relative rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                  isReguler
                    ? 'bg-[#24402A] text-[#F3EEDD] border-2 border-[#5B7F3A] shadow-md'
                    : isJeriken
                    ? 'bg-[#EAE4CE] border-2 border-[#6B4A2B]/40 text-[#1A211B]'
                    : 'bg-[#F3EEDD] border border-[#24402A]/20 text-[#1A211B]'
                }`}
              >
                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded shadow-sm ${
                        isReguler
                          ? 'bg-[#A9C23F] text-[#24402A]'
                          : isJeriken
                          ? 'bg-[#6B4A2B] text-[#F3EEDD]'
                          : 'bg-[#24402A] text-[#F3EEDD]'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Distinct SVG Packaging Illustration per Variant */}
                  <div className="w-full h-48 flex items-center justify-center my-4 group-hover:scale-105 transition-transform duration-300">
                    {/* 1. Botol Reguler 500 mL */}
                    {isReguler && (
                      <svg viewBox="0 0 160 200" fill="none" className="h-full drop-shadow-md">
                        {/* Flip Top Cap */}
                        <rect x="70" y="10" width="20" height="18" rx="2" fill="#5B7F3A" />
                        <line x1="68" y1="20" x2="92" y2="20" stroke="#A9C23F" strokeWidth="1" />
                        {/* Bottle Neck */}
                        <path d="M72 28 L72 45 L54 75 L106 75 L88 45 L88 28 Z" fill="#CFE3D0" opacity="0.8" />
                        {/* Bottle Body */}
                        <path
                          d="M54 75 C42 95 38 120 38 150 C38 180 50 190 80 190 C110 190 122 180 122 150 C122 120 118 95 106 75 Z"
                          fill="#4E9C68"
                          stroke="#F3EEDD"
                          strokeWidth="2"
                        />
                        {/* Soap Liquid Level */}
                        <path
                          d="M40 100 C48 103 62 105 80 105 C98 105 112 103 120 100 L120 150 C120 178 110 188 80 188 C50 188 40 178 40 150 Z"
                          fill="#6DB884"
                          opacity="0.9"
                        />
                        {/* Label */}
                        <rect x="46" y="112" width="68" height="60" rx="4" fill="#F3EEDD" />
                        <text x="80" y="132" textAnchor="middle" fill="#24402A" fontWeight="bold" fontSize="10">SoilOAP</text>
                        <text x="80" y="142" textAnchor="middle" fill="#5B7F3A" fontSize="6">REGULER 500 mL</text>
                        <circle cx="80" cy="154" r="5" fill="#A9C23F" />
                      </svg>
                    )}

                    {/* 2. Bundel 3 Botol Hemat */}
                    {isPaket && (
                      <svg viewBox="0 0 200 200" fill="none" className="h-full drop-shadow-md">
                        {/* Left Bottle */}
                        <g transform="translate(15, 20) scale(0.75)">
                          <rect x="70" y="10" width="20" height="18" rx="2" fill="#24402A" />
                          <path d="M54 75 C42 95 38 120 38 150 C38 180 50 190 80 190 C110 190 122 180 122 150 C122 120 118 95 106 75 Z" fill="#529E7D" />
                        </g>
                        {/* Right Bottle */}
                        <g transform="translate(65, 20) scale(0.75)">
                          <rect x="70" y="10" width="20" height="18" rx="2" fill="#24402A" />
                          <path d="M54 75 C42 95 38 120 38 150 C38 180 50 190 80 190 C110 190 122 180 122 150 C122 120 118 95 106 75 Z" fill="#529E7D" />
                        </g>
                        {/* Center Bottle Foreground */}
                        <g transform="translate(40, 10) scale(0.85)">
                          <rect x="70" y="10" width="20" height="18" rx="2" fill="#24402A" />
                          <path d="M54 75 C42 95 38 120 38 150 C38 180 50 190 80 190 C110 190 122 180 122 150 C122 120 118 95 106 75 Z" fill="#6DB884" stroke="#24402A" strokeWidth="2" />
                          <rect x="46" y="112" width="68" height="55" rx="4" fill="#F3EEDD" />
                          <text x="80" y="132" textAnchor="middle" fill="#24402A" fontWeight="bold" fontSize="10">Paket Hemat</text>
                          <text x="80" y="144" textAnchor="middle" fill="#5B7F3A" fontSize="6">3 × 500 mL</text>
                        </g>
                        {/* Tali Rami Pengikat Bundel */}
                        <path d="M40 135 C80 142 120 142 160 135" stroke="#6B4A2B" strokeWidth="3" strokeDasharray="4 2" />
                        <path d="M40 140 C80 147 120 147 160 140" stroke="#6B4A2B" strokeWidth="3" strokeDasharray="4 2" />
                      </svg>
                    )}

                    {/* 3. Grosir Jeriken UMKM 5 Liter */}
                    {isJeriken && (
                      <svg viewBox="0 0 180 200" fill="none" className="h-full drop-shadow-md">
                        {/* Jeriken Body */}
                        <rect x="35" y="55" width="110" height="135" rx="12" fill="#F3EEDD" stroke="#6B4A2B" strokeWidth="3" />
                        {/* Jeriken Cap on top left */}
                        <rect x="45" y="32" width="30" height="24" rx="4" fill="#6B4A2B" />
                        <line x1="42" y1="44" x2="78" y2="44" stroke="#D79A22" strokeWidth="2" />
                        {/* Jeriken Handle on top right */}
                        <path d="M90 55 L90 35 C90 28 125 28 125 35 L125 55" fill="none" stroke="#6B4A2B" strokeWidth="6" strokeLinecap="round" />
                        {/* Level Gauge Window */}
                        <rect x="45" y="80" width="8" height="90" rx="3" fill="#D79A22" opacity="0.3" />
                        <rect x="45" y="110" width="8" height="60" rx="3" fill="#6DB884" />
                        {/* Jeriken Big Label */}
                        <rect x="62" y="78" width="75" height="92" rx="4" fill="#24402A" />
                        <text x="99.5" y="100" textAnchor="middle" fill="#A9C23F" fontWeight="bold" fontSize="11">SoilOAP</text>
                        <text x="99.5" y="114" textAnchor="middle" fill="#F3EEDD" fontSize="8" fontWeight="bold">GROSIR UMKM</text>
                        <text x="99.5" y="132" textAnchor="middle" fill="#F3EEDD" fontSize="16" fontFamily="serif" fontWeight="bold">5 LITER</text>
                        <rect x="70" y="144" width="60" height="16" rx="2" fill="#5B7F3A" />
                        <text x="100" y="155" textAnchor="middle" fill="#F3EEDD" fontSize="7" fontWeight="bold">Tukar Jeriken Steril</text>
                      </svg>
                    )}

                    {/* 4. Refill Pouch 500 mL */}
                    {isRefill && (
                      <svg viewBox="0 0 160 200" fill="none" className="h-full drop-shadow-md">
                        {/* Spout corner on top right */}
                        <rect x="102" y="22" width="16" height="18" rx="2" fill="#24402A" />
                        <line x1="100" y1="30" x2="120" y2="30" stroke="#A9C23F" strokeWidth="1.5" />
                        {/* Pouch Bag Shape */}
                        <path
                          d="M35 55 L95 40 L125 55 L130 180 C130 186 124 190 115 190 L45 190 C36 190 30 186 30 180 Z"
                          fill="#E6E0CC"
                          stroke="#24402A"
                          strokeWidth="2.5"
                        />
                        {/* Bottom Gusset Fold lines */}
                        <path d="M30 170 C45 180 115 180 130 170" stroke="#24402A" strokeWidth="1.5" strokeDasharray="3 2" />
                        {/* Pouch Artwork */}
                        <path d="M35 90 Q80 105 125 90 L128 175 L32 175 Z" fill="#6DB884" opacity="0.8" />
                        <rect x="42" y="105" width="76" height="52" rx="4" fill="#F3EEDD" />
                        <text x="80" y="125" textAnchor="middle" fill="#24402A" fontWeight="bold" fontSize="10">Isi Ulang Refill</text>
                        <text x="80" y="137" textAnchor="middle" fill="#5B7F3A" fontSize="7" fontWeight="bold">500 mL Pouch</text>
                        <text x="80" y="148" textAnchor="middle" fill="#6B4A2B" fontSize="6">Minim Plastik</text>
                      </svg>
                    )}
                  </div>

                  {/* Product Title & Segment */}
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider block ${
                      isReguler ? 'text-[#A9C23F]' : 'text-[#5B7F3A]'
                    }`}
                  >
                    {product.targetSegment}
                  </span>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-bold mt-1 ${
                      isReguler ? 'text-[#F3EEDD]' : 'text-[#1A211B]'
                    }`}
                  >
                    {product.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span
                      className={`font-serif text-3xl font-bold tracking-tight ${
                        isReguler ? 'text-[#A9C23F]' : 'text-[#24402A]'
                      }`}
                    >
                      {product.formattedPrice}
                    </span>
                    {product.pricePerLiter && (
                      <span
                        className={`text-xs font-medium ${
                          isReguler ? 'text-[#F3EEDD]/70' : 'text-[#1A211B]/60'
                        }`}
                      >
                        ({product.pricePerLiter})
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                      isReguler ? 'text-[#F3EEDD]/85' : 'text-[#1A211B]/80'
                    }`}
                  >
                    {product.description}
                  </p>

                  {/* Bullet Features */}
                  <ul className="mt-4 space-y-1.5 text-xs">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={`mt-0.5 shrink-0 ${
                            isReguler ? 'text-[#A9C23F]' : 'text-[#5B7F3A]'
                          }`}
                        >
                          ✓
                        </span>
                        <span className={isReguler ? 'text-[#F3EEDD]/90' : 'text-[#1A211B]/85'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Eco Impact + WhatsApp Order Link */}
                <div className="mt-6 pt-4 border-t border-current/15">
                  <div
                    className={`text-[11px] font-medium mb-3 flex items-center gap-1.5 ${
                      isReguler ? 'text-[#A9C23F]' : 'text-[#5B7F3A]'
                    }`}
                  >
                    <span>🌱</span>
                    <span>{product.ecoImpact}</span>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_METADATA.contacts.whatsappNumber}?text=Halo%20Tim%20SoilOAP,%20saya%20ingin%20memesan%20${encodeURIComponent(
                      product.name + ' (' + product.formattedPrice + ')'
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center py-2.5 px-4 rounded font-semibold text-xs transition-colors shadow-sm ${
                      isReguler
                        ? 'bg-[#A9C23F] text-[#24402A] hover:bg-[#b8d447]'
                        : 'bg-[#24402A] text-[#F3EEDD] hover:bg-[#1a301f]'
                    }`}
                  >
                    Pesan Varian Ini
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Disclaimer Banner (Strict Compliance) */}
        <div className="mt-12 p-4 rounded-lg bg-[#EAE4CE] border border-[#24402A]/15 text-xs text-[#1A211B]/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#24402A] text-sm">ⓘ Standar Mutu:</span>
            <span>
              {SITE_METADATA.regulatoryStatus} Khusus untuk peralatan dapur & tangan, bukan kosmetik tubuh.
            </span>
          </div>
          <div className="font-mono text-[11px] text-[#6B4A2B] shrink-0 font-medium">
            pH Uji: 8,5 – 9,5 (Aman di Kulit)
          </div>
        </div>
      </div>
    </section>
  );
};
