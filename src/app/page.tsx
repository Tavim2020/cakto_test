import { Footer } from "@/components/molecules/Checkout/Footer";
import { Error } from "@/components/pages/Error";
import { Form } from "@/components/templates/Checkout/Form";
import { getCheckoutInfo } from "@/services/checkout/getCheckoutInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Cakto - Curso de Marketing Digital 2025",
  description:
    "Finalize sua compra do Curso de Marketing Digital 2025 de forma rápida e segura",
  keywords: ["checkout", "cakto", "marketing digital", "curso online"],
  authors: [{ name: "Cakto" }],
  robots: "index, follow",
  icons: [
    "https://tse4.mm.bing.net/th/id/OIP.jJUL84nu6YbnpZCdCungEwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  ],
  openGraph: {
    title: "Checkout Cakto - Curso de Marketing Digital 2025",
    description:
      "Finalize sua compra do Curso de Marketing Digital 2025 de forma rápida e segura",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP.jJUL84nu6YbnpZCdCungEwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
  },
};

const CheckoutPage = async () => {
  const response = await getCheckoutInfo();

  if (!response.isSuccess) return <Error error={response.error} />;

  return (
    <main className="container flex flex-col gap-8">
      <Form responseData={response.data} />

      <Footer />
    </main>
  );
};

export default CheckoutPage;
