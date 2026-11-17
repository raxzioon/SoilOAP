import React from 'react';
import type { ProcessStep } from '../../data/processSteps';

interface ProcessStageSVGProps {
  currentStep: number; // 0 sampai 8
  stepData: ProcessStep;
  progressInStep?: number; // 0 sampai 1
}

export const ProcessStageSVG: React.FC<ProcessStageSVGProps> = ({
  currentStep,
  stepData,
}) => {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px] rounded-2xl overflow-hidden bg-[#E2DBC7] border-2 border-[#24402A]/25 shadow-xl select-none">
      <svg
        viewBox="0 0 800 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <defs>
          {/* Wood Planks Pattern */}
          <linearGradient id="woodTableGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8C643E" />
            <stop offset="50%" stopColor="#75522F" />
            <stop offset="100%" stopColor="#5E3F21" />
          </linearGradient>

          {/* Saung Outdoor View Gradient (Morning to Midday) */}
          <linearGradient id="outdoorSky" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={currentStep <= 2 ? '#DFD7C2' : currentStep <= 5 ? '#DFEAD7' : '#E4F3E4'}
            />
            <stop
              offset="100%"
              stopColor={currentStep <= 2 ? '#C8BAA1' : currentStep <= 5 ? '#C1D9BC' : '#CFE3D0'}
            />
          </linearGradient>

          {/* Vessel Glass Sheen */}
          <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
          </linearGradient>

          {/* Golden Amber Oil Gradient */}
          <linearGradient id="goldOilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFCC33" />
            <stop offset="100%" stopColor="#D79A22" />
          </linearGradient>

          {/* Paper-cut Filter */}
          <filter id="stageShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#1A211B" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* 1. BACKGROUND: Saung Balcony overlooking West Java Landscape */}
        <rect x="0" y="0" width="800" height="340" fill="url(#outdoorSky)" />

        {/* Distant Hills outside saung */}
        <path
          d="M0 240 C120 200 280 230 420 190 C560 150 680 210 800 180 L800 340 L0 340 Z"
          fill={currentStep <= 2 ? '#8A8F75' : '#4E6845'}
          opacity="0.6"
        />

        {/* Mid Hills / Terraced Fields outside */}
        <path
          d="M0 280 C180 240 320 290 520 250 C680 220 740 270 800 250 L800 340 L0 340 Z"
          fill={currentStep <= 2 ? '#6B7355' : '#3B5935'}
          opacity="0.8"
        />

        {/* River winding in the background */}
        <path
          d="M260 270 C310 290 380 300 450 340 L380 340 C320 310 280 295 240 270 Z"
          fill={currentStep <= 2 ? '#8F8261' : '#529E7D'}
        />

        {/* Saung Bamboo Balcony Pillars */}
        <rect x="40" y="0" width="22" height="350" fill="#7A5634" stroke="#5E3F21" strokeWidth="2" />
        <rect x="738" y="0" width="22" height="350" fill="#7A5634" stroke="#5E3F21" strokeWidth="2" />
        <rect x="0" y="325" width="800" height="15" fill="#6B4A2B" stroke="#5E3F21" strokeWidth="2" />

        {/* 2. FOREGROUND: Wooden Workbench (Meja Kerja Saung) */}
        <rect x="0" y="340" width="800" height="180" fill="url(#woodTableGrad)" />
        {/* Table Plank Lines */}
        <line x1="0" y1="380" x2="800" y2="380" stroke="#5E3F21" strokeWidth="2" opacity="0.7" />
        <line x1="0" y1="425" x2="800" y2="425" stroke="#5E3F21" strokeWidth="2" opacity="0.7" />
        <line x1="0" y1="470" x2="800" y2="470" stroke="#5E3F21" strokeWidth="2" opacity="0.7" />

        {/* Fresh Lime Leaves decoration on the table corner */}
        <g transform="translate(680, 310)">
          <path d="M40 30 C70 10 90 40 80 60 C60 70 30 50 40 30 Z" fill="#24402A" />
          <path d="M40 30 C20 45 35 70 55 65" stroke="#A9C23F" strokeWidth="1.5" fill="none" />
          <circle cx="45" cy="55" r="16" fill="#A9C23F" />
          <circle cx="41" cy="51" r="13" fill="#C2DC58" opacity="0.6" />
        </g>

        {/* Lab / Batch Record Book on left side of table */}
        <g transform="translate(45, 365)" filter="url(#stageShadow)">
          <rect x="0" y="0" width="95" height="120" rx="4" fill="#F3EEDD" stroke="#6B4A2B" strokeWidth="1.5" />
          <rect x="0" y="0" width="16" height="120" rx="2" fill="#24402A" />
          <line x1="26" y1="20" x2="85" y2="20" stroke="#6B4A2B" strokeWidth="1" strokeDasharray="3 2" />
          <text x="26" y="35" fill="#24402A" fontSize="7" fontWeight="bold" fontFamily="sans-serif">LOG BATCH 01</text>
          <text x="26" y="48" fill="#6B4A2B" fontSize="6.5" fontFamily="monospace">STATUS: TAHAP {stepData.stepNumber}</text>
          <line x1="26" y1="58" x2="85" y2="58" stroke="#6B4A2B" strokeWidth="0.8" opacity="0.4" />
          <line x1="26" y1="70" x2="85" y2="70" stroke="#6B4A2B" strokeWidth="0.8" opacity="0.4" />
          <line x1="26" y1="82" x2="85" y2="82" stroke="#6B4A2B" strokeWidth="0.8" opacity="0.4" />
          <line x1="26" y1="94" x2="85" y2="94" stroke="#6B4A2B" strokeWidth="0.8" opacity="0.4" />
          <circle cx="70" cy="98" r="8" fill="#5B7F3A" opacity="0.3" />
          <text x="70" y="101" fill="#24402A" fontSize="6" fontWeight="bold" textAnchor="middle">QC</text>
        </g>

        {/* 3. DYNAMIC STEP-SPECIFIC SCENE (Central Interactive Stage) */}

        {/* =========================================================================
            LANGKAH 00: PENJEMPUTAN JERIKEN 20 L & PENIMBANGAN
        ========================================================================= */}
        {currentStep === 0 && (
          <g id="step-0-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* Courier Motor & Jeriken 20 L entering */}
            <g transform="translate(160, 220)" filter="url(#stageShadow)">
              {/* Motor Silhouette */}
              <path d="M30 110 L70 80 L110 80 L140 110" stroke="#24402A" strokeWidth="6" strokeLinecap="round" />
              <circle cx="30" cy="110" r="22" fill="#1A211B" stroke="#F3EEDD" strokeWidth="3" />
              <circle cx="140" cy="110" r="22" fill="#1A211B" stroke="#F3EEDD" strokeWidth="3" />
              {/* Jeriken 20 L on rear rack */}
              <rect x="75" y="40" width="48" height="60" rx="6" fill="#D79A22" stroke="#6B4A2B" strokeWidth="2.5" />
              <rect x="80" y="32" width="16" height="10" rx="2" fill="#24402A" />
              <path d="M102 40 L102 30 C102 26 118 26 118 30 L118 40" stroke="#6B4A2B" strokeWidth="3" fill="none" />
              <text x="99" y="75" fill="#1A211B" fontSize="9" fontWeight="bold" textAnchor="middle">20 L</text>
            </g>

            {/* Pouring Stream into Digital Scale Platform */}
            <path
              d="M320 280 C360 290 390 320 400 370"
              stroke="#2B1B0E"
              strokeWidth="10"
              strokeLinecap="round"
              className="animate-pulse"
            />

            {/* Digital Scale on table */}
            <g transform="translate(350, 360)" filter="url(#stageShadow)">
              <rect x="0" y="55" width="160" height="25" rx="4" fill="#D1C7B2" stroke="#6B4A2B" strokeWidth="2" />
              <rect x="15" y="45" width="130" height="12" rx="2" fill="#9C907A" />
              {/* Digital LED Screen */}
              <rect x="45" y="60" width="70" height="15" rx="3" fill="#1A211B" />
              <text x="80" y="72" fill="#A9C23F" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                15.00 kg
              </text>
              {/* Receiving Beaker */}
              <rect x="30" y="-35" width="100" height="80" rx="6" fill="#F3EEDD" fillOpacity="0.4" stroke="#24402A" strokeWidth="3" />
              {/* Dark Raw Oil Inside */}
              <rect x="34" y="0" width="92" height="42" rx="4" fill="#2B1B0E" />
              {/* Floating +1 Botol Bonus Tag */}
              <g transform="translate(140, -20)">
                <rect x="0" y="0" width="110" height="32" rx="6" fill="#24402A" stroke="#A9C23F" strokeWidth="2" />
                <text x="55" y="16" fill="#A9C23F" fontSize="10" fontWeight="bold" textAnchor="middle">+1 BOTOL BONUS</text>
                <text x="55" y="26" fill="#F3EEDD" fontSize="7.5" textAnchor="middle">Tiap 15 L Setoran</text>
              </g>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 01: PENYARINGAN AWAL (KASA STAINLESS MESH 100)
        ========================================================================= */}
        {currentStep === 1 && (
          <g id="step-1-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* Tilting Oil Container Pouring */}
            <g transform="translate(260, 180) rotate(-25)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="70" height="90" rx="8" fill="#D79A22" stroke="#6B4A2B" strokeWidth="2.5" />
              <path d="M50 0 L50 -15 L70 -15 L70 0 Z" fill="#24402A" />
            </g>

            {/* Dirty Oil Stream */}
            <path
              d="M330 200 C360 215 390 230 400 250"
              stroke="#2B1B0E"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Mesh 100 Stainless Funnel & Sieve Filter */}
            <g transform="translate(320, 240)" filter="url(#stageShadow)">
              {/* Stainless Funnel Outer */}
              <path d="M20 10 L140 10 L100 80 L60 80 Z" fill="#B0B8B0" stroke="#24402A" strokeWidth="3" />
              {/* Mesh 100 Grid Pattern */}
              <line x1="35" y1="25" x2="125" y2="25" stroke="#6B4A2B" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="45" y1="40" x2="115" y2="40" stroke="#6B4A2B" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="55" y1="55" x2="105" y2="55" stroke="#6B4A2B" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Solid Residue / Fried Batter Crumbs trapped on mesh */}
              <circle cx="65" cy="30" r="5" fill="#2B1B0E" />
              <circle cx="85" cy="35" r="7" fill="#150C05" />
              <circle cx="100" cy="28" r="4.5" fill="#2B1B0E" />
              <circle cx="75" cy="45" r="6" fill="#150C05" />
              {/* Funnel Spout Tube */}
              <rect x="72" y="80" width="16" height="30" fill="#9BA69B" stroke="#24402A" strokeWidth="2" />
              {/* Filtered Drips into Bottom Vessel */}
              <circle cx="80" cy="120" r="4" fill="#5C3E1B" />
              <circle cx="80" cy="135" r="5" fill="#5C3E1B" />
            </g>

            {/* Receiving Tank with Amber Keruh Oil */}
            <g transform="translate(330, 360)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="140" height="95" rx="8" fill="#F3EEDD" fillOpacity="0.4" stroke="#24402A" strokeWidth="3" />
              <rect x="4" y="25" width="132" height="66" rx="6" fill="#5C3E1B" />
              <line x1="20" y1="45" x2="40" y2="45" stroke="#F3EEDD" strokeWidth="1.5" opacity="0.6" />
              <line x1="20" y1="65" x2="50" y2="65" stroke="#F3EEDD" strokeWidth="1.5" opacity="0.6" />
              {/* Tag note */}
              <rect x="150" y="30" width="130" height="28" rx="4" fill="#F3EEDD" stroke="#6B4A2B" strokeWidth="1.5" />
              <text x="215" y="48" fill="#24402A" fontSize="9" fontWeight="bold" textAnchor="middle">Kasa Mesh 100</text>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 02: PEMURNIAN ARANG AKTIF 65–70°C (30 MENIT)
        ========================================================================= */}
        {currentStep === 2 && (
          <g id="step-2-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* Stove / Heating Element under vessel */}
            <g transform="translate(310, 420)">
              <rect x="20" y="10" width="140" height="15" rx="4" fill="#3D2918" stroke="#1A211B" strokeWidth="2" />
              {/* Flame Burner SVG */}
              <path d="M40 10 Q50 -12 60 10 Q70 -16 80 10 Q90 -14 100 10 Q110 -18 120 10 Q130 -10 140 10 Z" fill="#E65100" />
              <path d="M50 10 Q60 -4 70 10 Q80 -7 90 10 Q100 -5 110 10 Q120 -8 130 10 Z" fill="#FFB300" />
            </g>

            {/* Reaction Cauldron on heat */}
            <g transform="translate(320, 240)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="160" height="180" rx="12" fill="#EAE4CE" stroke="#24402A" strokeWidth="3.5" />
              {/* Fluid: Golden Transparent Oil */}
              <rect x="6" y="40" width="148" height="134" rx="8" fill="url(#goldOilGrad)" />
              {/* Swirling Black Activated Carbon Particles */}
              <circle cx="40" cy="70" r="3.5" fill="#150C05" className="animate-ping" />
              <circle cx="80" cy="90" r="4" fill="#150C05" />
              <circle cx="120" cy="65" r="3" fill="#150C05" />
              <circle cx="60" cy="130" r="4.5" fill="#150C05" />
              <circle cx="105" cy="140" r="3.5" fill="#150C05" />
              <circle cx="85" cy="115" r="5" fill="#150C05" />

              {/* Fading Odor Vapor Waves */}
              <path d="M50 -10 Q60 -30 70 -50" stroke="#D79A22" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" fill="none" />
              <path d="M80 -10 Q90 -35 100 -55" stroke="#D79A22" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" fill="none" />
              <path d="M110 -10 Q120 -28 130 -48" stroke="#D79A22" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" fill="none" />
            </g>

            {/* Left Instrument: Thermometer Count-up Gauge (68°C) */}
            <g transform="translate(180, 250)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="75" height="130" rx="8" fill="#F3EEDD" stroke="#24402A" strokeWidth="2" />
              <text x="37.5" y="24" fill="#6B4A2B" fontSize="8.5" fontWeight="bold" textAnchor="middle">SUHU REAKTOR</text>
              <text x="37.5" y="48" fill="#C2185B" fontSize="16" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                68°C
              </text>
              {/* Mercury Column */}
              <rect x="32" y="60" width="11" height="55" rx="5" fill="#EAE4CE" stroke="#6B4A2B" strokeWidth="1" />
              <rect x="33" y="75" width="9" height="40" rx="4" fill="#C2185B" />
              <circle cx="37.5" cy="115" r="9" fill="#C2185B" />
              <text x="37.5" y="127" fill="#24402A" fontSize="7" fontWeight="bold" textAnchor="middle">65–70°C OK</text>
            </g>

            {/* Right Instrument: 30-Minute Timer Ring */}
            <g transform="translate(540, 250)" filter="url(#stageShadow)">
              <circle cx="50" cy="50" r="45" fill="#F3EEDD" stroke="#24402A" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="35" stroke="#EAE4CE" strokeWidth="6" fill="none" />
              <circle cx="50" cy="50" r="35" stroke="#5B7F3A" strokeWidth="6" strokeDasharray="180 220" fill="none" strokeLinecap="round" />
              <text x="50" y="46" fill="#24402A" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">30:00</text>
              <text x="50" y="60" fill="#5B7F3A" fontSize="7.5" fontWeight="bold" textAnchor="middle">MENIT KONTAK</text>
              <rect x="10" y="105" width="80" height="20" rx="4" fill="#24402A" />
              <text x="50" y="118" fill="#A9C23F" fontSize="7.5" fontWeight="bold" textAnchor="middle">Arang 3% Aktif</text>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 03: LARUTAN ALKALI KOH
        ========================================================================= */}
        {currentStep === 3 && (
          <g id="step-3-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* KOH Flakes Dispenser Container */}
            <g transform="translate(240, 180) rotate(-20)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="80" height="100" rx="6" fill="#F3EEDD" stroke="#24402A" strokeWidth="2.5" />
              <rect x="0" y="0" width="80" height="25" fill="#24402A" />
              <text x="40" y="16" fill="#F3EEDD" fontSize="9" fontWeight="bold" textAnchor="middle">KOH MURNI</text>
            </g>

            {/* White KOH Flakes falling */}
            <g>
              <polygon points="340,220 346,222 344,228 338,225" fill="#FFFFFF" stroke="#6B4A2B" strokeWidth="1" />
              <polygon points="355,235 362,238 359,244 352,240" fill="#FFFFFF" stroke="#6B4A2B" strokeWidth="1" />
              <polygon points="348,255 355,257 352,263 346,260" fill="#FFFFFF" stroke="#6B4A2B" strokeWidth="1" />
              <polygon points="365,270 372,272 369,278 362,275" fill="#FFFFFF" stroke="#6B4A2B" strokeWidth="1" />
            </g>

            {/* Glass Beaker with Demineralized Water */}
            <g transform="translate(320, 280)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="160" height="160" rx="8" fill="#F3EEDD" fillOpacity="0.3" stroke="#24402A" strokeWidth="3" />
              {/* Clear Alkaline Solution */}
              <rect x="6" y="40" width="148" height="114" rx="6" fill="#CFE3D0" fillOpacity="0.8" />
              {/* Heat shimmer lines (Exothermic reaction) */}
              <path d="M40 30 Q45 15 50 30 Q55 15 60 30" stroke="#FF9800" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M80 30 Q85 15 90 30 Q95 15 100 30" stroke="#FF9800" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M120 30 Q125 15 130 30 Q135 15 140 30" stroke="#FF9800" strokeWidth="2" fill="none" opacity="0.7" />
            </g>

            {/* Side Thermometer Card showing 48°C safe temperature */}
            <g transform="translate(520, 300)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="130" height="95" rx="6" fill="#F3EEDD" stroke="#24402A" strokeWidth="2" />
              <text x="65" y="22" fill="#24402A" fontSize="9" fontWeight="bold" textAnchor="middle">SUHU LARUTAN</text>
              <text x="65" y="48" fill="#E65100" fontSize="18" fontFamily="monospace" fontWeight="bold" textAnchor="middle">48.5°C</text>
              <rect x="15" y="62" width="100" height="20" rx="3" fill="#5B7F3A" />
              <text x="65" y="75" fill="#F3EEDD" fontSize="8" fontWeight="bold" textAnchor="middle">AMAN (45–50°C)</text>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 04: SAPONIFIKASI (60°C) & FASE TRACE
        ========================================================================= */}
        {currentStep === 4 && (
          <g id="step-4-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* Two streams entering: Gold Oil (left) + KOH (right) */}
            <path d="M260 220 Q330 250 370 290" stroke="#D79A22" strokeWidth="8" strokeLinecap="round" />
            <path d="M540 220 Q470 250 430 290" stroke="#CFE3D0" strokeWidth="8" strokeLinecap="round" />

            {/* Main Saponification Vat */}
            <g transform="translate(300, 270)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="200" height="170" rx="14" fill="#EAE4CE" stroke="#24402A" strokeWidth="3.5" />
              {/* Opaque Creamy Soap Paste inside */}
              <rect x="8" y="45" width="184" height="120" rx="10" fill="#F5EBD0" />
              {/* Mechanical Stirrer Shaft & Impeller */}
              <rect x="96" y="-40" width="8" height="150" fill="#24402A" />
              <g transform="translate(70, 95)">
                <ellipse cx="30" cy="15" rx="35" ry="12" fill="#5B7F3A" opacity="0.7" />
                {/* Spiral Vortex Lines */}
                <path d="M10 15 Q30 28 50 15" stroke="#24402A" strokeWidth="3" fill="none" />
                <path d="M15 10 Q30 -2 45 10" stroke="#24402A" strokeWidth="2.5" fill="none" />
              </g>

              {/* TRACE Label Badge */}
              <g transform="translate(45, 120)">
                <rect x="0" y="0" width="110" height="28" rx="6" fill="#24402A" stroke="#A9C23F" strokeWidth="2" />
                <text x="55" y="14" fill="#A9C23F" fontSize="10" fontWeight="bold" textAnchor="middle">FASE TRACE</text>
                <text x="55" y="24" fill="#F3EEDD" fontSize="7.5" textAnchor="middle">Pasta Sabun Krem Terbentuk</text>
              </g>
            </g>

            {/* Left Temp Monitor: 60°C */}
            <g transform="translate(170, 310)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="95" height="75" rx="6" fill="#F3EEDD" stroke="#24402A" strokeWidth="1.5" />
              <text x="47.5" y="20" fill="#6B4A2B" fontSize="8" fontWeight="bold" textAnchor="middle">SUHU REAKSI</text>
              <text x="47.5" y="42" fill="#C2185B" fontSize="16" fontFamily="monospace" fontWeight="bold" textAnchor="middle">60.0°C</text>
              <text x="47.5" y="60" fill="#5B7F3A" fontSize="7.5" fontWeight="bold" textAnchor="middle">Termostat Stabil</text>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 05: PENGENCERAN & EKSPANSI RENDEMEN (1 : 4)
        ========================================================================= */}
        {currentStep === 5 && (
          <g id="step-5-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* Hot water pouring stream from top */}
            <path d="M400 160 L400 280" stroke="#CFE3D0" strokeWidth="12" strokeLinecap="round" opacity="0.8" />
            <text x="420" y="210" fill="#24402A" fontSize="9" fontWeight="bold">+ AIR PANAS</text>

            {/* Expanding Yield Transformation Visual */}
            <g transform="translate(140, 260)" filter="url(#stageShadow)">
              {/* 1 L Oil Block */}
              <rect x="0" y="30" width="70" height="90" rx="6" fill="#D79A22" stroke="#6B4A2B" strokeWidth="2" />
              <text x="35" y="65" fill="#1A211B" fontSize="14" fontFamily="serif" fontWeight="bold" textAnchor="middle">1 L</text>
              <text x="35" y="80" fill="#1A211B" fontSize="7.5" fontWeight="bold" textAnchor="middle">JELANTAH</text>

              {/* Conversion Arrow */}
              <g transform="translate(85, 65)">
                <path d="M0 10 L25 10 M18 3 L25 10 L18 17" stroke="#24402A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <text x="12" y="-2" fill="#5B7F3A" fontSize="9" fontWeight="bold" textAnchor="middle">1 : 4</text>
              </g>

              {/* 4 L Soap Blocks */}
              <g transform="translate(125, 10)">
                <rect x="0" y="0" width="55" height="120" rx="6" fill="#8EBF9B" stroke="#24402A" strokeWidth="2" />
                <rect x="60" y="0" width="55" height="120" rx="6" fill="#8EBF9B" stroke="#24402A" strokeWidth="2" />
                <rect x="120" y="0" width="55" height="120" rx="6" fill="#8EBF9B" stroke="#24402A" strokeWidth="2" />
                <rect x="180" y="0" width="55" height="120" rx="6" fill="#8EBF9B" stroke="#24402A" strokeWidth="2" />
                <text x="117" y="65" fill="#24402A" fontSize="18" fontFamily="serif" fontWeight="bold" textAnchor="middle">4 LITER SABUN</text>
              </g>

              {/* 8 Bottle Icons line-up */}
              <g transform="translate(380, 20)">
                <rect x="0" y="0" width="130" height="100" rx="6" fill="#F3EEDD" stroke="#5B7F3A" strokeWidth="2" />
                <text x="65" y="24" fill="#24402A" fontSize="9" fontWeight="bold" textAnchor="middle">SETARA DENGAN:</text>
                <text x="65" y="55" fill="#5B7F3A" fontSize="22" fontFamily="serif" fontWeight="bold" textAnchor="middle">8 BOTOL</text>
                <text x="65" y="75" fill="#1A211B" fontSize="8.5" textAnchor="middle">Kemasan 500 mL</text>
              </g>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 06: ADITIF FUNGSIONAL & EKSTRAK JERUK NIPIS (< 35°C)
        ========================================================================= */}
        {currentStep === 6 && (
          <g id="step-6-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* Central Mixing Cauldron turning Green */}
            <g transform="translate(300, 260)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="200" height="180" rx="14" fill="#EAE4CE" stroke="#24402A" strokeWidth="3.5" />
              {/* Green Lime Translucent Soap Liquid */}
              <rect x="8" y="45" width="184" height="128" rx="10" fill="#529E7D" />

              {/* Spinning Fresh Lime Slice in the center */}
              <g transform="translate(100, 110)">
                <circle cx="0" cy="0" r="28" fill="#A9C23F" stroke="#24402A" strokeWidth="2" />
                <circle cx="0" cy="0" r="23" fill="#C2DC58" />
                {/* Lime Segments */}
                <line x1="-20" y1="0" x2="20" y2="0" stroke="#5B7F3A" strokeWidth="1.5" />
                <line x1="0" y1="-20" x2="0" y2="20" stroke="#5B7F3A" strokeWidth="1.5" />
                <line x1="-14" y1="-14" x2="14" y2="14" stroke="#5B7F3A" strokeWidth="1.5" />
                <line x1="-14" y1="14" x2="14" y2="-14" stroke="#5B7F3A" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3" fill="#F3EEDD" />
              </g>
            </g>

            {/* 4 Droppers from 4 directions */}
            {/* Dropper 1: Pengental CMC/HPMC (Top-Left) */}
            <g transform="translate(200, 180) rotate(35)">
              <rect x="0" y="0" width="14" height="60" rx="4" fill="#F3EEDD" stroke="#24402A" strokeWidth="1.5" />
              <circle cx="7" cy="70" r="4.5" fill="#F3EEDD" />
              <text x="-40" y="-10" fill="#24402A" fontSize="8" fontWeight="bold">① CMC Pengental</text>
            </g>

            {/* Dropper 2: Penstabil Busa (Top-Right) */}
            <g transform="translate(580, 180) rotate(-35)">
              <rect x="0" y="0" width="14" height="60" rx="4" fill="#F3EEDD" stroke="#24402A" strokeWidth="1.5" />
              <circle cx="7" cy="70" r="4.5" fill="#CFE3D0" />
              <text x="15" y="-10" fill="#24402A" fontSize="8" fontWeight="bold">② Penstabil Busa</text>
            </g>

            {/* Dropper 3: Ekstrak Jeruk Nipis (Left) */}
            <g transform="translate(180, 340)">
              <rect x="0" y="0" width="90" height="30" rx="4" fill="#A9C23F" stroke="#24402A" strokeWidth="1.5" />
              <text x="45" y="18" fill="#24402A" fontSize="8" fontWeight="bold" textAnchor="middle">③ Ekstrak Jeruk Nipis</text>
              <path d="M90 15 L120 15" stroke="#A9C23F" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Dropper 4: Pengawet Ramah Lingkungan (Right) */}
            <g transform="translate(530, 340)">
              <rect x="0" y="0" width="90" height="30" rx="4" fill="#F3EEDD" stroke="#24402A" strokeWidth="1.5" />
              <text x="45" y="18" fill="#24402A" fontSize="8" fontWeight="bold" textAnchor="middle">④ Pengawet Food-Grade</text>
              <path d="M0 15 L-30 15" stroke="#F3EEDD" strokeWidth="4" strokeLinecap="round" />
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 07: PEMATANGAN (CURING 7 HARI) & QC pH 8,5–9,5
        ========================================================================= */}
        {currentStep === 7 && (
          <g id="step-7-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* 7-Day Curing Calendar Flip */}
            <g transform="translate(180, 260)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="110" height="135" rx="8" fill="#F3EEDD" stroke="#24402A" strokeWidth="2.5" />
              <rect x="0" y="0" width="110" height="32" rx="4" fill="#C2185B" />
              <text x="55" y="21" fill="#F3EEDD" fontSize="10" fontWeight="bold" textAnchor="middle">STABILISASI</text>
              <text x="55" y="75" fill="#24402A" fontSize="36" fontFamily="serif" fontWeight="bold" textAnchor="middle">7</text>
              <text x="55" y="98" fill="#6B4A2B" fontSize="10" fontWeight="bold" textAnchor="middle">HARI CURING</text>
              <text x="55" y="118" fill="#5B7F3A" fontSize="7.5" textAnchor="middle">Busa Mikro Pecah</text>
            </g>

            {/* Crystal Clear Mature Green Liquid Tank */}
            <g transform="translate(320, 260)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="160" height="170" rx="10" fill="#EAE4CE" stroke="#24402A" strokeWidth="3" />
              {/* Crystal clear emerald soap */}
              <rect x="6" y="30" width="148" height="134" rx="8" fill="#3F8557" />
              {/* Glass sheen reflection */}
              <path d="M12 40 L35 155 L25 155 L8 40 Z" fill="#FFFFFF" fillOpacity="0.3" />

              {/* QC Meter Probe immersed in liquid */}
              <line x1="80" y1="-20" x2="80" y2="80" stroke="#1A211B" strokeWidth="5" strokeLinecap="round" />
              <circle cx="80" cy="80" r="6" fill="#A9C23F" stroke="#24402A" strokeWidth="2" />
            </g>

            {/* pH Meter Instrument Display */}
            <g transform="translate(510, 250)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="130" height="110" rx="8" fill="#1A211B" stroke="#24402A" strokeWidth="2.5" />
              <text x="65" y="24" fill="#F3EEDD" fontSize="8.5" fontWeight="bold" textAnchor="middle">DIGITAL pH METER</text>
              {/* LCD Display */}
              <rect x="15" y="35" width="100" height="35" rx="4" fill="#24402A" />
              <text x="65" y="60" fill="#A9C23F" fontSize="22" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                9.12 pH
              </text>
              <text x="65" y="95" fill="#A9C23F" fontSize="9" fontWeight="bold" textAnchor="middle">
                RENTANG: 8,5 – 9,5 ✓
              </text>
            </g>

            {/* Big Green QC Stamp */}
            <g transform="translate(525, 375)">
              <rect x="0" y="0" width="100" height="28" rx="4" fill="#5B7F3A" stroke="#A9C23F" strokeWidth="2" />
              <text x="50" y="18" fill="#F3EEDD" fontSize="9" fontWeight="bold" textAnchor="middle">LULUS QC BATCH</text>
            </g>
          </g>
        )}

        {/* =========================================================================
            LANGKAH 08: PENGEMASAN & 4 VARIAN KEMASAN SIAP EDAR
        ========================================================================= */}
        {currentStep === 8 && (
          <g id="step-8-anim" className="animate-in fade-in zoom-in-95 duration-500">
            {/* 4 Finished Products Standing on Workbench */}
            {/* 1. Botol Reguler 500 mL */}
            <g transform="translate(140, 240)" filter="url(#stageShadow)">
              <rect x="35" y="20" width="16" height="14" rx="2" fill="#24402A" />
              <path d="M25 45 C18 65 15 85 15 110 C15 140 25 150 43 150 C61 150 71 140 71 110 C71 85 68 65 61 45 Z" fill="#4E9C68" stroke="#24402A" strokeWidth="2.5" />
              <rect x="23" y="70" width="40" height="48" rx="2" fill="#F3EEDD" />
              <text x="43" y="85" fill="#24402A" fontSize="7" fontWeight="bold" textAnchor="middle">SoilOAP</text>
              <text x="43" y="95" fill="#5B7F3A" fontSize="5" textAnchor="middle">500 mL</text>
              <text x="43" y="165" fill="#F3EEDD" fontSize="8" fontWeight="bold" textAnchor="middle">Reguler</text>
            </g>

            {/* 2. Paket Hemat 3 Botol */}
            <g transform="translate(260, 240)" filter="url(#stageShadow)">
              <rect x="15" y="35" width="22" height="110" rx="4" fill="#3F8557" />
              <rect x="45" y="35" width="22" height="110" rx="4" fill="#3F8557" />
              <rect x="30" y="25" width="22" height="120" rx="4" fill="#4E9C68" stroke="#24402A" strokeWidth="2" />
              {/* Jute String */}
              <line x1="10" y1="80" x2="72" y2="80" stroke="#6B4A2B" strokeWidth="3" strokeDasharray="3 2" />
              <text x="41" y="165" fill="#F3EEDD" fontSize="8" fontWeight="bold" textAnchor="middle">Paket 3</text>
            </g>

            {/* 3. Grosir Jeriken 5 L */}
            <g transform="translate(370, 215)" filter="url(#stageShadow)">
              <rect x="20" y="45" width="85" height="115" rx="10" fill="#F3EEDD" stroke="#6B4A2B" strokeWidth="3" />
              <rect x="30" y="28" width="24" height="18" rx="2" fill="#6B4A2B" />
              <path d="M65 45 L65 30 C65 24 95 24 95 30 L95 45" stroke="#6B4A2B" strokeWidth="5" fill="none" />
              <rect x="35" y="65" width="55" height="70" rx="4" fill="#24402A" />
              <text x="62.5" y="85" fill="#A9C23F" fontSize="9" fontWeight="bold" textAnchor="middle">SoilOAP</text>
              <text x="62.5" y="105" fill="#F3EEDD" fontSize="14" fontFamily="serif" fontWeight="bold" textAnchor="middle">5 L</text>
              <text x="62.5" y="175" fill="#F3EEDD" fontSize="8" fontWeight="bold" textAnchor="middle">Jeriken 5 L</text>
            </g>

            {/* 4. Refill Pouch 500 mL */}
            <g transform="translate(510, 235)" filter="url(#stageShadow)">
              <path d="M15 45 L50 35 L70 45 L75 145 C75 150 70 155 65 155 L20 155 C15 155 10 150 10 145 Z" fill="#EAE4CE" stroke="#24402A" strokeWidth="2" />
              <rect x="52" y="22" width="12" height="14" rx="2" fill="#24402A" />
              <rect x="20" y="65" width="45" height="50" rx="3" fill="#F3EEDD" />
              <text x="42.5" y="82" fill="#24402A" fontSize="7" fontWeight="bold" textAnchor="middle">Refill Pouch</text>
              <text x="42.5" y="94" fill="#5B7F3A" fontSize="5.5" textAnchor="middle">500 mL</text>
              <text x="42.5" y="170" fill="#F3EEDD" fontSize="8" fontWeight="bold" textAnchor="middle">Isi Ulang</text>
            </g>

            {/* Seamless Transition Hint to Section Produk */}
            <g transform="translate(620, 310)" filter="url(#stageShadow)">
              <rect x="0" y="0" width="115" height="75" rx="6" fill="#A9C23F" stroke="#24402A" strokeWidth="2" />
              <text x="57.5" y="25" fill="#24402A" fontSize="9" fontWeight="bold" textAnchor="middle">SIAP DISTRIBUSI</text>
              <text x="57.5" y="42" fill="#1A211B" fontSize="8" textAnchor="middle">Lihat Spesifikasi &</text>
              <text x="57.5" y="55" fill="#1A211B" fontSize="8" textAnchor="middle">Harga di Bawah ↓</text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
