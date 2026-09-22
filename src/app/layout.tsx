import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Enduro Riders",
    template: "%s · Enduro Riders",
  },
  description:
    "Enduro Riders, komunitas enduro. Cari chapter, lihat agenda ride, baca berita, dan daftar gabung.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" className={sans.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript defaultMode="light" />
        <ThemeRegistry>
          <div className="app-root">
            <SiteHeader />
            <main style={{ flex: 1 }}>{children}</main>
            <SiteFooter />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
