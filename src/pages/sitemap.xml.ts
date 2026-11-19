// Sitemap gerado no build a partir das páginas reais do site.
// O Google lê em https://sebraoficial.com/sitemap.xml
import type { APIRoute } from "astro";
import { solucoes } from "../data/solucoes";
import { segmentos } from "../data/segmentos";

const SITE = "https://sebraoficial.com";
const hoje = new Date().toISOString().slice(0, 10);

const paginas: { path: string; prioridade: string; freq: string }[] = [
  { path: "/", prioridade: "1.0", freq: "weekly" },
  { path: "/licitacoes/", prioridade: "0.95", freq: "weekly" },
  { path: "/automacoes/", prioridade: "0.95", freq: "weekly" },
  { path: "/planos/", prioridade: "0.9", freq: "weekly" },
  ...solucoes.map((s) => ({ path: `/solucoes/${s.slug}/`, prioridade: ["financeiro", "fiscal", "orcamentos"].includes(s.slug) ? "0.85" : "0.75", freq: "monthly" })),
  ...segmentos.map((s) => ({ path: `/segmentos/${s.slug}/`, prioridade: "0.75", freq: "monthly" })),
  { path: "/integracoes/", prioridade: "0.6", freq: "monthly" },
  { path: "/seguranca/", prioridade: "0.5", freq: "monthly" },
  { path: "/empresa/", prioridade: "0.5", freq: "monthly" },
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas.map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${hoje}</lastmod><changefreq>${p.freq}</changefreq><priority>${p.prioridade}</priority></url>`).join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
