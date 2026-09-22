import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { navItems } from "@/lib/nav";
import { color } from "@/theme/tokens";

const help = [
  { href: "/kontak", label: "Gabung / hubungi" },
  { href: "/privacy", label: "Kebijakan privasi" },
];

function Column({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: color.gold, mb: 1.5 }}>
        {title}
      </Typography>
      <Stack sx={{ gap: 1 }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="footer-link">
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ mt: 4, borderTop: `1px solid ${color.line}`, bgcolor: "background.paper" }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1.4fr 1fr 1fr" }, gap: 4 }}>
          <Box>
            <Stack direction="row" sx={{ alignItems: "center", gap: 1.25, mb: 1.5 }}>
              <Box component="img" src="/logo.jpg" alt="" sx={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
              <Typography sx={{ fontWeight: 800, letterSpacing: "-0.03em", fontSize: 20 }}>Enduro Riders</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ maxWidth: 340, lineHeight: 1.7 }}>
              Tempat rider enduro mencari chapter, membaca agenda, dan mendaftar ride.
            </Typography>
            <Typography sx={{ mt: 2, color: color.red, fontWeight: 700 }} variant="body2">
              halo@enduroriders.id
            </Typography>
          </Box>
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
