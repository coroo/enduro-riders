import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import AppButton from "@/components/AppButton";
import PageHero from "@/components/PageHero";
import Plate from "@/components/Plate";
import { steps } from "@/lib/data";

export const metadata: Metadata = { title: "Tentang" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Klub"
        title="Tentang Enduro Riders"
        text="Klub pengendara enduro di Indonesia. Di Enduro Riders kamu menemukan chapter, membaca agenda, dan mendaftar ride."
      />
      <Container sx={{ py: { xs: 6, md: 8 }, display: "grid", gap: 2 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          {steps.map((step) => (
            <Plate key={step.title} sx={{ p: 3 }}>
              <Typography variant="h3" sx={{ fontSize: 24, mb: 1 }}>{step.title}</Typography>
              <Typography color="text.secondary">{step.text}</Typography>
            </Plate>
          ))}
        </Box>
        <Plate sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="h3" sx={{ fontSize: 28, mb: 1 }}>Cara kerjanya</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, lineHeight: 1.7 }}>
            Road captain tiap chapter mengumumkan titik kumpul di agenda. Rider yang ingin ikut mengirim formulir. Tidak ada perekaman perjalanan, papan kilometer, atau badge. Yang ada adalah informasi yang cukup untuk datang dan pulang bareng.
          </Typography>
          <AppButton href="/kontak" variant="contained" sx={{ mt: 3 }}>
            Gabung
          </AppButton>
        </Plate>
      </Container>
    </>
  );
}
