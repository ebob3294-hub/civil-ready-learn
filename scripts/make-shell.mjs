import { writeFileSync, mkdirSync, existsSync, cpSync } from "node:fs";
import { dirname } from "node:path";

// 1. استيراد الخادم المولد من Nitro
const mod = await import("../.output/server/index.mjs");

const ctx = { waitUntil() {}, passThroughOnException() {} };
const res = await mod.default.fetch(new Request("http://localhost/"), {}, ctx);
if (!res.ok) throw new Error(`Render failed with status ${res.status}`);

let html = await res.text();

// 2. تحويل المسارات المطلقة إلى مسارات نسبية لتطبيق الموبايل
html = html.replace(/src="\/_build\//g, 'src="./_build/');
html = html.replace(/href="\/_build\//g, 'href="./_build/');
html = html.replace(/href="\//g, 'href="./');
html = html.replace(/src="\//g, 'src="./');

// 3. نسخ كافة الملفات والأصول الثابتة إلى مجلد dist
if (existsSync(".output/public")) {
  cpSync(".output/public", "dist", { recursive: true });
  console.log("[shell] Copied .output/public assets to dist/");
}

// 4. كتابة ملف index.html النهائي المعدل
const targetPath = "dist/index.html";
const dir = dirname(targetPath);
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

writeFileSync(targetPath, html);
console.log(`[shell] ${targetPath} written with relative asset paths (${html.length} bytes)`);