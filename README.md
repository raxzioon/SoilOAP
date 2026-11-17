# SoilOAP — "Dari Jelantah, Kembali Bersih."

> **Media Pitch & Landing Page Produk Ekonomi Sirkular Berbasis Web**  
> Dibuat untuk **Business Plan Competition** oleh Tim Mahasiswa **Telkom University**.

SoilOAP adalah sabun cair ramah lingkungan khusus pencuci piring, wajan berminyak, peralatan dapur, dan pembersih tangan dapur. Diproduksi melalui proses pemurnian minyak jelantah warung kuliner mikro menggunakan adsorben arang aktif pada suhu 65–70°C dan disaponifikasi dengan Kalium Hidroksida (KOH) murni.

---

## 🌿 Konteks Brand & Validasi Lapangan

- **Nama**: SoilOAP
- **Tagline**: *"Dari Jelantah, Kembali Bersih."*
- **Karakter Fisik**: Cairan hijau bening translusen, busa melimpah, aroma segar jeruk nipis, pH stabil teruji 8,5–9,5.
- **Kategori Produk**: Sabun cair pembersih peralatan dapur & tangan (**Bukan kosmetik tubuh**).
- **Status Regulasi**: Mengacu pada standar mutu sabun cuci piring cair komersial. Izin edar PKRT (Perbekalan Kesehatan Rumah Tangga) Kementerian Kesehatan RI sedang dalam proses registrasi laboratorium.
- **Wilayah Percontohan Awal**: Bojongsoang, Dayeuhkolot, dan Baleendah (Kabupaten Bandung), terutama koridor Jalan Telekomunikasi, Sukabirus, dan Sukapura.
- **Rendemen Efisiensi**: **1 Liter Minyak Jelantah $\rightarrow$ 4 Liter Sabun Cair** (setara 8 botol reguler 500 mL).
- **Dampak per Botol**: Tiap 1 botol 500 mL menyelamatkan **125 mL jelantah** dari saluran pembuangan got.

---

## 📦 Varian Produk & Skema Kemitraan UMKM

| Varian | Kemasan | Harga | Target Pengguna |
|---|---|---|---|
| **SoilOAP Reguler** | Botol Daur Ulang 500 mL | **Rp10.000** | Rumah tangga & warung makan harian |
| **Paket Hemat Dapur** | 3 × Botol 500 mL | **Rp27.000** | Stok bulanan dapur keluarga (hemat Rp3.000) |
| **Grosir UMKM Jeriken** | Jeriken 5 Liter | **Rp80.000** *(Rp16.000/L)* | Khusus mitra kuliner & warung gorengan (hemat 25–35%) |
| **Kantong Isi Ulang (Refill)**| Pouch Spout 500 mL | **Rp8.000** | Konsumen zero-waste, paling hemat |

### Skema Kemitraan UMKM Kuliner:
1. **Jelantah Dibeli Tunai**: Rp4.500 / Liter (dibayar saat penjemputan atau dipotongkan ke pembelian sabun jeriken).
2. **Penjemputan Terjadwal Gratis**: Dijemput rutin tiap Senin & Kamis langsung di warung.
3. **Pinjam Jeriken Steril**: Disediakan jeriken wadah bersih bertanda segel untuk higienitas dapur.
4. **Bonus Sabun**: Tambahan gratis 1 botol sabun 500 mL tiap akumulasi 15 Liter setoran jelantah.

---

## 🎨 Arah Desain & Aturan Anti "AI Slop"

- **Konsep Visual**: *"Alam yang Pulih"* — Lanskap alam Jawa Barat bergaya ilustrasi *paper-cut* berlapis (Layered SVG, bayangan tipis antar layer, tanpa gradient neon atau glassmorphism tebal).
- **Tekstur Grain Kertas**: Menggunakan filter tunggal SVG `<feTurbulence>` (opacity 4,5%) untuk menghadirkan nuansa cetak analog buatan tangan.
- **Tipografi Editorial**:
  - Headings: **DM Serif Display**
  - Body Text: **Plus Jakarta Sans**
  - Catatan Lapangan Margin: **Caveat** (maksimal 1 per section)
- **Palet Warna Alami (CSS Variables)**:
  - Daun Tua: `#24402A`
  - Lumut: `#5B7F3A`
  - Jeruk Nipis: `#A9C23F`
  - Kapas: `#F3EEDD`
  - Tanah: `#6B4A2B`
  - Amber Minyak: `#D79A22`
  - Embun: `#CFE3D0`
  - Ink: `#1A211B`

---

## ⚙️ Fitur Interaktif & Scrollytelling

1. **Scrollytelling Meja Kerja Saung 9 Langkah (100vh Pinned)**:
   - Scrubbing GSAP ScrollTrigger sepanjang timeline pemurnian meja kerja saung tepi sawah.
   - Satu cairan dinamis berubah warna dan kekentalan: Cokelat pekat `#2B1B0E` $\rightarrow$ Amber keruh $\rightarrow$ Emas jernih $\rightarrow$ Krem pasta sabun (*trace*) $\rightarrow$ Hijau bening matang.
   - 9 Node navigasi interaktif yang dapat diklik untuk melompat langsung ke langkah manapun.
   - Fallback otomatis ke 9 kartu statis terstruktur jika sistem pengguna mendeteksi `prefers-reduced-motion`.
2. **Kalkulator Setoran Jelantah UMKM**:
   - Slider real-time (0–100 Liter/bulan) yang langsung menghitung pendapatan tunai, bonus botol, potensi sabun yang tercipta, dan volume got yang terlindungi.
3. **Diagram Melingkar Siklus Tertutup**:
   - Visualisasi loop sirkular interaktif: UMKM $\rightarrow$ Jelantah $\rightarrow$ SoilOAP $\rightarrow$ Sabun $\rightarrow$ Kembali ke UMKM.
4. **Formulir Pendaftaran Mitra WhatsApp**:
   - Form interaktif dengan pratinjau pesan otomatis yang langsung terhubung ke WhatsApp Business `081906602421`.

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animasi & Scrollytelling**: GSAP 3 (ScrollTrigger)
- **Smooth Scroll**: Lenis (disinkronisasi ke ticker GSAP untuk 60fps)

---

## 🛠️ Cara Menjalankan Secara Lokal

```bash
# 1. Clone repositori
git clone https://github.com/raxzioon/SoilOAP.git
cd SoilOAP

# 2. Pasang dependensi
npm install

# 3. Jalankan development server
npm run dev

# 4. Build untuk deployment produksi
npm run build
```

---

## 👥 Tim Pengembang (Telkom University)

- **Muhammad Adzka Arroya** — *Inisiator & Operasional*
- **Puteri Najma Azzahra** — *Formulasi & Riset Produk*
- **Fachri Bima Ibrahim** — *Kemitraan UMKM & Logistik*

**Kontak Resmi WhatsApp**: `081906602421` (`+6281906602421`)
