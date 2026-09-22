import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import AppButton from "@/components/AppButton";
import PageHero from "@/components/PageHero";
import { color } from "@/theme/tokens";

export const metadata: Metadata = { title: "Download" };

const stores = [
  { name: "Google Play", note: "Android · segera hadir" },
  { name: "App Store", note: "iPhone · segera hadir" },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        kicker="Aplikasi"
        title="Download"
        text="Aplikasi mobile untuk merekam ride masih disiapkan. Sementara itu, leaderboard, chapter, quest, dan berita sudah hidup di web ini."
      />
      <Container sx={{ py: 6, display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
        {stores.map((store) => (
          <Box key={store.name} sx={{ border: `1px solid ${color.line}`, p: 3 }}>
            <Typography variant="overline" sx={{ color: color.gold }}>
              {store.note}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 40, my: 1 }}>
              {store.name}
            </Typography>
            <Typography color="text.secondary">
              Tombol unduh akan aktif saat build aplikasi naik. Tidak ada tautan palsu ke toko.
            </Typography>
          </Box>
        ))}
        <AppButton href="/leaderboard" variant="contained" sx={{ justifySelf: "start", mt: 1 }}>
          Buka leaderboard
        </AppButton>
      </Container>
    </>
  );
}
