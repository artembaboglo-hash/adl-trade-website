// Entrypoint for the Next.js standalone server in Docker / Railway.
// Next.js 15 standalone mode does not emit a pre-built server.js; instead we
// create a plain Node.js HTTP server that delegates every request to the
// Next.js request handler obtained from the standalone app module.

"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const http = require("http");
const path = require("path");
const { parse } = require("url");

// The standalone build is copied to .next/standalone at the repo root.
// Requiring it returns the Next.js app instance (next()).
const nextApp = require(path.join(__dirname, ".next/standalone"));

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

nextApp.prepare().then(() => {
  const handle = nextApp.getRequestHandler();

  const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
