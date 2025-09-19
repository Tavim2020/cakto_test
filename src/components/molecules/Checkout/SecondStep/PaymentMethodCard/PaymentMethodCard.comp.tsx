import { Label } from "@/lib/ui/label";
import { RadioGroupItem } from "@/lib/ui/radio-group";
import { cn } from "@/lib/utils";
import { memo } from "react";
import { IPaymentMethodCard } from ".";
import { paymentMethodCardVariants } from "./variables";

export const PaymentMethodCard = memo(
  ({ variant, paymentMethod, children }: IPaymentMethodCard) => {
    const {
      activeClassName,
      Icon,
      iconClassName,
      title,
      titleMobile,
      description,
    } = paymentMethodCardVariants[variant];

    return (
      <Label
        htmlFor={variant}
        className={cn(
          "flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-muted/50 transition-all cursor-pointer border-border",
          paymentMethod === variant && activeClassName
        )}
      >
        <RadioGroupItem value={variant} id={variant} />

        <div className="flex items-center gap-3 flex-1">
          <div className="p-2 bg-green-100 rounded-lg">
            <Icon className={cn("h-6 w-6", iconClassName)} />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold cursor-pointer">
              <span className="hidden md:block">{title}</span>
              <span className="md:hidden">{titleMobile}</span>
            </p>
            <p className="hidden text-sm text-muted-foreground md:block">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">{children}</div>
        </div>
      </Label>
    );
  }
);

PaymentMethodCard.displayName = "PaymentMethodCard";
