import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppButton from "@/components/AppButton";
import { getStory, stories } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { color } from "@/theme/tokens";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  return { title: story?.title ?? "Berita" };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <Container sx={{ py: { xs: 5, md: 8 }, maxWidth: 820 }}>
      <Typography sx={{ color: color.red, fontWeight: 800 }}>
        {story.category} · {formatDate(story.date)}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 }, mt: 1, mb: 3 }}>
        {story.title}
      </Typography>
      <Box sx={{ display: "grid", gap: 2 }}>
        {story.body.map((paragraph) => (
          <Typography key={paragraph} sx={{ fontSize: 18, lineHeight: 1.75 }}>
            {paragraph}
          </Typography>
        ))}
      </Box>
      <AppButton href="/berita" sx={{ mt: 4, color: color.red }}>
        Semua berita
      </AppButton>
    </Container>
  );
}
