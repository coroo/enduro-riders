export type Scope = "personal" | "chapter";

export type RiderRow = {
  rank: number;
  name: string;
  handle: string;
  city: string;
  km: number;
};

export type Stat = {
  label: string;
  value: string;
  hint: string;
};

export type Chapter = {
  slug: string;
  name: string;
  city: string;
  province: string;
  members: number;
  terrain: "Gunung" | "Hutan" | "Pantai" | "Perkebunan";
  founded: string;
  km: number;
  blurb: string;
  meet: string;
  rhythm: string;
  riders: { name: string; role: string }[];
};

export type Story = {
  slug: string;
  title: string;
  date: string;
  category: "Event" | "Update" | "Safety" | "Chapter";
  excerpt: string;
  body: string[];
};

export type Achievement = {
  id: string;
  name: string;
  detail: string;
  tier: "Perunggu" | "Perak" | "Emas";
  unlocked: boolean;
};

export type Quest = {
  id: string;
  title: string;
  detail: string;
  difficulty: "Mudah" | "Sedang" | "Berat";
  reward: string;
  km: number;
};

export type Partner = {
  name: string;
  kind: string;
  city: string;
  offer: string;
};

export type Contributor = {
  name: string;
  city: string;
  trails: number;
  notes: number;
  focus: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
};

export const updatedAt = "2026-09-21T18:30:00+07:00";

export const stats: Stat[] = [
  { label: "Riders", value: "8.420", hint: "terdaftar di klub" },
  { label: "Chapter", value: "64", hint: "di 18 provinsi" },
  { label: "Kilometer", value: "186K", hint: "tercatat musim ini" },
  { label: "Jalur", value: "312", hint: "dipetakan bersama" },
];

const personal: Omit<RiderRow, "rank">[] = [
  { name: "Sagara Trail", handle: "sagara.trail", city: "Garut", km: 4812.4 },
  { name: "Batu Ridge", handle: "batu.ridge", city: "Malang", km: 4551.12 },
  { name: "Merah Putih", handle: "merah.putih", city: "Bandung", km: 4302.08 },
  { name: "Kabut Dieng", handle: "kabut.dieng", city: "Wonosobo", km: 4011.55 },
  { name: "Lumpur Pagi", handle: "lumpur.pagi", city: "Bogor", km: 3888.2 },
  { name: "Ash Bromo", handle: "ash.bromo", city: "Probolinggo", km: 3710.44 },
  { name: "Pinus Utara", handle: "pinus.utara", city: "Subang", km: 3522.9 },
  { name: "Arus Deras", handle: "arus.deras", city: "Sukabumi", km: 3401.15 },
  { name: "Tanjakan 17", handle: "tanjakan.17", city: "Sumedang", km: 3288.66 },
  { name: "Rimba Senja", handle: "rimba.senja", city: "Palu", km: 3114.02 },
  { name: "Kopi Mesin", handle: "kopi.mesin", city: "Yogyakarta", km: 2990.4 },
  { name: "Jejak Hujan", handle: "jejak.hujan", city: "Medan", km: 2844.73 },
];

