import { ReactNode } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface IControlledRadioGroup<GFormValues extends FieldValues> {
  className?: string;

  control: Control<GFormValues>;
  name: Path<GFormValues>;
  "aria-label": string;
  children: ReactNode;
}
