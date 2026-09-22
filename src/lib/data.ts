export type Chapter = {
  slug: string;
  name: string;
  city: string;
  province: string;
  members: number;
  terrain: "Gunung" | "Hutan" | "Pantai" | "Perkebunan";
  founded: string;
  blurb: string;
  meet: string;
  rhythm: string;
  riders: { name: string; role: string }[];
};

export type ClubEvent = {
  slug: string;
  title: string;
  date: string;
  time: string;
  city: string;
  place: string;
  chapter: string;
    status: "Buka" | "Penuh" | "Daftar" | "Selesai";
  summary: string;
  body: string[];
};

export type Story = {
  slug: string;
  title: string;
  date: string;
  category: "Kabar" | "Safety" | "Chapter";
  excerpt: string;
  body: string[];
};

export type Stat = { label: string; value: string; hint: string };

export const stats: Stat[] = [
  { label: "Chapter", value: "64", hint: "di 18 provinsi" },
  { label: "Rider", value: "8.420", hint: "terdaftar di klub" },
  { label: "Agenda", value: "12", hint: "ride bulan ini" },
  { label: "Berita", value: "4", hint: "kabar terbaru" },
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
    blurb: "Jalur pinus dan titik kumpul sebelum matahari tinggi.",
    meet: "Dago atas, tiap Sabtu 05.30",
    rhythm: "Ride pendek di hari kerja, enduro panjang dua minggu sekali.",
    riders: [
      { name: "Merah Putih", role: "Road captain" },
      { name: "Pinus Utara", role: "Sweep" },
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
    blurb: "Kabut pagi, batu licin, dan kopi setelah turun.",
    meet: "Area Dieng, Minggu 06.00",
    rhythm: "Fokus pendakian dan turunan panjang.",
    riders: [{ name: "Kabut Dieng", role: "Road captain" }],
  },
  {
    slug: "bromo-ash",
    name: "Chapter Bromo Ash",
    city: "Probolinggo",
    province: "Jawa Timur",
    members: 121,
    terrain: "Gunung",
    founded: "2018-11-20",
    blurb: "Pasir, debu vulkanik, dan grup yang dijaga tetap rapat.",
    meet: "Cemoro Lawang, Sabtu 04.30",
    rhythm: "Sunrise ride dengan penyisiran ketat.",
    riders: [{ name: "Ash Bromo", role: "Road captain" }],
  },
  {
    slug: "gunung-kidul",
    name: "Chapter Gunung Kidul",
    city: "Gunungkidul",
    province: "D.I. Yogyakarta",
    members: 77,
    terrain: "Pantai",
    founded: "2021-02-14",
    blurb: "Tebing kapur, jalur pesisir, dan titik kumpul dekat warung.",
    meet: "Baron, Minggu 07.00",
    rhythm: "Ride santai sambil mencatat jalur baru.",
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
    blurb: "Hutan lebat, sungai dangkal, dan catatan jalur yang dibagi pelan.",
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
    blurb: "Perkebunan basah dan grup yang terbiasa menunggu di tikungan.",
    meet: "Berastagi, Minggu 05.00",
    rhythm: "Latihan teknik lumpur tiap akhir bulan.",
    riders: [{ name: "Jejak Hujan", role: "Road captain" }],
  },
];

export const events: ClubEvent[] = [
  {
    slug: "open-trail-cikole",
    title: "Open Trail Cikole",
    date: "2026-09-27",
    time: "05.30",
    city: "Bandung",
    place: "Parkiran Dago atas",
    chapter: "Chapter Bandung Utara",
    status: "Buka",
    summary: "Jalur pinus dibuka untuk rider dari chapter lain. Kuota delapan motor per grup.",
    body: [
      "Titik kumpul di parkiran atas, sebelum jam setengah enam. Datang dengan tangki cukup dan ban yang masih beralur.",
      "Setiap grup dipimpin road captain dan ditutup sweep. Istirahat di pos tengah, bukan di tengah tanjakan.",
      "Konfirmasi kehadiran lewat formulir gabung, sebut chapter asal dan jenis motor.",
    ],
  },
  {
    slug: "sunrise-bromo",
    title: "Sunrise Bromo",
    date: "2026-10-04",
    time: "04.00",
    city: "Probolinggo",
    place: "Cemoro Lawang",
    chapter: "Chapter Bromo Ash",
    status: "Penuh",
    summary: "Ride pasir pagi. Grup kecil, lampu wajib, dan tidak ada yang ditinggal di turunan.",
    body: [
      "Berkumpul pukul empat. Briefing sepuluh menit soal jarak dan titik putar.",
      "Rider tanpa lampu cadangan tidak ikut sesi pulang yang masih gelap.",
      "Slot terbatas tiga puluh motor. Setelah penuh, pendaftaran ditutup di halaman agenda.",
    ],
  },
  {
    slug: "latihan-hujan-berastagi",
    title: "Latihan lumpur Berastagi",
    date: "2026-10-11",
    time: "06.00",
    city: "Medan",
    place: "Pos chapter Berastagi",
    chapter: "Chapter Sumatera Ridge",
    status: "Daftar",
    summary: "Sesi teknik di trek basah. Bukan balapan, targetnya grup utuh sampai finish.",
    body: [
      "Cocok untuk rider yang baru ikut chapter. Kecepatan diturunkan, jarak antar motor ditambah.",
      "Bawa jas hujan. Pos kopi buka sebelum start.",
    ],
  },
  {
    slug: "pesisir-baron",
    title: "Pesisir Baron",
    date: "2026-08-16",
    time: "07.00",
    city: "Gunungkidul",
    place: "Baron",
    chapter: "Chapter Gunung Kidul",
    status: "Selesai",
    summary: "Ride santai jalur kapur. Catatan jalur baru sudah dibagikan ke chapter.",
    body: ["Acara selesai tanpa rider yang tercecer. Catatan titik kumpul ada di halaman chapter."],
  },
];

