import React from 'react';
import { SITE_METADATA } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#24402A] text-[#F3EEDD] pt-16 pb-12 border-t-2 border-[#5B7F3A] overflow-hidden">
      {/* Decorative subtle background ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-[#5B7F3A]/20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#F3EEDD]/15">
          {/* Col 1: Brand Info & Pitch Context */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-[#5B7F3A] flex items-center justify-center p-1.5 shadow-sm">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path
                    d="M20 4 C20 4 8 18 8 26 C8 32.6 13.4 38 20 38 C26.6 38 32 32.6 32 26 C32 18 20 4 20 4 Z"
                    fill="#F3EEDD"
                  />
                  <path d="M20 28 C20 22 24 16 30 15 C30 21 27 27 20 28 Z" fill="#A9C23F" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F3EEDD]">
                SoilOAP
              </span>
            </div>

            <p className="text-sm text-[#F3EEDD]/80 leading-relaxed max-w-sm">
              Inisiatif ekonomi sirkular pengolahan minyak jelantah warung kuliner mikro menjadi sabun pencuci piring
              dan peralatan dapur berkualitas tinggi.
            </p>

            <div className="mt-4 text-xs text-[#A9C23F] font-semibold">
              {SITE_METADATA.institution} • Business Plan Competition
            </div>

            <div className="mt-6 font-handwriting text-xl text-[#A9C23F]">
              "Dari jelantah warga, kembali bersih untuk dapur warga."
            </div>
          </div>

          {/* Col 2: Tim Pengembang */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#F3EEDD] mb-4">
              Tim Pengembang
            </h4>
            <ul className="space-y-2 text-sm text-[#F3EEDD]/85">
              {SITE_METADATA.teamMembers.map((member, i) => (
                <li key={i} className="flex flex-col">
                  <span className="font-semibold text-[#F3EEDD]">{member.name}</span>
                  <span className="text-xs text-[#A9C23F]">{member.role}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-[#F3EEDD]/60">
              Telkom University, Bandung
            </div>
          </div>

          {/* Col 3: Wilayah Operasional & Navigasi */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-[#F3EEDD] mb-4">
              Wilayah Operasional
            </h4>
            <ul className="space-y-1.5 text-xs text-[#F3EEDD]/80">
              <li>• Kec. Bojongsoang</li>
              <li>• Kec. Dayeuhkolot</li>
              <li>• Kec. Baleendah</li>
              <li>• Koridor Jl. Telekomunikasi</li>
              <li>• Sukabirus & Sukapura</li>
            </ul>

            <div className="mt-6 text-xs text-[#A9C23F] font-medium">
              Rendemen: 1 L Jelantah = 4 L Sabun
            </div>
          </div>

          {/* Col 4: Kanal Order & Marketplace */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-[#F3EEDD] mb-4">
              Kanal Pemesanan
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={SITE_METADATA.contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A9C23F] hover:underline font-semibold"
                >
                  <span>WhatsApp Business</span>
                </a>
                <span className="block text-[11px] text-[#F3EEDD]/60">{SITE_METADATA.contacts.whatsappDisplay || SITE_METADATA.contacts.whatsappNumber}</span>
              </li>
              <li>
                <a
                  href={SITE_METADATA.contacts.shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A9C23F] transition-colors"
                >
                  Shopee {SITE_METADATA.contacts.shopeeLink.includes('[ISI') ? '(Placeholder)' : ''}
                </a>
              </li>
              <li>
                <a
                  href={SITE_METADATA.contacts.tokopediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A9C23F] transition-colors"
                >
                  Tokopedia {SITE_METADATA.contacts.tokopediaLink.includes('[ISI') ? '(Placeholder)' : ''}
                </a>
              </li>
              <li>
                <a
                  href={SITE_METADATA.contacts.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A9C23F] transition-colors"
                >
                  Instagram {SITE_METADATA.contacts.instagramLink.includes('[ISI') ? '(Placeholder)' : ''}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer (Mandatory) */}
        <div className="pt-8 text-xs text-[#F3EEDD]/70 space-y-2 leading-relaxed">
          <p>
            <strong className="text-[#F3EEDD]">Pernyataan Kategori Produk:</strong> SoilOAP diformulasikan khusus
            sebagai sabun cair pencuci piring, wajan berminyak, peralatan dapur, dan pembersih tangan dapur. SoilOAP BUKAN
            produk kosmetik tubuh atau sabun mandi wajah.
          </p>
          <p>
            <strong className="text-[#F3EEDD]">Status Regulasi:</strong> Formulasi mengacu pada standar mutu sabun cuci
            piring cair komersial. Izin edar Perbekalan Kesehatan Rumah Tangga (PKRT) Kementerian Kesehatan Republik
            Indonesia saat ini sedang dalam proses registrasi dan pengujian laboratorium resmi.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F3EEDD]/50 gap-2 border-t border-[#F3EEDD]/10">
            <span>© 2026 SoilOAP. Hak cipta dilindungi. Telkom University.</span>
            <span>Desain editorial kustom • Tanpa stok foto • Paper-cut SVG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
