// Imagem de compartilhamento (1200x630) gerada no build para cada guia.
// Aparece no WhatsApp, LinkedIn, Facebook e no Google Discover.
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import sharp from "sharp";
import { readFileSync } from "node:fs";

export const getStaticPaths: GetStaticPaths = async () =>
  (await getCollection("guias")).map((g) => ({ params: { slug: g.id }, props: { title: g.data.title, cat: g.data.categoria } }));

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Quebra o título em linhas de ~26 caracteres (máx. 4 linhas).
const wrap = (s: string, max = 26) => {
  const out: string[] = [];
  let line = "";
  for (const w of s.split(" ")) {
    if ((line + " " + w).trim().length > max && line) { out.push(line); line = w; } else line = (line + " " + w).trim();
  }
  if (line) out.push(line);
  if (out.length > 4) { out.length = 4; out[3] = out[3].replace(/\s*\S*$/, "") + "…"; }
  return out;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, cat } = props as { title: string; cat: string };
  const lines = wrap(title);
  const size = lines.length > 3 ? 58 : 66;
  const startY = lines.length > 3 ? 310 : 330;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1442"/><stop offset=".6" stop-color="#070d2e"/><stop offset="1" stop-color="#050a24"/></linearGradient>
    <radialGradient id="gl" cx=".85" cy=".1" r=".6"><stop offset="0" stop-color="#2f5bff" stop-opacity=".55"/><stop offset="1" stop-color="#2f5bff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#gl)"/>
  <rect x="80" y="0" width="1040" height="6" fill="#3d8bff"/>
  <text x="196" y="118" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Sebra</text>
  <text x="196" y="150" font-family="Segoe UI, Arial, sans-serif" font-size="20" fill="#93a3c4">Guias para empresas</text>
  <rect x="80" y="200" rx="18" ry="18" width="${cat.length * 15 + 44}" height="38" fill="#0857ff" fill-opacity=".28" stroke="#6ea0ff" stroke-opacity=".5"/>
  <text x="102" y="226" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="700" fill="#cfe0ff" letter-spacing="1">${esc(cat.toUpperCase())}</text>
  ${lines.map((l, i) => `<text x="80" y="${startY + i * size * 1.12}" font-family="Segoe UI, Arial, sans-serif" font-size="${size}" font-weight="800" fill="#ffffff">${esc(l)}</text>`).join("\n  ")}
  <text x="80" y="570" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="600" fill="#b7c4de">sebraoficial.com/guias</text>
</svg>`;
  const logo = await sharp(readFileSync("public/img/logo-tile-128.png")).resize(92).toBuffer();
  const png = await sharp(Buffer.from(svg)).composite([{ input: logo, left: 86, top: 70 }]).png({ compressionLevel: 9, palette: true }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
