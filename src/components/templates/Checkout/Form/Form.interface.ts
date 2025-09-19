import { TPaymentMethodVariant } from "@/components/molecules/Checkout/SecondStep/PaymentMethodCard";
import { IResponseCheckout } from "@/services/checkout/getCheckoutInfo/getCheckoutInfo.interface";

export type TInstallments = `${number}`;

export interface ICheckoutFormValues {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  newsletter: boolean;
  paymentMethod: TPaymentMethodVariant;
  installments?: TInstallments;
  creditCardNumber: string;
  creditCardHolderName: string;
  creditCardValidateDate: string;
  creditCardCvv: string;
}

export interface ICheckoutForm {
  responseData: IResponseCheckout;
}
