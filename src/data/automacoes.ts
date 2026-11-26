// Página /automacoes/ — serviço de automação operacional sob medida.
// Regra: nenhum caso de cliente inventado. Exemplos são "o que dá para
// automatizar"; a prova são automações que já rodam dentro da plataforma Sebra.

export const sinais = [
  "Alguém copia dados de um sistema para outro todo dia.",
  "Planilhas atualizadas na mão, com risco de erro de digitação.",
  "Conferir extrato, boleto e nota toma horas da equipe.",
  "A mesma mensagem é enviada para dezenas de clientes, uma a uma.",
  "Documentos baixados de portais e e-mails e redigitados no sistema.",
  "O relatório de segunda-feira é montado do zero toda semana.",
];

export const tipos = [
  { i: "bot", t: "Robôs de software (RPA)", d: "Fazem na tela o que uma pessoa faria, sem cansar e sem errar." },
  { i: "link", t: "Integração entre sistemas", d: "O dado entra uma vez e aparece em todo lugar." },
  { i: "layers", t: "Fluxos de trabalho", d: "Cada tarefa chega para a pessoa certa, na hora certa." },
  { i: "file", t: "Leitura de documentos", d: "PDF, XML, planilhas e e-mails lidos automaticamente." },
];

export const areas = [
  { i: "wallet", t: "Financeiro", itens: ["Conciliação do extrato com as notas", "Cobrança automática de parcelas vencidas", "Lançamento de contas a pagar a partir do e-mail", "Relatório de caixa diário"] },
  { i: "receipt", t: "Fiscal e notas", itens: ["Emissão de notas em lote", "Envio de XML e DANFE ao contador", "Leitura de notas de fornecedor", "Conferência de impostos e retenções"] },
  { i: "gavel", t: "Licitações e governo", itens: ["Busca diária de editais por palavra-chave", "Alerta de certidão vencendo", "Leitura de Autorizações de Fornecimento", "Acompanhamento de prazos e sessões"] },
  { i: "box", t: "Estoque e compras", itens: ["Pedido de reposição quando o estoque baixa", "Cotação automática com fornecedores", "Atualização de preço e custo", "Conferência de recebimento"] },
  { i: "chat", t: "Comercial e atendimento", itens: ["Respostas e avisos no WhatsApp", "Orçamento enviado a partir do pedido", "Follow-up de proposta sem resposta", "Cadastro do cliente pelo CNPJ"] },
  { i: "chart", t: "Relatórios e alertas", itens: ["Indicadores enviados toda manhã", "Alertas de vencimento e atraso", "Painéis atualizados sozinhos", "Avisos de exceção para o gestor"] },
  { i: "upload", t: "Documentos e portais", itens: ["Download de arquivos de portais", "Organização automática de pastas", "Extração de dados de PDF e planilha", "Arquivamento com nome padronizado"] },
  { i: "link", t: "Integrações", itens: ["ERP com planilhas e e-mail", "Sistemas antigos com sistemas novos", "WhatsApp com o cadastro de clientes", "APIs de bancos, governo e parceiros"] },
];

export const etapas = [
  { t: "Diagnóstico", d: "Mapeamos os processos mais repetitivos." },
  { t: "Desenho da solução", d: "Você aprova antes de começarmos." },
  { t: "Desenvolvimento", d: "Integrado aos sistemas que você já usa." },
  { t: "Testes com seus dados", d: "Com casos reais, até o resultado bater." },
  { t: "Implantação e acompanhamento", d: "Monitoramos e ajustamos quando mudar." },
];

// Automações que já rodam dentro da plataforma Sebra (verificadas no código).
export const provas = [
  { t: "O extrato dá baixa nas notas", d: "A conciliação cruza cada pagamento com as notas em aberto e baixa sozinha, só com soma exata." },
  { t: "AF em PDF vira nota", d: "Até 50 Autorizações de Fornecimento lidas de uma vez, com cliente e itens relacionados." },
  { t: "Editais buscados no PNCP", d: "Consulta direta ao portal oficial de contratações públicas." },
  { t: "Kanban que anda sozinho", d: "Mudou o status da licitação, o cartão vai para a coluna certa, e vice-versa." },
  { t: "Nota e boleto por e-mail", d: "Envio automático ao autorizar a nota, com o XML anexado." },
  { t: "Compra que vira conta a pagar", d: "Recebeu a mercadoria, a conta a pagar nasce com o vencimento certo." },
];

export const faqAutomacoes = [
  { q: "O que é automação de processos?", a: "É usar tecnologia para fazer sozinho o que hoje sua equipe faz na mão: copiar dados entre sistemas, conferir documentos, enviar mensagens e montar relatórios, rodando 24 horas sem erro de digitação e liberando as pessoas para o trabalho que precisa de cabeça." },
  { q: "O que é RPA?", a: "RPA (Robotic Process Automation) são robôs de software que executam tarefas na tela como uma pessoa faria: entram em sistemas, preenchem campos e baixam arquivos, o que ajuda quando o sistema não tem integração pronta." },
  { q: "Preciso usar o sistema da Sebra para ter automações?", a: "Não, desenvolvemos automações integradas aos sistemas que a sua empresa já usa, e com a Sebra a integração é ainda mais direta." },
  { q: "Que processos dá para automatizar?", a: "Quase todo processo repetitivo e com regra clara: lançamentos financeiros, conciliação, emissão e envio de notas, leitura de documentos, cobranças, avisos no WhatsApp, relatórios, busca de editais e alertas de prazos." },
  { q: "Por onde começar?", a: "Pelo diagnóstico, em que mapeamos os processos mais repetitivos e de maior volume, porque é ali que a automação traz mais retorno, e propomos a ordem de implantação." },
  { q: "Quanto custa e quanto tempo leva?", a: "Depende do processo e dos sistemas envolvidos, e depois do diagnóstico apresentamos o escopo, o prazo e o valor antes de começar." },
  { q: "A automação é segura?", a: "Sim, as automações usam acessos com a permissão mínima necessária, registram o que fizeram e avisam uma pessoa quando aparece uma exceção, em vez de decidir sozinhas." },
];
