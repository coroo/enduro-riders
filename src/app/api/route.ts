import { NextResponse } from "next/server";

const endpoints = [
  { method: "GET", path: "/api/stats", detail: "Angka riders, chapter, kilometer, dan jalur" },
  { method: "GET", path: "/api/leaderboard?scope=personal|chapter", detail: "Papan kilometer pribadi atau chapter" },
  { method: "GET", path: "/api/groups?q=&terrain=", detail: "Daftar chapter" },
  { method: "GET", path: "/api/groups/[slug]", detail: "Detail satu chapter" },
  { method: "GET", path: "/api/news?category=", detail: "Kabar dan event" },
  { method: "GET", path: "/api/news/[slug]", detail: "Isi satu berita" },
  { method: "GET", path: "/api/achievements", detail: "Badge klub" },
  { method: "GET", path: "/api/quests?difficulty=", detail: "Quest yang sedang berjalan" },
  { method: "GET", path: "/api/partners", detail: "Bengkel, perlengkapan, dan pos istirahat" },
  { method: "GET", path: "/api/contributors", detail: "Rider yang memetakan jalur" },
  { method: "GET", path: "/api/testimonials", detail: "Cerita dari komunitas" },
  { method: "POST", path: "/api/contact", detail: "Kirim pesan ke klub" },
];

export function GET() {
  return NextResponse.json({
    name: "Enduro Riders API",
    endpoints,
  });
}
