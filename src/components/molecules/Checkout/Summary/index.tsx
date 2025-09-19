import dynamic from "next/dynamic";
import { Button } from "./Button";
import { Discount } from "./Discount";
import { FeeSkeleton } from "./Fee";
import { Footer } from "./Footer";
import { InstallmentInfoSkeleton } from "./InstallmentInfo";
import { Product } from "./Product";
import { SecurityInfo } from "./SecurityInfo";
import { SubTotal } from "./SubTotal";
import { Total } from "./Total";

const Fee = dynamic(async () => (await import("./Fee")).Fee, {
  ssr: false,
  loading: () => <FeeSkeleton />,
});

const InstallmentInfo = dynamic(
  async () => (await import("./InstallmentInfo")).InstallmentInfo,
  {
    ssr: false,
    loading: () => <InstallmentInfoSkeleton />,
  }
);

export const SummaryComponents = {
  Button,
  Discount,
  Fee,
  Footer,
  InstallmentInfo,
  Product,
  SecurityInfo,
  SubTotal,
  Total,
};
