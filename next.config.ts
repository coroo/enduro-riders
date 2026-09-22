import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/groups", destination: "/chapter", permanent: false },
      { source: "/groups/:slug", destination: "/chapter/:slug", permanent: false },
      { source: "/news", destination: "/berita", permanent: false },
      { source: "/news/:slug", destination: "/berita/:slug", permanent: false },
      { source: "/contact", destination: "/kontak", permanent: false },
      { source: "/download", destination: "/", permanent: false },
      { source: "/leaderboard", destination: "/", permanent: false },
      { source: "/quest", destination: "/agenda", permanent: false },
      { source: "/achievements", destination: "/tentang", permanent: false },
      { source: "/contributor", destination: "/tentang", permanent: false },
      { source: "/partner", destination: "/tentang", permanent: false },
    ];
  },
};

export default nextConfig;
