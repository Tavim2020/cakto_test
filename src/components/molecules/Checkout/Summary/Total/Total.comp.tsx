import { ITotal } from ".";

export const Total = ({
  paymentMethod,
  valueWithDiscount,
  installments,
  installmentsOption,
}: ITotal) => {
  return (
    <div className="flex justify-between font-bold text-xl">
      <span>Total</span>

      {paymentMethod === "pix" && (
        <span className="text-primary">{valueWithDiscount}</span>
      )}

      {paymentMethod === "credit" && (
        <span className="text-primary">
          {installments && installmentsOption
            ? installmentsOption?.totalBRL
            : "R$ -- --"}
        </span>
      )}
    </div>
  );
};
