import { CardTitle } from "@/components/molecules/Checkout/CardTitle";
import { SecondStepComponents } from "@/components/molecules/Checkout/SecondStep";
import { ControlledRadioGroup } from "@/components/molecules/Form/ControlledRadioGroup";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";

import { Badge } from "@/lib/ui/badge";
import { ISecondStep } from ".";

export const SecondStep = ({ control, watch, responseData }: ISecondStep) => {
  const paymentMethod = watch("paymentMethod");

  return (
    <Card className="shadow-sm min-w-full">
      <CardHeader>
        <CardTitle title="Forma de pagamento">
          <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            2
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ControlledRadioGroup
          control={control}
          name="paymentMethod"
          aria-label="Forma de pagamento"
          className="space-y-4"
        >
          <SecondStepComponents.PaymentMethodCard
            variant="pix"
            paymentMethod={paymentMethod}
          >
            <Badge
              variant="secondary"
              className="bg-chart-4 text-white border-cart-4"
            >
              Recomendado
            </Badge>
            <Badge variant="secondary" className="bg-green-500 text-white">
              {responseData?.pix?.fee}% de taxa
            </Badge>
            <Badge variant="outline" className="bg-blue-500 text-white">
              {responseData?.pix?.discount}% desconto
            </Badge>
          </SecondStepComponents.PaymentMethodCard>

          <SecondStepComponents.PaymentMethodCard
            variant="credit"
            paymentMethod={paymentMethod}
          >
            <Badge variant="outline" className="bg-blue-500 text-white">
              até {responseData?.totalInstallments}x
            </Badge>
          </SecondStepComponents.PaymentMethodCard>
        </ControlledRadioGroup>

        {paymentMethod === "credit" && (
          <SecondStepComponents.CreditCardForm
            control={control}
            installmentsOptions={responseData?.installmentsOptions}
          />
        )}

        {paymentMethod === "pix" && <SecondStepComponents.PixInfo />}
      </CardContent>
    </Card>
  );
};
