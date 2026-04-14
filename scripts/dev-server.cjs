/**
 * Picks the first free port in [3000..3010] and runs `next dev`.
 * Avoids EADDRINUSE when 3000/3001 are taken; prints the exact URL to open.
 * Uses `node …/next/dist/bin/next` (no shell) to avoid DEP0190 and stray npx resolution.
 */
const net = require("net");
const path = require("path");
const { spawn } = require("child_process");

function resolveNextCli() {
  try {
    return require.resolve("next/dist/bin/next");
  } catch {
    return null;
  }
}

/** `127.0.0.1` can avoid rare localhost/IPv6 quirks; LAN preview needs `0.0.0.0` (default). */
const HOST = process.env.DEV_HOST || "0.0.0.0";
const PORT_MIN = 3000;
const PORT_MAX = 3010;

function portFree(port) {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.unref();
    s.once("error", () => resolve(false));
    s.once("listening", () => {
      s.close(() => resolve(true));
    });
    s.listen(port, HOST);
  });
}

async function main() {
  const nextCli = resolveNextCli();
  if (!nextCli) {
    console.error("[dev-server] Next.js not found. Run npm install in:\n  %s", path.resolve(process.cwd()));
    process.exit(1);
  }

  for (let p = PORT_MIN; p <= PORT_MAX; p++) {
    if (await portFree(p)) {
      const displayHost = HOST === "0.0.0.0" ? "localhost" : HOST;
      console.log(
        "\n  ▶ ADL Trade dev — open in browser:\n  ▶ http://%s:%s/  (redirects to /ro)\n  ▶ http://%s:%s/ro\n  ▶ Tip: if styles are missing, try DEV_HOST=127.0.0.1 npm run dev or npm run dev:loopback\n",
        displayHost,
        p,
        displayHost,
        p
      );
      const child = spawn(
        process.execPath,
        [nextCli, "dev", "--hostname", HOST, "--port", String(p)],
        {
          stdio: "inherit",
          cwd: process.cwd(),
          env: { ...process.env, WATCHPACK_POLLING: "true" }
        }
      );
      child.on("exit", (code) => process.exit(code ?? 0));
      return;
    }
  }
  console.error("[dev-server] No free port in %s–%s. Close other dev servers and try again.", PORT_MIN, PORT_MAX);
  process.exit(1);
}

main();
