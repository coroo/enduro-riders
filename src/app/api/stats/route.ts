import { getStats } from "@/lib/data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(getStats());
}
