/**
 * Data 9 Langkah Scrollytelling Proses Pemurnian & Saponifikasi SoilOAP
 * Seluruh data mengacu persis pada standar mutu dan formulasi di brief.
 */

export interface ProcessStep {
  step: number;
  id: string;
  stepNumber: string;
  title: string;
  shortSubtitle: string;
  description: string;
  chips: string[];
  fieldNote?: string;
  fluidColor: string;
  fluidLabel: string;
  temperature?: string;
  timeNote?: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 0,
    id: 'penjemputan',
    stepNumber: '00',
    title: 'Penjemputan Terjadwal & Penimbangan',
    shortSubtitle: 'Dari Warung Kuliner Bojongsoang',
    description: 'Petugas menjemput jeriken 20 L langsung di warung makan atau pedagang gorengan mitra. Minyak ditimbang digital di lokasi untuk pencatatan setoran transparan.',
    chips: ['Jeriken 20 L Food-Grade', 'Timbangan Digital Presisi', 'Bonus 1 Botol / 15 L', 'Dijemput Gratis'],
    fieldNote: 'Dijemput tiap Senin & Kamis langsung di warung',
    fluidColor: '#2B1B0E', // Cokelat tua pekat jelantah
    fluidLabel: 'Jelantah Mentah Pekat',
    temperature: 'Suhu Ruang (28–30°C)',
  },
  {
    step: 1,
    id: 'penyaringan-awal',
    stepNumber: '01',
    title: 'Penyaringan Awal (Kasa Mesh 100)',
    shortSubtitle: 'Pemisahan Remah & Partikel Kasar',
    description: 'Jelantah dialirkan melalui saringan stainless steel mesh 100 bertingkat untuk memisahkan remah tepung, sisa bumbu, dan endapan karbon hitam penggorengan.',
    chips: ['Kasa Stainless Mesh 100', 'Pemisahan Gravitasi', 'Endapan Padat Terpisah'],
    fieldNote: 'Ampas remah padat dipisahkan untuk kompos',
    fluidColor: '#5C3E1B', // Amber keruh
    fluidLabel: 'Jelantah Tersaring Awal',
    temperature: 'Suhu Ruang (30°C)',
  },
  {
    step: 2,
    id: 'pemurnian-arang',
    stepNumber: '02',
    title: 'Pemurnian & Penghilang Bau (Arang Aktif)',
    shortSubtitle: 'Adsorpsi Termal 65–70°C Selama 30 Menit',
    description: 'Minyak dipanaskan stabil pada 65–70°C dengan 3% arang aktif dari bobot minyak. Karbon aktif mengadsorpsi senyawa karsinogenik dan melenyapkan asam lemak penyebab bau tengik.',
    chips: ['Suhu 65–70°C', 'Arang Aktif 3% Bobot', 'Timer 30 Menit', 'Kain Saring Halus'],
    fieldNote: 'Minyak jelantah berubah jernih keemasan bebas tengik',
    fluidColor: '#D79A22', // Emas jernih
    fluidLabel: 'Minyak Murni Keemasan',
    temperature: '65 – 70°C',
    timeNote: '30 Menit Kontak',
  },
  {
    step: 3,
    id: 'larutan-alkali',
    stepNumber: '03',
    title: 'Preparasi Larutan Alkali KOH',
    shortSubtitle: 'Disolusi Eksotermik & Pendinginan',
    description: 'Serpihan Kalium Hidroksida (KOH murni) dilarutkan ke air demineralisasi. Reaksi disolusi melepaskan panas (eksotermik) lalu didinginkan bertahap ke suhu aman 45–50°C.',
    chips: ['Kalium Hidroksida (KOH)', 'Air Demineralisasi', 'Reaksi Eksotermik', 'Suhu Aman 45–50°C'],
    fieldNote: 'Memakai KOH untuk menghasilkan sabun cair yang lembut',
    fluidColor: '#E8DCB8', // Larutan alkali jernih
    fluidLabel: 'Larutan Kalium Hidroksida',
    temperature: '45 – 50°C',
  },
  {
    step: 4,
    id: 'saponifikasi',
    stepNumber: '04',
    title: 'Saponifikasi Suhu Terkendali (60°C)',
    shortSubtitle: 'Pusaran Mekanis Menuju Fase Trace',
    description: 'Minyak emas dan larutan KOH disatukan di panci reaksi bersuhu 60°C. Pengaduk spiral mekanis memicu emulsifikasi hingga mencapai fase "trace" mengental menjadi pasta sabun krem opak.',
    chips: ['Suhu 60°C Konstan', 'Pengadukan Spiral Mekanis', 'Fase Trace Tercapai', 'Pasta Sabun Murni'],
    fieldNote: 'Trigliserida terurai sempurna jadi garam sabun & gliserol alami',
    fluidColor: '#F5EBD0', // Krem opak pasta sabun
    fluidLabel: 'Pasta Sabun (Fase Trace)',
    temperature: '60°C',
  },
  {
    step: 5,
    id: 'pengenceran',
    stepNumber: '05',
    title: 'Pengenceran & Ekspansi Rendemen (1 : 4)',
    shortSubtitle: '1 Liter Jelantah Menjadi 4 Liter Sabun',
    description: 'Pasta sabun dilarutkan bertahap dengan air panas murni terkontrol. Dari 1 liter jelantah terpurifikasi dihasilkan 4 liter sabun cair yang setara dengan 8 botol kemasan 500 mL.',
    chips: ['Pelarut Air Panas', 'Rasio Rendemen 1 : 4', 'Setara 8 Botol 500 mL', 'Kekentalan Terkendali'],
    fieldNote: 'Ekspansi efisiensi tinggi tanpa mengurangi daya cuci',
    fluidColor: '#8EBF9B', // Hijau muda transisi
    fluidLabel: 'Larutan Sabun Mengembang',
    temperature: '40 – 45°C',
  },
  {
    step: 6,
    id: 'aditif-fungsional',
    stepNumber: '06',
    title: 'Aditif Fungsional & Ekstrak Jeruk Nipis',
    shortSubtitle: 'Penyempurnaan Viskositas & Kesegaran (< 35°C)',
    description: 'Pada suhu di bawah 35°C, ditambahkan 4 aditif terukur: pengental alami CMC/HPMC, penstabil busa, pengawet ramah lingkungan, dan ekstrak wangi jeruk nipis pembersih amis.',
    chips: ['Suhu Di Bawah 35°C', 'Pengental CMC / HPMC', 'Ekstrak Jeruk Nipis', 'Busa Lembut Melimpah'],
    fieldNote: 'Aroma jeruk nipis segar pengangkat lemak & bau amis',
    fluidColor: '#529E7D', // Hijau segar translusen
    fluidLabel: 'Sabun Hijau Jeruk Nipis',
    temperature: '< 35°C',
  },
  {
    step: 7,
    id: 'pematangan-qc',
    stepNumber: '07',
    title: 'Pematangan (Curing) & Uji QC pH Meter',
    shortSubtitle: 'Stabilisasi 7 Hari & Akreditasi pH 8,5–9,5',
    description: 'Cairan diistirahatkan selama 7 hari hingga mikro-busa pecah dan sabun menjadi hijau bening transparan. Sensor pH laboratorium menguji kepatuhan di rentang aman 8,5–9,5.',
    chips: ['Curing Stabil 7 Hari', 'pH Meter: 8,5 – 9,5', 'Bening Kristal Tanpa Residu', 'Lulus QC Batch'],
    fieldNote: 'pH 8,5–9,5 lembut di tangan, keras pada lemak masakan',
    fluidColor: '#3F8557', // Hijau bening matang sempurna
    fluidLabel: 'Lulus Uji Mutu Laboratorium',
    timeNote: 'Stabilisasi 7 Hari',
  },
  {
    step: 8,
    id: 'pengemasan',
    stepNumber: '08',
    title: 'Pengemasan & Penomoran Batch Terlacak',
    shortSubtitle: 'Siap Edar ke Dapur Rumah & Mitra UMKM',
    description: 'Sabun dialirkan ke botol 500 mL ergonomis dan jeriken 5 L mitra, dipasangi tutup flip-top segel tamper-evident, serta ditempel label dengan stempel nomor batch produksi resmi.',
    chips: ['Tutup Segel Tamper-Evident', 'Stempel Batch Terlacak', '4 Varian Kemasan', 'Siap Distribusi'],
    fieldNote: 'Dari jelantah Bojongsoang, kembali bersih untuk dapur warga',
    fluidColor: '#4E9C68', // Hijau kemasan botol
    fluidLabel: 'Produk Jadi SoilOAP',
  },
];
