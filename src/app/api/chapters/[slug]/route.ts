import { chapters, getChapter } from "@/lib/data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const group = getChapter(slug);
  if (!group) return NextResponse.json({ error: "Chapter tidak ditemukan." }, { status: 404 });
  return NextResponse.json({ group });
}
