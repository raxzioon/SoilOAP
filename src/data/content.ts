/**
 * SoilOAP Content & Data Store
 * Single Source of Truth untuk seluruh copy, data statistik, varian harga,
 * perbandingan pasar, FAQ, dan data kemitraan.
 *
 * Seluruh data mengacu ketat pada brief resmi SoilOAP.
 * Placeholder ditandai dengan format [ISI: ...].
 */

export interface ProductVariant {
  id: string;
  name: string;
  volume: string;
  price: number;
  formattedPrice: string;
  pricePerLiter?: string;
  targetSegment: string;
  description: string;
  badge?: string;
  ecoImpact: string;
  features: string[];
  recommended?: boolean;
}

export interface MarketComparisonItem {
  category: string;
  priceRange: string;
  pricePerLiter: string;
  ingredients: string;
  phTesting: string;
  packaging: string;
  ecoImpactNote: string;
  savingsNote?: string;
  isSoilOAP?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const SITE_METADATA = {
  name: 'SoilOAP',
  tagline: 'Dari Jelantah, Kembali Bersih.',
  legalCategory: 'Sabun Cair Pencuci Piring & Peralatan Dapur (Bukan Kosmetik Tubuh)',
  regulatoryStatus: 'Mengacu standar mutu sabun cuci piring cair, izin edar PKRT dalam proses registrasi.',
  pilotArea: 'Bojongsoang, Dayeuhkolot, dan Baleendah (Kabupaten Bandung)',
  operationalHub: 'Koridor Jalan Telekomunikasi, Sukabirus, Sukapura & sekitarnya',
  institution: 'Telkom University',
  teamMembers: [
    { name: 'Muhammad Adzka Arroya', role: 'Inisiator & Operasional' },
    { name: 'Puteri Najma Azzahra', role: 'Formulasi & Riset Produk' },
    { name: 'Fachri Bima Ibrahim', role: 'Kemitraan UMKM & Logistik' },
  ],
  contacts: {
    whatsappNumber: '6281906602421',
    whatsappDisplay: '0819-0660-2421',
    whatsappLink: 'https://wa.me/6281906602421?text=Halo%20Tim%20SoilOAP,%20saya%20tertarik%20dengan%20produk%20dan%20kemitraan%20SoilOAP.',
    shopeeLink: 'https://shopee.co.id/[ISI: Link Toko Shopee]',
    tokopediaLink: 'https://tokopedia.com/[ISI: Link Toko Tokopedia]',
    instagramLink: 'https://instagram.com/[ISI: Akun Instagram SoilOAP]',
  },
};

export const PRODUCT_SPECS = {
  liquidColor: 'Hijau Bening (Translusen Alami)',
  fragrance: 'Aroma Segar Jeruk Nipis',
  phLevel: '8,5 – 9,5 (Tiap batch teruji laboratorium)',
  purificationMethod: 'Adsorpsi Arang Aktif (65–70°C) + Saponifikasi KOH',
  yieldRatio: '1 Liter Jelantah menghasilkan 4 Liter Sabun (setara 8 botol 500 mL)',
  perBottleImpact: '1 botol 500 mL = menyelamatkan 125 mL jelantah dari saluran pembuangan',
  annualTarget: '1.800 Liter Jelantah diselamatkan pada fase awal',
  partnerTarget: '25 Mitra UMKM Kuliner Aktif',
};

export const STATS_MASALAH = [
  {
    id: 'volume',
    number: '8–15',
    unit: 'Liter / Bulan',
    title: 'Limbah Jelantah per Gerai UMKM',
    description: 'Berdasarkan observasi langsung terhadap 30 pelaku usaha kuliner (warung gorengan, pecel lele, dan kedai makan) di kawasan Bojongsoang.',
    fieldNote: 'Data observasi 30 warung di Bojongsoang–Dayeuhkolot',
  },
  {
    id: 'drainage',
    number: '100%',
    unit: 'Mengancam Saluran',
    title: 'Dibuang Langsung ke Drainase',
    description: 'Sebagian besar minyak jelantah sisa penggorengan dibuang ke saluran air terbuka, membeku bersama lumpur, memicu bau busuk dan penyumbatan air.',
    fieldNote: 'Minyak beku yang tadinya dibuang ke got',
  },
  {
    id: 'informal',
    number: '0',
    unit: 'Akses Pengepul Resmi',
    title: 'Pelaku Usaha Mikro Tidak Terjangkau',
    description: 'Pengepul jelantah komersial hanya melayani industri besar berkapasitas ratusan liter. Pedagang gorengan pinggir jalan luput dari rantai daur ulang.',
    fieldNote: 'Volume kecil sering diabaikan pengepul besar',
  },
];

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'reguler-500ml',
    name: 'SoilOAP Reguler',
    volume: '500 mL',
    price: 10000,
    formattedPrice: 'Rp10.000',
    pricePerLiter: 'Rp20.000/L',
    targetSegment: 'Rumah Tangga & Warung Harian',
    description: 'Botol ergonomis dengan tutup flip-top segel. Formula kental berbusa lembut, ampuh meluruhkan sisa minyak membandel di wajan dan piring.',
    badge: 'Paling Populer',
    ecoImpact: 'Menyelamatkan 125 mL jelantah',
    features: [
      'Isi 500 mL cairan hijau bening',
      'Tutup flip-top tamper-evident (segel)',
      'Aroma segar jeruk nipis pembersih amis',
      'pH seimbang 8,5–9,5 (lembut di tangan)',
    ],
    recommended: true,
  },
  {
    id: 'paket-hemat-3',
    name: 'Paket Hemat Dapur',
    volume: '3 × 500 mL',
    price: 27000,
    formattedPrice: 'Rp27.000',
    pricePerLiter: 'Rp18.000/L',
    targetSegment: 'Keluarga & Dapur Kafe Kecil',
    description: 'Paket bundel 3 botol untuk persediaan dapur bulanan. Lebih ekonomis untuk penggunaan rutin tanpa sering membeli ulang.',
    badge: 'Hemat Rp3.000',
    ecoImpact: 'Menyelamatkan 375 mL jelantah',
    features: [
      '3 botol reguler 500 mL sekaligus',
      'Hemat Rp3.000 dibanding satuan',
      'Stok aman untuk 1–2 bulan dapur keluarga',
      'Kemasan bundel tali rami ramah lingkungan',
    ],
  },
  {
    id: 'grosir-jeriken-5l',
    name: 'Grosir Jeriken UMKM',
    volume: '5 Liter',
    price: 80000,
    formattedPrice: 'Rp80.000',
    pricePerLiter: 'Rp16.000/L',
    targetSegment: 'Mitra Kuliner & Warung Makan',
    description: 'Kemasan jeriken kokoh kapasitas besar untuk operasional dapur harian warung makan dan mitra UMKM. Disediakan layanan tukar jeriken steril.',
    badge: 'Khusus Mitra UMKM',
    ecoImpact: 'Menyelamatkan 1.250 mL jelantah',
    features: [
      'Kapasitas besar 5 Liter (Rp16.000/Liter)',
      'Hemat 25–35% dibanding sabun pabrikan',
      'Jeriken food-grade tebal & mudah dituang',
      'Layanan antar & tukar jeriken gratis',
    ],
  },
  {
    id: 'refill-pouch-500ml',
    name: 'Kantong Isi Ulang (Refill)',
    volume: '500 mL',
    price: 8000,
    formattedPrice: 'Rp8.000',
    pricePerLiter: 'Rp16.000/L',
    targetSegment: 'Pelanggan Setia & Zero-Waste',
    description: 'Kemasan kantong isi ulang untuk dituang kembali ke botol SoilOAP Anda. Minim plastik, harga paling ramah kantong.',
    badge: 'Paling Terjangkau',
    ecoImpact: 'Menyelamatkan 125 mL jelantah & kurangi botol plastik',
    features: [
      'Harga paling terjangkau (Rp8.000/kemasan)',
      'Hemat 20% dibanding botol baru',
      'Spout corong praktis anti-tumpah',
      'Mengurangi timbulan botol plastik baru',
    ],
  },
];

