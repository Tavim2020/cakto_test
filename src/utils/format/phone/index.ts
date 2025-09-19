export const whatsAppFormat = (value: string): string => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4}$)/, "$1-$2");
};

export const phoneFormat = (value: string) => {
  if (!value) return "";

  if (value.length === 15) return whatsAppFormat(value);

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d{4}$)/, "$1-$2");
};
