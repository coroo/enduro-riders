const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Public asset URL; prefixes basePath on GitHub Pages static export. */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (!basePath || path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
