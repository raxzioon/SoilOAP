import React, { useState } from 'react';
import { SITE_METADATA } from '../data/content';

export const SectionDaftarMitraForm: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [district, setDistrict] = useState('Bojongsoang');
  const [address, setAddress] = useState('');
  const [volumeEstimate, setVolumeEstimate] = useState('15');
  const [compensationChoice, setCompensationChoice] = useState<'tunai' | 'sabun'>('tunai');

  // Menghasilkan teks pesan WhatsApp otomatis
  const generateWhatsAppMessage = () => {
    const lines = [
      `Halo Tim SoilOAP, saya ingin mendaftar sebagai Mitra UMKM Kuliner:`,
      ``,
      `• Nama Usaha: ${businessName.trim() || '[Nama Usaha Anda]'}`,
      `• Penanggung Jawab: ${ownerName.trim() || '[Nama Anda]'}`,
      `• Wilayah: Kec. ${district}`,
      `• Alamat/Patokan: ${address.trim() || '[Alamat Lengkap/Patokan Warung]'}`,
      `• Estimasi Jelantah: ±${volumeEstimate} Liter / Bulan`,
      `• Pilihan Kompensasi: ${
        compensationChoice === 'tunai'
          ? 'Uang Tunai (Rp4.500 / Liter)'
          : 'Tukar Sabun Grosir SoilOAP (Jeriken 5 L)'
      }`,
      ``,
      `Mohon informasi jadwal pengantaran jeriken bersih dan penjemputan awal. Terima kasih!`,
    ];
    return encodeURIComponent(lines.join('\n'));
  };

  const whatsappHref = `https://wa.me/${SITE_METADATA.contacts.whatsappNumber}?text=${generateWhatsAppMessage()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappHref, '_blank');
  };

  return (
    <section id="daftar-mitra" className="relative py-24 sm:py-32 border-t border-[#24402A]/10 bg-[#F3EEDD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#24402A]/10 border border-[#24402A]/20 text-[#24402A] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5B7F3A]" />
            Formulir Kemitraan Cepat
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A211B] leading-tight">
            Mulai Kemitraan: Jelantah Dijemput, Warung Lebih Bersih
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#1A211B]/80 leading-relaxed">
            Isi formulir sederhana di bawah ini. Tombol akan secara otomatis membuka WhatsApp Business SoilOAP
            dengan data pendaftaran yang sudah terisi rapi.
          </p>

          <div className="mt-2 font-handwriting text-xl text-[#5B7F3A] select-none">
            ✎ "Pinjam jeriken gratis bertanda segel, tanpa biaya pendaftaran apapun."
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#EAE4CE] border-2 border-[#24402A]/20 rounded-2xl p-6 sm:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nama Usaha */}
              <div>
                <label className="block text-xs font-bold text-[#24402A] uppercase tracking-wider mb-2">
                  Nama Usaha / Warung *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Gorengan Barokah, Kedai Berkah"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F3EEDD] border border-[#24402A]/25 text-[#1A211B] text-sm focus:outline-none focus:ring-2 focus:ring-[#24402A]"
                />
              </div>

              {/* Nama Pemilik */}
              <div>
                <label className="block text-xs font-bold text-[#24402A] uppercase tracking-wider mb-2">
                  Nama Pemilik / Pengelola *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Anda"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F3EEDD] border border-[#24402A]/25 text-[#1A211B] text-sm focus:outline-none focus:ring-2 focus:ring-[#24402A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Wilayah Kecamatan */}
              <div>
                <label className="block text-xs font-bold text-[#24402A] uppercase tracking-wider mb-2">
                  Wilayah Kecamatan *
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F3EEDD] border border-[#24402A]/25 text-[#1A211B] text-sm focus:outline-none focus:ring-2 focus:ring-[#24402A]"
                >
                  <option value="Bojongsoang">Kec. Bojongsoang (Prioritas)</option>
                  <option value="Dayeuhkolot">Kec. Dayeuhkolot (Prioritas)</option>
                  <option value="Baleendah">Kec. Baleendah (Prioritas)</option>
                  <option value="Lainnya di Kab. Bandung">Wilayah Sekitar Lainnya (Kab. Bandung)</option>
                </select>
              </div>

              {/* Estimasi Jelantah */}
              <div>
                <label className="block text-xs font-bold text-[#24402A] uppercase tracking-wider mb-2">
                  Estimasi Jelantah (Liter / Bulan) *
                </label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  required
                  placeholder="Misal: 15"
                  value={volumeEstimate}
                  onChange={(e) => setVolumeEstimate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F3EEDD] border border-[#24402A]/25 text-[#1A211B] text-sm focus:outline-none focus:ring-2 focus:ring-[#24402A]"
                />
              </div>
            </div>

            {/* Alamat Lengkap */}
            <div>
              <label className="block text-xs font-bold text-[#24402A] uppercase tracking-wider mb-2">
                Alamat Lengkap / Patokan Warung *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Contoh: Jl. Telekomunikasi No. 15, depan ruko fotokopi, Sukapura"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F3EEDD] border border-[#24402A]/25 text-[#1A211B] text-sm focus:outline-none focus:ring-2 focus:ring-[#24402A]"
              />
            </div>

            {/* Pilihan Kompensasi */}
            <div>
              <label className="block text-xs font-bold text-[#24402A] uppercase tracking-wider mb-2">
                Pilihan Bentuk Kompensasi:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setCompensationChoice('tunai')}
                  className={`p-3.5 rounded-lg border text-left transition-all ${
                    compensationChoice === 'tunai'
                      ? 'bg-[#24402A] text-[#F3EEDD] border-[#24402A] shadow-sm'
                      : 'bg-[#F3EEDD] text-[#1A211B] border-[#24402A]/20 hover:border-[#24402A]/50'
                  }`}
                >
                  <div className="font-bold text-xs uppercase">Uang Tunai</div>
                  <div className="text-sm font-semibold mt-0.5">Rp4.500 / Liter</div>
                  <div className="text-[11px] opacity-80 mt-1">Dibayar tunai saat penjemputan jeriken</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCompensationChoice('sabun')}
                  className={`p-3.5 rounded-lg border text-left transition-all ${
                    compensationChoice === 'sabun'
                      ? 'bg-[#24402A] text-[#F3EEDD] border-[#24402A] shadow-sm'
                      : 'bg-[#F3EEDD] text-[#1A211B] border-[#24402A]/20 hover:border-[#24402A]/50'
                  }`}
                >
                  <div className="font-bold text-xs uppercase">Tukar Sabun Grosir</div>
                  <div className="text-sm font-semibold mt-0.5">Potong Tagihan Jeriken 5 L</div>
                  <div className="text-[11px] opacity-80 mt-1">Dapat sabun grosir Rp16.000/L langsung</div>
                </button>
              </div>
            </div>

            {/* Message Preview Box */}
            <div className="p-4 rounded-lg bg-[#F3EEDD] border border-[#24402A]/20 text-xs text-[#1A211B]/85">
              <span className="font-bold text-[#24402A] uppercase tracking-wider block mb-1">
                Pratinjau Pesan WhatsApp Otomatis:
              </span>
              <p className="font-mono text-[11px] leading-relaxed whitespace-pre-line text-[#1A211B]/80 bg-[#EAE4CE] p-3 rounded border border-[#24402A]/10">
                {decodeURIComponent(generateWhatsAppMessage())}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg bg-[#24402A] text-[#F3EEDD] font-bold text-sm sm:text-base hover:bg-[#1a301f] transition-all shadow-md flex items-center justify-center gap-2 group active:translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2Z" />
              </svg>
              <span>Kirim Pendaftaran via WhatsApp Business SoilOAP</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
