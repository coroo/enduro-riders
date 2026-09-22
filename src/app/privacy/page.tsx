import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Kebijakan Privasi" };

const sections = [
  {
    title: "Yang dikumpulkan",
    text: "Nama, email, kota, dan pesan yang kamu kirim lewat formulir. Saat aplikasi ride aktif nanti, catatan jalur dan kilometer ikut tersimpan atas nama akunmu.",
  },
  {
    title: "Pemakaian",
    text: "Data dipakai untuk membalas pesan, menyusun leaderboard, dan menjaga catatan chapter. Tidak dijual ke pihak lain.",
  },
  {
    title: "Penyimpanan",
    text: "Pesan formulir di versi situs ini tersimpan di memori server sementara dan hilang saat proses dimuat ulang. Ini belum basis data produksi.",
  },
  {
    title: "Hak kamu",
    text: "Kamu bisa minta koreksi atau penghapusan lewat halo@enduroriders.id. Sertakan email yang dipakai saat mengirim pesan.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Bantuan"
        title="Privasi"
        text="Ringkas dan terus terang: apa yang situs ini simpan, dan apa yang belum."
      />
      <Container sx={{ py: 5, display: "grid", gap: 3, maxWidth: 800 }}>
        {sections.map((section) => (
          <div key={section.title}>
            <Typography variant="h3" sx={{ fontSize: 28, mb: 1 }}>
              {section.title}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {section.text}
            </Typography>
          </div>
        ))}
      </Container>
    </>
  );
}
