import { getStory, stories } from "@/lib/data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const story = getStory(slug);
  if (!story) {
    return NextResponse.json({ error: "Berita tidak ditemukan." }, { status: 404 });
  }
  return NextResponse.json({ story });
}
