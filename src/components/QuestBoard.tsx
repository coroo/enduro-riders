"use client";

import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Plate from "@/components/Plate";
import type { Quest } from "@/lib/data";
import { color } from "@/theme/tokens";

const filters = ["Semua", "Mudah", "Sedang", "Berat"] as const;
const tone: Record<Quest["difficulty"], string> = {
  Mudah: color.silver,
  Sedang: color.gold,
  Berat: color.red,
};

export default function QuestBoard() {
  const [difficulty, setDifficulty] = useState<(typeof filters)[number]>("Semua");
  const [quests, setQuests] = useState<Quest[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = difficulty === "Semua" ? "" : `?difficulty=${encodeURIComponent(difficulty)}`;
    fetch(`/api/quests${params}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("fail");
        return (await response.json()) as { quests: Quest[] };
      })
      .then((data) => setQuests(data.quests))
      .catch(() => setError("Quest gagal dimuat."));
  }, [difficulty]);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <ToggleButtonGroup
        exclusive
        value={difficulty}
        onChange={(_event, value: (typeof filters)[number] | null) => {
          if (value) setDifficulty(value);
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
        {quests.map((quest) => (
          <Plate key={quest.id} sx={{ p: { xs: 2, md: 3 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr auto" }, gap: 2 }}>
            <Box>
              <Typography variant="overline" sx={{ color: tone[quest.difficulty] }}>
                {quest.difficulty} · {quest.km} km
              </Typography>
              <Typography variant="h3" sx={{ fontSize: 32, my: 1 }}>
                {quest.title}
              </Typography>
              <Typography color="text.secondary">{quest.detail}</Typography>
            </Box>
            <Box sx={{ alignSelf: "center" }}>
              <Typography variant="overline" sx={{ color: color.gold }}>
                Badge
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-display)", fontSize: 24 }}>{quest.reward}</Typography>
            </Box>
          </Plate>
        ))}
      </Box>
    </Box>
  );
}
