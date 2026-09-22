import { addMessage, inboxCount } from "@/lib/messages";
import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  city?: string;
  chapter?: string;
  message?: string;
  company?: string;
};

export function GET() {
  return NextResponse.json({ received: inboxCount() });
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  const chapter = body.chapter?.trim() || "Belum punya chapter";

  if (name.length < 2) {
    return NextResponse.json({ error: "Nama perlu diisi." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email belum benar." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Pesan terlalu pendek." }, { status: 400 });
  }

  const saved = addMessage({ name, email, city, chapter, message });
  return NextResponse.json({ ok: true, id: saved.id });
}
