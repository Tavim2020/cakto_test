import { memo } from "react";
import { IProduct } from ".";

export const Product = memo(
  ({ originalPrice, productName, currentPrice }: IProduct) => {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Produtos</h3>

        <div className="flex flex-col bg-muted/20 rounded-lg">
          <small className="line-through text-right">{originalPrice}</small>
          <div className="flex-1 flex items-center justify-between gap-6">
            <h5 className="text-sm font-semibold">{productName}</h5>
            <p className="font-bold text-lg">{currentPrice}</p>
          </div>
        </div>
      </div>
    );
  }
);

Product.displayName = "Product";
