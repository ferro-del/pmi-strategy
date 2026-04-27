# Strategi Penempatan PMI — Dashboard Terpadu + Reports

Dashboard interaktif & dokumen kebijakan strategis untuk penempatan Pekerja Migran Indonesia (PMI) skilled vocational worker di 16 negara tujuan.

🌐 **Live**: https://pmi-strategy.vercel.app (setelah deploy)

## 📁 Struktur Website

| Path | Konten |
|------|--------|
| `/` | Landing hub + KPI summary + downloads |
| `/dashboard` | **🎯 Dashboard Terpadu** — 4 report dalam 1 tampilan dengan cross-tab links |
| `/visa` | Report A — Pemetaan visa di 16 negara (standalone) |
| `/deep-dive` | Report B — Demand vs fulfillment per negara (standalone) |
| `/supply` | Report C — Supply mapping + capacity + geo analysis (standalone) |
| `/curriculum` | Report D — Curriculum matrix + throughput (standalone) |
| `/docs/*` | Word, PDF, PowerPoint sumber asli |

## ✨ Dashboard Terpadu Features

- **5 tab interlinked**: Overview · Visa · Deep Dive · Supply · Kurikulum
- **Cross-navigasi kontekstual**: dari Visa → klik country → tombol "→ Demand di Deep Dive" otomatis switch tab + preselect
- **Drill-down detail**: klik job role → modal dengan core skills + lokasi pelatihan + throughput aktual
- **Capacity Analysis**: utilisasi PMI per pilar vs total throughput
- **Geo Analysis**: heatmap mismatch provinsi asal PMI vs kapasitas vokasi
- **Source footer per tab**: referensi data tertulis di setiap halaman

## 🚀 Deploy ke Vercel (3 langkah)

```bash
# 1. Extract & masuk folder
unzip pmi-strategy.zip && cd pmi-strategy

# 2. Push ke GitHub
git remote add origin https://github.com/<USERNAME>/pmi-strategy.git
git push -u origin main

# 3. Connect di vercel.com → Import → Deploy
```

Setiap `git push` berikutnya = auto-redeploy ~30 detik.

## 🧱 Stack

- **HTML statis** + **Tailwind CSS** (self-hosted, production-built, 21KB)
- **Chart.js 4.4** (CDN cdnjs.cloudflare.com)
- Tanpa build step pasca-deploy

## 📊 Sumber Data

- **Demand**: BP2MI 2024 · ISA Jepang · MOEL Korea · MOL Taiwan · MOM Singapura · LD Hong Kong · MOHRE UAE · HRSD Saudi · BAMF Jerman · Home Affairs Australia · IRCC Kanada · Decreto Flussi Italia · ILO/IOM
- **Supply**: Pusdatin Kemendikbud (Statistik SMK 2024/2025) · Kepmendikbudristek 244/M/2024 · PDDikti · Direktorat Vokasi Kemendikbud · BPS Sakernas 2023 · Kemnaker Satudata · BLKK Connect · Laporan BNSP 2024 · BP2MI Akreditasi LPK
- **Geo**: BP2MI Asal PMI 2024 · BPS Statistik Kependudukan

## 📄 Dokumen di `/docs/`

- 4 Reports DOCX (A/B/C/D)
- 2 Reports PDF (C/D siap-cetak)
- Presentasi PMI (PPTX + PDF, 14 slide)
- Dashboard standalone (HTML, satu file self-contained 215 KB)

---

**Disusun untuk** Kementerian Pelindungan Pekerja Migran Indonesia (KemenP2MI/BP2MI) · April 2026
