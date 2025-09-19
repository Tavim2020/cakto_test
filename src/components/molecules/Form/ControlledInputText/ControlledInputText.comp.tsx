import { FormErrorMessage } from "@/components/atoms/Form/FormErrorMessage";
import { Required } from "@/components/atoms/Form/Required";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Controller, FieldValues } from "react-hook-form";
import { IControlledInputText } from ".";

export const ControlledInputText = <GFormValues extends FieldValues>({
  control,
  label,
  name,
  required,
  format = (value) => value,
  ...props
}: IControlledInputText<GFormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor={name}>
            {label}
            {required && <Required />}
          </Label>
          <Input
            {...props}
            {...field}
            required={required}
            id={name}
            name={name}
            onChange={(e) => field.onChange(format(e.target.value))}
          />
          <FormErrorMessage errors={errors} name={name} />
        </fieldset>
      )}
    />
  );
};
