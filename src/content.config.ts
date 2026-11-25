// Central de guias (/guias/): cada arquivo .md em src/content/guias vira uma página.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guias" }),
  schema: z.object({
    title: z.string(),                       // H1
    seoTitle: z.string().max(62),            // <title>
    description: z.string().min(110).max(165),
    categoria: z.enum(["Licitações", "Financeiro", "Fiscal", "Gestão", "Automação"]),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    resumo: z.string(),                      // caixa "Resposta rápida" no topo (vira trecho em destaque)
    cta: z.enum(["licitacoes", "financeiro", "fiscal", "orcamentos", "estoque", "automacoes", "geral"]).default("geral"),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { guias };
