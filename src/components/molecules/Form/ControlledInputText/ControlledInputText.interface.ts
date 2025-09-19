import { ComponentProps } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface IControlledInputText<GFormValues extends FieldValues>
  extends Omit<ComponentProps<"input">, "name" | "id" | "value"> {
  control: Control<GFormValues>;
  label: string;
  name: Path<GFormValues>;
  format?: (value: string) => string;
}
