import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tell Next.js to output static HTML during build
  output: "export",

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // (Optional) If your site will be hosted under a subpath like
  // https://username.github.io/your-repo-name/,
  // uncomment and set basePath + assetPrefix below 👇

  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name/",
};

export default nextConfig;
