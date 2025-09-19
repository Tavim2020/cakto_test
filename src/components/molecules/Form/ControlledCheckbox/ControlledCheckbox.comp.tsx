import { FormErrorMessage } from "@/components/atoms/Form/FormErrorMessage";
import { Checkbox } from "@/lib/ui/checkbox";
import { Label } from "@/lib/ui/label";
import { Controller, FieldValues } from "react-hook-form";
import { IControlledCheckbox } from ".";

export const ControlledCheckbox = <GFormValues extends FieldValues>({
  control,
  label,
  name,
  ...props
}: IControlledCheckbox<GFormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <fieldset>
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              {...props}
              {...field}
              id={name}
              name={name}
              className="border-primary"
            />

            <Label
              htmlFor={name}
              className="text-sm text-muted-foreground cursor-pointer"
            >
              {label}
            </Label>
          </div>
          <FormErrorMessage errors={errors} name={name} />
        </fieldset>
      )}
    />
  );
};
