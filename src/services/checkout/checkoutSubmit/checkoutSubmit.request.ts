import { ICheckoutFormValues } from "@/components/templates/Checkout/Form/Form.interface";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";

interface ICheckoutSubmit {
  setLoading: Dispatch<SetStateAction<boolean>>;
  productId: number;
  data: ICheckoutFormValues;
  reset: UseFormReset<ICheckoutFormValues>;
}

export const checkoutSubmit = async ({
  setLoading,
  productId,
  data,
  reset,
}: ICheckoutSubmit) => {
  try {
    setLoading(true);

    // aqui o certo é simplesmente gerar um token do cartão antes mesmo de fazer o envio para o próprio backend do next
    const response = await fetch("/api/checkout/save", {
      method: "POST",
      body: JSON.stringify({ ...data, productId }),
    });

    if (!response.ok) {
      toast.error("Ocorreu um erro ao finalizar o pagamento");
      return;
    }

    toast.success("Pagamento realizado com sucesso");
    reset();
  } catch (error) {
    console.error(error);

    toast.error("Ocorreu um erro inesperado ao finalizar o pagamento");
  } finally {
    setLoading(false);
  }
};
