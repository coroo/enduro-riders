"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import Plate from "@/components/Plate";
import RankList from "@/components/RankList";
import type { RiderRow, Scope } from "@/lib/data";
import { color } from "@/theme/tokens";

type Payload = { rows: RiderRow[] };

export default function LeaderboardExplorer() {
  const [scope, setScope] = useState<Scope>("personal");
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<RiderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/leaderboard?scope=${scope}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("fail");
        return (await response.json()) as Payload;
      })
      .then((data) => setRows(data.rows))
      .catch((reason: unknown) => {
        if (reason instanceof DOMException && reason.name === "AbortError") return;
        setError("Papan leaderboard gagal dimuat.");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [scope]);

  const needle = query.trim().toLowerCase();
  const visible = rows.filter((row) => {
    if (!needle) return true;
    return `${row.name} ${row.handle} ${row.city}`.toLowerCase().includes(needle);
  });

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
        <ToggleButtonGroup
          exclusive
          value={scope}
          onChange={(_event, value: Scope | null) => {
            if (!value || value === scope) return;
            setScope(value);
            setLoading(true);
            setError("");
          }}
        >
          <ToggleButton value="personal">Personal</ToggleButton>
          <ToggleButton value="chapter">Chapter</ToggleButton>
        </ToggleButtonGroup>
        <TextField
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari nama atau kota"
          size="small"
          sx={{ minWidth: 240, flex: 1 }}
        />
        {loading ? <CircularProgress size={22} sx={{ color: color.gold }} /> : null}
      </Box>
      <Plate sx={{ px: { xs: 2, md: 3 }, py: 1 }}>
        {error ? (
          <Typography sx={{ py: 3 }} color="error">
            {error}
          </Typography>
        ) : (
          <RankList rows={visible} />
        )}
      </Plate>
      <Button component={Link} href="/groups" variant="outlined" sx={{ justifySelf: "start" }}>
        Lihat chapter
      </Button>
    </Box>
  );
}
