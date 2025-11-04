import { config } from "dotenv";
import { resolve } from "path";

// Load environment variables from root .env
config({ path: resolve(process.cwd(), "../../.env") });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export for Cloudflare Pages
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
};

export default nextConfig;
