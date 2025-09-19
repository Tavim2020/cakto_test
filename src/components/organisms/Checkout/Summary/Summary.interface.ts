import { ICheckoutFormValues } from "@/components/templates/Checkout/Form/Form.interface";
import { IResponseCheckout } from "@/services/checkout/getCheckoutInfo/getCheckoutInfo.interface";
import { UseFormWatch } from "react-hook-form";

export interface ISummary {
  loading: boolean;
  watch: UseFormWatch<ICheckoutFormValues>;
  responseData: IResponseCheckout;
}
