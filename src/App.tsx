import { useEffect } from 'react';
import { initSmoothScroll } from './utils/smoothScroll';
import { GrainOverlay } from './components/GrainOverlay';
import { LandscapeCanvas } from './components/LandscapeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionMasalah } from './components/SectionMasalah';
import { SectionProsesScrollytelling } from './components/SectionProsesScrollytelling';
import { SectionProduk } from './components/SectionProduk';
import { SectionPerbandingan } from './components/SectionPerbandingan';
import { SectionKemitraanDanKalkulator } from './components/SectionKemitraanDanKalkulator';
import { SectionDampakSiklusTertutup } from './components/SectionDampakSiklusTertutup';
import { SectionFAQ } from './components/SectionFAQ';
import { SectionDaftarMitraForm } from './components/SectionDaftarMitraForm';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    // Sinkronisasi Lenis smooth scroll dan GSAP ticker
    const cleanup = initSmoothScroll();
    return () => cleanup();
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-[#1A211B] overflow-x-hidden">
      {/* 1. Tekstur Kertas Alami: feTurbulence Grain Overlay Tunggal */}
      <GrainOverlay />

      {/* 2. Sistem Ilustrasi Lanskap Berlapis SVG + Parallax Background */}
      <LandscapeCanvas />

      {/* 3. Sticky Solid Cream Navbar */}
      <Navbar />

      {/* 4. Konten Utama Halaman (Semantic Main) */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section: Tetesan Minyak, Riak Jernih, & Mockup Botol SoilOAP */}
        <Hero />

        {/* 2. Masalah: 3 Stat Asimetris Count-up (Observasi 30 Warung Bojongsoang) */}
        <SectionMasalah />

        {/* 3. SCROLLYTELLING PROSES: 9 Langkah Meja Kerja Saung (100vh Pinned) */}
        <SectionProsesScrollytelling />

        {/* 4. Produk: 4 Varian dengan Ilustrasi SVG Kemasan Khusus */}
        <SectionProduk />

        {/* 5. Perbandingan Harga: Bar Chart Animatif (SoilOAP vs Nasional vs Curah) */}
        <SectionPerbandingan />

        {/* 6. Kemitraan UMKM: 4 Benefit + KALKULATOR Interaktif Setoran Jelantah */}
        <SectionKemitraanDanKalkulator />

        {/* 7. Dampak & Siklus Tertutup: Diagram Melingkar Sirkular & Counter Dampak */}
        <SectionDampakSiklusTertutup />

        {/* 8. FAQ Accordion: 6 Pertanyaan Wajib dari Brief */}
        <SectionFAQ />

        {/* 9. CTA Akhir + Form "Daftar Jadi Mitra" (Generator Pesan WhatsApp Otomatis) */}
        <SectionDaftarMitraForm />
      </main>

      {/* 5. Footer Resmi Tim Mahasiswa Telkom University & Disclaimer Regulasi */}
      <Footer />
    </div>
  );
}

export default App;
