import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppButton from "@/components/AppButton";
import Plate from "@/components/Plate";
import { chapters, getChapter } from "@/lib/data";
import { formatCount, formatDate, formatKm } from "@/lib/format";
import { color } from "@/theme/tokens";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return { title: chapter?.name ?? "Chapter" };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>
      <Typography variant="overline" sx={{ color: color.gold }}>
        {chapter.terrain} · {chapter.province}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 48, md: 76 }, mt: 1 }}>
        {chapter.name}
      </Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 560, mt: 2, fontSize: 18 }}>
        {chapter.blurb}
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" }, gap: 2, mt: 4 }}>
        <Plate sx={{ p: 3 }}>
          <Typography variant="overline" sx={{ color: color.gold }}>
            Ritme
          </Typography>
          <Typography sx={{ my: 1.5, lineHeight: 1.7 }}>{chapter.rhythm}</Typography>
          <Typography color="text.secondary">Titik kumpul: {chapter.meet}</Typography>
          <Typography color="text.secondary">Berdiri {formatDate(chapter.founded)}</Typography>
        </Plate>
        <Plate sx={{ p: 3 }}>
          <Typography variant="h2" sx={{ fontSize: 48 }}>
            {formatKm(chapter.km)}
          </Typography>
          <Typography color="text.secondary">{formatCount(chapter.members)} rider tercatat</Typography>
          <Box sx={{ mt: 2 }}>
            {chapter.riders.map((rider) => (
              <Typography key={rider.name} sx={{ py: 0.5 }}>
                {rider.name} · <Box component="span" sx={{ color: color.gold }}>{rider.role}</Box>
              </Typography>
            ))}
          </Box>
        </Plate>
      </Box>
      <AppButton href="/groups" sx={{ mt: 3, color: color.gold }}>
        Kembali ke groups
      </AppButton>
    </Container>
  );
}
