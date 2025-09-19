import { IOptions } from "@/components/molecules/Form/ControlledSelect";

export interface ISelectOption extends IOptions {
  totalBRL: string;
  feeValue: string;
}

interface IPixInfo<GValueWithDiscount> {
  fee: number;
  discount: number;
  discountValue: GValueWithDiscount;
  valueWithDiscount: GValueWithDiscount;
}

export interface ICheckoutInfo {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  producer: string;
  format: string;
  deliveryTime: string;
  pix: IPixInfo<number>;
}

export interface IResponseCheckout {
  productId: number;
  totalInstallments: number;
  installmentsOptions: ISelectOption[];
  productName: string;
  originalPrice: string;
  currentPrice: string;
  pix: IPixInfo<string>;
}

export type TResponseStructure<GData> =
  | {
      isSuccess: true;
      data: GData;
    }
  | {
      isSuccess: false;
      error: Error;
    };
