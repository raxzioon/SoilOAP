import React from 'react';

/**
 * GrainOverlay: Menghadirkan tekstur kertas/grain alami (SVG feTurbulence)
 * dengan opacity halus (4-5%) di seluruh halaman untuk menghilangkan kesan flat digital.
 */
export const GrainOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.045] mix-blend-multiply"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="soil-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#soil-grain-filter)" />
      </svg>
    </div>
  );
};
