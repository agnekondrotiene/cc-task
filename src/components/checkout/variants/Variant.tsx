import { ReactComponent as Iconx1 } from "assets/productIconx1.svg";

export const Variant = () => {
  return (
    <div className="w-[591px] flex justify-between items-center pr-[6px]">
      <div className="flex justify-between items-center gap-[15px]">
        <Iconx1 />
        <p className="font-roboto font-light not-italic text-small2 text-Gray1 leading-[24px]">
          <strong className="font-black">3x</strong> CoreProduct®
        </p>
      </div>
      <div>
        <span className="font-roboto not-italic font-black text-small2 leading-[24px] text-Gray1">
          $39.99
        </span>
      </div>
    </div>
  );
};
