import { getLeaderboard, type Scope } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const scopeParam = new URL(request.url).searchParams.get("scope");
  const scope: Scope = scopeParam === "chapter" ? "chapter" : "personal";
  return NextResponse.json(getLeaderboard(scope));
}
