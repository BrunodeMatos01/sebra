// Servidor local que imita a Hostinger: serve dist/ com os MESMOS cabeçalhos
// de segurança do .htaccess. Serve para testar se a CSP não quebra nada
// antes de subir. Uso: npm run preview:secure  →  http://localhost:4322
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, normalize, extname } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PORT = Number(process.env.PORT || 4322);
const ht = readFileSync(join(DIST, ".htaccess"), "utf8");
const headers = Object.fromEntries([...ht.matchAll(/Header always set ([\w-]+) "([^"]+)"/g)].map((m) => [m[1], m[2]]));
delete headers["Strict-Transport-Security"]; // localhost não tem HTTPS
headers["Content-Security-Policy"] = headers["Content-Security-Policy"].replace("; upgrade-insecure-requests", "");

const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8", ".webmanifest": "application/manifest+json" };

createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  if (!["GET", "HEAD"].includes(req.method || "")) { res.writeHead(405, headers).end(); return; }
  if (/(^|\/)\.(?!well-known\/)/.test(url) || /\.(map|md|json|env)$/i.test(url)) { res.writeHead(403, headers).end("Forbidden"); return; }
  // Mesmo firewall do .htaccess
  const qs = (req.url || "").split("?")[1] || "";
  const waf = [
    /(<|%3C)[^>]*(script|iframe|svg|img|object|embed)/i,
    /(javascript|vbscript|data)(:|%3A)/i,
    /(\.\.\/|\.\.\\|%2e%2e|%252e)/i,
    /(union(\s|\+|%20)+(all(\s|\+|%20)+)?select|select(\s|\+|%20).+from|insert(\s|\+|%20)+into|drop(\s|\+|%20)+table|sleep\(|benchmark\()/i,
    /(etc\/passwd|proc\/self|boot\.ini|win\.ini|cmd\.exe|\/bin\/sh|base64_decode|eval\()/i,
    /(\$\{jndi:|%24%7Bjndi)/i,
  ];
  const ua = String(req.headers["user-agent"] || "");
  const badUa = /(sqlmap|nikto|nmap|masscan|acunetix|netsparker|wpscan|dirbuster|gobuster|feroxbuster|nuclei|havij|zgrab|jaeles|commix|w3af)/i;
  const badPath = /^\/(wp-admin|wp-login\.php|wp-content|wp-includes|xmlrpc\.php|phpmyadmin|pma|adminer|cgi-bin|vendor|node_modules|server-status|\.git|\.svn|\.env|config\.php|admin\.php|shell\.php)/i;
  if (waf.some((r) => r.test(qs)) || badUa.test(ua) || badPath.test(url)) { res.writeHead(403, headers).end("Forbidden"); return; }
  let p = normalize(join(DIST, url));
  if (!p.startsWith(normalize(DIST))) { res.writeHead(403, headers).end(); return; } // path traversal
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, "index.html");
  const found = existsSync(p);
  const file = found ? p : join(DIST, "404.html");
  res.writeHead(found ? 200 : 404, { ...headers, "Content-Type": types[extname(file)] || "application/octet-stream" });
  res.end(req.method === "HEAD" ? undefined : readFileSync(file));
}).listen(PORT, () => console.log(`Servidor seguro de teste em http://localhost:${PORT}`));
