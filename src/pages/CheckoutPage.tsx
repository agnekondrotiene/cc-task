import { OrderDetailsSection } from "components/checkout/OrderDetailsSection";
import { GuaranteeBox } from "components/checkout/summary/GuaranteeBox";
import { CheckoutSummary } from "components/checkout/summary/CheckoutSummary";
import { CheckoutVariants } from "components/checkout/variants/CheckoutVariants";
import { useState } from "react";
import { products } from "fake-data";

export const CheckoutPage = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    products[0].id
  );

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  if (!selectedProduct) {
    return null;
  }

  return (
    <div className={`grid grid-cols-[1.45fr_1fr]`}>
      <div className="w-full pt-[57px] px-[92px] pb-[92px]">
        <div className="w-[640px] ml-auto">
          <OrderDetailsSection title="variants">
            <CheckoutVariants
              selectedProductId={selectedProductId}
              selectProduct={setSelectedProductId}
            />
          </OrderDetailsSection>

          <OrderDetailsSection title="payment and shipping">
            kita sekcija
          </OrderDetailsSection>
        </div>
      </div>
      <div className="w-full h-screen sticky top-0 bg-white">
        <div className="w-[588px] mr-auto pl-[94px] pr-[120px] pt-[88px]">
          <div className="w-full ">
            <CheckoutSummary product={selectedProduct} />
            <GuaranteeBox />
          </div>
        </div>
      </div>
    </div>
  );
};
