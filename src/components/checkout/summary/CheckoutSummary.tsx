import { products as productsData } from "fake-data";
import { useState } from "react";
import { Product } from "types/product";
import { ItemsList } from "./ItemsList";
import { Total } from "./Total";

export const CheckoutSummary = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const productPrices = products.map((product) => product.price);

  return (
    <div>
      <ItemsList products={products} onProductListChange={setProducts} />
      <Total products={productPrices} />
    </div>
  );
};
