import { TPaymentMethodVariant } from "@/components/molecules/Checkout/SecondStep/PaymentMethodCard";

export interface IButton {
  paymentMethod: TPaymentMethodVariant;
  disabled: boolean;
}
