import { Button } from "components/Button";
import { useState } from "react";
import { VariantsHeader } from "./VariantsHeader";
import { VariantsList } from "./VariantsList";
import { products } from "fake-data";

type Props = {
  selectedProductId: string;
  selectProduct: (id: string) => void;
};

export const CheckoutVariants = ({
  selectedProductId,
  selectProduct,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [activeProductId, setActiveProductId] =
    useState<string>(selectedProductId);

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );
  const handleExpandClick = () => {
    setIsExpanded((current) => !current);
  };

  const handleActiveProductChange = (id: string) => {
    setActiveProductId(id);
  };

  const handleSaveChange = () => {
    selectProduct(activeProductId);
    setIsExpanded(false);
  };

  if (!selectedProduct) {
    return null;
  }

  return (
    <div>
      <VariantsHeader
        image={selectedProduct.image}
        name={selectedProduct.name}
        quantity={selectedProduct.quantity}
        isExpanded={isExpanded}
        onClick={handleExpandClick}
      />

      {isExpanded && (
        <>
          <hr className="border-Gray6 my-[16px]" />
          <VariantsList
            products={products}
            activeProductId={activeProductId}
            onClick={handleActiveProductChange}
          />
          <div className="flex justify-end mt-[24px]">
            <Button title="SAVE CHANGES" onClick={handleSaveChange} />
          </div>
        </>
      )}
    </div>
  );
};
