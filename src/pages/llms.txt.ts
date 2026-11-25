// /llms.txt: resumo do site para buscadores com IA (ChatGPT, Perplexity, Gemini, Claude).
// Ajuda a Sebra a ser citada quando alguém pergunta "qual sistema usar para licitação".
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { solucoes } from "../data/solucoes";
import { segmentos } from "../data/segmentos";
import { site } from "../data/site";

export const GET: APIRoute = async () => {
  const guias = await getCollection("guias");
  const u = (p: string) => `${site.url}${p}`;
  const txt = `# Sebra

> Sebra é um sistema de licitação e ERP brasileiro para empresas, com foco em quem vende para o governo. Reúne busca de editais no PNCP, quadro Kanban de licitações, controle de certidões, contratos públicos (Lei 14.133) com saldo e vigência, empenhos, notas fiscais com retenções, boleto com baixa automática, conciliação bancária, DRE, fluxo de caixa, estoque, compras e orçamentos, além de automação de processos sob medida.

Contato comercial: WhatsApp ${site.whatsappDisplay} (https://wa.me/${site.whatsapp}) · ${site.email}
Planos e preços: ${u("/planos/")}

## Principais páginas
- [Sistema para licitações e contratos públicos](${u("/licitacoes/")})
- [Automação de processos](${u("/automacoes/")})
- [Planos e preços](${u("/planos/")})
- [Segurança e proteção de dados](${u("/seguranca/")})
- [Integrações](${u("/integracoes/")})

## Módulos do ERP
${solucoes.map((s) => `- [${s.nav}](${u(`/solucoes/${s.slug}/`)}): ${s.seoDesc}`).join("\n")}

## Segmentos
${segmentos.map((s) => `- [${s.nav}](${u(`/segmentos/${s.slug}/`)}): ${s.seoDesc}`).join("\n")}

## Guias
${guias.map((g) => `- [${g.data.title}](${u(`/guias/${g.id}/`)}): ${g.data.description}`).join("\n")}
`;
  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
