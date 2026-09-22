import type { Metadata } from "next";
import { Karla, Oswald } from "next/font/google";
import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Enduro Riders",
    template: "%s · Enduro Riders",
  },
  description:
    "Komunitas enduro Indonesia. Leaderboard, chapter, jalur, quest, dan catatan perjalanan untuk rider yang pulang bareng.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <ThemeRegistry>
          <div className="grain" />
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
