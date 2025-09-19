export const justNumberFormat = (value: string): string => {
  if (!value) return "";

  return value.replace(/\D/g, "");
};
