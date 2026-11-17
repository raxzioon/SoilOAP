import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const dropRef = useRef<SVGCircleElement>(null);
  const ripple1Ref = useRef<SVGEllipseElement>(null);
  const ripple2Ref = useRef<SVGEllipseElement>(null);
  const bottleRef = useRef<SVGGElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Tetesan minyak jatuh & riak menjernihkan air
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Inisialisasi awal
      gsap.set(dropRef.current, { y: -80, opacity: 0 });
      gsap.set([ripple1Ref.current, ripple2Ref.current], { scale: 0.2, opacity: 0, transformOrigin: 'center center' });
      gsap.set(bottleRef.current, { y: 40, opacity: 0 });
      gsap.set(textContentRef.current, { y: 30, opacity: 0 });

      // Urutan animasi: teks masuk -> tetes minyak jatuh -> riak hijau membesar -> botol SoilOAP muncul
      tl.to(textContentRef.current, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
        .to(dropRef.current, { y: 220, opacity: 1, duration: 0.9, ease: 'power2.in' }, '-=0.4')
        .to(dropRef.current, { opacity: 0, scale: 1.5, duration: 0.15 })
        .to(
          ripple1Ref.current,
          { scale: 1.8, opacity: 0.8, duration: 1.2, ease: 'power1.out' },
          '-=0.1'
        )
        .to(
          ripple2Ref.current,
          { scale: 2.3, opacity: 0.5, duration: 1.4, ease: 'power1.out' },
          '-=0.9'
        )
        .to(
          bottleRef.current,
          { y: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' },
          '-=1.1'
        );

      // Subtle float animation for the bottle once emerged
      gsap.to(bottleRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5,
      });
    }, heroRef);

    // Subtle cursor glow in hero (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };

    const heroEl = heroRef.current;
    if (heroEl && window.innerWidth >= 1024) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      ctx.revert();
      if (heroEl) heroEl.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle cursor glow (desktop only, non-neon, earth-tone lime) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#A9C23F]/15 blur-3xl opacity-0 lg:opacity-70 transition-opacity duration-300 -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Asymmetric Left-Bottom Column: Editorial Headline & Copy */}
          <div ref={textContentRef} className="lg:col-span-7 xl:col-span-7 z-10">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#24402A]/10 border border-[#24402A]/15 text-[#24402A] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
              Inisiatif Sirkular Bojongsoang • Dayeuhkolot • Baleendah
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#1A211B] leading-[1.08] tracking-tight">
              Dari Jelantah, <br />
              <span className="text-[#24402A] italic">Kembali Bersih.</span>
            </h1>

            {/* Subheadline (Grounded, specific local tone) */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#1A211B]/85 max-w-2xl font-normal leading-relaxed">
              Sabun cair pencuci piring & peralatan dapur yang dibuat dari pemurnian minyak jelantah warung kuliner lokal
              dengan adsorben arang aktif, disaponifikasi KOH murni. Ampuh meluruhkan lemak masakan, ramah untuk saluran air.
            </p>

            {/* Hand-written field note (Caveat) */}
            <div className="mt-4 flex items-center gap-2 text-[#5B7F3A] font-handwriting text-xl sm:text-2xl transform -rotate-1 select-none">
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>1 liter jelantah diselamatkan jadi 4 liter sabun (8 botol 500 mL)</span>
            </div>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proses"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#24402A] text-[#F3EEDD] text-sm sm:text-base font-semibold tracking-wide hover:bg-[#1a301f] transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <span>Lihat Alur Pemurnian</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#kemitraan"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#F3EEDD] text-[#24402A] text-sm sm:text-base font-semibold tracking-wide border-2 border-[#24402A]/30 hover:border-[#24402A] hover:bg-[#EAE4CE] transition-all duration-200"
              >
                <span>Gabung Jadi Mitra UMKM</span>
              </a>
            </div>

            {/* Quick Micro-stats under CTAs */}
            <div className="mt-8 pt-6 border-t border-[#24402A]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#1A211B]/80">
              <div>
                <span className="block font-bold text-[#24402A] text-base">pH 8,5 – 9,5</span>
                <span>Standar cuci piring dapur</span>
              </div>
              <div>
                <span className="block font-bold text-[#24402A] text-base">Rp4.500 / Liter</span>
                <span>Jelantah dibeli dari warung</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-bold text-[#24402A] text-base">Bojongsoang</span>
                <span>Penjemputan rutin gratis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom SVG Bottle & Drop Interaction Graphic */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] flex items-center justify-center">
              <svg
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-xl"
              >
                <defs>
                  {/* Liquid Gradient: Clear translucent emerald green */}
                  <linearGradient id="soapLiquidGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4E9C68" />
                    <stop offset="50%" stopColor="#6DB884" />
                    <stop offset="100%" stopColor="#3F8557" />
                  </linearGradient>

                  {/* Bottle Sheen Reflection */}
                  <linearGradient id="bottleSheen" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>

                  {/* Amber Jelantah Drop Color */}
                  <radialGradient id="oilDropGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#613F1E" />
                    <stop offset="70%" stopColor="#2B1B0E" />
                    <stop offset="100%" stopColor="#150C05" />
                  </radialGradient>
                </defs>

                {/* River Water Surface Platform */}
                <ellipse cx="200" cy="440" rx="160" ry="32" fill="#529E7D" fillOpacity="0.35" />

                {/* Animated Expanding Ripples (Green clear water rippling outwards) */}
                <ellipse
                  ref={ripple2Ref}
                  cx="200"
                  cy="440"
                  rx="90"
                  ry="20"
                  stroke="#A9C23F"
                  strokeWidth="2.5"
                  fill="#7BC4A4"
                  fillOpacity="0.25"
                />
                <ellipse
                  ref={ripple1Ref}
                  cx="200"
                  cy="440"
                  rx="60"
                  ry="14"
                  stroke="#5B7F3A"
                  strokeWidth="3"
                  fill="#529E7D"
                  fillOpacity="0.4"
                />

                {/* The Falling Jelantah Oil Drop */}
                <circle
                  ref={dropRef}
                  cx="200"
                  cy="180"
                  r="12"
                  fill="url(#oilDropGrad)"
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
                />

                {/* The SoilOAP Bottle Mockup (Pure Hand-Crafted SVG) */}
                <g ref={bottleRef} id="soiloap-bottle-group">
                  {/* Bottle Cap (Tamper-evident flip-top) */}
                  <rect x="180" y="70" width="40" height="26" rx="4" fill="#24402A" />
                  <rect x="184" y="96" width="32" height="6" fill="#1A2B1D" />
                  <line x1="178" y1="84" x2="222" y2="84" stroke="#5B7F3A" strokeWidth="1.5" />

                  {/* Bottle Neck */}
                  <path d="M184 102 L184 125 L160 160 L240 160 L216 125 L216 102 Z" fill="#E2EBE2" fillOpacity="0.75" />

                  {/* Bottle Main Body Outer Outline */}
                  <path
                    d="M160 160 C140 185 130 220 130 270 L130 400 C130 422 148 435 200 435 C252 435 270 422 270 400 L270 270 C270 220 260 185 240 160 Z"
                    fill="#DCE8DC"
                    fillOpacity="0.4"
                    stroke="#24402A"
                    strokeWidth="3.5"
                  />

                  {/* Translucent Green Soap Liquid inside bottle */}
                  <path
                    d="M134 200 C145 204 165 208 200 208 C235 208 255 204 266 200 L266 398 C266 418 248 430 200 430 C152 430 134 418 134 398 Z"
                    fill="url(#soapLiquidGrad)"
                  />

                  {/* Liquid Surface Meniscus */}
                  <ellipse cx="200" cy="204" rx="66" ry="7" fill="#88D19F" opacity="0.8" />

                  {/* Light Reflection Sheen on glass/plastic */}
                  <path
                    d="M140 215 C138 240 138 370 144 400 C146 370 146 240 150 215 Z"
                    fill="url(#bottleSheen)"
                  />

                  {/* Paper-cut Label on Bottle */}
                  <rect
                    x="142"
                    y="228"
                    width="116"
                    height="160"
                    rx="8"
                    fill="#F3EEDD"
                    stroke="#6B4A2B"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
                  />

                  {/* Label Header Border */}
                  <line x1="148" y1="242" x2="252" y2="242" stroke="#24402A" strokeWidth="1" strokeDasharray="3 2" />

                  {/* Label Brand Logo */}
                  <circle cx="200" cy="262" r="14" fill="#24402A" />
                  <path d="M200 252 C200 252 194 260 194 264 C194 267.3 196.7 270 200 270 C203.3 270 206 267.3 206 264 C206 260 200 252 200 252 Z" fill="#A9C23F" />
                  <circle cx="200" cy="265" r="1.5" fill="#F3EEDD" />

                  {/* Label Brand Title */}
                  <text
                    x="200"
                    y="292"
                    textAnchor="middle"
                    fill="#24402A"
                    fontFamily="serif"
                    fontWeight="bold"
                    fontSize="18"
                    letterSpacing="0.5"
                  >
                    SoilOAP
                  </text>

                  {/* Label Subtitle */}
                  <text
                    x="200"
                    y="306"
                    textAnchor="middle"
                    fill="#5B7F3A"
                    fontSize="8.5"
                    fontWeight="600"
                  >
                    SABUN CUCI PIRING & DAPUR
                  </text>

                  {/* Lime Graphic & Fragrance Note */}
                  <g transform="translate(178, 314)">
                    <circle cx="22" cy="12" r="10" fill="#A9C23F" />
                    <circle cx="22" cy="12" r="8" fill="#C2DC58" />
                    <line x1="22" y1="4" x2="22" y2="20" stroke="#5B7F3A" strokeWidth="1" />
                    <line x1="14" y1="12" x2="30" y2="12" stroke="#5B7F3A" strokeWidth="1" />
                  </g>

                  <text
                    x="200"
                    y="344"
                    textAnchor="middle"
                    fill="#24402A"
                    fontSize="8"
                    fontWeight="bold"
                  >
                    AROMA JERUK NIPIS • pH 8,5–9,5
                  </text>

                  {/* Eco-Impact Badge on Label */}
                  <rect x="150" y="354" width="100" height="18" rx="4" fill="#24402A" />
                  <text
                    x="200"
                    y="366"
                    textAnchor="middle"
                    fill="#F3EEDD"
                    fontSize="7.5"
                    fontWeight="bold"
                  >
                    Selamatkan 125 mL Jelantah
                  </text>

                  {/* Batch Number Stamp */}
                  <text
                    x="200"
                    y="382"
                    textAnchor="middle"
                    fill="#6B4A2B"
                    fontFamily="monospace"
                    fontSize="7"
                    letterSpacing="0.5"
                  >
                    BATCH 01 / BOJONGSOANG • 500 mL
                  </text>
                </g>
              </svg>

              {/* Floating Hand-written Annotation Tag */}
              <div className="absolute -bottom-2 -left-6 sm:-left-10 bg-[#F3EEDD] border border-[#24402A]/20 px-3 py-1.5 rounded shadow-sm rotate-2 font-handwriting text-base sm:text-lg text-[#24402A] select-none">
                ★ 100% dari jelantah lokal terpurifikasi
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Hint */}
        <div className="mt-12 lg:mt-6 flex flex-col items-center justify-center text-[#24402A]/70 select-none">
          <span className="text-xs tracking-widest uppercase font-semibold mb-2">Gulir untuk eksplorasi</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#24402A]/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-[#24402A] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