export const chapters: Chapter[] = [
  {
    slug: "bandung-utara",
    name: "Chapter Bandung Utara",
    city: "Bandung",
    province: "Jawa Barat",
    members: 186,
    terrain: "Hutan",
    founded: "2019-04-12",
    km: 28640.5,
    blurb: "Jalur pinus, tanjakan basah, dan titik kumpul sebelum matahari tinggi.",
    meet: "Dago atas, tiap Sabtu 05.30",
    rhythm: "Ride pendek weekday, enduro panjang dua minggu sekali.",
    riders: [
      { name: "Merah Putih", role: "Road captain" },
      { name: "Pinus Utara", role: "Sweep" },
      { name: "Tanjakan 17", role: "Mapper" },
    ],
  },
  {
    slug: "dieng",
    name: "Chapter Dieng",
    city: "Wonosobo",
    province: "Jawa Tengah",
    members: 94,
    terrain: "Gunung",
    founded: "2020-08-02",
    km: 24110.2,
    blurb: "Kabut pagi, batu licin, dan kopi panas setelah turun dari dataran tinggi.",
    meet: "Area Dieng, Minggu 06.00",
    rhythm: "Fokus pendakian dan turunan panjang.",
    riders: [
      { name: "Kabut Dieng", role: "Road captain" },
      { name: "Kopi Mesin", role: "Medic kit" },
    ],
  },
  {
    slug: "bromo-ash",
    name: "Chapter Bromo Ash",
    city: "Probolinggo",
    province: "Jawa Timur",
    members: 121,
    terrain: "Gunung",
    founded: "2018-11-20",
    km: 22880.75,
    blurb: "Pasir, debu vulkanik, dan ritme mesin yang dijaga supaya tidak tercecer.",
    meet: "Cemoro Lawang, Sabtu 04.30",
    rhythm: "Sunrise ride dan penyisiran grup ketat.",
    riders: [
      { name: "Ash Bromo", role: "Road captain" },
      { name: "Batu Ridge", role: "Navigator" },
    ],
  },
  {
    slug: "gunung-kidul",
    name: "Chapter Gunung Kidul",
    city: "Gunungkidul",
    province: "D.I. Yogyakarta",
    members: 77,
    terrain: "Pantai",
    founded: "2021-02-14",
    km: 16440.1,
    blurb: "Tebing kapur, jalur pesisir, dan titik kumpul dekat warung ikan.",
    meet: "Baron, Minggu 07.00",
    rhythm: "Ride santai dengan foto jalur baru.",
    riders: [{ name: "Kopi Mesin", role: "Host" }],
  },
  {
    slug: "lore",
    name: "Chapter Lore",
    city: "Palu",
    province: "Sulawesi Tengah",
    members: 58,
    terrain: "Hutan",
    founded: "2022-06-09",
    km: 13990.33,
    blurb: "Hutan lebat, sungai dangkal, dan catatan jalur yang dibagi pelan-pelan.",
    meet: "Palu utara, Sabtu 06.30",
    rhythm: "Ekspedisi kecil, maksimal dua belas motor.",
    riders: [{ name: "Rimba Senja", role: "Road captain" }],
  },
  {
    slug: "sumatera-ridge",
    name: "Chapter Sumatera Ridge",
    city: "Medan",
    province: "Sumatera Utara",
    members: 83,
    terrain: "Perkebunan",
    founded: "2021-09-18",
    km: 15120.9,
    blurb: "Perkebunan basah, tanjakan tanah, dan grup yang terbiasa menunggu di tikungan.",
    meet: "Berastagi, Minggu 05.00",
    rhythm: "Latihan teknik lumpur tiap akhir bulan.",
    riders: [{ name: "Jejak Hujan", role: "Road captain" }],
  },
];

const chapterBoard: Omit<RiderRow, "rank">[] = chapters.map((chapter) => ({
  name: chapter.name,
  handle: chapter.slug,
  city: chapter.city,
  km: chapter.km,
}));

export const stories: Story[] = [
  {
    slug: "open-trail-cikole",
    title: "Open Trail Cikole dibuka untuk semua chapter",
    date: "2026-09-18",
    category: "Event",
    excerpt: "Sabtu ini jalur pinus Cikole dipakai bareng. Kuota dijaga supaya antrian di tanjakan tidak macet.",
    body: [
      "Chapter Bandung Utara membuka Open Trail Cikole untuk rider dari chapter lain. Titik kumpul tetap di parkiran atas, sebelum jam enam.",
      "Setiap grup maksimal delapan motor. Road captain memimpin, sweep menutup. Istirahat wajib di pos tengah, bukan di tengah tanjakan.",
      "Bawa jas hujan dan ban yang masih punya alur. Debu pagi cepat berubah jadi lumpur tipis kalau hujan semalam belum kering.",
    ],
  },
  {
    slug: "briefing-musim-hujan",
    title: "Briefing musim hujan: jarak, lampu, dan titik putar",
    date: "2026-09-12",
    category: "Safety",
    excerpt: "Tiga hal yang paling sering bikin grup tercecer saat trek basah, dan cara chapter menanganinya.",
    body: [
      "Musim hujan mengubah jalur yang kemarin cepat jadi licin di akar dan batu. Klub menaikkan jarak aman antar motor dan menurunkan target kilometer harian.",
      "Lampu sorot dicek sebelum berangkat. Rider tanpa lampu cadangan tidak masuk grup malam, termasuk ride pulang yang melewati hutan.",
      "Setiap chapter wajib punya titik putar yang disepakati. Kalau dua motor terpisah lebih dari lima menit, grup berhenti, bukan menambah kecepatan.",
    ],
  },
  {
    slug: "badge-night-ridge",
    title: "Badge baru: Night Ridge",
    date: "2026-09-04",
    category: "Update",
    excerpt: "Pencapaian untuk rider yang menyelesaikan jalur punggungan setelah matahari terbenam, dengan catatan lengkap.",
    body: [
      "Night Ridge bukan soal siapa paling malam di jalan. Badge ini keluar kalau jalur tercatat, grup utuh, dan tidak ada rider yang ditinggal di tikungan.",
      "Syaratnya sederhana: mulai setelah pukul 18.00, selesai sebelum tengah malam, dan unggah catatan rute ke chapter.",
      "Badge masuk ke papan Achievements minggu ini. Rider yang sudah memenuhi syarat dari log Agustus akan melihatnya terbuka.",
    ],
  },
  {
    slug: "chapter-lore-bertambah",
    title: "Chapter Lore menambah pos sungai",
    date: "2026-08-27",
    category: "Chapter",
    excerpt: "Pos baru di sisi utara Palu dipakai untuk cek mesin sebelum menyeberang dangkal.",
    body: [
      "Chapter Lore menambah pos sungai setelah dua ride berturut-turut harus memutar karena air naik.",
      "Pos ini bukan basecamp menginap. Fungsinya cek knalpot, rantai, dan kesepakatan siapa yang menyeberang lebih dulu.",
      "Catatan kedalaman air akan diperbarui rider yang lewat, lalu tampil di halaman chapter.",
    ],
  },
];

