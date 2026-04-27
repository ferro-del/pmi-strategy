# Strategi Penempatan PMI — Pekerja Vokasi Terampil 16 Negara

Dashboard interaktif & dokumen kebijakan untuk strategi penempatan Pekerja Migran Indonesia (PMI) skilled vocational worker di 16 negara tujuan strategis.

🌐 **Live**: https://pmi-strategy.vercel.app (setelah deploy)

## 📁 Struktur Website

| Path | Konten | Fokus |
|------|--------|-------|
| `/` | Landing page · KPI summary · 4 modul · download dokumen | Hub |
| `/visa` | **Report A** — Pemetaan 69+ jenis visa kerja di 16 negara | **Demand** |
| `/deep-dive` | **Report B** — Demand vs fulfillment per job role per negara | **Demand** |
| `/supply` | **Report C** — Pemetaan SMK/PTV/BLK/LSP + gap analysis | **Supply** |
| `/curriculum` | **Report D** — Learning path PMI vs kurikulum vokasi (matrix) | **Curriculum** |
| `/docs/*` | Sumber asli: Word, PowerPoint, PDF | Dokumen |

**Empat report disusun mengikuti logika analisis:**
1. Report A & B menjawab *"apa yang dibutuhkan dunia?"*
2. Report C & D menjawab *"apakah Indonesia siap suplai?"*

## 🚀 Deploy ke Vercel

### Opsi A — GitHub Auto-Deploy (Direkomendasikan)

1. **Buat repo baru di GitHub** dengan nama `pmi-strategy` (atau apa saja)
2. **Push kode**:
   ```bash
   cd pmi-strategy
   git remote add origin https://github.com/<USERNAME-ANDA>/pmi-strategy.git
   git push -u origin main
   ```
   *(git repo sudah di-init dengan commit history)*
3. **Connect ke Vercel**:
   - Login ke https://vercel.com (akun `ferro-del`)
   - **Add New... → Project**
   - Import GitHub repo `pmi-strategy`
   - Framework Preset: **Other** (auto-detected)
   - Klik **Deploy** (~30 detik)
4. Setiap `git push` ke `main` akan trigger auto-redeploy.

### Update Reports C & D ke deployment yang sudah ada

Kalau Vercel sudah connected ke repo, cukup:
```bash
git add .
git commit -m "Add Reports C & D: supply mapping + curriculum"
git push
```
Vercel akan auto-redeploy dalam ~30 detik.

### Opsi B — Vercel CLI

```bash
npm install -g vercel
cd pmi-strategy
vercel login
vercel --prod
```

## 🧱 Stack

- **HTML statis** + **Tailwind CSS** (CDN) + **Chart.js 4.4** (CDN)
- Tanpa build step, tanpa Node, tanpa framework
- Total bundle: ~225 KB HTML/CSS/JS + ~635 KB downloadable docs

## 📊 Sumber Data

**Demand-side (Report A & B)**: BP2MI · MOFA Jepang · MOEL Korea · MOL Taiwan · MOM Singapura · LD Hong Kong · MOHRE UAE · HRSD Saudi · Vision 2030 · BAMF Jerman · Home Affairs Australia · IRCC Kanada · Statista 2025

**Supply-side (Report C & D)**:
- Pusdatin Kemendikbud — Statistik SMK 2024/2025 (14.442 SMK · 5,08 jt siswa)
- Kepmendikbudristek 244/M/2024 — Spektrum 10 bidang · 50 program · 128 konsentrasi keahlian
- PDDikti Kemdiktisaintek — Politeknik & PT Vokasi (266 institusi · 904K mhs)
- Kemnaker Satudata — BLK & LPK (303 BLK + 4.800 BLKK + 17.850 LPK)
- BNSP Laporan Kinerja 2024 — 1.981 LSP · 1,37 jt asesi · 4.280 skema
- BPS Sakernas 2023, Susenas 2024

## 🛠 Edit & Customize

Static site — semua editable dengan editor teks biasa:
- **Brand styling**: `assets/shared.css`
- **Demand data**: inline `<script>` di `/visa/index.html` & `/deep-dive/index.html`
- **Supply data**: `assets/supply_data.js` (Report C)
- **Curriculum data**: `assets/curriculum_data.js` (Report D, 22 job role × 4 institusi)
- `git push` → auto-redeploy

## 📄 Dokumen Pendamping (di `/docs/`)

- `Report_A_Visa_Kerja_PMI.docx` — Pemetaan visa lengkap (Word, 49 KB)
- `Report_B_Country_Deep_Dive.docx` — Deep dive per negara (Word, 60 KB)
- `Presentasi_Strategi_PMI.pptx` — Slide deck 14 slide (PowerPoint, 331 KB)
- `Presentasi_Strategi_PMI.pdf` — Versi PDF presentasi (180 KB)

---

**Disusun untuk** Kementerian Pelindungan Pekerja Migran Indonesia (KemenP2MI/BP2MI) · Update April 2026
