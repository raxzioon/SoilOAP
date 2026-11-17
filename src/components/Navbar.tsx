import React, { useState, useEffect } from 'react';
import { SITE_METADATA } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Masalah', href: '#masalah' },
    { label: 'Proses', href: '#proses' },
    { label: 'Produk', href: '#produk' },
    { label: 'Perbandingan', href: '#perbandingan' },
    { label: 'Kemitraan', href: '#kemitraan' },
    { label: 'Dampak', href: '#dampak' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F3EEDD] shadow-[0_2px_8px_rgba(26,33,27,0.06)] backdrop-blur-[2px] border-b border-[#24402A]/15 py-3'
          : 'bg-[#F3EEDD] border-b border-[#24402A]/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24402A]"
          >
            {/* Custom Paper-cut Sprout & Drop SVG Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#24402A] flex items-center justify-center p-1.5 shadow-sm transition-transform group-hover:scale-105">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                {/* Minyak Drop Shape */}
                <path
                  d="M20 4 C20 4 8 18 8 26 C8 32.6 13.4 38 20 38 C26.6 38 32 32.6 32 26 C32 18 20 4 20 4 Z"
                  fill="#5B7F3A"
                />
                {/* Sprout Leaves growing from drop */}
                <path
                  d="M20 28 C20 22 24 16 30 15 C30 21 27 27 20 28 Z"
                  fill="#A9C23F"
                />
                <path
                  d="M20 28 C19 23 15 19 10 19 C10 24 14 28 20 28 Z"
                  fill="#C2DC58"
                />
                <circle cx="20" cy="27" r="2" fill="#F3EEDD" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#24402A] leading-none">
                SoilOAP
              </span>
              <span className="text-[11px] sm:text-xs text-[#5B7F3A] font-medium tracking-normal mt-0.5">
                {SITE_METADATA.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1A211B]/80 hover:text-[#24402A] transition-colors relative py-1 hover:border-b-2 hover:border-[#5B7F3A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Button (Clean, no indicator dot) */}
          <div className="hidden sm:flex items-center">
            <a
              href={SITE_METADATA.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-md bg-[#24402A] text-[#F3EEDD] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#1a301f] transition-all duration-200 border border-[#24402A] shadow-sm hover:shadow active:translate-y-0.5"
            >
              {/* WhatsApp Minimal Custom SVG Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.64 18.87L4.54 19.68L5.37 16.66L5.17 16.34C4.38 15.08 3.8 13.51 3.8 11.91C3.8 7.37 7.51 3.67 12.05 3.67M9.22 7.57C9.04 7.57 8.87 7.58 8.7 7.74C8.48 7.92 7.84 8.52 7.84 9.75C7.84 10.98 8.74 12.16 8.87 12.33C9 12.5 10.63 15.02 13.12 16.1C15.19 17 15.61 16.83 16.06 16.78C16.5 16.74 17.5 16.19 17.7 15.61C17.9 15.03 17.9 14.54 17.84 14.43C17.78 14.33 17.63 14.27 17.41 14.16C17.18 14.05 16.09 13.51 15.89 13.44C15.68 13.36 15.54 13.33 15.39 13.55C15.24 13.77 14.81 14.3 14.68 14.45C14.55 14.6 14.42 14.62 14.2 14.51C13.97 14.4 13.04 14.1 11.93 13.11C11.07 12.34 10.49 11.39 10.38 11.17C10.27 10.95 10.37 10.83 10.48 10.72C10.58 10.62 10.7 10.47 10.81 10.34C10.92 10.21 10.96 10.12 11.03 9.97C11.1 9.83 11.07 9.7 11.01 9.59C10.96 9.48 10.52 8.39 10.34 7.95C10.16 7.52 9.98 7.58 9.83 7.57C9.69 7.56 9.53 7.57 9.22 7.57Z" />
              </svg>
              <span>Pesan via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SITE_METADATA.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan via WhatsApp"
              className="p-2 rounded-md bg-[#24402A] text-[#F3EEDD] hover:bg-[#1a301f]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2Z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#24402A] hover:bg-[#24402A]/5 rounded-md focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#24402A]/10 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1A211B] hover:bg-[#24402A]/5 rounded"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={SITE_METADATA.contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#24402A] text-[#F3EEDD] text-sm font-semibold"
              >
                <span>Pesan via WhatsApp</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
