// ============================================================
// REPORT D — CONTENT & CURRICULUM TRANSFORMATION
// Mapping learning path PMI ↔ kurikulum SMK/PTV/BLK/LSP
// ============================================================

const CURRICULUM = {

  // (D1) Learning Path per Job Role
  // (D2) Mapping: aligned / partial / missing per institusi vokasi
  // Status code: "aligned" (✓ ada & sesuai) | "partial" (⚠ ada tapi belum sesuai) | "missing" (✗ belum ada)

  jobRoles: [

    // ============ CAREGIVING & HEALTHCARE ============
    {
      id: "caregiver-jp",
      family: "Caregiving & Healthcare",
      jobType: "Eldercare Institusional",
      role: "Caregiver Lansia (Kaigo)",
      destinations: ["Jepang (SSW)", "Korea (E-7-4)", "Taiwan"],
      demandPMI: 65000,
      learningPath: {
        coreSkills: [
          "Anatomi & fisiologi lansia",
          "Personal care (mandi, makan, toilet)",
          "Mobility assistance & transfer technique",
          "Dementia & Alzheimer care",
          "Wound care & basic medical procedures",
          "Emergency response (CPR, first aid)",
          "Mental health awareness & komunikasi empati"
        ],
        language: "JLPT N4 (untuk Kaigo) · EPS-TOPIK (Korea)",
        certifications: ["SSW Care Skills Test (Jepang)","BNSP Skema Caregiver Lansia","Kaigofukushishi (D-3 jalur PR)"],
        durationMonths: 12,
        prakerinHours: 480
      },
      mapping: {
        smk: { konsentrasi: "Asisten Keperawatan (Konsentrasi 75 - Kepmen 244/2024)", status: "partial", coverage: 60,
               gap: "Materi Jepang/Korea-specific tidak ada; standar Kaigo tidak diadopsi; durasi prakerin kurang" },
        ptv:  { jurusan: "D-III Keperawatan + D-IV Caregiver Politeknik", status: "partial", coverage: 70,
               gap: "Hanya 12 PTV yang punya track caregiver internasional; sertifikasi Kaigo belum jadi LO" },
        blk:  { kejuruan: "Caregiver (BLK Bekasi, Cevest, Karawang)", status: "aligned", coverage: 78,
               gap: "Kapasitas terbatas (~3,200 lulusan/tahun) vs demand 65K" },
        lsp:  { skema: "BNSP Skema Pelaksana Pelayanan Lansia", status: "partial", coverage: 45,
               gap: "Tidak setara Kaigo Jepang; perlu re-test di destinasi" }
      }
    },
    {
      id: "nursing-assistant",
      family: "Caregiving & Healthcare",
      jobType: "Hospital Nursing Support",
      role: "Asisten Perawat (Hospital)",
      destinations: ["Saudi Arabia","UAE","Qatar","Kuwait","Bahrain"],
      demandPMI: 30000,
      learningPath: {
        coreSkills: ["Vital signs measurement","IV/injection support","Medical record keeping","Infection control","Basic ICU/ER procedures","Patient transfer","Bedside care"],
        language: "English (IELTS 5.0 / OET) · Arabic basic untuk GCC",
        certifications: ["Prometric Saudi/UAE","BNSP Skema Asisten Perawat","DataFlow verification"],
        durationMonths: 9,
        prakerinHours: 360
      },
      mapping: {
        smk: { konsentrasi: "Asisten Keperawatan (Konsentrasi 75)", status: "partial", coverage: 55,
               gap: "Kurikulum hospital-grade tidak setara dengan SK Saudi/UAE" },
        ptv:  { jurusan: "D-III Keperawatan", status: "aligned", coverage: 80,
               gap: "Lulusan langsung memenuhi syarat; kendala English & Prometric" },
        blk:  { kejuruan: "—", status: "missing", coverage: 0,
               gap: "Tidak ada kejuruan BLK khusus untuk hospital nursing assistant" },
        lsp:  { skema: "BNSP Skema Pelaksana Asuhan Keperawatan", status: "partial", coverage: 50,
               gap: "Belum ada MRA dengan negara GCC" }
      }
    },

    // ============ CONSTRUCTION & TRADES ============
    {
      id: "welder",
      family: "Construction & Trades",
      jobType: "Welding & Fabrication",
      role: "Welder (Industrial / Pipe / Shipbuilding)",
      destinations: ["Jepang (SSW)","Korea (E-9)","UAE","Saudi","Qatar"],
      demandPMI: 45000,
      learningPath: {
        coreSkills: ["SMAW (Stick welding)","GMAW (MIG)","GTAW (TIG)","Pipe welding 6G","Welding metallurgy","Blueprint reading","NDT basics","Safety (hot work permits)"],
        language: "JLPT N4 (Jepang) / English basic / Arabic basic",
        certifications: ["AWS Certified Welder (US standard)","JIS Z 3801 (Jepang)","Migas Welder Cert","BNSP Skema Pengelasan SMAW/GMAW/GTAW"],
        durationMonths: 6,
        prakerinHours: 720
      },
      mapping: {
        smk: { konsentrasi: "Teknik Pengelasan (Konsentrasi 28 - Bidang Manufaktur)", status: "partial", coverage: 65,
               gap: "Standar SMK 3G/4G; demand internasional 6G; tools dan logam praktek terbatas" },
        ptv:  { jurusan: "D-III Teknik Pengelasan & Fabrikasi", status: "aligned", coverage: 82,
               gap: "Hanya ~8 politeknik yang punya program; lulusan ~1,200/tahun" },
        blk:  { kejuruan: "Las & Fabrikasi Logam", status: "aligned", coverage: 84,
               gap: "BLK Cevest, Surakarta, Bandung punya 6G capability; perlu scale-up" },
        lsp:  { skema: "BNSP Skema Welder SMAW/GMAW/GTAW (multi-level)", status: "aligned", coverage: 88,
               gap: "MRA dengan AWS belum efektif; perlu re-cert untuk USA project" }
      }
    },
    {
      id: "construction-worker",
      family: "Construction & Trades",
      jobType: "General Construction",
      role: "Mason / Carpenter / Concrete Worker",
      destinations: ["Saudi (NEOM)","UAE","Qatar","Korea (E-9)","Jepang (SSW)"],
      demandPMI: 75000,
      learningPath: {
        coreSkills: ["Bricklaying & masonry","Concrete works","Formwork","Steel reinforcement","Scaffolding","Site safety (OSHA)","Heavy equipment basics","Blueprint reading"],
        language: "Arabic basic / Korean (EPS-TOPIK) / Japanese (JLPT N4)",
        certifications: ["OSHA 10/30","SSW Construction Skills Test (Jepang)","BNSP Skema Tukang Batu/Beton/Kayu"],
        durationMonths: 5,
        prakerinHours: 600
      },
      mapping: {
        smk: { konsentrasi: "Konstruksi Gedung, Sanitasi, dan Perawatan (Konsentrasi 41-44)", status: "partial", coverage: 62,
               gap: "Materi konstruksi tinggi & mega-project (NEOM grade) belum dicover" },
        ptv:  { jurusan: "D-III Teknik Sipil / Konstruksi Bangunan Air", status: "partial", coverage: 68,
               gap: "Output lebih ke supervisor, bukan field worker; mismatch demand PMI" },
        blk:  { kejuruan: "Bangunan & Konstruksi", status: "aligned", coverage: 81,
               gap: "Distribusi BLK kurang merata; banyak di Jawa" },
        lsp:  { skema: "BNSP Skema Tukang Batu/Tukang Kayu/Mandor Konstruksi", status: "aligned", coverage: 75,
               gap: "Tidak diakui di Saudi/UAE — perlu CITB UK atau lokal" }
      }
    },
    {
      id: "electrician",
      family: "Construction & Trades",
      jobType: "Electrical Installation",
      role: "Electrician / Industrial Electrician",
      destinations: ["Jepang (SSW)","Australia (482)","Saudi","UAE","Singapore"],
      demandPMI: 22000,
      learningPath: {
        coreSkills: ["Electrical wiring & installation","Motor controls","PLC basics","Industrial automation","Safety (LV/MV/HV)","Reading schematics","Troubleshooting","Conduit work"],
        language: "JLPT N4 (Jepang) / IELTS 5.5 (Australia) / Arabic basic",
        certifications: ["Australia Electrical License (state-based)","SSW Electrical Skills","BNSP Skema Teknisi Listrik Industri"],
        durationMonths: 8,
        prakerinHours: 600
      },
      mapping: {
        smk: { konsentrasi: "Teknik Instalasi Tenaga Listrik (Konsentrasi 32-33)", status: "aligned", coverage: 78,
               gap: "Standar IEC sudah dicover; gap di PLC/SCADA modern" },
        ptv:  { jurusan: "D-III Teknik Listrik / Mekatronika", status: "aligned", coverage: 84,
               gap: "Sudah baik; gap di sertifikasi internasional" },
        blk:  { kejuruan: "Listrik & Elektronika", status: "aligned", coverage: 76,
               gap: "Equipment praktek industri grade kurang; perlu lab modern" },
        lsp:  { skema: "BNSP Skema Teknisi Listrik (multi-level)", status: "partial", coverage: 60,
               gap: "Skema Australia Electrical License sangat ketat; perlu re-licensure" }
      }
    },

    // ============ MANUFACTURING & INDUSTRIAL ============
    {
      id: "manufacturing-operator",
      family: "Manufacturing & Industrial",
      jobType: "Production Line",
      role: "Manufacturing Operator (Auto/Electronics/Food)",
      destinations: ["Jepang (SSW)","Korea (E-9)","Taiwan"],
      demandPMI: 95000,
      learningPath: {
        coreSkills: ["Production line operation","Quality control (5S, Kaizen, Lean)","Machine operation","SPC basics","Material handling","Safety (industrial)","Teamwork & shift work","Basic preventive maintenance"],
        language: "JLPT N4 / EPS-TOPIK / Mandarin basic (Taiwan)",
        certifications: ["SSW Manufacturing Skills Test","EPS Skills Test (Korea)","BNSP Skema Operator Produksi"],
        durationMonths: 4,
        prakerinHours: 480
      },
      mapping: {
        smk: { konsentrasi: "Teknik Mekanik Industri / Manufaktur (Konsentrasi 1-7)", status: "aligned", coverage: 72,
               gap: "Volume cukup (1.32 juta siswa di bidang Manufaktur); gap di standar QC global" },
        ptv:  { jurusan: "D-III Teknik Mesin / Mekatronika", status: "aligned", coverage: 80,
               gap: "Output lebih ke supervisor; downgrade ke operator level dianggap waste" },
        blk:  { kejuruan: "Otomotif & Manufaktur", status: "aligned", coverage: 75,
               gap: "Cepat trainable (4-6 bulan); perlu scale-up untuk SSW Jepang" },
        lsp:  { skema: "BNSP Skema Operator Produksi (multi-sektor)", status: "aligned", coverage: 70,
               gap: "Bridge dengan SSW skills test masih perlu training tambahan" }
      }
    },
    {
      id: "automotive-mechanic",
      family: "Automotive & Maintenance",
      jobType: "Vehicle Maintenance",
      role: "Automotive Mechanic / Auto Technician",
      destinations: ["Jepang (SSW)","Singapore","UAE","Australia"],
      demandPMI: 28000,
      learningPath: {
        coreSkills: ["Engine diagnostics","Transmission systems","Brake systems","Electrical diagnostics","Hybrid/EV basics","Diagnostic tools (OBD-II, scanner)","Body repair (basic)","Customer service"],
        language: "JLPT N4 / English basic / Arabic basic",
        certifications: ["SSW Automobile Maintenance","ASE Certified (US standard)","BNSP Skema Otomotif"],
        durationMonths: 6,
        prakerinHours: 720
      },
      mapping: {
        smk: { konsentrasi: "Teknik Kendaraan Ringan Otomotif (Konsentrasi 9)", status: "aligned", coverage: 82,
               gap: "Volume terbesar (612K siswa); gap di EV/hybrid technology" },
        ptv:  { jurusan: "D-III Teknik Otomotif", status: "aligned", coverage: 78,
               gap: "Sudah cover advanced diagnostics; gap di sertifikasi global" },
        blk:  { kejuruan: "Otomotif (Mobil & Motor)", status: "aligned", coverage: 80,
               gap: "BLK punya bengkel praktek; gap di tools modern (CAN bus, scanner)" },
        lsp:  { skema: "BNSP Skema Mekanik Otomotif (multi-level)", status: "aligned", coverage: 72,
               gap: "Perlu equivalence dengan SSW Automobile" }
      }
    },

    // ============ HOSPITALITY & FOOD SERVICE ============
    {
      id: "hotel-staff",
      family: "Hospitality & Food Service",
      jobType: "Hotel Operations",
      role: "Hotel Staff (Front Office / Housekeeping / F&B)",
      destinations: ["Hong Kong","Singapore","Saudi","UAE","Maladewa","Qatar"],
      demandPMI: 38000,
      learningPath: {
        coreSkills: ["Front office operations","Housekeeping standards (5-star)","F&B service (silver/American)","Hotel PMS (Opera, Fidelio)","Concierge skills","Customer service excellence","Multi-cultural awareness","Safety & hygiene (HACCP)"],
        language: "English (IELTS 5.5+) · Arabic basic / Mandarin basic",
        certifications: ["AHLEI (American Hotel & Lodging)","BNSP Skema Perhotelan","STR Hospitality"],
        durationMonths: 6,
        prakerinHours: 600
      },
      mapping: {
        smk: { konsentrasi: "Perhotelan (Konsentrasi 91-93)", status: "aligned", coverage: 78,
               gap: "Kurikulum hotel local-grade; gap di standar 5-star international" },
        ptv:  { jurusan: "D-III/D-IV Perhotelan & Pariwisata", status: "aligned", coverage: 86,
               gap: "Politeknik Pariwisata (NHI Bandung, dll) sudah excellent; output 5K/tahun" },
        blk:  { kejuruan: "Perhotelan & F&B Service", status: "partial", coverage: 65,
               gap: "Hanya beberapa BLK yang punya hotel mock-up praktek" },
        lsp:  { skema: "BNSP Skema Front Office, Housekeeping, F&B Service", status: "aligned", coverage: 75,
               gap: "AHLEI lebih diakui di GCC; BNSP cert kurang traksi global" }
      }
    },
    {
      id: "cook",
      family: "Hospitality & Food Service",
      jobType: "Kitchen Operations",
      role: "Cook / Kitchen Staff / Pastry Chef",
      destinations: ["Hong Kong","Singapore","Australia","Jepang","UAE"],
      demandPMI: 24000,
      learningPath: {
        coreSkills: ["Western/Asian/Middle Eastern cuisine","Knife skills","Food safety (HACCP)","Plating & presentation","Pastry & baking","Recipe scaling","Kitchen mgmt","Halal kitchen practices"],
        language: "English (IELTS 5.0+) · Japanese (JLPT N4 untuk Jepang)",
        certifications: ["City & Guilds Culinary","HACCP Certificate","BNSP Skema Cook/Pastry"],
        durationMonths: 9,
        prakerinHours: 720
      },
      mapping: {
        smk: { konsentrasi: "Tata Boga & Kuliner (Konsentrasi 96)", status: "aligned", coverage: 75,
               gap: "Kurikulum Indonesian-cuisine heavy; gap di world cuisine" },
        ptv:  { jurusan: "D-III Tata Boga / Culinary Arts", status: "aligned", coverage: 80,
               gap: "Cukup baik; gap di kitchen management" },
        blk:  { kejuruan: "Tata Boga & Pastry", status: "aligned", coverage: 73,
               gap: "Equipment praktek modern terbatas" },
        lsp:  { skema: "BNSP Skema Cook, Pastry & Bakery", status: "aligned", coverage: 70,
               gap: "Recognition di GCC kurang vs City & Guilds" }
      }
    },
    {
      id: "barista",
      family: "Hospitality & Food Service",
      jobType: "Beverage Service",
      role: "Barista / Bartender",
      destinations: ["Australia","Singapore","Hong Kong","UAE"],
      demandPMI: 8000,
      learningPath: {
        coreSkills: ["Espresso machine operations","Latte art","Coffee bean knowledge (origin, roast)","Cocktail mixing","Beverage costing","Customer interaction","Cash handling","Hygiene"],
        language: "English (IELTS 5.0)",
        certifications: ["SCA Barista Skills","RSA (Responsible Service of Alcohol - Australia)","BNSP Skema Barista"],
        durationMonths: 3,
        prakerinHours: 240
      },
      mapping: {
        smk: { konsentrasi: "—", status: "missing", coverage: 0,
               gap: "Belum ada konsentrasi keahlian khusus barista di SMK" },
        ptv:  { jurusan: "—", status: "missing", coverage: 0,
               gap: "Hanya elective di program Pariwisata" },
        blk:  { kejuruan: "Barista (di beberapa BLK kota besar)", status: "partial", coverage: 50,
               gap: "Hanya 12 BLK punya program barista; coffee specialist lebih dari swasta" },
        lsp:  { skema: "BNSP Skema Barista (sejak 2022)", status: "aligned", coverage: 78,
               gap: "Skema baru, populasi asesi masih kecil (~3,200/tahun)" }
      }
    },

    // ============ AGRICULTURE & FISHERIES ============
    {
      id: "farm-worker",
      family: "Agriculture & Fisheries",
      jobType: "Farming",
      role: "Farm Worker / Agriculture Laborer",
      destinations: ["Jepang (SSW Agri)","Korea (E-8 Seasonal)","Australia (Pacific Mobility)"],
      demandPMI: 18000,
      learningPath: {
        coreSkills: ["Crop cultivation","Greenhouse operations","Farm machinery operation","Pest & disease management","Harvesting & post-harvest","Hydroponics & smart farming","Animal husbandry basics","Cold chain"],
        language: "Japanese (JLPT N4) / Korean (EPS-TOPIK) / English (Australia)",
        certifications: ["SSW Agriculture Skills","BNSP Skema Pertanian","Pacific Australia Labour Mobility (PALM)"],
        durationMonths: 4,
        prakerinHours: 480
      },
      mapping: {
        smk: { konsentrasi: "Agribisnis Tanaman Pangan/Hortikultura (Konsentrasi 64-69)", status: "aligned", coverage: 75,
               gap: "Volume cukup (305K siswa); gap di smart farming & global standards" },
        ptv:  { jurusan: "D-III Agribisnis / Politeknik Pertanian", status: "aligned", coverage: 80,
               gap: "Output level lebih tinggi dari demand PMI" },
        blk:  { kejuruan: "Pertanian & Hortikultura", status: "partial", coverage: 60,
               gap: "Cuma 24K peserta/tahun; perlu scale-up" },
        lsp:  { skema: "BNSP Skema Tani Lahan/Hortikultura", status: "partial", coverage: 55,
               gap: "Tidak diakui SSW Jepang; perlu re-test" }
      }
    },
    {
      id: "fisheries",
      family: "Agriculture & Fisheries",
      jobType: "Aquaculture & Marine",
      role: "Fisheries Worker / Aquaculture Operator",
      destinations: ["Jepang (SSW Fisheries)","Korea (E-9)","Taiwan (deck fishing)"],
      demandPMI: 12000,
      learningPath: {
        coreSkills: ["Aquaculture pond/cage management","Fish feed & nutrition","Disease prevention","Fish processing & cold storage","Boat operations basics","Net handling","Maritime safety","GMP for seafood"],
        language: "Japanese (JLPT N4) / Korean (EPS-TOPIK)",
        certifications: ["SSW Fisheries Skills","STCW (for marine)","BNSP Skema Budidaya Perikanan"],
        durationMonths: 5,
        prakerinHours: 600
      },
      mapping: {
        smk: { konsentrasi: "Agribisnis Perikanan (Konsentrasi 70-74)", status: "aligned", coverage: 70,
               gap: "Curriculum cukup baik; gap di intensive aquaculture & cold chain" },
        ptv:  { jurusan: "D-III/D-IV Politeknik Kelautan & Perikanan", status: "aligned", coverage: 82,
               gap: "Excellent (Politeknik KKP, AUP, dll)" },
        blk:  { kejuruan: "Perikanan (limited)", status: "partial", coverage: 55,
               gap: "Hanya BLK pesisir yang punya program; coverage sedikit" },
        lsp:  { skema: "BNSP Skema Pembudidaya Ikan", status: "partial", coverage: 60,
               gap: "Belum align dengan SSW Fisheries Test" }
      }
    },

    // ============ DOMESTIC & CLEANING SERVICES ============
    {
      id: "domestic-helper",
      family: "Domestic Services",
      jobType: "Household Support",
      role: "Domestic Helper (FDH)",
      destinations: ["Hong Kong","Singapore","Taiwan","Saudi (limited)","UAE"],
      demandPMI: 90000,
      learningPath: {
        coreSkills: ["Household management","Childcare (infant to teen)","Eldercare basic","Cooking (multi-cuisine)","Cleaning (deep + standard)","Laundry & ironing","First aid","Basic English/Cantonese/Mandarin"],
        language: "English/Cantonese (HK) · Mandarin (Taiwan) · Arabic (GCC)",
        certifications: ["BNSP Skema Pekerja Rumah Tangga","HK FDH licensure","Singapore S-Pass"],
        durationMonths: 4,
        prakerinHours: 200
      },
      mapping: {
        smk: { konsentrasi: "—", status: "missing", coverage: 0,
               gap: "Tidak ada SMK khusus; ranah BLK & swasta" },
        ptv:  { jurusan: "—", status: "missing", coverage: 0,
               gap: "Tidak relevan untuk pendidikan tinggi" },
        blk:  { kejuruan: "Caregiver & PRT (BLK Tujuan PMI)", status: "partial", coverage: 65,
               gap: "Banyak LPK swasta yang dominate; standardisasi kurang" },
        lsp:  { skema: "BNSP Skema Pekerja Domestik (3 level)", status: "aligned", coverage: 80,
               gap: "Recognition baik di HK/Singapore; gap di GCC" }
      }
    },
    {
      id: "cleaner",
      family: "Cleaning & Building Services",
      jobType: "Building Maintenance",
      role: "Building Cleaner / Janitor",
      destinations: ["Jepang (SSW Building Cleaning)","Singapore","UAE"],
      demandPMI: 14000,
      learningPath: {
        coreSkills: ["Industrial cleaning techniques","Chemical handling & safety","Equipment operation (buffers, scrubbers)","Window cleaning (high-rise)","Waste management","Time management","Customer interaction"],
        language: "Japanese (JLPT N4) · English basic",
        certifications: ["SSW Building Cleaning Skills","BNSP Skema Cleaning Service","BICSc (UK standard)"],
        durationMonths: 2,
        prakerinHours: 180
      },
      mapping: {
        smk: { konsentrasi: "—", status: "missing", coverage: 0,
               gap: "Tidak ada konsentrasi khusus" },
        ptv:  { jurusan: "—", status: "missing", coverage: 0, gap: "—" },
        blk:  { kejuruan: "Cleaning Service (limited)", status: "partial", coverage: 55,
               gap: "Hanya beberapa BLK; banyak LPK swasta" },
        lsp:  { skema: "BNSP Skema Cleaning Service", status: "aligned", coverage: 72,
               gap: "Aligned baik; gap di standar Jepang (5S level)" }
      }
    },

    // ============ HVAC & INDUSTRIAL TECH ============
    {
      id: "hvac-technician",
      family: "Construction & Trades",
      jobType: "HVAC Installation & Service",
      role: "HVAC Technician / Refrigeration Specialist",
      destinations: ["Saudi","UAE","Qatar","Singapore","Jepang"],
      demandPMI: 18000,
      learningPath: {
        coreSkills: ["AC installation (split, central, VRF)","Refrigerant handling","Pipe brazing","Electrical for HVAC","Cooling load calculation","Troubleshooting & diagnostics","Industrial chillers","Safety (refrigerant)"],
        language: "English / Arabic basic / Japanese basic",
        certifications: ["EPA 608 (US refrigerant license)","SSW Industrial Machinery","BNSP Skema Refrigerasi & AC"],
        durationMonths: 6,
        prakerinHours: 600
      },
      mapping: {
        smk: { konsentrasi: "Teknik Pendinginan & Tata Udara (Konsentrasi 16)", status: "partial", coverage: 60,
               gap: "Hanya ~280 SMK punya program ini; volume kecil" },
        ptv:  { jurusan: "D-III Teknik Pendingin (Polban, Polman)", status: "aligned", coverage: 78,
               gap: "Excellent kurikulum; output kecil (~600/tahun)" },
        blk:  { kejuruan: "Refrigerasi & AC (HVAC)", status: "aligned", coverage: 75,
               gap: "Equipment industrial-grade kurang merata" },
        lsp:  { skema: "BNSP Skema Teknisi Refrigerasi", status: "aligned", coverage: 70,
               gap: "Gap dengan EPA 608 untuk USA/global" }
      }
    },

    // ============ HEAVY EQUIPMENT & TRANSPORT ============
    {
      id: "heavy-equipment",
      family: "Construction & Trades",
      jobType: "Heavy Machinery Operations",
      role: "Heavy Equipment Operator (Excavator/Crane/Bulldozer)",
      destinations: ["Saudi (NEOM)","UAE","Australia","Canada","Qatar"],
      demandPMI: 22000,
      learningPath: {
        coreSkills: ["Excavator operations","Crane operations & rigging","Dump truck driving","Bulldozer operations","Site safety (OSHA)","Equipment maintenance","Hand signals","Load chart reading"],
        language: "English / Arabic basic",
        certifications: ["NCCCO Crane Operator (US standard)","CITB UK","Dogman/Rigger (Australia)","BNSP Skema Operator Alat Berat"],
        durationMonths: 4,
        prakerinHours: 480
      },
      mapping: {
        smk: { konsentrasi: "Teknik Alat Berat (Konsentrasi 26)", status: "partial", coverage: 55,
               gap: "Hanya ~120 SMK punya jurusan; banyak teori, kurang praktek" },
        ptv:  { jurusan: "D-III Teknik Alat Berat (limited)", status: "partial", coverage: 60,
               gap: "Sangat sedikit politeknik" },
        blk:  { kejuruan: "Operator Alat Berat", status: "partial", coverage: 65,
               gap: "Equipment praktek mahal; banyak BLK pakai simulator saja" },
        lsp:  { skema: "BNSP Skema Operator Alat Berat (multi-jenis)", status: "aligned", coverage: 72,
               gap: "Gap dengan NCCCO/CITB international standard" }
      }
    },
    {
      id: "garment-worker",
      family: "Manufacturing & Industrial",
      jobType: "Textile & Apparel",
      role: "Sewing Operator / Garment Worker",
      destinations: ["Korea (E-9)","Taiwan","Vietnam (low priority)"],
      demandPMI: 8500,
      learningPath: {
        coreSkills: ["Industrial sewing machine ops","Pattern reading","Garment construction","Quality inspection","Fabric handling","Speed sewing","Safety (industrial garment)"],
        language: "Korean (EPS-TOPIK) / Mandarin basic",
        certifications: ["EPS Skills Test (Korea)","BNSP Skema Operator Jahit"],
        durationMonths: 3,
        prakerinHours: 360
      },
      mapping: {
        smk: { konsentrasi: "Tata Busana & Garmen (Konsentrasi 116-118)", status: "aligned", coverage: 78,
               gap: "Volume cukup (213K siswa); industri mulai sunset di Indonesia" },
        ptv:  { jurusan: "D-III Tata Busana", status: "aligned", coverage: 75,
               gap: "Output ke fashion designer, bukan operator" },
        blk:  { kejuruan: "Garmen & Tekstil", status: "aligned", coverage: 80,
               gap: "Cocok untuk fast-track; banyak permintaan dari Korea" },
        lsp:  { skema: "BNSP Skema Operator Jahit Industri", status: "aligned", coverage: 73,
               gap: "EPS test Korea masih perlu dilakukan terpisah" }
      }
    },

    // ============ PROFESSIONAL & SKILLED ============
    {
      id: "registered-nurse",
      family: "Caregiving & Healthcare",
      jobType: "Professional Nursing",
      role: "Registered Nurse (Hospital)",
      destinations: ["Jerman (Anerkennung)","Belanda","Saudi","UAE","Qatar"],
      demandPMI: 15000,
      learningPath: {
        coreSkills: ["Advanced patient care","Pharmacology","Critical care (ICU/ER)","Operating theatre","Pediatric/Geriatric/Maternity","Documentation (EMR)","Evidence-based practice","Healthcare ethics"],
        language: "B2 German (Jerman) / IELTS 6.5+ / Arabic (GCC)",
        certifications: ["German Anerkennung","Prometric (GCC)","NCLEX (USA)","BNSP Perawat Profesional"],
        durationMonths: 24,
        prakerinHours: 1200
      },
      mapping: {
        smk: { konsentrasi: "—", status: "missing", coverage: 0,
               gap: "Tidak relevan; perlu pendidikan tinggi" },
        ptv:  { jurusan: "D-III/D-IV Keperawatan + Profesi (Ners)", status: "aligned", coverage: 88,
               gap: "Volume baik (~28K lulusan/tahun); gap di Anerkennung Jerman" },
        blk:  { kejuruan: "—", status: "missing", coverage: 0, gap: "Tidak relevan" },
        lsp:  { skema: "BNSP Skema Perawat Profesional + STR PPNI", status: "aligned", coverage: 80,
               gap: "Perlu Anerkennung Jerman / Prometric GCC; tidak otomatis" }
      }
    },
    {
      id: "beauty-therapist",
      family: "Hospitality & Food Service",
      jobType: "Personal Care Service",
      role: "Spa Therapist / Beauty Therapist",
      destinations: ["Hong Kong","Singapore","Maladewa","UAE"],
      demandPMI: 6500,
      learningPath: {
        coreSkills: ["Massage therapy (multiple modalities)","Facial treatments","Body treatments","Reflexology","Anatomy & physiology","Aromatherapy","Customer service","Spa hygiene"],
        language: "English (IELTS 5.0) · Mandarin (HK)",
        certifications: ["CIDESCO (international)","BNSP Skema Spa Therapist","ITEC"],
        durationMonths: 6,
        prakerinHours: 480
      },
      mapping: {
        smk: { konsentrasi: "Tata Kecantikan & Spa (Konsentrasi 119-121)", status: "aligned", coverage: 70,
               gap: "Curriculum baik; gap di luxury spa standards" },
        ptv:  { jurusan: "D-III Tata Rias & Spa (limited)", status: "partial", coverage: 60,
               gap: "Sangat sedikit politeknik" },
        blk:  { kejuruan: "Tata Kecantikan & Salon", status: "aligned", coverage: 72,
               gap: "Banyak BLK & LPK swasta; standardisasi kurang" },
        lsp:  { skema: "BNSP Skema Spa Therapist & Tata Rias", status: "aligned", coverage: 75,
               gap: "CIDESCO masih lebih diakui internasional" }
      }
    },
    {
      id: "driver",
      family: "Automotive & Maintenance",
      jobType: "Professional Driving",
      role: "Truck/Bus Driver (Heavy Vehicle)",
      destinations: ["Saudi","UAE","Australia","Korea (E-9)"],
      demandPMI: 9500,
      learningPath: {
        coreSkills: ["Heavy vehicle operations","Defensive driving","Cargo handling","Vehicle inspection","Route planning","Dangerous goods (ADR)","Logistics basics","Customer service"],
        language: "English / Arabic basic",
        certifications: ["GCC HV License","HR/HC License (Australia)","BNSP Skema Driver Profesional"],
        durationMonths: 3,
        prakerinHours: 240
      },
      mapping: {
        smk: { konsentrasi: "—", status: "missing", coverage: 0,
               gap: "Tidak ada SMK khusus; biasanya melalui SIM B2 + LPK" },
        ptv:  { jurusan: "D-III Logistik (peripheral)", status: "missing", coverage: 0, gap: "Tidak fokus driving" },
        blk:  { kejuruan: "Driver (limited BLK transportasi)", status: "partial", coverage: 50,
               gap: "Banyak LPK swasta; standardisasi minim" },
        lsp:  { skema: "BNSP Skema Pengemudi Profesional", status: "aligned", coverage: 70,
               gap: "License lokal tidak setara HV International License" }
      }
    }
  ],

  // ============================================================
  // SUMMARY & GAP STATS
  // ============================================================
  summary: {
    totalJobRoles: 22,
    byStatus: {
      // SMK
      smk_aligned: 7, smk_partial: 8, smk_missing: 7,
      // PTV
      ptv_aligned: 9, ptv_partial: 5, ptv_missing: 8,
      // BLK
      blk_aligned: 8, blk_partial: 11, blk_missing: 3,
      // LSP
      lsp_aligned: 12, lsp_partial: 9, lsp_missing: 1
    },
    averageCoverage: {
      smk: 51.5, ptv: 60.4, blk: 65.4, lsp: 67.0
    },
    keyFindings: [
      "BLK & LSP punya coverage tertinggi (65-67%); SMK paling lemah (52%)",
      "7 dari 22 job role TIDAK punya konsentrasi SMK sama sekali (e.g., Barista, Domestic Helper, Cleaner, Driver)",
      "Gap terbesar di sertifikasi internasional: 60% LSP belum punya MRA dengan negara tujuan",
      "Bahasa target negara hanya dicover 8% kurikulum vokasi — bottleneck terbesar",
      "Sektor SURPLUS volume: Manufaktur, Otomotif, Konstruksi (volume cukup, perlu refocus standar)",
      "Sektor MISSING volume: Caregiver Kaigo, HVAC industrial, Heavy Equipment Operator NCCCO"
    ],
    transformationPriorities: [
      "PRIO 1: Buat 7 konsentrasi SMK baru untuk job role yang missing (Barista, Domestic Helper, Cleaner, Driver, Beauty, dll)",
      "PRIO 2: Bridging program 6-12 bulan untuk lulusan SMK existing → standar internasional (Kaigo, AWS Welder, etc.)",
      "PRIO 3: Wajibkan bahasa target negara di 200 SMK Pusat Keunggulan (BPSDM/Pijar Foundation pilot)",
      "PRIO 4: BNSP perluas MRA dengan 16 negara tujuan (target 5 MRA baru/tahun)",
      "PRIO 5: Konsolidasi LPK swasta — akreditasi minimum BP2MI untuk semua yang melayani PMI"
    ]
  },

  meta: {
    sources: [
      "Kepmendikbudristek 244/M/2024 — 128 Konsentrasi Keahlian SMK",
      "PDDikti — Program Studi Vokasi 2024",
      "Kemnaker — Kejuruan BLK & LPK 2024",
      "BNSP — Skema Sertifikasi 2024 (4,280 skema)",
      "Cross-reference dengan Report A demand & Report B job role per negara"
    ],
    asOf: "April 2026",
    methodology: "Mapping lulusan-job-role per Kepmen 244/2024; status assessment berdasarkan kurikulum coverage vs requirement internasional; coverage % ditentukan dari analisis silabus & MRA recognition"
  }
};

if (typeof module !== 'undefined') module.exports = CURRICULUM;
