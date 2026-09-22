import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppButton from "@/components/AppButton";
import { events, getEvent } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { color } from "@/theme/tokens";

export function generateStaticParams() {
  return events.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  return { title: event?.title ?? "Agenda" };
}

export default async function AgendaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <Container sx={{ py: { xs: 5, md: 8 }, maxWidth: 820 }}>
      <Typography sx={{ color: color.red, fontWeight: 800 }}>
        {event.status} · {formatDate(event.date)} · {event.time}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 }, mt: 1, mb: 2 }}>
        {event.title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {event.place}, {event.city} · {event.chapter}
      </Typography>
      <Box sx={{ display: "grid", gap: 2 }}>
        {event.body.map((paragraph) => (
          <Typography key={paragraph} sx={{ fontSize: 18, lineHeight: 1.75 }}>
            {paragraph}
          </Typography>
        ))}
      </Box>
      {event.status !== "Selesai" ? (
        <AppButton href="/kontak" variant="contained" sx={{ mt: 4 }}>
          Daftar ikut
        </AppButton>
      ) : (
        <AppButton href="/agenda" sx={{ mt: 4, color: color.red }}>
          Agenda lain
        </AppButton>
      )}
    </Container>
  );
}
