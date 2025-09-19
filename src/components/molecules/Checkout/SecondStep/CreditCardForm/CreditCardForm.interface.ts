import { IOptions } from "@/components/molecules/Form/ControlledSelect";
import { ICheckoutFormValues } from "@/components/templates/Checkout/Form/Form.interface";
import { Control } from "react-hook-form";

export interface ICreditCardForm {
  control: Control<ICheckoutFormValues>;
  installmentsOptions?: IOptions[];
}
