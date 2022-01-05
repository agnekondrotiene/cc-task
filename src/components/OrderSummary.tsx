import { GuaranteeBox } from "./GuaranteeBox";
import { TotalInfo } from "./TotalInfo";

export const OrderSummary = () => {
  return (
    <div className="w-[588px] h-100vh pl-[94px] pr-[120px] pt-[88px]">
      <TotalInfo />
      <GuaranteeBox />
    </div>
  );
};
