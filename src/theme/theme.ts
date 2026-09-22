"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#e23b2c", dark: "#b42318", contrastText: "#fff8f4" },
        secondary: { main: "#171a21", contrastText: "#fff" },
        background: { default: "#f4f6fb", paper: "#ffffff" },
        text: { primary: "#171a21", secondary: "#667085" },
        divider: "rgba(23, 26, 33, 0.08)",
      },
    },
    dark: {
      palette: {
        primary: { main: "#e23b2c", dark: "#b42318", contrastText: "#fff8f4" },
        secondary: { main: "#d4b36a", contrastText: "#1a140c" },
        background: { default: "#100e0c", paper: "#1b1714" },
        text: { primary: "#f6f1e8", secondary: "#b7aea2" },
        divider: "rgba(212, 179, 106, 0.22)",
      },
    },
  },
  typography: {
    fontFamily: "var(--font-body), sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 },
    h2: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12 },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    button: { fontWeight: 700, textTransform: "none" },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: "var(--bg)" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, textTransform: "none", paddingInline: 18, paddingBlock: 10 },
        contained: {
          background: "linear-gradient(180deg, #f15a45 0%, #d13224 100%)",
          boxShadow: "0 8px 18px rgba(226, 59, 44, 0.28)",
        },
        outlined: {
          borderColor: "var(--line)",
          color: "var(--ink)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 12, backgroundColor: "var(--paper)" },
      },
    },
  },
});

export default theme;
