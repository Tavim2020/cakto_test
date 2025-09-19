import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import { useMemo } from "react";

import { Separator } from "@/lib/ui/separator";

import { CardTitle } from "@/components/molecules/Checkout/CardTitle";
import { SummaryComponents } from "@/components/molecules/Checkout/Summary";
import { Gift } from "lucide-react";
import { ISummary } from ".";

export const Summary = ({ loading, watch, responseData }: ISummary) => {
  const paymentMethod = watch("paymentMethod");
  const installments = watch("installments");

  const installmentsOption = useMemo(
    () =>
      responseData?.installmentsOptions?.find(
        (option) => option.value === installments
      ),
    [responseData, installments]
  );

  return (
    <Card className="shadow-lg min-w-full">
      <CardHeader className="bg-muted/30">
        <CardTitle title="Resumo do pedido">
          <Gift className="h-5 w-5 text-primary" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <SummaryComponents.Product
          productName={responseData?.productName}
          originalPrice={responseData?.originalPrice}
          currentPrice={responseData?.currentPrice}
        />

        <Separator />

        <div className="space-y-3">
          <SummaryComponents.SubTotal
            currentPrice={responseData?.currentPrice}
          />

          {paymentMethod === "credit" && installmentsOption && (
            <SummaryComponents.Fee feeValue={installmentsOption.feeValue} />
          )}

          {paymentMethod === "pix" && (
            <SummaryComponents.Discount {...responseData?.pix} />
          )}

          <Separator />

          <SummaryComponents.Total
            paymentMethod={paymentMethod}
            valueWithDiscount={responseData?.pix?.valueWithDiscount}
            installments={installments}
            installmentsOption={installmentsOption}
          />

          {paymentMethod === "credit" &&
            installments !== "1" &&
            installmentsOption && (
              <SummaryComponents.InstallmentInfo
                label={installmentsOption.label}
              />
            )}
        </div>

        <SummaryComponents.SecurityInfo />

        <SummaryComponents.Button
          paymentMethod={paymentMethod}
          disabled={loading}
        />

        <SummaryComponents.Footer />
      </CardContent>
    </Card>
  );
};
