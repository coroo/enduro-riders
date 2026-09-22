import Container from "@mui/material/Container";
import type { Metadata } from "next";
import EventExplorer from "@/components/EventExplorer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Agenda" };

export default function AgendaPage() {
  return (
    <>
      <PageHero
        kicker="Jadwal"
        title="Agenda"
        text="Ride yang diumumkan chapter. Saring menurut status slot. Datanya datang dari API."
      />
      <Container sx={{ py: 5 }}>
        <EventExplorer />
      </Container>
    </>
  );
}
