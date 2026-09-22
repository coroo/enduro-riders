import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { color } from "@/theme/tokens";

export default function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <Box sx={{ borderBottom: `1px solid ${color.line}`, bgcolor: color.paper }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {kicker}
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 68 }, mt: 1, mb: 2 }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 560, fontSize: 18, lineHeight: 1.7 }}>
          {text}
        </Typography>
      </Container>
    </Box>
  );
}
