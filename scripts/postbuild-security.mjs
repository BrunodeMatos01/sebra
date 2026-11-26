// Pós-build: monta a Content-Security-Policy com o hash SHA-256 de cada
// script embutido no HTML gerado e grava em dist/.htaccess (no lugar de __CSP__).
// Assim só os scripts que NÓS escrevemos rodam; qualquer script injetado é bloqueado.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const htmlFiles = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith(".html") ? [p] : [];
});

// Ferramentas ligadas em src/data/site.ts: cada uma libera só os domínios dela.
const siteTs = readFileSync(new URL("../src/data/site.ts", import.meta.url), "utf8");
const on = (k) => new RegExp(k + ': *"[^"]+"').test(siteTs);
const extra = { script: [], connect: [], img: [], frame: [] };
if (on("clarityId")) {
  extra.script.push("https://www.clarity.ms", "https://scripts.clarity.ms");
  extra.connect.push("https://*.clarity.ms", "https://c.bing.com");
  extra.img.push("https://*.clarity.ms", "https://c.bing.com");
}
if (on("metaPixelId")) {
  extra.script.push("https://connect.facebook.net");
  extra.connect.push("https://www.facebook.com", "https://connect.facebook.net");
  extra.img.push("https://www.facebook.com");
}
if (on("googleAdsId")) {
  extra.script.push("https://www.googleadservices.com", "https://googleads.g.doubleclick.net");
  extra.connect.push("https://www.googleadservices.com", "https://googleads.g.doubleclick.net", "https://www.google.com", "https://*.doubleclick.net");
  extra.img.push("https://www.googleadservices.com", "https://googleads.g.doubleclick.net", "https://www.google.com", "https://www.google.com.br", "https://*.doubleclick.net");
  extra.frame.push("https://td.doubleclick.net", "https://www.googletagmanager.com");
}
const x = (k) => (extra[k].length ? " " + extra[k].join(" ") : "");

const hashes = new Set();
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
    const attrs = m[1];
    if (/type="application\/ld\+json"/.test(attrs)) continue; // bloco de dados, não executa
    hashes.add(`'sha256-${createHash("sha256").update(m[2], "utf8").digest("base64")}'`);
  }
}

const csp = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].join(" ")} https://www.googletagmanager.com${x("script")}`,
  `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://api.emailjs.com${x("connect")}`,
  `img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com${x("img")}`,
  // Folhas de estilo só do próprio site; estilo em atributo liberado (sem risco de execução)
  "style-src 'self' 'unsafe-inline'",
  "style-src-elem 'self'",
  "style-src-attr 'unsafe-inline'",
  "font-src 'self'",
  "worker-src 'none'",
  extra.frame.length ? `frame-src ${extra.frame.join(" ")}` : "frame-src 'none'",
  "media-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const htPath = join(DIST, ".htaccess");
const ht = readFileSync(htPath, "utf8");
if (!ht.includes("__CSP__")) { console.error("✗ .htaccess sem o marcador __CSP__"); process.exit(1); }
writeFileSync(htPath, ht.replace("__CSP__", csp));
console.log(`✓ CSP gerada com ${hashes.size} hash(es) de script embutido${extra.script.length ? ` + ferramentas: ${[on("clarityId") && "Clarity", on("metaPixelId") && "Meta Pixel", on("googleAdsId") && "Google Ads"].filter(Boolean).join(", ")}` : ""}`);
