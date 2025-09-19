import { Button as ShadCnButton } from "@/lib/ui/button";
import { IButton } from ".";
import { checkoutButtonVariants } from "./variables";

export const Button = ({ paymentMethod, disabled }: IButton) => {
  const { Icon, text } = checkoutButtonVariants[paymentMethod];

  return (
    <ShadCnButton
      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg cursor-pointer"
      size="lg"
      disabled={disabled}
    >
      <Icon className="h-5 w-5 mr-2" />
      {text}
    </ShadCnButton>
  );
};
