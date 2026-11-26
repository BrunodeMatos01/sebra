// Perguntas frequentes. Cada lista também vira FAQPage (dado estruturado do
// Google), então as respostas precisam ser fiéis ao que o sistema faz.

export type Faq = { q: string; a: string };

export const faqHome: Faq[] = [
  { q: "O que é a Sebra?", a: "A Sebra é um sistema de gestão (ERP) brasileiro com licitações, notas fiscais, orçamentos, estoque, serviços e financeiro num sistema só, e além dele desenvolvemos automações operacionais sob medida para os processos da sua empresa." },
  { q: "Vocês fazem automação de processos?", a: "Sim, desenvolvemos automações sob medida, como robôs para tarefas repetitivas, integração entre sistemas, planilhas e WhatsApp, leitura de documentos e fluxos de aprovação, com o sistema que você já usa ou com a Sebra." },
  { q: "A Sebra serve para o meu ramo?", a: "A Sebra atende importadoras, prestadores de serviço e, com um módulo especializado, empresas que vendem para o governo, com foco em quem precisa de nota fiscal, estoque, orçamentos e financeiro bem controlados." },
  { q: "A Sebra emite nota fiscal?", a: "Sim, emite NF-e, NFS-e e NFC-e por emissor homologado, com retenções, carta de correção, envio automático por e-mail, pacote do contador e XML protegido e salvo." },
  { q: "Consigo ver o lucro real da empresa no mês?", a: "Sim, o DRE por competência e o resultado das vendas são montados sozinhos a partir das notas e dos lançamentos, e você vê o que entrou, o que custou e o que sobrou." },
  { q: "O orçamento vira nota fiscal?", a: "Sim, o orçamento aprovado abre a nota fiscal já preenchida e, se tiver produto e serviço, a Sebra separa em NF-e e NFS-e, como manda a lei." },
  { q: "Tem conciliação bancária e boleto?", a: "Tem, a conciliação lê o extrato (OFX, PDF ou Open Finance) e dá baixa nas notas pagas com soma exata, e o boleto registrado é baixado automaticamente quando pago." },
  { q: "Minha empresa tem mais de um CNPJ, funciona?", a: "Funciona, com o multi-empresa você opera matriz, filiais e empresas do mesmo grupo, cada uma com seus dados, e vê o resultado consolidado." },
  { q: "Vendo para o governo, a Sebra ajuda?", a: "Ajuda muito, porque o módulo de licitações busca editais no PNCP, controla certidões, contratos com saldo e vigência, empenhos, notas com retenção e o resultado de cada licitação." },
  { q: "Preciso parar a empresa para implantar?", a: "Não, a implantação é conduzida pela nossa equipe em seis etapas, do diagnóstico à liberação, e você continua trabalhando enquanto isso." },
];

export const faqLicitacoes: Faq[] = [
  { q: "A Sebra é um sistema para licitação ou um ERP?", a: "Os dois, a Sebra acompanha a licitação (edital, prazos, habilitação, certidões) e continua depois que você ganha: contrato com saldo e vigência, empenhos, nota fiscal, boleto, recebimento e o lucro de cada processo, tudo ligado ao financeiro e ao estoque." },
  { q: "Consigo buscar editais pela Sebra?", a: "Sim, a Sebra consulta direto o PNCP (Portal Nacional de Contratações Públicas), a base oficial onde todo órgão sob a Lei 14.133/2021 publica, e você busca por palavra-chave e estado, em pregão, dispensa, inexigibilidade e concorrência." },
  { q: "Dá para acompanhar as licitações num quadro Kanban, como no Trello?", a: "Sim, e ligado de verdade, porque na Central de Vendas o quadro de licitações e a tela de Licitação são a mesma coisa: licitação nova vira cartão na coluna do status, cartão criado no quadro vira licitação, mover o cartão muda o status (e registra na linha do tempo) e mudar o status move o cartão, sem cadastrar nada duas vezes." },
  { q: "Como funciona o controle de certidões?", a: "Cada certidão (federal, FGTS, trabalhista, estadual, municipal e outras) é cadastrada com a validade, e a Sebra avisa antes de vencer, guarda o PDF e o link de validação e leva você ao site oficial para emitir a nova." },
  { q: "O sistema controla saldo de contrato e empenho?", a: "Sim, as notas emitidas abatem o saldo de cada item do contrato sozinhas, e nos empenhos o faturado e o recebido são calculados pelas notas e pelos pagamentos." },
  { q: "Consigo saber o lucro de cada licitação?", a: "Sim, o Resultado por licitação mostra receita, custos e impostos, margem, recebido e a receber, processo por processo, com o custo real das compras ligadas ao contrato." },
  { q: "A Sebra lê as Autorizações de Fornecimento?", a: "Sim, você envia os PDFs das AFs do CINCATARINA, até 50 de uma vez, e a Sebra lê cada uma, identifica o cliente pelo CNPJ, relaciona os itens e prepara a nota." },
  { q: "A nota para órgão público sai com retenção?", a: "Sim, a Sebra calcula as retenções na fonte, sempre editáveis por nota, e a nota mostra o saldo do contrato e do empenho antes de emitir." },
  { q: "Tem boleto e baixa automática?", a: "Tem, boleto registrado pelo Sicoob com baixa automática, e a conciliação descobre quais notas cada TED do órgão pagou, dando baixa quando a soma fecha exatamente." },
]
