// Auditoria de segurança do build (roda sozinha no `npm run build`).
// Reprova (sai com erro) se encontrar qualquer problema.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { createHash } from "node:crypto";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(DIST);
const html = files.filter((f) => f.endsWith(".html"));
const js = files.filter((f) => f.endsWith(".js"));
const site = readFileSync(new URL("../src/data/site.ts", import.meta.url), "utf8");
const emailBackup = /emailBackup:\s*true/.test(site);

const falhas = [];
const ok = [];
const check = (nome, problemas) => (problemas.length ? falhas.push([nome, problemas]) : ok.push(nome));
const rel = (f) => relative(DIST, f);

// 1. Segredos
const segredos = [/service_role/i, /sk_live_/, /-----BEGIN [A-Z ]*PRIVATE KEY-----/, /AKIA[0-9A-Z]{16}/, /AIza[0-9A-Za-z_-]{35}/, /eyJhbGciOi[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}/];
if (!emailBackup) segredos.push(/5Ab4I5uTYBE3nBaqW/, /service_20obt8c/, /template_e00usba/);
check("Nenhum segredo ou chave exposta", files.filter((f) => !/\.(png|jpg|ico)$/.test(f)).flatMap((f) => {
  const c = readFileSync(f, "utf8"); return segredos.filter((r) => r.test(c)).map((r) => `${rel(f)}: ${r}`);
}));

// 2. Source maps e arquivos que não deveriam ir para o ar
check("Sem source maps nem arquivos sensíveis", files.filter((f) => /\.(map|env|md|bak|sql|log)$/.test(f)).map(rel));

// 3. Conteúdo misto
check("Nenhum recurso em http:// (só https)", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/(?:src|href)="http:\/\/[^"]+"/g)].map((m) => `${rel(f)}: ${m[0]}`)));

// 4. Abas novas sem noopener (reverse tabnabbing)
check("Todo link em nova aba tem rel=noopener", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].filter((m) => !/rel="[^"]*noopener/.test(m[0])).map((m) => `${rel(f)}: ${m[0].slice(0, 90)}`)));

// 5. Sem eventos inline (onclick= etc.) — a CSP bloquearia e são vetor de XSS
check("Sem atributos de evento inline (onclick, onerror...)", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<[^>]+\son[a-z]+=["'][^>]*>/gi)].map((m) => `${rel(f)}: ${m[0].slice(0, 80)}`)));

// 6. JS sem sinks perigosos
check("JS sem eval, new Function, document.write ou innerHTML", js.flatMap((f) => {
  const c = readFileSync(f, "utf8");
  return [/\beval\(/, /new Function\(/, /document\.write\(/, /\.innerHTML\s*=/, /\.outerHTML\s*=/, /insertAdjacentHTML\(/].filter((r) => r.test(c)).map((r) => `${rel(f)}: ${r}`);
}));

// 7. Scripts externos só de origens autorizadas
const permitidos = ["https://www.googletagmanager.com/"];
check("Scripts externos só de origens autorizadas", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<script[^>]*\ssrc="(https?:[^"]+)"/g)].filter((m) => !permitidos.some((p) => m[1].startsWith(p))).map((m) => `${rel(f)}: ${m[1]}`)));

// 8. Cabeçalhos de segurança e CSP completa
const htPath = join(DIST, ".htaccess");
const ht = existsSync(htPath) ? readFileSync(htPath, "utf8") : "";
const exigidos = ["Strict-Transport-Security", "Content-Security-Policy", "X-Frame-Options \"DENY\"", "X-Content-Type-Options", "Referrer-Policy", "Permissions-Policy", "Cross-Origin-Opener-Policy", "Options -Indexes", "frame-ancestors 'none'", "object-src 'none'", "base-uri 'none'", "script-src-attr 'none'", "includeSubDomains", "THE_REQUEST", "X-Original-URL"];
check(".htaccess com todos os cabeçalhos de segurança", [...(ht.includes("__CSP__") ? ["CSP não foi preenchida (__CSP__)"] : []), ...exigidos.filter((h) => !ht.includes(h)).map((h) => `falta: ${h}`)]);

// 9. Todo script embutido está liberado na CSP (senão o site quebra)
const cspLine = (ht.match(/Content-Security-Policy "([^"]+)"/) || [])[1] || "";
check("Todo script embutido tem hash na CSP", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)]
  .filter((m) => !/application\/ld\+json/.test(m[1]))
  .map((m) => `'sha256-${createHash("sha256").update(m[2], "utf8").digest("base64")}'`)
  .filter((h) => !cspLine.includes(h)).map((h) => `${rel(f)}: ${h}`)));

// 10. Nenhum estilo embutido (<style>) — a CSP só aceita folhas de estilo do próprio site
check("Sem <style> embutido (CSS só em arquivo)", html.flatMap((f) => (readFileSync(f, "utf8").match(/<style[\s>]/g) || []).map(() => rel(f))));

// 11. Nenhum terceiro além do Google Analytics (fontes, CDNs...)
check("Sem terceiros além do Google Analytics", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<(?:link|script|img|iframe)[^>]+(?:href|src)="(https?:\/\/[^"\/]+)/g)]
  .filter((m) => !["https://www.googletagmanager.com", "https://sebraoficial.com"].includes(m[1])).map((m) => `${rel(f)}: ${m[1]}`)));

// 12. Firewall do .htaccess presente
const waf = ["QUERY_STRING", "HTTP_USER_AGENT", "wp-admin", "jndi", "Options -Indexes", "style-src-elem 'self'"];
check("Firewall e CSP rígida no .htaccess", waf.filter((w) => !ht.includes(w)).map((w) => `falta: ${w}`));

// 12b. CSP sem 'unsafe-eval', sem curinga em script e sem domínio sobrando
check("CSP sem 'unsafe-eval', sem curinga em script e sem domínio sobrando", [
  ...(cspLine.includes("'unsafe-eval'") ? ["'unsafe-eval' presente"] : []),
  ...(/script-src [^;]*( \*|https: |http:)/.test(cspLine) ? ["script-src com curinga"] : []),
  ...(!emailBackup && cspLine.includes("emailjs") ? ["api.emailjs.com liberado com o e-mail desligado"] : []),
]);

// 12c. Nenhum detalhe técnico de segurança exposto nas páginas
check("Páginas não expõem o mecanismo de segurança", html.flatMap((f) => (/AES-?256|row level security/i.test(readFileSync(f, "utf8")) ? [rel(f)] : [])));

// 12d. Formulários não enviam para outro site
check("Formulários sem envio externo", html.flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<form[^>]*\saction="(https?:[^"]+)"/g)].map((m) => rel(f) + ": " + m[1])));

// 13. security.txt
check("/.well-known/security.txt publicado", existsSync(join(DIST, ".well-known", "security.txt")) ? [] : ["ausente"]);

console.log("\nAuditoria de segurança do site\n" + "-".repeat(32));
ok.forEach((n) => console.log(`✓ ${n}`));
falhas.forEach(([n, p]) => { console.log(`✗ ${n}`); p.slice(0, 8).forEach((x) => console.log(`    ${x}`)); });
console.log(`\n${ok.length} aprovados, ${falhas.length} reprovados\n`);
process.exit(falhas.length ? 1 : 0);
