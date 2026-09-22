import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Plate from "@/components/Plate";
import { partners } from "@/lib/data";
import { color } from "@/theme/tokens";

export const metadata: Metadata = { title: "Partner" };

export default function PartnerPage() {
  return (
    <>
      <PageHero
        kicker="Rekan jalan"
        title="Partner"
        text="Bengkel, ban, pos kopi, dan derek yang sudah kenal ritme chapter. Nama di sini fiktif, untuk bentuk halamannya."
      />
      <Container sx={{ py: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
        {partners.map((partner) => (
          <Plate key={partner.name} sx={{ p: 3 }}>
            <Typography variant="overline" sx={{ color: color.gold }}>
              {partner.kind} · {partner.city}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 32, my: 1 }}>
              {partner.name}
            </Typography>
            <Typography color="text.secondary">{partner.offer}</Typography>
            <Box sx={{ mt: 2, height: 3, width: 48, bgcolor: color.red }} />
          </Plate>
        ))}
      </Container>
    </>
  );
}
