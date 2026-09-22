"use client";

import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import Plate from "@/components/Plate";
import type { ClubEvent } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { eventPhoto } from "@/theme/tokens";
import { color } from "@/theme/tokens";

const filters = ["Semua", "Buka", "Penuh", "Daftar", "Selesai"] as const;

function statusOf(status: ClubEvent["status"]) {
  if (status === "Buka") return { label: "Tersedia slot", className: "chip-open" };
  if (status === "Penuh") return { label: "Hampir penuh", className: "chip-soon" };
  if (status === "Daftar") return { label: "Pendaftaran dibuka", className: "chip-info" };
  return { label: "Selesai", className: "chip-done" };
}

export default function EventExplorer() {
  const [status, setStatus] = useState<(typeof filters)[number]>("Semua");
  const [events, setEvents] = useState<ClubEvent[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = status === "Semua" ? "" : `?status=${encodeURIComponent(status)}`;
    fetch(`/api/events${params}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("fail");
        return (await response.json()) as { events: ClubEvent[] };
      })
      .then((data) => {
        setEvents(data.events);
        setError("");
      })
      .catch(() => setError("Agenda gagal dimuat."));
  }, [status]);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <ToggleButtonGroup
        exclusive
        value={status}
        onChange={(_event, value: (typeof filters)[number] | null) => {
          if (value) setStatus(value);
        }}
        sx={{ flexWrap: "wrap" }}
      >
        {filters.map((item) => (
          <ToggleButton key={item} value={item}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {error ? <Typography color="error">{error}</Typography> : null}
      <Box sx={{ display: "grid", gap: 2 }}>
        {events.map((item) => {
          const badge = statusOf(item.status);
          return (
          <Plate key={item.slug} sx={{ p: 1.5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "120px 1fr auto" }, gap: 2, alignItems: "center" }}>
            <Box component="img" src={eventPhoto[item.slug] ?? "/photos/forest.jpg"} alt="" sx={{ width: "100%", height: 84, objectFit: "cover", borderRadius: 2, display: { xs: "none", md: "block" } }} />
            <Box>
              <Typography variant="body2" color="text.secondary">{formatDate(item.date)} · {item.time} · {item.city}</Typography>
              <Typography variant="h3" sx={{ fontSize: 24 }}>
                <Box component={Link} href={`/agenda/${item.slug}`} sx={{ "&:hover": { color: color.red } }}>
                  {item.title}
                </Box>
              </Typography>
              <Typography color="text.secondary">{item.summary}</Typography>
            </Box>
            <Box className={badge.className}>{badge.label}</Box>
          </Plate>
          );
        })}
      </Box>
    </Box>
  );
}
