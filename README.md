# Enduro Riders

Situs web komunitas enduro Indonesia: profil klub, direktori chapter, agenda ride, berita, dan formulir gabung.

**Preview (GitHub Pages):** [coroo.github.io/enduro-riders](https://coroo.github.io/enduro-riders/)

---

## Fitur

| Area | Halaman | Keterangan |
|------|---------|------------|
| Beranda | `/` | Ringkasan klub dan statistik |
| Chapter | `/chapter`, `/chapter/[slug]` | Direktori chapter per wilayah |
| Agenda | `/agenda`, `/agenda/[slug]` | Jadwal ride dan status pendaftaran |
| Berita | `/berita`, `/berita/[slug]` | Kabar, safety, dan update chapter |
| Tentang & kontak | `/tentang`, `/kontak` | Profil klub dan formulir pesan |
| Privasi | `/privacy` | Kebijakan privasi |

Data demo disimpan di `src/lib/data.ts`. Beberapa halaman memanggil REST API saat dijalankan dengan Next.js (mode dev/production Node).

---

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19 · TypeScript
- [MUI](https://mui.com/) (Material UI) + Emotion

---

## Prasyarat

- **Node.js** 20+
- **npm** (termasuk lockfile proyek)

---

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build production (server Node):

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

---

## API

Indeks endpoint: [http://localhost:3000/api](http://localhost:3000/api)

| Method | Path | Fungsi |
|--------|------|--------|
| `GET` | `/api/stats` | Angka chapter, rider, agenda |
| `GET` | `/api/chapters` | Daftar chapter (`?q=`, `?terrain=`) |
| `GET` | `/api/chapters/[slug]` | Detail satu chapter |
| `GET` | `/api/events` | Agenda ride (`?status=`) |
| `GET` | `/api/events/[slug]` | Detail satu agenda |
| `GET` | `/api/news` | Berita (`?category=`) |
| `GET` | `/api/news/[slug]` | Isi satu berita |
| `POST` | `/api/contact` | Formulir gabung / pesan |

> **Catatan:** Deploy GitHub Pages hanya mengunggah situs statis (`output: export`). Folder `src/app/api` sementara dipindahkan saat `build:gh-pages`, jadi API tidak tersedia di preview Pages—gunakan `npm run dev` atau host dengan Node (Vercel, dll.) jika butuh API.

---

## Struktur proyek (ringkas)

```
src/
├── app/              # Route halaman & API
├── components/       # UI bersama
└── lib/
    └── data.ts       # Sumber data demo
scripts/
└── build-gh-pages.mjs
.github/workflows/
└── deploy-github-pages.yml
```

Redirect lama (mis. `/groups` → `/chapter`, `/news` → `/berita`) ada di `next.config.ts` untuk mode non–GitHub Pages.

---

## Deploy GitHub Pages

1. Push ke repo [`coroo/enduro-riders`](https://github.com/coroo/enduro-riders) (branch `main`).
2. Di GitHub: **Settings → Pages → Build and deployment → Source** pilih **GitHub Actions**.
3. Workflow `.github/workflows/deploy-github-pages.yml` menjalankan `npm run build:gh-pages` dan menerbitkan folder `out`.

Build lokal (sama seperti CI):

```bash
npm run build:gh-pages
npx serve out
```

Buka situs dengan base path `/enduro-riders` (mis. `http://localhost:3000/enduro-riders` tergantung konfigurasi `serve`).

Variabel `GITHUB_PAGES=true` mengaktifkan `basePath` `/enduro-riders` di `next.config.ts`.

### Domain sendiri (nanti)

- Matikan `GITHUB_PAGES` / `basePath` di `next.config.ts`, lalu deploy ke host dengan Node, **atau**
- Tetap di GitHub Pages: tambahkan `public/CNAME` dan atur custom domain di repo settings.

---

## Lisensi

Proyek privat (`private: true` di `package.json`). Hak cipta dan penggunaan mengikuti kebijakan pemilik repositori.
