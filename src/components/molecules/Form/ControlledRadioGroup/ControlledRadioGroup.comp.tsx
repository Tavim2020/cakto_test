import { FormErrorMessage } from "@/components/atoms/Form/FormErrorMessage";
import { RadioGroup } from "@/lib/ui/radio-group";
import { Controller, FieldValues } from "react-hook-form";
import { IControlledRadioGroup } from ".";

export const ControlledRadioGroup = <GFormValues extends FieldValues>({
  control,
  name,
  children,
  "aria-label": ariaLabel,
  ...props
}: IControlledRadioGroup<GFormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <RadioGroup
          {...props}
          value={field.value}
          onValueChange={field.onChange}
          aria-label={ariaLabel}
        >
          {children}
          <FormErrorMessage errors={errors} name={name} />
        </RadioGroup>
      )}
    />
  );
};
