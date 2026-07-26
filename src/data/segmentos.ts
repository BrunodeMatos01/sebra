// Páginas de Segmentos — a mesma plataforma, contada pela dor de cada ramo.
// Reaproveita os tipos de solucoes.ts (Pain, Feature).

import type { Pain, Feature } from "./solucoes";

export type Segmento = {
  slug: string;
  nav: string;
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  pains: Pain[];
  features: Feature[];
  modulos: string[];       // módulos que este segmento mais usa
  closing: string;
};

export const segmentos: Segmento[] = [
  {
    slug: "varejo",
    nav: "Varejo",
    eyebrow: "Varejo",
    title: "Transforme o WhatsApp no seu melhor vendedor",
    lead: "Receba pedidos, tire dúvidas, envie ofertas e feche no balcão ou no chat — sem perder nenhuma venda.",
    intro: "No varejo, cada minuto sem resposta é uma venda que vai para o concorrente. A Sebra junta atendimento, PDV e estoque para você vender no balcão e pelo WhatsApp com o mesmo controle.",
    pains: [
      { problem: "Cliente pergunta o preço e some antes de eu responder.", answer: "IA responde na hora, envia oferta e puxa o cliente para a compra." },
      { problem: "Vendi pelo WhatsApp e o caixa não sabe.", answer: "PDV e venda integrados: o estoque baixa e o financeiro registra sozinho." },
      { problem: "Não sei o que sai mais nem o que está encalhado.", answer: "Relatórios de mix, giro e ticket médio para decidir a compra." },
    ],
    features: [
      { title: "PDV com sessão de caixa", desc: "Venda rápida no balcão, abertura e fechamento com conferência." },
      { title: "Venda pelo WhatsApp", desc: "Atendimento e pedido no mesmo canal, com IA qualificando." },
      { title: "Estoque em tempo real", desc: "A venda baixa o estoque e a IA avisa o que repor." },
      { title: "Ofertas e remarketing", desc: "Reative quem comprou e dispare campanhas por WhatsApp." },
    ],
    modulos: ["PDV", "Atendimento com IA", "Estoque", "Financeiro", "Remarketing"],
    closing: "Venda mais no balcão e no WhatsApp, com um controle só.",
  },
  {
    slug: "industria",
    nav: "Indústria",
    eyebrow: "Indústria",
    title: "Da matéria-prima à nota fiscal, a fábrica no controle",
    lead: "Ficha técnica, ordens de produção, estoque e emissão fiscal — sem perder o rastro do que entra e sai.",
    intro: "A indústria precisa saber o custo real, controlar a produção e emitir nota com substituição tributária. A Sebra conecta ficha técnica, chão de fábrica e fiscal numa operação só.",
    pains: [
      { problem: "Não sei o custo real do produto acabado.", answer: "Ficha técnica (BOM) calcula o custo por item, com composição de materiais." },
      { problem: "A produção consome estoque e ninguém registra.", answer: "Ordem de produção baixa a matéria-prima e gera o produto acabado." },
      { problem: "Emitir nota com ST é uma dor de cabeça.", answer: "NF-e com substituição tributária por item e finalidade de emissão." },
    ],
    features: [
      { title: "Ficha técnica (BOM)", desc: "Composição de cada produto e custo calculado corretamente." },
      { title: "Ordens de produção", desc: "Consomem matéria-prima do estoque e checam disponibilidade." },
      { title: "Fiscal com ST", desc: "NF-e com substituição tributária e finalidades de emissão." },
      { title: "Cotações de compra", desc: "Cote insumos com vários fornecedores e compre pelo melhor preço." },
    ],
    modulos: ["Produção / MRP", "Estoque", "Fiscal", "Compras", "Financeiro"],
    closing: "Controle a fábrica do custo à nota fiscal.",
  },
  {
    slug: "distribuidor",
    nav: "Distribuidor",
    eyebrow: "Distribuidor",
    title: "Vários depósitos, um controle de estoque",
    lead: "Multi-armazém, transferências, cotações e logística — para quem move volume de verdade.",
    intro: "Distribuidor vive de giro e de estoque certo no lugar certo. A Sebra controla estoque por depósito, transferências entre eles e a compra pelo melhor preço, com a IA avisando o que repor.",
    pains: [
      { problem: "Tenho estoque em vários lugares e me perco.", answer: "Estoque por depósito, com transferências e ajustes rastreados." },
      { problem: "Compro no fornecedor errado por falta de comparação.", answer: "Cotação sigilosa a vários fornecedores, com comparação lado a lado." },
      { problem: "Falta produto e eu só descubro no pedido.", answer: "IA de reposição sugere a compra pelo giro dos últimos 90 dias." },
    ],
    features: [
      { title: "Multi-armazém (WMS)", desc: "Estoque por local, transferências e ajustes com histórico." },
      { title: "Cotações de compra", desc: "Peça preço a vários fornecedores e compare respostas com sigilo." },
      { title: "IA de reposição", desc: "Sugere o que comprar antes de faltar, pelo giro real." },
      { title: "Gestão de frota", desc: "Veículos, viagens, abastecimento e manutenção da logística." },
    ],
    modulos: ["Multi-armazém", "Compras", "Frota", "Estoque", "Financeiro"],
    closing: "Volume alto pede controle alto. A Sebra entrega os dois.",
  },
  {
    slug: "servicos",
    nav: "Serviços",
    eyebrow: "Prestadores de serviço",
    title: "Ordens de serviço e agenda técnica sob controle",
    lead: "Do chamado ao fechamento: atendimento, peças, diagnóstico e cobrança num fluxo só.",
    intro: "Prestador de serviço vive de agenda e de ordem de serviço bem controlada. A Sebra organiza o atendimento técnico, as peças usadas e a cobrança, com a IA agendando pelo WhatsApp.",
    pains: [
      { problem: "Chamado no caderno, peça na memória.", answer: "Ordem de serviço com atendimento, peças e diagnóstico registrados." },
      { problem: "Agenda técnica bagunçada, cliente esquecido.", answer: "Agenda por profissional, com lembrete automático no WhatsApp." },
      { problem: "Fechei o serviço e a cobrança ficou pra depois.", answer: "OS vira lançamento e cobrança PIX/boleto automática." },
    ],
    features: [
      { title: "Ordens de serviço", desc: "Atendimento técnico, peças, diagnóstico e histórico por cliente." },
      { title: "Agenda por profissional", desc: "Horários organizados, com lembrete automático via WhatsApp." },
      { title: "Baixa de peças no estoque", desc: "A peça usada na OS sai do estoque automaticamente." },
      { title: "Cobrança automática", desc: "Serviço fechado gera a cobrança sem trabalho manual." },
    ],
    modulos: ["Ordens de serviço", "Agenda", "Atendimento com IA", "Estoque", "Financeiro"],
    closing: "Organize o serviço do chamado à cobrança.",
  },
  {
    slug: "construcao",
    nav: "Construção civil",
    eyebrow: "Construção civil",
    title: "Obras, medições e retenção de INSS no controle",
    lead: "Feito para construtoras e empreiteiras — canteiros, medições e a parte fiscal específica do setor.",
    intro: "Construção civil tem regras próprias: retenção de INSS sobre mão de obra, CNO por canteiro e faturamento por medição. A Sebra fala essa língua.",
    pains: [
      { problem: "Controle de obra em planilha que ninguém entende.", answer: "Canteiros, medições e avanço financeiro por obra, organizados." },
      { problem: "Retenção de INSS calculada no chute.", answer: "Retenção de INSS sobre mão de obra, com e sem desoneração." },
      { problem: "Cada canteiro tem um CNO e vira confusão.", answer: "Controle por CNO no lugar de um CNPJ único por canteiro." },
    ],
    features: [
      { title: "Gestão de obras", desc: "Canteiros, medições e retenção, com avanço financeiro por obra." },
      { title: "Retenção de INSS", desc: "Cálculo sobre mão de obra (11% ou 3,5% com desoneração)." },
      { title: "Certidões negativas", desc: "CNDs em dia para não travar contrato nem medição." },
      { title: "Contratos e medições", desc: "Faturamento por medição, como o setor exige." },
    ],
    modulos: ["Obras", "Fiscal", "Contratos", "Financeiro", "Certidões"],
    closing: "A obra sob controle, do canteiro ao INSS.",
  },
  {
    slug: "salao",
    nav: "Salão & Clínica",
    eyebrow: "Salão & Clínica de estética",
    title: "Agenda cheia e cliente fidelizado, no automático",
    lead: "Bot de WhatsApp que agenda sozinho, agenda por profissional e a ficha completa de cada cliente.",
    intro: "Salão e clínica vivem de agenda e de relacionamento. A Sebra deixa a IA agendar pelo WhatsApp, organiza a agenda por profissional e guarda a ficha do cliente com serviços, produtos e financeiro num lugar só.",
    pains: [
      { problem: "Passo o dia respondendo WhatsApp para marcar horário.", answer: "A IA agenda sozinha pelo WhatsApp, confirma e lembra o cliente." },
      { problem: "Agenda dos profissionais bagunçada e com furo.", answer: "Agenda por profissional, alimentada pelo bot ou pela recepção." },
      { problem: "Não lembro o que cada cliente já fez comigo.", answer: "Ficha do cliente com serviços, produtos comprados e financeiro." },
    ],
    features: [
      { title: "Bot de agendamento", desc: "A IA marca, confirma e lembra o horário direto no WhatsApp." },
      { title: "Agenda por profissional", desc: "Horários por pessoa, sem furo e sem sobreposição." },
      { title: "Ficha da clientela", desc: "Serviços realizados, produtos comprados e financeiro num lugar só." },
      { title: "Lembretes automáticos", desc: "Reduz falta com confirmação e lembrete no WhatsApp." },
    ],
    modulos: ["Agenda", "Clientela", "Atendimento com IA", "Financeiro", "Remarketing"],
    closing: "Deixe a agenda encher sozinha e o cliente voltar sempre.",
  },
  {
    slug: "licitacoes",
    nav: "Governo & Licitações",
    eyebrow: "Governo & Licitações",
    title: "Venda para o governo sem perder prazo nem certidão",
    lead: "Editais, habilitação, propostas e certidões — o nicho que Bling e Omie não atendem, a Sebra atende.",
    intro: "Vender para prefeitura e órgão público tem burocracia própria: acompanhar edital, manter certidão válida e cumprir prazo. A Sebra organiza o processo licitatório e a parte fiscal que ele exige.",
    pains: [
      { problem: "Perco licitação porque a certidão venceu.", answer: "Controle de CND (federal, estadual, municipal, FGTS, trabalhista) com alerta." },
      { problem: "Prazo de edital espalhado em e-mail e planilha.", answer: "Editais acompanhados, com prazos e documentos de habilitação." },
      { problem: "Contrato público ganho e a gestão vira caos.", answer: "Contratos públicos, empenhos e medições organizados." },
    ],
    features: [
      { title: "Gestão de licitações", desc: "Editais, prazos, habilitação e propostas enviadas, num painel." },
      { title: "Certidões negativas", desc: "CNDs com controle de validade e alerta antes de vencer." },
      { title: "Contratos públicos", desc: "Empenhos, medições e certidões do contrato já ganho." },
      { title: "Emissão fiscal", desc: "NF-e e obrigações que o fornecimento público exige." },
    ],
    modulos: ["Licitações", "Certidões", "Contratos públicos", "Fiscal", "Financeiro"],
    closing: "Um sistema que entende quem vende para o governo.",
  },
];

export const getSegmento = (slug: string) => segmentos.find((s) => s.slug === slug);
