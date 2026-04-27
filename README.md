# Dashboard Vokasi Indonesia: Demand, Supply, dan Kurikulum

Dashboard interaktif & dokumen analitis tentang pemetaan vokasi Indonesia untuk penempatan pekerja migran terampil di 16 negara tujuan.

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
3. **🌐 Deep Dive Negara (B)** — Demand vs fulfillment per job role · **klik baris** untuk modal kontekstual gabungan demand + learning path + throughput
4. **🏫 Supply Mapping (C)** — 4 pilar (SMK/PTV/BLK/LSP) + Capacity Analysis + Geo Analysis + Verdict
5. **⚖️ Supply-Demand Analysis (SDA)** — Matrix Kompetensi · Geo Bubble Chart · Crosswalk · Top deficit/surplus
6. **📚 Kurikulum (D)** — 22 job role × 4 institusi matrix + drill-down dengan throughput

## 🛠 Fitur Interaktif

- **47 tooltip ⓘ icons** — hover/klik untuk definisi data dan formula perhitungan
- **Cross-tab linking** — context-aware navigation antar 6 tab
- **Drill-down modals** — country detail · job role × country · job role full curriculum
- **Lazy chart init** — Chart.js per-tab untuk performance
- **Per-graph captions** — sumber data + 💡 action recommendation per chart
- **Per-page footers** — sumber data + tombol download dokumen mentah

## 🚀 Deploy ke Vercel (3 langkah)

```bash
unzip "Dashboard Vokasi Indonesia.zip" && cd pmi-strategy
git remote add origin https://github.com/<USERNAME>/pmi-strategy.git
git push -u origin main
# → Connect di vercel.com → Import → Deploy
```

Setiap `git push` berikutnya = auto-redeploy ~30 detik.

## 🧱 Stack

- **HTML statis** + **Tailwind CSS** (self-hosted, production-built, 21 KB)
- **Chart.js 4.4** via cdnjs (bubble, bar, doughnut)
- Tanpa build step pasca-deploy

## 📊 Sumber Data

**Demand**:
BP2MI Penempatan PMI 2024 · ISA Jepang · MOEL Korea · MOL Taiwan · MOM Singapura · LD Hong Kong · MOHRE UAE · HRSD Saudi · BAMF Jerman · Home Affairs Australia · IRCC Kanada · Decreto Flussi Italia · ILO Migration Statistics 2024 · IOM Asia-Pacific Migration Report 2024

**Supply**:
Pusdatin Kemendikbud Statistik SMK 2024/2025 (14.442 SMK) · Kepmendikbudristek 244/M/2024 (128 konsentrasi) · PDDikti Kemdiktisaintek 2024 (266 PT Vokasi) · Direktorat Vokasi · BPS Sakernas 2023 · Kemnaker Satudata Sem I 2024 · BLKK Connect (4.800 BLKK) · Laporan Kinerja BNSP 2024 (1.981 LSP, 1,37 jt asesi)

**Geo**:
BP2MI Penempatan per Provinsi 2024 · BPS Statistik Kependudukan · Provincial Education Office Reports

## 📄 Dokumen di `/docs/`

- 4 Reports DOCX (A/B/C/D)
- 2 Reports PDF (C/D siap-cetak)
- Presentasi (PPTX + PDF, 14 slide)
- Dashboard standalone (HTML, ~280 KB self-contained)

---

**Disusun untuk** Kementerian Koordinator Pembangunan Manusia & Kebudayaan RI · April 2026
