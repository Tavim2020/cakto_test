import { IDiscount } from ".";

export const Discount = ({ discount, discountValue }: IDiscount) => {
  return (
    <div className="flex justify-between text-base text-green-800 font-medium">
      <span>Desconto PIX ({discount}%)</span>
      <span>-{discountValue}</span>
    </div>
  );
};
