import { FieldErrors, FieldValues } from "react-hook-form";

export interface IFormErrorMessage<GFormValues extends FieldValues> {
  errors: FieldErrors<GFormValues>;
  name: string;
}
