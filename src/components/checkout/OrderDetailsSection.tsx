import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export const OrderDetailsSection = ({ title, children }: Props) => {
  return (
    <div className="w-full bg-B1 mb-[30px]">
      <h2 className="font-roboto text-small1 font-bold leading-[24px] tracking-[.07em] uppercase text-M1 mb-[10px]">
        {title}
      </h2>
      <div className="bg-white py-[18px] px-[24px] border border-solid border-B2 rounded-[6px]">
        {children}
      </div>
    </div>
  );
};