export const MARKET_COMPARISONS: MarketComparisonItem[] = [
  {
    category: 'Merek Nasional Komersial',
    priceRange: 'Rp13.000 – Rp20.000',
    pricePerLiter: 'Rp26.000 – Rp40.000 / L',
    ingredients: 'Surfaktan sintetis (petroleum-based LAS/LABS)',
    phTesting: 'Standar pabrik besar',
    packaging: 'Plastik sekali pakai komersial',
    ecoImpactNote: 'Tidak mengolah limbah lokal, bahan baku petrokimia.',
  },
  {
    category: 'Sabun Curah Tanpa Merek',
    priceRange: 'Rp6.000 – Rp8.000',
    pricePerLiter: 'Rp6.000 – Rp8.000 / L',
    ingredients: 'Encer, kadar surfaktan rendah, sering tanpa pewangi',
    phTesting: 'Tanpa uji laboratorium, risiko residu kaustik iritatif',
    packaging: 'Plastik kiloan tipis tanpa standar segel',
    ecoImpactNote: 'Rantai pasok tidak terlacak, sering boros pemakaian karena encer.',
  },
  {
    category: 'SoilOAP (Inisiatif Sirkular)',
    priceRange: 'Rp10.000 (Grosir Rp80.000/5L)',
    pricePerLiter: 'Rp16.000 – Rp20.000 / L',
    ingredients: 'Minyak jelantah teradsorpsi arang aktif + KOH saponifikasi murni + ekstrak aroma jeruk nipis',
    phTesting: 'Uji pH ketat 8,5 – 9,5 per batch produksi',
    packaging: 'Botol isi ulang berlabel batch + program tukar jeriken mitra',
    ecoImpactNote: '1 L jelantah = 4 L sabun. Menghentikan pencemaran drainase Bojongsoang.',
    savingsNote: 'Hemat 25% – 35% dibandingkan merek nasional dengan kualitas teruji.',
    isSoilOAP: true,
  },
];

