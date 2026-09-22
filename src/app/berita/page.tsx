import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TextLink from "@/components/TextLink";
import { stories } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { color, storyPhoto } from "@/theme/tokens";

export const metadata: Metadata = { title: "Berita" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Kabar"
        title="Berita"
        text="Pengumuman klub, catatan keselamatan, dan kabar chapter."
      />
      <Container sx={{ py: 5 }}>
        {stories.map((story) => (
          <TextLink
            key={story.slug}
            href={`/berita/${story.slug}`}
            sx={{
              py: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "160px 1fr" },
              gap: 2,
              borderBottom: `1px solid ${color.line}`,
              "&:hover h2": { color: color.red },
            }}
          >
            <Box component="img" src={storyPhoto[story.slug]} alt="" sx={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 2 }} />
            <Box>
              <Typography variant="body2" color="text.secondary">{formatDate(story.date)} · {story.category}</Typography>
              <Typography variant="h3" sx={{ fontSize: 24, my: 0.5 }}>{story.title}</Typography>
              <Typography color="text.secondary">{story.excerpt}</Typography>
            </Box>
          </TextLink>
        ))}
      </Container>
    </>
  );
}
