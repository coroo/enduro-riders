import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { chapters } from "@/lib/data";

export const metadata: Metadata = { title: "Gabung" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Daftar"
        title="Gabung"
        text="Kirim nama, kota, dan chapter yang ingin kamu ikuti. Pesan masuk lewat API situs, lalu dibalas lewat email."
      />
      <Container sx={{ py: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.7fr 1.3fr" }, gap: 4 }}>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          Email klub: halo@enduroriders.id. Sebut jenis motor supaya balasan chapter tidak umum.
        </Typography>
        <ContactForm chapters={chapters.map((chapter) => chapter.name)} />
      </Container>
    </>
  );
}
