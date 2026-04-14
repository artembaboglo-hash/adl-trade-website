// Entrypoint for the Next.js standalone server in Docker / Railway.
// The standalone build produces a self-contained server.js inside
// .next/standalone — we change into that directory and require it directly.

"use strict";

process.env.NODE_ENV = "production";

const path = require("path");

// Change into the standalone directory so that all relative paths inside
// the generated server.js (e.g. static file references) resolve correctly.
process.chdir(path.join(__dirname, ".next/standalone"));

// Execute the Next.js standalone server.
require("./server.js");
