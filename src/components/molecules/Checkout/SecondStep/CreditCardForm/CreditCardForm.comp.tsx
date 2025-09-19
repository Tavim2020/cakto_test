import { ControlledInputText } from "@/components/molecules/Form/ControlledInputText";
import { ControlledSelect } from "@/components/molecules/Form/ControlledSelect";
import {
  creditCardHolderFormat,
  creditCardNumberFormat,
  creditCardValidateDateFormat,
} from "@/utils/format/creditCard";
import { justNumberFormat } from "@/utils/format/number";
import { memo } from "react";
import { ICreditCardForm } from ".";

export const CreditCardForm = memo(
  ({ control, installmentsOptions }: ICreditCardForm) => {
    return (
      <div className="mt-6 space-y-4 p-6 bg-blue-50/50 rounded-lg border border-blue-200">
        <ControlledSelect
          control={control}
          label="Escolha o parcelamento"
          name="installments"
          options={installmentsOptions}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ControlledInputText
            control={control}
            label="Número do cartão"
            name="creditCardNumber"
            placeholder="0000 0000 0000 0000"
            format={creditCardNumberFormat}
            minLength={19}
            maxLength={19}
            required
          />

          <ControlledInputText
            control={control}
            label="Nome no cartão"
            name="creditCardHolderName"
            placeholder="João Silva"
            format={creditCardHolderFormat}
            minLength={5}
            maxLength={100}
            required
          />

          <ControlledInputText
            control={control}
            label="Validade"
            name="creditCardValidateDate"
            placeholder="MM/AA"
            format={creditCardValidateDateFormat}
            minLength={5}
            maxLength={5}
            required
          />

          <ControlledInputText
            control={control}
            label="CVV"
            name="creditCardCvv"
            placeholder="123"
            format={justNumberFormat}
            minLength={3}
            maxLength={3}
            required
          />
        </div>
      </div>
    );
  }
);

CreditCardForm.displayName = "CreditCardForm";
