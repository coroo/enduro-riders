import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppButton from "@/components/AppButton";
import Plate from "@/components/Plate";
import { chapters, events, stats, steps, stories } from "@/lib/data";
import { formatCount, formatDate } from "@/lib/format";
import { chapterPhoto, color, eventPhoto, photos, storyPhoto } from "@/theme/tokens";

const statIcons = ["tint-blue", "tint-red", "tint-green", "tint-orange"] as const;
const statGlyph = [GroupsOutlinedIcon, TwoWheelerOutlinedIcon, CalendarMonthOutlinedIcon, NewspaperOutlinedIcon];

const stepLinks = ["/chapter", "/agenda", "/kontak"];
const stepIcons = [GroupsOutlinedIcon, CalendarMonthOutlinedIcon, TwoWheelerOutlinedIcon];

function statusOf(status: (typeof events)[number]["status"]) {
  if (status === "Buka") return { label: "Tersedia slot", className: "chip-open" };
  if (status === "Penuh") return { label: "Hampir penuh", className: "chip-soon" };
  if (status === "Daftar") return { label: "Pendaftaran dibuka", className: "chip-info" };
  return { label: "Selesai", className: "chip-done" };
}

const nextEvent = events.find((item) => item.status !== "Selesai") ?? events[0];

export default function HomePage() {
  const upcoming = events.filter((item) => item.status !== "Selesai");

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Container sx={{ pt: { xs: 5, md: 7 }, pb: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1.05fr) minmax(0, 0.95fr)" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ color: color.gold, fontWeight: 800, fontSize: 12, letterSpacing: "0.14em" }}>
              MOTORCYCLE CLUB
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.6rem" }, mt: 1.5, maxWidth: 560 }}>
            Satu Jalur.<br/>
            Seribu Cerita.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 480, fontSize: 16.5, lineHeight: 1.7 }}>
              Cari chapter, lihat agenda ride, baca berita, dan daftar gabung bersama Enduro Riders.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 3.5 }}>
              <AppButton href="/kontak" variant="contained" endIcon={<ArrowForwardIcon />}>
                Gabung Chapter
              </AppButton>
              <AppButton href="/agenda" variant="outlined">
                Lihat agenda
              </AppButton>
            </Box>
          </Box>

          <Box sx={{ position: "relative", minWidth: 0 }}>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                right: { xs: 8, md: -8 },
                top: -18,
                width: "62%",
                height: "78%",
                bgcolor: color.red,
                borderRadius: "28px 48px 20px 70px",
                transform: "rotate(8deg)",
              }}
            />
            <Box
              component="img"
              src={photos.hero}
              alt="Rider enduro di jalur pegunungan"
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 280, md: 380 },
                objectFit: "cover",
                borderRadius: "28px",
                display: "block",
              }}
            />
            <Plate
              sx={{
                position: { md: "absolute" },
                left: { md: 20 },
                right: { md: 20 },
                bottom: { md: -28 },
                mt: { xs: 2, md: 0 },
                p: 1.5,
                display: "grid",
                gridTemplateColumns: "72px 1fr auto",
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <Box component="img" src="/logo.jpg" alt="" sx={{ width: 72, height: 64, objectFit: "cover", borderRadius: 2 }} />
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: color.gold, fontWeight: 800, fontSize: 11, letterSpacing: "0.08em" }}>AGENDA TERDEKAT</Typography>
                <Typography sx={{ fontWeight: 800 }} noWrap>{nextEvent.title}</Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {formatDate(nextEvent.date)} · {nextEvent.time} · {nextEvent.city}
                </Typography>
              </Box>
              <AppButton href={`/agenda/${nextEvent.slug}`} sx={{ color: color.red, px: 0, display: { xs: "none", sm: "inline-flex" } }}>
                Detail agenda
              </AppButton>
            </Plate>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 4, md: 8 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {stats.map((stat, index) => {
            const Icon = statGlyph[index];
            return (
              <Plate key={stat.label} sx={{ p: 2, display: "flex", gap: 1.5, alignItems: "center" }}>
                <Box className={`tint ${statIcons[index]}`}>
                  <Icon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: 26, lineHeight: 1.1 }}>{stat.value}</Typography>
                  <Typography variant="caption" color="text.secondary">{stat.hint}</Typography>
                </Box>
              </Plate>
            );
          })}
        </Box>
      </Container>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 280' preserveAspectRatio='none'><path fill='%2394a3b8' d='M0 200 L120 160 L240 190 L380 110 L520 170 L680 80 L820 150 L980 90 L1120 160 L1280 70 L1440 140 V280 H0 Z'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "100% 220px",
            pointerEvents: "none",
          }}
        />
        <Container sx={{ position: "relative", py: { xs: 7, md: 10 } }}>
          <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em" }}>DI WEB INI</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mt: 1, maxWidth: 520 }}>
            Tiga hal yang sudah bisa dipakai
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
            Chapter, agenda, dan kabar klub ada di satu tempat.
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <Plate key={step.title} sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box className={`tint ${statIcons[index]}`}>
                      <Icon fontSize="small" />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "text.secondary" }}>0{index + 1}</Typography>
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: 22, mt: 2 }}>{step.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1, minHeight: 72, lineHeight: 1.6 }}>{step.text}</Typography>
                  <AppButton href={stepLinks[index]} endIcon={<ArrowForwardIcon />} sx={{ color: color.red, px: 0, mt: 1 }}>
                    Pelajari lebih lanjut
                  </AppButton>
                </Plate>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Container sx={{ pb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, alignItems: "end", mb: 3, flexWrap: "wrap" }}>
          <Box>
            <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em" }}>AGENDA</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mt: 0.5 }}>Ride yang sudah dijadwalkan</Typography>
            <Typography color="text.secondary">Jam, tempat, dan status slot. Konfirmasi lewat formulir gabung.</Typography>
          </Box>
          <AppButton href="/agenda" sx={{ color: color.red }}>Semua agenda</AppButton>
        </Box>
        <Box sx={{ display: "grid", gap: 1.5 }}>
          {upcoming.map((item) => {
            const badge = statusOf(item.status);
            const day = new Date(item.date);
            return (
              <Plate key={item.slug} sx={{ p: 1.5, display: "grid", gridTemplateColumns: { xs: "72px 1fr", md: "88px 92px 1fr auto auto" }, gap: 2, alignItems: "center" }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 28, lineHeight: 1 }}>{day.getDate()}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {day.toLocaleDateString("id-ID", { month: "short", year: "numeric" })}
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={eventPhoto[item.slug]}
                  alt=""
                  sx={{ width: 92, height: 64, objectFit: "cover", borderRadius: 2, display: { xs: "none", md: "block" } }}
                />
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.time} · {item.city} · {item.chapter}
                  </Typography>
                </Box>
                <Box className={badge.className}>{badge.label}</Box>
                <AppButton href={`/agenda/${item.slug}`} variant="outlined" sx={{ display: { xs: "none", md: "inline-flex" } }}>
                  Detail
                </AppButton>
              </Plate>
            );
          })}
        </Box>
      </Container>

      <Container sx={{ pb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", mb: 3 }}>
          <Box>
            <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em" }}>CHAPTER</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mt: 0.5 }}>Temukan grup di kotamu</Typography>
          </Box>
          <AppButton href="/chapter" sx={{ color: color.red }}>Semua chapter</AppButton>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          {chapters.slice(0, 3).map((chapter) => (
            <Plate key={chapter.slug} sx={{ overflow: "hidden" }}>
              <Box component="img" src={chapterPhoto[chapter.slug]} alt="" sx={{ width: "100%", height: 170, objectFit: "cover", display: "block" }} />
              <Box sx={{ p: 2.5 }}>
                <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em" }}>{chapter.city.toUpperCase()}</Typography>
                <Typography variant="h3" sx={{ fontSize: 22, my: 0.5 }}>{chapter.name}</Typography>
                <Typography color="text.secondary" sx={{ minHeight: 48 }}>{chapter.blurb}</Typography>
                <Typography sx={{ mt: 1.5, fontWeight: 700 }}>{formatCount(chapter.members)} rider</Typography>
              </Box>
            </Plate>
          ))}
        </Box>
      </Container>

      <Container sx={{ pb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", mb: 3 }}>
          <Box>
            <Typography sx={{ color: color.red, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em" }}>BERITA</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mt: 0.5 }}>Kabar dari klub</Typography>
          </Box>
          <AppButton href="/berita" sx={{ color: color.red }}>Lihat semua kabar</AppButton>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
          {stories.slice(0, 2).map((story) => (
            <Plate key={story.slug} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" }, overflow: "hidden" }}>
              <Box component="img" src={storyPhoto[story.slug]} alt="" sx={{ width: "100%", height: { xs: 160, sm: "100%" }, minHeight: 160, objectFit: "cover" }} />
              <Box sx={{ p: 2.5 }}>
                <Typography variant="body2" color="text.secondary">{formatDate(story.date)} · {story.category}</Typography>
                <Typography variant="h3" sx={{ fontSize: 22, my: 1 }}>{story.title}</Typography>
                <Typography color="text.secondary">{story.excerpt}</Typography>
                <AppButton href={`/berita/${story.slug}`} sx={{ color: color.red, px: 0, mt: 1 }}>Baca selengkapnya</AppButton>
              </Box>
            </Plate>
          ))}
        </Box>
      </Container>

      <Container sx={{ pb: { xs: 8, md: 10 } }}>
        <Box
          className="cta-band"
          sx={{
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "160px 1fr auto" },
            gap: 3,
            alignItems: "center",
          }}
        >
          <Box component="img" src={photos.hero} alt="" sx={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 3, display: { xs: "none", md: "block" } }} />
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, color: "#fff" }}>Siap ikut ride berikutnya?</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.82)", mt: 0.5 }}>
              Kirim nama, kota, dan chapter yang kamu tuju. Balasan datang lewat email.
            </Typography>
          </Box>
          <AppButton href="/kontak" variant="contained" sx={{ bgcolor: "#fff", color: color.redDeep, background: "#fff" }}>
            Isi formulir gabung
          </AppButton>
        </Box>
      </Container>
    </Box>
  );
}
