# Strategi Penempatan PMI — Pekerja Vokasi Terampil 16 Negara

Dashboard interaktif & dokumen kebijakan untuk strategi penempatan Pekerja Migran Indonesia (PMI) skilled vocational worker di 16 negara tujuan strategis.

🌐 **Live**: https://pmi-strategy.vercel.app (setelah deploy)

## 📁 Struktur Website

| Path | Konten |
|------|--------|
| `/` | Landing page · KPI summary · navigasi modul · download dokumen |
| `/visa` | **Report A** — Pemetaan 69+ jenis visa kerja di 16 negara |
| `/deep-dive` | **Report B** — Demand vs fulfillment analysis per negara per job role |
| `/docs/*` | Sumber asli: Word, PowerPoint, PDF |

## 🚀 Deploy ke Vercel

### Opsi A — GitHub Auto-Deploy (Direkomendasikan)

1. **Buat repo baru di GitHub** dengan nama `pmi-strategy` (atau apa saja)
2. **Push kode ini**:
   ```bash
   cd pmi-strategy
   git init
   git add .
   git commit -m "Initial commit: PMI strategy dashboard"
   git branch -M main
   git remote add origin https://github.com/<USERNAME-ANDA>/pmi-strategy.git
   git push -u origin main
   ```
3. **Connect ke Vercel**:
   - Login ke https://vercel.com (akun `ferro-del`)
   - Klik **"Add New..." → Project**
   - Import GitHub repo `pmi-strategy`
   - Framework Preset: **Other** (auto-detected sebagai static)
   - Klik **Deploy**
4. Vercel akan deploy otomatis. Setiap `git push` ke `main` akan trigger redeploy.

URL akan menjadi: `https://pmi-strategy.vercel.app` (atau `pmi-strategy-ferro-del.vercel.app` jika nama collide).

### Opsi B — Vercel CLI (Tanpa GitHub)

```bash
npm install -g vercel
cd pmi-strategy
vercel login            # login akun ferro-del
vercel --prod           # deploy ke production
```

### Opsi C — Drag & Drop

Zip folder `pmi-strategy/` lalu drag ke https://vercel.com/new (klik area "Deploy"). Catatan: opsi ini tidak include auto-redeploy.

## 🧱 Stack

- **HTML statis** + **Tailwind CSS** (CDN) + **Chart.js 4.4** (CDN)
- Tanpa build step, tanpa Node, tanpa framework
- Total bundle: ~150 KB HTML/CSS + ~635 KB downloadable docs

## 🛠 Edit & Customize

Karena ini static site:
- Edit langsung file `.html` apa pun
- Brand styling terpusat di `assets/shared.css`
- Update data di tag `<script>` inline tiap halaman
- `git push` akan auto-redeploy

## 📊 Sumber Data

BP2MI · MOFA Jepang · MOEL Korea · MOL Taiwan · MOM Singapura · LD Hong Kong · MOHRE UAE · HRSD Saudi · Vision 2030 · BAMF Jerman · Home Affairs Australia · IRCC Kanada · CNBC Indonesia · Reuters · Statista 2025

## 📄 Dokumen Pendamping (di `/docs/`)

- `Report_A_Visa_Kerja_PMI.docx` — Pemetaan visa lengkap (Word)
- `Report_B_Country_Deep_Dive.docx` — Deep dive per negara (Word)
- `Presentasi_Strategi_PMI.pptx` — Slide deck 14 slide (PowerPoint, Patrick Winston framework)
- `Presentasi_Strategi_PMI.pdf` — Versi PDF presentasi

---

**Disusun untuk** Kementerian Pelindungan Pekerja Migran Indonesia (KemenP2MI/BP2MI) · Update April 2026