export const achievements: Achievement[] = [
  { id: "first-mud", name: "First Mud", detail: "Selesaikan ride pertama yang pulang dengan lumpur di gir.", tier: "Perunggu", unlocked: true },
  { id: "ridge-keeper", name: "Ridge Keeper", detail: "Pimpin grup sampai finish tanpa ada yang tercecer.", tier: "Emas", unlocked: true },
  { id: "night-ridge", name: "Night Ridge", detail: "Tuntaskan punggungan setelah matahari terbenam.", tier: "Perak", unlocked: false },
  { id: "river-line", name: "River Line", detail: "Catat penyeberangan dangkal yang aman untuk chapter.", tier: "Perak", unlocked: true },
  { id: "thousand", name: "Seribu Kilometer", detail: "Capai 1.000 km tercatat dalam satu musim.", tier: "Emas", unlocked: false },
  { id: "mapper", name: "Juru Peta", detail: "Tambah jalur baru yang dipakai minimal lima rider.", tier: "Perunggu", unlocked: true },
  { id: "sweep", name: "Sweep Setia", detail: "Tutup grup sepuluh kali berturut-turut.", tier: "Perak", unlocked: false },
  { id: "founder", name: "Chapter Founder", detail: "Bantu berdiri chapter yang lolos verifikasi klub.", tier: "Emas", unlocked: false },
];

export const quests: Quest[] = [
  { id: "weekend-100", title: "100 km akhir pekan", detail: "Kumpulkan seratus kilometer di jalur tanah, bukan aspal tol.", difficulty: "Mudah", reward: "First Mud", km: 100 },
  { id: "river", title: "Seberang dangkal", detail: "Lewati satu sungai dangkal bersama chapter, lalu catat titiknya.", difficulty: "Sedang", reward: "River Line", km: 40 },
  { id: "sunrise", title: "Puncak sebelum panas", detail: "Capai punggungan sebelum pukul 08.00 dan foto titik kumpul.", difficulty: "Sedang", reward: "Ridge Keeper", km: 70 },
  { id: "night", title: "Navigasi senja", detail: "Ride grup setelah magrib dengan lampu lengkap dan sweep di belakang.", difficulty: "Berat", reward: "Night Ridge", km: 55 },
  { id: "map", title: "Jalur yang dibagi", detail: "Petakan satu cabang baru dan ajak lima rider mencobanya.", difficulty: "Berat", reward: "Juru Peta", km: 30 },
  { id: "rain", title: "Latihan lumpur", detail: "Ikuti sesi teknik chapter saat trek basah, tanpa ngebut di turunan.", difficulty: "Mudah", reward: "Sweep Setia", km: 25 },
];

