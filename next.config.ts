import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [{ hostname: "bm4c4vapik.ufs.sh" }],
  },
  /* config options here */
};

export default nextConfig;
