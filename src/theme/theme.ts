"use client";

import { createTheme } from "@mui/material/styles";
import { color } from "./tokens";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: color.red, dark: color.redDeep, contrastText: "#fff8f4" },
    secondary: { main: color.gold, dark: color.goldDeep, contrastText: "#1a140c" },
    background: { default: color.ink, paper: color.plate },
    text: { primary: color.cream, secondary: color.mute },
    divider: color.line,
  },
  typography: {
    fontFamily: "var(--font-body), Georgia, sans-serif",
    h1: {
      fontFamily: "var(--font-display), Impact, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      lineHeight: 0.9,
    },
    h2: {
      fontFamily: "var(--font-display), Impact, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.035em",
      textTransform: "uppercase",
      lineHeight: 0.92,
    },
    h3: {
      fontFamily: "var(--font-display), Impact, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "var(--font-display), Impact, sans-serif",
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    button: {
      fontFamily: "var(--font-display), Impact, sans-serif",
      letterSpacing: "0.12em",
      fontWeight: 600,
    },
    overline: {
      fontFamily: "var(--font-display), Impact, sans-serif",
      letterSpacing: "0.22em",
      fontWeight: 600,
    },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: color.ink,
          backgroundImage: `
            radial-gradient(ellipse 70% 42% at 50% -8%, rgba(226, 59, 44, 0.2), transparent 58%),
            radial-gradient(ellipse 32% 24% at 100% 0%, rgba(212, 179, 106, 0.1), transparent 46%)
          `,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: "uppercase",
          paddingInline: 22,
          paddingBlock: 10,
        },
        contained: {
          background: "linear-gradient(180deg, #f15a45 0%, #b42318 100%)",
          boxShadow: "0 12px 28px rgba(180, 35, 24, 0.32)",
        },
        outlined: {
          borderColor: color.line,
          color: color.cream,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontFamily: "var(--font-display), Impact, sans-serif",
          letterSpacing: "0.08em",
        },
      },
    },
  },
});

export default theme;