export const partners: Partner[] = [
  { name: "Bengkel Poros", kind: "Servis", city: "Bandung", offer: "Cek rantai dan gir untuk member sebelum ride panjang." },
  { name: "Ridge Supply", kind: "Perlengkapan", city: "Malang", offer: "Stok ban trail dan jas hujan di titik kumpul chapter." },
  { name: "Kopi Tanjakan", kind: "Istirahat", city: "Wonosobo", offer: "Pos kopi panas setelah turun, buka sebelum matahari." },
  { name: "Recovery Line", kind: "Derek", city: "Probolinggo", offer: "Evakuasi motor yang tidak bisa turun sendiri dari pasir." },
  { name: "Ban Lumpur", kind: "Ban", city: "Medan", offer: "Pilihan alur untuk perkebunan basah, bisa dipasang di pos." },
  { name: "Peta Jalur", kind: "Peta", city: "Palu", offer: "Cetak peta chapter yang sudah diverifikasi juru peta." },
];

export const contributors: Contributor[] = [
  { name: "Tanjakan 17", city: "Sumedang", trails: 28, notes: 64, focus: "Tanjakan pinus utara" },
  { name: "Rimba Senja", city: "Palu", trails: 19, notes: 41, focus: "Sungai dan cabang hutan" },
  { name: "Pinus Utara", city: "Subang", trails: 17, notes: 33, focus: "Kondisi trek setelah hujan" },
  { name: "Batu Ridge", city: "Malang", trails: 15, notes: 29, focus: "Batuan dan turunan" },
  { name: "Jejak Hujan", city: "Medan", trails: 14, notes: 26, focus: "Perkebunan dan lumpur" },
  { name: "Ash Bromo", city: "Probolinggo", trails: 12, notes: 22, focus: "Pasir dan debu" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Yang kupakai bukan cuma arah. Chapter-nya bikin aku tahu di mana harus berhenti, siapa yang di belakang, dan jalur mana yang kemarin masih bisa dilewati.",
    name: "Sagara Trail",
    city: "Garut",
  },
  {
    quote: "Awalnya ikut ride orang, sekarang aku yang catat cabang baru. Enaknya catatan itu tidak hilang di grup chat. Rider lain bisa lihat sebelum berangkat.",
    name: "Rimba Senja",
    city: "Palu",
  },
  {
    quote: "Leaderboard-nya tidak bikin kami ngebut di turunan. Angkanya naik dari kilometer yang bersih: grup utuh, jalur tercatat, pulang bareng.",
    name: "Merah Putih",
    city: "Bandung",
  },
];

export const features = [
  {
    id: "route",
    kicker: "Susun jalur",
    title: "Rute sebelum mesin hidup",
    text: "Tandai titik kumpul, pos istirahat, dan cabang yang harus dihindari. Chapter melihat rencana yang sama.",
  },
  {
    id: "search",
    kicker: "Cari titik",
    title: "Bingung mau lewat mana",
    text: "Cari pos, warung, atau punggungan yang sudah diverifikasi rider lain. Bukan pin acak dari orang lewat.",
  },
  {
    id: "record",
    kicker: "Rekam ride",
    title: "GO, lalu catat tanahnya",
    text: "Satu ketukan mulai merekam. Kilometer masuk papan kalau catatan selesai dan grup tidak tercecer.",
  },
] as const;

function withRank(rows: Omit<RiderRow, "rank">[]): RiderRow[] {
  return [...rows]
    .sort((a, b) => b.km - a.km)
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

export function getStats() {
  return { updatedAt, stats };
}

export function getLeaderboard(scope: Scope) {
  const rows = scope === "chapter" ? chapterBoard : personal;
  return { scope, updatedAt, rows: withRank(rows) };
}

export function listChapters(query?: string, terrain?: string) {
  const needle = query?.trim().toLowerCase() ?? "";
  return chapters.filter((chapter) => {
    const matchesTerrain = !terrain || terrain === "Semua" || chapter.terrain === terrain;
    const haystack = `${chapter.name} ${chapter.city} ${chapter.province} ${chapter.terrain}`.toLowerCase();
    const matchesQuery = !needle || haystack.includes(needle);
    return matchesTerrain && matchesQuery;
  });
}

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug) ?? null;
}

export function listStories(category?: string) {
  if (!category || category === "Semua") return stories;
  return stories.filter((story) => story.category === category);
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug) ?? null;
}

export function listQuests(difficulty?: string) {
  if (!difficulty || difficulty === "Semua") return quests;
  return quests.filter((quest) => quest.difficulty === difficulty);
}

export const terrains = ["Gunung", "Hutan", "Pantai", "Perkebunan"] as const;
export const difficulties = ["Mudah", "Sedang", "Berat"] as const;
