// Sitemap gerado no build a partir das páginas reais do site.
// O Google lê em https://sebraoficial.com/sitemap.xml
// lastmod = data do último commit que mexeu no arquivo da página (o Google
// ignora lastmod que muda a cada build, por isso não usamos a data de hoje).
import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { getCollection } from "astro:content";
import { solucoes } from "../data/solucoes";
import { segmentos } from "../data/segmentos";

const SITE = "https://sebraoficial.com";
const hoje = new Date().toISOString().slice(0, 10);

// Data do último commit dos arquivos (o mais recente entre eles); sem git, hoje.
const gitDate = (...files: string[]) => {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], { encoding: "utf8" }).trim();
    return out || hoje;
  } catch { return hoje; }
};
const base = ["src/layouts/Base.astro", "src/data/site.ts"];
const pag = (file: string, ...extra: string[]) => gitDate(file, ...extra, ...base);

export const GET: APIRoute = async () => {
  const guias = await getCollection("guias");
  const paginas: { path: string; lastmod: string; img?: string }[] = [
    { path: "/", lastmod: pag("src/pages/index.astro", "src/data/faq.ts") },
    { path: "/licitacoes/", lastmod: pag("src/pages/licitacoes.astro") },
    { path: "/automacoes/", lastmod: pag("src/pages/automacoes.astro", "src/data/automacoes.ts") },
    { path: "/planos/", lastmod: pag("src/pages/planos.astro", "src/data/planos.ts") },
    ...solucoes.map((s) => ({ path: `/solucoes/${s.slug}/`, lastmod: pag("src/pages/solucoes/[slug].astro", "src/data/solucoes.ts") })),
    ...segmentos.map((s) => ({ path: `/segmentos/${s.slug}/`, lastmod: pag("src/pages/segmentos/[slug].astro", "src/data/segmentos.ts") })),
    { path: "/guias/", lastmod: guias.reduce((m, g) => { const d = (g.data.updated ?? g.data.published).toISOString().slice(0, 10); return d > m ? d : m; }, "2026-01-01") },
    ...guias.map((g) => ({ path: `/guias/${g.id}/`, lastmod: (g.data.updated ?? g.data.published).toISOString().slice(0, 10), img: `${SITE}/og/${g.id}.png` })),
    { path: "/integracoes/", lastmod: pag("src/pages/integracoes.astro") },
    { path: "/seguranca/", lastmod: pag("src/pages/seguranca.astro") },
    { path: "/empresa/", lastmod: pag("src/pages/empresa.astro") },
    { path: "/privacidade/", lastmod: pag("src/pages/privacidade.astro") },
    { path: "/termos/", lastmod: pag("src/pages/termos.astro") },
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${paginas.map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${p.lastmod}</lastmod>${p.img ? `<image:image><image:loc>${p.img}</image:loc></image:image>` : ""}</url>`).join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
