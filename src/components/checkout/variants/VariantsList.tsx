import { Product } from "types/product";
import { formatCurrency } from "utils";
import { ProductInfo } from "../ProductInfo";

type Props = {
  products: Product[];
  activeProductId?: string;
  onClick?: (id: string) => void;
};

export const VariantsList = ({ products, activeProductId, onClick }: Props) => {
  return (
    <div className="flex flex-col gap-y-[7px]">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex justify-between items-center"
            onClick={() => {
              if (onClick) {
                onClick(product.id);
              }
            }}
          >
            <ProductInfo
              image={product.image}
              name={product.name}
              quantity={product.quantity}
              isActive={activeProductId === product.id}
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
