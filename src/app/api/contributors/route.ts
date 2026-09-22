import { contributors } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ contributors });
}
