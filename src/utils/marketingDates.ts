export interface MarketingDate {
  date: string;
  title: string;
  description: string;
  category: "holiday" | "commerce" | "social" | "other";
}

export const marketingDates2025: MarketingDate[] = [
  {
    date: "2025-01-01",
    title: "Ano Novo",
    description: "Início do ano, momento de novas resoluções e campanhas motivacionais.",
    category: "holiday"
  },
  {
    date: "2025-02-14",
    title: "Dia dos Namorados (EUA)",
    description: "Data comemorativa focada em amor e relacionamentos.",
    category: "commerce"
  },
  {
    date: "2025-03-08",
    title: "Dia Internacional da Mulher",
    description: "Celebração das conquistas sociais, políticas e econômicas das mulheres.",
    category: "social"
  },
  {
    date: "2025-04-21",
    title: "Tiradentes",
    description: "Feriado nacional que celebra um dos heróis nacionais do Brasil.",
    category: "holiday"
  },
  {
    date: "2025-05-12",
    title: "Dia das Mães",
    description: "Celebração dedicada às mães e à maternidade.",
    category: "commerce"
  },
  // Adicione mais datas conforme necessário
];