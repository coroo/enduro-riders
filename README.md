# Enduro Riders

Enduro Riders adalah komunitas enduro: profil klub, direktori chapter, agenda ride, berita, dan formulir gabung.

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Deploy GitHub Pages (sementara)

Preview: [https://coroo.github.io/enduro-riders/](https://coroo.github.io/enduro-riders/)

1. Push ke repo `coroo/enduro-riders` (branch `main`).
2. Di GitHub: **Settings → Pages → Build and deployment → Source** pilih **GitHub Actions**.
3. Workflow `.github/workflows/deploy-github-pages.yml` akan menjalankan `npm run build:gh-pages` dan mengunggah folder `out`.

Build lokal (sama seperti CI):

```bash
npm run build:gh-pages
```

Preview statis: `npx serve out` lalu buka dengan base path `/enduro-riders`.

**Domain sendiri nanti:** matikan `GITHUB_PAGES` / `basePath` di `next.config.ts`, deploy ke host dengan Node (Vercel, dll.), atau tetap GitHub Pages dengan file `public/CNAME` dan custom domain di repo settings.

## API

Daftar endpoint: [http://localhost:3000/api](http://localhost:3000/api). Halaman chapter, agenda, dan formulir gabung memakai route tersebut. Sumber data: `src/lib/data.ts`.
