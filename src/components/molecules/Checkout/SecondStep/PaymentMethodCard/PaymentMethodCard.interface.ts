import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, JSX, RefAttributes } from "react";

export type TPaymentMethodVariant = "pix" | "credit";

export interface IPaymentMethodCard {
  variant: TPaymentMethodVariant;
  paymentMethod: TPaymentMethodVariant;
  children: JSX.Element | JSX.Element[];
}

export type TPaymentMethodCardVariants = {
  [key in TPaymentMethodVariant]: {
    activeClassName: string;
    Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    iconClassName: string;
    title: string;
    titleMobile: string;
    description: string;
  };
};
