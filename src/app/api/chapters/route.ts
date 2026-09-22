import { listChapters } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const groups = listChapters(searchParams.get("q") ?? undefined, searchParams.get("terrain") ?? undefined);
  return NextResponse.json({ groups });
}
