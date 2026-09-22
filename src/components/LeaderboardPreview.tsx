"use client";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Plate from "@/components/Plate";
import RankList from "@/components/RankList";
import type { RiderRow, Scope } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { color } from "@/theme/tokens";

type Payload = { scope: Scope; updatedAt: string; rows: RiderRow[] };

export default function LeaderboardPreview({
  initialPersonal,
  initialUpdatedAt,
}: {
  initialPersonal: RiderRow[];
  initialUpdatedAt: string;
}) {
  const [scope, setScope] = useState<Scope>("personal");
  const [rows, setRows] = useState(initialPersonal.slice(0, 8));
  const [updatedAt, setUpdatedAt] = useState(initialUpdatedAt);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function changeScope(next: Scope) {
    if (next === scope) return;
    setScope(next);
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/leaderboard?scope=${next}`);
      if (!response.ok) throw new Error("fail");
      const data = (await response.json()) as Payload;
      setRows(data.rows.slice(0, 8));
      setUpdatedAt(data.updatedAt);
    } catch {
      setError("Papan tidak bisa dimuat. Coba lagi sebentar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Plate sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap", mb: 2 }}>
        <ToggleButtonGroup
          exclusive
          value={scope}
          onChange={(_event, value: Scope | null) => {
            if (value) void changeScope(value);
          }}
          sx={{
            "& .MuiToggleButton-root": {
              color: color.cream,
              borderColor: color.line,
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
              px: 2.5,
            },
            "& .Mui-selected": {
              bgcolor: `${color.red} !important`,
              color: "#fff !important",
            },
          }}
        >
          <ToggleButton value="personal">Personal</ToggleButton>
          <ToggleButton value="chapter">Chapter</ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="body2" color="text.secondary" sx={{ alignSelf: "center" }}>
          Diperbarui {formatDate(updatedAt)}
          {loading ? <CircularProgress size={14} sx={{ ml: 1, color: color.gold }} /> : null}
        </Typography>
      </Box>
      {error ? <Typography color="error">{error}</Typography> : <RankList rows={rows} />}
    </Plate>
  );
}
