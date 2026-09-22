import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Plate from "@/components/Plate";
import { contributors } from "@/lib/data";
import { color } from "@/theme/tokens";

export const metadata: Metadata = { title: "Contributor" };

export default function ContributorPage() {
  return (
    <>
      <PageHero
        kicker="Juru peta"
        title="Contributor"
        text="Rider yang menambah jalur, catatan hujan, dan titik sungai. Tanpa mereka papan kilometer cuma angka."
      />
      <Container sx={{ py: 5, display: "grid", gap: 2 }}>
        {contributors.map((person, index) => (
          <Plate
            key={person.name}
            sx={{
              p: 2.5,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "80px 1.4fr 1fr 1fr" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "var(--font-display)", fontSize: 36, color: color.gold }}>
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Box>
              <Typography variant="h3" sx={{ fontSize: 28 }}>
                {person.name}
              </Typography>
              <Typography color="text.secondary">{person.city}</Typography>
            </Box>
            <Typography>
              {person.trails} jalur · {person.notes} catatan
            </Typography>
            <Typography sx={{ color: color.silver }}>{person.focus}</Typography>
          </Plate>
        ))}
      </Container>
    </>
  );
}
