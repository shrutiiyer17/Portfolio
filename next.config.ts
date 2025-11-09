import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tells Next to generate static HTML
  images: { unoptimized: true }, // required for GitHub Pages
  basePath: "/Portfolio", // must match your repo name exactly (case-sensitive)
  assetPrefix: "/Portfolio/",
  distDir: "out",
};

export default nextConfig;
