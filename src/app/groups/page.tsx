import Container from "@mui/material/Container";
import type { Metadata } from "next";
import GroupsExplorer from "@/components/GroupsExplorer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Groups" };

export default function GroupsPage() {
  return (
    <>
      <PageHero
        kicker="Chapter"
        title="Groups"
        text="Cari chapter menurut kota atau medan. Daftar ini datang dari API, jadi pencarian dan saringan medan ikut terasa."
      />
      <Container sx={{ py: 5 }}>
        <GroupsExplorer />
      </Container>
    </>
  );
}
