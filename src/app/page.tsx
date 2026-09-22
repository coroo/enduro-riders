import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppButton from "@/components/AppButton";
import LeaderboardPreview from "@/components/LeaderboardPreview";
import PhoneMock from "@/components/PhoneMock";
import Plate from "@/components/Plate";
import SectionHeading from "@/components/SectionHeading";
import TextLink from "@/components/TextLink";
import { chapters, features, getLeaderboard, stats, stories, testimonials } from "@/lib/data";
import { formatCount, formatDate, formatKm } from "@/lib/format";
import { color } from "@/theme/tokens";

const scenes = ["route", "search", "record"] as const;

export default function HomePage() {
  const board = getLeaderboard("personal");

  return (
    <>
      <Container sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 2, md: 4 } }}>
        <Box
          className="crest-in"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            minHeight: { md: "calc(100vh - 140px)" },
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: color.gold }}>
              Motorcycle Club
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "4.4rem", sm: "6rem", md: "7.4rem" }, mt: 1 }}>
              <Box component="span" sx={{ display: "block", color: color.red }}>
                Enduro
              </Box>
              <Box component="span" sx={{ display: "block", color: color.silver }}>
                Riders
              </Box>
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 520, fontSize: 18, lineHeight: 1.7, color: color.mute }}>
              Selamat datang. Dari sini kamu bisa lihat leaderboard, kabar chapter, jalur, dan quest.
              Catatan kilometer hanya naik kalau grup pulang utuh.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 4 }}>
              <AppButton href="/download" variant="contained">
                Download Aplikasi
              </AppButton>
              <AppButton href="/leaderboard" variant="outlined">
                Lihat Leaderboard
              </AppButton>
            </Box>
          </Box>

          <Plate sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}>
            <Box
              component="img"
              src="/logo.jpg"
              alt="Lambang Enduro Riders Motorcycle Club"
              sx={{
                width: "min(100%, 380px)",
                height: "auto",
                display: "block",
                mx: "auto",
                filter: "drop-shadow(0 20px 40px rgba(226,59,44,0.25))",
              }}
            />
            <Typography variant="overline" sx={{ color: color.gold, display: "block", mt: 1 }}>
              Trail · Chapter · Kilometer
            </Typography>
          </Plate>
        </Box>

        <Box
          sx={{
            mt: { xs: 5, md: 2 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            borderTop: `1px solid ${color.line}`,
            borderBottom: `1px solid ${color.line}`,
          }}
        >
          {stats.map((stat) => (
            <Box key={stat.label} sx={{ py: 3, px: { xs: 0.5, md: 2 }, borderRight: { md: `1px solid ${color.line}` } }}>
              <Typography variant="overline" sx={{ color: color.gold }}>
                {stat.label}
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-display)", fontSize: { xs: 36, md: 48 }, lineHeight: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.hint}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Container id="baru" sx={{ py: { xs: 8, md: 12 } }}>
        <SectionHeading
          kicker="What's New"
          title="Yang baru di klub"
          text="Pencapaian dapat tanda, dan kilometer chapter bisa dibanding tanpa harus membuka chat yang sudah tenggelam."
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: 2 }}>
          <Plate sx={{ p: { xs: 3, md: 4 }, minHeight: 280 }}>
            <Typography variant="overline" sx={{ color: color.red }}>
              Baru
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: 36, md: 48 }, my: 1 }}>
              Achievements & Badges
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 460, mb: 3, lineHeight: 1.7 }}>
              Setiap pencapaian punya tanda. First Mud, Night Ridge, sampai Juru Peta — terkumpul dari ride yang benar-benar terjadi.
            </Typography>
            <AppButton href="/achievements" endIcon={<ArrowForwardIcon />} sx={{ color: color.gold, px: 0 }}>
              Lihat badge
            </AppButton>
          </Plate>
          <Plate sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" sx={{ color: color.red }}>
              Baru
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: 36, md: 48 }, my: 1 }}>
              Leaderboard
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              Bandingkan jarak pribadi atau total chapter. Posisi teratas adalah yang catatannya lengkap, bukan yang paling berisik di grup.
            </Typography>
            <AppButton href="/leaderboard" endIcon={<ArrowForwardIcon />} sx={{ color: color.gold, px: 0 }}>
              Buka papan
            </AppButton>
          </Plate>
        </Box>
      </Container>

      <Box id="leaderboard" sx={{ py: { xs: 4, md: 8 }, bgcolor: "rgba(0,0,0,0.25)" }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap", alignItems: "end" }}>
            <SectionHeading
              kicker="Leaderboard"
              title="Siapa yang memimpin jalur"
              text="Angka di bawah diambil dari catatan musim ini. Pindah tab untuk melihat total chapter."
            />
            <AppButton href="/leaderboard" endIcon={<ArrowForwardIcon />} sx={{ mb: 5, color: color.gold }}>
              Lihat semua
            </AppButton>
          </Box>
          <LeaderboardPreview initialPersonal={board.rows} initialUpdatedAt={board.updatedAt} />
        </Container>
      </Box>

      <Container id="ride" sx={{ py: { xs: 8, md: 12 } }}>
        <SectionHeading
          kicker="Ride Mode"
          title="Tentukan perjalananmu"
          text="Rencanakan rute, cari titik yang sudah diverifikasi, lalu rekam ride dari genggaman. Aplikasi mobile menyusul — alurnya sudah bisa dilihat di sini."
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {features.map((feature, index) => (
            <Box key={feature.id}>
              <PhoneMock scene={scenes[index]} />
              <Typography variant="overline" sx={{ color: color.gold, display: "block", mt: 2 }}>
                {feature.kicker}
              </Typography>
              <Typography variant="h3" sx={{ fontSize: 32, my: 1 }}>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">{feature.text}</Typography>
            </Box>
          ))}
        </Box>
        <Plate sx={{ mt: 6, p: { xs: 3, md: 5 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.4fr auto" }, gap: 2, alignItems: "center" }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: 40, md: 64 } }}>
              Ride mode untuk tanah, bukan untuk tol
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 520 }}>
              Titik kumpul, sweep, dan catatan jalur duduk di tempat yang sama supaya tidak hilang di chat.
            </Typography>
          </Box>
          <AppButton href="/download" variant="contained">
            Lihat aplikasi
          </AppButton>
        </Plate>
      </Container>

      <Container id="chapter" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap", alignItems: "end" }}>
          <SectionHeading
            kicker="Groups"
            title="Bergabung dengan chapter"
            text="Temukan pengendara di kotamu. Bagi jalur, jaga jarak, dan bangun ritme ride yang sama."
          />
          <AppButton href="/groups" endIcon={<ArrowForwardIcon />} sx={{ mb: 5, color: color.gold }}>
            Lihat semua groups
          </AppButton>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          {chapters.slice(0, 3).map((chapter) => (
            <Plate key={chapter.slug} sx={{ p: 2.5 }}>
              <Typography variant="overline" sx={{ color: color.gold }}>
                {chapter.city}
              </Typography>
              <Typography variant="h3" sx={{ fontSize: 30, my: 1 }}>
                {chapter.name}
              </Typography>
              <Typography color="text.secondary" sx={{ minHeight: 72 }}>
                {chapter.blurb}
              </Typography>
              <Typography sx={{ mt: 2, color: color.silver }}>
                {formatCount(chapter.members)} rider · {formatKm(chapter.km)}
              </Typography>
            </Plate>
          ))}
        </Box>
      </Container>

      <Box id="cerita" sx={{ py: { xs: 8, md: 12 }, borderTop: `1px solid ${color.line}`, bgcolor: "rgba(0,0,0,0.28)" }}>
        <Container>
          <SectionHeading
            kicker="Komunitas"
            title="Apa kata rider"
            text="Bukan iklan. Ini catatan dari orang yang rutin turun dan pulang dengan grup yang sama."
          />
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
            {testimonials.map((item) => (
              <Plate key={item.name} sx={{ p: 3 }}>
                <Typography sx={{ fontFamily: "var(--font-display)", fontSize: 64, color: color.red, lineHeight: 0.7 }}>
                  “
                </Typography>
                <Typography sx={{ lineHeight: 1.7, mb: 3 }}>{item.quote}</Typography>
                <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.city}
                </Typography>
              </Plate>
            ))}
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" }, gap: 4, alignItems: "center" }}>
          <Box>
            <SectionHeading
              kicker="Mulai"
              title="Naik bareng Enduro Riders"
              text="Leaderboard, chapter, dan kabar klub sudah bisa dibuka dari web. Aplikasi untuk merekam ride sedang disiapkan."
            />
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <AppButton href="/download" variant="contained">
                Download Aplikasi
              </AppButton>
              <AppButton href="/contact" variant="outlined">
                Hubungi chapter
              </AppButton>
            </Box>
          </Box>
          <Plate sx={{ p: 2.5 }}>
            <Typography variant="overline" sx={{ color: color.gold }}>
              Kabar terbaru
            </Typography>
            {stories.slice(0, 3).map((story) => (
              <Box key={story.slug} sx={{ py: 1.5, borderBottom: `1px solid ${color.line}` }}>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(story.date)} · {story.category}
                </Typography>
                <TextLink href={`/news/${story.slug}`} sx={{ fontWeight: 700, display: "block", "&:hover": { color: color.gold } }}>
                  {story.title}
                </TextLink>
              </Box>
            ))}
          </Plate>
        </Box>
      </Container>
    </>
  );
}
