// Planos da Sebra. RASCUNHO: nomes, itens e PREÇOS serão fechados com o time.
// Os planos servem a qualquer ramo; Licitações é um módulo que se soma a
// qualquer plano.
//
// Para publicar um preço: troque `preco: null` por, por exemplo,
//   preco: { valor: "R$ 497", periodo: "/mês", nota: "no plano anual" }
// `null` mostra "Valor sob consulta".

export type Plano = {
  slug: string;
  nome: string;
  publico: string;
  resumo: string;
  preco: null | { valor: string; periodo?: string; nota?: string };
  implantacao?: string;
  destaque?: boolean;
  addon?: boolean;
  itens: string[];
};

export const planos: Plano[] = [
  {
    slug: "essencial",
    nome: "Essencial",
    publico: "Para organizar a empresa, emitir nota e controlar o dinheiro.",
    resumo: "O básico bem feito, num sistema só.",
    preco: { valor: "R$ 417", periodo: "/mês" },
    itens: [
      "Financeiro: contas a pagar e receber e fluxo de caixa",
      "Notas fiscais: NF-e, NFS-e e NFC-e",
      "Orçamentos em PDF que viram nota",
      "Clientes com consulta de CNPJ na Receita",
      "Cadastro de produtos e serviços",
      "Relatórios em Excel e PDF",
    ],
  },
  {
    slug: "profissional",
    nome: "Profissional",
    publico: "Para quem quer o financeiro no automático e o lucro real do mês.",
    resumo: "Automação, margem e controle para crescer.",
    preco: { valor: "R$ 689", periodo: "/mês" },
    destaque: true,
    itens: [
      "Tudo do Essencial",
      "Conciliação automática do extrato",
      "Boleto com baixa automática",
      "DRE e lucro real do mês",
      "Formação de preço e estoque com reposição",
      "Compras com cotação e aprovação",
      "Comissões de vendedores",
      "Painéis gerenciais e funil de vendas",
    ],
  },
  {
    slug: "empresarial",
    nome: "Empresarial",
    publico: "Para grupos com vários CNPJs, equipe maior e operação própria.",
    resumo: "A Sebra inteira, consolidada entre empresas.",
    preco: null,
    itens: [
      "Tudo do Profissional",
      "Multi-empresa com resultado consolidado",
      "Aprovações por valor e por área",
      "Perfis e permissões por pessoa",
      "Painéis por área, metas e relatórios",
      "PDV, ordens de serviço, frota, produção e obras",
      "Atendimento no WhatsApp",
    ],
  },
  {
    slug: "licitacoes",
    nome: "Licitações e Contratos Públicos",
    publico: "Módulo para quem vende ao governo. Soma-se a qualquer plano.",
    resumo: "Do edital ao dinheiro na conta.",
    preco: null,
    addon: true,
    itens: [
      "Busca de editais no PNCP",
      "Prazos, habilitação e certidões com aviso",
      "Contratos com saldo por item",
      "Empenhos calculados pelas notas",
      "AF em PDF que vira nota",
      "Quadro Kanban ligado ao status de cada licitação",
      "Compras ligadas ao contrato",
      "Resultado por licitação",
    ],
  },
];
