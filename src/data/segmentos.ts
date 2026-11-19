// Páginas por ramo de negócio. Cada uma é uma porta de entrada no Google
// ("sistema para distribuidora", "sistema para construtora"...), então o
// título, a descrição e as perguntas usam as palavras que o cliente busca.
// Fornecedores do governo têm página própria: /licitacoes/.

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
  mock: MockKey | MockSpec;
  gov: string;
  closing: string;
};

export const segmentos: Segmento[] = [
  {
    slug: "varejo",
    nav: "Comércio e varejo",
    menuDesc: "PDV, NFC-e, estoque e caixa",
    icon: "store",
    eyebrow: "Sistema para comércio e varejo",
    title: "O sistema da loja: balcão, estoque, nota e caixa conectados",
    seoTitle: "Sistema para loja e comércio com PDV e NFC-e | Sebra ERP",
    seoDesc: "Sistema para loja e comércio: frente de caixa com NFC-e, estoque que baixa na venda, formação de preço, compras e financeiro com o lucro real do mês.",
    lead: "Frente de caixa com NFC-e, estoque que baixa sozinho, preço com a margem certa e o caixa fechando conferido. Tudo ligado ao financeiro.",
    intro: "No comércio, cada venda precisa baixar o estoque, emitir o cupom e cair no caixa certo, e cada compra precisa sair pelo melhor preço. A Sebra junta PDV, estoque, compras, notas e financeiro para a loja vender com controle e saber quanto lucrou no mês.",
    pains: [
      { problem: "Vendi e o estoque não baixou.", answer: "O PDV baixa o estoque e registra a venda no financeiro na hora." },
      { problem: "Fechamento de caixa que nunca bate.", answer: "Sessão de caixa com troco, valor esperado e valor contado." },
      { problem: "Preço no chute e margem que some.", answer: "Formação de preço com custos, impostos e margem desejada." },
    ],
    features: [
      { title: "PDV com sessão de caixa", desc: "Abertura com troco, venda rápida e fechamento conferido." },
      { title: "NFC-e no balcão", desc: "Cupom fiscal eletrônico emitido na venda." },
      { title: "NF-e para empresas", desc: "Venda para CNPJ com nota de produto completa." },
      { title: "Estoque em tempo real", desc: "A venda baixa o estoque e o mínimo avisa o que repor." },
      { title: "Formação de preço", desc: "Preço sugerido com custos, impostos, despesas e margem." },
      { title: "Compras com cotação", desc: "Peça preço a vários fornecedores e compre pelo melhor." },
      { title: "Lucro real do mês", desc: "DRE e resultado das vendas montados sozinhos." },
      { title: "Clientes e recompra", desc: "Ficha do cliente e campanhas para quem já comprou." },
    ],
    modulos: [{ nome: "PDV e operação", href: "/solucoes/operacao/" }, { nome: "Produtos e estoque", href: "/solucoes/estoque/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Compras", href: "/solucoes/compras/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }],
    faq: [
      { q: "A Sebra tem frente de caixa para loja?", a: "Sim. O PDV tem sessão de caixa com troco, venda rápida, NFC-e e fechamento com o valor esperado contra o valor contado." },
      { q: "O estoque baixa sozinho na venda?", a: "Sim. A venda no PDV e a nota fiscal baixam o estoque na hora, e o estoque mínimo avisa o que precisa ser reposto." },
      { q: "Consigo saber o lucro da loja no mês?", a: "Sim. O DRE e o resultado das vendas mostram o que entrou, o que custou e o que sobrou." },
    ],
    mock: "produto",
    gov: "Atende prefeitura com pedidos de material? Os mesmos produtos da loja entram na licitação e no contrato público, com saldo por item.",
    closing: "Venda no balcão com controle e saiba quanto sobrou no mês.",
  },
  {
    slug: "industria",
    nav: "Indústria",
    menuDesc: "Ficha técnica, produção e custo real",
    icon: "factory",
    eyebrow: "Sistema para indústria",
    title: "O sistema da indústria: da matéria-prima à nota fiscal",
    seoTitle: "Sistema para indústria com produção e ficha técnica | Sebra",
    seoDesc: "ERP para indústria: ficha técnica, ordens de produção que consomem matéria-prima, custo e formação de preço, compras de insumos e NF-e com ST.",
    lead: "Ficha técnica, ordens de produção que consomem a matéria-prima, custo real, compras de insumos e NF-e com substituição tributária.",
    intro: "A indústria precisa saber o custo real do que fabrica, controlar a produção e emitir nota com substituição tributária. A Sebra conecta ficha técnica, estoque de insumos, compras, fiscal e financeiro numa operação só.",
    pains: [
      { problem: "Não sei o custo real do produto acabado.", answer: "Ficha técnica com os componentes e formação de preço com todos os custos." },
      { problem: "A produção consome estoque e ninguém registra.", answer: "Ordem de produção baixa a matéria-prima e gera o produto acabado." },
      { problem: "Descubro que falta insumo no meio da produção.", answer: "A ordem avisa se a matéria-prima é suficiente antes de começar." },
    ],
    features: [
      { title: "Ficha técnica", desc: "Os componentes de cada produto acabado." },
      { title: "Ordens de produção", desc: "Quantidade a produzir, data planejada e consumo automático." },
      { title: "Checagem de matéria-prima", desc: "Aviso de estoque insuficiente antes de produzir." },
      { title: "Formação de preço", desc: "Custo, impostos, despesas e margem no preço sugerido." },
      { title: "Compras de insumos", desc: "Cotação com vários fornecedores e custo atualizado ao receber." },
      { title: "NF-e com ST", desc: "Substituição tributária por item e finalidade de emissão." },
      { title: "Campos da Reforma Tributária", desc: "CST de IBS/CBS e cClassTrib no cadastro." },
      { title: "Resultado do mês", desc: "DRE com o custo das mercadorias vendidas e o lucro líquido." },
    ],
    modulos: [{ nome: "Produção e operação", href: "/solucoes/operacao/" }, { nome: "Produtos e estoque", href: "/solucoes/estoque/" }, { nome: "Compras", href: "/solucoes/compras/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }],
    faq: [
      { q: "A Sebra tem controle de produção?", a: "Sim. A produção trabalha com ficha técnica e ordens de produção que checam e consomem a matéria-prima do estoque." },
      { q: "Consigo saber o custo do produto fabricado?", a: "Sim. A ficha técnica reúne os componentes e a formação de preço soma custos, impostos, despesas e margem." },
      { q: "Emite nota com substituição tributária?", a: "Sim. A NF-e trabalha com ST por item e finalidade de emissão." },
    ],
    mock: "produto",
    gov: "Fabrica e vende para órgão público? Controle o contrato, os empenhos e o saldo de cada item ganho, e saiba a margem real de cada licitação.",
    closing: "Controle a fábrica do custo à nota fiscal.",
  },
  {
    slug: "servicos",
    nav: "Prestadores de serviço",
    menuDesc: "NFS-e, contratos recorrentes e OS",
    icon: "wrench",
    eyebrow: "Sistema para prestadores de serviço",
    title: "O sistema de quem presta serviço: NFS-e, contratos e ordens de serviço",
    seoTitle: "Sistema para prestador de serviço com NFS-e | Sebra ERP",
    seoDesc: "ERP para empresas de serviço: NFS-e com retenção, serviços por execução, assinatura ou pacote, contratos recorrentes, ordens de serviço e agenda.",
    lead: "Serviço por execução, assinatura ou pacote, NFS-e com retenção, contratos recorrentes, ordens de serviço e agenda por profissional.",
    intro: "Empresa de serviço vive de contrato recorrente, agenda bem usada e nota de serviço emitida sem erro. A Sebra cadastra o serviço do jeito que você cobra, leva os dados certos para a NFS-e, acompanha cada contrato e controla as ordens de serviço.",
    pains: [
      { problem: "NFS-e com retenção é sempre uma dúvida.", answer: "Código do serviço no cadastro e retenções calculadas na nota." },
      { problem: "Contrato vence e ninguém percebe.", answer: "Contratos com vigência, renovação, aditivos e alerta." },
      { problem: "Chamado no caderno, peça na memória.", answer: "Ordem de serviço com diagnóstico, peças, mão de obra e garantia." },
    ],
    features: [
      { title: "Serviços por execução, assinatura ou pacote", desc: "Do avulso ao ciclo mensal, ou várias sessões vendidas juntas." },
      { title: "NFS-e com retenções", desc: "Retenções na fonte calculadas e editáveis por nota." },
      { title: "Contratos recorrentes", desc: "Vigência, renovação, aditivos, cláusulas e churn." },
      { title: "Ordens de serviço", desc: "Cliente, equipamento, diagnóstico, peças e garantia." },
      { title: "Agenda por profissional", desc: "Grade de atendimentos com reserva de horário." },
      { title: "Orçamento que vira nota", desc: "Aprovado, abre a NFS-e preenchida." },
      { title: "Conciliação automática", desc: "O extrato dá baixa nas notas pagas." },
      { title: "Lucro real do mês", desc: "DRE e resultado com os custos dos serviços." },
    ],
    modulos: [{ nome: "Serviços e contratos", href: "/solucoes/servicos/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Orçamentos", href: "/solucoes/orcamentos/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }, { nome: "Atendimento", href: "/solucoes/atendimento/" }],
    faq: [
      { q: "A Sebra emite nota fiscal de serviço (NFS-e)?", a: "Sim. O serviço tem o código e os dados fiscais no cadastro, e as retenções são calculadas e editáveis na nota." },
      { q: "Serve para quem cobra mensalidade?", a: "Sim. O serviço pode ser cobrado por assinatura em ciclos, e os contratos recorrentes têm vigência, renovação e controle de churn." },
      { q: "Tem ordem de serviço?", a: "Sim. Com diagnóstico, peças, mão de obra, garantia e a situação de cada atendimento." },
    ],
    mock: "orcamento",
    gov: "Presta serviço para prefeitura? NFS-e com retenção para órgão público, contrato com vigência e reajuste, e a conciliação descobrindo quais notas a TED pagou.",
    closing: "Organize o serviço do orçamento ao recebimento.",
  },
];

export const getSegmento = (slug: string) => segmentos.find((s) => s.slug === slug);
