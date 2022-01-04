import { ReactComponent as SaveIcon } from "assets/guaranteeSaveIcon.svg";

export const GuaranteeBox = () => {
  return (
    <div className="w-full p-[24px] border border-solid border-[#E0E0E0] rounded-[3px] box-border">
      <div className="flex justify-start items-center">
        <SaveIcon />
        <h3 className="ml-[25px] text-medium16 font-black">
          60-DAY FIT GUARANTEE
        </h3>
      </div>

      <p className="mt-[20px] font-roboto text-normal14 text-[#828282]">
        Either it doesn’t fit or simply you don’t like it You can return it
        within 60 days for a full refund. No questions asked.
      </p>
    </div>
  );
};
