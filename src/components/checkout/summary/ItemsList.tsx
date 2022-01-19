import React from "react";
import { Product } from "types/product";
import { Item } from "./Item";

type Props = {
  products: Product[];
  onProductListChange: (products: Product[]) => void;
};

export const ItemsList = ({ products, onProductListChange }: Props) => {
  const handleProductRemove = (id: string) => {
    onProductListChange(products.filter((product) => product.id !== id));
  };

  return (
    <div className="mb-[20px]">
      {products.map((item) => {
        return (
          <Item
            key={item.id + item.name}
            product={item}
            handleRemove={handleProductRemove}
          />
        );
      })}
    </div>
  );
};
