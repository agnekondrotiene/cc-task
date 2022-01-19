import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  heading: string;
  subheading?: string;
}>;

export const Section = ({ heading, subheading, children }: Props) => {
  return (
    <div className="mb-[30px]">
      <h2 className="font-worksans not-italic font-semibold text-small2 leading-[20px]">
        {heading}
      </h2>
      <h3 className="font-sofiapro not-italic font-normal text-small1 text-Gray4 leading-[16px] mb-[16px]">
        {subheading}
      </h3>
      {children}
    </div>
  );
};
