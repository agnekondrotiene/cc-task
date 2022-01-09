import { Product } from "types/product";
import { formatCurrency } from "utils";
import { ProductInfo } from "../ProductInfo";

type Props = {
  product: Product;
};

export const CheckoutSummary = ({ product }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-solid border-Gray5 pb-[30px]">
        <ProductInfo
          image={product.image}
          name={product.name}
          quantity={product.quantity}
          size="large"
        />
        <div>
          <span className="font-roboto not-italic font-normal text-normal leading-[26px] text-Black">
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-roboto font-normal not-italic leading-[24px] text-normal2 text-Gray3 pt-[24px] pb-[27px]">
          Total
        </span>
        <div className="flex items-end gap-[5px] pt-[17px] pb-[30px]">
          <span className="font-roboto not-italic font-medium leading-[16px] text-small1 text-Black">
            USD
          </span>
          <span className="font-roboto not-italic font-black leading-[28px] text-large1 text-Gray1">
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
