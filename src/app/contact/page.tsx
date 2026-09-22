import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { chapters } from "@/lib/data";

export const metadata: Metadata = { title: "Hubungi Kami" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Bantuan"
        title="Hubungi kami"
        text="Tanya titik kumpul, gabung chapter, atau kirim koreksi jalur. Pesan masuk lewat API klub."
      />
      <Container sx={{ py: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.7fr 1.3fr" }, gap: 4 }}>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          Email klub: halo@enduroriders.id. Sebut kota dan jenis motor supaya balasan tidak umum.
        </Typography>
        <ContactForm chapters={chapters.map((chapter) => chapter.name)} />
      </Container>
    </>
  );
}
