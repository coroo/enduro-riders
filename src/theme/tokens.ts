import { assetPath } from "@/lib/assetPath";

export const color = {
  ink: "var(--ink)",
  cream: "var(--bg)",
  paper: "var(--paper)",
  red: "var(--red)",
  redDeep: "#b42318",
  gold: "var(--gold)",
  mute: "var(--mute)",
  line: "var(--line)",
  hero: "var(--bg)",
};

export const logo = assetPath("/logo.jpg");

export const photos = {
  hero: assetPath("/photos/hero2.png"),
  forest: assetPath("/photos/forest.jpg"),
  mountain: assetPath("/photos/mountain.jpg"),
  group: assetPath("/photos/group.jpg"),
  sunset: assetPath("/photos/sunset.jpg"),
  coast: assetPath("/photos/coast.jpg"),
} as const;

export const chapterPhoto: Record<string, string> = {
  "bandung-utara": photos.forest,
  dieng: photos.mountain,
  "bromo-ash": photos.sunset,
  "gunung-kidul": photos.coast,
  lore: photos.forest,
  "sumatera-ridge": photos.group,
};

export const eventPhoto: Record<string, string> = {
  "open-trail-cikole": photos.forest,
  "sunrise-bromo": photos.mountain,
  "latihan-hujan-berastagi": photos.group,
  "pesisir-baron": photos.coast,
};

export const storyPhoto: Record<string, string> = {
  "briefing-musim-hujan": photos.forest,
  "pos-sungai-lore": photos.coast,
  "cara-gabung-chapter": photos.group,
  "ritme-sabtu": photos.sunset,
};
