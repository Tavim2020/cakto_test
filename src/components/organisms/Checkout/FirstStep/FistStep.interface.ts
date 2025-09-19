import { ICheckoutFormValues } from "@/components/templates/Checkout/Form/Form.interface";
import { Control } from "react-hook-form";

export interface IFistStep {
  control: Control<ICheckoutFormValues>;
}
