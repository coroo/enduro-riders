import { listQuests } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const difficulty = new URL(request.url).searchParams.get("difficulty") ?? undefined;
  return NextResponse.json({ quests: listQuests(difficulty) });
}
