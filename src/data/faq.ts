// Perguntas frequentes. Cada lista também vira FAQPage (dado estruturado do
// Google), então as respostas precisam ser fiéis ao que o sistema faz.

export type Faq = { q: string; a: string };

export const faqHome: Faq[] = [
  { q: "O que é a Sebra?", a: "A Sebra é um sistema de gestão (ERP) brasileiro com licitações, notas fiscais, orçamentos, estoque, serviços e financeiro num sistema só. Além do sistema, desenvolvemos automações operacionais sob medida para os processos da sua empresa." },
  { q: "Vocês fazem automação de processos?", a: "Sim. Desenvolvemos automações sob medida: robôs que fazem tarefas repetitivas, integração entre sistemas, planilhas e WhatsApp, leitura de documentos e fluxos de aprovação. Funciona com o sistema que você já usa ou com a Sebra." },
  { q: "A Sebra serve para o meu ramo?", a: "A Sebra atende comércio e varejo, indústrias, prestadores de serviço e, com um módulo especializado, empresas que vendem para o governo. O foco está em quem precisa de nota fiscal, estoque, orçamentos e financeiro bem controlados." },
  { q: "A Sebra emite nota fiscal?", a: "Sim. Emite NF-e, NFS-e e NFC-e por emissor homologado, com retenções, carta de correção, envio automático por e-mail, pacote do contador e XML protegido e salvo." },
  { q: "Consigo ver o lucro real da empresa no mês?", a: "Sim. O DRE por competência e o resultado das vendas são montados sozinhos a partir das notas e dos lançamentos: você vê o que entrou, o que custou e o que sobrou." },
  { q: "O orçamento vira nota fiscal?", a: "Sim. O orçamento aprovado abre a nota fiscal já preenchida. Se tiver produto e serviço, a Sebra separa em NF-e e NFS-e, como manda a lei." },
  { q: "Tem conciliação bancária e boleto?", a: "Tem. A conciliação lê o extrato (OFX, PDF ou Open Finance) e dá baixa nas notas pagas com soma exata, e o boleto registrado é baixado automaticamente quando pago." },
  { q: "Minha empresa tem mais de um CNPJ. Funciona?", a: "Funciona. Com o multi-empresa você opera matriz, filiais e empresas do mesmo grupo, cada uma com seus dados, e vê o resultado consolidado." },
  { q: "Vendo para o governo. A Sebra ajuda?", a: "Ajuda muito. O módulo de licitações busca editais no PNCP, controla certidões, contratos com saldo por item, empenhos, notas com retenção e o resultado de cada licitação." },
  { q: "Meus dados e meu certificado digital ficam seguros?", a: "O certificado A1 e a senha dele ficam cifrados com AES-256. Cada empresa só enxerga os próprios dados, o acesso é por perfil, há verificação em duas etapas e as ações sensíveis ficam registradas." },
  { q: "Preciso parar a empresa para implantar?", a: "Não. A implantação é conduzida pela nossa equipe em seis etapas, do diagnóstico à liberação, e você continua trabalhando enquanto isso." },
];

export const faqLicitacoes: Faq[] = [
  { q: "A Sebra é um sistema para licitação ou um ERP?", a: "Os dois. A Sebra acompanha a licitação (edital, prazos, habilitação, certidões) e continua depois que você ganha: contrato com saldo por item, empenhos, nota fiscal, boleto, recebimento e o lucro de cada processo, tudo ligado ao financeiro e ao estoque." },
  { q: "Consigo buscar editais pela Sebra?", a: "Sim. A Sebra consulta direto o PNCP (Portal Nacional de Contratações Públicas), a base oficial onde todo órgão sob a Lei 14.133/2021 publica. Você busca por palavra-chave e estado, em pregão, dispensa, inexigibilidade e concorrência." },
  { q: "Dá para acompanhar as licitações num quadro Kanban, como no Trello?", a: "Sim, e ligado de verdade. Na Central de Vendas, o quadro de licitações e a tela de Licitação são a mesma coisa: licitação nova vira cartão na coluna do status, cartão criado no quadro vira licitação, mover o cartão muda o status (e registra na linha do tempo) e mudar o status move o cartão. Sem cadastrar nada duas vezes." },
  { q: "Como funciona o controle de certidões?", a: "Cada certidão (federal, FGTS, trabalhista, estadual, municipal e outras) é cadastrada com a validade. A Sebra avisa antes de vencer, guarda o PDF e o link de validação e leva você ao site oficial para emitir a nova." },
  { q: "O sistema controla saldo de contrato e empenho?", a: "Sim. As notas emitidas abatem o saldo de cada item do contrato sozinhas, e nos empenhos o faturado e o recebido são calculados pelas notas e pelos pagamentos." },
  { q: "Consigo saber o lucro de cada licitação?", a: "Sim. O Resultado por licitação mostra receita, custos e impostos, margem, recebido e a receber, processo por processo, com o custo real das compras ligadas ao contrato." },
  { q: "A Sebra lê as Autorizações de Fornecimento?", a: "Sim. Você envia os PDFs das AFs do CINCATARINA, até 50 de uma vez, e a Sebra lê cada uma, identifica o cliente pelo CNPJ, relaciona os itens e prepara a nota." },
  { q: "A nota para órgão público sai com retenção?", a: "Sim. A Sebra calcula as retenções na fonte, sempre editáveis por nota, e a nota mostra o saldo do contrato e do empenho antes de emitir." },
  { q: "Tem boleto e baixa automática?", a: "Tem. Boleto registrado pelo Sicoob com baixa automática, e a conciliação descobre quais notas cada TED do órgão pagou, dando baixa quando a soma fecha exatamente." },
]
