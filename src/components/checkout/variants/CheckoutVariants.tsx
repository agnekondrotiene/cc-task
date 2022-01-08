import { useState } from "react";
import { VariantsHeader } from "./VariantsHeader";
import { VariantsList } from "./VariantsList";

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

      {isExpanded && <VariantsList />}
    </div>
  );
};
