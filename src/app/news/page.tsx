import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TextLink from "@/components/TextLink";
import { stories } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { color } from "@/theme/tokens";

export const metadata: Metadata = { title: "News & Event" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Kabar"
        title="News & Event"
        text="Open trail, briefing musim hujan, dan kabar chapter. Pilih satu untuk baca selengkapnya."
      />
      <Container sx={{ py: 5, display: "grid", gap: 0 }}>
        {stories.map((story) => (
          <TextLink
            key={story.slug}
            href={`/news/${story.slug}`}
            sx={{
              py: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "180px 140px 1fr" },
              gap: 2,
              borderBottom: `1px solid ${color.line}`,
              "&:hover h2": { color: color.gold },
            }}
          >
            <Typography color="text.secondary">{formatDate(story.date)}</Typography>
            <Typography variant="overline" sx={{ color: color.gold }}>
              {story.category}
            </Typography>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 } }}>
                {story.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {story.excerpt}
              </Typography>
            </Box>
          </TextLink>
        ))}
      </Container>
    </>
  );
}
