"use client";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import Plate from "@/components/Plate";
import type { Chapter } from "@/lib/data";
import { formatCount, formatKm } from "@/lib/format";
import { color } from "@/theme/tokens";

const terrains = ["Semua", "Gunung", "Hutan", "Pantai", "Perkebunan"] as const;

export default function GroupsExplorer() {
  const [query, setQuery] = useState("");
  const [terrain, setTerrain] = useState<(typeof terrains)[number]>("Semua");
  const [groups, setGroups] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (terrain !== "Semua") params.set("terrain", terrain);
      setLoading(true);
      fetch(`/api/groups?${params.toString()}`, { signal: controller.signal })
        .then(async (response) => {
          if (!response.ok) throw new Error("fail");
          return (await response.json()) as { groups: Chapter[] };
        })
        .then((data) => setGroups(data.groups))
        .catch((reason: unknown) => {
          if (reason instanceof DOMException && reason.name === "AbortError") return;
          setError("Daftar chapter gagal dimuat.");
        })
        .finally(() => setLoading(false));
    }, 180);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [query, terrain]);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
        <TextField
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari kota atau chapter"
          size="small"
          sx={{ minWidth: 240, flex: 1 }}
        />
        {loading ? <CircularProgress size={22} sx={{ color: color.gold }} /> : null}
      </Box>
      <ToggleButtonGroup
        exclusive
        value={terrain}
        onChange={(_event, value: (typeof terrains)[number] | null) => {
          if (value) setTerrain(value);
        }}
        sx={{ flexWrap: "wrap" }}
      >
        {terrains.map((item) => (
          <ToggleButton key={item} value={item}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {error ? <Typography color="error">{error}</Typography> : null}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
        {groups.map((group) => (
          <Plate key={group.slug} sx={{ p: 2.5 }}>
            <Typography variant="overline" sx={{ color: color.gold }}>
              {group.terrain} · {group.province}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 32, my: 1 }}>
              <Box component={Link} href={`/groups/${group.slug}`} sx={{ "&:hover": { color: color.gold } }}>
                {group.name}
              </Box>
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, minHeight: 48 }}>
              {group.blurb}
            </Typography>
            <Typography sx={{ color: color.silver }}>
              {formatCount(group.members)} rider · {formatKm(group.km)}
            </Typography>
          </Plate>
        ))}
      </Box>
      {!loading && groups.length === 0 ? (
        <Typography color="text.secondary">Tidak ada chapter yang cocok dengan pencarian itu.</Typography>
      ) : null}
    </Box>
  );
}
