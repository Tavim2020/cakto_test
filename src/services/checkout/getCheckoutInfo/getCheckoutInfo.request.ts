import { convertNumberToMoneyBrFormat } from "@/utils/format/money";
import {
  ICheckoutInfo,
  IResponseCheckout,
  ISelectOption,
  TResponseStructure,
} from "./getCheckoutInfo.interface";

const generateSelectOptions = (totalValue?: number): ISelectOption[] => {
  if (!totalValue) return [];

  return [...Array(12)].map((_, index): ISelectOption => {
    const installments = index + 1;

    const fee = index === 0 ? 3.99 : 4.99 + index * 2;

    console.log(fee);

    const feeValue = totalValue * (fee / 100);

    const total = totalValue + feeValue;

    const result = total / installments;

    const MoneyResult = convertNumberToMoneyBrFormat(result);

    const value = installments.toString();

    return {
      label: `${installments}x de ${MoneyResult}`,
      value,
      totalBRL: convertNumberToMoneyBrFormat(total),
      feeValue: convertNumberToMoneyBrFormat(feeValue),
    };
  });
};

export const getCheckoutInfo = async (): Promise<
  TResponseStructure<IResponseCheckout>
> => {
  try {
    const info: ICheckoutInfo = {
      id: 1,
      name: "Curso de Marketing Digital 2025",
      originalPrice: 497,
      currentPrice: 297,
      producer: "João Silva",
      format: "digital",
      deliveryTime: "imediato",
      pix: {
        fee: 0,
        discount: 5,
        discountValue: (297 * 5) / 100,
        valueWithDiscount: 297 - (297 * 5) / 100,
      },
    };

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const installmentsOptions = generateSelectOptions(info?.currentPrice);

    const response: IResponseCheckout = {
      productId: info?.id ?? 0,
      productName: info?.name ?? "",
      originalPrice: convertNumberToMoneyBrFormat(info?.originalPrice ?? 0),
      currentPrice: convertNumberToMoneyBrFormat(info?.currentPrice ?? 0),
      pix: {
        fee: info?.pix?.fee ?? 0,
        discount: info?.pix?.discount ?? 0,
        discountValue: convertNumberToMoneyBrFormat(
          info?.pix?.discountValue ?? 0
        ),
        valueWithDiscount: convertNumberToMoneyBrFormat(
          info?.pix?.valueWithDiscount ?? 0
        ),
      },
      totalInstallments: installmentsOptions.length,
      installmentsOptions: installmentsOptions,
    };

    return {
      isSuccess: true,
      data: response,
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      error: new Error("Erro ao obter as informações."),
    };
  }
};
