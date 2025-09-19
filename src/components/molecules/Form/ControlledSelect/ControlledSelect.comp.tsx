import { FormErrorMessage } from "@/components/atoms/Form/FormErrorMessage";
import { Required } from "@/components/atoms/Form/Required";
import { Label } from "@/lib/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { Controller, FieldValues } from "react-hook-form";
import { IControlledSelect } from ".";

export const ControlledSelect = <GFormValues extends FieldValues>({
  control,
  name,
  label,
  options = [],
  required,
}: IControlledSelect<GFormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={undefined}
      render={({ field, formState: { errors } }) => (
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor={name}>
            {label}
            {required && <Required />}
          </Label>
          <Select
            {...field}
            value={field.value || undefined}
            onValueChange={field.onChange}
            required={required}
            name={name}
          >
            <SelectTrigger id={name} className="w-full md:w-max">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormErrorMessage errors={errors} name={name} />
        </fieldset>
      )}
    />
  );
};
