// Planos da Sebra. Licitação incluída a partir do Profissional (adicional no Essencial).
// `preco: null` mostra "Valor sob consulta"; `prefixo` aparece antes do valor
// (ex.: "A partir de"). A tabela comparativa da página de planos lê `recursos`.

export type Plano = {
  slug: string;
  nome: string;
  publico: string;
  resumo: string;
  preco: null | { valor: string; periodo?: string; prefixo?: string; nota?: string };
  cta: string;
  destaque?: boolean;
  itens: string[];
};

export const planos: Plano[] = [
  {
    slug: "essencial",
    nome: "Essencial",
    publico: "Para prestadores de serviço e empresas que querem se organizar.",
    resumo: "Nota fiscal, orçamentos e financeiro num sistema só.",
    preco: { valor: "R$ 327", periodo: "/mês" },
    cta: "Assinar",
    itens: [
      "Notas fiscais NF-e e NFS-e ilimitadas",
      "Orçamentos que viram nota",
      "Financeiro e A Receber com baixa pelo extrato",
      "Contatos e serviços",
      "Boleto em 1 banco",
      "2 usuários · 1 CNPJ",
      "Suporte todos os dias pelo WhatsApp",
    ],
  },
  {
    slug: "profissional",
    nome: "Profissional",
    publico: "Para quem vende para o governo, compra e revende.",
    resumo: "Tudo do Essencial, com licitação, compras e estoque.",
    preco: { valor: "R$ 565", periodo: "/mês" },
    cta: "Assinar",
    destaque: true,
    itens: [
      "Tudo do Essencial",
      "Licitação, funil e contratos públicos com saldo e empenho",
      "Resultado por licitação",
      "Compras e estoque",
      "Conecte a IA da sua empresa (via API)",
      "Boleto em até 2 bancos",
      "3 usuários · 1 CNPJ",
      "Suporte todos os dias pelo WhatsApp",
    ],
  },
  {
    slug: "escala",
    nome: "Escala",
    publico: "Para grupos com mais de um CNPJ e volume alto.",
    resumo: "Tudo do Profissional, para várias empresas.",
    preco: { prefixo: "A partir de", valor: "R$ 990", periodo: "/mês", nota: "sob consulta" },
    cta: "Falar com a equipe",
    itens: [
      "Tudo do Profissional",
      "Até 3 CNPJs",
      "Boleto em até 7 bancos",
      "8 usuários",
      "Suporte todos os dias, com canal direto",
    ],
  },
];

// Tabela comparativa (linhas exatamente como definidas pelo time comercial).
export type Celula = boolean | string;
// ampliavel: a linha pode ser ampliada com adicionais (marcada com o "+" azul).
export const recursos: { nome: string; valores: [Celula, Celula, Celula]; ampliavel?: boolean }[] = [
  { nome: "Licitações e contratos públicos", valores: ["Adicional", true, true] },
  { nome: "Resultado por licitação", valores: ["Adicional", true, true] },
  { nome: "Notas fiscais NF-e e NFS-e", valores: ["Ilimitadas", "Ilimitadas", "Ilimitadas"] },
  { nome: "Financeiro com baixa pelo extrato", valores: [true, true, true] },
  { nome: "Boleto", valores: ["1 banco", "Até 2 bancos", "Até 7 bancos"], ampliavel: true },
  { nome: "Compras e estoque", valores: [false, true, true] },
  { nome: "IA da sua empresa (via API)", valores: [false, true, true] },
  { nome: "Usuários", valores: ["2", "3", "8"], ampliavel: true },
  { nome: "CNPJs", valores: ["1", "1", "Até 3"], ampliavel: true },
];
