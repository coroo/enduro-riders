import { NextResponse } from "next/server";

export const dynamic = "force-static";

const endpoints = [
  { method: "GET", path: "/api/stats", detail: "Angka chapter, rider, dan agenda" },
  { method: "GET", path: "/api/chapters?q=&terrain=", detail: "Daftar chapter" },
  { method: "GET", path: "/api/chapters/[slug]", detail: "Detail satu chapter" },
  { method: "GET", path: "/api/events?status=", detail: "Agenda ride" },
  { method: "GET", path: "/api/events/[slug]", detail: "Detail satu agenda" },
  { method: "GET", path: "/api/news?category=", detail: "Berita klub" },
  { method: "GET", path: "/api/news/[slug]", detail: "Isi satu berita" },
  { method: "POST", path: "/api/contact", detail: "Formulir gabung atau pesan" },
];

export function GET() {
  return NextResponse.json({ name: "Enduro Riders API", endpoints });
}
