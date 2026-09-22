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
import { formatCount } from "@/lib/format";
import { chapterPhoto, color } from "@/theme/tokens";

const terrains = ["Semua", "Gunung", "Hutan", "Pantai", "Perkebunan"] as const;

export default function ChapterExplorer() {
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
      fetch(`/api/chapters?${params.toString()}`, { signal: controller.signal })
        .then(async (response) => {
          if (!response.ok) throw new Error("fail");
          return (await response.json()) as { groups: Chapter[] };
        })
        .then((data) => {
          setGroups(data.groups);
          setError("");
        })
        .catch((reason: unknown) => {
          if (reason instanceof DOMException && reason.name === "AbortError") return;
          setError("Daftar chapter gagal dimuat.");
        })
        .finally(() => setLoading(false));
    }, 160);
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
          onChange={(event) => {
            setQuery(event.target.value);
            setLoading(true);
          }}
          placeholder="Cari kota atau chapter"
          size="small"
          sx={{ minWidth: 240, flex: 1, bgcolor: "#fff" }}
        />
        {loading ? <CircularProgress size={22} sx={{ color: color.red }} /> : null}
      </Box>
      <ToggleButtonGroup
        exclusive
        value={terrain}
        onChange={(_event, value: (typeof terrains)[number] | null) => {
          if (!value) return;
          setTerrain(value);
          setLoading(true);
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
          <Plate key={group.slug} sx={{ overflow: "hidden" }}>
            <Box component="img" src={chapterPhoto[group.slug] ?? "/photos/forest.jpg"} alt="" sx={{ width: "100%", height: 150, objectFit: "cover", display: "block" }} />
            <Box sx={{ p: 2.5 }}>
            <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {group.terrain} · {group.city}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 26, my: 1 }}>
              <Box component={Link} href={`/chapter/${group.slug}`} sx={{ "&:hover": { color: color.red } }}>
                {group.name}
              </Box>
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, minHeight: 48 }}>
              {group.blurb}
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>{formatCount(group.members)} rider</Typography>
            </Box>
          </Plate>
        ))}
      </Box>
      {!loading && groups.length === 0 ? (
        <Typography color="text.secondary">Tidak ada chapter yang cocok.</Typography>
      ) : null}
    </Box>
  );
}
