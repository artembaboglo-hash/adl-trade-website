import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Required when another `package-lock.json` exists higher in the tree (e.g. home dir).
 * If you still see missing chunk / wrong-manifest errors, try once:
 * `NEXT_DISABLE_OUTPUT_FILE_TRACING_ROOT=1 npm run dev`
 */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const useTracingRoot = process.env.NEXT_DISABLE_OUTPUT_FILE_TRACING_ROOT !== "1";

/** Avoid overriding webpack `cache` in dev: `cache: { type: "memory" }` correlated with RSC errors (`TypeError: a[d] is not a function`). For ENOENT on `.pack.gz`, run `npm run clean:cache` or `npm run clean`. */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(useTracingRoot ? { outputFileTracingRoot: projectRoot } : {}),
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