export const stories: Story[] = [
  {
    slug: "briefing-musim-hujan",
    title: "Briefing musim hujan untuk semua chapter",
    date: "2026-09-12",
    category: "Safety",
    excerpt: "Jarak, lampu, dan titik putar yang dipakai klub saat trek basah.",
    body: [
      "Musim hujan mengubah jalur yang kemarin cepat jadi licin di akar dan batu. Chapter menurunkan target harian dan menaikkan jarak aman.",
      "Lampu dicek sebelum berangkat. Ride malam tanpa lampu cadangan tidak dilepas.",
      "Kalau dua motor terpisah lebih dari lima menit, grup berhenti.",
    ],
  },
  {
    slug: "pos-sungai-lore",
    title: "Chapter Lore menambah pos sungai",
    date: "2026-08-27",
    category: "Chapter",
    excerpt: "Pos baru di utara Palu untuk cek mesin sebelum menyeberang dangkal.",
    body: [
      "Pos ini bukan tempat menginap. Fungsinya cek rantai dan sepakat siapa yang menyeberang lebih dulu.",
      "Kedalaman air dicatat rider yang lewat, lalu ditampilkan di halaman chapter.",
    ],
  },
  {
    slug: "cara-gabung-chapter",
    title: "Cara gabung chapter lewat situs",
    date: "2026-08-20",
    category: "Kabar",
    excerpt: "Pendaftaran cukup lewat formulir. Chapter membalas dengan titik kumpul.",
    body: [
      "Pilih chapter di halaman Chapter, atau kirim kota di formulir Gabung kalau belum yakin.",
      "Road captain membalas lewat email berisi titik kumpul dan syarat motor.",
      "Setelah itu kamu ikut agenda yang statusnya masih Buka.",
    ],
  },
  {
    slug: "ritme-sabtu",
    title: "Ritme Sabtu yang dipakai sebagian besar chapter",
    date: "2026-08-02",
    category: "Kabar",
    excerpt: "Kumpul, briefing sepuluh menit, lalu ride. Pulang di titik yang sama.",
    body: [
      "Hampir semua chapter memakai pola yang sama supaya rider tamu tidak bingung.",
      "Agenda memakai pola itu: jam, tempat, dan kuota tertulis sebelum hari-H.",
    ],
  },
];

export const steps = [
  {
    title: "Cari chapter",
    text: "Saring menurut kota atau medan. Setiap chapter punya titik kumpul dan ritme ride.",
  },
  {
    title: "Lihat agenda",
    text: "Ride yang akan datang tertulis lengkap: jam, tempat, kuota, dan status slot.",
  },
  {
    title: "Daftar gabung",
    text: "Kirim formulir gabung. Chapter membalas lewat email dan mengirim titik kumpul.",
  },
];

export const terrains = ["Gunung", "Hutan", "Pantai", "Perkebunan"] as const;

export function listChapters(query?: string, terrain?: string) {
  const needle = query?.trim().toLowerCase() ?? "";
  return chapters.filter((chapter) => {
    const matchesTerrain = !terrain || terrain === "Semua" || chapter.terrain === terrain;
    const haystack = `${chapter.name} ${chapter.city} ${chapter.province} ${chapter.terrain}`.toLowerCase();
    return matchesTerrain && (!needle || haystack.includes(needle));
  });
}

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug) ?? null;
}

export function listEvents(status?: string) {
  if (!status || status === "Semua") return events;
  return events.filter((item) => item.status === status);
}

export function getEvent(slug: string) {
  return events.find((item) => item.slug === slug) ?? null;
}

export function listStories(category?: string) {
  if (!category || category === "Semua") return stories;
  return stories.filter((story) => story.category === category);
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug) ?? null;
}

export function getStats() {
  return { stats };
}
