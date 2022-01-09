import { Button } from "components/Button";
import { useState } from "react";
import { VariantsHeader } from "./VariantsHeader";
import { VariantsList } from "./VariantsList";
import { products } from "fake-data";

export const CheckoutVariants = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setIsExpanded((current) => !current);
  };

  return (
    <div>
      <VariantsHeader
        image="assets/images/leggings.png"
        name="CoreProduct"
        quantity={1}
        isExpanded={isExpanded}
        onClick={handleExpandClick}
      />

      {isExpanded && (
        <>
          <hr className="border-Gray6 my-[16px]" />
          <VariantsList products={products} />
          <div className="flex justify-end mt-[24px]">
            <Button title="SAVE CHANGES" />
          </div>
        </>
      )}
    </div>
  );
};
