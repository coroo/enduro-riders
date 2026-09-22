import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const githubPagesConfig: NextConfig = {
  output: "export",
  basePath: "/enduro-riders",
  assetPrefix: "/enduro-riders/",
  trailingSlash: true,
  images: { unoptimized: true },
};

const redirects = [
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
] as const;

const nextConfig: NextConfig = {
  ...(isGithubPages ? githubPagesConfig : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/enduro-riders" : "",
  },
  ...(!isGithubPages
    ? {
        async redirects() {
          return [...redirects];
        },
      }
    : {}),
};

export default nextConfig;
