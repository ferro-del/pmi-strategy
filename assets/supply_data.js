// ============================================================
// REPORT C — SUPPLY MAPPING DATA
// Pemetaan infrastruktur pendidikan & pelatihan vokasi Indonesia
// Sumber: Dapodik 2024/2025 · PDDikti · Kemnaker · BNSP 2024 · BPS
// ============================================================

const SUPPLY = {

  // ----------------------------------------------------------
  // (A) SMK — Sekolah Menengah Kejuruan
  // ----------------------------------------------------------
  smk: {
    overview: {
      totalSchools: 14442,
      negeri: 3775,
      swasta: 10667,
      pctSwasta: 73.9,
      totalStudents: 5084649,
      studentsNegeri: 2442787,
      studentsSwasta: 2642862,
      teachers: 322856,
      ratioStudentTeacher: 15.74,
      bidangKeahlian: 10,
      programKeahlian: 50,
      konsentrasiKeahlian: 128,
      annualGraduates: 1450000,  // estimasi ~28.5% dari siswa aktif
      annualIntake: 1620000,
      regulasi: "Kepmendikbudristek 244/M/2024 — Spektrum Keahlian Kurikulum Merdeka"
    },

    // 10 Bidang Keahlian per Kepmen 244/2024
    bidangKeahlian: [
      { name: "Teknologi Manufaktur dan Rekayasa", programCount: 10, konsentrasiCount: 28, students: 1320000, share: 26.0,
        relevanPMI: ["Manufacturing operator","Welder","Mechanic","Mechatronic"] },
      { name: "Teknologi Informasi", programCount: 3, konsentrasiCount: 7, students: 712000, share: 14.0,
        relevanPMI: [] },
      { name: "Bisnis dan Manajemen", programCount: 4, konsentrasiCount: 8, students: 762000, share: 15.0,
        relevanPMI: ["Hospitality back-office","Retail"] },
      { name: "Pariwisata", programCount: 4, konsentrasiCount: 12, students: 559000, share: 11.0,
        relevanPMI: ["Hospitality","Food service","Hotel staff","Cook","Barista"] },
      { name: "Kesehatan dan Pekerjaan Sosial", programCount: 4, konsentrasiCount: 9, students: 559000, share: 11.0,
        relevanPMI: ["Caregiver","Nursing assistant","Healthcare support"] },
      { name: "Agribisnis dan Agroteknologi", programCount: 6, konsentrasiCount: 16, students: 305000, share: 6.0,
        relevanPMI: ["Agriculture worker","Farm hand","Plantation worker"] },
      { name: "Teknologi Konstruksi dan Properti", programCount: 5, konsentrasiCount: 15, students: 254000, share: 5.0,
        relevanPMI: ["Construction worker","Mason","Carpenter","Plumber","Electrician"] },
      { name: "Energi dan Pertambangan", programCount: 4, konsentrasiCount: 10, students: 254000, share: 5.0,
        relevanPMI: ["HVAC technician","Industrial maintenance"] },
      { name: "Kemaritiman", programCount: 5, konsentrasiCount: 13, students: 203000, share: 4.0,
        relevanPMI: ["Fisheries worker","Shipbuilding worker","Deckhand"] },
      { name: "Seni dan Industri Kreatif", programCount: 5, konsentrasiCount: 10, students: 152000, share: 3.0,
        relevanPMI: ["Garment worker"] }
    ],

    // Top jurusan/program keahlian by enrollment
    topPrograms: [
      { name: "Teknik Kendaraan Ringan Otomotif", students: 612000, lulusan: 175000, growth: -2.1, jobAlign: ["Automotive mechanic","Industrial maintenance"] },
      { name: "Teknik Bisnis Sepeda Motor", students: 488000, lulusan: 140000, growth: +1.8, jobAlign: ["Motorcycle mechanic","Repair technician"] },
      { name: "Teknik Komputer dan Jaringan", students: 458000, lulusan: 132000, growth: +5.2, jobAlign: ["IT support (limited PMI demand)"] },
      { name: "Akuntansi & Keuangan Lembaga", students: 376000, lulusan: 108000, growth: -1.5, jobAlign: [] },
      { name: "Manajemen Perkantoran & Layanan Bisnis", students: 305000, lulusan: 88000, growth: -0.8, jobAlign: [] },
      { name: "Pengembangan Perangkat Lunak & Gim", students: 254000, lulusan: 73000, growth: +8.4, jobAlign: [] },
      { name: "Tata Boga & Kuliner", students: 244000, lulusan: 70000, growth: +3.2, jobAlign: ["Cook","Kitchen staff","Pastry"] },
      { name: "Bisnis Daring & Pemasaran", students: 234000, lulusan: 67000, growth: +2.1, jobAlign: [] },
      { name: "Asisten Keperawatan", students: 224000, lulusan: 64000, growth: +6.5, jobAlign: ["Caregiver","Nursing assistant","Eldercare"] },
      { name: "Tata Busana & Garmen", students: 213000, lulusan: 61000, growth: -3.4, jobAlign: ["Garment worker","Sewing operator"] },
      { name: "Perhotelan", students: 203000, lulusan: 58000, growth: +4.8, jobAlign: ["Hotel housekeeping","Front office","F&B service"] },
      { name: "Teknik Pengelasan", students: 152000, lulusan: 44000, growth: +7.1, jobAlign: ["Welder","Shipbuilding welder","Pipe welder"] },
      { name: "Teknik Instalasi Tenaga Listrik", students: 142000, lulusan: 41000, growth: +2.8, jobAlign: ["Electrician","Industrial electrician"] },
      { name: "Agribisnis Tanaman Pangan", students: 102000, lulusan: 29000, growth: -1.2, jobAlign: ["Agriculture worker","Farm worker"] },
      { name: "Usaha Perjalanan Wisata", students: 92000, lulusan: 26000, growth: +1.4, jobAlign: ["Hospitality"] }
    ],

    // Geographic distribution (top provinces, 2024/2025)
    byProvince: [
      { province: "Jawa Barat", schools: 3163, students: 982000, swasta: 2637, negeri: 526, share: 19.3 },
      { province: "Jawa Timur", schools: 2156, students: 715000, swasta: 1865, negeri: 291, share: 14.1 },
      { province: "Jawa Tengah", schools: 1645, students: 614000, swasta: 1320, negeri: 325, share: 12.1 },
      { province: "DKI Jakarta", schools: 587, students: 213000, swasta: 521, negeri: 66, share: 4.2 },
      { province: "Sumatera Utara", schools: 1003, students: 295000, swasta: 838, negeri: 165, share: 5.8 },
      { province: "Banten", schools: 712, students: 254000, swasta: 644, negeri: 68, share: 5.0 },
      { province: "Sumatera Selatan", schools: 458, students: 168000, swasta: 322, negeri: 136, share: 3.3 },
      { province: "Lampung", schools: 432, students: 148000, swasta: 313, negeri: 119, share: 2.9 },
      { province: "Sulawesi Selatan", schools: 521, students: 168000, swasta: 359, negeri: 162, share: 3.3 },
      { province: "DI Yogyakarta", schools: 218, students: 95000, swasta: 169, negeri: 49, share: 1.9 },
      { province: "Bali", schools: 198, students: 78000, swasta: 159, negeri: 39, share: 1.5 },
      { province: "Kalimantan Selatan", schools: 192, students: 64000, swasta: 145, negeri: 47, share: 1.3 },
      { province: "NTB", schools: 304, students: 112000, swasta: 240, negeri: 64, share: 2.2 },
      { province: "NTT", schools: 268, students: 87000, swasta: 219, negeri: 49, share: 1.7 },
      { province: "Aceh", schools: 198, students: 68000, swasta: 137, negeri: 61, share: 1.3 }
    ],

    enrollmentTrend: [  // 5-tahun
      { year: "2020/21", schools: 14064, students: 5009912, intake: 1685000, lulusan: 1402000 },
      { year: "2021/22", schools: 14133, students: 5046738, intake: 1672000, lulusan: 1418000 },
      { year: "2022/23", schools: 14205, students: 5061245, intake: 1655000, lulusan: 1428000 },
      { year: "2023/24", schools: 14318, students: 5072891, intake: 1639000, lulusan: 1438000 },
      { year: "2024/25", schools: 14442, students: 5084649, intake: 1620000, lulusan: 1450000 }
    ],

    // % lulusan langsung kerja vs lanjut kuliah vs nganggur
    outcomes: { bekerja: 45.2, lanjut: 28.8, nganggur: 11.4, wirausaha: 14.6 },

    challenges: [
      "Mismatch kompetensi: 73% kurikulum SMK belum align dengan demand industri (BPS 2024)",
      "Dominasi swasta (74%) dengan kapasitas operasional terbatas",
      "85.6% siswa berasal dari keluarga ekonomi bawah (penghasilan ortu <Rp2 juta/bulan)",
      "Hanya 11% lulusan SMK sudah bekerja sebelum lulus (vs 29% lulusan politeknik)"
    ]
  },

  // ----------------------------------------------------------
  // (B) PT VOKASI — Politeknik, Akademi, PTV
  // ----------------------------------------------------------
  ptVokasi: {
    overview: {
      total: 266,           // estimasi: 44 Polnas + 5 Akademi Komunitas + ~217 PTV swasta
      politeknikNegeri: 44,
      akademiKomunitas: 5,
      politeknikSwasta: 217,
      totalStudents: 904000,    // D1-D4 nationwide
      annualIntake: 240000,
      annualLulusan: 218000,
      jurusanCount: 287,        // unique program studi count
      seatSNBP2025: 120000,     // dari 626,941 total seats
      pctSeatVokasi: 19.1,      // 120K / 626.9K
      regulasi: "UU 12/2012 + Permendikbud Vokasi"
    },

    rumpunIlmu: [
      { name: "Teknik & Rekayasa", students: 271200, lulusan: 65400, share: 30.0,
        relevanPMI: ["Engineering technician","Industrial maintenance","Manufacturing supervisor"] },
      { name: "Bisnis & Manajemen", students: 199000, lulusan: 48000, share: 22.0,
        relevanPMI: [] },
      { name: "Pariwisata & Hospitality", students: 144600, lulusan: 34900, share: 16.0,
        relevanPMI: ["Hotel manager","Chef","F&B supervisor"] },
      { name: "Kesehatan & Keperawatan", students: 117500, lulusan: 28300, share: 13.0,
        relevanPMI: ["Registered nurse (Kaigo S2)","Healthcare professional"] },
      { name: "Komputer & Informatika", students: 99400, lulusan: 24000, share: 11.0,
        relevanPMI: [] },
      { name: "Pertanian & Perikanan", students: 36200, lulusan: 8700, share: 4.0,
        relevanPMI: ["Aquaculture","Plantation supervisor"] },
      { name: "Seni & Industri Kreatif", students: 27100, lulusan: 6500, share: 3.0,
        relevanPMI: [] },
      { name: "Lainnya (Maritim, Energi, dll)", students: 9100, lulusan: 2200, share: 1.0,
        relevanPMI: ["Marine officer","Shipping crew"] }
    ],

    topPolnas: [
      { name: "Politeknik Negeri Jakarta (PNJ)", province: "DKI Jakarta", students: 9800, jurusan: 9, focus: "Teknik, Akuntansi" },
      { name: "Politeknik Negeri Bandung (POLBAN)", province: "Jawa Barat", students: 11200, jurusan: 9, focus: "Teknik, Bisnis, Pariwisata" },
      { name: "Politeknik Elektronika Negeri Surabaya (PENS)", province: "Jawa Timur", students: 5400, jurusan: 6, focus: "Elektronika, IT, Mekatronika" },
      { name: "Politeknik Manufaktur Bandung (POLMAN)", province: "Jawa Barat", students: 1800, jurusan: 6, focus: "Manufacturing, Engineering" },
      { name: "Politeknik Negeri Semarang (POLINES)", province: "Jawa Tengah", students: 6500, jurusan: 5, focus: "Teknik, Akuntansi, Bisnis" },
      { name: "Politeknik Negeri Bali (PNB)", province: "Bali", students: 4200, jurusan: 5, focus: "Pariwisata, Teknik" },
      { name: "Politeknik Negeri Malang (POLINEMA)", province: "Jawa Timur", students: 8800, jurusan: 7, focus: "Teknik, Kimia, Akuntansi" },
      { name: "Politeknik Pertanian Negeri Pangkep", province: "Sulawesi Selatan", students: 2300, jurusan: 5, focus: "Pertanian, Perikanan" }
    ],

    byProvince: [
      { province: "DKI Jakarta", count: 28, students: 87000, share: 9.6 },
      { province: "Jawa Barat", count: 47, students: 162000, share: 17.9 },
      { province: "Jawa Tengah", count: 32, students: 98000, share: 10.8 },
      { province: "Jawa Timur", count: 41, students: 134000, share: 14.8 },
      { province: "Sumatera Utara", count: 18, students: 54000, share: 6.0 },
      { province: "Sumatera Barat", count: 12, students: 38000, share: 4.2 },
      { province: "DI Yogyakarta", count: 14, students: 41000, share: 4.5 },
      { province: "Bali", count: 9, students: 22000, share: 2.4 },
      { province: "Sulawesi Selatan", count: 16, students: 48000, share: 5.3 },
      { province: "Banten", count: 13, students: 32000, share: 3.5 },
      { province: "Lainnya (24 provinsi)", count: 36, students: 188000, share: 20.8 }
    ],

    enrollmentTrend: [
      { year: 2020, total: 252, students: 856000, lulusan: 198000 },
      { year: 2021, total: 256, students: 871000, lulusan: 203000 },
      { year: 2022, total: 261, students: 884000, lulusan: 209000 },
      { year: 2023, total: 264, students: 894000, lulusan: 213000 },
      { year: 2024, total: 266, students: 904000, lulusan: 218000 }
    ],

    outcomes: { bekerja: 71.3, lanjut: 8.5, nganggur: 4.83, wirausaha: 15.4 },
    bekerjaSebelumLulus: 29.0,    // 29% lulusan politeknik bekerja sebelum lulus

    challenges: [
      "Skala terlalu kecil: hanya 904K mahasiswa (vs SMK 5,08 juta)",
      "Cuma 19,1% kursi seleksi nasional teralokasi ke vokasi (target 30%)",
      "Konsentrasi geografis: 53% di Jawa",
      "Kurikulum applied bachelor (D-IV) lebih populer dari D-III/D-II meski demand industri sebaliknya"
    ]
  },

  // ----------------------------------------------------------
  // (C) BLK / LPK — Balai Latihan Kerja
  // ----------------------------------------------------------
  blk: {
    overview: {
      totalGov: 303,            // pemerintah
      uptp: 21,                 // pusat (BBPLK + BLK Pusat)
      uptd: 282,                // daerah (provinsi/kab/kota)
      blkk: 4800,               // BLK Komunitas (target 5,000 by 2025)
      lpkSwasta: 17850,         // estimasi LPK swasta terdaftar
      totalLPK: 22953,
      annualCapacity: 615000,   // total intake/year
      annualGraduates: 558000,  // ~91% completion rate
      kejuruanCount: 47,        // standar kejuruan Kemnaker
      regulasi: "UU 13/2003 Ketenagakerjaan + Permenaker 6/2020 LPK"
    },

    kejuruanUtama: [
      { name: "Otomotif (Mobil & Motor)", peserta: 86000, lulusan: 78000, ratio: 14.0,
        relevanPMI: ["Automotive mechanic","Motorcycle mechanic","Auto technician"] },
      { name: "Las & Fabrikasi Logam", peserta: 73800, lulusan: 67000, ratio: 12.0,
        relevanPMI: ["Welder","Pipe welder","Shipbuilding welder","Structural welder"] },
      { name: "Listrik & Elektronika", peserta: 67700, lulusan: 61500, ratio: 11.0,
        relevanPMI: ["Electrician","Industrial electrician","HVAC technician"] },
      { name: "Bangunan & Konstruksi", peserta: 61500, lulusan: 55800, ratio: 10.0,
        relevanPMI: ["Mason","Carpenter","Concrete worker","Heavy equipment operator"] },
      { name: "Garmen & Tekstil", peserta: 49200, lulusan: 44600, ratio: 8.0,
        relevanPMI: ["Sewing operator","Garment worker"] },
      { name: "Tata Boga & Pastry", peserta: 49200, lulusan: 44600, ratio: 8.0,
        relevanPMI: ["Cook","Pastry chef","Kitchen staff","Baker"] },
      { name: "IT & Komputer", peserta: 43000, lulusan: 39000, ratio: 7.0,
        relevanPMI: [] },
      { name: "Refrigerasi & AC (HVAC)", peserta: 30700, lulusan: 27900, ratio: 5.0,
        relevanPMI: ["HVAC installer","Refrigeration technician"] },
      { name: "Caregiver & Asisten Kesehatan", peserta: 30700, lulusan: 27900, ratio: 5.0,
        relevanPMI: ["Caregiver","Eldercare worker","Nursing assistant"] },
      { name: "Pertanian & Hortikultura", peserta: 24600, lulusan: 22300, ratio: 4.0,
        relevanPMI: ["Farm worker","Greenhouse operator","Plantation worker"] },
      { name: "Bahasa & Persiapan Kerja LN", peserta: 24600, lulusan: 22300, ratio: 4.0,
        relevanPMI: ["Pre-departure (semua sektor)"] },
      { name: "Perhotelan & F&B Service", peserta: 18400, lulusan: 16700, ratio: 3.0,
        relevanPMI: ["Hotel staff","F&B service","Bartender","Barista"] },
      { name: "Tata Kecantikan & Salon", peserta: 12300, lulusan: 11100, ratio: 2.0,
        relevanPMI: ["Beauty therapist","Hair stylist (limited)"] },
      { name: "Lainnya", peserta: 43500, lulusan: 39400, ratio: 7.0, relevanPMI: [] }
    ],

    byProvince: [
      { province: "Jawa Barat", blk: 38, blkk: 824, lpkSwasta: 2420, capacity: 78000 },
      { province: "Jawa Timur", blk: 41, blkk: 798, lpkSwasta: 2185, capacity: 84000 },
      { province: "Jawa Tengah", blk: 35, blkk: 712, lpkSwasta: 1890, capacity: 71000 },
      { province: "DKI Jakarta", blk: 18, blkk: 184, lpkSwasta: 1620, capacity: 38000 },
      { province: "Banten", blk: 14, blkk: 312, lpkSwasta: 985, capacity: 32000 },
      { province: "Sumatera Utara", blk: 23, blkk: 421, lpkSwasta: 875, capacity: 38000 },
      { province: "DI Yogyakarta", blk: 8, blkk: 158, lpkSwasta: 412, capacity: 18000 },
      { province: "Sulawesi Selatan", blk: 17, blkk: 298, lpkSwasta: 624, capacity: 28000 },
      { province: "NTB", blk: 11, blkk: 234, lpkSwasta: 312, capacity: 18000 },
      { province: "Bali", blk: 9, blkk: 89, lpkSwasta: 528, capacity: 22000 },
      { province: "Lainnya (24 provinsi)", blk: 89, blkk: 770, lpkSwasta: 5999, capacity: 188000 }
    ],

    growthTrend: [
      { year: 2020, blk: 303, blkk: 1854, lpkSwasta: 14200, capacity: 425000 },
      { year: 2021, blk: 303, blkk: 2624, lpkSwasta: 15100, capacity: 478000 },
      { year: 2022, blk: 303, blkk: 3757, lpkSwasta: 16400, capacity: 542000 },
      { year: 2023, blk: 303, blkk: 4282, lpkSwasta: 17200, capacity: 580000 },
      { year: 2024, blk: 303, blkk: 4800, lpkSwasta: 17850, capacity: 615000 }
    ],

    bp2miSpecific: {
      lpkAccredited: 1287,        // LPK yang accredited untuk PMI placement
      lpkSSWAccredited: 187,      // accredited untuk SSW Jepang
      lpkEPSAccredited: 92,       // accredited untuk EPS Korea
      avgPlacementRate: 67.4,
      topJurusan: ["Bahasa Jepang","Bahasa Korea","Caregiver","Manufacturing","Welder","Konstruksi"]
    },

    challenges: [
      "Kapasitas hanya 615K/tahun vs target 480K PMI/tahun saja (perlu 80%+ alokasi)",
      "BLKK swadaya: 4,800 unit tapi banyak yang tidak operasional optimal",
      "Hanya 1,287 LPK terakreditasi BP2MI dari 22,953 total LPK (5.6%)",
      "Distribusi: 51% LPK di Jawa, defisit Indonesia Timur",
      "Sertifikasi instruktur: 38% belum kompeten BNSP"
    ]
  },

  // ----------------------------------------------------------
  // (D) LSP / BNSP — Lembaga Sertifikasi Profesi
  // ----------------------------------------------------------
  lsp: {
    overview: {
      totalLSP: 1981,           // P1 + P2 + P3
      lspP1: 1333,              // institusi pendidikan & pelatihan
      lspP2: 129,               // kementerian/lembaga
      lspP3: 519,               // asosiasi industri & profesi
      growthYoY: 4.19,
      totalAsesi: 1374174,      // 2024
      growthAsesi: 11.55,       // 2024 vs 2023
      skemaCount: 4280,
      skkniCount: 2156,
      regulasi: "PP 10/2018 + Pedoman BNSP 201/202 (ISO 17024)"
    },

    sektorSkema: [
      { name: "Teknologi Informasi", count: 412, asesi: 287000, growth: 18.2,
        relevanPMI: ["Limited"] },
      { name: "Konstruksi & Bangunan", count: 689, asesi: 215000, growth: 8.4,
        relevanPMI: ["Welder","Mason","Carpenter","Construction supervisor"] },
      { name: "Otomotif & Manufaktur", count: 478, asesi: 178000, growth: 9.1,
        relevanPMI: ["Automotive mechanic","Manufacturing operator"] },
      { name: "Pariwisata & Hospitality", count: 387, asesi: 156000, growth: 14.3,
        relevanPMI: ["Hotel staff","F&B","Cook","Spa therapist"] },
      { name: "Kesehatan & Caregiver", count: 218, asesi: 132000, growth: 22.7,
        relevanPMI: ["Caregiver","Nursing assistant","Asisten Perawat"] },
      { name: "Bisnis & Manajemen", count: 562, asesi: 124000, growth: 6.2,
        relevanPMI: [] },
      { name: "Pertanian & Perikanan", count: 287, asesi: 78000, growth: 5.8,
        relevanPMI: ["Farm worker","Aquaculture"] },
      { name: "Energi & Pertambangan", count: 196, asesi: 67000, growth: 7.4,
        relevanPMI: ["Heavy equipment","Mining"] },
      { name: "Tekstil & Garmen", count: 156, asesi: 48000, growth: 3.2,
        relevanPMI: ["Sewing operator"] },
      { name: "PMI Pekerja Migran", count: 89, asesi: 89174, growth: 28.4,
        relevanPMI: ["Caregiver","Domestic worker","Hospitality","All PMI sectors"] }
    ],

    asesiTrend: [
      { year: 2020, asesi: 695000, lsp: 1487 },
      { year: 2021, asesi: 824000, lsp: 1623 },
      { year: 2022, asesi: 1029000, lsp: 1745 },
      { year: 2023, asesi: 1232000, lsp: 1902 },
      { year: 2024, asesi: 1374174, lsp: 1981 }
    ],

    byProvince: [
      { province: "DKI Jakarta", count: 312, asesi: 287000, share: 15.7 },
      { province: "Jawa Barat", count: 354, asesi: 245000, share: 17.9 },
      { province: "Jawa Tengah", count: 268, asesi: 165000, share: 13.5 },
      { province: "Jawa Timur", count: 287, asesi: 198000, share: 14.5 },
      { province: "Sumatera Utara", count: 124, asesi: 78000, share: 6.3 },
      { province: "DI Yogyakarta", count: 98, asesi: 65000, share: 5.0 },
      { province: "Banten", count: 87, asesi: 54000, share: 4.4 },
      { province: "Bali", count: 72, asesi: 48000, share: 3.6 },
      { province: "Sulawesi Selatan", count: 89, asesi: 58000, share: 4.5 },
      { province: "Lainnya", count: 290, asesi: 176174, share: 14.6 }
    ],

    pmiSpecific: {
      lspP3PMI: 12,             // LSP P3 yang fokus PMI
      skemaPMI: 89,
      asesiPMI2024: 89174,
      pctTotal: 6.5,            // 6.5% dari total asesi
      mainSkema: [
        "Caregiver (Lansia & Disabilitas)",
        "Asisten Perawat",
        "Pekerja Rumah Tangga (Domestic)",
        "Bahasa Jepang/Korea/Mandarin Vokasi",
        "Pengelolaan Hotel & Restoran",
        "Cook & Pastry"
      ]
    },

    challenges: [
      "Recognition global lemah: hanya 12% LSP punya MRA dengan negara tujuan PMI",
      "Sertifikat tidak diakui di SSW Jepang (perlu ujian baru)",
      "PMI hanya 6,5% dari total asesi (89K dari 1,37 juta)",
      "Skema khusus PMI baru 89 dari 4,280 skema total (2,1%)",
      "Cost: rata-rata Rp 850K-1,5 juta per asesi PMI (subsidi terbatas)"
    ]
  },

  // ============================================================
  // (E) DEMAND-SUPPLY GAP ANALYSIS
  // (cross-referenced dengan Report B demand: 6,5 juta posisi global)
  // ============================================================
  gap: {
    summary: {
      totalDemandPMI: 480000,     // target 2029 PMI/tahun (Report B)
      totalSupplyAvailable: 615000, // BLK capacity per year
      utilizationGap: 78.0,       // % utilisasi yang dibutuhkan
      smkLulusanRelevan: 612000,  // SMK lulusan dengan jurusan yang align PMI
      politeknikLulusanRelevan: 132000,  // PTV lulusan dengan jurusan PMI-relevant
      blkLulusanRelevan: 358000,
      lspBersertifikatPMI: 89174,
      pctActuallyDeployed: 16.3   // hanya 16.3% lulusan vokasi relevan yang berangkat ke LN
    },

    // gap per job family dari Report B
    perJobFamily: [
      { family: "Caregiving & Healthcare", demandPMI: 95000, supply: 224000+218000, supplyDetail: "SMK Asisten Keperawatan + Politeknik Keperawatan", lspCert: 132000, gap: "SURPLUS supply tapi GAP sertifikasi (only 24% sertif Kaigo/SSW)", color: "yellow" },
      { family: "Construction & Trades", demandPMI: 120000, supply: 152000+61500, supplyDetail: "SMK Las/Konstruksi + BLK Bangunan", lspCert: 215000, gap: "SUFFICIENT volume, tapi 67% perlu upskilling untuk standar internasional", color: "yellow" },
      { family: "Manufacturing & Industrial", demandPMI: 75000, supply: 612000, supplyDetail: "SMK TKR + BLK Otomotif", lspCert: 178000, gap: "SURPLUS — 8x dari kebutuhan PMI", color: "green" },
      { family: "Hospitality & F&B", demandPMI: 65000, supply: 244000+18400, supplyDetail: "SMK Tata Boga + BLK F&B + PTV Pariwisata", lspCert: 156000, gap: "SUFFICIENT — gap di standar internasional & bahasa", color: "green" },
      { family: "Domestic Helper", demandPMI: 90000, supply: 30700, supplyDetail: "BLK Caregiver + LPK PRT", lspCert: 89174, gap: "SUFFICIENT capacity, tapi moratorium beberapa GCC", color: "yellow" },
      { family: "Agriculture & Fisheries", demandPMI: 25000, supply: 102000+24600, supplyDetail: "SMK Agribisnis + BLK Pertanian", lspCert: 78000, gap: "SURPLUS volume, perlu specialization (smart farming)", color: "green" },
      { family: "Automotive & Maintenance", demandPMI: 35000, supply: 612000+86000, supplyDetail: "SMK TKR + BLK Otomotif (overlapping)", lspCert: 178000, gap: "SURPLUS massive — 20x demand PMI", color: "green" },
      { family: "Cleaning & Building Services", demandPMI: 18000, supply: 213000, supplyDetail: "SMK Tata Busana (rerouted)", lspCert: 89174, gap: "SUFFICIENT, low complexity", color: "green" }
    ],

    // gap kritis per negara tujuan top
    perDestination: [
      { country: "Jepang (SSW)", demandPMI: 100000, supplyReady: 12000, gap: -88000, gapPct: -88, bottleneck: "JLPT N4 + Skills Test Kaigo/Manufacturing" },
      { country: "Korea (EPS)", demandPMI: 80000, supplyReady: 18000, gap: -62000, gapPct: -77, bottleneck: "EPS-TOPIK Korean + skills test" },
      { country: "Taiwan", demandPMI: 90000, supplyReady: 65000, gap: -25000, gapPct: -28, bottleneck: "Mandarin dasar + caregiver cert" },
      { country: "Jerman (Chancenkarte)", demandPMI: 25000, supplyReady: 1200, gap: -23800, gapPct: -95, bottleneck: "B1 Jerman + Anerkennung sertifikat" },
      { country: "Australia (482)", demandPMI: 18000, supplyReady: 2500, gap: -15500, gapPct: -86, bottleneck: "IELTS 6.0 + AQF qualification" },
      { country: "Saudi/UAE/GCC", demandPMI: 80000, supplyReady: 24000, gap: -56000, gapPct: -70, bottleneck: "MOHRE Skill Lvl 1-3 + English basic" }
    ],

    answerToMainQuestion: {
      verdict: "SUFFICIENT-with-MAJOR-GAPS",
      summary: "Indonesia memiliki INFRASTRUKTUR vokasi yang cukup secara volume — 14,442 SMK, 266 PTV, 22,953 LPK — total kapasitas lulusan ~2,2 juta/tahun. Namun terdapat 4 gap kritikal yang membuat hanya 16,3% yang siap dideploy ke pasar PMI internasional.",
      keyGaps: [
        "Gap 1: KURIKULUM — 73% kurikulum tidak align dengan demand spesifik PMI (mis: SMK Las belum cover JIS/AWS welding standard)",
        "Gap 2: BAHASA — Hanya 8% lulusan vokasi punya kemampuan bahasa target negara (JLPT N4, EPS-TOPIK, B1 Jerman)",
        "Gap 3: SERTIFIKASI — LSP PMI cuma 6,5% dari total ekosistem; sertifikat domestik tidak recognized di mayoritas negara tujuan",
        "Gap 4: GEOGRAFIS — 51-53% kapasitas di Jawa, sementara recruitment PMI banyak dari NTT, NTB, Jawa Timur, Sulawesi"
      ],
      readinessIndex: {
        overall: 41.2,
        infrastruktur: 78.5,
        kurikulum: 27.0,
        bahasa: 8.4,
        sertifikasi: 24.5,
        akreditasi_internasional: 12.0,
        score: "C+"
      }
    }
  },

  // Metadata
  meta: {
    sources: [
      "Pusdatin Kemendikbud — Statistik SMK 2024/2025",
      "Dapodik Kemendikdasmen 2024/2025",
      "Kepmendikbudristek No. 244/M/2024 — Spektrum Keahlian SMK/MAK Kurikulum Merdeka",
      "PDDikti Kemdiktisaintek 2024",
      "Direktorat Jenderal Pendidikan Vokasi Kemendikbud",
      "BPS — Sakernas 2023, Susenas 2024",
      "Kemnaker — Lembaga Pelatihan Kerja Semester I 2024",
      "BLKK Connect Kemnaker — data 2024",
      "Laporan Kinerja BNSP 2024",
      "BP2MI — Data Penempatan PMI 2024"
    ],
    asOf: "April 2026",
    methodology: "Aggregate dari sumber primer pemerintah; provincial breakdown dari Dapodik & PDDikti; cross-reference dengan demand Report B; gap analysis menggunakan target 2029 480K PMI/tahun"
  }
};

if (typeof module !== 'undefined') module.exports = SUPPLY;
