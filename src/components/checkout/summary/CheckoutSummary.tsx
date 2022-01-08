import { ReactComponent as Iconx3 } from "assets/productIconx3.svg";

export const CheckoutSummary = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-solid border-Gray5 pb-[30px]">
        <div className="flex justify-between items-center gap-[15px]">
          <Iconx3 />
          <p className="font-roboto font-light not-italic text-normal text-Gray1 leading-[24px]">
            <strong className="font-black">3x</strong> CoreProduct®
          </p>
        </div>
        <div>
          <span className="font-roboto not-italic font-normal text-normal leading-[26px] text-Black">
            $39.99
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
            $39.99
          </span>
        </div>
      </div>
    </div>
  );
};
