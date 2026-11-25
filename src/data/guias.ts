// Ligações entre os guias e o produto: cada guia termina chamando para o módulo certo.
import { waMsg } from "./site";

export type CtaKey = "licitacoes" | "financeiro" | "fiscal" | "orcamentos" | "estoque" | "automacoes" | "geral";

export const ctas: Record<CtaKey, { t: string; d: string; href: string; label: string; wa: string }> = {
  licitacoes: {
    t: "Organize suas licitações do edital ao recebimento",
    d: "Busca no PNCP, quadro Kanban, certidões com alerta de vencimento, saldo de contratos e empenhos, e o lucro de cada licitação.",
    href: "/licitacoes/", label: "Ver o módulo de licitações", wa: waMsg.licitacao,
  },
  financeiro: {
    t: "Veja o lucro real do mês sem planilha",
    d: "Conciliação automática do extrato, boleto com baixa sozinha, DRE por competência e fluxo de caixa num sistema só.",
    href: "/solucoes/financeiro/", label: "Ver o financeiro da Sebra", wa: "Olá! Quero ver o financeiro da Sebra (DRE, conciliação e fluxo de caixa).",
  },
  fiscal: {
    t: "Emita NF-e e NFS-e com retenções no mesmo sistema",
    d: "Notas com retenções calculadas, ligadas ao financeiro e ao estoque. Notas ilimitadas em todos os planos.",
    href: "/solucoes/fiscal/", label: "Ver o emissor de notas", wa: "Olá! Quero ver a emissão de notas fiscais da Sebra.",
  },
  orcamentos: {
    t: "Orçamento profissional que vira nota com um clique",
    d: "Monte, envie, aprove e fature sem redigitar nada.",
    href: "/solucoes/orcamentos/", label: "Ver orçamentos", wa: "Olá! Quero ver o módulo de orçamentos da Sebra.",
  },
  estoque: {
    t: "Preço calculado do jeito certo e estoque sob controle",
    d: "Formação de preço com impostos e margem, e estoque que se atualiza a cada nota.",
    href: "/solucoes/estoque/", label: "Ver estoque e preços", wa: "Olá! Quero ver o estoque e a formação de preço da Sebra.",
  },
  automacoes: {
    t: "Automatize o processo que toma o tempo da sua equipe",
    d: "Robôs, integrações e rotinas sob medida, desenhadas em cima da sua operação.",
    href: "/automacoes/", label: "Ver automações", wa: "Olá! Quero automatizar processos da minha empresa.",
  },
  geral: {
    t: "Sua empresa inteira num sistema só",
    d: "Licitações, notas fiscais, orçamentos, estoque e financeiro integrados.",
    href: "/", label: "Conhecer a Sebra", wa: waMsg.geral,
  },
};

export const categorias = ["Licitações", "Financeiro", "Fiscal", "Gestão", "Automação"] as const;

// Tempo de leitura (pt-BR ~ 200 palavras por minuto).
export const leitura = (md: string) => Math.max(2, Math.round(md.split(/\s+/).length / 200));

export const dataBR = (d: Date) => d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
