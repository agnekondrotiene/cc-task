import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export const OrderDetailsSection = ({ title, children }: Props) => {
  return (
    <div className="w-full bg-B1 mb-[30px]">
      <h2 className="text-small1 font-semibold not-italic leading-[24px] tracking-[.07em] uppercase text-Grey1 mb-[10px]">
        {title}
      </h2>
      <div className="bg-white pt-[30px] px-[25px] pb-[60px] border border-solid border-B2 rounded-[6px]">
        {children}
      </div>
    </div>
  );
};
