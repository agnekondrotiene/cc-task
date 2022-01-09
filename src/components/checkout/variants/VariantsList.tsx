import { Product } from "types/product";
import { formatCurrency } from "utils";
import { ProductInfo } from "../ProductInfo";

type Props = {
  products: Product[];
};

export const VariantsList = ({ products }: Props) => {
  return (
    <div className="flex flex-col gap-y-[7px]">
      {products.map((product) => {
        return (
          <div className="flex justify-between items-center">
            <ProductInfo
              image={product.image}
              name={product.name}
              quantity={product.quantity}
            />
            <span className="font-roboto not-italic font-black text-small2 leading-[24px] text-Gray1">
              {formatCurrency(product.price)}
            </span>
          </div>
        );
      })}
    </div>
  );
};
