import { ICheckoutFormValues } from "@/components/templates/Checkout/Form/Form.interface";
import { IResponseCheckout } from "@/services/checkout/getCheckoutInfo/getCheckoutInfo.interface";
import { Control, UseFormWatch } from "react-hook-form";

export interface ISecondStep {
  control: Control<ICheckoutFormValues>;
  watch: UseFormWatch<ICheckoutFormValues>;
  responseData: IResponseCheckout;
}
