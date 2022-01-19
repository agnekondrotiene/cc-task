import React from "react";
import { formatCurrency } from "utils";

type Props = {
  products: number[];
};

export const Total = ({ products }: Props) => {
  const reducer = (previousValue: number, currentValue: number) =>
    previousValue + currentValue;
  const totalPrice = products.reduce(reducer);

  return (
    <div className="flex justify-between items-baseline">
      <span className="font-sofiapro font-normal not-italic leading-[24px] text-normal2 text-Gray3">
        Total
      </span>
      <div className="flex items-end gap-[10px]">
        <span className="font-sofiapro not-italic font-normal leading-[16px] text-small1 text-Black">
          USD
        </span>
        <span className="font-sofiapro not-italic font-normal leading-[24px] text-large1 text-Gray1">
          {formatCurrency(products ? totalPrice : 0)}
        </span>
      </div>
    </div>
  );
};
