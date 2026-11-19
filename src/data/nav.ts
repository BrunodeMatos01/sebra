// Menu do site, montado a partir dos dados.
// Foco: licitações, automações e os módulos maduros do ERP.
import { solucoes } from "./solucoes";
import { segmentos } from "./segmentos";

// Módulos que aparecem no menu e na página inicial (os mais maduros).
export const foco = ["financeiro", "orcamentos", "fiscal", "estoque", "servicos", "compras", "comercial", "multi-empresa"];

export type NavChild = { label: string; href: string; desc?: string; icon?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[]; highlight?: boolean; wide?: boolean; footer?: { label: string; href: string } };

export const nav: NavItem[] = [
  {
    label: "Licitações",
    highlight: true,
    children: [
      { label: "Visão geral", href: "/licitacoes/", desc: "Do edital ao dinheiro na conta", icon: "gavel" },
      { label: "Busca de editais no PNCP", href: "/licitacoes/#pncp", desc: "Editais abertos do Brasil inteiro", icon: "search" },
      { label: "Quadro Kanban de licitações", href: "/licitacoes/#kanban", desc: "O cartão anda junto com o status", icon: "layers" },
      { label: "Certidões e habilitação", href: "/licitacoes/#certidoes", desc: "Nenhuma certidão vence sem aviso", icon: "shield" },
      { label: "Contratos e empenhos", href: "/licitacoes/#contratos", desc: "Saldo de ata por item e empenho", icon: "contract" },
      { label: "Resultado por licitação", href: "/licitacoes/#resultado", desc: "O lucro de cada processo", icon: "chart" },
    ],
  },
  {
    label: "Automações",
    highlight: true,
    children: [
      { label: "Automação de processos", href: "/automacoes/", desc: "Automações operacionais sob medida", icon: "zap" },
      { label: "O que dá para automatizar", href: "/automacoes/#o-que-automatizamos", desc: "Financeiro, fiscal, licitações, estoque e mais", icon: "layers" },
      { label: "Robôs (RPA)", href: "/automacoes/#robos-de-software-rpa", desc: "Tarefas de tela feitas sozinhas", icon: "bot" },
      { label: "Integração entre sistemas", href: "/automacoes/#integracao-entre-sistemas", desc: "Sistemas, planilhas e WhatsApp conversando", icon: "link" },
    ],
  },
  {
    label: "ERP completo",
    wide: true,
    children: solucoes.filter((s) => foco.includes(s.slug)).map((s) => ({ label: s.nav, href: `/solucoes/${s.slug}/`, desc: s.menuDesc, icon: s.icon })),
    footer: { label: "Ver todos os módulos na página inicial", href: "/#modulos" },
  },
  {
    label: "Segmentos",
    children: [
      ...segmentos.map((s) => ({ label: s.nav, href: `/segmentos/${s.slug}/`, desc: s.menuDesc, icon: s.icon })),
      { label: "Fornecedores do governo", href: "/licitacoes/", desc: "Produto, serviço ou obra para órgãos públicos", icon: "landmark" },
    ],
  },
  { label: "Planos", href: "/planos/" },
  {
    label: "Empresa",
    children: [
      { label: "Quem somos", href: "/empresa/", desc: "Quem é a Sebra e como trabalhamos", icon: "building" },
      { label: "Segurança", href: "/seguranca/", desc: "Como protegemos seus dados", icon: "lock" },
      { label: "Integrações", href: "/integracoes/", desc: "SEFAZ, bancos, PNCP e mais", icon: "link" },
      { label: "Fale com a gente", href: "/#contato", desc: "Atendimento pelo WhatsApp", icon: "chat" },
    ],
  },
];
