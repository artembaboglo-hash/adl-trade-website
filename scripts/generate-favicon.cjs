/**
 * Build favicons: white logo on brand teal background (readable on browser tabs).
 * - Optional explicit white PNG: node scripts/generate-favicon.cjs /path/to/white.png
 * - Or place public/adl-favicon-white.png
 * - Else: derive white from current src/app/icon.png via negate (dark → light)
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const BRAND_BG = { r: 0, g: 77, b: 77, alpha: 1 }; // accent.tealDark #004d4d
/** Logo max side as fraction of canvas — slightly larger than typical safe padding */
const SCALE = 0.92;

async function buildSquare(makeSharp, outPath, size) {
  const maxSide = Math.round(size * SCALE);
  const logoBuf = await makeSharp()
    .resize(maxSide, maxSide, { fit: "inside" })
    .toBuffer();

  const meta = await sharp(logoBuf).metadata();
  const left = Math.round((size - meta.width) / 2);
  const top = Math.round((size - meta.height) / 2);

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BRAND_BG
    }
  })
    .composite([{ input: logoBuf, left, top }])
    .png()
    .toFile(outPath);
}

function resolveMakeSharp() {
  const explicit = process.argv[2];
  if (explicit && fs.existsSync(explicit)) {
    console.log("Using white logo:", explicit);
    return () => sharp(explicit).ensureAlpha();
  }
  const pub = path.join(__dirname, "..", "public", "adl-favicon-white.png");
  if (fs.existsSync(pub)) {
    console.log("Using public/adl-favicon-white.png");
    return () => sharp(pub).ensureAlpha();
  }
  const current = path.join(__dirname, "..", "src", "app", "icon.png");
  if (!fs.existsSync(current)) {
    throw new Error("No src/app/icon.png to derive from. Add a white PNG or public/adl-favicon-white.png");
  }
  console.log("Using src/app/icon.png → negate (white) on brand background");
  return () => sharp(current).ensureAlpha().negate({ alpha: false });
}

async function main() {
  const makeSharp = resolveMakeSharp();
  const appDir = path.join(__dirname, "..", "src", "app");
  await buildSquare(makeSharp, path.join(appDir, "icon.png"), 512);
  await buildSquare(makeSharp, path.join(appDir, "apple-icon.png"), 180);
  console.log("Wrote src/app/icon.png (512) and src/app/apple-icon.png (180)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
