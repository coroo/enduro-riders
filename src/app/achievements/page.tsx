import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Plate from "@/components/Plate";
import { achievements } from "@/lib/data";
import { color } from "@/theme/tokens";

export const metadata: Metadata = { title: "Achievements" };

const tierColor = { Perunggu: "#c4845a", Perak: color.silver, Emas: color.gold };

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        kicker="Badge"
        title="Achievements"
        text="Tanda untuk ride yang selesai bareng chapter. Contoh di bawah memakai progres tamu, supaya bentuk papan badge-nya kelihatan."
      />
      <Container sx={{ py: 5, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }, gap: 2 }}>
        {achievements.map((badge) => (
          <Plate key={badge.id} sx={{ p: 2.5, opacity: badge.unlocked ? 1 : 0.62 }}>
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                border: `1px solid ${tierColor[badge.tier]}`,
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-display)",
                color: tierColor[badge.tier],
                mb: 2,
              }}
            >
              {badge.tier.slice(0, 1)}
            </Box>
            <Typography variant="overline" sx={{ color: tierColor[badge.tier] }}>
              {badge.tier} · {badge.unlocked ? "Terbuka" : "Terkunci"}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 26, my: 1 }}>
              {badge.name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {badge.detail}
            </Typography>
          </Plate>
        ))}
      </Container>
    </>
  );
}
