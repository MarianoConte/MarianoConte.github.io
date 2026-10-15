import type { NextConfig } from "next";

// Static export so GitHub Pages can serve the site from marianoconte.github.io
// (a user site, so no basePath is needed).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
