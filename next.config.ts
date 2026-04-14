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

/** Docker/Railway: set `NEXT_OUTPUT_FILE_TRACING_ROOT=/app` in Dockerfile so standalone never embeds a developer machine path. */
const outputFileTracingRoot =
  process.env.NEXT_OUTPUT_FILE_TRACING_ROOT !== undefined
    ? path.resolve(process.env.NEXT_OUTPUT_FILE_TRACING_ROOT)
    : useTracingRoot
      ? projectRoot
      : undefined;

/** Avoid overriding webpack `cache` in dev: `cache: { type: "memory" }` correlated with RSC errors (`TypeError: a[d] is not a function`). For ENOENT on `.pack.gz`, run `npm run clean:cache` or `npm run clean`. */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Trace minimal server bundle for Docker / Railway (`node .next/standalone/server.js`). */
  output: "standalone",
  ...(outputFileTracingRoot ? { outputFileTracingRoot } : {}),
  images: {
    remotePatterns: [],
    /** Allow `quality` values used by `next/image` (default is 75; see `NEXT_PHOTO_IMAGE_QUALITY`). Required for Next.js 16+. */
    qualities: [75, 92],
    /**
     * Avoid `/_next/image` 400s on Railway/Docker standalone (local `public/` paths + optimizer).
     * Files are served as static assets from `/photos/*` etc.; `sharp` stays available if you re-enable later.
     */
    unoptimized: true
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains"
          },
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
