import { OrderDetailsSection } from "components/checkout/OrderDetailsSection";
import { GuaranteeBox } from "components/checkout/summary/GuaranteeBox";
import { CheckoutSummary } from "components/checkout/summary/CheckoutSummary";
import { VariantsDetail } from "components/checkout/variants/VariantsDetail";

export const CheckoutPage = () => {
  return (
    <div className={`grid grid-cols-[1.45fr_1fr]`}>
      <div className="w-full pt-[57px] px-[92px] pb-[92px]">
        <div className="w-[640px] ml-auto">
          <OrderDetailsSection title="variants">
            <VariantsDetail />
          </OrderDetailsSection>

          <OrderDetailsSection title="payment and shipping">
            kita sekcija
          </OrderDetailsSection>
        </div>
      </div>
      <div className="w-full h-screen sticky top-0 bg-white">
        <div className="w-[588px] mr-auto pl-[94px] pr-[120px] pt-[88px]">
          <div className="w-full ">
            <CheckoutSummary />
            <GuaranteeBox />
          </div>
        </div>
      </div>
    </div>
  );
};
