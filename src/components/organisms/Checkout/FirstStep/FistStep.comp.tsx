import { CardTitle } from "@/components/molecules/Checkout/CardTitle";
import { ControlledCheckbox } from "@/components/molecules/Form/ControlledCheckbox";
import { ControlledInputText } from "@/components/molecules/Form/ControlledInputText";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import { cpfFormat } from "@/utils/format/cpf";
import { justLettersAndSpacesFormat } from "@/utils/format/letters";
import { phoneFormat } from "@/utils/format/phone";
import { memo } from "react";
import { IFistStep } from ".";

export const FistStep = memo(({ control }: IFistStep) => {
  return (
    <Card className="shadow-sm min-w-full">
      <CardHeader>
        <CardTitle title="Dados pessoais">
          <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            1
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ControlledInputText
            control={control}
            label="Nome completo"
            name="name"
            placeholder="João Silva"
            format={justLettersAndSpacesFormat}
            minLength={5}
            maxLength={100}
            required
          />

          <ControlledInputText
            control={control}
            label="E-mail"
            name="email"
            type="email"
            placeholder="joao@email.com"
            maxLength={100}
            required
          />

          <ControlledInputText
            control={control}
            label="CPF"
            name="cpf"
            placeholder="000.000.000-00"
            format={cpfFormat}
            minLength={14}
            maxLength={14}
            required
          />

          <ControlledInputText
            control={control}
            label="Telefone"
            name="phone"
            placeholder="(11) 99999-9999"
            format={phoneFormat}
            minLength={14}
            maxLength={15}
            required
          />
        </div>

        <ControlledCheckbox
          control={control}
          label="Quero receber ofertas exclusivas e novidades por e-mail"
          name="newsletter"
        />
      </CardContent>
    </Card>
  );
});

FistStep.displayName = "FistStep";
