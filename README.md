# Strategi Penempatan PMI — Dashboard Terpadu + Reports

Dashboard interaktif & dokumen kebijakan strategis untuk penempatan Pekerja Migran Indonesia (PMI) skilled vocational worker di 16 negara tujuan.

🌐 **Live**: https://pmi-strategy.vercel.app (setelah deploy)

## 📁 Struktur Website

| Path | Konten |
|------|--------|
| `/` | Landing hub + KPI summary + downloads |
| `/dashboard` | **🎯 Dashboard Terpadu** — 6 tab terhubung |
| `/visa` | Report A — Pemetaan visa di 16 negara (standalone) |
| `/deep-dive` | Report B — Demand vs fulfillment per negara (standalone) |
| `/supply` | Report C — Supply mapping + capacity + geo analysis (standalone) |
| `/curriculum` | Report D — Curriculum matrix + throughput (standalone) |
| `/docs/*` | Word, PDF, PowerPoint sumber asli |

## ✨ Dashboard Terpadu — 6 Tab

1. **📊 Overview** — Logic flow + 3-tier strategy + cross-report charts
2. **🗺️ Pemetaan Visa (A)** — 16 country cards + filter region/search + visa drill-down modal
3. **🌐 Deep Dive Negara (B)** — Demand vs fulfillment per job role + competitive landscape
4. **🏫 Supply Mapping (C)** — 4 pilar (SMK/PTV/BLK/LSP) + Capacity Analysis + Geo Analysis + Verdict
5. **⚖️ Supply-Demand Analysis (SDA) — NEW** — Matrix Kompetensi · Geo Bubble Chart · Crosswalk · Top deficit/surplus
6. **📚 Kurikulum (D)** — 22 job role × 4 institusi matrix + drill-down dengan throughput

## 🎯 SDA Tab — Section Detail

- **Section 1 — Matrix Kompetensi**: Untuk setiap job role × negara, sel SMK/PTV/BLK menampilkan jumlah instansi siap vs belum siap (estimasi dari coverage% × derived institution count)
- **Section 2 — Geo Bubble Chart**: Bubble per provinsi dengan x=PMI/tahun, y=kapasitas vokasi, ukuran=magnitude gap, warna=status (surplus/pas/defisit), filter by SMK/PTV/BLK/All
- **Section 3 — Supply-Demand Crosswalk**: Horizontal bar comparison demand × supply × cert per family
- **Section 4 — Top 5 Deficit & Surplus**: Job roles paling kritis & paling siap, klik untuk drill-down

## 🔗 Cross-Tab Linking

Setiap modal punya tombol cross-link kontekstual. Contoh:
- Klik country di Visa → modal → "→ Demand di Deep Dive" otomatis switch + preselect Jepang
- Klik job role di Curriculum → modal → "→ Demand di Jepang" / "→ Lihat detail SMK"
- Tab SDA matrix klik row → otomatis buka modal D2 dengan throughput breakdown

## 📎 Footer & Sources

- **Per-graph caption**: setiap chart punya footer dengan **Sumber data** + **💡 Action recommendation**
- **Per-page footer**: setiap tab punya footer komprehensif dengan list sumber data + tombol download dokumen mentah (DOCX/PDF/HTML)

## 🚀 Deploy ke Vercel (3 langkah)

```bash
unzip pmi-strategy.zip && cd pmi-strategy
git remote add origin https://github.com/<USERNAME>/pmi-strategy.git
git push -u origin main
# → Connect di vercel.com → Import → Deploy
```

Setiap `git push` berikutnya = auto-redeploy ~30 detik.

## 🧱 Stack

- **HTML statis** + **Tailwind CSS** (self-hosted, production-built, 21KB)
- **Chart.js 4.4** via cdnjs (bubble, bar, doughnut)
- Tanpa build step pasca-deploy

## 📊 Sumber Data Lengkap

**Demand**:
BP2MI Penempatan PMI 2024 · ISA Jepang · MOEL Korea · MOL Taiwan · MOM Singapura · LD Hong Kong · MOHRE UAE · HRSD Saudi · BAMF Jerman · Home Affairs Australia · IRCC Kanada · Decreto Flussi Italia · ILO Migration Statistics 2024 · IOM Asia-Pacific Migration Report 2024

**Supply**:
Pusdatin Kemendikbud Statistik SMK 2024/2025 (14.442 SMK) · Kepmendikbudristek 244/M/2024 (128 konsentrasi) · PDDikti Kemdiktisaintek 2024 (266 PT Vokasi) · Direktorat Vokasi · BPS Sakernas 2023 · Kemnaker Satudata Sem I 2024 · BLKK Connect (4.800 BLKK) · Laporan Kinerja BNSP 2024 (1.981 LSP, 1,37 jt asesi) · BP2MI Akreditasi LPK

**Geo**:
BP2MI Penempatan per Provinsi 2024 · BPS Statistik Kependudukan · Provincial Education Office Reports

## 📄 Dokumen di `/docs/`

- 4 Reports DOCX (A/B/C/D)
- 2 Reports PDF (C/D siap-cetak)
- Presentasi PMI (PPTX + PDF, 14 slide)
- Dashboard standalone (HTML, 251 KB self-contained)

---

**Disusun untuk** Kementerian Pelindungan Pekerja Migran Indonesia (KemenP2MI/BP2MI) · April 2026 · Pijar Foundation
