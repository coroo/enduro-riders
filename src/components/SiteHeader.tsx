"use client";

import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { useColorScheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/nav";
import { color } from "@/theme/tokens";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { mode, setMode, systemMode } = useColorScheme();
  const resolved = mode === "system" ? systemMode : mode;
  const dark = resolved === "dark";

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: `1px solid ${color.line}`,
        }}
      >
        <Toolbar sx={{ gap: 1, minHeight: 72, px: { xs: 2, md: 3 } }}>
          <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", gap: 1.1, mr: { md: 2 } }}>
            <Box component="img" src="/logo.jpg" alt="" sx={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }} />
            <Box sx={{ fontWeight: 800, letterSpacing: "-0.04em", fontSize: 18 }}>
              <Box component="span" sx={{ color: color.red }}>Enduro</Box> Riders
            </Box>
          </Box>

          <Stack
            component="nav"
            direction="row"
            sx={{ display: { xs: "none", md: "flex" }, gap: 0.25, alignItems: "center", mx: "auto" }}
          >
            {navItems.map((item) => {
              const active = isCurrent(pathname, item.href);
              return (
                <Box
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    px: 1.5,
                    py: 0.8,
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 14.5,
                    color: active ? color.red : "text.primary",
                    bgcolor: active ? "rgba(226,59,44,0.08)" : "transparent",
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Stack>

          <IconButton component={Link} href="/chapter" aria-label="Cari chapter" sx={{ color: "text.primary" }}>
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label={dark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            onClick={() => setMode(dark ? "light" : "dark")}
            sx={{ color: "text.primary" }}
          >
            {dark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
          <Button component={Link} href="/kontak" variant="contained" sx={{ display: { xs: "none", sm: "inline-flex" }, ml: 0.5 }}>
            Gabung
          </Button>
          <IconButton aria-label="Buka menu" onClick={() => setOpen(true)} sx={{ display: { md: "none" }, color: "text.primary" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: 300, bgcolor: "background.paper" } } }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton aria-label="Tutup menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack component="nav" sx={{ px: 2, pb: 3, gap: 0.5 }}>
          {navItems.map((item) => (
            <Box
              key={item.href}
              component={Link}
              href={item.href}
              onClick={() => setOpen(false)}
              sx={{
                py: 1.3,
                px: 1,
                fontWeight: 700,
                fontSize: 18,
                color: isCurrent(pathname, item.href) ? color.red : "text.primary",
                borderBottom: `1px solid ${color.line}`,
              }}
            >
              {item.label}
            </Box>
          ))}
          <Button component={Link} href="/kontak" variant="contained" sx={{ mt: 2 }} onClick={() => setOpen(false)}>
            Gabung
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
