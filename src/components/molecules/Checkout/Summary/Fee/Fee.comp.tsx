import { IFee } from ".";

export const Fee = ({ feeValue }: IFee) => {
  return (
    <div className="flex justify-between text-base">
      <span>Taxa Cakto</span>
      <span>{feeValue}</span>
    </div>
  );
};
