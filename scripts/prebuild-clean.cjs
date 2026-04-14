/**
 * Removes `.next` before `next build` so server `webpack-runtime.js` and `./chunks/*.js`
 * never reference missing modules (fixes "Cannot find module './NNN.js'").
 * Skip with: SKIP_PREBUILD_CLEAN=1 npm run build
 */
const fs = require("fs");
const path = require("path");

if (process.env.SKIP_PREBUILD_CLEAN === "1") {
  process.exit(0);
}

/** Docker (incl. Railway) can lock `.next/cache` (EBUSY). Fresh image builds don't need a clean. */
try {
  if (fs.existsSync("/.dockerenv")) {
    process.exit(0);
  }
} catch {
  /* ignore */
}

const nextDir = path.join(process.cwd(), ".next");
try {
  fs.rmSync(nextDir, { recursive: true, force: true });
} catch (e) {
  if (e && e.code === "ENOENT") return;
  /** Docker overlay / BuildKit can lock `.next/cache` (EBUSY). Safe to continue — `next build` overwrites. */
  if (e && e.code === "EBUSY") {
    console.warn("[prebuild-clean] Could not remove .next (EBUSY); continuing.");
    return;
  }
  throw e;
}
