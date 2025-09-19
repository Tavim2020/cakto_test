import { memo } from "react";
import { ISubTotal } from ".";

export const SubTotal = memo(({ currentPrice }: ISubTotal) => {
  return (
    <div className="flex justify-between text-base">
      <span>Subtotal</span>
      <span>{currentPrice}</span>
    </div>
  );
});

SubTotal.displayName = "SubTotal";
