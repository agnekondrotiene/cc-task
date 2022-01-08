import React from "react";
import { VariantsHeader } from "./VariantsHeader";
import { VariantsList } from "./VariantsList";

export const CheckoutVariants = () => {
  return (
    <div>
      <VariantsHeader
        image="assets/images/leggings.png"
        name="CoreProduct"
        quantity={1}
      />
      {/* <VariantsList /> */}
    </div>
  );
};
