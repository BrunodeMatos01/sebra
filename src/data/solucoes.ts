// Conteúdo das páginas de Soluções. Cada solução detalha a DOR que resolve e
// as funções reais da plataforma. Um template (solucoes/[slug].astro) gera
// todas a partir daqui.

export type Feature = { title: string; desc: string };
export type Pain = { problem: string; answer: string };

export type Solucao = {
  slug: string;
  nav: string;          // rótulo curto (menu)
  eyebrow: string;
  title: string;        // título da página
  lead: string;         // subtítulo
  intro: string;        // parágrafo de abertura
  pains: Pain[];        // dor → resposta
  features: Feature[];  // funções
  stats?: { num: string; label: string }[];
  closing: string;
};

export const solucoes: Solucao[] = [
  {
    slug: "ia",
    nav: "Inteligência Artificial",
    eyebrow: "Inteligência Artificial",
    title: "Uma IA que atende, qualifica e vende enquanto você trabalha",
    lead: "Treinada no seu negócio, ela responde na hora, entende a intenção do cliente e entrega o lead pronto para a equipe fechar.",
    intro: "A IA da Sebra não é um chatbot de árvore de decisão. Ela conversa em linguagem natural pelo WhatsApp, entende o que o cliente quer, coleta os dados que importam e sabe a hora de passar para um humano — sem o lead esfriar.",
    pains: [
      { problem: "O cliente chama fora do horário e ninguém responde.", answer: "A IA atende 24 horas, tira dúvidas e agenda — o lead nunca fica no vácuo." },
      { problem: "Sua equipe perde tempo com pergunta repetida.", answer: "A IA resolve o repetitivo e só chama o humano quando o assunto exige." },
      { problem: "Lead chega sem contexto para o vendedor.", answer: "A IA qualifica antes: produto, região, interesse e telefone já vêm prontos." },
    ],
    features: [
      { title: "Atendimento em linguagem natural", desc: "Responde como gente, entende variações e mantém o tom da sua empresa." },
      { title: "Qualificação automática", desc: "Coleta e organiza os dados do lead e joga direto no funil comercial." },
      { title: "Passagem para humano com histórico", desc: "Quando precisa, o atendente assume a conversa com todo o contexto." },
      { title: "Agendamento pelo WhatsApp", desc: "A IA marca horários e confirma sozinha — ideal para clínicas e serviços." },
      { title: "IA proativa", desc: "Gera alertas e sugestões sozinha: lead parado, cobrança vencendo, estoque baixo." },
      { title: "Resumo de conversas e reuniões", desc: "Transcreve e resume chamadas e reuniões do Meet, vinculadas ao cliente certo." },
    ],
    stats: [
      { num: "24/7", label: "Atendimento sem parar" },
      { num: "-70%", label: "Menos tempo em pergunta repetida" },
      { num: "100%", label: "Dos leads qualificados e registrados" },
    ],
    closing: "Ative um atendente que nunca dorme e entrega o lead pronto.",
  },
  {
    slug: "comercial",
    nav: "Comercial & CRM",
    eyebrow: "Comercial & CRM",
    title: "Do primeiro contato à recompra, todo o comercial num lugar",
    lead: "Funil visual, ficha completa do cliente, propostas e cotações — sua equipe para de perder venda por desorganização.",
    intro: "A Sebra reúne o funil de vendas, o histórico de cada cliente e as ferramentas de fechamento numa operação só. Nada de planilha paralela: o que entra pelo WhatsApp vira lead, o lead vira cliente, e o cliente volta a comprar.",
    pains: [
      { problem: "Cada vendedor tem sua planilha e ninguém enxerga o funil.", answer: "Um Kanban único e customizável mostra onde está cada negociação." },
      { problem: "Ninguém lembra do cliente depois que ele compra.", answer: "O sistema sugere recompra e follow-up no momento certo." },
      { problem: "Proposta feita na mão, sem padrão e sem controle.", answer: "Propostas e orçamentos com numeração própria, versões e PDF." },
    ],
    features: [
      { title: "Funil Kanban customizável", desc: "Etapas do seu jeito, com automações por tempo e por etapa." },
      { title: "Cliente 360", desc: "Tudo do cliente numa tela: conversas, compras, parcelas, tarefas e histórico." },
      { title: "Propostas e orçamentos", desc: "Documento profissional com produtos, versões e PDF, pronto para enviar." },
      { title: "Cotações a fornecedores", desc: "Peça preço a vários fornecedores de uma vez, sigilosamente, e compare respostas." },
      { title: "Recompra e pós-venda", desc: "Cliente vira oportunidade nova sem duplicar cadastro; nada se perde no histórico." },
      { title: "Motor comercial", desc: "Metas, cadências e próximas ações para o time não deixar dinheiro na mesa." },
    ],
    stats: [
      { num: "360°", label: "Visão completa de cada cliente" },
      { num: "1", label: "Funil único para todo o time" },
      { num: "0", label: "Planilhas paralelas" },
    ],
    closing: "Organize o comercial e transforme atendimento em recompra.",
  },
  {
    slug: "atendimento",
    nav: "Atendimento omnichannel",
    eyebrow: "Atendimento",
    title: "WhatsApp, Telegram e equipe — tudo num painel só",
    lead: "Centralize as conversas de todos os canais, com histórico, prioridade e a equipe conversando por dentro.",
    intro: "Atendimento espalhado faz perder histórico, prioridade e venda. A Sebra reúne os canais num painel único, com respostas rápidas, encaminhamento e um chat interno para a equipe resolver junto.",
    pains: [
      { problem: "Conversa no celular de um, no computador de outro.", answer: "Todos os canais num painel, com histórico completo por cliente." },
      { problem: "Cliente repete a história para cada atendente.", answer: "O contexto acompanha a conversa — quem assume já sabe de tudo." },
      { problem: "A equipe alinha por fora, no WhatsApp pessoal.", answer: "Chat interno com menções liga o time ao atendimento em tempo real." },
    ],
    features: [
      { title: "WhatsApp + Telegram integrados", desc: "Receba e responda dos dois canais sem sair da plataforma." },
      { title: "Respostas rápidas", desc: "Modelos prontos que o atendente insere com um clique." },
      { title: "Chat interno com menções", desc: "A equipe conversa e passa o lead quente sem sair do sistema." },
      { title: "Suporte com SLA", desc: "Tickets com categoria, prioridade e prazo para não deixar cliente esperando." },
      { title: "Chamadas de voz e vídeo", desc: "Fale com o cliente ou com a equipe direto da plataforma." },
      { title: "Portal do cliente", desc: "Área externa de autosserviço para o cliente acompanhar o que importa." },
    ],
    closing: "Centralize o atendimento e nunca mais perca o histórico.",
  },
  {
    slug: "financeiro",
    nav: "Financeiro",
    eyebrow: "Financeiro",
    title: "O financeiro que conversa com a venda",
    lead: "Contas a pagar e receber, DRE, fluxo de caixa, cobrança automática e conciliação bancária — sem digitar duas vezes.",
    intro: "Na Sebra, a venda alimenta o financeiro sozinha. A parcela paga vira recebimento, a atrasada vira inadimplência com cobrança automática, e o extrato do banco concilia sem planilha. Você enxerga o resultado em tempo real.",
    pains: [
      { problem: "Não sei quem me deve nem quanto entra este mês.", answer: "Recebimentos, contas a pagar e fluxo de caixa numa visão só." },
      { problem: "Cobrar inadimplente é trabalho manual e esquecido.", answer: "Régua de cobrança automática dispara na hora certa, sozinha." },
      { problem: "Conciliar o banco toma um dia inteiro.", answer: "Importe OFX ou conecte o banco via Open Finance e concilie em minutos." },
    ],
    features: [
      { title: "Contas a pagar e receber", desc: "Vencimentos, recorrências e fornecedores, com alertas do que vence." },
      { title: "DRE e fluxo de caixa", desc: "Resultado e projeção por período, centro de custo e categoria." },
      { title: "Cobrança automática (PIX/boleto)", desc: "Integração Asaas: gera cobrança e dá baixa por webhook, sem toque humano." },
      { title: "Conciliação bancária", desc: "OFX manual ou Open Finance: o extrato sincroniza e concilia sozinho." },
      { title: "Aprovação por valor e cargo", desc: "Despesa acima do limite exige aprovação de quem tem autonomia." },
      { title: "Comissões automáticas", desc: "Comissão que depende do pagamento recebido, não só da venda feita." },
    ],
    stats: [
      { num: "Tempo real", label: "Resultado sempre atualizado" },
      { num: "Automático", label: "Cobrança e baixa por webhook" },
      { num: "1 clique", label: "Conciliação do extrato" },
    ],
    closing: "Tenha controle total do dinheiro, sem digitar duas vezes.",
  },
  {
    slug: "fiscal",
    nav: "Fiscal & Governo",
    eyebrow: "Fiscal & Governo",
    title: "Emissão fiscal de verdade, conectada ao governo",
    lead: "NF-e, NFS-e e NFC-e, certificado A1 seguro, certidões e o pacote pronto para o contador. Aposente o eNotas e a planilha.",
    intro: "A Sebra emite nota fiscal de verdade, guarda o certificado A1 criptografado, avisa quando ele vai vencer e controla as certidões negativas que toda licitação exige. O que antes eram três ferramentas vira uma.",
    pains: [
      { problem: "Pago eNotas, Bling e ainda mando planilha pro contador.", answer: "Emissão nativa + pacote pronto para o contador, tudo aqui." },
      { problem: "Perdi prazo porque a certidão venceu sem eu ver.", answer: "Controle de CND (federal, estadual, municipal, FGTS, trabalhista) com alerta." },
      { problem: "Meu certificado A1 vence e eu descubro na emergência.", answer: "Certificado guardado com segurança e alerta de vencimento antecipado." },
    ],
    features: [
      { title: "NF-e, NFS-e e NFC-e", desc: "Emissão via provider homologado, com histórico e itens guardados." },
      { title: "Certificado A1 seguro", desc: "Armazenado criptografado (AES-256), com alerta de vencimento." },
      { title: "Certidões negativas (CND)", desc: "Federal, estadual, municipal, FGTS e trabalhista, com controle de validade." },
      { title: "Carta de correção e guarda legal", desc: "CC-e e guarda do XML/DANFE pelos 5 anos que a lei exige." },
      { title: "Substituição tributária por item", desc: "ST e finalidade de emissão para distribuidor e indústria." },
      { title: "Pacote para o contador", desc: "Exportação organizada que substitui a planilha mensal." },
    ],
    closing: "Emita nota e fale com o governo sem depender de três sistemas.",
  },
  {
    slug: "estoque",
    nav: "Estoque & Produtos",
    eyebrow: "Estoque & Produtos",
    title: "Catálogo, preço e estoque no controle",
    lead: "Precificação por markup, PDV, multi-armazém, produção e cotações — do balcão à indústria.",
    intro: "A Sebra controla o produto de ponta a ponta: catálogo com preço calculado corretamente, estoque que baixa na venda, e ferramentas específicas para varejo, distribuidor e indústria. A IA ainda avisa o que está acabando.",
    pains: [
      { problem: "Preço no chute, sem saber a margem real.", answer: "Precificação por markup com impostos, custos e margem — do jeito certo." },
      { problem: "Vendi e o estoque não baixou.", answer: "PDV e vendas debitam o estoque e geram o lançamento financeiro na hora." },
      { problem: "Descobri que faltou produto quando o cliente pediu.", answer: "A IA de reposição avisa antes, com base no giro dos últimos 90 dias." },
    ],
    features: [
      { title: "Precificação por markup", desc: "Custos, impostos e margem no cálculo — preço fiel, com composição de materiais." },
      { title: "PDV / frente de caixa", desc: "Venda rápida no balcão com sessão de caixa, que já baixa estoque." },
      { title: "Multi-armazém (WMS)", desc: "Estoque por depósito, transferências e ajustes para distribuidores." },
      { title: "Produção / MRP", desc: "Ficha técnica e ordens de produção que consomem matéria-prima." },
      { title: "Cotações de compra", desc: "Peça preço a vários fornecedores e compre pelo melhor, com sigilo." },
      { title: "IA de reposição", desc: "Sugere o que comprar antes de faltar, pelo giro real do produto." },
    ],
    closing: "Do balcão à fábrica, o produto sempre sob controle.",
  },
  {
    slug: "rh",
    nav: "Recursos Humanos",
    eyebrow: "Recursos Humanos",
    title: "O RH da empresa, organizado e seguro",
    lead: "Folha, ponto, férias, documentos e recrutamento — com os dados sensíveis protegidos de verdade.",
    intro: "A Sebra cuida das pessoas da empresa com o rigor que RH exige: cada colaborador com seu histórico, dados sensíveis restritos a quem pode ver, e alterações de salário sempre auditadas.",
    pains: [
      { problem: "Documento de colaborador espalhado em pastas.", answer: "Documentos centralizados, com vencimento e controle de acesso." },
      { problem: "Qualquer um enxerga salário e dado sensível.", answer: "Acesso restrito a RH, coordenador e gestão — e tudo auditado." },
      { problem: "Candidato aprovado vira retrabalho de cadastro.", answer: "Candidato contratado vira colaborador sem redigitar nada." },
    ],
    features: [
      { title: "Folha de pagamento", desc: "Salários, benefícios e descontos, com alterações auditadas." },
      { title: "Controle de ponto", desc: "Jornada e banco de horas por colaborador e data." },
      { title: "Férias e solicitações", desc: "Planejamento, aprovação e pedidos internos num fluxo só." },
      { title: "Documentos com vencimento", desc: "Arquivos por pessoa, com alerta e controle de quem acessa." },
      { title: "Recrutamento", desc: "Vagas e candidatos; o aprovado vira colaborador direto." },
      { title: "Avaliações e treinamentos", desc: "Desempenho, planos de ação e certificados no mesmo lugar." },
    ],
    closing: "Cuide das pessoas com organização e segurança.",
  },
];

export const getSolucao = (slug: string) => solucoes.find((s) => s.slug === slug);
