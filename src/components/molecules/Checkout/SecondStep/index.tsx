import dynamic from "next/dynamic";
import { CreditCardFormSkeleton } from "./CreditCardForm";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { PixInfo } from "./PixInfo";

const CreditCardForm = dynamic(
  async () => (await import("./CreditCardForm")).CreditCardForm,
  {
    ssr: false,
    loading: () => <CreditCardFormSkeleton />,
  }
);

export const SecondStepComponents = {
  CreditCardForm,
  PaymentMethodCard,
  PixInfo,
};
