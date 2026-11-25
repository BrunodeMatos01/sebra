// Feed RSS dos guias: leitores de notícias, agregadores e o Google descobrem conteúdo novo mais rápido.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://sebraoficial.com";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async () => {
  const guias = (await getCollection("guias")).sort((a, b) => +b.data.published - +a.data.published);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Guias Sebra: licitação, fiscal e gestão</title>
  <link>${SITE}/guias/</link>
  <description>Guias práticos para vender para o governo e organizar a empresa.</description>
  <language>pt-BR</language>
  <atom:link href="${SITE}/guias/rss.xml" rel="self" type="application/rss+xml" />
${guias.map((g) => `  <item>
    <title>${esc(g.data.title)}</title>
    <link>${SITE}/guias/${g.id}/</link>
    <guid isPermaLink="true">${SITE}/guias/${g.id}/</guid>
    <pubDate>${g.data.published.toUTCString()}</pubDate>
    <category>${esc(g.data.categoria)}</category>
    <description>${esc(g.data.description)}</description>
  </item>`).join("\n")}
</channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
