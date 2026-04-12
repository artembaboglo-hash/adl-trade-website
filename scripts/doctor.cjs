/**
 * Quick environment + build output checks. Run: npm run doctor
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
console.log("--- ADL Trade site doctor ---\n");
console.log("Node:", process.version);
const major = parseInt(process.version.slice(1).split(".")[0], 10);
if (major >= 24) {
  console.warn(
    "⚠ Node 24+ can hit rare loader/webpack issues with Next 15. If you see require-hook / webpack-runtime errors, use Node 22 LTS: nvm install 22 && nvm use (see .nvmrc).\n"
  );
  console.warn(
    "⚠ If the site looks like plain HTML (no Tailwind, blue default links), try: nvm use 22, then npm run dev:clean, and open http://localhost:3000 in Chrome/Safari — not Cursor’s Simple Browser. In DevTools → Network, confirm /_next/static/css/*.css returns 200.\n"
  );
}
if (process.env.NODE_OPTIONS) {
  console.warn("⚠ NODE_OPTIONS is set:", process.env.NODE_OPTIONS);
  console.warn("  Extra --require / --import flags can break Next’s server loader. Unset for a clean test.\n");
}
console.log("Platform:", process.platform);
console.log("cwd:", root);
if (/\s/.test(root)) {
  console.warn("⚠ Path contains spaces — if chunks fail mysteriously, clone the repo to a path without spaces and retry.\n");
}

let dir = path.dirname(root);
for (;;) {
  const lock = path.join(dir, "package-lock.json");
  if (fs.existsSync(lock)) {
    console.warn("⚠ package-lock.json above this project:", lock);
    console.warn("  Extra lockfiles can confuse Next’s workspace root. Remove the stray file or keep outputFileTracingRoot in next.config.ts.\n");
  }
  const up = path.dirname(dir);
  if (up === dir) break;
  dir = up;
}

const nextDir = path.join(root, ".next");
if (!fs.existsSync(nextDir)) {
  console.log(".next: (missing — normal before first `npm run dev` / `npm run build`)");
} else {
  const bid = path.join(nextDir, "BUILD_ID");
  const hasBid = fs.existsSync(bid);
  console.log(".next/BUILD_ID:", hasBid ? fs.readFileSync(bid, "utf8").trim() : "(missing — run dev or build)");
  const chunks = path.join(nextDir, "server", "chunks");
  const n = fs.existsSync(chunks)
    ? fs.readdirSync(chunks).filter((f) => f.endsWith(".js")).length
    : 0;
  console.log(".next/server/chunks *.js count:", n);
  const wr = path.join(nextDir, "server", "webpack-runtime.js");
  console.log("webpack-runtime:", fs.existsSync(wr) ? "ok" : "missing (expected until after `next dev` or `next build`)");
}

console.log("\nRecovery commands:");
console.log("  nvm install 22 && nvm use   # match .nvmrc (Node 22 LTS)");
console.log("  npm run fix:500:prod        # HTTP 500 / missing chunk on next start: clean .next, rebuild, start");
console.log("  (each `npm run build` runs prebuild: delete .next first — avoids stale webpack chunk ids)");
console.log("  SKIP_PREBUILD_CLEAN=1 npm run build   # skip that delete if you need faster incremental (risky if errors)");
console.log("  npm run fix                 # clean:all + npm install + build (full repair)");
console.log("  npm run fix:cache           # clean:all + build only");
console.log("  npm run fix:chunks          # clean:all + dev");
console.log("  npm run dev:lan             # listen on 0.0.0.0 (other devices)");
console.log("  npm run reinstall           # if node_modules may be corrupt");
console.log("  NEXT_DISABLE_OUTPUT_FILE_TRACING_ROOT=1 npm run dev");
console.log("---\n");
