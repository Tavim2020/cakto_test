"use client";

import { FistStep } from "@/components/organisms/Checkout/FirstStep";
import { SecondStepSkeleton } from "@/components/organisms/Checkout/SecondStep";
import { SummarySkeleton } from "@/components/organisms/Checkout/Summary";
import { checkoutSubmit } from "@/services/checkout/checkoutSubmit/checkoutSubmit.request";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ICheckoutForm, ICheckoutFormValues } from ".";
import { checkoutSchema } from "./schema/checkoutSchema";

const SecondStep = dynamic(
  async () =>
    (await import("@/components/organisms/Checkout/SecondStep")).SecondStep,
  {
    ssr: false,
    loading: () => <SecondStepSkeleton />,
  }
);

const Summary = dynamic(
  async () => (await import("@/components/organisms/Checkout/Summary")).Summary,
  {
    ssr: false,
    loading: () => <SummarySkeleton />,
  }
);

export const Form = ({ responseData }: ICheckoutForm) => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, watch, reset } = useForm<ICheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      phone: "",
      newsletter: false,
      paymentMethod: "pix",
      installments: undefined,
      creditCardNumber: "",
      creditCardHolderName: "",
      creditCardValidateDate: "",
      creditCardCvv: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(
        async (data) =>
          await checkoutSubmit({
            productId: responseData.productId,
            setLoading,
            data,
            reset,
          })
      )}
      className="grid gap-8 lg:grid-cols-3"
    >
      <section className="space-y-8 lg:col-span-2">
        <FistStep control={control} />

        <SecondStep
          control={control}
          watch={watch}
          responseData={responseData}
        />
      </section>

      <section className="lg:col-span-1">
        <div className="lg:sticky lg:top-8">
          <Summary
            loading={loading}
            watch={watch}
            responseData={responseData}
          />
        </div>
      </section>
    </form>
  );
};
