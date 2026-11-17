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
    slug: "distribuidor",
    nav: "Distribuidora",
    menuDesc: "Vários depósitos, compras e logística",
    icon: "truck",
    eyebrow: "Sistema para distribuidora e atacado",
    title: "O sistema da distribuidora: estoque certo, compra certa, entrega no prazo",
    seoTitle: "Sistema para distribuidora e atacado | Sebra ERP",
    seoDesc: "ERP para distribuidora: estoque por depósito, cotação com fornecedores, NF-e com substituição tributária, frota, comissões e conciliação.",
    lead: "Estoque por depósito, cotação com vários fornecedores, NF-e com ST, frota, comissões e o financeiro conciliando sozinho.",
    intro: "Distribuidora vive de giro, de estoque no lugar certo e de comprar bem. A Sebra controla o estoque por depósito, avisa o que repor pelo giro real, cota com vários fornecedores, emite NF-e com substituição tributária, calcula a comissão dos vendedores e concilia o extrato sozinha.",
    pains: [
      { problem: "Tenho estoque em vários lugares e me perco.", answer: "Estoque por depósito, com transferências e ajustes registrados." },
      { problem: "Compro no fornecedor errado por falta de comparação.", answer: "Cotação a vários fornecedores, com as respostas lado a lado." },
      { problem: "Comissão de vendedor calculada na mão.", answer: "Comissão sobre as notas autorizadas, descontando o frete." },
    ],
    features: [
      { title: "Multi-armazém (WMS)", desc: "Estoque por depósito, transferências e ajustes de inventário." },
      { title: "Reposição pelo giro", desc: "Estoque baixo pelo mínimo e pelas saídas dos últimos 90 dias." },
      { title: "Cotação e pedido de compra", desc: "Vários fornecedores, aprovação, recebimento parcial e conta a pagar." },
      { title: "NF-e com substituição tributária", desc: "ST por item e finalidade de emissão." },
      { title: "Comissões de vendedores", desc: "Calculadas nas notas autorizadas, menos o frete." },
      { title: "Gestão de frota", desc: "Veículos, viagens, abastecimento e manutenção." },
      { title: "Conciliação automática", desc: "O extrato fecha as notas sozinho." },
      { title: "Multi-empresa", desc: "Várias empresas do grupo com resultado consolidado." },
    ],
    modulos: [{ nome: "Produtos e estoque", href: "/solucoes/estoque/" }, { nome: "Compras", href: "/solucoes/compras/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Frota e operação", href: "/solucoes/operacao/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }],
    faq: [
      { q: "A Sebra controla estoque em vários depósitos?", a: "Sim. O multi-armazém controla o estoque por depósito, com transferências, ajustes de inventário e depósito padrão." },
      { q: "Emite NF-e com substituição tributária?", a: "Sim. A NF-e trabalha com ST por item e finalidade de emissão." },
      { q: "Calcula comissão dos vendedores?", a: "Sim. A comissão é calculada sobre as notas autorizadas: valor da nota menos o frete, vezes o percentual do vendedor." },
    ],
    mock: "compras",
    gov: "Distribuidora é quem mais ganha pregão de material de consumo. Com a Sebra, a compra nasce ligada ao contrato público e o saldo de cada item se atualiza a cada nota.",
    closing: "Volume alto pede controle alto. A Sebra entrega os dois.",
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
  {
    slug: "construcao",
    nav: "Construção civil",
    menuDesc: "Obras com CNO, medições e retenção de INSS",
    icon: "hardhat",
    eyebrow: "Sistema para construtoras",
    title: "O sistema da construtora: obras, medições e retenção de INSS",
    seoTitle: "Sistema para construtora e empreiteira com obras e CNO | Sebra",
    seoDesc: "ERP para construtoras: obras com CNO, medições, retenção de INSS, notas por obra, compras de materiais, contratos com aditivos e financeiro por obra.",
    lead: "Obras com CNO, medições, retenção de INSS, notas por obra, compras de material, contratos com aditivos e o financeiro de cada obra.",
    intro: "Construção civil tem regras próprias: CNO por obra, retenção de INSS sobre a mão de obra e faturamento por medição. A Sebra fala essa língua, e liga cada obra às notas, às compras e ao financeiro.",
    pains: [
      { problem: "Controle de obra em planilha que ninguém entende.", answer: "Cada obra com contrato, medições, notas e valor líquido." },
      { problem: "Retenção de INSS calculada no chute.", answer: "Retenção de INSS no módulo de obras." },
      { problem: "Certidão vencida trava a medição.", answer: "Certidões com aviso antes de vencer." },
    ],
    features: [
      { title: "Obras com CNO", desc: "Cliente, contratante e Cadastro Nacional de Obras." },
      { title: "Medições", desc: "Medições registradas por obra." },
      { title: "Retenção de INSS", desc: "Sobre a mão de obra, com o valor líquido da nota." },
      { title: "Notas por obra", desc: "As notas emitidas contra cada obra e o faturado." },
      { title: "Compras de material", desc: "Cotação com fornecedores e conta a pagar ao receber." },
      { title: "Contratos e aditivos", desc: "Vigência, aditivos, cláusulas e linha do tempo." },
      { title: "Certidões negativas", desc: "Validade controlada com aviso antecipado." },
      { title: "Financeiro e DRE", desc: "Resultado do mês e conciliação automática." },
    ],
    modulos: [{ nome: "Obras e operação", href: "/solucoes/operacao/" }, { nome: "Compras", href: "/solucoes/compras/" }, { nome: "Notas fiscais", href: "/solucoes/fiscal/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }, { nome: "Contratos públicos", href: "/licitacoes/" }],
    faq: [
      { q: "A Sebra tem módulo de obras?", a: "Sim. Cada obra tem CNO, cliente, contrato, medições, retenção de INSS e as notas emitidas contra ela." },
      { q: "Calcula retenção de INSS?", a: "Sim. O módulo de obras calcula a retenção de INSS sobre a mão de obra e mostra o valor líquido." },
      { q: "Serve para obra pública?", a: "Sim. Para obras públicas a Sebra também controla contrato, empenho, garantia contratual, aditivos e reajuste." },
    ],
    mock: {
      title: "Obras", subtitle: "Construção civil · canteiros, medições e retenção de INSS", group: "modulos", active: "Obras", h: 620,
      actions: [{ label: "Nova obra", primary: true, icon: "hardhat" }],
      kpis: [{ l: "Obras ativas", v: "6", icon: "hardhat" }, { l: "Contratado em andamento", v: "R$ 4,8 mi", icon: "contract" }, { l: "Faturado (notas)", v: "R$ 2,1 mi", tone: "ok", icon: "receipt" }, { l: "Retenção INSS (mês)", v: "R$ 18,4 mil", icon: "calc" }],
      cols: ["Obra", "CNO", "Valor contrato", "Medido", "Situação"], widths: [32, 18, 17, 15, 18], num: [2, 3],
      rows: [
        ["Residencial Jardim Atlântico", "90.012.34567/71", "R$ 1.840.000", "62%", { pill: "Em andamento", tone: "blue" }],
        ["Galpão logístico BR-101", "90.018.76543/72", "R$ 2.120.000", "38%", { pill: "Em andamento", tone: "blue" }],
        ["Reforma escola municipal", "90.021.11223/70", "R$ 486.000", "91%", { pill: "Medição final", tone: "amber" }],
        ["Clínica Bem Viver · ampliação", "90.025.44556/73", "R$ 362.000", "100%", { pill: "Concluída", tone: "green" }],
      ],
    },
    gov: "Obra pública é contrato público: medição, empenho, garantia contratual, aditivo e reajuste. Tudo isso já está na Sebra.",
    closing: "A obra sob controle, do canteiro ao recebimento.",
  },
  {
    slug: "salao",
    nav: "Salão e clínica",
    menuDesc: "Agenda por profissional e ficha do cliente",
    icon: "sparkles",
    eyebrow: "Sistema para salão de beleza e clínica de estética",
    title: "O sistema do salão e da clínica: agenda cheia e cliente que volta",
    seoTitle: "Sistema para salão de beleza e clínica de estética | Sebra",
    seoDesc: "Agenda por profissional, mensagens de agendamento pelo WhatsApp, ficha completa do cliente, pacotes de sessões, venda de produtos e financeiro.",
    lead: "Agenda por profissional, mensagens de agendamento pelo WhatsApp, ficha do cliente, pacotes de sessões, venda de produtos e o financeiro do mês.",
    intro: "Salão e clínica vivem de agenda bem usada e de relacionamento. A Sebra organiza a agenda de cada profissional, manda as mensagens de agendamento pelo WhatsApp, guarda a ficha do cliente com serviços, produtos e pagamentos e controla os pacotes de sessões.",
    pains: [
      { problem: "Passo o dia no WhatsApp marcando horário.", answer: "Mensagens de agendamento automáticas pelo WhatsApp." },
      { problem: "Agenda com furo e horário duplicado.", answer: "Agenda por profissional, sem sobreposição." },
      { problem: "Não lembro o que cada cliente já fez.", answer: "Ficha da clientela com serviços, produtos e financeiro." },
    ],
    features: [
      { title: "Agenda por profissional", desc: "Grade de atendimentos com reserva de horário." },
      { title: "Mensagens de agendamento", desc: "Templates de WhatsApp para confirmar e lembrar." },
      { title: "Ficha da clientela", desc: "Serviços realizados, produtos comprados e financeiro." },
      { title: "Pacotes de sessões", desc: "Várias execuções vendidas juntas e o uso de cada uma." },
      { title: "Serviços com duração", desc: "Cada serviço ocupa o tempo certo na agenda." },
      { title: "Venda de produtos", desc: "Estoque e caixa integrados." },
      { title: "Clientes e recompra", desc: "Lembre de quem não volta há tempo e reative." },
      { title: "Financeiro do mês", desc: "Recebimentos, contas e resultado." },
    ],
    modulos: [{ nome: "Atendimento e agenda", href: "/solucoes/atendimento/" }, { nome: "Serviços", href: "/solucoes/servicos/" }, { nome: "Produtos e estoque", href: "/solucoes/estoque/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }, { nome: "Clientes", href: "/solucoes/comercial/" }],
    faq: [
      { q: "A Sebra tem agenda para salão e clínica?", a: "Sim. A agenda mostra a grade de cada profissional e envia mensagens de agendamento pelo WhatsApp." },
      { q: "Consigo vender pacote de sessões?", a: "Sim. O serviço pode ser vendido em pacote, com várias execuções, e o sistema acompanha o uso." },
      { q: "Tem ficha do cliente?", a: "Sim. A ficha da clientela mostra serviços realizados, produtos comprados e o financeiro de cada cliente." },
    ],
    mock: {
      title: "Agendas", subtitle: "Grade de atendimentos por profissional", group: "operacao", active: "Agendas", h: 620,
      actions: [{ label: "Novo atendimento", primary: true, icon: "clock" }],
      kpis: [{ l: "Atendimentos hoje", v: "28", icon: "clock" }, { l: "Confirmados", v: "24", tone: "ok", icon: "checkCircle" }, { l: "Horários livres", v: "6", icon: "eye" }, { l: "Faturamento previsto", v: "R$ 4.860", icon: "wallet" }],
      cols: ["Horário", "Cliente", "Serviço", "Profissional", "Situação"], widths: [12, 24, 26, 18, 20],
      rows: [
        ["09:00", "Carla Mendes", "Corte e escova", "Luana", { pill: "Confirmado", tone: "green" }],
        ["09:30", "Fernanda Lopes", "Limpeza de pele", "Dra. Bianca", { pill: "Confirmado", tone: "green" }],
        ["10:00", "Patrícia Alves", "Pacote massagem (4/10)", "Renata", { pill: "Aguardando", tone: "amber" }],
        ["10:30", "Juliana Costa", "Coloração", "Luana", { pill: "Pagamento confirmado", tone: "blue" }],
      ],
    },
    gov: "",
    closing: "Agenda cheia e cliente voltando sempre.",
  },
  {
    slug: "eventos",
    nav: "Cerimonial e eventos",
    menuDesc: "Casamentos, eventos, fornecedores e contratos",
    icon: "star",
    eyebrow: "Sistema para cerimonial e eventos",
    title: "O sistema do cerimonial: cada evento organizado do contrato à festa",
    seoTitle: "Sistema para cerimonial, casamentos e eventos | Sebra ERP",
    seoDesc: "Gestão de casamentos e eventos: linha do tempo, pendências, reuniões, arquivos, equipe, fornecedores, contrato com os noivos e financeiro de cada evento.",
    lead: "Casamentos e eventos com linha do tempo, pendências, reuniões, arquivos, equipe e fornecedores, contrato com os noivos e o financeiro de cada evento.",
    intro: "Cada evento é um projeto com dezenas de pendências, fornecedores e prazos. A Sebra organiza tudo numa linha do tempo por evento, com o contrato dos noivos, a equipe escalada, os arquivos e o financeiro.",
    pains: [
      { problem: "Cada casamento numa pasta, num grupo de WhatsApp e numa planilha.", answer: "Linha do tempo, pendências, reuniões e arquivos de cada evento num lugar." },
      { problem: "Contrato dos noivos feito no Word.", answer: "Contrato com dados dos noivos, cerimônia, festa, convidados e assinatura." },
      { problem: "Não sei quanto cada evento deu de resultado.", answer: "Financeiro por evento, ligado ao contrato." },
    ],
    features: [
      { title: "Gestão de casamentos", desc: "Linha do tempo, etapas, pendências, reuniões e arquivos de cada casamento." },
      { title: "Gestão de eventos", desc: "Eventos, fornecedores, clientes e resumos num só lugar." },
      { title: "Modelos de evento", desc: "Comece cada evento a partir de um modelo pronto." },
      { title: "Equipe do evento", desc: "Escale assistentes e acompanhe as pendências de todos os eventos." },
      { title: "Contrato com os noivos", desc: "Noivos, cerimônia, festa, convidados, data e assinatura." },
      { title: "Fotos, designs e documentos", desc: "Os arquivos de cada evento vinculados a ele." },
      { title: "Fornecedores", desc: "Cadastro e histórico dos fornecedores de cada evento." },
      { title: "Financeiro do evento", desc: "Recebimentos, parcelas e resultado." },
    ],
    modulos: [{ nome: "Serviços e contratos", href: "/solucoes/servicos/" }, { nome: "Clientes", href: "/solucoes/comercial/" }, { nome: "Financeiro", href: "/solucoes/financeiro/" }, { nome: "Atendimento", href: "/solucoes/atendimento/" }, { nome: "Orçamentos", href: "/solucoes/orcamentos/" }],
    faq: [
      { q: "A Sebra serve para cerimonial e assessoria de casamento?", a: "Sim. Cada casamento tem linha do tempo, etapas, pendências, reuniões e arquivos, e o contrato traz os dados dos noivos, da cerimônia e da festa." },
      { q: "Consigo organizar a equipe dos eventos?", a: "Sim. Você escala assistentes e acompanha as pendências de todos os eventos numa tela." },
      { q: "Tem financeiro por evento?", a: "Sim. Recebimentos e parcelas ficam ligados ao contrato de cada evento." },
    ],
    mock: {
      title: "Gestão de eventos", subtitle: "Eventos, fornecedores, clientes e resumos num só lugar", group: "pessoal", active: "Início", h: 620,
      actions: [{ label: "Adicionar novo evento", primary: true, icon: "star" }],
      kpis: [{ l: "Eventos no ano", v: "38", icon: "star" }, { l: "Este mês", v: "4", icon: "clock" }, { l: "Pendências abertas", v: "17", tone: "warn", icon: "bell" }, { l: "A receber", v: "R$ 86,4 mil", icon: "wallet" }],
      cols: ["Evento", "Data", "Convidados", "Equipe", "Etapa"], widths: [32, 14, 14, 18, 22], num: [2],
      rows: [
        ["Casamento Helena e Rafael", "29/11/2026", "180", "4 assistentes", { pill: "Última reunião", tone: "amber" }],
        ["Bodas de prata Souza", "06/12/2026", "90", "2 assistentes", { pill: "Em planejamento", tone: "blue" }],
        ["Casamento Marina e Pedro", "17/01/2027", "240", "5 assistentes", { pill: "Em planejamento", tone: "blue" }],
        ["Formatura Medicina 2026", "12/12/2026", "420", "6 assistentes", { pill: "Fornecedores", tone: "violet" }],
      ],
    },
    gov: "",
    closing: "Cada evento organizado, do contrato à festa.",
  },
];

export const getSegmento = (slug: string) => segmentos.find((s) => s.slug === slug);
