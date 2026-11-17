// Tipos das telas de demonstração (MockTable).
export type Cell = string | { pill: string; tone: "blue" | "green" | "amber" | "red" | "gray" | "violet" };
export type MockSpec = {
  title: string; subtitle?: string;
  group?: "pessoal" | "vendas" | "financeiro" | "operacao" | "modulos" | "analytics" | false;
  active?: string;
  h?: number;
  actions?: { label: string; primary?: boolean; icon?: string }[];
  kpis?: { l: string; v: string; sub?: string; icon?: string; tone?: "ok" | "warn" | "bad" | "blue" }[];
  tabs?: string[];
  cols: string[];
  widths?: number[];  // % de cada coluna
  num?: number[];     // índices de colunas numéricas (alinhadas à direita)
  rows: Cell[][];
};
