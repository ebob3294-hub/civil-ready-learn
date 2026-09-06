// Renders the home page of the built app to dist/client/index.html so the whole
// app can run from local files (Capacitor Android / offline). Run after `bun run build`.
import { writeFileSync } from "node:fs";

const mod = await import("../dist/server/index.mjs");

const ctx = { waitUntil() {}, passThroughOnException() {} };
const res = await mod.default.fetch(new Request("http://localhost/"), {}, ctx);
if (!res.ok) throw new Error(`Render failed with status ${res.status}`);

const html = await res.text();
writeFileSync("dist/client/index.html", html);
console.log(`[shell] dist/client/index.html written (${html.length} bytes)`);
