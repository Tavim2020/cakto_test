import valid from "card-validator";
import { cpf } from "cpf-cnpj-validator";
import { z } from "zod";

export const checkoutSchema = z
  .object({
    name: z
      .string()
      .min(5, { message: "O nome deve ter ao menos 5 caracteres" })
      .max(100, { message: "O nome deve ter no máximo 100 caracteres" }),

    email: z
      .string()
      .email({ message: "E-mail inválido" })
      .max(100, { message: "O e-mail deve ter no máximo 100 caracteres" }),

    cpf: z
      .string()
      .min(14, { message: "O CPF deve ter ao menos 14 caracteres" })
      .max(14, { message: "O CPF deve ter no máximo 14 caracteres" })
      .refine((value) => cpf.isValid(value), { message: "CPF inválido" }),

    phone: z
      .string()
      .min(14, { message: "O telefone deve ter ao menos 14 caracteres" })
      .max(15, { message: "O telefone deve ter no máximo 15 caracteres" }),

    newsletter: z.boolean(),

    paymentMethod: z.enum(["pix", "credit"], {
      message: "Escolha uma forma de pagamento",
    }),

    installments: z.string().optional(),
    creditCardNumber: z.string().optional(),
    creditCardHolderName: z.string().optional(),
    creditCardValidateDate: z.string().optional(),
    creditCardCvv: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "pix") return;

    const installments = Number(data?.installments);

    if (
      !data.installments ||
      isNaN(installments) ||
      (installments < 1 && installments > 12)
    ) {
      ctx.addIssue({
        path: ["installments"],
        code: z.ZodIssueCode.custom,
        message: "Número de parcelas inválido",
      });
    }

    if (!valid.number(data.creditCardNumber).isValid) {
      ctx.addIssue({
        path: ["creditCardNumber"],
        code: z.ZodIssueCode.custom,
        message: "Número do cartão inválido",
      });
    }

    if (!valid.cardholderName(data.creditCardHolderName).isValid) {
      ctx.addIssue({
        path: ["creditCardHolderName"],
        code: z.ZodIssueCode.custom,
        message: "Nome do titular é obrigatório",
      });
    }

    if (!valid.expirationDate(data.creditCardValidateDate).isValid) {
      ctx.addIssue({
        path: ["creditCardValidateDate"],
        code: z.ZodIssueCode.custom,
        message: "Data de validade inválida",
      });
    }

    if (!valid.cvv(data.creditCardCvv).isValid) {
      ctx.addIssue({
        path: ["creditCardCvv"],
        code: z.ZodIssueCode.custom,
        message: "CVV inválido",
      });
    }
  });
