import { CheckboxProps } from "@radix-ui/react-checkbox";
import { RefAttributes } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface IControlledCheckbox<GFormValues extends FieldValues>
  extends Omit<
    CheckboxProps & RefAttributes<HTMLButtonElement>,
    "name" | "id"
  > {
  control: Control<GFormValues>;
  label: string;
  name: Path<GFormValues>;
}
