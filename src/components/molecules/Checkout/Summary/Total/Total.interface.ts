import { TPaymentMethodVariant } from "@/components/molecules/Checkout/SecondStep/PaymentMethodCard";
import { TInstallments } from "@/components/templates/Checkout/Form/Form.interface";
import { ISelectOption } from "@/services/checkout/getCheckoutInfo/getCheckoutInfo.interface";

export interface ITotal {
  paymentMethod: TPaymentMethodVariant;
  valueWithDiscount?: string;
  installments?: TInstallments;
  installmentsOption: ISelectOption | undefined;
}
