import Container from "@mui/material/Container";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuestBoard from "@/components/QuestBoard";

export const metadata: Metadata = { title: "Quest" };

export default function QuestPage() {
  return (
    <>
      <PageHero
        kicker="Tantangan"
        title="Quest"
        text="Tantangan singkat supaya ride punya tujuan selain sampai. Saring tingkatnya — datanya diambil dari API."
      />
      <Container sx={{ py: 5 }}>
        <QuestBoard />
      </Container>
    </>
  );
}
