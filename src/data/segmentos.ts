// Páginas por ramo de negócio. Cada uma é uma porta de entrada no Google
// ("sistema para importadora", "sistema para prestador de serviço"...), então o
// título, a descrição e as perguntas usam as palavras que o cliente busca.
// Fornecedores do governo têm página própria: /licitacoes/.
// REGRA: só entra o que existe na plataforma (importação conferida no código em 26/11/2026).

import type { Pain, Feature, Faq, MockKey } from "./solucoes";
import type { MockSpec } from "./mock-types";

export type Segmento = {
  slug: string;
  nav: string;
  menuDesc: string;
  icon: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  lead: string;
  intro: string;
  pains: Pain[];
  features: Feature[];
  modulos: { nome: string; href: string }[];
  faq: Faq[];
  mock: MockKey | MockSpec | "importacao";
  gov: string;
  closing: string;
  wa: string; // como a pessoa se apresenta na mensagem do WhatsApp
};

export const segmentos: Segmento[] = [
  {
    slug: "importadoras",
    nav: "Importadoras",
    menuDesc: "Custo em dólar, importação, frete e markup",
    icon: "truck",
    eyebrow: "Sistema para importadoras",
    title: "O sistema da importadora, do custo em dólar ao preço de venda certo",
    seoTitle: "Sistema para importadora com custo em dólar e markup | Sebra",
    seoDesc: "ERP para importadora com custo em dólar e cotação da moeda, percentual de importação e frete, markup com impostos e margem, NF-e de importação com DI, cotação com fornecedores e orçamentos.",
    lead: "Custo em dólar convertido pela cotação, importação e frete somados ao custo e um markup que já entrega o preço de venda com impostos e margem.",
    intro: "Quem importa precisa saber quanto o produto custa de verdade depois do câmbio, do frete e da importação, e vender sem perder margem quando o dólar muda. A Sebra guarda a moeda e a cotação da empresa, soma a importação e o frete em cada produto e calcula o preço sugerido com todos os custos.",
    pains: [
      { problem: "O dólar mudou e o preço ficou para trás", answer: "Você atualiza a cotação da empresa e o custo de cada produto é recalculado pelo valor em dólar" },
      { problem: "Frete e importação somem na conta", answer: "O percentual de importação e frete entra no custo de todo produto, sem planilha à parte" },
      { problem: "Preço no chute e margem que desaparece", answer: "O markup soma impostos, despesas, comissão e a margem desejada e mostra o preço sugerido" },
    ],
    features: [
      { title: "Custo em dólar ou outra moeda", desc: "O custo do fornecedor vezes a cotação vira o custo em reais" },
      { title: "Moeda e cotação da empresa", desc: "Configuradas uma vez e aplicadas em todo produto novo" },
      { title: "Importação e frete", desc: "Percentual somado ao custo de cada produto" },
      { title: "Markup com impostos e margem", desc: "Preço sugerido e ponto de equilíbrio calculados para você" },
      { title: "NF-e de importação com DI", desc: "Declaração de importação, via de transporte e custo de nacionalização" },
      { title: "Produtos e fornecedores", desc: "Catálogo, estoque e cadastro de quem vende para você" },
      { title: "Cotação com fornecedores", desc: "Peça preço a vários fornecedores e compre pelo melhor" },
      { title: "Orçamento que vira nota", desc: "Aprovado pelo cliente, segue para a NF-e já preenchido" },
    ],
    modulos: [{ nome: "Produtos e estoque", href: "/solucoes/estoque/" }, { nome: "Compras", href: "/solucoes/compras/" }, { nome: "Orçamentos", href: "/solucoes/orcamentos/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }],
    faq: [
      { q: "A Sebra trabalha com custo em dólar?", a: "Sim, você liga a moeda estrangeira, informa a cotação e o custo do fornecedor em dólar, ou em outra moeda, é convertido para reais em cada produto." },
      { q: "Dá para somar importação e frete no custo?", a: "Sim, a empresa define o percentual de importação e frete uma vez e ele entra no custo de todo produto, podendo ser ajustado produto a produto." },
      { q: "Emite NF-e de importação?", a: "Sim, a nota tem o grupo de declaração de importação com a DI, a via de transporte e a forma de importação, além do cálculo do custo de nacionalização." },
    ],
    mock: "importacao",
    gov: "Vende produto importado para órgão público? Os mesmos produtos entram na licitação e no contrato, com o saldo do contrato e do empenho sob controle.",
    closing: "Importe com o custo certo e venda com a margem que você escolheu.",
    wa: "Tenho uma importadora",
  },
  {
    slug: "servicos",
    nav: "Prestadores de serviço",
    menuDesc: "NFS-e, contratos recorrentes e OS",
    icon: "wrench",
    eyebrow: "Sistema para prestadores de serviço",
    title: "O sistema de quem presta serviço, com NFS-e, contratos e ordens de serviço",
    seoTitle: "Sistema para prestador de serviço com NFS-e | Sebra ERP",
    seoDesc: "ERP para empresas de serviço com NFS-e e retenções, serviços por execução, assinatura ou pacote, contratos recorrentes, ordens de serviço e agenda.",
    lead: "Serviço por execução, assinatura ou pacote, NFS-e com retenção, contratos recorrentes, ordens de serviço e agenda por profissional.",
    intro: "Empresa de serviço vive de contrato recorrente, agenda bem usada e nota emitida sem erro, então a Sebra cadastra o serviço do jeito que você cobra, leva os dados certos para a NFS-e e acompanha cada contrato e cada ordem de serviço.",
    pains: [
      { problem: "NFS-e com retenção sempre gera dúvida", answer: "O código do serviço fica no cadastro e as retenções são calculadas na nota" },
      { problem: "Contrato vence e ninguém percebe", answer: "Contratos com vigência, renovação, aditivos e alerta antes do fim" },
      { problem: "Chamado no caderno e peça na memória", answer: "Ordem de serviço com diagnóstico, peças, mão de obra e garantia" },
    ],
    features: [
      { title: "Serviços por execução, assinatura ou pacote", desc: "Do avulso ao ciclo mensal, ou várias sessões vendidas juntas" },
      { title: "NFS-e com retenções", desc: "Retenções na fonte calculadas e editáveis em cada nota" },
      { title: "Contratos recorrentes", desc: "Vigência, renovação, aditivos, cláusulas e churn" },
      { title: "Ordens de serviço", desc: "Cliente, equipamento, diagnóstico, peças e garantia" },
      { title: "Agenda por profissional", desc: "Grade de atendimentos com reserva de horário" },
      { title: "Orçamento que vira nota", desc: "Aprovado, abre a NFS-e já preenchida" },
      { title: "Conciliação automática", desc: "O extrato dá baixa nas notas pagas" },
      { title: "Lucro real do mês", desc: "DRE e resultado com o custo dos serviços" },
    ],
    modulos: [{ nome: "Serviços e contratos", href: "/solucoes/servicos/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Orçamentos", href: "/solucoes/orcamentos/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }, { nome: "Atendimento", href: "/solucoes/atendimento/" }],
    faq: [
      { q: "A Sebra emite nota fiscal de serviço (NFS-e)?", a: "Sim, o serviço guarda o código e os dados fiscais no cadastro, e as retenções são calculadas e podem ser editadas na nota." },
      { q: "Serve para quem cobra mensalidade?", a: "Sim, o serviço pode ser cobrado por assinatura em ciclos, e os contratos recorrentes têm vigência, renovação e controle de churn." },
      { q: "Tem ordem de serviço?", a: "Sim, com diagnóstico, peças, mão de obra, garantia e a situação de cada atendimento." },
    ],
    mock: "orcamento",
    gov: "Presta serviço para prefeitura? A NFS-e sai com a retenção do órgão público, o contrato tem vigência e reajuste e a conciliação mostra quais notas a TED pagou.",
    closing: "Organize o serviço do orçamento ao recebimento.",
    wa: "Tenho uma empresa de prestação de serviço",
  },
];

export const getSegmento = (slug: string) => segmentos.find((s) => s.slug === slug);
