// Estrutura do header. Os itens com `children` viram dropdown (setinha) e
// cada filho leva a uma página dedicada — o padrão pedido, inspirado no
// clickmassa mas com a identidade Sebra.

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Soluções",
    children: [
      { label: "Inteligência Artificial", href: "/solucoes/ia/", desc: "Atende, qualifica e agenda sozinha no WhatsApp." },
      { label: "Comercial & CRM", href: "/solucoes/comercial/", desc: "Funil, Cliente 360, propostas e recompra." },
      { label: "Atendimento omnichannel", href: "/solucoes/atendimento/", desc: "WhatsApp, Telegram e chat interno num painel." },
      { label: "Financeiro", href: "/solucoes/financeiro/", desc: "Contas, DRE, cobrança automática e conciliação." },
      { label: "Fiscal & Governo", href: "/solucoes/fiscal/", desc: "NF-e, NFS-e, certificado A1 e certidões." },
      { label: "Estoque & Produtos", href: "/solucoes/estoque/", desc: "Catálogo, precificação, PDV, WMS e compras." },
      { label: "Recursos Humanos", href: "/solucoes/rh/", desc: "Folha, ponto, férias, documentos e recrutamento." },
    ],
  },
  {
    label: "Segmentos",
    children: [
      { label: "Varejo", href: "/segmentos/varejo/", desc: "Balcão, PDV e venda pelo WhatsApp." },
      { label: "Indústria", href: "/segmentos/industria/", desc: "Produção, ficha técnica e ordens." },
      { label: "Distribuidor", href: "/segmentos/distribuidor/", desc: "Multi-armazém, cotações e logística." },
      { label: "Serviços", href: "/segmentos/servicos/", desc: "Ordens de serviço e agenda técnica." },
      { label: "Construção civil", href: "/segmentos/construcao/", desc: "Obras, medições e retenção de INSS." },
      { label: "Salão & Clínica", href: "/segmentos/salao/", desc: "Agenda por profissional e ficha do cliente." },
      { label: "Governo & Licitações", href: "/segmentos/licitacoes/", desc: "Editais, habilitação e certidões." },
    ],
  },
  { label: "Integrações", href: "/integracoes/" },
  { label: "Planos", href: "/planos/" },
  {
    label: "Empresa",
    children: [
      { label: "Quem somos", href: "/empresa/", desc: "A história e o propósito da Sebra." },
      { label: "Contato", href: "/#contato", desc: "Fale com a nossa equipe." },
    ],
  },
];
