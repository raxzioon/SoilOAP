import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Inisialisasi Lenis Smooth Scroll dan sinkronisasi dengan GSAP ScrollTrigger ticker.
 * Menonaktifkan smooth scroll secara otomatis jika pengguna mengaktifkan prefers-reduced-motion.
 */
export function initSmoothScroll(): () => void {
  // Cek preferensi aksesibilitas gerakan
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return () => {};
  }

  // Setup Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Sinkronisasi event scroll Lenis ke ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Hook Lenis ke ticker GSAP untuk 60fps yang stabil
  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tickerCallback);
    lenis.destroy();
  };
}
