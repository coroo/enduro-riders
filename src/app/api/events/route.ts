import { listEvents } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const status = new URL(request.url).searchParams.get("status") ?? undefined;
  return NextResponse.json({ events: listEvents(status) });
}
