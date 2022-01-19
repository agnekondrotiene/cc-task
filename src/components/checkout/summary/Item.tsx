import { products } from "fake-data";
import React from "react";
import { Product } from "types/product";
import { formatCurrency } from "utils";
import { ProductInfo } from "../ProductInfo";

type Props = {
  product: Product;
  handleRemove: (id: string) => void;
};

export const Item = ({ product, handleRemove }: Props) => {
  return (
    <div className="border-b border-solid border-Gray5 mb-[20px]">
      <div className="flex justify-between items-center pb-[15px]">
        <div>
          <ProductInfo
            image={product.image}
            name={product.name}
            quantity={product.quantity}
            onRemove={() => handleRemove(product.id)}
            size="large"
          />
        </div>

        <div>
          <span className="font-sofiapro not-italic font-normal text-normal leading-[26px] text-Black">
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
