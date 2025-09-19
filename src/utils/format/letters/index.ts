export const justLettersAndSpacesFormat = (value: string): string => {
  if (!value) return "";

  return value.replace(/[^a-zA-Z\u00C0-\u017F\s]/g, "");
};
