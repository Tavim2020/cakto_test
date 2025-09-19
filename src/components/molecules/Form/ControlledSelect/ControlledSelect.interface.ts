import { Control, FieldValues, Path } from "react-hook-form";

export interface IOptions {
  value: string;
  label: string;
}

export interface IControlledSelect<GFormValues extends FieldValues> {
  control: Control<GFormValues>;
  label: string;
  name: Path<GFormValues>;
  options?: IOptions[];
  required?: boolean;
}
