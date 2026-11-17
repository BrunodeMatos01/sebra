// Módulos do ERP (solucoes/[slug].astro). REGRA: só entra o que existe em
// produção na plataforma (conferido no código em 17/11/2026). Cada função
// vira um <h3> com âncora própria: é isso que faz o Google achar cada uma.

import type { MockSpec } from "./mock-types";

export type Feature = { title: string; desc: string };
export type Pain = { problem: string; answer: string };
export type Group = { title: string; icon: string; intro?: string; items: Feature[] };
export type Faq = { q: string; a: string };
export type MockKey = "financeiro" | "dre" | "orcamento" | "cnpj" | "produto" | "compras" | "conciliacao" | "licitacao" | "contrato";

export type Solucao = {
  slug: string;
  nav: string;          // nome curto (menu)
  menuDesc: string;     // linha do menu
  icon: string;
  eyebrow: string;
  title: string;        // H1
  seoTitle: string;     // <title> (até ~60 caracteres)
  seoDesc: string;      // meta description (até ~155)
  lead: string;
  intro: string;
  pains: Pain[];
  highlights: Feature[];
  groups: Group[];
  faq: Faq[];
  mock: MockKey | MockSpec;
  mock2?: MockKey | MockSpec;
  related: string[];
  closing: string;
};

