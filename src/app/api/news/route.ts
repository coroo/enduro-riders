import { listStories } from "@/lib/data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET(request: Request) {
  const category = new URL(request.url).searchParams.get("category") ?? undefined;
  return NextResponse.json({ stories: listStories(category) });
}
