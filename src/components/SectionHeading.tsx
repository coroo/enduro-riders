import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { color } from "@/theme/tokens";

export default function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <Box sx={{ maxWidth: 640, mb: { xs: 3, md: 5 } }}>
      <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {kicker}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 }, mt: 1, mb: text ? 1.5 : 0 }}>
        {title}
      </Typography>
      {text ? (
        <Typography color="text.secondary" sx={{ fontSize: 17, lineHeight: 1.7 }}>
          {text}
        </Typography>
      ) : null}
    </Box>
  );
}
