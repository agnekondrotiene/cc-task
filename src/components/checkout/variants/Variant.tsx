import { ProductInfo } from "../ProductInfo";

export const Variant = () => {
  return (
    <div className="flex justify-between items-center">
      <ProductInfo
        image="assets/images/leggings.png"
        name="CoreProduct"
        quantity={1}
      />
      <div>
        <span className="font-roboto not-italic font-black text-small2 leading-[24px] text-Gray1">
          $39.99
        </span>
      </div>
    </div>
  );
};
