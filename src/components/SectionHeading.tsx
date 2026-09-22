import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { color } from "@/theme/tokens";

export default function SectionHeading({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <Box sx={{ maxWidth: 680, mb: { xs: 4, md: 5 } }}>
      <Typography variant="overline" sx={{ color: color.gold }}>
        {kicker}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 42, md: 68 }, mt: 1, mb: text ? 2 : 0 }}>
        {title}
      </Typography>
      {text ? (
        <Typography color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.65, maxWidth: 560 }}>
          {text}
        </Typography>
      ) : null}
    </Box>
  );
}
