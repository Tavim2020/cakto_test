export const convertNumberToMoneyBrFormat = (value: number) => {
  if (!value) return "R$ 0,00";

  const BRLMoney = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return BRLMoney.format(value);
};

export const convertMoneyBrToNumber = (value: string): number => {
  if (!value) return 0;

  return Number(value.replace("R$ ", "").replace(".", "").replace(",", "."));
};
