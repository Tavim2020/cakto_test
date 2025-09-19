import {
  ErrorMessage,
  FieldValuesFromFieldErrors,
} from "@hookform/error-message";
import { FieldErrors, FieldName, FieldValues } from "react-hook-form";
import { IFormErrorMessage } from ".";

export const FormErrorMessage = <GFormValues extends FieldValues>({
  errors,
  name,
}: IFormErrorMessage<GFormValues>) => {
  return (
    <ErrorMessage
      errors={errors}
      name={
        name as FieldName<FieldValuesFromFieldErrors<FieldErrors<GFormValues>>>
      }
      render={({ message }) => (
        <p className="text-destructive text-xs">{message}</p>
      )}
    />
  );
};
