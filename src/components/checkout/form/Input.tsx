import React from "react";

type Props = {
  placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
  return (
    <div className="border border-solid rounded-[3px] border-Gray5 box-border p-[12px] w-full bg-White  ">
      <input
        placeholder={placeholder}
        className="font-sofiapro font-[400] text-small2 text-Gray4 leading-[24px] focus:outline-none w-full"
      ></input>
    </div>
  );
};
