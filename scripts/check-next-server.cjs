/**
 * Fails fast before `next start` when `.next` is missing critical server artifacts.
 * Does not validate every numeric chunk (IDs change each build) — use `npm run clean:all && npm run build` if you see
 * "Cannot find module './NNN.js'" from webpack-runtime.
 *
 * Also validates pages-manifest.json: if it is missing or lacks `/_app`, Next can throw
 * `TypeError: Cannot read properties of undefined (reading '/_app')` on requests (stale/partial .next).
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const nextDir = path.join(root, ".next");
const must = (rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) {
    console.error(`[check-next-server] Missing ${rel}`);
    console.error("Run: npm run clean:all && npm run build");
    process.exit(1);
  }
};

must(".next/BUILD_ID");
must(".next/server/webpack-runtime.js");
must(".next/server/pages/_document.js");
must(".next/server/pages-manifest.json");
must(".next/server/app-paths-manifest.json");

try {
  const pagesManifest = JSON.parse(
    fs.readFileSync(path.join(root, ".next/server/pages-manifest.json"), "utf8")
  );
  if (!pagesManifest || typeof pagesManifest !== "object" || !pagesManifest["/_app"]) {
    console.error(
      "[check-next-server] .next/server/pages-manifest.json is invalid or missing the /_app entry."
    );
    console.error("Run: npm run clean:all && npm run build");
    process.exit(1);
  }
} catch (e) {
  console.error("[check-next-server] Could not read or parse .next/server/pages-manifest.json");
  console.error("Run: npm run clean:all && npm run build");
  process.exit(1);
}

const chunksDir = path.join(nextDir, "server", "chunks");
if (!fs.existsSync(chunksDir)) {
  console.error("[check-next-server] Missing .next/server/chunks");
  console.error("Run: npm run clean:all && npm run build");
  process.exit(1);
}
const chunkFiles = fs.readdirSync(chunksDir).filter((f) => f.endsWith(".js"));
if (chunkFiles.length < 1) {
  console.error("[check-next-server] .next/server/chunks has no .js files — build is incomplete.");
  console.error("Run: npm run clean:all && npm run build");
  process.exit(1);
}
