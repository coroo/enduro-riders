import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextLink from "@/components/TextLink";
import { navItems } from "@/lib/nav";
import { color } from "@/theme/tokens";

const about = [
  { href: "/#baru", label: "What's New" },
  { href: "/#ride", label: "Ride Mode" },
  { href: "/#cerita", label: "Apa kata komunitas" },
];

const help = [
  { href: "/privacy", label: "Kebijakan Privasi" },
  { href: "/contact", label: "Hubungi Kami" },
];

function Column({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <Box>
      <Typography variant="overline" sx={{ color: color.gold, display: "block", mb: 1.5 }}>
        {title}
      </Typography>
      <Stack sx={{ gap: 1 }}>
        {links.map((link) => (
          <TextLink
            key={link.href}
            href={link.href}
            sx={{ color: color.mute, fontSize: 15, "&:hover": { color: color.cream } }}
          >
            {link.label}
          </TextLink>
        ))}
      </Stack>
    </Box>
  );
}

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ mt: 8, borderTop: `1px solid ${color.line}`, bgcolor: "rgba(0,0,0,0.35)" }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1.4fr 1fr 1fr 1fr" },
            gap: 4,
          }}
        >
          <Box>
            <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box component="img" src="/logo.jpg" alt="" sx={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover" }} />
              <Typography variant="h4" sx={{ fontSize: 28, lineHeight: 0.9 }}>
                Enduro
                <br />
                Riders
              </Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ maxWidth: 320, lineHeight: 1.6 }}>
              Klub pengendara enduro yang menghubungkan chapter, jalur, dan catatan kilometer di seluruh Indonesia.
            </Typography>
            <Typography sx={{ mt: 2, color: color.gold }} variant="body2">
              halo@enduroriders.id
            </Typography>
          </Box>
          <Column title="About" links={about} />
          <Column title="Menu" links={navItems} />
          <Column title="Bantuan" links={help} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 6 }}>
          © {new Date().getFullYear()} Enduro Riders Motorcycle Club.
        </Typography>
      </Container>
    </Box>
  );
}
