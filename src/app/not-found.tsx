import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppButton from "@/components/AppButton";

export default function NotFound() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="overline">404</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 56, md: 84 }, my: 1 }}>
        Jalur ini buntu
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Halaman yang kamu cari tidak ada di peta klub.
      </Typography>
      <Box>
        <AppButton href="/" variant="contained">
          Kembali ke beranda
        </AppButton>
      </Box>
    </Container>
  );
}
