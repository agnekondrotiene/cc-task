import React from "react";
import { ReactComponent as Logo } from "assets/logoipsum.svg";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-M1 py-[20px] pl-[170px] pr-[75px] font-sofiapro text-White text-small1 font-normal leading-[15px]">
      <div className="flex justify-between items-center gap-x-[32px] ">
        <Logo />
        <h2>Terms of Service</h2>
        <h2>Privacy Policy</h2>
        <h2>Returns</h2>
        <h2>FAQ</h2>
      </div>
      <div>
        <h2>© 2022 Logoipsum. All rights reserved</h2>
      </div>
    </div>
  );
};