export const KEMITRAAN_BENEFITS = [
  {
    title: 'Jelantah Dibeli Tunai',
    value: 'Rp4.500 / Liter',
    description: 'Ubah minyak sisa penggorengan yang sebelumnya dibuang menjadi pendapatan tambahan atau pemotong biaya sabun cuci operasional.',
  },
  {
    title: 'Penjemputan Terjadwal Gratis',
    value: '0 Biaya Kirim',
    description: 'Tim logistik SoilOAP menjemput jelantah langsung di warung Anda di Bojongsoang, Dayeuhkolot, dan Baleendah sesuai jadwal mingguan.',
  },
  {
    title: 'Pinjam Jeriken Wadah Bersih',
    value: 'Disediakan',
    description: 'Mitra dipinjamkan jeriken khusus bertanda segel untuk menampung jelantah dapur dengan rapi tanpa mengotori lantai warung.',
  },
  {
    title: 'Bonus Sabun & Akses Grosir',
    value: '+1 Botol per 15 L',
    description: 'Dapatkan 1 botol sabun 500 mL gratis setiap akumulasi 15 liter jelantah, serta akses beli sabun jeriken 5 L seharga Rp16.000/liter.',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah sabun dari minyak jelantah ini aman dipakai mencuci?',
    answer: 'Sangat aman untuk mencuci peralatan dapur dan tangan. Minyak jelantah melalui tahap pemurnian termal pada suhu 65–70°C dengan adsorben arang aktif 3% untuk mengikat senyawa radikal, menyerap sisa bumbu, dan melenyapkan bau tengik. Setelah itu, minyak disaponifikasi sempurna dengan Kalium Hidroksida (KOH) sehingga trigliserida berubah total menjadi garam kalium sabun dan gliserol alami. Setiap batch wajib lulus uji pH ketat pada rentang aman 8,5–9,5.',
    highlight: 'Pemurnian arang aktif 65–70°C & uji pH tiap batch.',
  },
  {
    id: 'faq-2',
    question: 'Bisa dipakai untuk mencuci apa saja?',
    answer: 'SoilOAP diformulasikan khusus untuk mencuci piring, gelas, wajan berminyak, peralatan masak dapur, dan mencuci tangan setelah aktivitas memasak. Kami menegaskan bahwa SoilOAP BUKAN produk kosmetik tubuh, bukan sabun mandi, dan tidak ditujukan untuk perawatan kulit wajah.',
    highlight: 'Peralatan dapur & cuci tangan dapur. Bukan kosmetik tubuh.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana cara warung atau UMKM kuliner bergabung jadi mitra?',
    answer: 'Cukup hubungi tim kami via WhatsApp, sampaikan nama usaha dan alamat warung Anda di kawasan Bojongsoang, Dayeuhkolot, atau Baleendah. Tim kami akan mengantarkan jeriken penampungan bersih secara gratis. Saat jelantah mulai terisi, informasikan kepada kami untuk penjemputan terjadwal.',
    highlight: 'Gratis pinjam jeriken & penjemputan terjadwal langsung di warung.',
  },
  {
    id: 'faq-4',
    question: 'Berapa luas wilayah jangkauan SoilOAP saat ini?',
    answer: 'Pada fase awal ini, wilayah operasional difokuskan di tiga kecamatan Kabupaten Bandung: Bojongsoang, Dayeuhkolot, dan Baleendah. Prioritas logistik mencakup koridor Jalan Telekomunikasi, kawasan Sukabirus, Sukapura, hingga Baleendah.',
    highlight: 'Fokus awal Bojongsoang, Dayeuhkolot, & Baleendah.',
  },
  {
    id: 'faq-5',
    question: 'Bagaimana sistem isi ulang (refill) bekerja?',
    answer: 'Konsumen dapat membeli varian Kantong Isi Ulang (Refill Pouch 500 mL) seharga Rp8.000 untuk dituangkan ke botol lama. Bagi mitra UMKM pengguna jeriken 5 Liter, berlaku sistem tukar jeriken (swap system): saat jeriken habis, jeriken kosong ditukar dengan jeriken baru yang sudah disterilisasi dan terisi penuh.',
    highlight: 'Refill pouch ekonomis Rp8.000 & tukar jeriken steril untuk mitra.',
  },
  {
    id: 'faq-6',
    question: 'Bagaimana dengan legalitas dan sertifikasi produk SoilOAP?',
    answer: 'Formula SoilOAP dibuat mengacu pada standar mutu sabun cuci piring cair komersial. Saat ini, perizinan edar Perbekalan Kesehatan Rumah Tangga (PKRT) dari Kementerian Kesehatan RI sedang dalam proses registrasi dan pengujian laboratorium resmi.',
    highlight: 'Mengacu standar mutu sabun cuci piring cair, izin PKRT dalam proses.',
  },
];
