// Entrypoint for the Next.js standalone server in Docker / Railway.
// Next.js standalone mode generates `.next/standalone/server.js` during the
// build; this wrapper ensures NODE_ENV is set and changes into that directory
// before requiring it, which is required for the generated server to resolve
// its own assets correctly.

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const path = require("path");
process.chdir(path.join(__dirname, ".next/standalone"));

require("./.next/standalone/server.js");
