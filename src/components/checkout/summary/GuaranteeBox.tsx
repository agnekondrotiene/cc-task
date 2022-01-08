import { ReactComponent as SaveIcon } from "assets/guaranteeSaveIcon.svg";

export const GuaranteeBox = () => {
  return (
    <div className="w-full p-[24px] border border-solid border-Gray5 rounded-[3px] box-border">
      <div className="flex justify-start items-center">
        <SaveIcon />
        <h3 className="ml-[25px] text-normal font-black leading-[24px]">
          60-DAY FIT GUARANTEE
        </h3>
      </div>

      <p className="mt-[20px] font-roboto font-normal text-small2 not-italic leading-[20px] text-Gray3">
        Either it doesn’t fit or simply you don’t like it You can return it
        within 60 days for a full refund. No questions asked.
      </p>
    </div>
  );
};
