export const creditCardNumberFormat = (value: string): string => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2");
};

export const creditCardHolderFormat = (value: string): string => {
  if (!value) return "";

  const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");

  return onlyLetters.toUpperCase();
};

export const creditCardValidateDateFormat = (value: string) => {
  if (!value) return "";

  const digits = value.replace(/\D/g, "");

  if (digits.length < 2) {
    if (Number(digits) > 1) return "";
    return digits;
  }

  if (digits.length === 2) {
    const currentDigit = Number(digits);

    if (currentDigit > 0 && currentDigit <= 12) return digits;

    return "";
  }

  if (digits.length === 3) {
    const initialYearNumber = Number(digits[2]);

    const decimalInitialNumber = new Date().getFullYear().toString()[2];

    if (initialYearNumber >= Number(decimalInitialNumber)) return digits;

    return digits.replace(/(\d{2})(\d)/, "$1/");
  }

  const month = parseInt(digits.substring(0, 2), 10);
  const year = parseInt("20" + digits.substring(2, 4).padStart(2, "0"), 10);

  if (month < 1 || month > 12) return "";

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear) return "";

  if (year === currentYear && month < currentMonth) return "";

  return digits.replace(/(\d{2})(\d{1,2})/, "$1/$2");
};
