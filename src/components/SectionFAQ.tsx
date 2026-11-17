import React, { useState } from 'react';
import { FAQ_LIST, SITE_METADATA } from '../data/content';

export const SectionFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-[#24402A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
            Klarifikasi & Tanya Jawab
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 text-base text-[#1A211B]/80 leading-relaxed">
            Transparansi mengenai bahan baku jelantah, proses purifikasi ilmiah, standar keamanan penggunaan dapur, dan sistem kemitraan kami.
          </p>

          <div className="mt-2 font-handwriting text-xl text-[#5B7F3A] select-none">
            ✎ Jawaban terbuka tanpa klaim berlebihan
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#F3EEDD] border border-[#24402A]/20 rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#24402A]/5 hover:bg-[#EAE4CE]/60 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#24402A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#24402A]/10 flex items-center justify-center shrink-0 text-[#24402A] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#24402A] text-[#F3EEDD]' : ''
                    }`}
                  >
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1A211B]/85 leading-relaxed border-t border-[#24402A]/10 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {faq.highlight && (
                      <div className="mt-3 inline-block px-3 py-1 rounded bg-[#5B7F3A]/15 text-[#24402A] text-xs font-semibold">
                        Kunci: {faq.highlight}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="mt-12 text-center p-6 bg-[#EAE4CE] rounded-xl border border-[#24402A]/15">
          <p className="text-sm text-[#1A211B]/80">
            Punya pertanyaan seputar uji coba sampel atau penjemputan jelantah di lokasi Anda?
          </p>
          <a
            href={SITE_METADATA.contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#24402A] hover:underline"
          >
            <span>Tanya Tim SoilOAP via WhatsApp ({SITE_METADATA.contacts.whatsappDisplay || SITE_METADATA.contacts.whatsappNumber}) →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
