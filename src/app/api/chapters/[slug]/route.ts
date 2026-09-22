import { getChapter } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const group = getChapter(slug);
  if (!group) return NextResponse.json({ error: "Chapter tidak ditemukan." }, { status: 404 });
  return NextResponse.json({ group });
}
