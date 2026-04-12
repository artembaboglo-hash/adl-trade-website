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

const nextDir = path.join(process.cwd(), ".next");
try {
  fs.rmSync(nextDir, { recursive: true, force: true });
} catch (e) {
  if (e && e.code !== "ENOENT") throw e;
}
