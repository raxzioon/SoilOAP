import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * LandscapeCanvas:
 * Komponen SVG berlapis yang menghadirkan lanskap Jawa Barat (bukit, sawah terasering, sungai, kebun jeruk nipis)
 * dalam gaya paper-cut berlapis dengan bayangan tipis antar-layer.
 *
 * Warna langit, bukit, sawah, dan sungai diinterpolasi secara halus dari kusam (Masalah)
 * ke hijau cerah jernih (Dampak/Sirkular) melalui GSAP + CSS Variables pada :root.
 */
export const LandscapeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<SVGGElement>(null); // Bukit Jauh
  const layer2Ref = useRef<SVGGElement>(null); // Bukit Tengah / Kebun
  const layer3Ref = useRef<SVGGElement>(null); // Sawah Terasering
  const layer4Ref = useRef<SVGGElement>(null); // Aliran Sungai
  const sunRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Interpolasi CSS Variables Lanskap seiring scroll seluruh halaman
      // Dari kondisi kusam/tercemar (atas) menuju pemulihan alam yang hijau jernih (bawah)
      const colorTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      colorTimeline.to(
        ':root',
        {
          '--sky-top': '#E0ECE0',
          '--sky-bottom': '#C8DEC8',
          '--sun-glow': '#FFF4DE',
          '--hill-far': '#4E6847',
          '--hill-mid': '#3B5935',
          '--rice-terrace': '#274422',
          '--river-water': '#529E7D',
          '--river-sheen': '#7BC4A4',
          duration: 1,
          ease: 'power1.inOut',
        },
        0
      );

      // 2. Parallax per layer (Maksimal 5 di desktop, 3 di mobile)
      if (layer1Ref.current) {
        gsap.to(layer1Ref.current, {
          y: isMobile ? -30 : -70,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      if (layer2Ref.current && !isMobile) {
        gsap.to(layer2Ref.current, {
          y: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      if (layer3Ref.current) {
        gsap.to(layer3Ref.current, {
          y: isMobile ? -60 : -180,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      if (layer4Ref.current) {
        gsap.to(layer4Ref.current, {
          y: isMobile ? -90 : -240,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      if (sunRef.current) {
        gsap.to(sunRef.current, {
          y: isMobile ? 30 : 60,
          opacity: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Dynamic Layered SVG Landscape */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--sky-top)" />
            <stop offset="100%" stopColor="var(--sky-bottom)" />
          </linearGradient>

          {/* Paper-cut Drop Shadows */}
          <filter id="layerShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1A211B" floodOpacity="0.08" />
          </filter>
          <filter id="riverShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1A211B" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* 1. Base Sky Background */}
        <rect width="1440" height="900" fill="url(#skyGrad)" />

        {/* Sun / Soft Morning Glow */}
        <circle
          ref={sunRef}
          cx="1080"
          cy="260"
          r="110"
          fill="var(--sun-glow)"
          opacity="0.7"
          filter="blur(15px)"
        />

        {/* 2. Layer 1: Distant Hills (Paper-cut Layer 1) */}
        <g ref={layer1Ref} filter="url(#layerShadow)">
          <path
            d="M-20 420 C180 370 340 430 520 380 C700 330 890 390 1060 360 C1240 330 1380 390 1480 370 L1480 920 L-20 920 Z"
            fill="var(--hill-far)"
            opacity="0.85"
          />
        </g>

        {/* 3. Layer 2: Mid Hills / Tea & Citrus Grove (Desktop only in 5-layer mode) */}
        <g ref={layer2Ref} className="hidden md:block" filter="url(#layerShadow)">
          <path
            d="M-40 490 C120 440 280 470 440 430 C620 390 760 480 940 440 C1120 400 1280 460 1460 430 L1460 920 L-40 920 Z"
            fill="var(--hill-mid)"
            opacity="0.9"
          />
        </g>

        {/* 4. Layer 3: Terraced Rice Fields / Sawah Terasering (Paper-cut Layer 3) */}
        <g ref={layer3Ref} filter="url(#layerShadow)">
          <path
            d="M-30 570 C140 520 320 590 540 540 C780 490 920 610 1140 560 C1320 520 1420 570 1480 550 L1480 920 L-30 920 Z"
            fill="var(--rice-terrace)"
          />
          {/* Sawah Ridge Contour Lines */}
          <path
            d="M-10 630 C200 580 440 660 700 600 C980 540 1220 640 1460 600"
            stroke="var(--color-lumut)"
            strokeWidth="2.5"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M-10 700 C240 650 520 730 820 670 C1100 610 1320 710 1460 670"
            stroke="var(--color-lumut)"
            strokeWidth="2"
            strokeOpacity="0.3"
            fill="none"
          />
        </g>

        {/* 5. Layer 4: Winding River / Aliran Air (Paper-cut Layer 4) */}
        <g ref={layer4Ref} filter="url(#riverShadow)">
          {/* Main River Bed */}
          <path
            d="M380 570 C410 630 460 680 520 720 C600 780 720 810 820 900 L680 900 C580 820 490 780 420 740 C360 700 320 650 310 570 Z"
            fill="var(--river-water)"
          />
          {/* River Water Flow Highlights */}
          <path
            d="M360 600 C390 650 440 700 500 740 C570 790 670 830 750 900"
            stroke="var(--river-sheen)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="water-flow-line"
            fill="none"
          />
        </g>
      </svg>

      {/* 6. Foreground Ambient Framing: Daun Jeruk Nipis & Pisang */}
      {/* Top Left: Ranting Jeruk Nipis dengan Buah */}
      <div className="absolute top-0 left-0 w-44 md:w-64 h-48 md:h-64 pointer-events-none select-none z-10 animate-sway">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full drop-shadow-sm">
          {/* Ranting Kayu */}
          <path
            d="M-10 10 Q60 40 120 70 T200 110"
            stroke="#6B4A2B"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M60 40 Q80 80 95 120"
            stroke="#6B4A2B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Daun 1 */}
          <path
            d="M120 70 C140 40 180 50 190 75 C180 95 140 90 120 70 Z"
            fill="#24402A"
          />
          <path
            d="M120 70 Q155 70 190 75"
            stroke="#A9C23F"
            strokeWidth="1.2"
            opacity="0.8"
          />
          {/* Daun 2 */}
          <path
            d="M95 120 C115 135 135 125 145 105 C130 90 105 100 95 120 Z"
            fill="#5B7F3A"
          />
          {/* Buah Jeruk Nipis Segar */}
          <circle cx="100" cy="135" r="18" fill="#A9C23F" />
          <circle cx="95" cy="130" r="15" fill="#C2DC58" opacity="0.6" />
          <circle cx="100" cy="120" r="2.5" fill="#24402A" />
        </svg>
      </div>

      {/* Top Right: Daun Jeruk Nipis */}
      <div className="absolute top-0 right-0 w-40 md:w-56 h-40 md:h-56 pointer-events-none select-none z-10 animate-sway-reverse">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <path
            d="M210 15 Q140 35 90 80 T20 130"
            stroke="#6B4A2B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Daun Atas */}
          <path
            d="M90 80 C60 60 50 20 80 15 C105 20 110 60 90 80 Z"
            fill="#24402A"
          />
          {/* Daun Bawah */}
          <path
            d="M50 110 C20 105 15 80 40 70 C65 75 65 100 50 110 Z"
            fill="#5B7F3A"
          />
          {/* Jeruk Nipis Kecil */}
          <circle cx="65" cy="120" r="14" fill="#A9C23F" />
          <circle cx="62" cy="116" r="11" fill="#C2DC58" opacity="0.5" />
        </svg>
      </div>

      {/* Bottom Right: Siluet Daun Pisang Melengkung */}
      <div className="absolute -bottom-10 right-0 w-52 md:w-80 h-52 md:h-80 pointer-events-none select-none z-10 opacity-70">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <path
            d="M320 320 C240 260 160 180 110 70 C160 110 240 180 320 220 Z"
            fill="#24402A"
            opacity="0.85"
          />
          <path
            d="M320 320 Q215 195 110 70"
            stroke="#A9C23F"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
};