export const slugify = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const solucoes: Solucao[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "financeiro",
    nav: "Financeiro",
    menuDesc: "Lucro real do mês, conciliação automática e boletos",
    icon: "wallet",
    eyebrow: "Financeiro completo",
    title: "O financeiro que mostra o lucro real do mês, sem planilha",
    seoTitle: "Sistema financeiro empresarial com DRE e conciliação | Sebra",
    seoDesc: "Contas a pagar e receber, DRE, fluxo de caixa, conciliação bancária automática, boletos com baixa automática e o lucro real do mês.",
    lead: "Conciliação automática do extrato, boleto que se baixa sozinho, DRE por competência, fluxo de caixa, inadimplência, comissões e o lucro de verdade de cada mês.",
    intro: "Na Sebra o dinheiro se organiza no caminho. A nota autorizada vira conta a receber. O pagamento que cai no banco encontra a nota que ele quita. A compra que chega vira conta a pagar. E no fim do mês o DRE já está montado: você sabe quanto vendeu, quanto custou e quanto sobrou, sem esperar o contador.",
    pains: [
      { problem: "No fim do mês você fatura bem, mas não sabe se teve lucro.", answer: "DRE por competência e Resultado das vendas montados sozinhos: receita, custos, despesas e o lucro líquido do mês." },
      { problem: "Alguém passa o dia cruzando extrato com nota para dar baixa.", answer: "A conciliação lê o extrato e fecha as notas sozinha, só com soma exata. O que não fecha fica separado, com o motivo." },
      { problem: "Você não sabe quanto entra este mês nem quem está devendo.", answer: "Previsão de caixa, saldo projetado e inadimplência por dias de atraso numa tela só." },
    ],
    highlights: [
      { title: "Lucro real do mês", desc: "DRE por competência e Resultado das vendas: o que entrou, o que custou e o que sobrou, a partir das notas e dos lançamentos." },
      { title: "Conciliação automática", desc: "Importe o extrato (OFX ou PDF) ou conecte o banco: a Sebra descobre quais notas cada pagamento quita." },
      { title: "Boleto com baixa sozinha", desc: "Boleto registrado gerado da parcela da nota. Pagou, baixou, sem ninguém conferir." },
      { title: "Lançar por foto ou XML", desc: "Fotografe o boleto do fornecedor ou envie o XML da nota: o lançamento vem preenchido para você conferir." },
    ],
    groups: [
      {
        title: "Lucro e resultado", icon: "chart",
        intro: "Os números que respondem à pergunta mais importante: a empresa está ganhando dinheiro?",
        items: [
          { title: "DRE por competência", desc: "Receita bruta, impostos, custo das mercadorias, despesas e lucro líquido, montados sozinhos a partir dos lançamentos, mês a mês." },
          { title: "Resultado das vendas", desc: "O que entrou, o que custou e o que sobrou no mês, calculado a partir das notas fiscais autorizadas." },
          { title: "Fluxo de caixa por período", desc: "Entradas e saídas realizadas e previstas, dia a dia, semana a semana ou mês a mês." },
          { title: "Previsão de caixa mensal", desc: "O que vai entrar menos o que vai sair, para você enxergar o caixa dos próximos meses." },
          { title: "Painel financeiro executivo", desc: "Receita prevista e recebida, saldo projetado, despesas vencidas e resultado do mês num olhar." },
          { title: "Análise financeira", desc: "Recebido, em aberto e títulos agrupados por dias de atraso." },
          { title: "Plano financeiro", desc: "A composição do resultado e o peso de cada custo no total da empresa." },
          { title: "Centro de custo", desc: "A distribuição dos custos por área, para saber exatamente onde o dinheiro vai." },
          { title: "Resultado por licitação", desc: "Para quem vende ao governo: receita, custos, impostos e margem de cada processo licitatório." },
        ],
      },
      {
        title: "O que trabalha sozinho", icon: "zap",
        intro: "As automações que devolvem horas por semana ao seu time.",
        items: [
          { title: "Conciliação bancária automática", desc: "O extrato fecha as notas fiscais sozinho. Só abate com soma exata; o resto fica em \"Precisa de você\", com o motivo." },
          { title: "Extrato em OFX e em PDF", desc: "Os dois formatos se completam: um traz o CNPJ de quem pagou a TED, o outro o nome de quem mandou o Pix." },
          { title: "Open Finance", desc: "Conecte a conta do banco e sincronize o extrato sem baixar arquivo." },
          { title: "Boleto registrado com baixa automática", desc: "Boleto Sicoob com linha digitável, código de barras e PDF, baixado pelo banco e conferido todo dia." },
          { title: "Nota vira conta a receber", desc: "Cada parcela da nota autorizada entra no financeiro na hora, com vencimento e forma de pagamento." },
          { title: "Compra vira conta a pagar", desc: "Ao receber a mercadoria, a conta a pagar nasce com o vencimento da condição de pagamento." },
          { title: "Lançamento por foto ou XML", desc: "Foto do boleto ou XML da nota do fornecedor: o lançamento vem preenchido e você só confere." },
          { title: "Comissões automáticas", desc: "O que cada vendedor ganhou nas notas autorizadas: valor da nota menos o frete, vezes a comissão dele." },
        ],
      },
      {
        title: "Contas, cobrança e recebíveis", icon: "wallet",
        items: [
          { title: "Contas a receber", desc: "Clientes com pagamento em data combinada, vendas a prazo, assinaturas e recorrências." },
          { title: "Contas a pagar", desc: "Fornecedores, despesas e vencimentos, com recorrência e aviso do que vence." },
          { title: "Recebimentos e parcelas", desc: "Todas as cobranças com filtro por período, status e origem, e atalhos para cobrar pelo WhatsApp e enviar o Pix." },
          { title: "Títulos a receber", desc: "Cada parcela de nota em aberto. Selecione várias e dê baixa de uma vez, ou deixe a conciliação fechar." },
          { title: "Lançamentos avulsos", desc: "Entradas e saídas: despesas, salários, receitas e pagamentos que não vieram de nota." },
          { title: "Inadimplência", desc: "Clientes e parcelas em atraso, com quanto e há quantos dias." },
          { title: "Relatórios de recebíveis", desc: "O que vence, quem deve e o que já entrou: por vencimento, por cliente e recebidos." },
          { title: "Histórico de pagamentos", desc: "Entradas recebidas e despesas pagas numa visão transacional completa." },
        ],
      },
      {
        title: "Controle e segurança", icon: "shield",
        items: [
          { title: "Aprovação por valor e por área", desc: "Regras de quem aprova o quê. Despesa acima do limite espera quem tem autonomia." },
          { title: "Financeiro por empresa", desc: "Com o multi-empresa, cada lançamento fica na empresa certa e o grupo tem o resultado consolidado." },
          { title: "Permissões por perfil", desc: "O financeiro só aparece para quem pode ver, com o acesso de cada papel." },
          { title: "Auditoria de exclusões", desc: "Remover um recebimento ou lançamento fica registrado: quem, quando e o quê." },
          { title: "Exportação em Excel e PDF", desc: "Qualquer lista do financeiro sai pronta para o contador ou para a reunião." },
        ],
      },
    ],
    faq: [
      { q: "O DRE da Sebra é montado automaticamente?", a: "Sim. O DRE por competência é montado a partir dos lançamentos e das notas: receita, impostos, custos, despesas e lucro líquido, mês a mês, sem planilha." },
      { q: "Como funciona a conciliação bancária automática?", a: "Você importa o extrato em OFX ou PDF, ou conecta o banco pelo Open Finance. A Sebra cruza cada pagamento com as notas em aberto pelo CNPJ e pelo valor e dá baixa quando a soma fecha exatamente. O que não fecha fica separado para você decidir." },
      { q: "A Sebra emite boleto?", a: "Sim. Gera boleto registrado pelo Sicoob a partir da parcela da nota, com linha digitável, código de barras e PDF, e dá baixa automaticamente quando o boleto é pago." },
      { q: "Consigo ver o lucro de cada mês?", a: "Sim. O Resultado das vendas mostra o que entrou, o que custou e o que sobrou no mês a partir das notas autorizadas, e o DRE mostra o lucro líquido depois das despesas." },
      { q: "Posso controlar o financeiro de mais de uma empresa?", a: "Sim. Com o multi-empresa cada lançamento fica na empresa certa, e você vê o resultado de cada uma e o consolidado do grupo." },
    ],
    mock: "dre",
    mock2: "financeiro",
    related: ["orcamentos", "fiscal", "compras", "multi-empresa"],
    closing: "Saiba quanto sua empresa lucra de verdade, todo mês.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "orcamentos",
    nav: "Orçamentos",
    menuDesc: "Proposta em PDF que vira nota fiscal com um clique",
    icon: "file",
    eyebrow: "Orçamentos e propostas",
    title: "Orçamento profissional que vira nota fiscal com um clique",
    seoTitle: "Sistema de orçamentos com emissão de nota fiscal | Sebra",
    seoDesc: "Crie orçamentos em PDF com sua marca, envie por WhatsApp e e-mail e transforme o aprovado em nota fiscal sem redigitar. Produto em NF-e e serviço em NFS-e.",
    lead: "Proposta com a sua marca, versões, validade e condições. Enviada por WhatsApp ou e-mail. Aprovada, vira nota fiscal sem redigitar um item.",
    intro: "O orçamento é a primeira impressão da sua empresa e o começo de toda venda. Na Sebra ele nasce com seus produtos, serviços e preços, sai em PDF profissional e, aprovado, gera a nota fiscal certa. Se tiver produto e serviço juntos, a Sebra separa sozinha: produto em NF-e, serviço em NFS-e, como manda a lei.",
    pains: [
      { problem: "Orçamento feito no Word, cada vendedor de um jeito.", answer: "Modelo padrão com a sua logo, seus dados, termos e condições em todos os PDFs." },
      { problem: "Aprovou, e alguém redigita tudo na hora de emitir a nota.", answer: "Um clique abre a nota fiscal já preenchida com o orçamento." },
      { problem: "Vendedor dá desconto demais e ninguém controla.", answer: "Desconto acima do limite fica aguardando aprovação." },
    ],
    highlights: [
      { title: "Vira nota com um clique", desc: "O orçamento aprovado abre a nota fiscal preenchida, com o perfil fiscal certo de cada item." },
      { title: "Gera duas notas sozinho", desc: "Produto sai em NF-e e serviço em NFS-e. Emita uma, volte e emita a outra." },
      { title: "PDF com a sua marca", desc: "Logo, dados da empresa, apresentação e termos em todos os orçamentos." },
      { title: "Envio por WhatsApp e e-mail", desc: "O cliente recebe o PDF no canal que ele usa, direto da Sebra." },
    ],
    groups: [
      {
        title: "Montar o orçamento", icon: "file",
        items: [
          { title: "Itens do catálogo", desc: "Produtos e serviços cadastrados entram com preço, descrição e dados fiscais, sem digitar de novo." },
          { title: "Desconto com controle", desc: "Desconto por orçamento; acima do limite, aguarda aprovação de quem pode." },
          { title: "Validade e prazo de entrega", desc: "Data de validade da proposta e prazo de entrega em dias, impressos no documento." },
          { title: "Condição de pagamento", desc: "À vista, parcelado, boleto, Pix: a condição combinada já vai no orçamento." },
          { title: "Termos e observações", desc: "Texto de termos e observações padrão, editável em cada proposta." },
          { title: "Numeração e versões", desc: "Código próprio para cada orçamento e versões para acompanhar as revisões." },
        ],
      },
      {
        title: "Apresentar e enviar", icon: "mail",
        items: [
          { title: "PDF profissional", desc: "Documento comercial pronto para envio, com a sua identidade visual." },
          { title: "Logo por orçamento", desc: "Use a logo da empresa ou ajuste uma logo específica para aquele orçamento." },
          { title: "Dados fixos da empresa", desc: "Endereço, telefone e e-mail comercial incluídos automaticamente em todos os PDFs." },
          { title: "Apresentação personalizada", desc: "Um texto de apresentação da sua empresa no início da proposta." },
          { title: "Envio por WhatsApp", desc: "Mande o PDF para o cliente pelo WhatsApp sem sair do sistema." },
          { title: "Envio por e-mail", desc: "Ou envie por e-mail, com o documento anexado." },
        ],
      },
      {
        title: "Do aprovado à nota", icon: "receipt",
        items: [
          { title: "Situação de cada orçamento", desc: "Rascunhos, enviadas e aprovadas, com o valor aprovado somado." },
          { title: "Nota fiscal preenchida", desc: "Abra uma nota já preenchida com o orçamento: cliente, itens, valores e condição." },
          { title: "Produto em NF-e, serviço em NFS-e", desc: "Orçamento misto gera as duas notas, separadas como manda a lei." },
          { title: "Perfil fiscal do produto", desc: "Cada item entra na nota com o perfil fiscal do cadastro, sem chute de imposto." },
          { title: "Parcelas no financeiro", desc: "Autorizada a nota, as parcelas viram contas a receber." },
          { title: "Busca por código ou título", desc: "Ache qualquer orçamento antigo em segundos." },
        ],
      },
    ],
    faq: [
      { q: "O orçamento aprovado vira nota fiscal automaticamente?", a: "Com um clique. A Sebra abre a nota fiscal já preenchida com o cliente, os itens, os valores e a condição de pagamento do orçamento. Você confere e emite." },
      { q: "E se o orçamento tiver produto e serviço?", a: "A Sebra avisa que o orçamento gera duas notas: o produto sai em NF-e e o serviço em NFS-e, como manda a lei. Você emite uma, volta e emite a outra." },
      { q: "Posso colocar a logo da minha empresa no orçamento?", a: "Sim. A logo, os dados da empresa, a apresentação e os termos entram automaticamente em todos os PDFs, e você pode ajustar a logo de um orçamento específico." },
      { q: "Consigo enviar o orçamento pelo WhatsApp?", a: "Sim. O PDF pode ser enviado por WhatsApp ou por e-mail direto da Sebra." },
    ],
    mock: "orcamento",
    related: ["fiscal", "comercial", "financeiro", "estoque"],
    closing: "Feche mais vendas com orçamentos que viram nota sozinhos.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "fiscal",
    nav: "Notas fiscais",
    menuDesc: "NF-e, NFS-e e NFC-e com retenções e certificado A1",
    icon: "receipt",
    eyebrow: "Emissor de nota fiscal",
    title: "Emissão de nota fiscal completa: NF-e, NFS-e e NFC-e",
    seoTitle: "Emissor de NF-e, NFS-e e NFC-e integrado ao ERP | Sebra",
    seoDesc: "Emita NF-e, NFS-e e NFC-e com retenções, carta de correção, e-mail automático, pacote do contador e XML protegido e salvo.",
    lead: "Os três documentos fiscais num só lugar, por emissor homologado, com retenções, carta de correção, e-mail automático e o pacote do contador pronto.",
    intro: "A Sebra emite nota fiscal de verdade e cuida do que vem antes e depois dela: o perfil fiscal de cada produto, as retenções, os prazos legais de cancelamento e correção, a guarda do XML e o envio para quem precisa receber. E a nota nunca nasce sozinha: ela vem do orçamento, do pedido, do contrato ou da venda no balcão.",
    pains: [
      { problem: "Pago um emissor separado e ainda redigito tudo no sistema.", answer: "Emissão nativa, ligada ao orçamento, ao estoque e ao financeiro." },
      { problem: "A SEFAZ recusou e a mensagem parece outro idioma.", answer: "Rejeição traduzida em linguagem simples, dizendo o que corrigir." },
      { problem: "Todo mês alguém monta uma pasta de XML para o contador.", answer: "Pacote do contador: os XMLs do período e um relatório consolidado num arquivo." },
    ],
    highlights: [
      { title: "NF-e, NFS-e e NFC-e", desc: "Mercadoria, serviço e balcão, por emissor homologado." },
      { title: "Retenções na fonte", desc: "Calculadas e editáveis por nota, inclusive para venda a órgão público." },
      { title: "Pronta para a Reforma Tributária", desc: "Cadastro do produto com CST de IBS/CBS e classificação tributária (cClassTrib)." },
      { title: "Certificado A1 cifrado", desc: "Arquivo e senha protegidos com AES-256." },
    ],
    groups: [
      {
        title: "Emissão", icon: "receipt",
        items: [
          { title: "NF-e (nota de produto)", desc: "Nota fiscal eletrônica de mercadoria, com itens, impostos e transporte." },
          { title: "NFS-e (nota de serviço)", desc: "Nota de serviço com código do serviço e retenções." },
          { title: "NFC-e (cupom fiscal)", desc: "Nota do consumidor para a venda no balcão e no PDV." },
          { title: "Nota a partir do orçamento", desc: "O orçamento aprovado vira nota com o perfil fiscal certo de cada item." },
          { title: "Retenções na fonte", desc: "Alíquotas configuráveis e ajuste por nota antes de emitir." },
          { title: "Substituição tributária por item", desc: "ST e finalidade de emissão para distribuidor e indústria." },
          { title: "Tributos aproximados (IBPT)", desc: "O valor aproximado dos tributos na nota, como pede a Lei da Transparência." },
          { title: "Parcelamento da nota", desc: "As parcelas viram contas a receber no financeiro." },
          { title: "Transportadora na nota", desc: "Quem transporta a mercadoria, cadastrada uma vez e usada sempre." },
          { title: "Nota da Autorização de Fornecimento", desc: "Para quem vende ao governo: AFs em PDF lidas em lote viram nota." },
        ],
      },
      {
        title: "Depois de emitir", icon: "mail",
        items: [
          { title: "E-mail automático da nota", desc: "Enviada ao autorizar, um a um ou em lote, com o XML sempre anexado." },
          { title: "Carta de correção (CC-e)", desc: "Com o prazo legal contado da autorização, para o botão nunca enganar." },
          { title: "Cancelamento dentro do prazo", desc: "O sistema mostra até quando a nota ainda pode ser cancelada." },
          { title: "Inutilização de numeração", desc: "Pule números com segurança e registro." },
          { title: "Rejeições traduzidas", desc: "A mensagem da SEFAZ explicada em português claro." },
          { title: "DANFE e XML", desc: "Download a qualquer momento, por nota ou em lote." },
          { title: "XML protegido e salvo", desc: "Todos os XMLs ficam guardados com segurança, com cópia de segurança, pelo prazo que a lei exige." },
          { title: "Pacote do contador", desc: "Zip com os XMLs autorizados do período e um relatório consolidado." },
          { title: "Filtros, colunas e visões", desc: "Encontre qualquer nota por número, destinatário, CPF/CNPJ, data, valor ou situação." },
        ],
      },
      {
        title: "Cadastro fiscal", icon: "key",
        items: [
          { title: "Certificado digital A1", desc: "Arquivo e senha cifrados com AES-256, usados só por perfis autorizados." },
          { title: "Perfil fiscal do produto", desc: "CFOP, CST/CSOSN de ICMS, origem e NCM definidos uma vez no cadastro." },
          { title: "Campos da Reforma Tributária", desc: "CST de IBS/CBS e classificação tributária (cClassTrib) no cadastro do produto." },
          { title: "Configuração fiscal guiada", desc: "Regime, inscrições, série e numeração configurados com a nossa equipe." },
          { title: "Ambiente de homologação", desc: "Teste a emissão sem validade fiscal antes de ir para produção." },
          { title: "Permissões fiscais", desc: "Quem emite, quem cancela e quem só consulta." },
        ],
      },
    ],
    faq: [
      { q: "A Sebra emite NF-e, NFS-e e NFC-e?", a: "Sim. Os três documentos são emitidos por emissor homologado, no mesmo lugar, ligados ao orçamento, ao estoque e ao financeiro." },
      { q: "A Sebra já está preparada para a Reforma Tributária?", a: "O cadastro do produto já tem os campos de CST de IBS/CBS e de classificação tributária (cClassTrib), para você deixar o catálogo pronto." },
      { q: "Como fica a guarda do XML?", a: "Os XMLs ficam protegidos e salvos, com cópia de segurança, pelo prazo que a lei exige, e podem ser baixados a qualquer momento." },
      { q: "Consigo mandar as notas para o meu contador?", a: "Sim. O pacote do contador gera um arquivo com os XMLs autorizados do período e um relatório consolidado." },
      { q: "Meu certificado digital fica seguro?", a: "Sim. O arquivo do certificado A1 e a senha dele ficam cifrados com AES-256 e só perfis autorizados conseguem usá-lo." },
    ],
    mock: {
      title: "Notas Fiscais", subtitle: "NF-e, NFC-e e NFS-e emitidas e pendentes", group: "financeiro", active: "Notas Fiscais", h: 660,
      actions: [{ label: "Exportar", icon: "file" }, { label: "Nova nota", primary: true, icon: "receipt" }],
      kpis: [{ l: "Notas no mês", v: "184", icon: "receipt" }, { l: "Autorizadas", v: "179", tone: "ok", icon: "checkCircle" }, { l: "Faturado", v: "R$ 642 mil", icon: "wallet" }, { l: "Rejeitadas", v: "1", tone: "warn", icon: "bell" }],
      tabs: ["Todas", "NF-e", "NFS-e", "NFC-e", "Pendentes"],
      cols: ["Destinatário", "Número", "Tipo", "Emissão", "Valor", "Situação"], widths: [32, 10, 10, 14, 16, 18], num: [4],
      rows: [
        ["Construtora Horizonte", "1.302", "NF-e", "14/11 · 10:22", "R$ 28.380,00", { pill: "Autorizada", tone: "green" }],
        ["Construtora Horizonte", "88", "NFS-e", "14/11 · 10:25", "R$ 4.200,00", { pill: "Autorizada", tone: "green" }],
        ["Mercado Central", "1.301", "NF-e", "13/11 · 16:40", "R$ 9.640,00", { pill: "Autorizada", tone: "green" }],
        ["Consumidor final", "5.214", "NFC-e", "13/11 · 15:02", "R$ 186,90", { pill: "Autorizada", tone: "green" }],
        ["Clínica Bem Viver", "1.300", "NF-e", "13/11 · 11:18", "R$ 3.920,00", { pill: "Processando", tone: "blue" }],
      ],
    },
    related: ["orcamentos", "financeiro", "estoque", "servicos"],
    closing: "Emita a nota certa de primeira e esqueça o resto.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "comercial",
    nav: "Clientes e vendas",
    menuDesc: "Cadastro pela Receita, ficha do cliente e funil",
    icon: "users",
    eyebrow: "Clientes, vendas e CRM",
    title: "Clientes cadastrados pela Receita e vendas sob controle",
    seoTitle: "CRM e cadastro de clientes com consulta à Receita | Sebra",
    seoDesc: "Cadastre clientes pelo CNPJ com dados da Receita, veja a ficha completa de cada um, controle o funil de vendas, a recompra, as tarefas e os vendedores.",
    lead: "Digite o CNPJ e o cadastro vem pronto da Receita. Ficha completa do cliente, funil de vendas, recompra, tarefas e vendedores num só lugar.",
    intro: "A Sebra junta tudo o que você sabe sobre cada cliente: os dados oficiais da Receita, as notas emitidas, o que ele deve, o que ele já comprou, as conversas e as próximas ações. O comercial para de depender da memória do vendedor e passa a ter processo.",
    pains: [
      { problem: "Cadastrar cliente é copiar razão social e endereço do site da Receita.", answer: "Digite o CNPJ e razão social, nome fantasia e endereço vêm prontos." },
      { problem: "Para entender um cliente é preciso abrir cinco telas.", answer: "Ficha do cliente com notas, CNPJs, financeiro e linha do tempo numa tela." },
      { problem: "Ninguém lembra do cliente depois que ele compra.", answer: "Pós-venda e recompra: o cliente vira nova oportunidade sem duplicar cadastro." },
    ],
    highlights: [
      { title: "Cadastro pela Receita", desc: "Digite o CNPJ e o cadastro vem pronto: razão social, fantasia e endereço." },
      { title: "Ficha completa do cliente", desc: "Notas emitidas, CNPJs, financeiro e linha do tempo do relacionamento." },
      { title: "Funil de vendas", desc: "Pipeline em Kanban, lista e calendário, com automações por etapa." },
      { title: "Recompra e pós-venda", desc: "Cliente apto a recompra vira nova oportunidade, com histórico preservado." },
    ],
    groups: [
      {
        title: "Central de contatos", icon: "users",
        items: [
          { title: "Consulta de CNPJ na Receita", desc: "O cadastro do cliente começa pelo CNPJ e os dados oficiais vêm prontos." },
          { title: "Busca de endereço pelo CEP", desc: "Digite o CEP e rua, bairro e cidade são preenchidos." },
          { title: "Clientes, contatos e fornecedores", desc: "Cada tipo de relacionamento no seu lugar, com filtros e busca." },
          { title: "Dados fiscais do cliente", desc: "Inscrição estadual, inscrição municipal e e-mail fiscal para a nota sair certa." },
          { title: "Clientes do exterior", desc: "País, código BACEN e identificação no exterior para quem exporta." },
          { title: "Verificação do WhatsApp", desc: "Confere se o número do cliente existe no WhatsApp antes de salvar." },
          { title: "CNPJs vinculados", desc: "Vários CNPJs ligados ao mesmo cliente, com o papel de cada um (quem recebe a nota e quem paga)." },
          { title: "Transportadoras", desc: "Quem transporta a mercadoria nas notas fiscais." },
          { title: "Vendedores com Pix e comissão", desc: "Cada vendedor com chave Pix e percentual de comissão." },
          { title: "Fornecedores com histórico", desc: "Cadastro, categoria de fornecimento, condição de pagamento e histórico de compras." },
        ],
      },
      {
        title: "Ficha do cliente", icon: "eye",
        items: [
          { title: "Resumo do relacionamento", desc: "Situação, responsável, origem e próximos passos de cada cliente." },
          { title: "Notas e produtos comprados", desc: "Tudo que foi faturado para o cliente, por nota e por produto ou serviço." },
          { title: "Financeiro do cliente", desc: "Títulos das notas, vencimentos, o que está em aberto e o que já foi pago." },
          { title: "Linha do tempo", desc: "Conversas, orçamentos, notas, tarefas e pagamentos em ordem." },
          { title: "Situação de relacionamento", desc: "Lead, cliente ativo, pós-venda, apto a recompra ou em retrabalho." },
        ],
      },
      {
        title: "Vendas e rotina comercial", icon: "layers",
        items: [
          { title: "Central de Vendas (funil)", desc: "Pipeline em Kanban, lista e calendário, com etapas do jeito da sua empresa." },
          { title: "Automações por etapa", desc: "Ações disparadas quando a oportunidade muda de etapa ou fica parada." },
          { title: "Quadro Kanban de licitações", desc: "Para quem vende ao governo: o quadro anda junto com o status de cada licitação, nos dois sentidos." },
          { title: "Motor comercial", desc: "Pontuação das oportunidades, gargalos do funil e próximas ações sugeridas." },
          { title: "Recompra sem duplicar cadastro", desc: "Nova oportunidade ligada ao mesmo cliente; a antiga vira histórico." },
          { title: "Tarefas e follow-ups", desc: "Próximas ações com responsável, prazo, prioridade e vínculo com o cliente." },
          { title: "Caixa de entrada", desc: "Aprovações, tarefas, follow-ups, menções e notificações num só lugar." },
          { title: "Agendamentos", desc: "Reuniões e retornos integrados ao Google Calendar e ao Outlook." },
          { title: "Remarketing", desc: "Reative clientes que já compraram com campanhas pelo WhatsApp." },
        ],
      },
    ],
    faq: [
      { q: "A Sebra consulta o CNPJ na Receita Federal?", a: "Sim. Ao cadastrar um cliente pelo CNPJ, razão social, nome fantasia e endereço vêm preenchidos com os dados da Receita." },
      { q: "Consigo ver tudo de um cliente numa tela só?", a: "Sim. A ficha do cliente reúne as notas emitidas, os CNPJs vinculados, o financeiro e a linha do tempo do relacionamento." },
      { q: "A Sebra tem funil de vendas?", a: "Tem. A Central de Vendas mostra as oportunidades em Kanban, lista ou calendário, com etapas personalizadas e automações." },
      { q: "Dá para controlar comissão de vendedor?", a: "Sim. Cada vendedor tem chave Pix e percentual de comissão, e o financeiro calcula a comissão sobre as notas autorizadas." },
    ],
    mock: "cnpj",
    related: ["orcamentos", "fiscal", "financeiro", "atendimento"],
    closing: "Conheça seus clientes de verdade e venda de novo para eles.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "estoque",
    nav: "Produtos e estoque",
    menuDesc: "Formação de preço, estoque mínimo e depósitos",
    icon: "box",
    eyebrow: "Produtos, preços e estoque",
    title: "Preço calculado do jeito certo e estoque que nunca te surpreende",
    seoTitle: "Controle de estoque e formação de preço de venda | Sebra",
    seoDesc: "Formação de preço por markup, preço sugerido, estoque mínimo, reposição inteligente, vários depósitos e campos da Reforma Tributária.",
    lead: "Formação de preço com custos, impostos e margem, preço sugerido, estoque mínimo, reposição antes de faltar e estoque por depósito.",
    intro: "Preço errado é prejuízo silencioso. Na Sebra cada produto tem a conta completa: custo de reposição, importação e frete, impostos, despesas, comissão e a margem que você quer. O sistema sugere o preço e mostra se a venda é viável. E o estoque se move sozinho com cada venda, compra e transferência.",
    pains: [
      { problem: "Preço no chute, sem saber a margem real.", answer: "Formação de preço por markup divisor: custos, percentuais sobre a venda e margem desejada." },
      { problem: "Descubro que faltou produto quando o cliente pede.", answer: "Reposição inteligente: estoque baixo pelo mínimo e pelas saídas dos últimos 90 dias." },
      { problem: "Tenho mercadoria em vários lugares e me perco.", answer: "Estoque por depósito, com transferências e ajustes registrados." },
    ],
    highlights: [
      { title: "Formação de preço", desc: "Custo, impostos, despesas, comissão e margem: a Sebra sugere o preço e mostra a viabilidade." },
      { title: "Sugestão de preço pelo giro", desc: "Avisa quando um preço não condiz com o giro e a margem do produto." },
      { title: "Reposição antes de faltar", desc: "Estoque baixo calculado pelo mínimo e pelas saídas dos últimos 90 dias." },
      { title: "Pronto para IBS e CBS", desc: "Campos da Reforma Tributária no cadastro de cada produto." },
    ],
    groups: [
      {
        title: "Cadastro de produtos", icon: "box",
        items: [
          { title: "Catálogo completo", desc: "Código, descrição, categoria, código de barras e foto do produto." },
          { title: "Categorias", desc: "Organize o catálogo e os relatórios por categoria." },
          { title: "Perfil fiscal", desc: "CFOP padrão, CST/CSOSN de ICMS e origem da mercadoria, prontos para a nota." },
          { title: "Campos da Reforma Tributária", desc: "CST de IBS/CBS e classificação tributária (cClassTrib) por produto." },
          { title: "Insumos e materiais", desc: "Produtos usados na produção ou no serviço, com custo próprio." },
          { title: "Compra em moeda estrangeira", desc: "Para quem importa: custo com importação e frete no cálculo." },
        ],
      },
      {
        title: "Preço e margem", icon: "calc",
        items: [
          { title: "Formação do preço de venda", desc: "Markup divisor: custos mais percentuais sobre a venda mais a margem desejada." },
          { title: "Preço sugerido", desc: "O preço calculado ao lado do preço praticado, para você decidir." },
          { title: "Resumo da viabilidade", desc: "Mostra se o preço praticado cobre custos, impostos e margem." },
          { title: "Padrões de precificação", desc: "Percentuais padrão da empresa aplicados a todos os produtos." },
          { title: "Sugestões de preço", desc: "Avisa quando o preço não condiz com o giro e a margem, e aplica com um clique." },
          { title: "Custo atualizado na compra", desc: "Ao receber a mercadoria, o custo do produto se atualiza sozinho." },
        ],
      },
      {
        title: "Estoque", icon: "layers",
        items: [
          { title: "Estoque atual e mínimo", desc: "Saldo de cada produto com o mínimo que dispara o aviso." },
          { title: "Movimentação de estoque", desc: "Entradas e saídas com motivo, e o novo saldo na hora." },
          { title: "Baixa automática na venda", desc: "Nota e PDV baixam o estoque sozinhos." },
          { title: "Reposição inteligente", desc: "Estoque baixo pelo mínimo e pelas saídas dos últimos 90 dias; cote antes de faltar." },
          { title: "Vários depósitos (WMS)", desc: "Estoque por depósito, com depósito padrão." },
          { title: "Transferência entre depósitos", desc: "Mova mercadoria de um local para outro com registro." },
          { title: "Ajuste de inventário", desc: "Defina o valor exato depois da contagem, com histórico." },
        ],
      },
    ],
    faq: [
      { q: "Como a Sebra calcula o preço de venda?", a: "Pelo markup divisor: o custo de aquisição, mais os percentuais sobre a venda (impostos, despesas, comissão) e a margem desejada. A Sebra mostra o preço sugerido e se o preço praticado é viável." },
      { q: "O cadastro de produtos está pronto para a Reforma Tributária?", a: "Sim. Cada produto tem os campos de CST de IBS/CBS e de classificação tributária (cClassTrib)." },
      { q: "A Sebra avisa quando o estoque está acabando?", a: "Sim. A reposição usa o estoque mínimo e as saídas dos últimos 90 dias para mostrar o que precisa ser comprado antes de faltar." },
      { q: "Consigo controlar estoque em mais de um depósito?", a: "Sim. O multi-armazém controla o estoque por depósito, com transferências e ajustes de inventário." },
    ],
    mock: "produto",
    related: ["compras", "fiscal", "orcamentos", "operacao"],
    closing: "Venda com a margem certa e nunca mais perca venda por falta de estoque.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "compras",
    nav: "Compras",
    menuDesc: "Cotação com vários fornecedores, pedido e aprovação",
    icon: "cart",
    eyebrow: "Compras e fornecedores",
    title: "Compre pelo melhor preço, com aprovação e sem retrabalho",
    seoTitle: "Sistema de compras com cotação de fornecedores | Sebra",
    seoDesc: "Cote com vários fornecedores de uma vez, compare as respostas, gere o pedido com aprovação, receba a mercadoria e veja a conta a pagar nascer sozinha.",
    lead: "Cotação com vários fornecedores ao mesmo tempo, comparação das respostas, pedido com aprovação, recebimento parcial e conta a pagar automática.",
    intro: "Comprar bem é ganhar dinheiro antes de vender. Na Sebra você pede preço a vários fornecedores de uma vez, cada um recebe só a cotação dele, compara as respostas lado a lado e transforma a melhor em pedido. Quando a mercadoria chega, o estoque, o custo e a conta a pagar se atualizam sozinhos.",
    pains: [
      { problem: "Peço preço fornecedor por fornecedor, por WhatsApp.", answer: "Uma cotação vai para todos de uma vez, cada um vê só a dele." },
      { problem: "Compra grande sai sem ninguém aprovar.", answer: "Pedido acima do limite exige aprovação antes de ser gerado." },
      { problem: "A mercadoria chega e o financeiro nem fica sabendo.", answer: "Ao receber, a conta a pagar nasce com o vencimento combinado." },
    ],
    highlights: [
      { title: "Cotação simultânea", desc: "Peça preço a vários fornecedores; cada um recebe só a cotação dele." },
      { title: "Comparação de respostas", desc: "Preço e prazo de cada fornecedor lado a lado." },
      { title: "Aprovação por valor", desc: "Pedido acima do limite espera quem tem autonomia." },
      { title: "Conta a pagar automática", desc: "A mercadoria recebida vira conta a pagar e atualiza estoque e custo." },
    ],
    groups: [
      {
        title: "Cotação", icon: "search",
        items: [
          { title: "Cotação para vários fornecedores", desc: "Peça preço a vários fornecedores de uma vez; cada um recebe só a cotação dele." },
          { title: "Grupos de transmissão", desc: "Listas de fornecedores que você cota juntos, prontas para usar." },
          { title: "Envio por e-mail e PDF", desc: "Corpo do e-mail personalizado e cotação em PDF para baixar." },
          { title: "Resposta com preço e prazo", desc: "O fornecedor informa o preço e o prazo de entrega." },
          { title: "Comparação lado a lado", desc: "Total estimado e respostas de cada fornecedor para escolher a melhor." },
          { title: "Cotar a partir da reposição", desc: "Produtos com estoque baixo entram na cotação com um clique." },
        ],
      },
      {
        title: "Pedido e recebimento", icon: "truck",
        items: [
          { title: "Pedido de compra", desc: "Fornecedor, itens, condição de pagamento, frete, desconto e previsão de entrega." },
          { title: "Aprovação do pedido", desc: "Acima do limite, o pedido aguarda aprovação antes de seguir." },
          { title: "Recebimento parcial", desc: "Dê entrada no que chegou, com o número da nota ou comprovante." },
          { title: "Entrada no estoque", desc: "O recebido entra no estoque e atualiza o custo do produto." },
          { title: "Conta a pagar ao receber", desc: "Uma conta a pagar por recebimento, com vencimento pela condição de pagamento." },
          { title: "Situação das compras", desc: "Em andamento, em aprovação e recebidos, numa visão só." },
        ],
      },
      {
        title: "Fornecedores", icon: "users",
        items: [
          { title: "Cadastro de fornecedores", desc: "Pelo CNPJ, com dados da Receita, categoria de fornecimento e e-mail de compras." },
          { title: "Condição de pagamento padrão", desc: "Cada fornecedor com a sua condição já sugerida no pedido." },
          { title: "Histórico do fornecedor", desc: "Tudo o que já foi comprado de cada fornecedor." },
          { title: "Compra para contrato público", desc: "Para quem vende ao governo: o pedido nasce ligado ao contrato e ao item." },
        ],
      },
    ],
    faq: [
      { q: "Consigo cotar com vários fornecedores ao mesmo tempo?", a: "Sim. A cotação vai para vários fornecedores de uma vez e cada um recebe só a cotação dele. As respostas aparecem lado a lado para você comparar." },
      { q: "O pedido de compra pode exigir aprovação?", a: "Sim. Pela regra de aprovação, um pedido acima do limite aguarda a aprovação de quem tem autonomia antes de ser gerado." },
      { q: "O que acontece quando a mercadoria chega?", a: "Você registra o recebimento (inteiro ou parcial). A Sebra dá entrada no estoque, atualiza o custo do produto e cria a conta a pagar com o vencimento da condição de pagamento." },
    ],
    mock: "compras",
    related: ["estoque", "financeiro", "comercial", "multi-empresa"],
    closing: "Compre melhor e deixe o financeiro se atualizar sozinho.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "servicos",
    nav: "Serviços e contratos",
    menuDesc: "Avulso, assinatura ou pacote, NFS-e e recorrência",
    icon: "handshake",
    eyebrow: "Serviços e contratos recorrentes",
    title: "Serviço avulso, assinatura ou pacote, com nota e cobrança no automático",
    seoTitle: "Sistema para prestadores de serviço e contratos | Sebra",
    seoDesc: "Serviços avulsos, por assinatura ou em pacote, NFS-e com retenção, contratos recorrentes, ordens de serviço e agenda por profissional.",
    lead: "Cadastre o serviço do jeito que você cobra, emita a NFS-e com os dados certos e controle contratos recorrentes, ordens de serviço e agendas.",
    intro: "Prestar serviço tem jeitos diferentes de cobrar: por execução, por ciclo de assinatura ou em pacote com várias sessões. A Sebra entende os três, leva os dados fiscais certos para a NFS-e e acompanha cada contrato do início à renovação.",
    pains: [
      { problem: "Assinatura e pacote controlados em planilha.", answer: "Serviço com cobrança por execução, assinatura por ciclo ou pacote de execuções." },
      { problem: "NFS-e com retenção é sempre uma dúvida.", answer: "Código do serviço e dados fiscais no cadastro, retenções na nota." },
      { problem: "Contrato vence e ninguém percebe.", answer: "Contratos com vigência, renovação, aditivos e alerta." },
    ],
    highlights: [
      { title: "Três formas de cobrar", desc: "Por execução, assinatura por ciclo ou pacote com várias execuções." },
      { title: "NFS-e com os dados certos", desc: "Código do serviço e retenções no cadastro, prontos para a nota." },
      { title: "Contratos recorrentes", desc: "Vigência, renovação, aditivos, cláusulas e linha do tempo." },
      { title: "Ordens de serviço", desc: "Diagnóstico, peças, mão de obra e garantia por atendimento." },
    ],
    groups: [
      {
        title: "Cadastro de serviços", icon: "handshake",
        items: [
          { title: "Cobrança por execução", desc: "O serviço é cobrado a cada vez que é prestado." },
          { title: "Assinatura por ciclo", desc: "Cobrança mensal, bimestral, trimestral, semestral ou no ciclo que você definir." },
          { title: "Pacote de execuções", desc: "Várias execuções vendidas juntas, como 10 sessões ou 12 visitas." },
          { title: "Duração e agenda", desc: "Duração em minutos e se o serviço ocupa a agenda do profissional." },
          { title: "Dados para a NFS-e", desc: "Código do serviço e descrição que aparece na proposta e no documento fiscal." },
          { title: "Custo, centro de custo e plano de contas", desc: "Cada serviço já cai no lugar certo do financeiro." },
        ],
      },
      {
        title: "Contratos", icon: "contract",
        items: [
          { title: "Contratos recorrentes", desc: "Cliente, serviços, valor, dia de vencimento e forma de pagamento." },
          { title: "Vigência e renovação", desc: "Contratos ativos, vencendo e renovados, com alerta." },
          { title: "Aditivos e cláusulas", desc: "Alterações do contrato registradas, com as cláusulas guardadas." },
          { title: "Assinatura do contrato", desc: "Quem assinou e quando, registrado no contrato." },
          { title: "Churn e cancelamentos", desc: "Cancelamentos com motivo e o churn dos últimos 90 dias." },
          { title: "Linha do tempo do contrato", desc: "Tudo que aconteceu com o contrato, em ordem." },
        ],
      },
      {
        title: "Execução", icon: "wrench",
        items: [
          { title: "Ordens de serviço", desc: "Cliente, equipamento, diagnóstico, peças e mão de obra por atendimento." },
          { title: "Situação da OS", desc: "Aguardando aprovação, em andamento ou em execução, com o faturado no mês." },
          { title: "Garantia do serviço", desc: "Prazo de garantia em dias registrado na OS." },
          { title: "Agenda por profissional", desc: "Grade de atendimentos por profissional, com reserva de horário." },
          { title: "NFS-e com retenções", desc: "Retenções na fonte calculadas e editáveis na nota de serviço." },
        ],
      },
    ],
    faq: [
      { q: "A Sebra serve para quem cobra por assinatura?", a: "Sim. O serviço pode ser cobrado por execução, por assinatura em ciclos (mensal, bimestral, trimestral, semestral) ou em pacote com várias execuções." },
      { q: "A Sebra emite NFS-e?", a: "Sim. O código do serviço e os dados fiscais ficam no cadastro, e as retenções são calculadas e editáveis na nota." },
      { q: "Consigo controlar contratos recorrentes?", a: "Sim. Os contratos têm vigência, renovação, aditivos, cláusulas, assinatura e linha do tempo, com o churn dos últimos 90 dias." },
    ],
    mock: {
      title: "Contratos", subtitle: "Recorrência, renovações e aditivos", group: "financeiro", active: "Contratos", h: 640,
      actions: [{ label: "Novo contrato", primary: true, icon: "contract" }],
      kpis: [{ l: "Contratos ativos", v: "62", icon: "contract" }, { l: "Receita recorrente", v: "R$ 48,6 mil", sub: "por mês", tone: "ok", icon: "wallet" }, { l: "Vencendo em 30 dias", v: "5", tone: "warn", icon: "clock" }, { l: "Churn em 90 dias", v: "2,1%", icon: "chart" }],
      tabs: ["Todos", "Ativos", "Vencendo", "Churn"],
      cols: ["Cliente", "Serviço", "Ciclo", "Valor", "Vigência", "Situação"], widths: [26, 24, 11, 13, 12, 14], num: [3],
      rows: [
        ["Clínica Bem Viver", "Manutenção de equipamentos", "Mensal", "R$ 1.890,00", "até 08/2027", { pill: "Ativo", tone: "green" }],
        ["Mercado Central", "Suporte técnico em TI", "Mensal", "R$ 2.400,00", "até 12/2026", { pill: "Vencendo", tone: "amber" }],
        ["Escola Novo Saber", "Limpeza e conservação", "Mensal", "R$ 6.300,00", "até 02/2027", { pill: "Ativo", tone: "green" }],
        ["Construtora Horizonte", "Consultoria ambiental", "Trimestral", "R$ 4.800,00", "até 06/2027", { pill: "Ativo", tone: "green" }],
        ["Studio Forma", "Pacote 10 sessões", "Pacote", "R$ 1.500,00", "7 de 10 usadas", { pill: "Em uso", tone: "blue" }],
      ],
    },
    related: ["fiscal", "financeiro", "operacao", "comercial"],
    closing: "Cobre do seu jeito e deixe a nota e a renovação no automático.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "multi-empresa",
    nav: "Multi-empresa",
    menuDesc: "Vários CNPJs, matriz, filiais e resultado do grupo",
    icon: "building",
    eyebrow: "Multi-empresa",
    title: "Todas as empresas do grupo num sistema só, com o resultado consolidado",
    seoTitle: "ERP multiempresa: matriz, filiais e vários CNPJs | Sebra",
    seoDesc: "Opere matriz, filiais e empresas do mesmo grupo num só sistema, com notas, financeiro e extrato por empresa e o resultado consolidado do grupo.",
    lead: "Matriz, filiais e empresas do mesmo grupo no mesmo sistema. Cada uma com seus dados, e o resultado do grupo somado sozinho.",
    intro: "Muitas empresas crescem abrindo outro CNPJ: uma filial, uma empresa para outro regime, uma nova unidade. Na Sebra todas convivem no mesmo sistema. Você troca de empresa num clique, cada lançamento fica no CNPJ certo e o resultado do grupo aparece consolidado.",
    pains: [
      { problem: "Um sistema para cada CNPJ e uma planilha para somar tudo.", answer: "Todas as empresas no mesmo sistema, com o resultado do grupo consolidado." },
      { problem: "Lançamento cai na empresa errada e bagunça o resultado.", answer: "Lançamentos não alocados ficam visíveis para você alocar na empresa certa." },
      { problem: "Equipe de uma unidade enxerga dados da outra.", answer: "Acesso restrito por empresa." },
    ],
    highlights: [
      { title: "Resultado consolidado", desc: "O resultado do mês de cada empresa e o total do grupo." },
      { title: "Troca de empresa num clique", desc: "Seletor de empresa em todo o sistema." },
      { title: "Lançamentos alocados", desc: "Nada fica perdido: lançamentos sem empresa aparecem para você alocar." },
      { title: "Notas e extratos por CNPJ", desc: "Cada empresa emite as próprias notas e concilia o próprio extrato." },
    ],
    groups: [
      {
        title: "Grupo de empresas", icon: "building",
        items: [
          { title: "Matriz e filiais", desc: "Cadastre a matriz e as filiais com razão social, nome fantasia, inscrição estadual e endereço." },
          { title: "Seletor de empresa", desc: "Troque a empresa ativa em qualquer tela." },
          { title: "Resultado consolidado do mês", desc: "Resultado de cada empresa e do grupo, lado a lado." },
          { title: "Alocação de lançamentos", desc: "Lançamentos recentes sem empresa aparecem para serem alocados." },
        ],
      },
      {
        title: "Operação por empresa", icon: "layers",
        items: [
          { title: "Notas por CNPJ emissor", desc: "Cada empresa emite as próprias notas fiscais." },
          { title: "Financeiro por empresa", desc: "Contas, recebimentos e resultado separados por CNPJ." },
          { title: "Extrato por empresa", desc: "Importe o extrato de cada empresa e concilie no CNPJ certo." },
          { title: "Baixa automática por empresa", desc: "Ligue ou desligue a baixa automática em cada empresa." },
          { title: "Contratos públicos por empresa", desc: "Para quem vende ao governo com mais de um CNPJ." },
          { title: "Acesso restrito por empresa", desc: "Cada pessoa vê só as empresas que pode ver." },
        ],
      },
    ],
    faq: [
      { q: "A Sebra é um ERP multiempresa?", a: "Sim. Matriz, filiais e empresas do mesmo grupo ficam no mesmo sistema, cada uma com seus dados, e você vê o resultado consolidado do grupo." },
      { q: "Cada empresa emite a própria nota fiscal?", a: "Sim. As notas, o financeiro e o extrato ficam separados por CNPJ." },
      { q: "Posso limitar o acesso de um funcionário a uma empresa só?", a: "Sim. O acesso pode ser restrito por empresa." },
    ],
    mock: {
      title: "Multi-empresa", subtitle: "Matriz, filiais e resultado consolidado do grupo", group: "modulos", active: "Multi-empresa", h: 620,
      actions: [{ label: "Nova empresa", primary: true, icon: "building" }],
      kpis: [{ l: "Empresas no grupo", v: "3", icon: "building" }, { l: "Filiais", v: "2", icon: "map" }, { l: "Resultado do grupo (mês)", v: "R$ 126,4 mil", tone: "ok", icon: "chart" }, { l: "Lançamentos não alocados", v: "4", tone: "warn", icon: "bell" }],
      cols: ["Empresa", "CNPJ", "Tipo", "Receita (mês)", "Resultado (mês)"], widths: [30, 22, 12, 18, 18], num: [3, 4],
      rows: [
        ["Comercial Atlântico Ltda", "12.345.678/0001-90", "Matriz", "R$ 412.800,00", "R$ 80.330,00"],
        ["Comercial Atlântico · Joinville", "12.345.678/0002-71", "Filial", "R$ 186.200,00", "R$ 31.900,00"],
        ["Comercial Atlântico · Itajaí", "12.345.678/0003-52", "Filial", "R$ 96.500,00", "R$ 14.170,00"],
      ],
    },
    related: ["financeiro", "fiscal", "paineis", "compras"],
    closing: "Cresça abrindo empresas sem multiplicar sistemas.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "paineis",
    nav: "Painéis e relatórios",
    menuDesc: "Painel do dono, metas e relatórios por área",
    icon: "chart",
    eyebrow: "Painéis e relatórios",
    title: "O pulso do negócio numa tela só",
    seoTitle: "Painéis gerenciais e relatórios para empresas | Sebra",
    seoDesc: "Painel do dono, painéis financeiro e comercial, analytics por área, metas e produtividade, com exportação em Excel e PDF.",
    lead: "Painel do dono, painéis financeiro e comercial, relatórios por área, metas e produtividade. Tudo exportável em Excel e PDF.",
    intro: "Decidir bem depende de enxergar. Na Sebra cada área tem o seu painel, e o dono tem uma tela que resume tudo: o que está atrasado, o que está no vermelho e o que está indo bem. Como os dados vêm do próprio sistema, os números batem entre si.",
    pains: [
      { problem: "Para saber como a empresa vai, preciso pedir relatório para três pessoas.", answer: "Painel do dono com o pulso do negócio numa tela." },
      { problem: "Cada área tem um número diferente para a mesma coisa.", answer: "Os painéis leem os mesmos dados: financeiro e vendas conversam." },
      { problem: "Relatório para a reunião é uma tarde de planilha.", answer: "Exportação em Excel e PDF de qualquer lista." },
    ],
    highlights: [
      { title: "Painel do dono", desc: "O pulso do negócio: atrasos, vermelhos e o que está em dia." },
      { title: "Painéis por área", desc: "Financeiro e comercial, cada um com seus indicadores." },
      { title: "Metas e produtividade", desc: "Acompanhe metas e a produtividade do time." },
      { title: "Excel e PDF", desc: "Relatórios prontos para o contador e para a reunião." },
    ],
    groups: [
      {
        title: "Painéis executivos", icon: "chart",
        items: [
          { title: "Painel do dono", desc: "Visão executiva do negócio: o que está atrasado, no vermelho ou em dia." },
          { title: "Painel financeiro", desc: "Receita, fluxo e inadimplência." },
          { title: "Painel comercial", desc: "Funil, vendedores e atendimento." },
        ],
      },
      {
        title: "Analytics por área", icon: "pie",
        items: [
          { title: "Executivo", desc: "Resumo, vendas e operação." },
          { title: "Comercial", desc: "Leads, clientes e conversas." },
          { title: "Produtos", desc: "Desempenho dos produtos e funil de vendas." },
          { title: "Financeiro", desc: "Resultado, previsão e cobrança." },
          { title: "Produtividade", desc: "Entregas e ritmo do time." },
          { title: "Metas", desc: "Metas definidas e o quanto já foi alcançado." },
        ],
      },
      {
        title: "Relatórios", icon: "file",
        items: [
          { title: "Relatórios de recebíveis", desc: "Por vencimento, por cliente e recebidos." },
          { title: "Relatórios de clientes", desc: "Distribuição da base entre contato, cliente, pós-venda e recompra." },
          { title: "Relatórios de contratos", desc: "Itens, compras e saldos dos contratos, em Excel e PDF." },
          { title: "Exportação em Excel e PDF", desc: "As listas do sistema saem prontas para compartilhar." },
        ],
      },
    ],
    faq: [
      { q: "O que é o painel do dono?", a: "É uma visão executiva do negócio numa tela: mostra o que está atrasado, o que está no vermelho e o que está em dia, a partir dos dados do próprio sistema." },
      { q: "Os relatórios podem ser exportados?", a: "Sim. As listas e relatórios saem em Excel e PDF." },
      { q: "Tem painel para cada área?", a: "Sim. Há painéis financeiro e comercial, além do analytics com abas executivo, comercial, produtos, financeiro, produtividade e metas." },
    ],
    mock: "financeiro",
    related: ["financeiro", "comercial", "orcamentos", "multi-empresa"],
    closing: "Decida olhando números que batem entre si.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "operacao",
    nav: "PDV, OS, frota e produção",
    menuDesc: "Frente de caixa, ordens de serviço, frota, produção e obras",
    icon: "factory",
    eyebrow: "Operação",
    title: "Do balcão à fábrica: PDV, ordens de serviço, frota, produção e obras",
    seoTitle: "PDV, ordem de serviço, frota, produção e obras | Sebra ERP",
    seoDesc: "Frente de caixa, ordens de serviço, gestão de frota, produção com ficha técnica e obras com CNO e retenção de INSS, ligados ao financeiro.",
    lead: "Os módulos da operação, ligados ao estoque, à nota e ao financeiro: frente de caixa, ordens de serviço, frota, produção com ficha técnica e obras.",
    intro: "Cada negócio tem a sua operação. A Sebra liga o módulo certo ao resto da empresa: a venda do balcão baixa o estoque, a ordem de produção consome a matéria-prima, a obra recebe as notas contra ela e o caixa fecha conferido.",
    pains: [
      { problem: "Fechamento de caixa que nunca bate.", answer: "Sessão de caixa com troco, valor esperado e valor contado." },
      { problem: "A produção consome estoque e ninguém registra.", answer: "Ordem de produção baixa a matéria-prima e avisa quando falta." },
      { problem: "Obra controlada em planilha, retenção de INSS no chute.", answer: "Obras com CNO, medições, retenção de INSS e notas por obra." },
    ],
    highlights: [
      { title: "PDV com sessão de caixa", desc: "Abertura com troco e fechamento conferido." },
      { title: "Ordens de serviço", desc: "Diagnóstico, peças, mão de obra e garantia." },
      { title: "Produção com ficha técnica", desc: "Ordens que checam e consomem a matéria-prima." },
      { title: "Obras com CNO", desc: "Medições, retenção de INSS e notas por obra." },
    ],
    groups: [
      {
        title: "PDV / Frente de caixa", icon: "barcode",
        items: [
          { title: "Sessão de caixa", desc: "Abra o caixa com o valor de troco e comece a vender." },
          { title: "Venda rápida no balcão", desc: "Produtos do catálogo, pagamento e cupom." },
          { title: "NFC-e na venda", desc: "Cupom fiscal eletrônico emitido no balcão." },
          { title: "Fechamento conferido", desc: "Valor esperado em caixa contra o valor contado." },
          { title: "Baixa de estoque", desc: "A venda do balcão baixa o estoque na hora." },
        ],
      },
      {
        title: "Ordens de serviço", icon: "wrench",
        items: [
          { title: "Abertura da OS", desc: "Cliente, equipamento e diagnóstico." },
          { title: "Peças e mão de obra", desc: "Itens e valores do atendimento técnico." },
          { title: "Aprovação e execução", desc: "Aguardando aprovação, em andamento ou em execução." },
          { title: "Garantia", desc: "Prazo de garantia em dias." },
          { title: "Faturado no mês", desc: "Quanto as ordens de serviço renderam no mês." },
        ],
      },
      {
        title: "Gestão de frota", icon: "truck",
        items: [
          { title: "Cadastro de veículos", desc: "Veículos com motorista padrão e situação." },
          { title: "Viagens", desc: "Origem, destino e viagens em andamento." },
          { title: "Abastecimento", desc: "Registro de cada abastecimento." },
          { title: "Manutenção", desc: "Manutenções dos veículos e quem está parado." },
        ],
      },
      {
        title: "Produção / MRP", icon: "factory",
        items: [
          { title: "Ficha técnica", desc: "Os componentes de cada produto acabado." },
          { title: "Ordens de produção", desc: "Quantidade a produzir e data planejada." },
          { title: "Checagem de matéria-prima", desc: "Avisa se o estoque é suficiente antes de produzir." },
          { title: "Consumo automático", desc: "A produção baixa a matéria-prima e gera o produto acabado." },
        ],
      },
      {
        title: "Obras", icon: "hardhat",
        items: [
          { title: "Cadastro da obra com CNO", desc: "Cliente, contratante e Cadastro Nacional de Obras." },
          { title: "Medições", desc: "Medições registradas por obra." },
          { title: "Retenção de INSS", desc: "Retenção sobre a mão de obra e valor líquido." },
          { title: "Notas por obra", desc: "As notas emitidas contra cada obra e o faturado." },
        ],
      },
    ],
    faq: [
      { q: "A Sebra tem frente de caixa (PDV)?", a: "Sim. O PDV tem sessão de caixa com troco, venda rápida no balcão, NFC-e e fechamento com o valor esperado contra o valor contado." },
      { q: "Tem ordem de serviço?", a: "Sim. A OS registra cliente, equipamento, diagnóstico, peças, mão de obra, garantia e a situação de cada atendimento." },
      { q: "A Sebra controla produção?", a: "Sim. A produção trabalha com ficha técnica e ordens de produção que checam e consomem a matéria-prima do estoque." },
      { q: "Serve para construtora?", a: "Sim. O módulo de obras tem CNO, medições, retenção de INSS e as notas emitidas contra cada obra." },
    ],
    mock: {
      title: "Ordens de Serviço", subtitle: "Diagnóstico, peças e mão de obra por atendimento técnico", group: "modulos", active: "Ordens de Serviço", h: 620,
      actions: [{ label: "Nova OS", primary: true, icon: "wrench" }],
      kpis: [{ l: "Em andamento", v: "11", icon: "wrench" }, { l: "Aguardando aprovação", v: "4", tone: "warn", icon: "clock" }, { l: "Faturado no mês", v: "R$ 38,2 mil", tone: "ok", icon: "wallet" }, { l: "Em garantia", v: "17", icon: "shield" }],
      cols: ["OS / cliente", "Equipamento", "Técnico", "Valor", "Situação"], widths: [30, 24, 16, 14, 16], num: [3],
      rows: [
        ["OS 1.284 · Clínica Bem Viver", "Autoclave 21L", "Marcos", "R$ 1.240,00", { pill: "Em execução", tone: "blue" }],
        ["OS 1.283 · Mercado Central", "Balança comercial", "Patrícia", "R$ 380,00", { pill: "Aguardando aprovação", tone: "amber" }],
        ["OS 1.282 · Escola Novo Saber", "Projetor multimídia", "Marcos", "R$ 520,00", { pill: "Em andamento", tone: "violet" }],
        ["OS 1.281 · Studio Forma", "Ar-condicionado 18.000 BTUs", "Diego", "R$ 890,00", { pill: "Concluída", tone: "green" }],
      ],
    },
    related: ["estoque", "servicos", "fiscal", "financeiro"],
    closing: "A operação do seu negócio ligada ao resto da empresa.",
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "atendimento",
    nav: "Atendimento e WhatsApp",
    menuDesc: "WhatsApp, Telegram, suporte com prazo e agenda",
    icon: "chat",
    eyebrow: "Atendimento",
    title: "Atendimento no WhatsApp ligado ao cliente, ao orçamento e à nota",
    seoTitle: "Atendimento no WhatsApp integrado ao ERP | Sebra",
    seoDesc: "Conversas de WhatsApp e Telegram num painel, filas e transferência, suporte com prazo, chat interno, agendas por profissional e mensagens de agendamento.",
    lead: "Conversas de WhatsApp e Telegram num painel, com filas, etiquetas, suporte com prazo, chat da equipe e agendas por profissional.",
    intro: "O atendimento da Sebra vive dentro do ERP. A conversa com o cliente fica ao lado do orçamento, da nota e da parcela dele. Quem assume a conversa já sabe de tudo, e a equipe resolve junto sem sair do sistema.",
    pains: [
      { problem: "Conversa no celular de um, no computador de outro.", answer: "Todos os canais num painel, com o histórico por cliente." },
      { problem: "O cliente repete a história para cada atendente.", answer: "O contexto acompanha a conversa." },
      { problem: "A equipe alinha por fora, no WhatsApp pessoal.", answer: "Chat interno com menções." },
    ],
    highlights: [
      { title: "WhatsApp e Telegram", desc: "Os canais num painel só." },
      { title: "Filas e transferência", desc: "Meu atendimento, equipe e finalizadas." },
      { title: "Suporte com prazo", desc: "Tickets com categoria, prioridade e prazo." },
      { title: "Agenda por profissional", desc: "Com mensagens de agendamento pelo WhatsApp." },
    ],
    groups: [
      {
        title: "Conversas", icon: "chat",
        items: [
          { title: "WhatsApp integrado", desc: "Receba e responda sem sair da plataforma." },
          { title: "Telegram", desc: "Conversas do bot da empresa no mesmo painel." },
          { title: "Filas de atendimento", desc: "Meu atendimento, equipe e finalizadas." },
          { title: "Transferência de conversa", desc: "Passe a conversa para outra pessoa com o histórico." },
          { title: "Etiquetas e busca", desc: "Organize conversas e encontre mensagens." },
          { title: "Mensagens rápidas", desc: "Modelos prontos para responder com um clique." },
          { title: "Dados do cliente na conversa", desc: "Campos, oportunidades e linha do tempo ao lado da conversa." },
        ],
      },
      {
        title: "Suporte e equipe", icon: "users",
        items: [
          { title: "Tickets de suporte", desc: "Categoria, prioridade e prazo para cada chamado." },
          { title: "Soluções anteriores", desc: "Anotações do cliente e respostas de tickets passados para reaproveitar." },
          { title: "Chat interno", desc: "A equipe conversa e menciona colegas." },
          { title: "Chamadas de voz e vídeo", desc: "Fale com a equipe ou com o cliente pela plataforma." },
          { title: "Transcrições de reunião", desc: "A transcrição vira anotação organizada por projeto." },
        ],
      },
      {
        title: "Agenda", icon: "clock",
        items: [
          { title: "Agendas por profissional", desc: "Grade de atendimentos com reserva de horário." },
          { title: "Mensagens de agendamento", desc: "Templates de WhatsApp para confirmar e lembrar horários." },
          { title: "Google Calendar e Outlook", desc: "Agendamentos sincronizados com o calendário." },
        ],
      },
    ],
    faq: [
      { q: "A Sebra integra com o WhatsApp?", a: "Sim. As conversas de WhatsApp ficam num painel dentro do sistema, com filas, transferência, etiquetas e os dados do cliente ao lado." },
      { q: "Tem controle de chamados de suporte?", a: "Sim. Os tickets têm categoria, prioridade e prazo, e mostram as soluções de tickets anteriores do cliente." },
      { q: "Consigo agendar atendimentos por profissional?", a: "Sim. A agenda mostra a grade de cada profissional e pode enviar mensagens de agendamento pelo WhatsApp." },
    ],
    mock: {
      title: "Conversas", subtitle: "Atendimento omnichannel", group: "vendas", active: "Conversas", h: 620,
      kpis: [{ l: "Abertas", v: "18", icon: "chat" }, { l: "Na fila", v: "5", tone: "warn", icon: "clock" }, { l: "Finalizadas hoje", v: "34", tone: "ok", icon: "checkCircle" }],
      tabs: ["Meu atendimento", "Equipe", "Finalizadas"],
      cols: ["Contato", "Canal", "Última mensagem", "Status"], widths: [26, 14, 40, 20],
      rows: [
        ["Marina (compras)", "WhatsApp", "Pode mandar o orçamento em PDF?", { pill: "Em atendimento", tone: "blue" }],
        ["Roberto Lima", "WhatsApp", "Qual o prazo de entrega da mesa?", { pill: "Na fila", tone: "amber" }],
        ["Setor fiscal", "Telegram", "Recebemos a nota, obrigado", { pill: "Finalizada", tone: "green" }],
        ["Clínica Bem Viver", "WhatsApp", "Confirmado o horário de terça", { pill: "Finalizada", tone: "green" }],
      ],
    },
    related: ["comercial", "servicos", "orcamentos", "paineis"],
    closing: "Atenda melhor, com o cliente inteiro na tela.",
  },
];

export const getSolucao = (slug: string) => solucoes.find((s) => s.slug === slug);
export const totalFuncoes = solucoes.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.items.length, 0), 0);
