import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { color } from "@/theme/tokens";

export default function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${color.line}`,
        background: "radial-gradient(ellipse 50% 80% at 0% 0%, rgba(226,59,44,0.16), transparent 60%)",
      }}
    >
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="overline" sx={{ color: color.gold }}>
          {kicker}
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: 52, md: 84 }, mt: 1, mb: 2 }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 560, fontSize: 18, lineHeight: 1.65 }}>
          {text}
        </Typography>
      </Container>
    </Box>
  );
}
