import Container from "@mui/material/Container";
import type { Metadata } from "next";
import ChapterExplorer from "@/components/ChapterExplorer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Chapter" };

export default function ChapterPage() {
  return (
    <>
      <PageHero
        kicker="Komunitas"
        title="Chapter"
        text="Cari grup menurut kota atau medan. Daftar ini dibaca dari API situs."
      />
      <Container sx={{ py: 5 }}>
        <ChapterExplorer />
      </Container>
    </>
  );
}
