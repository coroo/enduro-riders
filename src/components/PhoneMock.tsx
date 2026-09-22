import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { color } from "@/theme/tokens";

function MapLines() {
  return (
    <svg viewBox="0 0 200 280" width="100%" height="100%" aria-hidden>
      <rect width="200" height="280" fill="#12100d" />
      <path d="M0 70 H200 M0 140 H200 M0 210 H200 M50 0 V280 M120 0 V280" stroke="rgba(212,179,106,0.16)" strokeWidth="1" />
      <path d="M24 230 C 50 190, 70 170, 88 120 S 130 70, 168 36" fill="none" stroke="#e23b2c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="230" r="6" fill="#d4b36a" />
      <circle cx="168" cy="36" r="6" fill="#f6f1e8" />
      <rect x="16" y="16" width="78" height="22" rx="2" fill="rgba(7,6,5,0.8)" stroke="rgba(212,179,106,0.4)" />
      <text x="24" y="31" fill="#d4b36a" fontSize="11" fontFamily="sans-serif">
        JALUR AKTIF
      </text>
    </svg>
  );
}

function SearchScene() {
  return (
    <Box sx={{ p: 1.5, height: "100%", bgcolor: "#12100d" }}>
      <Box sx={{ border: `1px solid ${color.line}`, px: 1.2, py: 1, mb: 1.5 }}>
        <Typography sx={{ fontSize: 12, color: color.mute }}>Cari punggungan, pos, sungai</Typography>
      </Box>
      {["Pos Cikole", "Sungai dangkal Lore", "Puncak Dieng"].map((item, index) => (
        <Box key={item} sx={{ py: 1.1, borderBottom: `1px solid ${color.line}` }}>
          <Typography sx={{ fontSize: 14, fontWeight: 700 }}>{item}</Typography>
          <Typography sx={{ fontSize: 12, color: color.gold }}>{index === 0 ? "12 rider lewat minggu ini" : "Terverifikasi chapter"}</Typography>
        </Box>
      ))}
    </Box>
  );
}

function RecordScene() {
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#12100d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
      }}
    >
      <Typography variant="overline" sx={{ color: color.gold }}>
        Siap catat
      </Typography>
      <Box
        sx={{
          width: 108,
          height: 108,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background: "radial-gradient(circle at 40% 35%, #f15a45, #8d1c14)",
          boxShadow: "0 0 0 8px rgba(226,59,44,0.15)",
          fontFamily: "var(--font-display)",
          fontSize: 36,
          letterSpacing: "0.08em",
        }}
      >
        GO
      </Box>
      <Typography sx={{ fontSize: 13, color: color.mute, px: 3, textAlign: "center" }}>
        Kilometer masuk papan setelah catatan selesai.
      </Typography>
    </Box>
  );
}

export default function PhoneMock({ scene }: { scene: "route" | "search" | "record" }) {
  return (
    <Box
      sx={{
        width: 230,
        height: 460,
        mx: "auto",
        borderRadius: "28px",
        p: "10px",
        background: "linear-gradient(180deg, #3a342c, #16130f)",
        border: `1px solid ${color.line}`,
        boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
      }}
    >
      <Box sx={{ height: "100%", borderRadius: "20px", overflow: "hidden", bgcolor: "#0c0b09", position: "relative" }}>
        <Box sx={{ height: 22, display: "flex", justifyContent: "center", alignItems: "end" }}>
          <Box sx={{ width: 70, height: 10, bgcolor: "#1c1916", borderRadius: 8 }} />
        </Box>
        <Box sx={{ height: "calc(100% - 64px)" }}>
          {scene === "route" ? <MapLines /> : null}
          {scene === "search" ? <SearchScene /> : null}
          {scene === "record" ? <RecordScene /> : null}
        </Box>
        <Box
          sx={{
            height: 42,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            alignItems: "center",
            textAlign: "center",
            borderTop: `1px solid ${color.line}`,
            fontFamily: "var(--font-display)",
            fontSize: 10,
            letterSpacing: "0.08em",
            color: color.mute,
          }}
        >
          <span>HOME</span>
          <span style={{ color: color.red }}>RIDE</span>
          <span>CHAPTER</span>
          <span>PROFIL</span>
        </Box>
      </Box>
    </Box>
  );
}
