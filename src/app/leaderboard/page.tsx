import Container from "@mui/material/Container";
import type { Metadata } from "next";
import LeaderboardExplorer from "@/components/LeaderboardExplorer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Leaderboard" };

export default function LeaderboardPage() {
  return (
    <>
      <PageHero
        kicker="Papan"
        title="Leaderboard"
        text="Bandingkan kilometer pribadi atau total chapter. Data dibaca langsung dari API klub."
      />
      <Container sx={{ py: 5 }}>
        <LeaderboardExplorer />
      </Container>
    </>
  );
}
