"use client";

import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useMemo, useState } from "react";
import Plate from "@/components/Plate";
import { listEvents } from "@/lib/data";
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

  const events = useMemo(() => listEvents(status === "Semua" ? undefined : status), [status]);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <ToggleButtonGroup
        exclusive
        value={status}
        onChange={(_event, value: (typeof filters)[number] | null) => {
          if (!value) return;
          setStatus(value);
        }}
        sx={{ flexWrap: "wrap" }}
      >
        {filters.map((item) => (
          <ToggleButton key={item} value={item}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box sx={{ display: "grid", gap: 2 }}>
        {events.map((item) => {
          const chip = statusOf(item.status);
          return (
            <Plate key={item.slug} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "220px 1fr" }, overflow: "hidden" }}>
              <Box component="img" src={eventPhoto[item.slug] ?? "/photos/trail.jpg"} alt="" sx={{ width: "100%", minHeight: 160, objectFit: "cover" }} />
              <Box sx={{ p: 2.5 }}>
                <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {formatDate(item.date)} · {item.chapter}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: 26, my: 1 }}>
                  <Box component={Link} href={`/agenda/${item.slug}`} sx={{ "&:hover": { color: color.red } }}>
                    {item.title}
                  </Box>
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {item.place}, {item.city} · {item.time}
                </Typography>
                <span className={chip.className}>{chip.label}</span>
              </Box>
            </Plate>
          );
        })}
      </Box>
      {events.length === 0 ? (
        <Typography color="text.secondary">Belum ada agenda untuk filter ini.</Typography>
      ) : null}
    </Box>
  );
}
