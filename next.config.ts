import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Absolute project root (directory of this file). Stable even if `npm` is run from another cwd or a parent lockfile confuses Next. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
