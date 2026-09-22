"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/nav";
import { color } from "@/theme/tokens";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(7, 6, 5, 0.84)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${color.line}`,
      }}
    >
      <Box sx={{ height: 3, background: "linear-gradient(90deg, #5c140f, #e23b2c 42%, #d4b36a 78%, #5c140f)" }} />
      <Toolbar sx={{ gap: 2, minHeight: 76, px: { xs: 2, md: 3 } }}>
        <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", gap: 1.25, mr: "auto" }}>
          <Box
            component="img"
            src="/logo.jpg"
            alt="Lambang Enduro Riders"
            sx={{ width: 46, height: 46, objectFit: "cover", borderRadius: "50%" }}
          />
          <Box sx={{ lineHeight: 0.85, display: { xs: "none", sm: "block" } }}>
            <Box sx={{ fontFamily: "var(--font-display)", color: color.red, letterSpacing: "0.08em", fontSize: 18 }}>
              ENDURO
            </Box>
            <Box sx={{ fontFamily: "var(--font-display)", color: color.silver, letterSpacing: "0.14em", fontSize: 18 }}>
              RIDERS
            </Box>
          </Box>
        </Box>

        <Stack
          component="nav"
          direction="row"
          sx={{ display: { xs: "none", lg: "flex" }, gap: 0.25, alignItems: "center" }}
        >
          {navItems.map((item) => {
            const active = isCurrent(pathname, item.href);
            return (
              <Box
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  px: 1.1,
                  py: 0.75,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.08em",
                  fontSize: 14,
                  color: active ? color.red : color.cream,
                  borderBottom: active ? `2px solid ${color.gold}` : "2px solid transparent",
                  "&:hover": { color: color.gold },
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Stack>

        <Button component={Link} href="/download" variant="contained" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
          Download Aplikasi
        </Button>
        <IconButton
          aria-label="Buka menu"
          onClick={() => setOpen(true)}
          sx={{ display: { lg: "none" }, color: color.cream }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 300, bgcolor: color.coal, backgroundImage: "none" } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton aria-label="Tutup menu" onClick={() => setOpen(false)} sx={{ color: color.cream }}>
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
                py: 1.25,
                px: 1,
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                fontSize: 22,
                color: isCurrent(pathname, item.href) ? color.red : color.cream,
                borderBottom: `1px solid ${color.line}`,
              }}
            >
              {item.label}
            </Box>
          ))}
          <Button component={Link} href="/download" variant="contained" sx={{ mt: 2 }} onClick={() => setOpen(false)}>
            Download Aplikasi
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
