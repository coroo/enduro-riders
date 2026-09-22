import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { RiderRow } from "@/lib/data";
import { formatKm } from "@/lib/format";
import { color } from "@/theme/tokens";

const medals = [color.gold, color.silver, "#c4845a"];

export default function RankList({ rows }: { rows: RiderRow[] }) {
  if (rows.length === 0) {
    return <Typography color="text.secondary">Belum ada nama di papan ini.</Typography>;
  }

  return (
    <Box>
      {rows.map((row) => (
        <Box
          key={`${row.rank}-${row.handle}`}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "42px 1fr", sm: "64px 1fr auto" },
            gap: { xs: 1.5, sm: 2 },
            alignItems: "center",
            py: 1.6,
            borderBottom: `1px solid ${color.line}`,
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-display)",
              fontSize: { xs: 26, sm: 32 },
              lineHeight: 1,
              color: medals[row.rank - 1] ?? color.mute,
            }}
          >
            {String(row.rank).padStart(2, "0")}
          </Typography>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700 }} noWrap>
              {row.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {row.handle} · {row.city}
            </Typography>
          </Box>
          <Typography
            sx={{
              gridColumn: { xs: "2", sm: "auto" },
              fontFamily: "var(--font-display)",
              letterSpacing: "0.04em",
              color: color.gold,
              fontSize: { xs: 16, sm: 20 },
            }}
          >
            {formatKm(row.km)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
