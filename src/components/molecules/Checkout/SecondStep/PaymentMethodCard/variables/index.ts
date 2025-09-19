import { CreditCard, Smartphone } from "lucide-react";
import { TPaymentMethodCardVariants } from "..";

export const paymentMethodCardVariants: TPaymentMethodCardVariants = {
  pix: {
    activeClassName: "border-green-500 bg-green-50/50",
    Icon: Smartphone,
    iconClassName: "text-green-600",
    title: "PIX - Pagamento instantâneo",
    titleMobile: "PIX",
    description: "Aprovação em segundos • Mais seguro",
  },
  credit: {
    activeClassName: "border-blue-500 bg-blue-50/50",
    Icon: CreditCard,
    iconClassName: "text-blue-600",
    title: "Cartão de Crédito",
    titleMobile: "Crédito",
    description: "Parcelamento no crédito • Todas as bandeiras",
  },
};
