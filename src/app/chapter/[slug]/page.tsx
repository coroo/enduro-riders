import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppButton from "@/components/AppButton";
import Plate from "@/components/Plate";
import { chapters, events, getChapter } from "@/lib/data";
import { formatCount, formatDate } from "@/lib/format";
import { color } from "@/theme/tokens";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return { title: chapter?.name ?? "Chapter" };
}

export default async function ChapterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  const upcoming = events.filter((item) => item.chapter === chapter.name && item.status !== "Selesai");

  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>
      <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {chapter.terrain} · {chapter.province}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 64 }, mt: 1 }}>
        {chapter.name}
      </Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 560, mt: 2, fontSize: 18 }}>
        {chapter.blurb}
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" }, gap: 2, mt: 4 }}>
        <Plate sx={{ p: 3 }}>
          <Typography sx={{ fontWeight: 800, mb: 1 }}>Ritme</Typography>
          <Typography sx={{ lineHeight: 1.7 }}>{chapter.rhythm}</Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>Titik kumpul: {chapter.meet}</Typography>
          <Typography color="text.secondary">Berdiri {formatDate(chapter.founded)}</Typography>
        </Plate>
        <Plate sx={{ p: 3 }}>
          <Typography variant="h2" sx={{ fontSize: 42 }}>{formatCount(chapter.members)}</Typography>
          <Typography color="text.secondary">rider</Typography>
          <Box sx={{ mt: 2 }}>
            {chapter.riders.map((rider) => (
              <Typography key={rider.name} sx={{ py: 0.4 }}>
                {rider.name} · {rider.role}
              </Typography>
            ))}
          </Box>
        </Plate>
      </Box>
      {upcoming.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" sx={{ fontSize: 28, mb: 2 }}>Agenda terbuka</Typography>
          {upcoming.map((item) => (
            <Typography key={item.slug} sx={{ py: 0.6 }}>
              {formatDate(item.date)} · {item.title}
            </Typography>
          ))}
        </Box>
      ) : null}
      <AppButton href="/kontak" variant="contained" sx={{ mt: 3 }}>
        Gabung chapter ini
      </AppButton>
    </Container>
  );
}
