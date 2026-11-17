// Verifica TODOS os links internos do site gerado: cada href/src que começa
// com "/" precisa apontar para um arquivo que existe, e cada âncora (#id)
// precisa existir na página de destino. Reprova o build se algo quebrar.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const pages = walk(DIST).filter((f) => f.endsWith(".html"));
const ids = new Map(); // arquivo -> Set de ids
const idsOf = (file) => {
  if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
};
const resolve = (path) => {
  const clean = decodeURIComponent(path.split("?")[0]);
  const p = join(DIST, clean);
  if (existsSync(p) && statSync(p).isFile()) return p;
  if (existsSync(join(p, "index.html"))) return join(p, "index.html");
  return null;
};

const quebrados = [];
let total = 0;
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(url)) continue;
    total++;
    const [path, hash] = url.split("#");
    const target = path === "" ? page : path.startsWith("/") ? resolve(path) : resolve(join(relative(DIST, page), "..", path).replace(/\\/g, "/"));
    if (!target) { quebrados.push(`${relative(DIST, page)} → ${url} (página não existe)`); continue; }
    if (hash && target.endsWith(".html") && !idsOf(target).has(hash)) quebrados.push(`${relative(DIST, page)} → ${url} (âncora #${hash} não existe)`);
  }
}
console.log(`\nVerificação de links: ${total} links internos em ${pages.length} páginas`);
if (quebrados.length) { quebrados.forEach((q) => console.log(`✗ ${q}`)); console.log(`${quebrados.length} quebrado(s)\n`); process.exit(1); }
console.log("✓ Nenhum link quebrado\n");
