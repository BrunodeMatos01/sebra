// Menu do site, montado a partir dos dados (mude o módulo lá e o menu acompanha).
import { solucoes } from "./solucoes";
import { segmentos } from "./segmentos";

export type NavChild = { label: string; href: string; desc?: string; icon?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[]; highlight?: boolean; wide?: boolean; footer?: { label: string; href: string } };

export const nav: NavItem[] = [
  {
    label: "ERP completo",
    wide: true,
    children: [
      ...solucoes.map((s) => ({ label: s.nav, href: `/solucoes/${s.slug}/`, desc: s.menuDesc, icon: s.icon })),
      { label: "Licitações", href: "/licitacoes/", desc: "Editais, contratos, empenhos e certidões", icon: "gavel" },
    ],
    footer: { label: "Ver todos os módulos na página inicial", href: "/#modulos" },
  },
  {
    label: "Segmentos",
    children: [
      ...segmentos.map((s) => ({ label: s.nav, href: `/segmentos/${s.slug}/`, desc: s.menuDesc, icon: s.icon })),
      { label: "Fornecedores do governo", href: "/licitacoes/", desc: "Produto, serviço ou obra para órgãos públicos", icon: "landmark" },
    ],
  },
  {
    label: "Licitações",
    highlight: true,
    children: [
      { label: "Visão geral", href: "/licitacoes/", desc: "Do edital ao dinheiro na conta", icon: "gavel" },
      { label: "Busca de editais no PNCP", href: "/licitacoes/#pncp", desc: "Editais abertos do Brasil inteiro", icon: "search" },
      { label: "Quadro Kanban de licitações", href: "/licitacoes/#kanban", desc: "O cartão anda junto com o status", icon: "layers" },
      { label: "Certidões e habilitação", href: "/licitacoes/#certidoes", desc: "Nenhuma certidão vence sem aviso", icon: "shield" },
      { label: "Contratos e itens", href: "/licitacoes/#contratos", desc: "Saldo de ata por item", icon: "contract" },
      { label: "Empenhos", href: "/licitacoes/#empenhos", desc: "Faturado e recebido calculados", icon: "landmark" },
      { label: "Resultado por licitação", href: "/licitacoes/#resultado", desc: "O lucro de cada processo", icon: "chart" },
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
