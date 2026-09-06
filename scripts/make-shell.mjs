// Generates dist/client/index.html : an offline "shell" page that boots the app
// entirely in the browser (no server). Used to package the app inside Capacitor.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clientDir = "dist/client";
const serverDir = "dist/server";

const manifestFile = readdirSync(serverDir).find((f) =>
  f.startsWith("_tanstack-start-manifest_v-"),
);
if (!manifestFile) {
  throw new Error("Build output not found: run `bun run build` first.");
}
const manifest = readFileSync(join(serverDir, manifestFile), "utf8");

const entry = manifest.match(/src:\s*"(\/assets\/[^"]+\.js)"/)?.[1];
if (!entry) throw new Error("Could not find the client entry script in the build output.");

const css = readdirSync(join(clientDir, "assets"))
  .filter((f) => f.endsWith(".css"))
  .map((f) => `/assets/${f}`);

const html = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>Formation Protection Civile</title>
    <meta name="theme-color" content="#8c1c1c" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="icon" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/icons/icon-192.png" />
${css.map((href) => `    <link rel="stylesheet" href="${href}" />`).join("\n")}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${entry}"></script>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`[shell] dist/client/index.html written (entry ${entry})`);
