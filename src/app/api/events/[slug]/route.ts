import { getEvent } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const event = getEvent(slug);
  if (!event) return NextResponse.json({ error: "Agenda tidak ditemukan." }, { status: 404 });
  return NextResponse.json({ event });
}
